/**
 * Data & Configuration for Library App Showcase & Portfolio
 * PUSTAKA MODERN - Sistem Informasi Perpustakaan Sekolah
 */

const APP_DATA = {
  appName: "EduPustaka Pro / PUJATI",
  version: "1.1.1",
  platform: "Desktop App (Windows 10 / 11 Native)",
  techStack: [
    { name: "Electron", desc: "Native Windows Desktop Framework", icon: "desktop" },
    { name: "React.js + Vite", desc: "Blazing Fast & Modern Reactive UI", icon: "react" },
    { name: "SQLite (sql.js)", desc: "100% Offline-First Local Database", icon: "database" },
    { name: "SheetJS (XLSX)", desc: "Seamless Excel Import & Export", icon: "table" },
    { name: "PDF Print Engine", desc: "Official Letterhead & Barcode Generator", icon: "printer" }
  ],
  
  // 12 Tangkapan Layar Asli
  screenshots: [
    {
      id: "01",
      file: "assets/screenshots/01_login.png",
      title: "Halaman Login & Keamanan Akses",
      category: "auth",
      categoryLabel: "Autentikasi & Keamanan",
      badge: "Multi-User",
      description: "Tampilan autentikasi petugas dan administrator perpustakaan dengan enkripsi lokal yang aman dan antarmuka bersih."
    },
    {
      id: "02",
      file: "assets/screenshots/02_dashboard.png",
      title: "Dashboard Statistik & Analitik Utama",
      category: "dashboard",
      categoryLabel: "Dashboard",
      badge: "Real-Time Stats",
      description: "Menampilkan ringkasan total judul buku, total eksemplar, anggota aktif, sirkulasi hari ini, dan grafik tren kunjungan bulanan."
    },
    {
      id: "03",
      file: "assets/screenshots/03_katalog.png",
      title: "Katalog Pencarian Buku Terpadu",
      category: "katalog",
      categoryLabel: "Katalog & DDC",
      badge: "Pencarian Cepat",
      description: "Modul OPAC/katalog pencarian koleksi buku berdasarkan judul, penulis, penerbit, nomor rak, hingga klasifikasi nomor DDC."
    },
    {
      id: "04",
      file: "assets/screenshots/04_buku.png",
      title: "Manajemen Data Buku & Cetak Label",
      category: "master",
      categoryLabel: "Data Master",
      badge: "Cetak Barcode & Call No",
      description: "Pengelolaan koleksi buku fisik lengkap dengan cetak label punggung buku, barcode buku, nomor panggil (call number), dan status ketersediaan."
    },
    {
      id: "05",
      file: "assets/screenshots/05_anggota.png",
      title: "Manajemen Anggota & Kartu Perpustakaan",
      category: "master",
      categoryLabel: "Data Master",
      badge: "Cetak Kartu Ber-Barcode",
      description: "Pendaftaran anggota siswa dan guru, filter kelas/jurusan, dan fitur cetak kartu anggota resmi siap pakai dengan barcode ID unik."
    },
    {
      id: "06",
      file: "assets/screenshots/06_media.png",
      title: "Manajemen Media Pembelajaran Digital",
      category: "koleksi",
      categoryLabel: "Koleksi Khusus",
      badge: "E-Resource",
      description: "Pengorganisasian media ajar guru, CD/DVD pembelajaran, file digital, dan materi kurikulum sekolah."
    },
    {
      id: "07",
      file: "assets/screenshots/07_permainan.png",
      title: "Alat Permainan Edukatif (APE)",
      category: "koleksi",
      categoryLabel: "Koleksi Khusus",
      badge: "Edu-Games",
      description: "Modul khusus inventarisasi alat peraga edukasi, puzzle, globe, dan perlengkapan literasi interaktif siswa."
    },
    {
      id: "08",
      file: "assets/screenshots/08_peminjaman.png",
      title: "Sirkulasi Peminjaman Buku",
      category: "sirkulasi",
      categoryLabel: "Sirkulasi",
      badge: "1-Detik Transaksi",
      description: "Alur transaksi peminjaman cepat via scan barcode / input ID. Otomatis menentukan batas waktu kembali dan kuota maksimal pinjam."
    },
    {
      id: "09",
      file: "assets/screenshots/09_pengembalian.png",
      title: "Sirkulasi Pengembalian & Denda Otomatis",
      category: "sirkulasi",
      categoryLabel: "Sirkulasi",
      badge: "Hitung Denda Otomatis",
      description: "Deteksi keterlambatan otomatis dengan kalkulator denda per hari, riwayat pengembalian, dan pencatatan kondisi fisik buku."
    },
    {
      id: "10",
      file: "assets/screenshots/10_kunjungan.png",
      title: "Buku Tamu & Presensi Kunjungan Digital",
      category: "kunjungan",
      categoryLabel: "Buku Tamu",
      badge: "Presensi Mandiri",
      description: "Siswa dan guru cukup memasukkan nomor anggota/scan barcode untuk mencatat kehadiran kunjungan perpustakaan harian."
    },
    {
      id: "11",
      file: "assets/screenshots/11_laporan.png",
      title: "Laporan Resmi & Rekapitulasi Berkop",
      category: "laporan",
      categoryLabel: "Laporan & Cetak",
      badge: "Ekspor PDF & Excel",
      description: "Cetak laporan peminjaman, keterlambatan, inventaris buku, dan buku tamu berkop resmi sekolah untuk kebutuhan akreditasi & supervisi dinas."
    },
    {
      id: "12",
      file: "assets/screenshots/12_pengaturan.png",
      title: "Pengaturan Profil Sekolah & Database",
      category: "pengaturan",
      categoryLabel: "Pengaturan & Branding",
      badge: "Kustomisasi Instansi",
      description: "Kustomisasi nama sekolah, alamat, logo resmi, kop surat, masa pinjam default, tarif denda, hingga backup/restore database SQLite."
    }
  ],

  // Modul Unggulan untuk Presentasi
  modules: [
    {
      id: "mod-ddc",
      icon: "📚",
      tag: "Standar Nasional",
      title: "Klasifikasi DDC & Barcode",
      desc: "Mendukung standar Dewey Decimal Classification (000-900). Dilengkapi fitur cetak label punggung dan barcode buku dalam sekali klik.",
      highlights: ["Cetak Label Punggung", "Barcode Generator", "Klasifikasi 000-900 DDC"]
    },
    {
      id: "mod-circ",
      icon: "⚡",
      tag: "Super Cepat",
      title: "Sirkulasi & Denda Otomatis",
      desc: "Transaksi peminjaman dan pengembalian instan dengan validasi barcode, batas waktu pengembalian pintar, dan kalkulasi denda otomatis.",
      highlights: ["Peminjaman Cepat", "Deteksi Terlambat", "Hitung Denda Otomatis"]
    },
    {
      id: "mod-member",
      icon: "🪪",
      tag: "Cetak Resmi",
      title: "Kartu Anggota Ber-Barcode",
      desc: "Otomatis menghasilkan kartu anggota perpustakaan yang rapi untuk siswa dan guru, lengkap dengan foto, barcode ID, dan masa berlaku.",
      highlights: ["Cetak Kartu Siswa/Guru", "Barcode ID Unik", "Filter Kelas & Jurusan"]
    },
    {
      id: "mod-guest",
      icon: "✍️",
      tag: "Presensi Mandiri",
      title: "Buku Tamu Digital",
      desc: "Gantikan buku tamu kertas yang mudah rusak. Siswa/pengunjung dapat melakukan absensi mandiri untuk statistik kunjungan real-time.",
      highlights: ["Absensi Scan / Input ID", "Statistik Kunjungan", "Grafik Pengunjung"]
    },
    {
      id: "mod-special",
      icon: "🧩",
      tag: "Multi-Koleksi",
      title: "Media Ajar & Koleksi APE",
      desc: "Bukan hanya buku biasa! Kelola media ajar digital, CD/DVD edukasi, dan alat permainan edukatif (APE) dengan rapi.",
      highlights: ["Koleksi Non-Buku", "Media Digital", "Inventaris Alat Peraga"]
    },
    {
      id: "mod-report",
      icon: "📄",
      tag: "Akreditasi Ready",
      title: "Laporan PDF Berkop & Excel",
      desc: "Siap untuk supervisi kepala sekolah dan akreditasi perpustakaan. Ekspor laporan ber-kop surat resmi instansi serta impor/ekspor data massal Excel.",
      highlights: ["Kop Surat Resmi", "Ekspor PDF Berkualitas", "Impor/Ekspor Excel"]
    },
    {
      id: "mod-offline",
      icon: "🛡️",
      tag: "100% Offline",
      title: "Keamanan Data & Backup 1-Klik",
      desc: "Aplikasi berjalan 100% offline dengan database SQLite lokal. Tidak perlu sewa server, data sekolah aman, dan backup database sangat mudah.",
      highlights: ["Bebas Biaya Hosting", "Backup & Restore 1-Klik", "Privasi Data Terjamin"]
    }
  ]
};

// Export ke Window
window.APP_DATA = APP_DATA;
