import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function CareerBanner() {
  return (
    <section className="py-16 bg-white font-sans border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="bg-blue-50/60 border border-blue-100/50 rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="max-w-xl">
            <span className="text-blue-600 font-bold tracking-widest text-[10px] uppercase mb-2 inline-block">
              Karir & Rekrutmen
            </span>
            <h3 className="font-extrabold text-2xl md:text-3xl text-slate-900 leading-tight mb-4">
              Bergabung Bersama Tim Kami
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Kami membuka kesempatan bagi tenaga teknik, drafter, dan pengawas lapangan untuk berkembang bersama CV. AN NASR KONSULTAN.
            </p>
          </div>
          <Link
            href="/karir"
            className="px-8 py-4 rounded-full text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shrink-0 inline-flex items-center gap-1.5 hover:scale-105 transition-all"
          >
            Recruitment
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
