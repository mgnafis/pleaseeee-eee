# 🚀 Panduan Deployment Sistem Absensi QR Code

## Persiapan Sebelum Deployment

### 1. Pastikan Setup Google Sheets Selesai
- Google Spreadsheet sudah dibuat
- Google Apps Script sudah di-deploy
- URL Apps Script sudah dikonfigurasi di `index.html`

### 2. Validasi File Project
Pastikan struktur file lengkap:
```
absen-qr-project/
├── index.html
├── data-qr/
│   └── FATIH_TJKT-ACP.png
├── google-apps-script.js
├── setup-google-sheets.md
├── README.md
└── deployment-guide.md
```

## Option 1: Deployment ke GitHub Pages

### Langkah 1: Persiapan Repository GitHub

1. **Buat Repository Baru**
   - Login ke [GitHub](https://github.com)
   - Klik "New repository"
   - Nama repository: `absen-qr-system`
   - Pilih "Public"
   - Jangan centang "Add a README file"
   - Klik "Create repository"

### Langkah 2: Upload File ke GitHub

**Via GitHub Web Interface:**

1. **Upload Files**
   - Di halaman repository baru, klik "uploading an existing file"
   - Drag & drop semua file dari folder `absen-qr-project`
   - Atau klik "choose your files" dan pilih semua file

2. **Commit Files**
   - Scroll ke bawah ke bagian "Commit new files"
   - Commit message: "Initial commit - Sistem Absensi QR Code"
   - Klik "Commit new files"

**Via Git Command Line:**

```bash
# Clone repository kosong
git clone https://github.com/username/absen-qr-system.git
cd absen-qr-system

# Copy semua file project ke folder repository
cp -r /path/to/absen-qr-project/* .

# Add, commit, dan push
git add .
git commit -m "Initial commit - Sistem Absensi QR Code"
git push origin main
```

### Langkah 3: Aktifkan GitHub Pages

1. **Masuk ke Settings Repository**
   - Di repository GitHub, klik tab "Settings"
   - Scroll ke bagian "Pages" di sidebar kiri

2. **Konfigurasi Pages**
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: / (root)
   - Klik "Save"

3. **Tunggu Deployment**
   - GitHub akan memproses deployment (1-5 menit)
   - URL akan muncul: `https://username.github.io/absen-qr-system/`

### Langkah 4: Testing GitHub Pages

1. **Akses URL**
   - Buka URL GitHub Pages di browser
   - Pastikan halaman loading dengan benar

2. **Test Scanner**
   - Berikan permission kamera
   - Test scan dengan QR code sample

## Option 2: Deployment ke Cloudflare Pages

### Langkah 1: Persiapan Cloudflare Account

1. **Daftar/Login Cloudflare**
   - Kunjungi [Cloudflare](https://cloudflare.com)
   - Daftar akun baru atau login

2. **Akses Cloudflare Pages**
   - Di dashboard, pilih "Pages" dari sidebar
   - Klik "Create a project"

### Langkah 2: Upload Project

1. **Pilih Upload Method**
   - Pilih "Upload assets"
   - Jangan pilih "Connect to Git" (kecuali sudah ada di GitHub)

2. **Upload Files**
   - Drag & drop semua file dari folder `absen-qr-project`
   - Atau klik "Select from computer" dan pilih semua file
   - Pastikan struktur folder tetap terjaga

3. **Konfigurasi Project**
   - **Project name**: `absen-qr-system`
   - **Production branch**: main (jika dari Git)
   - Klik "Deploy site"

### Langkah 3: Konfigurasi Domain (Opsional)

1. **Custom Domain**
   - Di dashboard Pages, pilih project Anda
   - Tab "Custom domains"
   - Klik "Set up a custom domain"
   - Masukkan domain Anda (jika ada)

2. **Subdomain Cloudflare**
   - Default URL: `https://absen-qr-system.pages.dev`
   - Bisa diubah di settings project

### Langkah 4: Testing Cloudflare Pages

1. **Akses URL**
   - Buka URL Cloudflare Pages di browser
   - Pastikan halaman loading dengan benar

2. **Test Functionality**
   - Test scanner QR code
   - Cek integrasi Google Sheets

## Option 3: Deployment ke Netlify

### Langkah 1: Persiapan Netlify

1. **Daftar/Login Netlify**
   - Kunjungi [Netlify](https://netlify.com)
   - Daftar dengan GitHub/email

### Langkah 2: Deploy Manual

1. **Drag & Drop Deployment**
   - Di dashboard Netlify, scroll ke "Want to deploy a new site without connecting to Git?"
   - Drag & drop folder `absen-qr-project` ke area deployment
   - Netlify akan otomatis deploy

2. **Konfigurasi Site**
   - Setelah deploy, klik "Site settings"
   - "Change site name" untuk mengubah URL
   - Contoh: `absen-qr-system.netlify.app`

## Konfigurasi HTTPS dan Domain

### Mengapa HTTPS Penting?
- **Camera Access**: Browser modern memerlukan HTTPS untuk akses kamera
- **Security**: Data absensi lebih aman
- **PWA Support**: Jika ingin dijadikan Progressive Web App

### Auto HTTPS
- GitHub Pages: Otomatis HTTPS
- Cloudflare Pages: Otomatis HTTPS
- Netlify: Otomatis HTTPS

## Testing Setelah Deployment

### 1. Functional Testing

**Test Scanner:**
```
✅ Halaman loading dengan benar
✅ Scanner QR code aktif
✅ Camera permission berfungsi
✅ QR code terbaca dengan benar
✅ Data parsing nama dan kelas benar
```

**Test Integration:**
```
✅ Data terkirim ke Google Sheets
✅ Validasi absensi harian berfungsi
✅ Loading delay 4 detik berjalan
✅ Status feedback ditampilkan
```

### 2. Cross-Platform Testing

**Desktop Browsers:**
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

**Mobile Browsers:**
- Chrome Mobile ✅
- Safari Mobile ✅
- Samsung Internet ✅

### 3. Performance Testing

**Loading Speed:**
- First Contentful Paint < 2s
- Largest Contentful Paint < 3s
- Camera initialization < 1s

## Maintenance dan Update

### Update Deployment

**GitHub Pages:**
```bash
# Edit files locally
git add .
git commit -m "Update: description"
git push origin main
# GitHub Pages auto-deploy
```

**Cloudflare Pages:**
- Upload file baru via dashboard
- Atau push ke connected Git repository

**Netlify:**
- Drag & drop folder baru
- Atau push ke connected Git repository

### Monitoring

1. **Google Apps Script Logs**
   - Cek execution logs untuk error
   - Monitor quota usage

2. **Browser Console**
   - Cek JavaScript errors
   - Monitor network requests

3. **Google Sheets**
   - Validasi data masuk dengan benar
   - Cek format dan timestamp

## Troubleshooting Deployment

### Error: Camera tidak berfungsi
**Solusi:**
- Pastikan deployment menggunakan HTTPS
- Cek browser permissions
- Test di browser yang berbeda

### Error: Data tidak masuk Google Sheets
**Solusi:**
- Cek URL Google Apps Script di `index.html`
- Pastikan Apps Script deployment aktif
- Cek CORS settings di Apps Script

### Error: QR Code tidak terbaca
**Solusi:**
- Cek format QR code: `Nama: [NAMA] [KELAS]`
- Pastikan kualitas gambar QR code baik
- Test dengan QR code sample

### Error: 404 Not Found
**Solusi:**
- Pastikan file `index.html` ada di root directory
- Cek case-sensitive filename
- Refresh deployment

## Security Considerations

### Data Privacy
- Data hanya dikirim ke Google Sheets milik Anda
- Tidak ada data tersimpan di browser
- HTTPS encryption untuk transmisi data

### Access Control
- Web admin bisa diakses siapa saja dengan URL
- Pertimbangkan password protection jika diperlukan
- Monitor access logs di hosting provider

### Backup Strategy
- Export Google Sheets secara berkala
- Backup kode source di multiple repository
- Document semua konfigurasi

---

**Selamat! Sistem Absensi QR Code Anda siap digunakan! 🎉**

