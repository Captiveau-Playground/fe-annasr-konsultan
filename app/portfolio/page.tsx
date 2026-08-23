import type { Metadata } from "next";
import PortfolioHeroSection from "@/components/portfolio/PortfolioHeroSection";
import PortfolioGrid from "@/components/PortfolioGrid";
import ClientsSection from "@/components/home/ClientsSection";
import CtaSection from "@/components/home/CtaSection";
import {
  fetchPortfolioHeroData,
  fetchPortfolioProjects,
  fetchPortfolioCategories,
} from "@/lib/api/portfolio-page";
import LocationsSection from "@/components/home/LocationsSection";

export const metadata: Metadata = {
  title: "Portfolio Proyek — CV. AN NASR KONSULTAN",
  description:
    "Dokumentasi pekerjaan yang telah kami tangani. Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan dengan standar teknis yang sama.",
};

export const dynamic = "force-dynamic";

export default async function PortfolioPage() {
  const [heroData, projectsData, categoriesData] = await Promise.all([
    fetchPortfolioHeroData().catch(() => undefined),
    fetchPortfolioProjects().catch(() => undefined),
    fetchPortfolioCategories().catch(() => undefined),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      {/* Portfolio Hero Section */}
      <PortfolioHeroSection data={heroData} />

      {/* Portfolio Projects Section */}
      <PortfolioGrid projects={projectsData} categories={categoriesData} />

      {/* Clients Section */}
      <ClientsSection />

      <LocationsSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
