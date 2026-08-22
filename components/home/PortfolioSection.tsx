"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import Image from "next/image";

const CATEGORIES = [
  "Semua",
  "Bangunan",
  "Jalan",
  "Jembatan",
  "Irigasi",
  "Gedung",
  "Renovasi",
];

const PROJECTS = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    tag: "Gedung",
    image: "/images/perencanaan.jpg",
    alt: "Pembangunan Gedung Serbaguna — Kecamatan Jombang, Jombang",
    height: "h-[26rem]",
  },
  {
    title: "Peningkatan Jalan Beton Desa",
    location: "Kecamatan Tembelang, Jombang",
    tag: "Jalan",
    image: "/images/pengawasan.jpg",
    alt: "Peningkatan Jalan Beton Desa — Kecamatan Tembelang, Jombang",
    height: "h-64",
  },
  {
    title: "Pembangunan Jembatan Penghubung Desa",
    location: "Kecamatan Ploso, Jombang",
    tag: "Jembatan",
    image: "/images/hero-bg.jpg",
    alt: "Pembangunan Jembatan Penghubung Desa — Kecamatan Ploso, Jombang",
    height: "h-[26rem]",
  },
  {
    title: "Rehabilitasi Saluran Irigasi Primer",
    location: "Kecamatan Megaluh, Jombang",
    tag: "Irigasi",
    image: "/images/konstruksi.jpg",
    alt: "Rehabilitasi Saluran Irigasi Primer — Kecamatan Megaluh, Jombang",
    height: "h-64",
  },
  {
    title: "Renovasi Rumah Tinggal Dua Lantai",
    location: "Candi Mulyo, Jombang",
    tag: "Renovasi",
    image: "/images/perizinan.jpg",
    alt: "Renovasi Rumah Tinggal Dua Lantai — Candi Mulyo, Jombang",
    height: "h-64",
  },
  {
    title: "Pengawasan Bangunan Penahan Air",
    location: "Kabupaten Jombang",
    tag: "Bangunan",
    image: "/images/team.jpg",
    alt: "Pengawasan Bangunan Penahan Air — Kabupaten Jombang",
    height: "h-64",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === "Semua") return true;
    if (activeCategory === "Bangunan") {
      return (
        proj.tag === "Bangunan" ||
        proj.tag === "Gedung" ||
        proj.tag === "Renovasi"
      );
    }
    return proj.tag === activeCategory;
  });

  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Dokumentasi pekerjaan yang telah kami tangani
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan
            dengan standar teknis yang sama.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-[#0066FF] bg-[#0066FF] text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {filteredProjects.map((proj, idx) => (
            <div key={idx} className="break-inside-avoid">
              <article className="group relative overflow-hidden rounded-[1.5rem] border border-slate-100 bg-slate-900 shadow-md">
                <Image
                  alt={proj.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${proj.height}`}
                  src={proj.image}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-full bg-[#70E000] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-slate-950">
                    {proj.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-white">
                    {proj.title}
                  </h3>
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-white/80">
                    <MapPin className="size-3.5 text-white/80" aria-hidden="true" />
                    {proj.location}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


