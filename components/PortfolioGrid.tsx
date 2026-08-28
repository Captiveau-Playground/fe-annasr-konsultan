"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Layers } from "lucide-react";
import Image from "next/image";
import { getStrapiBaseUrl, getStrapiMediaUrl } from "@/lib/api/hero";

export interface Project {
  title: string;
  location: string;
  category: string;
  status?: string;
  year?: string;
  image?: string;
  fallbackImage?: string;
  height?: string;
}

interface PortfolioGridProps {
  projects?: Project[];
  categories?: string[];
}

const FALLBACK_CATEGORIES = [
  "Semua",
  "Bangunan",
  "Jalan",
  "Jembatan",
  "Irigasi",
  "Gedung",
  "Renovasi",
];

const FALLBACK_PROJECTS: Project[] = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "Gedung",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
    height: "h-[26rem]",
  },
  {
    title: "Peningkatan Jalan Beton Desa",
    location: "Kecamatan Tembelang, Jombang",
    category: "Jalan",
    image: "/assets/proyek-jalan-xGjvwBYW.jpg",
    fallbackImage: "/images/pengawasan.jpg",
    height: "h-64",
  },
  {
    title: "Pembangunan Jembatan Penghubung Desa",
    location: "Kecamatan Ploso, Jombang",
    category: "Jembatan",
    image: "/assets/proyek-jembatan-DmEaBVlD.jpg",
    fallbackImage: "/images/hero-bg.jpg",
    height: "h-[26rem]",
  },
  {
    title: "Rehabilitasi Saluran Irigasi Primer",
    location: "Kecamatan Megaluh, Jombang",
    category: "Irigasi",
    image: "/assets/proyek-irigasi-Bmt-FDLU.jpg",
    fallbackImage: "/images/konstruksi.jpg",
    height: "h-64",
  },
  {
    title: "Renovasi Rumah Tinggal Dua Lantai",
    location: "Candi Mulyo, Jombang",
    category: "Renovasi",
    image: "/assets/proyek-renovasi-DNXca7xG.jpg",
    fallbackImage: "/images/perizinan.jpg",
    height: "h-64",
  },
  {
    title: "Pengawasan Bangunan Penahan Air",
    location: "Kabupaten Jombang",
    category: "Bangunan",
    image: "/assets/proyek-bendungan-CTIXBTEp.jpg",
    fallbackImage: "/images/team.jpg",
    height: "h-64",
  },
];

function normalizeItem(rawItem: any, index: number): Project {
  if (!rawItem) return { title: "", location: "", category: "" };

  const attrs = rawItem.attributes || rawItem;

  const categoryName =
    attrs.portofolio_category_settings?.[0]?.name ||
    attrs.portofolio_category_settings?.[0]?.attributes?.name ||
    attrs.category ||
    "Bangunan";

  let imgUrl: string | undefined;
  if (attrs.image) {
    imgUrl = getStrapiMediaUrl(attrs.image);
  }

  const fallbacks = [
    "/images/perencanaan.jpg",
    "/images/pengawasan.jpg",
    "/images/hero-bg.jpg",
    "/images/konstruksi.jpg",
    "/images/perizinan.jpg",
    "/images/team.jpg",
  ];
  const fallbackImage = fallbacks[index % fallbacks.length];

  const height =
    categoryName === "Gedung" || categoryName === "Jembatan" ? "h-[26rem]" : "h-64";

  return {
    title: attrs.title || "Proyek Konstruksi",
    location: attrs.address || attrs.location || "Kabupaten Jombang",
    category: categoryName,
    image: imgUrl || fallbackImage,
    fallbackImage: fallbackImage,
    height: height,
  };
}

function ProjectCardImage({
  src,
  fallbackSrc,
  alt,
  className,
}: {
  src: string;
  fallbackSrc: string;
  alt: string;
  className: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      alt={alt}
      src={imgSrc}
      width={800}
      height={600}
      loading="lazy"
      className={className}
      onError={() => {
        if (imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
    />
  );
}

export default function PortfolioGrid({
  projects: propProjects,
  categories: propCategories,
}: PortfolioGridProps) {
  const [projects, setProjects] = useState<Project[]>(
    propProjects && propProjects.length > 0 ? propProjects : FALLBACK_PROJECTS
  );

  const [categories, setCategories] = useState<string[]>(
    propCategories && propCategories.length > 0 ? propCategories : FALLBACK_CATEGORIES
  );

  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    if (propProjects && propProjects.length > 0) {
      setProjects(propProjects);
    } else {
      const endpoint = `${getStrapiBaseUrl()}/api/portofolio-detail-settings?populate=*`;
      fetch(endpoint)
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
            const normalized = json.data.map((item: any, idx: number) =>
              normalizeItem(item, idx)
            );
            setProjects(normalized);
          } else {
            setProjects(FALLBACK_PROJECTS);
          }
        })
        .catch(() => setProjects(FALLBACK_PROJECTS));
    }
  }, [propProjects]);

  useEffect(() => {
    if (propCategories && propCategories.length > 0) {
      setCategories(propCategories);
    } else {
      const endpoint = `${getStrapiBaseUrl()}/api/portofolio-category-settings`;
      fetch(endpoint)
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          if (json && json.data && Array.isArray(json.data) && json.data.length > 0) {
            const names: string[] = json.data
              .map((item: any) => (item.attributes ? item.attributes.name : item.name))
              .filter(Boolean);
            const withoutSemua = names.filter((n) => n.toLowerCase() !== "semua");
            setCategories(["Semua", ...withoutSemua]);
          } else {
            setCategories(FALLBACK_CATEGORIES);
          }
        })
        .catch(() => setCategories(FALLBACK_CATEGORIES));
    }
  }, [propCategories]);

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === "Semua") return true;
    if (activeCategory === "Bangunan") {
      return (
        proj.category === "Bangunan" ||
        proj.category === "Gedung" ||
        proj.category === "Renovasi"
      );
    }
    return proj.category === activeCategory;
  });

  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24 font-sans">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Dokumentasi pekerjaan yang telah kami tangani
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan dengan standar teknis yang sama.
          </p>
        </div>

        {/* Categories Filter Tabs */}
        {categories.length > 0 && (
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2 text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-sm"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {filteredProjects.map((proj, idx) => {
              const heightClass =
                proj.height ||
                (proj.category === "Gedung" || proj.category === "Jembatan"
                  ? "h-[26rem]"
                  : "h-64");
              const initialSrc =
                proj.image || proj.fallbackImage || "/images/perencanaan.jpg";
              const fallbackSrc =
                proj.fallbackImage || "/images/perencanaan.jpg";

              return (
                <div key={idx} className="break-inside-avoid">
                  <article className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-[var(--shadow-soft)]">
                    <ProjectCardImage
                      alt={`${proj.title} — ${proj.location}`}
                      src={initialSrc}
                      fallbackSrc={fallbackSrc}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${heightClass}`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-90" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-flex rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                        {proj.category}
                      </span>
                      <h3 className="mt-3 text-lg font-bold leading-snug text-primary-foreground">
                        {proj.title}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-primary-foreground/80">
                        <MapPin className="size-3.5" aria-hidden="true" />
                        {proj.location}
                      </p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center text-muted-foreground">
            <Layers className="w-12 h-12 mb-4 text-muted-foreground/60" />
            <p className="text-base font-medium">Belum ada proyek untuk kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
