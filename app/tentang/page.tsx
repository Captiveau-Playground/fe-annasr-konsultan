import { Award, CheckCircle, Compass, Flag, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TENTANG_VALUES } from "@/lib/constant";

export default function TentangPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Company Profile
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Tentang Kami
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Menyelami nilai-nilai dasar, visi, dan komitmen profesional yang melandasi setiap proyek konstruksi kami.
          </p>
        </div>
      </section>

      {/* Core Profile Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-7 text-left">
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-6">
                Membangun dengan Fondasi Kualitas & Integritas
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed text-base">
                <p>
                  CV. AN NASR KONSULTAN didirikan di Kabupaten Jombang, Jawa Timur, dengan komitmen untuk menjadi mitra terpercaya dalam bidang teknik sipil dan arsitektur. Kami percaya bahwa setiap perencanaan yang matang dan pengawasan yang ketat adalah kunci utama keberhasilan konstruksi yang aman, efisien, dan berdaya guna lama.
                </p>
                <p>
                  Sebagai konsultan teknik, kami menggabungkan keahlian para tenaga ahli bersertifikat dengan pemahaman mendalam tentang peraturan bangunan setempat dan standar teknis nasional. Hal ini memungkinkan kami memberikan solusi perencanaan dan pengawasan yang realistis, ekonomis, serta sepenuhnya dapat dipertanggungjawabkan.
                </p>
                <p>
                  Dari perumahan tinggal, gedung instansi pemerintah, peningkatan jalan beton, hingga rehabilitasi saluran irigasi primer, setiap proyek kami tangani dengan tingkat kedisiplinan dan perhatian terhadap detail yang sama tingginya.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-100">
              <Image
                src="/images/team.jpg"
                alt="Tim Teknik Sipil Jombang"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi Detailed Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Visi */}
            <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Visi Perusahaan</h3>
              <p className="text-slate-600 leading-relaxed text-base">
                Menjadi perusahaan jasa konsultansi teknik sipil, pengawasan, perizinan, dan pelaksana konstruksi terdepan di Jawa Timur yang diakui atas keunggulan kualitas teknis, keandalan operasional, dan integritas moral yang kokoh.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white border border-slate-100 rounded-3xl p-10 shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                <Flag className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Misi Perusahaan</h3>
              <ul className="flex flex-col gap-4 text-slate-600 leading-relaxed text-sm">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Menyediakan jasa perencanaan teknis arsitektur dan struktur yang presisi, aman, dan inovatif sesuai standar yang berlaku.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Menyelenggarakan jasa pengawasan konstruksi yang disiplin guna menjamin ketepatan mutu bahan, volume pekerjaan, dan ketepatan waktu proyek.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Membantu pemilik proyek dalam pengurusan perizinan (PBG & SLF) secara legal, transparan, dan akurat secara regulatif.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>Membangun hubungan jangka panjang yang didasari atas rasa percaya, keterbukaan, dan profesionalisme dengan seluruh mitra kerja.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Nilai Perusahaan
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight mb-16">
            Empat Nilai Dasar Kerja Kami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TENTANG_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition-shadow text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                  {val.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{val.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/30 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            Mari Rencanakan & Bangun Proyek Anda Bersama Kami
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto mb-8">
            Hubungi tim teknisi CV. AN NASR KONSULTAN untuk berdiskusi seputar kebutuhan proyek perencanaan, pengawasan, maupun perizinan bangunan Anda.
          </p>
          <Link
            href="/kontak"
            className="px-8 py-3.5 rounded-full text-sm font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 hover:scale-105 transition-all inline-flex items-center shadow-md"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
