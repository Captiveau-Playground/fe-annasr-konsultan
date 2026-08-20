import { Compass, Flag } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  return (
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
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
  );
}
