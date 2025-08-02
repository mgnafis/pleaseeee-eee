/**
 * Google Apps Script untuk Sistem Absensi QR Code
 * 
 * Script ini akan menerima data dari web admin dan menyimpannya ke Google Sheets
 * dengan validasi absensi harian (1 kali per hari per siswa)
 * 
 * Setup:
 * 1. Buka Google Apps Script (script.google.com)
 * 2. Buat project baru
 * 3. Ganti kode default dengan script ini
 * 4. Deploy sebagai web app
 * 5. Copy URL deployment ke web admin
 */

// ID Google Sheets - GANTI DENGAN ID SPREADSHEET ANDA
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';

// Nama sheet untuk data absensi
const SHEET_NAME = 'Absensi';

/**
 * Fungsi utama yang menangani HTTP POST request dari web admin
 */
function doPost(e) {
  try {
    // Parse data JSON dari request
    const data = JSON.parse(e.postData.contents);
    
    // Validasi data yang diterima
    if (!data.nama || !data.kelas || !data.hari || !data.waktu) {
      return ContentService
        .createTextOutput(JSON.stringify({
          success: false,
          message: 'Data tidak lengkap'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Proses absensi
    const result = processAttendance(data);
    
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    Logger.log('Error in doPost: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Terjadi kesalahan server: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Fungsi untuk menangani HTTP GET request (untuk testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Sistem Absensi QR Code API',
      status: 'active',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Memproses data absensi dan menyimpan ke Google Sheets
 */
function processAttendance(data) {
  try {
    // Buka spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    // Buat sheet jika belum ada
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      
      // Tambahkan header
      const headers = ['NO', 'NAMA', 'KELAS', 'WAKTU', 'HARI ABSEN'];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format header
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
    }
    
    // Dapatkan tanggal hari ini dalam format YYYY-MM-DD
    const today = new Date();
    const todayString = Utilities.formatDate(today, Session.getScriptTimeZone(), 'yyyy-MM-dd');
    
    // Cek apakah siswa sudah absen hari ini
    const existingData = sheet.getDataRange().getValues();
    const alreadyAttended = existingData.some((row, index) => {
      if (index === 0) return false; // Skip header
      
      const rowName = row[1]; // Kolom NAMA
      const rowDate = row[4]; // Kolom HARI ABSEN
      
      // Ekstrak tanggal dari string hari absen
      const rowDateString = extractDateFromDayString(rowDate);
      
      return rowName === data.nama && rowDateString === todayString;
    });
    
    if (alreadyAttended) {
      return {
        success: false,
        message: `${data.nama} sudah melakukan absensi hari ini`,
        duplicate: true
      };
    }
    
    // Tambahkan data baru
    const lastRow = sheet.getLastRow();
    const newRowNumber = lastRow + 1;
    const no = lastRow; // Nomor urut (header di row 1, jadi data mulai dari row 2)
    
    // Format data untuk disimpan
    const rowData = [
      no,
      data.nama,
      data.kelas,
      data.waktu,
      `${data.hari}, ${todayString}`
    ];
    
    // Tulis data ke sheet
    sheet.getRange(newRowNumber, 1, 1, rowData.length).setValues([rowData]);
    
    // Format baris baru
    const newRowRange = sheet.getRange(newRowNumber, 1, 1, rowData.length);
    newRowRange.setHorizontalAlignment('center');
    
    // Alternating row colors
    if (newRowNumber % 2 === 0) {
      newRowRange.setBackground('#f8f9fa');
    }
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Log aktivitas
    Logger.log(`Absensi berhasil: ${data.nama} - ${data.kelas} pada ${data.waktu}`);
    
    return {
      success: true,
      message: `Absensi ${data.nama} berhasil dicatat`,
      data: {
        no: no,
        nama: data.nama,
        kelas: data.kelas,
        waktu: data.waktu,
        hari: `${data.hari}, ${todayString}`
      }
    };
    
  } catch (error) {
    Logger.log('Error in processAttendance: ' + error.toString());
    
    return {
      success: false,
      message: 'Gagal menyimpan data: ' + error.toString()
    };
  }
}

/**
 * Ekstrak tanggal dari string hari absen
 * Format input: "Senin, 2025-02-08" atau "2025-02-08"
 */
function extractDateFromDayString(dayString) {
  if (!dayString) return '';
  
  // Cari pola YYYY-MM-DD dalam string
  const dateMatch = dayString.match(/\d{4}-\d{2}-\d{2}/);
  return dateMatch ? dateMatch[0] : '';
}

/**
 * Fungsi untuk testing - dapat dipanggil manual dari Apps Script editor
 */
function testAttendance() {
  const testData = {
    nama: 'FATIH',
    kelas: 'TJKT-ACP',
    hari: 'Jumat',
    waktu: '08:30:00',
    tanggal: '2025-02-08'
  };
  
  const result = processAttendance(testData);
  Logger.log('Test result: ' + JSON.stringify(result));
  
  return result;
}

/**
 * Fungsi untuk membersihkan data absensi (hanya untuk testing)
 * HATI-HATI: Ini akan menghapus semua data absensi!
 */
function clearAttendanceData() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (sheet) {
      // Hapus semua data kecuali header
      const lastRow = sheet.getLastRow();
      if (lastRow > 1) {
        sheet.deleteRows(2, lastRow - 1);
      }
      
      Logger.log('Data absensi berhasil dibersihkan');
      return { success: true, message: 'Data berhasil dibersihkan' };
    }
    
    return { success: false, message: 'Sheet tidak ditemukan' };
    
  } catch (error) {
    Logger.log('Error clearing data: ' + error.toString());
    return { success: false, message: 'Gagal membersihkan data: ' + error.toString() };
  }
}

/**
 * Fungsi untuk mendapatkan statistik absensi
 */
function getAttendanceStats() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return { success: false, message: 'Sheet tidak ditemukan' };
    }
    
    const data = sheet.getDataRange().getValues();
    const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
    
    let totalStudents = 0;
    let todayAttendance = 0;
    
    for (let i = 1; i < data.length; i++) { // Skip header
      totalStudents++;
      
      const rowDate = extractDateFromDayString(data[i][4]);
      if (rowDate === today) {
        todayAttendance++;
      }
    }
    
    return {
      success: true,
      stats: {
        totalRecords: totalStudents,
        todayAttendance: todayAttendance,
        date: today
      }
    };
    
  } catch (error) {
    Logger.log('Error getting stats: ' + error.toString());
    return { success: false, message: 'Gagal mendapatkan statistik: ' + error.toString() };
  }
}

