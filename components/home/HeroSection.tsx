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
  const title = data?.title || "CV. An Nasr";
  const titleHighlight = data?.titleHighlight || "Konsultan";
  const description =
    data?.description ||
    "Menyediakan layanan perencanaan, pengawasan, perizinan, dan konstruksi dengan mengutamakan kualitas, profesionalisme, serta ketepatan dalam setiap tahap pekerjaan.";
  const primaryCtaText = data?.primaryCtaText || "Konsultasi Sekarang";
  const primaryCtaUrl = data?.primaryCtaUrl || "/kontak";
  const secondaryCtaText = data?.secondaryCtaText || "Lihat Layanan";
  const secondaryCtaUrl = data?.secondaryCtaUrl || "/layanan";
  const bgImage = data?.backgroundImageUrl || "/images/hero-bg.jpg";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 font-sans overflow-hidden">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Construction Site background bg-cover"
          fill
          sizes="100vw"
          unoptimized
          className="object-cover opacity-100 select-none scale-105 animate-pulse-slow"
          priority
        />
        <div className="absolute inset-0 bg-[#4f6baa]/85 z-10" />
        {/* Blueprint Grid Lines Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:4rem_4rem] z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mt-12 md:mt-0">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight max-w-4xl mb-8">
          {title} <span className="text-lime-400">{titleHighlight}</span>
        </h1>

        <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl mb-12">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <Link
            href={primaryCtaUrl}
            className="px-8 py-4 rounded-full text-base font-bold bg-lime-500 text-slate-950 hover:bg-lime-400 hover:scale-105 shadow-[0_4px_20px_rgba(139,227,0,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            {primaryCtaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={secondaryCtaUrl}
            className="px-8 py-4 rounded-full text-base font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-colors flex items-center justify-center"
          >
            {secondaryCtaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
