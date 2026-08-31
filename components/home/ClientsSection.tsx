import { fetchClientsSectionData } from "@/lib/api/client";
import { ClientsSectionData, ClientItemData } from "@/types/client";

interface ClientsSectionProps {
  data?: ClientsSectionData;
  tagline?: string;
}

export default async function ClientsSection({
  data: propData,
  tagline: propTagline,
}: ClientsSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchClientsSectionData();
    } catch (err) {
      console.error("Error fetching ClientsSection data on server:", err);
    }
  }

  const tagline =
    propTagline ||
    data?.header?.tagline ||
    "Dipercaya instansi, lembaga,\ndan mitra usaha";

  const taglineLines = tagline.replace(/\u2028/g, "\n").split("\n");

  const clientList = data?.clients || [];

  const makeRowItems = (items: ClientItemData[], offset = 0) => {
    if (items.length === 0) return Array.from({ length: 12 }, () => ({ label: "AN", name: "Mitra Konsultan" }));
    const rotated = [...items.slice(offset % items.length), ...items.slice(0, offset % items.length)];
    return [...rotated, ...rotated, ...rotated, ...rotated, ...rotated, ...rotated];
  };

  const row1 = makeRowItems(clientList, 0);
  const row2 = makeRowItems(clientList, Math.max(1, Math.floor(clientList.length / 3)));
  const row3 = makeRowItems(clientList, Math.max(2, Math.floor((clientList.length * 2) / 3)));

  return (
    <section className="bg-gradient-to-r from-[#E2F0FE] via-[#F4EDE5] to-[#FFD4B1] px-6 py-16 sm:py-20 lg:px-8 lg:py-24 font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl text-left mb-10 lg:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem] leading-[1.25]">
            {taglineLines.map((line, idx) => (
              <span key={idx} className="block">
                {line.trim()}
              </span>
            ))}
          </h2>
        </div>

        {/* 3-Row Marquee Container */}
        <div className="relative w-full overflow-hidden flex flex-col gap-4">
          {/* Side Fade Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-r from-[#E2F0FE] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 z-10 bg-gradient-to-l from-[#FFD4B1] to-transparent" />

          {/* Row 1 */}
          <div className="overflow-hidden flex w-full">
            <ul className="marquee-track flex w-max items-center gap-4">
              {row1.map((client, idx) => (
                <li
                  key={`r1-${idx}`}
                  className="flex h-20 sm:h-24 w-36 sm:w-44 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-center max-w-full">
                    {client.label && (
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 text-[10px] font-bold text-[#0066FF]">
                        {client.label}
                      </span>
                    )}
                    <span className="truncate text-xs sm:text-sm font-semibold text-slate-800">
                      {client.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 2 (Reverse Marquee) */}
          <div className="overflow-hidden flex w-full">
            <ul className="marquee-track-reverse flex w-max items-center gap-4">
              {row2.map((client, idx) => (
                <li
                  key={`r2-${idx}`}
                  className="flex h-20 sm:h-24 w-36 sm:w-44 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-center max-w-full">
                    {client.label && (
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 text-[10px] font-bold text-[#0066FF]">
                        {client.label}
                      </span>
                    )}
                    <span className="truncate text-xs sm:text-sm font-semibold text-slate-800">
                      {client.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Row 3 */}
          <div className="overflow-hidden flex w-full">
            <ul className="marquee-track flex w-max items-center gap-4">
              {row3.map((client, idx) => (
                <li
                  key={`r3-${idx}`}
                  className="flex h-20 sm:h-24 w-36 sm:w-44 shrink-0 items-center justify-center rounded-2xl border border-white/70 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-center gap-2 text-center max-w-full">
                    {client.label && (
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#0066FF]/10 text-[10px] font-bold text-[#0066FF]">
                        {client.label}
                      </span>
                    )}
                    <span className="truncate text-xs sm:text-sm font-semibold text-slate-800">
                      {client.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

