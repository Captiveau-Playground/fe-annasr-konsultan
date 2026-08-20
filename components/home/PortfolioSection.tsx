import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { HOME_FEATURED_PROJECTS } from "@/lib/constant";

export default function PortfolioSection() {
  return (
    <section className="py-24 md:py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="text-left">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
              Portfolio Proyek
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              Proyek Unggulan Kami
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan dengan standar teknis yang sama.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-full text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors flex items-center gap-1.5 group shrink-0"
          >
            Lihat Semua Portfolio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOME_FEATURED_PROJECTS.map((proj, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between h-72 hover:shadow-xl hover:border-slate-200 transition-all duration-300 group"
            >
              <div>
                <span className="bg-blue-600/10 text-blue-600 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider mb-4 inline-block">
                  {proj.tag}
                </span>
                <h3 className="font-extrabold text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm mt-4">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{proj.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
