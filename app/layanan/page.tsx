"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, FileText, Hammer, ArrowRight, CheckCircle } from "lucide-react";

const SERVICES = [
  {
    slug: "perencanaan",
    title: "Jasa Perencanaan",
    icon: <Compass className="w-6 h-6" />,
    desc: "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    longDesc: "Desain arsitektur dan perhitungan struktur teknik sipil yang aman, akurat, dan estetis. Kami menyusun cetak biru proyek dengan estimasi RAB yang realistis.",
    scopes: [
      "Perencanaan Bangunan Gedung (Rumah, Ruko, Kantor, Sekolah)",
      "Perencanaan Jalan (Rabat Beton, Aspal Hotmix, Paving Block)",
      "Perencanaan Jembatan & Dinding Penahan Tanah (DPT)",
      "Perencanaan Jaringan Irigasi & Saluran Pembuang Air"
    ],
    image: "/images/perencanaan.jpg"
  },
  {
    slug: "pengawasan",
    title: "Jasa Pengawasan",
    icon: <Eye className="w-6 h-6" />,
    desc: "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    longDesc: "Menjaga kepentingan pemilik proyek di lapangan agar kontraktor melaksanakan konstruksi sesuai gambar rencana, RKS, volume yang benar, dan waktu yang disepakati.",
    scopes: [
      "Pengawasan Struktur & Finishing Bangunan Gedung Bertingkat",
      "Pengawasan Peningkatan Jalan Raya & Jembatan Penghubung",
      "Pengawasan Pekerjaan Infrastruktur & Sanitasi Lingkungan",
      "Penyusunan Laporan Progres Mingguan, Bulanan & As Built Drawing"
    ],
    image: "/images/pengawasan.jpg"
  },
  {
    slug: "perizinan",
    title: "Jasa Perizinan",
    icon: <FileText className="w-6 h-6" />,
    desc: "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    longDesc: "Membantu melengkapi prasyarat perizinan bangunan gedung sesuai Sistem Informasi Bangunan Gedung (SIMBG). Mengkaji kelayakan teknis struktur dan proteksi kebakaran.",
    scopes: [
      "Persetujuan Bangunan Gedung (PBG - pengganti IMB)",
      "Sertifikat Laik Fungsi (SLF) Bangunan Gedung Baru & Eksisting",
      "Kajian Teknis Kelayakan Struktur Bangunan Gedung",
      "Rekomendasi Teknis Damkar & Instalasi Proteksi Petir"
    ],
    image: "/images/perizinan.jpg"
  },
  {
    slug: "konstruksi",
    title: "Jasa Konstruksi",
    icon: <Hammer className="w-6 h-6" />,
    desc: "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    longDesc: "Pelaksana pembangunan gedung, renovasi rumah tinggal, ruko, gedung kantor, hingga jalan beton dengan jaminan mutu material berkualitas dan pengerjaan yang rapi.",
    scopes: [
      "Pembangunan Baru & Renovasi Total Rumah Tinggal Mewah",
      "Pelaksanaan Konstruksi Ruko & Gedung Fasilitas Umum",
      "Pekerjaan Sipil Jalan Beton, Paving, dan Saluran Drainase",
      "Pekerjaan Struktur Baja, Beton Bertulang, & Atap Baja Ringan"
    ],
    image: "/images/konstruksi.jpg"
  }
];

export default function LayananPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Layanan Utama
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Layanan Teknik & Konstruksi
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Solusi satu atap mulai dari konsep perencanaan arsitektur, pengawasan proyek lapangan, sertifikasi kelaikan bangunan, hingga serah terima fisik bangunan.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col gap-24">
          {SERVICES.map((serv, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={serv.slug}
                id={serv.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-slate-100 pb-20 last:border-b-0 last:pb-0`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-5 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border-4 border-slate-50 bg-slate-100 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={serv.image}
                    alt={serv.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content Section */}
                <div
                  className={`lg:col-span-7 flex flex-col items-start text-left ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                    {serv.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                    {serv.title}
                  </h2>
                  <p className="text-slate-600 text-base mb-6 leading-relaxed">
                    {serv.longDesc}
                  </p>

                  <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-wider mb-4">
                    Lingkup Layanan Kami:
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 w-full">
                    {serv.scopes.map((scope, sIdx) => (
                      <li key={sIdx} className="flex gap-2 text-slate-500 text-sm leading-relaxed">
                        <CheckCircle className="w-4.5 h-4.5 text-lime-600 shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/layanan/${serv.slug}`}
                    className="px-6 py-3 rounded-full text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-1.5 hover:scale-105 transition-all shadow-md"
                  >
                    Pelajari Detail Layanan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
