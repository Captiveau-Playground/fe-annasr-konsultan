"use client";

import { Compass, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import VisitorStats from "./VisitorStats";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white font-sans pt-20 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Top Section with Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Info and Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg leading-tight text-white">
                  CV. An Nasr Konsultan
                </div>
                <div className="text-xs font-medium tracking-wide text-slate-400">
                  Konsultan Teknik & Konstruksi
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Penyedia jasa konsultansi teknik sipil, perencanaan, pengawasan, perizinan, dan konstruksi di Kabupaten Jombang, Jawa Timur.
            </p>
          </div>

          {/* Column 2: Quick Links Menu */}
          <div>
            <h3 className="font-bold text-base tracking-wide mb-6 uppercase text-slate-200">
              Menu
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Beranda", href: "/" },
                { name: "Tentang Kami", href: "/tentang" },
                { name: "Layanan", href: "/layanan" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Klien Kami", href: "/klien" },
                { name: "Karir", href: "/karir" },
                { name: "Kontak", href: "/kontak" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-lime-400 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Menu */}
          <div>
            <h3 className="font-bold text-base tracking-wide mb-6 uppercase text-slate-200">
              Layanan
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Jasa Perencanaan", href: "/layanan/perencanaan" },
                { name: "Jasa Pengawasan", href: "/layanan/pengawasan" },
                { name: "Jasa Perizinan", href: "/layanan/perizinan" },
                { name: "Jasa Konstruksi", href: "/layanan/konstruksi" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 text-sm hover:text-lime-400 transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-base tracking-wide mb-2 uppercase text-slate-200">
              Kontak
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-lime-400 shrink-0" />
                <Link
                  href="tel:+6281200000000"
                  className="text-slate-400 text-sm hover:text-lime-400 transition-colors font-medium"
                >
                  +62 812-0000-0000
                </Link>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-lime-400 shrink-0" />
                <Link
                  href="mailto:annasrkonsultan@email.com"
                  className="text-slate-400 text-sm hover:text-lime-400 transition-colors font-medium"
                >
                  annasrkonsultan@email.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Embedded Visitor Stats Chart */}
        <div className="mb-16">
          <VisitorStats />
        </div>

        {/* Bottom Section with Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; 2026 CV. AN NASR KONSULTAN. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-slate-400 text-xs transition-colors"
            >
              Kebijakan Privasi
            </Link>
            <Link
              href="/terms"
              className="text-slate-500 hover:text-slate-400 text-xs transition-colors"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
