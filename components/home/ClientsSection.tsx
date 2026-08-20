import { HOME_CLIENTS } from "@/lib/constant";

export default function ClientsSection() {
  return (
    <section className="py-24 bg-slate-50 font-sans border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
          Klien Kami
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          Dipercaya instansi, lembaga, dan mitra usaha
        </h2>
        <p className="text-slate-500 text-sm max-w-xl mx-auto mb-16">
          Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR KONSULTAN.
        </p>

        {/* Grid Client Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {HOME_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-3 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/10 text-blue-600 font-black text-sm flex items-center justify-center">
                {client.label}
              </div>
              <span className="text-slate-800 text-xs font-bold text-center">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
