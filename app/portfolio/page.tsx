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

import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await fetchPortfolioHeroData().catch(() => undefined);
  return constructMetadata({
    seo: heroData?.seo,
    fallbackTitle: "Portfolio Proyek — CV. AN NASR KONSULTAN",
    fallbackDescription:
      "Dokumentasi pekerjaan yang telah kami tangani. Bangunan gedung, jalan, jembatan, hingga jaringan irigasi — dikerjakan dengan standar teknis yang sama.",
    path: "/portfolio",
  });
}

export default async function PortfolioPage() {
  const [heroData, projectsData, categoriesData] = await Promise.all([
    fetchPortfolioHeroData().catch(() => undefined),
    fetchPortfolioProjects().catch(() => undefined),
    fetchPortfolioCategories().catch(() => undefined),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
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
    </>
  );
}
