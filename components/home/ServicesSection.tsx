import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesSection() {
  return (
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
  );
}
