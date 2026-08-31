import type { Metadata } from "next";
import LayananHeroSection from "@/components/layanan/LayananHeroSection";
import LayananListSection from "@/components/layanan/LayananListSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchLayananHeroData } from "@/lib/api/service-page";
import { fetchServicesSectionData } from "@/lib/api/services";

import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await fetchLayananHeroData().catch(() => undefined);
  return constructMetadata({
    seo: heroData?.seo,
    fallbackTitle: "Layanan Teknik & Konstruksi — CV. AN NASR KONSULTAN",
    fallbackDescription:
      "Solusi lengkap dari perencanaan hingga pelaksanaan. Jasa perencanaan, pengawasan, perizinan (PBG & SLF), dan konstruksi bangunan di Kabupaten Jombang, Jawa Timur.",
    path: "/layanan",
  });
}

export default async function LayananPage() {
  const [heroData, servicesData] = await Promise.all([
    fetchLayananHeroData().catch(() => undefined),
    fetchServicesSectionData().catch(() => undefined),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <div className="flex flex-col min-h-screen bg-background font-sans">
        <LayananHeroSection data={heroData} />
        <LayananListSection
          services={servicesData}
          sectionTitle={heroData?.sectionTitle}
          sectionTagline={heroData?.sectionTagline}
          sectionDescription={heroData?.sectionDescription}
        />
        <CtaSection />
      </div>
    </>
  );
}


