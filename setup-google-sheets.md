# Panduan Setup Google Sheets dan Apps Script

## Langkah 1: Membuat Google Spreadsheet

1. **Buka Google Sheets**
   - Kunjungi [sheets.google.com](https://sheets.google.com)
   - Klik "Blank" untuk membuat spreadsheet baru

2. **Beri Nama Spreadsheet**
   - Klik "Untitled spreadsheet" di bagian atas
   - Ganti nama menjadi "Sistem Absensi QR Code"

3. **Setup Sheet Absensi**
   - Pastikan sheet pertama bernama "Absensi"
   - Jika perlu, klik kanan pada tab sheet dan pilih "Rename" untuk mengubah nama

4. **Catat Spreadsheet ID**
   - Lihat URL spreadsheet Anda
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Copy bagian `SPREADSHEET_ID` (string panjang antara `/d/` dan `/edit`)
   - Contoh: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## Langkah 2: Setup Google Apps Script

1. **Buka Google Apps Script**
   - Kunjungi [script.google.com](https://script.google.com)
   - Klik "New Project"

2. **Ganti Kode Default**
   - Hapus semua kode yang ada di `Code.gs`
   - Copy dan paste kode dari file `google-apps-script.js`

3. **Update Spreadsheet ID**
   - Cari baris: `const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID_HERE';`
   - Ganti `YOUR_SPREADSHEET_ID_HERE` dengan ID spreadsheet Anda
   - Contoh: `const SPREADSHEET_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms';`

4. **Beri Nama Project**
   - Klik "Untitled project" di bagian atas
   - Ganti nama menjadi "Absensi QR Code API"

5. **Save Project**
   - Tekan `Ctrl+S` atau klik ikon save

## Langkah 3: Deploy Apps Script sebagai Web App

1. **Deploy Web App**
   - Klik tombol "Deploy" di bagian atas kanan
   - Pilih "New deployment"

2. **Konfigurasi Deployment**
   - **Type**: Pilih "Web app"
   - **Description**: "Absensi QR Code API v1.0"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (penting untuk akses dari web admin)

3. **Authorize Script**
   - Klik "Deploy"
   - Jika diminta, klik "Authorize access"
   - Login dengan akun Google Anda
   - Klik "Advanced" jika muncul warning
   - Klik "Go to [Project Name] (unsafe)"
   - Klik "Allow"

4. **Copy Web App URL**
   - Setelah deployment berhasil, copy "Web app URL"
   - URL format: `https://script.google.com/macros/s/SCRIPT_ID/exec`
   - Simpan URL ini untuk digunakan di web admin

## Langkah 4: Update Web Admin

1. **Edit file index.html**
   - Buka file `index.html` di project Anda
   - Cari baris: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';`
   - Ganti dengan URL yang Anda copy dari Apps Script
   - Contoh: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';`

2. **Uncomment Kode Pengiriman Data**
   - Cari baris yang dikomentari: `// const result = await sendToGoogleSheets(attendanceData);`
   - Hapus `//` untuk mengaktifkan pengiriman data
   - Komentari atau hapus baris simulasi: `console.log('Data yang akan dikirim:', attendanceData);`

## Langkah 5: Testing

1. **Test Apps Script**
   - Di Google Apps Script editor, pilih function `testAttendance`
   - Klik "Run" untuk menjalankan test
   - Cek Google Sheets untuk melihat apakah data test berhasil ditambahkan

2. **Test Web Admin**
   - Buka file `index.html` di browser
   - Scan QR code FATIH
   - Pastikan data berhasil dikirim ke Google Sheets

## Troubleshooting

### Error "Script function not found"
- Pastikan nama function di Apps Script sesuai
- Pastikan project sudah di-save dan di-deploy ulang

### Error "Permission denied"
- Pastikan deployment setting "Who has access" diset ke "Anyone"
- Coba deploy ulang dengan versi baru

### Error "Spreadsheet not found"
- Pastikan Spreadsheet ID benar
- Pastikan akun yang menjalankan Apps Script memiliki akses ke spreadsheet

### Data tidak muncul di Sheets
- Cek log di Apps Script (View > Logs)
- Pastikan sheet bernama "Absensi"
- Coba jalankan function `testAttendance` manual

## Format Data di Google Sheets

Setelah setup berhasil, data akan tersimpan dengan format:

| NO | NAMA  | KELAS    | WAKTU    | HARI ABSEN        |
|----|-------|----------|----------|-------------------|
| 1  | FATIH | TJKT-ACP | 08:30:00 | Jumat, 2025-02-08 |
| 2  | BUDI  | TJKT-ACP | 08:31:15 | Jumat, 2025-02-08 |

## Keamanan dan Privasi

- Apps Script hanya dapat diakses oleh pemilik akun Google
- Data disimpan di Google Sheets milik Anda
- Web app dapat diakses publik, tapi hanya untuk mengirim data
- Tidak ada data sensitif yang terekspos

## Maintenance

- **Update Deployment**: Jika mengubah kode Apps Script, deploy versi baru
- **Backup Data**: Export Google Sheets secara berkala
- **Monitor Logs**: Cek Apps Script logs untuk error atau aktivitas mencurigakan

