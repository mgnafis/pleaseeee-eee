# 📖 Manual Penggunaan Sistem Absensi QR Code

## Daftar Isi

1. [Pengenalan Sistem](#pengenalan-sistem)
2. [Persiapan Awal](#persiapan-awal)
3. [Panduan untuk Admin](#panduan-untuk-admin)
4. [Panduan untuk Siswa](#panduan-untuk-siswa)
5. [Troubleshooting](#troubleshooting)
6. [FAQ](#faq)

## Pengenalan Sistem

Sistem Absensi QR Code adalah solusi modern untuk pencatatan kehadiran siswa yang menggunakan teknologi QR Code dan integrasi cloud. Sistem ini dirancang untuk memberikan kemudahan, akurasi, dan efisiensi dalam proses absensi harian.

### Keunggulan Sistem

**Efisiensi Waktu**: Proses absensi yang biasanya memakan waktu 10-15 menit kini dapat diselesaikan dalam 2-3 menit untuk seluruh kelas.

**Akurasi Data**: Sistem otomatis mencegah kesalahan pencatatan nama, waktu, dan duplikasi absensi dalam satu hari.

**Real-time Recording**: Data absensi langsung tersimpan ke Google Sheets dan dapat diakses secara real-time oleh pihak yang berwenang.

**Paperless Solution**: Mengurangi penggunaan kertas dan mendukung program digitalisasi sekolah.

**Audit Trail**: Setiap absensi tercatat dengan timestamp yang akurat dan tidak dapat dimanipulasi.

### Komponen Sistem

1. **Web Admin Interface**: Aplikasi web untuk scanning QR code siswa
2. **QR Code Siswa**: Kode unik untuk setiap siswa berisi informasi nama dan kelas
3. **Google Sheets Integration**: Database cloud untuk penyimpanan data absensi
4. **Google Apps Script**: Backend API untuk pemrosesan data

## Persiapan Awal

### Kebutuhan Perangkat

**Untuk Admin/Guru:**
- Smartphone atau tablet dengan kamera
- Koneksi internet yang stabil
- Browser modern (Chrome, Firefox, Safari, Edge)

**Untuk Siswa:**
- QR Code pribadi (dicetak atau digital)
- Tidak memerlukan smartphone

### Setup Awal Sistem

Sebelum menggunakan sistem, pastikan setup berikut telah dilakukan:

1. **Google Sheets dan Apps Script** telah dikonfigurasi sesuai panduan
2. **Web admin** telah di-deploy ke hosting (GitHub Pages/Cloudflare)
3. **QR Code siswa** telah dibuat dan didistribusikan
4. **URL sistem** telah dibagikan kepada admin/guru

## Panduan untuk Admin

### Mengakses Sistem

1. **Buka Browser**
   - Gunakan browser modern di smartphone/tablet
   - Pastikan koneksi internet stabil

2. **Akses URL Sistem**
   - Ketik atau klik URL sistem absensi
   - Contoh: `https://username.github.io/absen-qr-system/`

3. **Berikan Permission Kamera**
   - Browser akan meminta izin akses kamera
   - Klik "Allow" atau "Izinkan"
   - Jika tidak muncul, cek settings browser

### Melakukan Absensi

#### Langkah 1: Persiapan Scanner

1. **Posisikan Perangkat**
   - Pegang smartphone/tablet dengan stabil
   - Pastikan pencahayaan ruangan cukup
   - Hindari pantulan cahaya pada layar

2. **Aktivasi Scanner**
   - Scanner akan aktif otomatis saat halaman dimuat
   - Jika tidak aktif, klik tombol "Mulai Scanner"
   - Area scanning akan muncul dengan frame persegi

#### Langkah 2: Scanning QR Code

1. **Posisi QR Code**
   - Minta siswa menunjukkan QR Code
   - Pastikan QR Code dalam kondisi bersih dan tidak rusak
   - Jarak optimal: 10-30 cm dari kamera

2. **Proses Scanning**
   - Arahkan kamera ke QR Code siswa
   - Pastikan QR Code berada dalam frame scanning
   - Tunggu hingga sistem mendeteksi dan memproses

3. **Feedback Visual**
   - **Scanner Aktif**: Frame biru dengan teks "Scanner aktif"
   - **QR Terdeteksi**: Frame berubah warna dan menampilkan data siswa
   - **Processing**: Loading spinner dengan delay 4 detik
   - **Berhasil**: Frame hijau dengan konfirmasi absensi
   - **Error**: Frame merah dengan pesan error

#### Langkah 3: Validasi Hasil

1. **Cek Data Siswa**
   - Pastikan nama dan kelas sesuai
   - Verifikasi waktu absensi
   - Konfirmasi dengan siswa jika diperlukan

2. **Hasil Absensi**
   - **Berhasil**: "Absensi berhasil! [Nama] telah tercatat hadir"
   - **Sudah Absen**: "[Nama] sudah melakukan absensi hari ini"
   - **Error**: Pesan error spesifik untuk troubleshooting

### Mengelola Proses Absensi Kelas

#### Strategi Efisien

1. **Persiapan Sebelum Kelas**
   - Buka sistem 5 menit sebelum jam pelajaran
   - Test scanner dengan QR code sample
   - Pastikan koneksi internet stabil

2. **Pengaturan Posisi**
   - Posisikan diri di dekat pintu masuk kelas
   - Gunakan meja/stand untuk stabilitas perangkat
   - Pastikan pencahayaan optimal

3. **Alur Absensi**
   - Minta siswa berbaris rapi
   - Satu per satu menunjukkan QR Code
   - Tunggu konfirmasi sebelum siswa berikutnya
   - Catat manual jika ada masalah teknis

#### Menangani Situasi Khusus

**Siswa Lupa QR Code:**
1. Catat nama siswa secara manual
2. Input data manual ke Google Sheets setelah kelas
3. Ingatkan siswa untuk membawa QR Code besok

**QR Code Rusak/Tidak Terbaca:**
1. Coba bersihkan QR Code dari debu/kotoran
2. Ubah sudut dan jarak scanning
3. Gunakan pencahayaan tambahan jika perlu
4. Jika tetap tidak bisa, catat manual

**Koneksi Internet Bermasalah:**
1. Coba refresh halaman
2. Pindah ke area dengan sinyal lebih kuat
3. Gunakan hotspot alternatif
4. Catat manual dan input nanti saat koneksi normal

### Monitoring Data Absensi

#### Akses Google Sheets

1. **Buka Google Sheets**
   - Login dengan akun yang sama dengan Apps Script
   - Buka spreadsheet "Sistem Absensi QR Code"
   - Pilih sheet "Absensi"

2. **Verifikasi Data**
   - Cek apakah data siswa masuk dengan benar
   - Pastikan format waktu dan tanggal sesuai
   - Verifikasi tidak ada duplikasi

#### Analisis Data

**Data Harian:**
- Jumlah siswa hadir
- Waktu kedatangan
- Siswa yang terlambat
- Siswa yang tidak hadir

**Data Mingguan/Bulanan:**
- Tingkat kehadiran per siswa
- Pola keterlambatan
- Tren absensi kelas

## Panduan untuk Siswa

### Persiapan QR Code

#### Menerima QR Code

1. **QR Code Fisik**
   - Terima print-out QR Code dari sekolah
   - Simpan dalam plastik transparan untuk perlindungan
   - Tempel di ID card atau buku absensi

2. **QR Code Digital**
   - Simpan file QR Code di smartphone
   - Backup di cloud storage (Google Drive, iCloud)
   - Pastikan resolusi gambar cukup tinggi

#### Merawat QR Code

**QR Code Fisik:**
- Jaga dari air dan kotoran
- Hindari lipatan atau sobek
- Ganti jika sudah tidak terbaca

**QR Code Digital:**
- Pastikan file tidak corrupt
- Backup di multiple device
- Update jika ada perubahan data

### Proses Absensi

#### Persiapan Sebelum Scan

1. **Siapkan QR Code**
   - Keluarkan QR Code dari tempat penyimpanan
   - Pastikan dalam kondisi bersih dan tidak rusak
   - Siap untuk ditunjukkan ke admin

2. **Antri dengan Tertib**
   - Ikuti instruksi guru/admin
   - Antri dengan jarak yang cukup
   - Siapkan QR Code sebelum giliran

#### Saat Proses Scanning

1. **Posisikan QR Code**
   - Tunjukkan QR Code ke kamera admin
   - Jaga agar QR Code tidak bergerak
   - Pastikan tidak ada bayangan menutupi

2. **Tunggu Konfirmasi**
   - Tunggu hingga admin mengkonfirmasi
   - Dengarkan feedback dari sistem
   - Jangan bergerak hingga proses selesai

3. **Setelah Scan Berhasil**
   - Simpan kembali QR Code dengan rapi
   - Masuk ke kelas dengan tertib
   - Laporkan jika ada masalah

### Tips untuk Siswa

#### Menjaga QR Code

- **Selalu bawa** QR Code setiap hari
- **Simpan di tempat aman** yang mudah diakses
- **Backup digital** jika memungkinkan
- **Laporkan segera** jika hilang atau rusak

#### Etika Absensi

- **Datang tepat waktu** untuk menghindari antrian panjang
- **Antri dengan tertib** dan tidak mendahului
- **Bantu teman** yang mengalami kesulitan
- **Jujur** dalam proses absensi

## Troubleshooting

### Masalah Scanner

#### Scanner Tidak Aktif

**Gejala**: Area scanner kosong atau tidak muncul kamera

**Solusi**:
1. Refresh halaman browser
2. Cek permission kamera di browser
3. Tutup aplikasi lain yang menggunakan kamera
4. Restart browser
5. Coba browser lain

#### QR Code Tidak Terbaca

**Gejala**: Scanner aktif tapi tidak mendeteksi QR Code

**Solusi**:
1. **Perbaiki Pencahayaan**
   - Pindah ke area dengan cahaya lebih terang
   - Hindari cahaya langsung yang menyilaukan
   - Gunakan lampu tambahan jika perlu

2. **Adjust Jarak dan Sudut**
   - Coba jarak 10-30 cm dari kamera
   - Ubah sudut QR Code (0°, 45°, 90°)
   - Pastikan QR Code sejajar dengan kamera

3. **Bersihkan QR Code**
   - Lap dengan kain bersih dan kering
   - Pastikan tidak ada debu atau kotoran
   - Cek apakah ada bagian yang rusak

### Masalah Koneksi

#### Data Tidak Masuk Google Sheets

**Gejala**: Absensi berhasil di web tapi tidak muncul di Google Sheets

**Solusi**:
1. **Cek Koneksi Internet**
   - Test browsing website lain
   - Coba refresh Google Sheets
   - Pindah ke WiFi/data yang lebih stabil

2. **Verifikasi Konfigurasi**
   - Pastikan URL Apps Script benar di web admin
   - Cek status deployment Apps Script
   - Verifikasi permission Google Sheets

#### Loading Terlalu Lama

**Gejala**: Proses absensi stuck di loading lebih dari 10 detik

**Solusi**:
1. Tunggu hingga timeout (30 detik)
2. Refresh halaman dan coba lagi
3. Cek kecepatan internet
4. Coba di waktu yang berbeda

### Masalah Data

#### Nama/Kelas Salah

**Gejala**: Data yang muncul tidak sesuai dengan siswa

**Solusi**:
1. **Verifikasi QR Code**
   - Pastikan QR Code milik siswa yang benar
   - Cek apakah ada QR Code yang tertukar
   - Scan ulang dengan hati-hati

2. **Update Data Master**
   - Laporkan ke admin IT sekolah
   - Buat QR Code baru jika diperlukan
   - Update database siswa

#### Duplikasi Absensi

**Gejala**: Siswa muncul lebih dari sekali dalam satu hari

**Solusi**:
1. **Cek Google Sheets**
   - Lihat timestamp absensi
   - Identifikasi entry yang duplikat
   - Hapus entry yang salah

2. **Perbaiki Sistem**
   - Laporkan bug ke developer
   - Sementara gunakan validasi manual
   - Monitor sistem lebih ketat

## FAQ

### Pertanyaan Umum

**Q: Apakah sistem bisa digunakan offline?**
A: Tidak, sistem memerlukan koneksi internet untuk menyimpan data ke Google Sheets. Namun, Anda bisa mencatat manual dan input nanti saat online.

**Q: Berapa lama data tersimpan di Google Sheets?**
A: Data tersimpan permanen di Google Sheets milik sekolah. Anda bisa export dan backup secara berkala.

**Q: Apakah bisa digunakan di multiple device bersamaan?**
A: Ya, web admin bisa dibuka di multiple device. Namun, pastikan koordinasi antar admin untuk menghindari konflik.

**Q: Bagaimana jika QR Code siswa hilang?**
A: Laporkan ke admin sekolah untuk dibuatkan QR Code baru. Sementara bisa dicatat manual.

**Q: Apakah sistem aman dari manipulasi?**
A: Ya, sistem menggunakan timestamp server dan validasi harian. Data tersimpan di Google Sheets yang hanya bisa diakses oleh admin sekolah.

### Pertanyaan Teknis

**Q: Browser apa saja yang didukung?**
A: Chrome, Firefox, Safari, Edge versi terbaru. Untuk hasil optimal, gunakan Chrome.

**Q: Apakah bisa digunakan di iPhone/iPad?**
A: Ya, sistem kompatibel dengan iOS Safari dan Chrome mobile.

**Q: Bagaimana cara backup data?**
A: Export Google Sheets ke format Excel atau CSV secara berkala.

**Q: Apakah bisa custom format QR Code?**
A: Saat ini format fixed: "Nama: [NAMA] [KELAS]". Untuk custom format, perlu modifikasi kode.

**Q: Berapa kapasitas maksimal siswa?**
A: Tidak ada batasan teknis. Google Sheets bisa menampung jutaan baris data.

### Pertanyaan Troubleshooting

**Q: Kenapa kamera tidak muncul?**
A: Pastikan browser memiliki permission kamera dan tidak ada aplikasi lain yang menggunakan kamera.

**Q: QR Code terbaca tapi data tidak masuk?**
A: Cek koneksi internet dan pastikan URL Google Apps Script sudah benar di konfigurasi.

**Q: Bagaimana cara reset sistem?**
A: Refresh halaman browser. Untuk reset data, gunakan function clearAttendanceData di Apps Script.

**Q: Sistem lambat, bagaimana mengoptimalkan?**
A: Pastikan koneksi internet stabil, tutup tab browser lain, dan gunakan device dengan spek memadai.

---

**Sistem Absensi QR Code - Solusi Modern untuk Pendidikan Digital**

*Manual ini dibuat untuk memastikan penggunaan sistem yang optimal dan efisien. Jika ada pertanyaan lebih lanjut, silakan hubungi tim IT sekolah.*

