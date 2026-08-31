import { MapPin } from "lucide-react";
import Image from "next/image";
import { fetchHeroSectionData } from "@/lib/api/hero";

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
  { name: "Jombang", top: "70%", left: "40%" },
  { name: "Mojokerto", top: "71%", left: "43%" },
  { name: "Kediri", top: "74%", left: "39%" },
  { name: "Nganjuk", top: "68%", left: "37%" },
  { name: "Surabaya", top: "66%", left: "45%" },
  { name: "Lamongan", top: "63%", left: "42%" },
];

interface LocationsSectionProps {
  tagline?: string;
}

export default async function LocationsSection({ tagline }: LocationsSectionProps = {}) {
  let locationTagline = tagline;
  if (!locationTagline) {
    try {
      const heroData = await fetchHeroSectionData();
      locationTagline = heroData.locationTagline;
    } catch (e) {
      console.error("Error fetching location tagline:", e);
    }
  }

  const displayTagline =
    locationTagline || "Kota dan daerah yang pernah\nkami tangani";

  const taglineLines = displayTagline.replace(/\u2028/g, "\n").split("\n");

  return (
    <section className="bg-[#EBF5FE] px-6 py-16 sm:py-20 lg:px-8 lg:py-24 font-sans">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] leading-[1.25]">
            {taglineLines.map((line, idx) => (
              <span key={idx} className="block">
                {line.trim()}
              </span>
            ))}
          </h2>
        </div>

        {/* Map Card Container */}
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-white p-6 sm:p-10 shadow-sm border border-white/80">
          <div className="relative aspect-[16/8] w-full">
            <Image
              alt="Peta sebaran lokasi proyek CV. AN NASR KONSULTAN di Indonesia"
              src="/images/peta-indonesia.jpg"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-contain"
            />
            {LOCATIONS.slice(0, 12).map((loc, idx) => (
              <span
                key={`${loc.name}-${idx}`}
                className="absolute hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full bg-[#FF7A00] p-1 text-[10px] font-semibold text-white shadow-md sm:inline-flex"
                style={{ top: loc.top, left: loc.left }}
              >
                <MapPin className="size-3 text-white fill-white" aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>

        {/* Location Pills Grid */}
        <div className="mt-10 mx-auto max-w-6xl flex flex-wrap justify-center gap-3">
          {LOCATIONS.map((loc, idx) => (
            <span
              key={`${loc.name}-pill-${idx}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#FF7A00] px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-xs transition-transform hover:scale-105"
            >
              <MapPin className="size-3.5 text-white shrink-0" aria-hidden="true" />
              {loc.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


