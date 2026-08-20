import ProcessStepper from "@/components/ProcessStepper";
import { HOME_PROCESSES } from "@/lib/constant";

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 font-sans border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
          Proses Kerja
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          Tujuh tahap kerja yang terukur
        </h2>
        <p className="text-slate-500 text-sm max-w-xl mx-auto mb-16">
          Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima.
        </p>

        <ProcessStepper processes={HOME_PROCESSES} />
      </div>
    </section>
  );
}
