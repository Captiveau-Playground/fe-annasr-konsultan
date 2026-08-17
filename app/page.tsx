import ProcessStepper from "@/components/ProcessStepper";
import {
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Compass,
  Flag,
  MapPin
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Client List Data
const CLIENTS = [
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

// Project Locations
const LOCATIONS = [
  "Jombang", "Mojokerto", "Kediri", "Nganjuk", "Surabaya", "Lamongan",
  "Malang", "Semarang", "Bandung", "Balikpapan", "Makassar", "Denpasar"
];

// Work Processes
const PROCESSES = [
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

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-950 font-sans overflow-hidden">
        {/* Background Image with Dark Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Construction Cranes Site background"
            fill
            className="object-cover opacity-30 select-none scale-105 animate-pulse-slow"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-950/90 to-slate-950 z-10" />
          {/* Blueprint Grid Lines Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-0">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-1.5 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            Kepercayaan & Profesionalisme Teknik
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl mb-8">
            CV. An Nasr <span className="text-lime-400">Konsultan</span>
          </h1>

          <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl mb-12">
            Menyediakan layanan perencanaan, pengawasan, perizinan, dan konstruksi dengan mengutamakan kualitas, profesionalisme, serta ketepatan dalam setiap tahap pekerjaan.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link
              href="/kontak"
              className="px-8 py-4 rounded-full text-base font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 hover:scale-105 shadow-[0_4px_20px_rgba(139,227,0,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Konsultasi Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/layanan"
              className="px-8 py-4 rounded-full text-base font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors flex items-center justify-center"
            >
              Lihat Layanan
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* 2. Founder Section */}
      <section className="py-24 md:py-32 bg-slate-50 font-sans border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <Image
                  src="/images/founder.jpg"
                  alt="H. Ahmad Nasrullah, S.T."
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right side: Biography */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
                Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                H. Ahmad Nasrullah, S.T.
              </h2>
              <span className="bg-lime-500/20 text-lime-800 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
                Founder & Direktur
              </span>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                &ldquo;Setiap pekerjaan harus dapat dipertanggungjawabkan secara teknis maupun moral.&rdquo;
              </p>
              <p className="text-slate-500 text-base leading-relaxed">
                Berpengalaman lebih dari 15 tahun di bidang teknik sipil, mulai dari perencanaan struktur, pengawasan proyek infrastruktur, hingga pelaksanaan konstruksi bangunan pemerintah dan swasta. Beliau mendirikan CV. AN NASR KONSULTAN dengan satu prinsip sederhana: memastikan kualitas konstruksi yang presisi dan akuntabel di Kabupaten Jombang, Jawa Timur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tentang Kami Section */}
      <section className="py-24 md:py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Content */}
            <div className="lg:col-span-7 flex flex-col text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
                Tentang Kami
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
                Tentang CV. AN NASR KONSULTAN
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                CV. AN NASR KONSULTAN adalah penyedia jasa konsultansi teknik sipil dan arsitektur yang berkedudukan di Kabupaten Jombang, Jawa Timur. Kami menangani pekerjaan perencanaan, pengawasan, pengurusan perizinan bangunan, serta pelaksanaan konstruksi untuk instansi pemerintah, lembaga, maupun perorangan.
              </p>
              <p className="text-slate-600 text-base leading-relaxed mb-10">
                Tujuan kami sederhana: memastikan setiap rencana pembangunan berjalan tepat mutu, tepat biaya, dan tepat waktu. Dengan dukungan tenaga ahli di bidang struktur, jalan, jembatan, dan sumber daya air, kami menghadirkan solusi pembangunan yang profesional dan sesuai standar teknis yang berlaku.
              </p>

              {/* Visi & Misi Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Visi Card */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500/20">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Visi</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Menjadi mitra konsultan teknik dan konstruksi yang terpercaya di Jawa Timur melalui kualitas pekerjaan dan integritas layanan.
                  </p>
                </div>

                {/* Misi Card */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-500/20">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4">
                    <Flag className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">Misi</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Menghadirkan perencanaan yang akurat, pengawasan yang disiplin, serta pelaksanaan konstruksi yang tepat mutu, biaya, dan waktu.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: Team Photo */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <Image
                  src="/images/team.jpg"
                  alt="Tim CV. AN NASR KONSULTAN — Jombang, Jawa Timur"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-slate-500 text-xs font-semibold mt-4 text-center">
                Tim CV. AN NASR KONSULTAN — Jombang, Jawa Timur
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Layanan Kami Section */}
      <section className="py-24 md:py-32 bg-slate-50 font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto mb-6">
            Solusi lengkap dari perencanaan hingga pelaksanaan
          </h2>
          <p className="text-slate-500 text-base max-w-2xl mx-auto mb-16">
            Empat lini layanan utama yang saling terhubung, sehingga setiap tahap proyek Anda tetap terkendali dalam satu standar mutu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1: Jasa Perencanaan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <Image
                  src="/images/perencanaan.jpg"
                  alt="Jasa Perencanaan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 text-left items-start">
                <h3 className="font-extrabold text-xl text-slate-900 mb-3">
                  Jasa Perencanaan
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Perencanaan Bangunan Gedung", "Perencanaan Jalan", "Perencanaan Jembatan"].map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/layanan/perencanaan"
                  className="mt-auto px-6 py-3 rounded-full text-xs font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
                >
                  Lihat Detail
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 2: Jasa Pengawasan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <Image
                  src="/images/pengawasan.jpg"
                  alt="Jasa Pengawasan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 text-left items-start">
                <h3 className="font-extrabold text-xl text-slate-900 mb-3">
                  Jasa Pengawasan
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Pengawasan Bangunan Gedung", "Pengawasan Jalan", "Pengawasan Jembatan"].map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/layanan/pengawasan"
                  className="mt-auto px-6 py-3 rounded-full text-xs font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
                >
                  Lihat Detail
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 3: Jasa Perizinan */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <Image
                  src="/images/perizinan.jpg"
                  alt="Jasa Perizinan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 text-left items-start">
                <h3 className="font-extrabold text-xl text-slate-900 mb-3">
                  Jasa Perizinan
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Persetujuan Bangunan Gedung (PBG)", "Sertifikat Laik Fungsi (SLF)"].map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/layanan/perizinan"
                  className="mt-auto px-6 py-3 rounded-full text-xs font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
                >
                  Lihat Detail
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Service 4: Jasa Konstruksi */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <Image
                  src="/images/konstruksi.jpg"
                  alt="Jasa Konstruksi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-1 text-left items-start">
                <h3 className="font-extrabold text-xl text-slate-900 mb-3">
                  Jasa Konstruksi
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Pembangunan Rumah", "Renovasi Rumah", "Gedung"].map((tag) => (
                    <span key={tag} className="bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/layanan/konstruksi"
                  className="mt-auto px-6 py-3 rounded-full text-xs font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 flex items-center gap-1.5 shadow-sm hover:scale-105 transition-all"
                >
                  Lihat Detail
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Portfolio Section */}
      <section className="py-24 md:py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="text-left">
              <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
                Portfolio Proyek
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
                Proyek Unggulan Kami
              </h2>
              <p className="text-slate-500 text-sm max-w-xl">
                Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan dengan standar teknis yang sama.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="px-6 py-3 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors flex items-center gap-1.5 group shrink-0"
            >
              Lihat Semua Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((proj, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between h-72 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group"
              >
                <div>
                  <span className="bg-blue-600/10 text-blue-600 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider mb-4 inline-block">
                    {proj.tag}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {proj.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-sm mt-4">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{proj.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Klien Kami Section */}
      <section className="py-24 bg-slate-50 font-sans border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Klien Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Dipercaya instansi, lembaga, dan mitra usaha
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-16">
            Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR KONSULTAN.
          </p>

          {/* Grid Client Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {CLIENTS.map((client, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 font-black text-sm flex items-center justify-center">
                  {client.label}
                </div>
                <span className="text-slate-800 text-xs font-bold text-center">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Jangkauan Proyek Section */}
      <section className="py-24 md:py-32 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Jangkauan Proyek
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Kota dan daerah yang pernah kami tangani
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-16">
            Berbasis di Jombang, pekerjaan kami tersebar di berbagai kota di Indonesia.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {LOCATIONS.map((city) => (
              <div
                key={city}
                className="bg-slate-50 border border-slate-100 rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-2 hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300 group"
              >
                <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                <span className="text-slate-800 group-hover:text-white font-extrabold text-sm transition-colors">
                  {city}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Proses Kerja Section */}
      <section className="py-24 md:py-32 bg-slate-50 font-sans border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Proses Kerja
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
            Tujuh tahap kerja yang terukur
          </h2>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mb-16">
            Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima.
          </p>

          <ProcessStepper processes={PROCESSES} />
        </div>
      </section>

      {/* 9. Join Tim Kami Banner */}
      <section className="py-16 bg-white font-sans border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-blue-50/60 border border-blue-100/50 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="max-w-xl">
              <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-2 inline-block">
                Karir & Rekrutmen
              </span>
              <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 leading-tight mb-4">
                Bergabung Bersama Tim Kami
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Kami membuka kesempatan bagi tenaga teknik, drafter, dan pengawas lapangan untuk berkembang bersama CV. AN NASR KONSULTAN.
              </p>
            </div>
            <Link
              href="/karir"
              className="px-8 py-4 rounded-full text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shrink-0 inline-flex items-center gap-1.5 hover:scale-105 transition-all"
            >
              Recruitment
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Call to Action Banner (Inquiry) */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-slate-950 font-sans text-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] z-0" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6">
            Konsultasikan Kebutuhan Proyek Anda Bersama Kami
          </h2>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Sampaikan rencana pembangunan Anda, tim kami akan membantu menyusun solusi teknis yang tepat sasaran dan sesuai anggaran.
          </p>
          <Link
            href="/kontak"
            className="px-10 py-4 rounded-full text-base font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 hover:scale-105 shadow-[0_4px_20px_rgba(139,227,0,0.4)] transition-all duration-300 inline-flex items-center gap-2 group"
          >
            Hubungi Kami
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
