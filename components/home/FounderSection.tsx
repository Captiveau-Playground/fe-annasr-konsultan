import Image from "next/image";
import { fetchFounderSectionData } from "@/lib/api/founder";
import { FounderSectionData } from "@/types/founder";

interface FounderSectionProps {
  data?: FounderSectionData;
}

export default async function FounderSection({ data: propData }: FounderSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchFounderSectionData();
    } catch (err) {
      console.error("Error fetching FounderSection data on server:", err);
    }
  }

  // Fallbacks for initial state or missing Strapi fields
  const name = data?.name || "H. Ahmad Nasrullah, S.T.";
  const position = data?.position || "Founder & Direktur";
  const description =
    data?.description ||
    "Berpengalaman lebih dari 15 tahun di bidang teknik sipil, mulai dari perencanaan struktur, pengawasan proyek infrastruktur, hingga pelaksanaan konstruksi bangunan pemerintah dan swasta. Beliau mendirikan CV. AN NASR KONSULTAN dengan satu prinsip sederhana: setiap pekerjaan harus dapat dipertanggungjawabkan secara teknis maupun moral.";
  const quote =
    data?.quote ||
    "Setiap pekerjaan harus dapat dipertanggungjawabkan secara teknis maupun moral.";
  const photoUrl = data?.photoUrl || "/images/founder.jpg";
  const photoAlt = data?.photoAlt || name;

  return (
    <section className="py-24 md:py-32 bg-slate-50 font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left side: Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
              <Image
                src={photoUrl}
                alt={photoAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
                unoptimized
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right side: Biography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">
              Founder
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-4">
              {name}
            </h2>
            <span className="bg-lime-500/20 text-lime-800 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6 inline-block">
              {position}
            </span>
            <div className="h-1 w-20 bg-blue-600 rounded mb-8" />
            {quote && (
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">
                &ldquo;{quote}&rdquo;
              </p>
            )}
            <p className="text-slate-500 text-base leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
