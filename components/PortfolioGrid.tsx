"use client";

import React, { useState } from "react";
import { MapPin, Layers } from "lucide-react";

interface Project {
  title: string;
  location: string;
  category: string;
  status: string;
  year: string;
}

interface PortfolioGridProps {
  projects: Project[];
  categories: string[];
}

export default function PortfolioGrid({ projects, categories }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects = projects.filter((proj) => {
    if (activeCategory === "Semua") return true;
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
  );
}
