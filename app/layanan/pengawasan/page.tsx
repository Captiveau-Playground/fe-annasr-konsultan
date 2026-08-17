import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PengawasanDetailPage() {
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
            Jasa Pengawasan Proyek Konstruksi
          </h1>
          <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
            Pengendalian mutu, volume, biaya, dan ketepatan waktu proyek konstruksi secara profesional oleh tim pengawas lapangan yang disiplin.
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
                Perlindungan Investasi Proyek Anda di Lapangan
              </h2>
              <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
              <div className="flex flex-col gap-6 text-slate-600 leading-relaxed text-base mb-12">
                <p>
                  Selama pelaksanaan fisik di lapangan, sering kali terjadi deviasi atau ketidaksesuaian antara material yang digunakan kontraktor dengan spesifikasi yang telah direncanakan. Jasa Pengawasan hadir sebagai wakil sah pemilik proyek (Owner Representative) untuk memastikan pelaksana bekerja sesuai dengan bestek, gambar rencana, dan Rencana Kerja & Syarat-Syarat (RKS).
                </p>
                <p>
                  CV. AN NASR KONSULTAN melakukan monitoring lapangan secara harian maupun mingguan. Kami memverifikasi pengujian kuat tekan beton, ketebalan pengaspalan/jalan beton, penulangan pembesian struktur, hingga metode pengisian saluran drainase. Hal ini menjamin proyek Anda bebas dari pemborosan anggaran akibat pengerjaan ulang (rework) dan menjamin kualitas fisik bangunan yang optimal.
                </p>
              </div>

              {/* Scopes Grid */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Lingkup Jasa Pengawasan Kami
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {[
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
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Outputs Checklist */}
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 uppercase tracking-wider">
                Laporan & Dokumentasi Pengawasan
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600 leading-relaxed text-sm">
                {[
                  "Laporan Harian (Cuaca, Tenaga Kerja, Material, Alat)",
                  "Laporan Mingguan & Bulanan (Progres Kurva S Fisik Lapangan)",
                  "Dokumentasi Foto Progres Pekerjaan (0%, 50%, 100%)",
                  "Laporan Uji Mutu Bahan (Uji Kuat Tekan Beton, Paving, dll)",
                  "Rekomendasi Pembayaran Termin Kontraktor (Mutual Check 0% - 100%)",
                  "Draft As Built Drawing (Gambar Rekaman Akhir Hasil Konstruksi)"
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
                  src="/images/pengawasan.jpg"
                  alt="Pengawasan Konstruksi Jombang"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sidebar Info Card */}
              <div className="bg-blue-900 text-white rounded-3xl p-8 text-left">
                <h3 className="font-extrabold text-xl mb-4">Butuh Pengawas Lapangan?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-8">
                  Pastikan mutu kontraktor Anda terjaga sesuai standar teknis rencana awal. Hubungi tim surveyor pengawas kami.
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
