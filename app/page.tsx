import ClientsSection from "@/components/home/ClientsSection";
import CtaSection from "@/components/home/CtaSection";
import FounderSection from "@/components/home/FounderSection";
import HeroSection from "@/components/home/HeroSection";
import LocationsSection from "@/components/home/LocationsSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import { fetchHeroSectionData } from "@/lib/api/hero";
import {
  fetchPortfolioCategories,
  fetchPortfolioProjects,
} from "@/lib/api/portfolio-page";
import type { Metadata } from "next";

import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await fetchHeroSectionData().catch(() => undefined);
  return constructMetadata({
    seo: heroData?.seo,
    fallbackTitle: "CV. AN NASR KONSULTAN — Konsultan Teknik Sipil & Konstruksi Jombang",
    fallbackDescription:
      "Jasa perencanaan, pengawasan, perizinan (PBG & SLF), dan konstruksi bangunan, jalan, jembatan, serta irigasi di Kabupaten Jombang, Jawa Timur.",
    path: "",
  });
}

export default async function Home() {
  const [heroData, projectsData, categoriesData] = await Promise.all([
    fetchHeroSectionData().catch(() => undefined),
    fetchPortfolioProjects().catch(() => undefined),
    fetchPortfolioCategories().catch(() => undefined),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <div className="flex flex-col min-h-screen">
        <HeroSection data={heroData} />
        <FounderSection />
        <ServicesSection tagline={heroData?.serviceTagline} />
        <PortfolioGrid
          projects={projectsData}
          categories={categoriesData}
          tagline={heroData?.portfolioTagline}
          ctaText={heroData?.portfolioCtaBtnText}
        />
        <ClientsSection tagline={heroData?.clientTagline} />
        <LocationsSection tagline={heroData?.locationTagline} />
        <CtaSection />
      </div>
    </>
  );
}

