import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PerencanaanDetailPage() {
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
            Jasa Perencanaan Teknik (DED)
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Perencanaan detail (Detail Engineering Design - DED) yang akurat, aman, sesuai regulasi, dan siap dijadikan acuan utama kontraktor di lapangan.
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
                Mengapa Perencanaan Teknis Sangat Krusial?
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed text-base mb-12">
                <p>
                  Perencanaan teknis adalah pondasi utama dari setiap proyek konstruksi. Kesalahan kecil dalam perhitungan struktur atau estimasi material dalam dokumen rencana dapat mengakibatkan pembengkakan biaya (cost overruns) yang masif di lapangan, atau bahkan kegagalan struktur fatal yang mengancam keselamatan.
                </p>
                <p>
                  CV. AN NASR KONSULTAN menyusun perencanaan dengan mengintegrasikan keahlian arsitektural dan rekayasa sipil. Kami memastikan bahwa desain yang dirancang tidak hanya indah secara estetika, tetapi juga kokoh secara struktur, efisien secara biaya, dan memenuhi prasyarat regulasi untuk memperoleh izin pembangunan.
                </p>
              </div>

              {/* Scopes Grid */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Lingkup Jasa Perencanaan Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
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
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Outputs Checklist */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Output Dokumen yang Anda Terima
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 leading-relaxed text-sm">
                {[
                  "Gambar Kerja / Gambar Rencana Lengkap (2D CAD & 3D Rendering)",
                  "Dokumen Perhitungan Struktur Sipil (Disertai Lembar Pertanggungjawaban Ahli)",
                  "Rencana Anggaran Biaya (RAB) Lengkap dengan Analisa Harga Satuan",
                  "Daftar Rencana Kerja & Syarat-Syarat Teknis (RKS)",
                  "Dokumen Spesifikasi Teknis Material Bangunan",
                  "Dokumen Prasyarat Pengurusan PBG / SLF Bangunan"
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
                  src="/images/perencanaan.jpg"
                  alt="Perencanaan Konstruksi Jombang"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-blue-900 text-white rounded-3xl p-8 text-left">
                <h3 className="font-extrabold text-xl mb-4">Butuh Rencana Teknis?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Konsultasikan konsep arsitektur atau parameter teknis rencana infrastruktur Anda dengan tim ahli sipil kami.
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
