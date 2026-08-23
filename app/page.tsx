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
import {
  fetchPortfolioProjects,
  fetchPortfolioCategories,
} from "@/lib/api/portfolio-page";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [projectsData, categoriesData] = await Promise.all([
    fetchPortfolioProjects().catch(() => undefined),
    fetchPortfolioCategories().catch(() => undefined),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
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
