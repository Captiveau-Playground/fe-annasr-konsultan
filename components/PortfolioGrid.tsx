"use client";

import React, { useState } from "react";
import { MapPin, Layers } from "lucide-react";
import Image from "next/image";

interface Project {
  title: string;
  location: string;
  category: string;
  status: string;
  year: string;
  image?: string;
}

interface PortfolioGridProps {
  projects: Project[];
  categories: string[];
}

export default function PortfolioGrid({ projects, categories }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === "Semua") return true;
    if (activeCategory === "Bangunan") {
      // "Bangunan" maps to both "Gedung" and "Renovasi" categories
      return proj.category === "Gedung" || proj.category === "Renovasi" || proj.category === "Bangunan";
    }
    return proj.category === activeCategory;
  });

  return (
    <div>
      {/* Categories Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
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

      {/* Projects Masonry/Asymmetric Grid */}
      {filteredProjects.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 w-full">
          {filteredProjects.map((proj, idx) => {
            // Assign varying heights to create a premium asymmetric masonry grid look
            let heightClass = "h-[280px]"; // Default landscape card height
            if (proj.category === "Gedung") {
              heightClass = "h-[450px] md:h-[500px]"; // Tall vertical card
            } else if (proj.category === "Jembatan") {
              heightClass = "h-[360px] md:h-[400px]"; // Medium card
            } else if (proj.category === "Jalan") {
              heightClass = "h-[320px] md:h-[350px]"; // Medium-short card
            }

            return (
              <div
                key={idx}
                className={`break-inside-avoid mb-8 relative w-full ${heightClass} rounded-[2rem] overflow-hidden group shadow-md hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 border border-slate-100/50 bg-slate-100 flex flex-col justify-end`}
              >
                {/* Background Image */}
                {proj.image && (
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={idx < 3}
                  />
                )}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent z-10" />

                {/* Card Context */}
                <div className="relative z-20 p-6 md:p-8 text-left flex flex-col gap-2 mt-auto">
                  {/* Category Tag (Solid Lime Green badge) */}
                  <span className="w-fit bg-lime-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full tracking-wider mb-1 shadow-sm">
                    {proj.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="font-extrabold text-base md:text-xl text-white leading-snug tracking-tight mb-1">
                    {proj.title}
                  </h3>

                  {/* Location & Year details */}
                  <div className="flex items-center justify-between text-slate-350 text-xs font-semibold mt-1">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="text-slate-300">{proj.location}</span>
                    </div>
                    {proj.year && (
                      <span className="text-slate-400 font-bold shrink-0">{proj.year}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center flex flex-col items-center justify-center text-slate-400">
          <Layers className="w-12 h-12 mb-4 text-slate-300" />
          <p className="text-base font-medium">Belum ada proyek untuk kategori ini.</p>
        </div>
      )}
    </div>
  );
}
