import { MapPin } from "lucide-react";
import { HOME_LOCATIONS } from "@/lib/constant";

export default function LocationsSection() {
  return (
    <section className="py-24 md:py-32 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3 inline-block">
          Jangkauan Proyek
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
          Kota dan daerah yang pernah kami tangani
        </h2>
        <p className="text-slate-500 text-sm max-w-xl mx-auto mb-16">
          Berbasis di Jombang, pekerjaan kami tersebar di berbagai kota di Indonesia.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {HOME_LOCATIONS.map((city) => (
            <div
              key={city}
              className="bg-slate-50 border border-slate-100 rounded-2xl py-6 px-4 flex flex-col items-center justify-center gap-2 hover:bg-blue-600 hover:text-white hover:shadow-lg transition-all duration-300 group"
            >
              <MapPin className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
              <span className="text-slate-800 group-hover:text-white font-extrabold text-sm transition-colors">
                {city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
