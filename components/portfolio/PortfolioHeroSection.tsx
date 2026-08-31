import Image from "next/image";
import { fetchPortfolioHeroData } from "@/lib/api/portfolio-page";
import { PortfolioHeroData } from "@/types/portfolio-page";

interface PortfolioHeroSectionProps {
  data?: PortfolioHeroData;
}

export default async function PortfolioHeroSection({ data: propData }: PortfolioHeroSectionProps) {
  let data = propData;
  if (!data) {
    try {
      data = await fetchPortfolioHeroData();
    } catch (err) {
      console.error("Error fetching PortfolioHeroSection data on server:", err);
    }
  }

  const tagline = data?.tagline || "Pekerjaan yang berbicara melalui hasilnya";
  const bgImage = data?.bgImage || "/images/hero-bg.jpg";

  return (
    <section className="cta-gradient relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44 font-sans">
      {/* Background Image with Overlay & Blueprint Grid */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background portfolio hero"
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

      <div className="relative z-20 mx-auto max-w-4xl text-center">
        <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary-foreground sm:text-5xl">
          {tagline}
        </h1>
      </div>
    </section>
  );
}


