import { HOME_CLIENTS } from "@/lib/constant";

export default function ClientsSection() {
  const marqueeItems = [...HOME_CLIENTS, ...HOME_CLIENTS];

  return (
    <section className="bg-slate-50/60 px-6 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            Klien Kami
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Dipercaya instansi, lembaga, dan mitra usaha
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR
            KONSULTAN.
          </p>
        </div>
      </div>
      <div className="marquee-mask mt-10 overflow-hidden">
        <ul className="marquee-track flex w-max items-center gap-3">
          {marqueeItems.map((client, idx) => (
            <li
              key={idx}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-slate-200/80 bg-white px-4 py-2 shadow-sm"
            >
              <span className="flex size-7 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-[#0066FF]">
                {client.label}
              </span>
              <span className="whitespace-nowrap text-xs font-semibold text-slate-700">
                {client.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}


