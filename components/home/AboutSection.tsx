import Image from "next/image";
import { fetchAboutSectionData } from "@/lib/api/about";
import { fetchServicesSectionData } from "@/lib/api/services";
import { AboutSectionData } from "@/types/about";

interface AboutSectionProps {
  data?: AboutSectionData;
  tagline?: string;
  servicesCount?: number;
}

function parseParagraphs(text?: string): string[] {
  if (!text) return [];
  if (text.includes("\n")) {
    return text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
  }
  if (text.includes("  ")) {
    return text.split(/\s{2,}/).map((p) => p.trim()).filter(Boolean);
  }
  return [text.trim()];
}

function formatBornDate(rawDate?: string): string {
  if (!rawDate) return "26 April 2024";
  const trimmed = rawDate.trim();
  if (/^\d{1,2}\s+[A-Za-z]+\s+\d{4}$/.test(trimmed)) {
    return trimmed;
  }
  try {
    const d = new Date(trimmed);
    if (!isNaN(d.getTime())) {
      const formatted = d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      if (formatted && formatted !== "Invalid Date") {
        return formatted;
      }
    }
  } catch {
    // fallback
  }
  return trimmed || "26 April 2024";
}

function formatLocation(officeAddress?: string, domicileAddress?: string): string {
  const addr = officeAddress || domicileAddress || "";
  if (!addr || addr.toLowerCase().includes("jombang")) {
    return "Jombang, Indonesia";
  }
  const parts = addr.split(/,|\n/).map((s) => s.trim()).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]}, ${parts[parts.length - 1]}`;
  }
  return parts[0] || "Jombang, Indonesia";
}

export default async function AboutSection({
  data: propData,
  tagline: propTagline,
  servicesCount: propServicesCount,
}: AboutSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchAboutSectionData();
    } catch (err) {
      console.error("Error fetching AboutSection data on server:", err);
    }
  }

  let servicesCount = propServicesCount;
  if (servicesCount === undefined) {
    try {
      const services = await fetchServicesSectionData();
      servicesCount = services.length;
    } catch {
      servicesCount = 4;
    }
  }

  const tagline = propTagline || data?.tagline || data?.title || "Sekilas Tentang CV. An Nasr Konsultan";
  const description =
    data?.description ||
    "CV. An Nasr Konsultan didirikan pada 26 April 2024 di Jombang, Indonesia. Berawal dari penanganan proyek skala kecil, An Nasr terus berkembang dengan memperluas layanan hingga mencakup perencanaan, pengawasan, perizinan, dan konstruksi. Didukung tenaga ahli bersertifikasi, kami berkomitmen memberikan solusi yang aman, efisien, bernilai estetika, serta sesuai dengan standar dan regulasi yang berlaku.\n\nTujuan kami sederhana: memastikan setiap rencana pembangunan berjalan tepat mutu, tepat biaya, dan tepat waktu. Dengan dukungan tenaga ahli di bidang struktur, jalan, jembatan, dan sumber daya air, kami menghadirkan solusi pembangunan yang profesional dan sesuai standar teknis yang berlaku.";
  
  const bornDateText = formatBornDate(data?.bornDate);
  const locationText = formatLocation(data?.officeAddress, data?.domicileAddress);
  const imageUrl = data?.imageUrl || "/images/team.jpg";
  const imageAlt = data?.imageAlt || tagline;

  const paragraphs = parseParagraphs(description);

  return (
    <section className="py-16 md:py-24 bg-white font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading, Paragraphs, 3 Stat Cards */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#1E293B] leading-[1.25] tracking-tight">
              {tagline}
            </h2>

            <div className="mt-6 space-y-4 text-xs sm:text-sm lg:text-[15px] leading-relaxed text-slate-600">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* 3 Highlight Cards */}
            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 w-full">
              {/* Card 1: Born Date */}
              <div className="flex flex-col items-center justify-center rounded-2xl sm:rounded-[1.25rem] bg-gradient-to-b from-[#E2F5F2] via-[#E6F4ED] to-[#FDE8D0] p-4 sm:p-5 text-center shadow-xs border border-white/60">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#1E293B] tracking-tight">
                  {bornDateText}
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-medium text-slate-500">
                  Tahun Berdiri
                </span>
              </div>

              {/* Card 2: Total Services Count */}
              <div className="flex flex-col items-center justify-center rounded-2xl sm:rounded-[1.25rem] bg-gradient-to-b from-[#E2F5F2] via-[#E6F4ED] to-[#FDE8D0] p-4 sm:p-5 text-center shadow-xs border border-white/60">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#1E293B] tracking-tight">
                  {servicesCount || 4} Bidang
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-medium text-slate-500">
                  Layanan Utama
                </span>
              </div>

              {/* Card 3: Location */}
              <div className="flex flex-col items-center justify-center rounded-2xl sm:rounded-[1.25rem] bg-gradient-to-b from-[#E2F5F2] via-[#E6F4ED] to-[#FDE8D0] p-4 sm:p-5 text-center shadow-xs border border-white/60">
                <span className="text-xs sm:text-sm lg:text-base font-bold text-[#1E293B] tracking-tight">
                  {locationText}
                </span>
                <span className="mt-1 text-[11px] sm:text-xs font-medium text-slate-500">
                  Lokasi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Team Image */}
          <div className="lg:col-span-6">
            <Image
              alt={imageAlt}
              loading="lazy"
              width={1400}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full rounded-[2rem] sm:rounded-[2.5rem] object-cover shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              src={imageUrl}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
