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

  // Fallbacks matching the exact design reference
  const name = data?.name || "H. Ahmad Nasrullah, S.T.";
  const position = data?.position || "Founder & Direktur";
  const description =
    data?.description ||
    "Berpengalaman lebih dari 15 tahun di bidang teknik sipil, mulai dari perencanaan struktur, pengawasan proyek infrastruktur, hingga pelaksanaan konstruksi bangunan pemerintah dan swasta. Beliau mendirikan CV. AN NASR KONSULTAN dengan satu prinsip sederhana: setiap pekerjaan harus dapat dipertanggungjawabkan secara teknis maupun moral.";
  const photoUrl = data?.photoUrl || "/images/founder.jpg";
  const photoAlt = data?.photoAlt || name;

  return (
    <section className="py-16 md:py-24 bg-white font-sans text-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left side: Founder Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Image
              src={photoUrl}
              alt={photoAlt || `${name}, ${position} CV. AN NASR KONSULTAN`}
              width={1024}
              height={1200}
              sizes="(max-width: 768px) 100vw, 400px"
              loading="lazy"
              unoptimized
              className="mx-auto w-full max-w-sm rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </div>

          {/* Right side: Information */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-[#1D4ED8] font-bold text-xs md:text-[13px] tracking-[0.2em] uppercase mb-2">
              FOUNDER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] leading-[1.2] tracking-tight mb-3">
              {name}
            </h2>
            <div>
              <span className="bg-[#78E100] text-slate-950 font-bold text-xs md:text-[13px] px-3.5 py-1 rounded-full inline-block mb-6">
                {position}
              </span>
            </div>
            <p className="text-[#64748B] text-base md:text-[16.5px] leading-[1.75] font-normal max-w-xl">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

