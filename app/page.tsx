import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FounderSection from "@/components/home/FounderSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ClientsSection from "@/components/home/ClientsSection";
import LocationsSection from "@/components/home/LocationsSection";
import ProcessSection from "@/components/home/ProcessSection";
import CareerBanner from "@/components/home/CareerBanner";
import CtaSection from "@/components/home/CtaSection";
import { fetchHeroSectionData } from "@/lib/api/hero";
import {
  fetchPortfolioProjects,
  fetchPortfolioCategories,
} from "@/lib/api/portfolio-page";

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
        <AboutSection />
        <ServicesSection />
        <PortfolioGrid projects={projectsData} categories={categoriesData} />
        <ClientsSection />
        <LocationsSection />
        <ProcessSection />
        <CareerBanner />
        <CtaSection />
      </div>
    </>
  );
}

