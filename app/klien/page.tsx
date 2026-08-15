"use client";

import React from "react";
import Link from "next/link";
import { Award, Shield, Users, CheckCircle } from "lucide-react";

// Categorized Client Data
const GOV_CLIENTS = [
  { label: "PJ", name: "Pemkab Jombang" },
  { label: "DP", name: "Dinas PUPR Jombang" },
  { label: "KT", name: "Kecamatan Tembelang" },
  { label: "KP", name: "Kecamatan Ploso" },
  { label: "KM", name: "Kecamatan Megaluh" },
  { label: "DB", name: "Desa Bedahlawak, Jombang" },
  { label: "DC", name: "Desa Candi Mulyo, Jombang" },
];

const PRIVATE_CLIENTS = [
  { label: "CM", name: "CV. Mitra Karya" },
  { label: "CB", name: "CV. Bumi Persada" },
  { label: "PS", name: "PT. Sarana Bangun" },
  { label: "PT", name: "PT. Tirta Mandiri" },
  { label: "KS", name: "Koperasi Sejahtera" },
  { label: "RA", name: "RSU Amanah Jombang" },
  { label: "BM", name: "BUMDes Makmur Jombang" },
  { label: "PJ", name: "PDAM Jombang" },
  { label: "PT", name: "Perumda Tirta" },
];

const INSTITUTION_CLIENTS = [
  { label: "YA", name: "Yayasan Al Hikmah" },
  { label: "SN", name: "SMK Nusantara" },
  { label: "MA", name: "MI Al Falah" },
  { label: "PD", name: "Ponpes Darul Ulum Jombang" },
];

export default function KlienPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Mitra & Kepercayaan
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Klien Kami
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Dipercaya oleh instansi pemerintah kabupaten, pemerintahan desa, yayasan sosial, lembaga pendidikan, hingga pelaku usaha swasta.
          </p>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
              <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
                Proyek Selesai
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-black text-blue-600 mb-2">20+</div>
              <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
                Mitra Tetap
              </div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-black text-blue-600 mb-2">100%</div>
              <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
                Kepatuhan Teknis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Klien Listings */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-20">
          {/* Gov Section */}
          <div className="text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Instansi Pemerintah & Pemerintahan Desa
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Pemberi tugas dalam rangka penyediaan infrastruktur publik, peningkatan jalan, pengawasan saluran air, dan kajian kelayakan struktur gedung daerah.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GOV_CLIENTS.map((c, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 font-black text-sm flex items-center justify-center shrink-0">
                    {c.label}
                  </div>
                  <span className="text-slate-800 text-sm font-bold leading-tight">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Private / Commercial Section */}
          <div className="text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Mitra Swasta & Badan Usaha
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Pendampingan teknis perencanaan kantor komersial, pengurusan Sertifikat Laik Fungsi (SLF) pabrik/kantor, dan pelaksanaan pembangunan ruko.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRIVATE_CLIENTS.map((c, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 font-black text-sm flex items-center justify-center shrink-0">
                    {c.label}
                  </div>
                  <span className="text-slate-800 text-sm font-bold leading-tight">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Institutions Section */}
          <div className="text-left">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              Lembaga Pendidikan & Yayasan
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Perencanaan detail arsitektur ruang kelas baru, asrama pondok pesantren, dan perizinan kelaikan bangunan sarana pendidikan.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {INSTITUTION_CLIENTS.map((c, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 font-black text-sm flex items-center justify-center shrink-0">
                    {c.label}
                  </div>
                  <span className="text-slate-800 text-sm font-bold leading-tight">
                    {c.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            Ingin Bermitra dengan Kami untuk Proyek Mendatang?
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto mb-8">
            Hubungi tim teknisi CV. AN NASR KONSULTAN untuk menyusun proposal kemitraan, konsultasi regulasi SIMBG, atau pendampingan pengkajian teknis.
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
