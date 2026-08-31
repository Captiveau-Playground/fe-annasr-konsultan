"use client";

import { Compass, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import VisitorStats from "./VisitorStats";

export default function Footer() {
  return (
    <footer className="bg-[#133887] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8 lg:py-20">
        {/* Col 1: Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <Compass className="size-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold">CV. An Nasr Konsultan</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/85">
            Penyedia jasa konsultansi teknik sipil, perencanaan, pengawasan,
            perizinan, dan konstruksi di Kabupaten Jombang, Jawa Timur.
          </p>
        </div>

        {/* Col 2: Menu */}
        <div>
          <h3 className="text-sm font-semibold text-white">Menu</h3>
          <ul className="mt-5 space-y-3">
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
                  className="text-sm text-white/85 transition-colors hover:text-[#70E000]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Layanan */}
        <div>
          <h3 className="text-sm font-semibold text-white">Layanan</h3>
          <ul className="mt-5 space-y-3">
            {[
              { name: "Jasa Perencanaan", href: "/layanan/jasa-perencanaan" },
              { name: "Jasa Pengawasan", href: "/layanan/jasa-pengawasan" },
              { name: "Jasa Perizinan", href: "/layanan/jasa-perizinan" },
              { name: "Jasa Konstruksi", href: "/layanan/jasa-konstruksi" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm text-white/85 transition-colors hover:text-[#70E000]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Kontak */}
        <div>
          <h3 className="text-sm font-semibold text-white">Kontak</h3>
          <ul className="mt-5 space-y-4 text-sm text-white/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#70E000]" aria-hidden="true" />
              <span>
                Perumahan Candi Regency No. A10, Desa Candi Mulyo, Kecamatan Jombang, Kabupaten Jombang
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-[#70E000]" aria-hidden="true" />
              <span>+62 812-0000-0000</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-[#70E000]" aria-hidden="true" />
              <span>annasrkonsultan@email.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Visitor Stats Box */}
      <div className="mx-auto max-w-7xl px-5 pb-14 lg:px-8">
        <VisitorStats />
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-white/80 lg:px-8">
          © 2026 CV. AN NASR KONSULTAN. Seluruh hak cipta dilindungi.
        </div>
      </div>
    </footer>
  );
}

