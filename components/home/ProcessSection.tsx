import { HOME_PROCESSES } from "@/lib/constant";

export default function ProcessSection() {
  return (
    <section className="bg-slate-50/60 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            Proses Kerja
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Tujuh tahap kerja yang terukur
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima.
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_PROCESSES.map((item) => (
            <div key={item.step} className="h-full">
              <li className="flex h-full flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-sm">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#0066FF] text-xs font-bold text-white shadow-sm">
                  {item.step}
                </span>
                <h3 className="mt-3 text-sm font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </li>
            </div>
          ))}
        </ol>
      </div>
    </section>
  );
}

