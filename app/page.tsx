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

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await fetchHeroSectionData().catch(() => undefined);
  const seo = heroData?.seo;

  const title =
    seo?.metaTitle ||
    "CV. AN NASR KONSULTAN — Konsultan Teknik Sipil & Konstruksi Jombang";
  const description =
    seo?.metaDescription ||
    "Jasa perencanaan, pengawasan, perizinan (PBG & SLF), dan konstruksi bangunan, jalan, jembatan, serta irigasi di Kabupaten Jombang, Jawa Timur.";
  const keywords = seo?.keywords
    ? seo.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : undefined;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function Home() {
  const [heroData, projectsData, categoriesData] = await Promise.all([
    fetchHeroSectionData().catch(() => undefined),
    fetchPortfolioProjects().catch(() => undefined),
    fetchPortfolioCategories().catch(() => undefined),
  ]);

  return (
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
  );
}

