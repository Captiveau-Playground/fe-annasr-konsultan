import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function KontakPage() {

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Konsultasikan Proyek Anda
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Sampaikan gagasan pembangunan atau kendala legalitas perizinan gedung Anda. Kami siap menyusun rancangan solusi teknis terbaik.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column: Contact Info & Map */}
            <div className="lg:col-span-6 text-left flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
                  Detail Kontak & Kantor
                </h2>
                <div className="h-1 w-20 bg-blue-600 rounded mb-8" />

                <ul className="flex flex-col gap-6 text-slate-600 leading-relaxed text-sm">
                  {/* Address */}
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 uppercase tracking-wider">
                        Alamat Kantor
                      </h4>
                      <p className="text-slate-500 text-xs">
                        Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang, Jawa Timur
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 uppercase tracking-wider">
                        Telepon & WhatsApp
                      </h4>
                      <Link
                        href="https://wa.me/6281200000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-bold text-sm hover:underline"
                      >
                        +62 812-0000-0000 (Konsultasi Umum)
                      </Link>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 uppercase tracking-wider">
                        E-mail Perusahaan
                      </h4>
                      <Link
                        href="mailto:annasrkonsultan@email.com"
                        className="text-blue-600 font-bold text-sm hover:underline"
                      >
                        annasrkonsultan@email.com
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="bg-slate-100 rounded-3xl w-full h-80 overflow-hidden relative shadow-inner border border-slate-200/50 flex flex-col items-center justify-center text-slate-400 gap-3">
                {/* SVG/Stylized map look */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center animate-bounce shadow-lg z-10">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-center z-10 px-4">
                  <h4 className="font-bold text-slate-800 text-sm">CV. AN NASR KONSULTAN</h4>
                  <p className="text-xs text-slate-500 mt-1">Perum Candi Regency A10, Jombang</p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-bold text-xs hover:underline mt-4 inline-block bg-white shadow-sm border border-slate-200/80 px-4 py-2 rounded-full"
                  >
                    Buka di Google Maps
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Consultation Form */}
            <div className="lg:col-span-6 text-left">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
