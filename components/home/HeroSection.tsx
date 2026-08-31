import { fetchHeroSectionData } from "@/lib/api/hero";
import { HeroSectionData } from "@/types/hero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroSectionProps {
  data?: HeroSectionData;
}

export default async function HeroSection({ data: propData }: HeroSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchHeroSectionData();
    } catch (err) {
      console.error("Error fetching HeroSection data on server:", err);
    }
  }

  // Fallbacks for initial state or missing Strapi fields
  const title = data?.title || "Tepat Merencanakan, Tepat Mengawasi Tepat Membangun";
  const titleHighlight = data?.titleHighlight || "";
  const eyebrow =
    data?.description || "CV. An Nasr Konsultan\nJombang – Jawa Timur – Indonesia";
  // CMS stores the eyebrow as a single string; split it into the company line
  // and the location line at the first line break or dash separator
  const [firstEyebrowLine, ...restEyebrowLines] = eyebrow.split(/\n|\s[-–]\s/);
  const eyebrowLines = restEyebrowLines.length
    ? [firstEyebrowLine, restEyebrowLines.join(" – ")]
    : [firstEyebrowLine];
  const primaryCtaText = data?.primaryCtaText || "Konsultasi Sekarang";
  const primaryCtaUrl = data?.primaryCtaUrl || "/kontak";
  const secondaryCtaText = data?.secondaryCtaText || "Lihat Layanan";
  const secondaryCtaUrl = data?.secondaryCtaUrl || "/layanan";
  const bgImage = data?.backgroundImageUrl || "/images/hero-bg.jpg";

  return (
    <section className="cta-gradient relative min-h-screen flex items-center justify-center overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44 font-sans">
      {/* Background Image with Overlay & Blueprint Grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background hero CV. An Nasr Konsultan"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover opacity-30 select-none scale-105"
          priority
        />
        <div
          className="blueprint-grid absolute inset-0 opacity-25"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-6xl mx-auto text-center flex flex-col items-center px-2">
        <p className="text-xs md:text-sm font-medium uppercase tracking-[0.28em] text-primary-foreground/80 mb-6">
          {eyebrowLines.map((line, i) => (
            <span key={line} className={i > 0 ? "mt-1.5 block" : "block"}>
              {line}
            </span>
          ))}
        </p>

        <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-medium leading-[1.15] tracking-tight text-primary-foreground mb-10">
          {title}
          {titleHighlight ? <span className="text-accent"> {titleHighlight}</span> : null}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href={primaryCtaUrl}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#FF8D28] px-8 text-base font-bold text-white shadow-[var(--shadow-lift)] transition-all hover:brightness-105"
          >
            {primaryCtaText}
            <ArrowRight className="size-4 text-white" aria-hidden="true" />
          </Link>
          <Link
            href={secondaryCtaUrl}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-8 text-base font-semibold text-primary-foreground backdrop-blur-xs transition-all hover:bg-primary-foreground/20"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
