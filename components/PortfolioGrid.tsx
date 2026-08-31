"use client";

import React, { useState, useEffect } from "react";
import { MapPin, Layers, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  tagline?: string;
  ctaText?: string;
}

const ITEMS_PER_PAGE = 6;

const FALLBACK_CATEGORIES = [
  "Semua",
  "Gedung",
  "Bangunan",
  "Jembatan",
  "Jalan",
  "Renovasi",
  "Irigasi",
];

const FALLBACK_PROJECTS: Project[] = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "BANGUNAN",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "BANGUNAN",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna 2",
    location: "Kecamatan Jombang, Jombang 2",
    category: "JALAN",
    image: "/assets/proyek-jalan-xGjvwBYW.jpg",
    fallbackImage: "/images/pengawasan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "BANGUNAN",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "BANGUNAN",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna 2",
    location: "Kecamatan Jombang, Jombang 2",
    category: "JALAN",
    image: "/assets/proyek-jalan-xGjvwBYW.jpg",
    fallbackImage: "/images/pengawasan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "BANGUNAN",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "BANGUNAN",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
  },
  {
    title: "Pembangunan Gedung Serbaguna 2",
    location: "Kecamatan Jombang, Jombang 2",
    category: "JALAN",
    image: "/assets/proyek-jalan-xGjvwBYW.jpg",
    fallbackImage: "/images/pengawasan.jpg",
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
    "/assets/proyek-gedung-DKD8sHd2.jpg",
    "/assets/proyek-jalan-xGjvwBYW.jpg",
    "/assets/proyek-jembatan-DmEaBVlD.jpg",
    "/assets/proyek-irigasi-Bmt-FDLU.jpg",
    "/assets/proyek-renovasi-DNXca7xG.jpg",
    "/assets/proyek-bendungan-CTIXBTEp.jpg",
  ];
  const fallbackImage = fallbacks[index % fallbacks.length];

  return {
    title: attrs.title || "Proyek Konstruksi",
    location: attrs.address || attrs.location || "Kabupaten Jombang",
    category: categoryName,
    image: imgUrl || fallbackImage,
    fallbackImage: fallbackImage,
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
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
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
  tagline: propTagline,
  ctaText: propCtaText,
}: PortfolioGridProps) {
  const [projects, setProjects] = useState<Project[]>(
    propProjects && propProjects.length > 0 ? propProjects : FALLBACK_PROJECTS
  );

  const [categories, setCategories] = useState<string[]>(
    propCategories && propCategories.length > 0 ? propCategories : FALLBACK_CATEGORIES
  );

  const [tagline, setTagline] = useState<string>(
    propTagline || "Ratusan Proyek yang Telah Kami Kawal"
  );
  const [ctaText, setCtaText] = useState<string>(
    propCtaText || "Lihat semua proyek"
  );

  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (propTagline) setTagline(propTagline);
    if (propCtaText) setCtaText(propCtaText);
  }, [propTagline, propCtaText]);

  useEffect(() => {
    if (!propTagline || !propCtaText) {
      const endpoint = `${getStrapiBaseUrl()}/api/home-pages`;
      fetch(endpoint)
        .then((res) => (res.ok ? res.json() : null))
        .then((json) => {
          const item = Array.isArray(json?.data) ? json.data[0] : json?.data;
          const attrs = item?.attributes || item;
          if (attrs) {
            if (attrs.portfolio_tagline && !propTagline) {
              setTagline(attrs.portfolio_tagline);
            }
            if (attrs.portfolio_cta_btn_text && !propCtaText) {
              setCtaText(attrs.portfolio_cta_btn_text);
            }
          }
        })
        .catch(() => { });
    }
  }, [propTagline, propCtaText]);

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
    const catLower = proj.category.toLowerCase();
    const activeLower = activeCategory.toLowerCase();
    if (activeLower === "bangunan") {
      return (
        catLower === "bangunan" ||
        catLower === "gedung" ||
        catLower === "renovasi"
      );
    }
    return catLower === activeLower;
  });

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="text-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5">
          {/* Header Title */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-[2.5rem]">
              {tagline}
            </h2>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF7A00] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#e06b00] hover:shadow-lg"
            >
              {ctaText}
              <ArrowRight className="size-4 text-white" aria-hidden="true" />
            </Link>
          </div>

          {/* Categories Filter Tabs */}
          {categories.length > 0 && (
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    aria-pressed={isActive}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer ${isActive
                      ? "bg-[#0066FF] text-white shadow-sm"
                      : "bg-white text-slate-900 hover:bg-slate-100"
                      }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginatedProjects.map((proj, idx) => {
                const initialSrc =
                  proj.image || proj.fallbackImage || "/images/perencanaan.jpg";
                const fallbackSrc =
                  proj.fallbackImage || "/images/perencanaan.jpg";

                return (
                  <div key={idx} className="h-full">
                    <article className="group relative flex h-full aspect-[4/3] w-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900 shadow-md transition-all duration-300 hover:border-white/25 hover:shadow-xl">
                      <ProjectCardImage
                        alt={`${proj.title} — ${proj.location}`}
                        src={initialSrc}
                        fallbackSrc={fallbackSrc}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start">
                        <span className="inline-block rounded-md bg-[#FF7A00] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-2">
                          {proj.category}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold leading-snug text-white drop-shadow-sm">
                          {proj.title}
                        </h3>
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-300">
                          <MapPin className="size-3.5 text-slate-300 shrink-0" aria-hidden="true" />
                          {proj.location}
                        </p>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Halaman Sebelumnya"
                >
                  <ChevronLeft className="size-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    className={`flex size-10 items-center justify-center rounded-xl text-sm font-semibold transition-all cursor-pointer ${currentPage === page
                      ? "bg-[#0066FF] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  aria-label="Halaman Selanjutnya"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="py-20 text-center flex flex-col items-center justify-center text-slate-400">
            <Layers className="w-12 h-12 mb-4 text-slate-500" />
            <p className="text-base font-medium">Belum ada proyek untuk kategori ini.</p>
          </div>
        )}
      </div>
    </section>
  );
}
