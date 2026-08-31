import React from "react";
import { Compass, Eye, FileText, Hammer, Shield, Award, Users, CheckCircle } from "lucide-react";

export const CONTACT_INFO = {
  phone: "+62 812-0000-0000",
  phoneNumberClean: "6281200000000",
  phoneNumberFormatted: "+62 812-0000-0000",
  email: "annasrkonsultan@email.com",
  domicileAddress:
    "Jl. Raya Tembelang RT.001 RW.003, Desa Bedahlawak, Kecamatan Tembelang, Kabupaten Jombang",
  officeAddress:
    "Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang",
  address:
    "Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang",
  addressDetail:
    "Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang, Jawa Timur",
  operationalHours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  gmapsUrl: "https://maps.google.com",
};

export const NAV_ITEMS = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Proyek", href: "/portfolio" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Artikel", href: "/artikel" },
  { name: "Karir", href: "/karir" },
  { name: "Kontak", href: "/kontak" },
];

export const FEATURED_ARTICLE = {
  id: "transformasi-digital",
  title: "Transformasi Digital dalam Operasional Perusahaan",
  excerpt: "Digitalisasi proses internal bukan sekadar penggantian perangkat, melainkan penataan ulang cara perusahaan mengambil keputusan.",
  tags: ["SOROTAN UTAMA", "KORPORAT"],
  category: "KORPORAT",
  authorName: "Dr. Arif Nugroho",
  authorRole: "Direktur Operasional",
  date: "12 Agustus 2026",
  readTime: "6 menit baca",
  slug: "transformasi-digital-dalam-operasional-perusahaan",
  image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
  contentParagraphs: [
    "Transformasi digital kerap dipahami secara sempit sebagai pengadaan perangkat lunak baru. Padahal, inti dari transformasi adalah penataan ulang alur kerja, tata kelola data, dan mekanisme pengambilan keputusan di seluruh lini organisasi.",
    "Dalam tiga tahun terakhir, perusahaan melakukan pemetaan menyeluruh terhadap proses operasional yang berjalan. Hasil pemetaan menunjukkan bahwa sebagian besar keterlambatan bukan berasal dari keterbatasan teknologi, melainkan dari duplikasi persetujuan antarunit yang tidak diperlukan.",
    "Langkah pertama yang diambil adalah menyederhanakan jalur persetujuan dan menetapkan satu sumber data tunggal untuk setiap kategori informasi. Dengan demikian, setiap unit kerja merujuk pada angka yang sama ketika menyusun laporan bulanan.",
    "Manajemen berpandangan bahwa keberhasilan transformasi diukur dari kualitas keputusan, bukan dari jumlah sistem yang diadopsi. Oleh karena itu, evaluasi dilakukan setiap kuartal dengan indikator yang disepakati bersama seluruh kepala divisi.",
    "Ke depan, perusahaan akan melanjutkan penguatan kapasitas sumber daya manusia melalui program pelatihan berkelanjutan, sehingga adopsi teknologi berjalan seiring dengan kesiapan organisasi."
  ]
};

export const ARTICLES_LIST = [
  {
    id: "tata-kelola",
    category: "TATA KELOLA",
    title: "Penerapan Tata Kelola Perusahaan yang Baik",
    excerpt: "Prinsip transparansi, akuntabilitas, dan kewajiban menjadi landasan seluruh kebijakan yang ditetapkan manajemen.",
    authorName: "Dr. Arif Nugroho",
    authorRole: "Direktur Operasional",
    date: "28 Juli 2026",
    readTime: "5 menit baca",
    slug: "penerapan-tata-kelola-perusahaan-yang-baik",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    contentParagraphs: [
      "Prinsip transparansi, akuntabilitas, dan kewajiban menjadi landasan seluruh kebijakan yang ditetapkan manajemen CV. An Nasr Konsultan.",
      "Penerapan tata kelola yang baik (Good Corporate Governance) memastikan setiap proyek teknik sipil dan konstruksi berjalan sesuai standar regulasi nasional.",
      "Melalui pengawasan berkala dan audit internal, kualitas hasil pekerjaan serta efisiensi anggaran dapat senantiasa terjaga demi kepuasan klien."
    ]
  },
  {
    id: "sdm",
    category: "SUMBER DAYA MANUSIA",
    title: "Pengembangan Kompetensi Sumber Daya Manusia",
    excerpt: "Program pelatihan terstruktur disusun untuk memastikan kesiapan karyawan menghadapi kebutuhan industri yang terus berkembang.",
    authorName: "Dr. Arif Nugroho",
    authorRole: "Direktur Operasional",
    date: "15 Juli 2026",
    readTime: "4 menit baca",
    slug: "pengembangan-kompetensi-sumber-daya-manusia",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    contentParagraphs: [
      "Program pelatihan terstruktur disusun untuk memastikan kesiapan karyawan menghadapi kebutuhan industri yang terus berkembang.",
      "Peningkatan skill teknis sipil, sertifikasi keahlian, dan pemahaman keselamatan kerja (K3) menjadi fokus utama program sertifikasi tim perencana dan pengawas kami.",
      "Pengembangan SDM yang konsisten merupakan kunci utama daya saing perusahaan dalam memberikan layanan konsultansi terbaik."
    ]
  },
  {
    id: "keberlanjutan",
    category: "KEBERLANJUTAN",
    title: "Komitmen Keberlanjutan dan Pengelolaan Lingkungan",
    excerpt: "Perusahaan menargetkan efisiensi energi dan pengurangan limbah operasional secara terukur pada seluruh fasilitas.",
    authorName: "Dr. Arif Nugroho",
    authorRole: "Direktur Operasional",
    date: "30 Juni 2026",
    readTime: "5 menit baca",
    slug: "komitmen-keberlanjutan-dan-pengelolaan-lingkungan",
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    contentParagraphs: [
      "Perusahaan menargetkan efisiensi energi dan pengurangan limbah operasional secara terukur pada seluruh fasilitas.",
      "Dalam setiap desain perencanaan gedung dan infrastruktur sipil, kami mengintegrasikan konsep green building dan analisis dampak lingkungan.",
      "Inisiatif ini bertujuan menciptakan pembangunan yang tidak hanya kokoh secara struktur, namun juga ramah bagi ekosistem sekitar."
    ]
  },
  {
    id: "operasional",
    category: "OPERASIONAL",
    title: "Standar Mutu Layanan dan Kepuasan Pelanggan",
    excerpt: "Penerapan standar mutu yang konsisten menjadi dasar peningkatan kepercayaan pelanggan terhadap layanan perusahaan.",
    authorName: "Dr. Arif Nugroho",
    authorRole: "Direktur Operasional",
    date: "18 Juni 2026",
    readTime: "4 menit baca",
    slug: "standar-mutu-layanan-dan-kepuasan-pelanggan",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    contentParagraphs: [
      "Penerapan standar mutu yang konsisten menjadi dasar peningkatan kepercayaan pelanggan terhadap layanan perusahaan.",
      "Pengawasan ketat dari tahap survei awal, perancangan RAB, hingga eksekusi proyek memastikan hasil kerja tepat spesifikasi dan tepat waktu."
    ]
  },
  {
    id: "kemitraan",
    category: "KORPORAT",
    title: "Kemitraan Strategis dan Rencana Ekspansi Usaha",
    excerpt: "Perluasan jaringan kemitraan diarahkan untuk memperkuat rantai pasok dan memperluas jangkauan layanan di wilayah baru.",
    authorName: "Dr. Arif Nugroho",
    authorRole: "Direktur Operasional",
    date: "02 Juni 2026",
    readTime: "4 menit baca",
    slug: "kemitraan-strategis-dan-rencana-ekspansi-usaha",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80",
    contentParagraphs: [
      "Perluasan jaringan kemitraan diarahkan untuk memperkuat rantai pasok dan memperluas jangkauan layanan di wilayah baru.",
      "Sinergi bersama mitra strategis mendukung komitmen perusahaan untuk menghadirkan solusi teknis terintegrasi bagi instansi dan swasta."
    ]
  },
];



// WhatsApp Widget Redirect Options
export const WHATSAPP_OPTIONS = [
  {
    title: "Perencanaan & Sipil",
    desc: "Konsultasi desain, struktur, & rancangan teknis",
    text: "Halo CV. An Nasr Konsultan, saya ingin berkonsultasi mengenai perencanaan desain/struktur bangunan.",
  },
  {
    title: "Perizinan (PBG & SLF)",
    desc: "Tanya pengurusan izin bangunan & sertifikat layak fungsi",
    text: "Halo CV. An Nasr Konsultan, saya ingin berkonsultasi tentang pengurusan izin PBG atau sertifikat SLF.",
  },
  {
    title: "Jasa Konstruksi & Pengawasan",
    desc: "Pelaksanaan fisik bangunan atau pengawasan proyek",
    text: "Halo CV. An Nasr Konsultan, saya tertarik dengan jasa konstruksi atau pengawasan proyek.",
  },
];

// Home page: Client List Data
export const HOME_CLIENTS = [
  { label: "PJ", name: "Pemkab Jombang" },
  { label: "DP", name: "Dinas PUPR Jombang" },
  { label: "DB", name: "Desa Bedahlawak" },
  { label: "DC", name: "Desa Candi Mulyo" },
  { label: "KT", name: "Kecamatan Tembelang" },
  { label: "KP", name: "Kecamatan Ploso" },
  { label: "KM", name: "Kecamatan Megaluh" },
  { label: "YA", name: "Yayasan Al Hikmah" },
  { label: "SN", name: "SMK Nusantara" },
  { label: "MA", name: "MI Al Falah" },
  { label: "PD", name: "Ponpes Darul Ulum" },
  { label: "CM", name: "CV. Mitra Karya" },
  { label: "CB", name: "CV. Bumi Persada" },
  { label: "PS", name: "PT. Sarana Bangun" },
  { label: "PT", name: "PT. Tirta Mandiri" },
  { label: "KS", name: "Koperasi Sejahtera" },
  { label: "RA", name: "RSU Amanah" },
  { label: "BM", name: "BUMDes Makmur" },
  { label: "PJ", name: "PDAM Jombang" },
  { label: "PT", name: "Perumda Tirta" },
];

// Home page: Project Locations
export const HOME_LOCATIONS = [
  "Jombang", "Mojokerto", "Kediri", "Nganjuk", "Surabaya", "Lamongan",
  "Malang", "Semarang", "Bandung", "Balikpapan", "Makassar", "Denpasar"
];

// Home page: Work Processes
export const HOME_PROCESSES = [
  {
    step: "01",
    title: "Konsultasi",
    desc: "Diskusi awal untuk memahami kebutuhan, lingkup, serta anggaran proyek Anda."
  },
  {
    step: "02",
    title: "Survey Lapangan",
    desc: "Pengukuran, pengambilan data topografi, dan pemeriksaan kondisi eksisting lokasi."
  },
  {
    step: "03",
    title: "Perencanaan",
    desc: "Penyusunan desain teknis, perhitungan struktur, dan rencana anggaran biaya."
  },
  {
    step: "04",
    title: "Penyusunan Dokumen",
    desc: "Gambar kerja, RKS, RAB, serta dokumen perizinan disiapkan secara lengkap."
  },
  {
    step: "05",
    title: "Pelaksanaan",
    desc: "Pekerjaan konstruksi dijalankan sesuai metode kerja dan jadwal yang disepakati."
  },
  {
    step: "06",
    title: "Pengawasan",
    desc: "Pengendalian mutu bahan, volume, dan progres pekerjaan di lapangan setiap tahap."
  },
  {
    step: "07",
    title: "Serah Terima",
    desc: "Pemeriksaan akhir, penyerahan dokumen as built, dan serah terima pekerjaan."
  }
];

// Home page: Featured Projects
export const HOME_FEATURED_PROJECTS = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    tag: "Gedung",
    imgBg: "bg-gradient-to-r from-blue-700 to-indigo-800"
  },
  {
    title: "Peningkatan Jalan Beton Desa",
    location: "Kecamatan Tembelang, Jombang",
    tag: "Jalan",
    imgBg: "bg-gradient-to-r from-emerald-600 to-teal-700"
  },
  {
    title: "Pembangunan Jembatan Penghubung Desa",
    location: "Kecamatan Ploso, Jombang",
    tag: "Jembatan",
    imgBg: "bg-gradient-to-r from-blue-800 to-sky-900"
  },
  {
    title: "Rehabilitasi Saluran Irigasi Primer",
    location: "Kecamatan Megaluh, Jombang",
    tag: "Irigasi",
    imgBg: "bg-gradient-to-r from-cyan-600 to-blue-700"
  },
  {
    title: "Renovasi Rumah Tinggal Dua Lantai",
    location: "Candi Mulyo, Jombang",
    tag: "Renovasi",
    imgBg: "bg-gradient-to-r from-slate-700 to-slate-800"
  },
  {
    title: "Pengawasan Bangunan Penahan Air",
    location: "Kabupaten Jombang",
    tag: "Pengawasan",
    imgBg: "bg-gradient-to-r from-purple-700 to-indigo-800"
  }
];

// Career page: Job Openings
export const CAREER_JOBS = [
  {
    title: "Civil Estimator & Planner",
    type: "Full-Time",
    location: "Jombang (Office)",
    exp: "Minimal 2 Tahun",
    desc: "Menyusun perhitungan Rencana Anggaran Biaya (RAB), analisa harga satuan pekerjaan sipil, gambar Detail Engineering Design (DED), serta laporan spesifikasi teknik."
  },
  {
    title: "Drafter AutoCAD / SketchUp",
    type: "Full-Time / Contract",
    location: "Jombang (Office)",
    exp: "Minimal 1 Tahun / Fresh Graduate welcome",
    desc: "Membuat gambar perencanaan gedung, shop drawing jalan/jembatan, gambar kerja 2D detail struktur, serta pemodelan 3D arsitektur bangunan."
  },
  {
    title: "Site Supervisor / Pengawas Lapangan",
    type: "Project-Based",
    location: "Jombang & Sekitarnya (On-Site)",
    exp: "Minimal 2 Tahun",
    desc: "Melakukan monitoring harian progres fisik lapangan, pengecekan ketebalan jalan/mutu beton segar, verifikasi volume terpasang kontraktor, serta menyusun laporan harian."
  }
];

// Clients page: Categorized clients
export const KLIEN_GOV = [
  { label: "PJ", name: "Pemkab Jombang" },
  { label: "DP", name: "Dinas PUPR Jombang" },
  { label: "KT", name: "Kecamatan Tembelang" },
  { label: "KP", name: "Kecamatan Ploso" },
  { label: "KM", name: "Kecamatan Megaluh" },
  { label: "DB", name: "Desa Bedahlawak, Jombang" },
  { label: "DC", name: "Desa Candi Mulyo, Jombang" },
];

export const KLIEN_PRIVATE = [
  { label: "CM", name: "CV. Mitra Karya" },
  { label: "CB", name: "CV. Bumi Persada" },
  { label: "PS", name: "PT. Sarana Bangun" },
  { label: "PT", name: "PT. Tirta Mandiri" },
  { label: "KS", name: "Koperasi Sejahtera" },
  { label: "RA", name: "RSU Amanah Jombang" },
  { label: "BM", name: "BUMDes Makmur Jombang" },
  { label: "PJ", name: "PDAM Jombang" },
  { label: "PT", name: "Perumda Tirta" },
];

export const KLIEN_INSTITUTION = [
  { label: "YA", name: "Yayasan Al Hikmah" },
  { label: "SN", name: "SMK Nusantara" },
  { label: "MA", name: "MI Al Falah" },
  { label: "PD", name: "Ponpes Darul Ulum Jombang" },
];

// Portfolio page: Projects data
export const PORTFOLIO_PROJECTS = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "Gedung",
    status: "Selesai",
    year: "2025",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Peningkatan Jalan Beton Desa",
    location: "Kecamatan Tembelang, Jombang",
    category: "Jalan",
    status: "Selesai",
    year: "2025",
    image: "https://images.unsplash.com/photo-1594913785162-e6785b423cb1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pembangunan Jembatan Penghubung Desa",
    location: "Kecamatan Ploso, Jombang",
    category: "Jembatan",
    status: "Selesai",
    year: "2024",
    image: "https://images.unsplash.com/photo-1545624446-0c9f11651811?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Rehabilitasi Saluran Irigasi Primer",
    location: "Kecamatan Megaluh, Jombang",
    category: "Irigasi",
    status: "Selesai",
    year: "2024",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Renovasi Rumah Tinggal Dua Lantai",
    location: "Candi Mulyo, Jombang",
    category: "Renovasi",
    status: "Selesai",
    year: "2025",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pengawasan Bangunan Penahan Air",
    location: "Kabupaten Jombang",
    category: "Irigasi",
    status: "Selesai",
    year: "2023",
    image: "https://images.unsplash.com/photo-1584947936173-0fbf90dbcc84?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Perencanaan Kantor Instansi Pemerintah",
    location: "Kecamatan Jombang, Jombang",
    category: "Gedung",
    status: "Selesai",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pembangunan Ruko Komersial 3 Unit",
    location: "Mojoagung, Jombang",
    category: "Gedung",
    status: "Selesai",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pelebaran Jalan Aspal Hotmix",
    location: "Diwek, Jombang",
    category: "Jalan",
    status: "Selesai",
    year: "2023",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&w=800&q=80"
  }
];

export const PORTFOLIO_CATEGORIES = ["Semua", "Bangunan", "Jalan", "Jembatan", "Irigasi", "Gedung", "Renovasi"];

// Tentang page: Core Values
export const TENTANG_VALUES = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integritas",
    desc: "Kejujuran dan tanggung jawab moral adalah landasan utama dalam mengelola anggaran proyek dan menetapkan spesifikasi material konstruksi."
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Tepat Mutu",
    desc: "Penerapan standar teknis ketat pada perhitungan struktur dan pengawasan lapangan demi menjamin keamanan jangka panjang."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Profesionalisme",
    desc: "Dukungan tenaga ahli teknik sipil bersertifikat dan berdedikasi tinggi yang memahami dinamika rekayasa konstruksi terkini."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Tepat Waktu & Biaya",
    desc: "Manajemen penjadwalan terukur dan pengawasan RAB yang presisi untuk menghindari pemborosan biaya operasional di lapangan."
  }
];

// Layanan page: Services configuration
export const SERVICES = [
  {
    slug: "perencanaan",
    title: "Jasa Perencanaan",
    icon: <Compass className="w-6 h-6" />,
    desc: "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    longDesc: "Desain arsitektur dan perhitungan struktur teknik sipil yang aman, akurat, dan estetis. Kami menyusun cetak biru proyek dengan estimasi RAB yang realistis.",
    scopes: [
      "Perencanaan Bangunan Gedung (Rumah, Ruko, Kantor, Sekolah)",
      "Perencanaan Jalan (Rabat Beton, Aspal Hotmix, Paving Block)",
      "Perencanaan Jembatan & Dinding Penahan Tanah (DPT)",
      "Perencanaan Jaringan Irigasi & Saluran Pembuang Air"
    ],
    image: "/images/perencanaan.jpg"
  },
  {
    slug: "pengawasan",
    title: "Jasa Pengawasan",
    icon: <Eye className="w-6 h-6" />,
    desc: "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    longDesc: "Menjaga kepentingan pemilik proyek di lapangan agar kontraktor melaksanakan konstruksi sesuai gambar rencana, RKS, volume yang benar, dan waktu yang disepakati.",
    scopes: [
      "Pengawasan Struktur & Finishing Bangunan Gedung Bertingkat",
      "Pengawasan Peningkatan Jalan Raya & Jembatan Penghubung",
      "Pengawasan Pekerjaan Infrastruktur & Sanitasi Lingkungan",
      "Penyusunan Laporan Progres Mingguan, Bulanan & As Built Drawing"
    ],
    image: "/images/pengawasan.jpg"
  },
  {
    slug: "perizinan",
    title: "Jasa Perizinan",
    icon: <FileText className="w-6 h-6" />,
    desc: "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    longDesc: "Membantu melengkapi prasyarat perizinan bangunan gedung sesuai Sistem Informasi Bangunan Gedung (SIMBG). Mengkaji kelayakan teknis struktur dan proteksi kebakaran.",
    scopes: [
      "Persetujuan Bangunan Gedung (PBG - pengganti IMB)",
      "Sertifikat Laik Fungsi (SLF) Bangunan Gedung Baru & Eksisting",
      "Kajian Teknis Kelayakan Struktur Bangunan Gedung",
      "Rekomendasi Teknis Damkar & Instalasi Proteksi Petir"
    ],
    image: "/images/perizinan.jpg"
  },
  {
    slug: "konstruksi",
    title: "Jasa Konstruksi",
    icon: <Hammer className="w-6 h-6" />,
    desc: "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    longDesc: "Pelaksana pembangunan gedung, renovasi rumah tinggal, ruko, gedung kantor, hingga jalan beton dengan jaminan mutu material berkualitas dan pengerjaan yang rapi.",
    scopes: [
      "Pembangunan Baru & Renovasi Total Rumah Tinggal Mewah",
      "Pelaksanaan Konstruksi Ruko & Gedung Fasilitas Umum",
      "Pekerjaan Sipil Jalan Beton, Paving, dan Saluran Drainase",
      "Pekerjaan Struktur Baja, Beton Bertulang, & Atap Baja Ringan"
    ],
    image: "/images/konstruksi.jpg"
  }
];

// Detail Layanan: Perencanaan scopes & outputs
export const PERENCANAAN_SCOPES = [
  {
    title: "Perencanaan Bangunan Gedung",
    desc: "Penyusunan blueprint rumah tinggal, ruko, gedung kantor, gedung sekolah, dan fasilitas umum terintegrasi lengkap."
  },
  {
    title: "Perencanaan Jalan & Paving",
    desc: "Desain tebal perkerasan jalan (kaku/rigid beton maupun lentur/aspal), drainase jalan, dan pemasangan paving block."
  },
  {
    title: "Perencanaan Jembatan & DPT",
    desc: "Perhitungan kekuatan jembatan bentang pendek/menengah, gorong-gorong box culvert, dan dinding penahan tanah lereng."
  },
  {
    title: "Perencanaan Saluran Irigasi",
    desc: "Desain jaringan saluran air primer, sekunder, tersier, bangunan bagi air, pintu air, dan bangunan penahan air."
  }
];

export const PERENCANAAN_OUTPUTS = [
  "Gambar Kerja / Gambar Rencana Lengkap (2D CAD & 3D Rendering)",
  "Dokumen Perhitungan Struktur Sipil (Disertai Lembar Pertanggungjawaban Ahli)",
  "Rencana Anggaran Biaya (RAB) Lengkap dengan Analisa Harga Satuan",
  "Daftar Rencana Kerja & Syarat-Syarat Teknis (RKS)",
  "Dokumen Spesifikasi Teknis Material Bangunan",
  "Dokumen Prasyarat Pengurusan PBG / SLF Bangunan"
];

// Detail Layanan: Pengawasan scopes & outputs
export const PENGAWASAN_SCOPES = [
  {
    title: "Pengawasan Gedung Bertingkat",
    desc: "Pengawasan pengecoran beton, penulangan kolom/balok, finishing dinding, penataan MEP (Mekanikal Elektrikal Plambing)."
  },
  {
    title: "Pengawasan Konstruksi Jalan & Jembatan",
    desc: "Pengendalian elevasi topografi tanah dasar, pengawasan tebal beton K-350/K-400, dan kualitas erection balok girder jembatan."
  },
  {
    title: "Pengawasan Bangunan Air & Irigasi",
    desc: "Monitoring galian saluran drainase, pemasangan batu kali pengarah air, bendungan bagi air, dan pintu air irigasi."
  },
  {
    title: "Pemeriksaan Kualitas Material Lapangan",
    desc: "Verifikasi sertifikat uji lab pabrikan besi tulangan, slump test beton segar di lapangan, dan uji lab silinder beton."
  }
];

export const PENGAWASAN_OUTPUTS = [
  "Laporan Harian (Cuaca, Tenaga Kerja, Material, Alat)",
  "Laporan Mingguan & Bulanan (Progres Kurva S Fisik Lapangan)",
  "Dokumentasi Foto Progres Pekerjaan (0%, 50%, 100%)",
  "Laporan Uji Mutu Bahan (Uji Kuat Tekan Beton, Paving, dll)",
  "Rekomendasi Pembayaran Termin Kontraktor (Mutual Check 0% - 100%)",
  "Draft As Built Drawing (Gambar Rekaman Akhir Hasil Konstruksi)"
];

// Detail Layanan: Perizinan scopes & outputs
export const PERIZINAN_SCOPES = [
  {
    title: "Persetujuan Bangunan Gedung (PBG)",
    desc: "Pengurusan izin pendirian bangunan baru (pengganti IMB), perubahan fungsi bangunan, dan perluasan bangunan eksisting."
  },
  {
    title: "Sertifikat Laik Fungsi (SLF)",
    desc: "Pemeriksaan teknis kelaikan fungsi bangunan gedung baru maupun perpanjangan SLF bangunan gedung eksisting (hotel, pabrik, sekolah)."
  },
  {
    title: "Kajian Teknis Kelayakan Struktur",
    desc: "Pengujian non-destructive testing (NDT) seperti Schmidt Hammer Test beton, pengukuran defleksi baja, dan rekomendasi perkuatan struktur."
  },
  {
    title: "Rekomendasi Proteksi Damkar & Petir",
    desc: "Penyusunan dokumen simulasi evakuasi kebakaran, ketersediaan hidran/APAR, dan pengujian tahanan grounding penangkal petir."
  }
];

export const PERIZINAN_OUTPUTS = [
  "Gambar As Built Drawing Arsitektur, Struktur, MEP",
  "Laporan Hasil Kajian Teknis Kelaikan Fungsi Gedung (SLF)",
  "Dokumen Perhitungan Ulang Kekuatan Struktur Gedung",
  "Sertifikat Laik Operasi (SLO) Genset & Lift (bila ada)",
  "Dokumen Analisis Mengenai Dampak Lingkungan (AMDAL/UKL-UPL)",
  "Rekomendasi Damkar dan Hasil Uji Instalasi Petir"
];

// Detail Layanan: Konstruksi scopes & outputs
export const KONSTRUKSI_SCOPES = [
  {
    title: "Pembangunan Rumah Tinggal & Ruko",
    desc: "Konstruksi unit perumahan baru, villa, ruko usaha, dan kantor operasional dengan finishing premium dan pengerjaan rapi."
  },
  {
    title: "Renovasi Rumah & Gedung",
    desc: "Renovasi penambahan lantai (dak beton), perbaikan atap baja ringan, penggantian keramik/granit lantai, dan tata ulang ruangan."
  },
  {
    title: "Konstruksi Jalan & Paving",
    desc: "Pengecoran jalan beton rabat desa/kecamatan (rigid pavement), pengaspalan hotmix, dan penataan area parkir paving block."
  },
  {
    title: "Konstruksi Jembatan & Irigasi",
    desc: "Pembangunan jembatan beton bertulang sederhana, penataan dinding penahan tanah kali, dan normalisasi saluran irigasi."
  }
];

export const KONSTRUKSI_OUTPUTS = [
  "Jaminan Mutu Material Sesuai Kontrak (SNI Resmi)",
  "Jadwal Pelaksanaan Terarah (Kurva S Terpantau Berkala)",
  "Garansi Pemeliharaan Pasca Kontrak Fisik (Defects Liability)",
  "Metode Kerja Aman & Meminimalisir Gangguan Tetangga",
  "Penyediaan APD & Rambu K3 untuk Pekerja Konstruksi",
  "Pelaporan Progres Terbuka Melalui Foto & Video Lapangan"
];
