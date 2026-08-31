import { Compass, Flag } from "lucide-react";
import { AboutSectionData } from "@/types/about";

interface VisionMissionSectionProps {
  data?: AboutSectionData;
  title?: string;
  biography?: string;
}

function parseParagraphs(text?: string): string[] {
  if (!text) return [];
  if (text.includes("\n")) {
    return text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  }
  return [text.trim()];
}

export default function VisionMissionSection({
  data,
  title: propTitle,
  biography: propBiography,
}: VisionMissionSectionProps) {
  const title = propTitle || "Tumbuh Bersama Setiap Proyek";

  const defaultP1 =
    "CV. An Nasr Konsultan memulai perjalanannya pada 26 April 2024 di Jombang. Berawal dari menangani proyek-proyek skala kecil, khususnya perencanaan hunian dan komersial, kami terus membangun pengalaman melalui setiap proyek yang dipercayakan kepada kami. Seiring berkembangnya kebutuhan dan pengalaman di lapangan, An Nasr memperluas layanan dari perencanaan hingga pengawasan, manajemen konstruksi, perizinan bangunan, dan jasa konstruksi.";

  const defaultP2 =
    "Kini, An Nasr telah dipercaya menangani berbagai kebutuhan pembangunan, mulai dari gedung bertingkat, fasilitas umum, perumahan, hingga proyek industri. Dengan dukungan tenaga ahli bersertifikasi, kami terus berkomitmen menjadi mitra yang dipercaya dalam mewujudkan proyek yang aman, efisien, dan tepat guna.";

  const rawBio = propBiography || data?.biography;
  const paragraphs = rawBio && rawBio.trim().length > 0
    ? parseParagraphs(rawBio)
    : [defaultP1, defaultP2];

  const vision =
    data?.vision ||
    "Menjadi perusahaan yang unggul dan terdepan dalam jasa konsultansi bidang perencanaan dan pengawasan.";

  const mission =
    data?.mission ||
    "Memberikan pelayanan kepada rekanan dan pengguna jasa secara optimal, ramah, dan menghasilkan produk yang berkualitas.";

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] leading-[1.25] tracking-tight">
          {title}
        </h2>

        {/* Narrative Paragraphs */}
        <div className="mt-6 space-y-4 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-600 max-w-6xl">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Visi & Misi Outline Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visi Card */}
          <div className="rounded-[1.5rem] border border-[#3B82F6]/70 bg-white p-7 sm:p-8 shadow-xs flex flex-col items-start transition-all hover:border-[#0066FF] hover:shadow-md">
            <div className="flex size-11 items-center justify-center rounded-full bg-[#0066FF]/10 text-[#0066FF]">
              <Compass className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#1E293B]">
              Visi
            </h3>
            <p className="mt-2 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-600">
              {vision}
            </p>
          </div>

          {/* Misi Card */}
          <div className="rounded-[1.5rem] border border-[#3B82F6]/70 bg-white p-7 sm:p-8 shadow-xs flex flex-col items-start transition-all hover:border-[#0066FF] hover:shadow-md">
            <div className="flex size-11 items-center justify-center rounded-full bg-[#0066FF]/10 text-[#0066FF]">
              <Flag className="size-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-lg sm:text-xl font-bold text-[#1E293B]">
              Misi
            </h3>
            <p className="mt-2 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-600">
              {mission}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
