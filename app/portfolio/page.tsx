"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Layers } from "lucide-react";

// Full Projects Data
const PROJECTS = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "Gedung",
    status: "Selesai",
    year: "2025"
  },
  {
    title: "Peningkatan Jalan Beton Desa",
    location: "Kecamatan Tembelang, Jombang",
    category: "Jalan",
    status: "Selesai",
    year: "2025"
  },
  {
    title: "Pembangunan Jembatan Penghubung Desa",
    location: "Kecamatan Ploso, Jombang",
    category: "Jembatan",
    status: "Selesai",
    year: "2024"
  },
  {
    title: "Rehabilitasi Saluran Irigasi Primer",
    location: "Kecamatan Megaluh, Jombang",
    category: "Irigasi",
    status: "Selesai",
    year: "2024"
  },
  {
    title: "Renovasi Rumah Tinggal Dua Lantai",
    location: "Candi Mulyo, Jombang",
    category: "Renovasi",
    status: "Selesai",
    year: "2025"
  },
  {
    title: "Pengawasan Bangunan Penahan Air",
    location: "Kabupaten Jombang",
    category: "Irigasi",
    status: "Selesai",
    year: "2023"
  },
  {
    title: "Perencanaan Kantor Instansi Pemerintah",
    location: "Kecamatan Jombang, Jombang",
    category: "Gedung",
    status: "Selesai",
    year: "2024"
  },
  {
    title: "Pembangunan Ruko Komersial 3 Unit",
    location: "Mojoagung, Jombang",
    category: "Gedung",
    status: "Selesai",
    year: "2025"
  },
  {
    title: "Pelebaran Jalan Aspal Hotmix",
    location: "Diwek, Jombang",
    category: "Jalan",
    status: "Selesai",
    year: "2023"
  }
];

const CATEGORIES = ["Semua", "Gedung", "Jalan", "Jembatan", "Irigasi", "Renovasi"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === "Semua") return true;
    return proj.category === activeCategory;
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-950 z-0 opacity-90" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
          <span className="text-lime-400 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
            Dokumentasi Kerja
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
            Portfolio Proyek Kami
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            Kumpulan proyek perencanaan, pengawasan, perizinan, dan pelaksanaan konstruksi yang diselesaikan dengan standar teknis terbaik.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((proj, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between h-80 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-blue-600/10 text-blue-600 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider">
                        {proj.category}
                      </span>
                      <span className="bg-emerald-500/10 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded">
                        {proj.status}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                      {proj.title}
                    </h3>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{proj.location}</span>
                    </div>
                    <div className="text-slate-400 text-xs font-semibold">
                      Tahun Proyek: {proj.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center justify-center text-slate-400">
              <Layers className="w-12 h-12 mb-4 text-slate-300" />
              <p className="text-base font-medium">Belum ada proyek untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            Miliki Standar Kualitas yang Sama untuk Proyek Anda
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto mb-8">
            Hubungi tim CV. AN NASR KONSULTAN untuk menyusun rancangan anggaran dan perencanaan teknis proyek pembangunan Anda.
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
