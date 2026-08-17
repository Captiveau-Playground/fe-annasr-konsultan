import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PerizinanDetailPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Detail Header */}
      <section className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-lime-400 text-xs font-bold uppercase mb-6 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Layanan
          </Link>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-4">
            Pengurusan Perizinan PBG & SLF
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Pendampingan penuh pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) melalui sistem SIMBG resmi agar proyek Anda legal dan siap beroperasi.
          </p>
        </div>
      </section>

      {/* Core Detail Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Details */}
            <div className="lg:col-span-8 text-left">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                Legalitas Bangunan Gedung Sesuai Standar Nasional Indonesia
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed text-base mb-12">
                <p>
                  Sesuai dengan Undang-Undang Cipta Kerja dan Peraturan Pemerintah No. 16 Tahun 2021, setiap pemilik bangunan gedung di Indonesia wajib mengantongi dokumen **Persetujuan Bangunan Gedung (PBG)** sebelum melakukan konstruksi, serta **Sertifikat Laik Fungsi (SLF)** sebagai izin operasional pemanfaatan gedung.
                </p>
                <p>
                  Dokumen SLF diterbitkan setelah bangunan gedung diperiksa kelaikan fungsi teknisnya meliputi keandalan struktur bangunan, proteksi bahaya kebakaran, ketersediaan sarana evakuasi, pencahayaan alami, hingga pengelolaan sanitasi air bersih. CV. AN NASR KONSULTAN mendampingi pengurusan perizinan ini secara terintegrasi mulai dari pemeriksaan dokumen teknis, pengkajian lapangan, pengunggahan dokumen ke portal SIMBG, hingga penerbitan sertifikat formal dari Dinas PUPR setempat.
                </p>
              </div>

              {/* Scopes Grid */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Lingkup Jasa Perizinan Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
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
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Outputs Checklist */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Dokumen Prasyarat Pengurusan SIMBG
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 leading-relaxed text-sm">
                {[
                  "Gambar As Built Drawing Arsitektur, Struktur, MEP",
                  "Laporan Hasil Kajian Teknis Kelaikan Fungsi Gedung (SLF)",
                  "Dokumen Perhitungan Ulang Kekuatan Struktur Gedung",
                  "Sertifikat Laik Operasi (SLO) Genset & Lift (bila ada)",
                  "Dokumen Analisis Mengenai Dampak Lingkungan (AMDAL/UKL-UPL)",
                  "Rekomendasi Damkar dan Hasil Uji Instalasi Petir"
                ].map((out, idx) => (
                  <li key={idx} className="flex gap-2.5 items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Sidebar */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              {/* Photo */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md bg-slate-100">
                <Image
                  src="/images/perizinan.jpg"
                  alt="Perizinan PBG SLF Jombang"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-blue-900 text-white rounded-3xl p-8 text-left">
                <h3 className="font-extrabold text-xl mb-4">Butuh Dokumen SLF / PBG?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Dapatkan pendampingan resmi dari tenaga ahli bersertifikat pengkaji teknis bangunan. Hubungi tim legal teknik kami.
                </p>
                <Link
                  href="https://wa.me/6281200000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center px-6 py-3.5 rounded-full text-xs font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 flex items-center gap-1.5 transition-all shadow-md"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
