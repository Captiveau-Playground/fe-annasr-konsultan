import { MapPin } from "lucide-react";
import Image from "next/image";

const LOCATIONS = [
  { name: "Jombang", top: "70%", left: "40%" },
  { name: "Mojokerto", top: "71%", left: "43%" },
  { name: "Kediri", top: "74%", left: "39%" },
  { name: "Nganjuk", top: "68%", left: "37%" },
  { name: "Surabaya", top: "66%", left: "45%" },
  { name: "Lamongan", top: "63%", left: "42%" },
  { name: "Malang", top: "76%", left: "42%" },
  { name: "Semarang", top: "66%", left: "31%" },
  { name: "Bandung", top: "70%", left: "22%" },
  { name: "Balikpapan", top: "36%", left: "58%" },
  { name: "Makassar", top: "52%", left: "68%" },
  { name: "Denpasar", top: "74%", left: "55%" },
];

export default function LocationsSection() {
  return (
    <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0066FF]">
            Jangkauan Proyek
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
            Kota dan daerah yang pernah kami tangani
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Berbasis di Jombang, pekerjaan kami tersebar di berbagai kota di Indonesia.
          </p>
        </div>

        <div className="relative mx-auto mt-12 w-full overflow-hidden rounded-[1.5rem] border border-slate-200/80 bg-white p-2 shadow-sm">
          <div className="relative">
            <Image
              alt="Ilustrasi peta Indonesia dengan sebaran lokasi proyek"
              width={1600}
              height={700}
              sizes="(max-width: 768px) 100vw, 1000px"
              loading="lazy"
              className="w-full rounded-[1.25rem] object-cover"
              src="/images/peta-indonesia.jpg"
            />
            {LOCATIONS.map((loc) => (
              <span
                key={loc.name}
                className="absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[#0066FF] px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm sm:inline-flex"
                style={{ top: loc.top, left: loc.left }}
              >
                <MapPin className="size-3 text-[#70E000]" aria-hidden="true" />
                {loc.name}
              </span>
            ))}
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
          {LOCATIONS.map((loc) => (
            <li
              key={loc.name}
              className="flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-xs"
            >
              <MapPin className="size-3.5 text-[#0066FF]" aria-hidden="true" />
              {loc.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

