# 📱 Sistem Absensi QR Code

Sistem absensi modern berbasis QR Code dengan web admin untuk scanning dan integrasi otomatis ke Google Sheets. Sistem ini memungkinkan pencatatan kehadiran siswa secara real-time dengan validasi absensi harian.

## ✨ Fitur Utama

- **Scanner QR Code Real-time**: Interface web yang responsif untuk scanning QR code siswa
- **Validasi Absensi Harian**: Sistem mencegah absensi ganda dalam satu hari
- **Integrasi Google Sheets**: Data absensi langsung tersimpan ke Google Sheets
- **Delay Processing**: Loading 4 detik untuk memastikan data terproses dengan baik
- **Responsive Design**: Kompatibel dengan desktop dan mobile
- **Real-time Feedback**: Status scanning dan hasil absensi ditampilkan secara real-time

## 🏗️ Struktur Project

```
absen-qr-project/
├── index.html                 # Web admin untuk scanning QR code
├── data-qr/                   # Folder untuk menyimpan QR code siswa
│   └── FATIH_TJKT-ACP.png    # Contoh QR code siswa
├── google-apps-script.js      # Script untuk Google Apps Script
├── setup-google-sheets.md     # Panduan setup Google Sheets
└── README.md                  # Dokumentasi project
```

## 🚀 Cara Penggunaan

### 1. Setup Google Sheets dan Apps Script

Ikuti panduan lengkap di file `setup-google-sheets.md` untuk:
- Membuat Google Spreadsheet
- Setup Google Apps Script
- Deploy web app API
- Konfigurasi integrasi

### 2. Konfigurasi Web Admin

1. Edit file `index.html`
2. Cari baris: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';`
3. Ganti dengan URL Apps Script Anda
4. Uncomment baris pengiriman data ke Google Sheets

### 3. Persiapan QR Code Siswa

1. Buat QR code untuk setiap siswa dengan format: `Nama: [NAMA] [KELAS]`
   - Contoh: `Nama: FATIH TJKT-ACP`
2. Simpan file QR code di folder `data-qr/` dengan nama: `[NAMA]_[KELAS].png`
   - Contoh: `FATIH_TJKT-ACP.png`

### 4. Deployment

#### Option A: GitHub Pages

1. **Upload ke GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/absen-qr.git
   git push -u origin main
   ```

2. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Masuk ke Settings > Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Klik Save

3. **Akses Website**
   - URL: `https://username.github.io/absen-qr/`

#### Option B: Cloudflare Pages

1. **Upload File ke Cloudflare Pages**
   - Login ke [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Pilih "Pages" dari sidebar
   - Klik "Create a project"
   - Pilih "Upload assets"

2. **Upload Project**
   - Drag & drop semua file project
   - Beri nama project: `absen-qr-system`
   - Klik "Deploy site"

3. **Akses Website**
   - URL: `https://absen-qr-system.pages.dev`

## 📊 Format Data di Google Sheets

Data absensi akan tersimpan dengan format:

| NO | NAMA  | KELAS    | WAKTU    | HARI ABSEN        |
|----|-------|----------|----------|-------------------|
| 1  | FATIH | TJKT-ACP | 08:30:00 | Jumat, 2025-02-08 |
| 2  | BUDI  | TJKT-ACP | 08:31:15 | Jumat, 2025-02-08 |

## 🔧 Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **QR Scanner**: html5-qrcode library
- **Backend**: Google Apps Script
- **Database**: Google Sheets
- **Hosting**: GitHub Pages / Cloudflare Pages

## 📱 Cara Kerja Sistem

1. **Admin membuka web admin** di browser (desktop/mobile)
2. **Scanner QR code aktif** secara otomatis
3. **Siswa menunjukkan QR code** ke kamera
4. **Sistem memproses data** dengan validasi:
   - Parsing nama dan kelas dari QR code
   - Cek apakah sudah absen hari ini
   - Loading 4 detik untuk processing
5. **Data dikirim ke Google Sheets** via Apps Script API
6. **Konfirmasi hasil** ditampilkan di web admin

## 🛡️ Validasi dan Keamanan

- **Absensi Harian**: Satu siswa hanya bisa absen sekali per hari
- **Format QR Code**: Validasi format data QR code
- **Error Handling**: Penanganan error untuk koneksi dan data
- **HTTPS**: Deployment menggunakan HTTPS untuk keamanan
- **CORS**: Konfigurasi CORS untuk komunikasi frontend-backend

## 🎨 Fitur Interface

- **Modern Design**: Gradient background dan card-based layout
- **Responsive**: Otomatis menyesuaikan ukuran layar
- **Real-time Status**: Indikator visual untuk status scanning
- **Loading Animation**: Spinner dan progress indicator
- **Color-coded Feedback**: 
  - Biru: Scanner aktif
  - Hijau: Absensi berhasil
  - Merah: Error atau sudah absen
  - Orange: Processing/loading

## 🔍 Troubleshooting

### Scanner tidak berfungsi
- Pastikan browser mendukung kamera
- Berikan permission akses kamera
- Gunakan HTTPS untuk deployment

### Data tidak masuk ke Google Sheets
- Cek URL Google Apps Script
- Pastikan deployment Apps Script aktif
- Cek permission Google Sheets

### QR Code tidak terbaca
- Pastikan format QR code sesuai: `Nama: [NAMA] [KELAS]`
- Cek kualitas gambar QR code
- Pastikan pencahayaan cukup

## 📞 Support

Jika mengalami masalah:
1. Cek console browser untuk error JavaScript
2. Cek log Google Apps Script
3. Pastikan semua konfigurasi sesuai panduan
4. Test dengan QR code sample yang disediakan

## 📄 Lisensi

Project ini dibuat untuk keperluan edukasi dan dapat digunakan secara bebas dengan menyertakan credit.

---

**Dibuat dengan ❤️ untuk sistem absensi modern**

