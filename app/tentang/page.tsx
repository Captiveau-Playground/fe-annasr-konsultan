import type { Metadata } from "next";
import TentangHeroSection from "@/components/tentang/TentangHeroSection";
import VisionMissionSection from "@/components/tentang/VisionMissionSection";
import TeamSection from "@/components/tentang/TeamSection";
import ReasonSection from "@/components/tentang/ReasonSection";
import FounderSection from "@/components/home/FounderSection";
import AboutSection from "@/components/home/AboutSection";
import LocationsSection from "@/components/home/LocationsSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchTentangHeroData } from "@/lib/api/about-use";
import { fetchFounderSectionData } from "@/lib/api/founder";
import { fetchAboutSectionData } from "@/lib/api/about";
import { fetchServicesSectionData } from "@/lib/api/services";
import { fetchTeamSettingsData } from "@/lib/api/team";
import { fetchReasonSettingsData } from "@/lib/api/reason";
import { fetchHeroSectionData } from "@/lib/api/hero";

import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const heroData = await fetchTentangHeroData().catch(() => undefined);
  return constructMetadata({
    seo: heroData?.seo,
    fallbackTitle: "Tentang Kami — CV. AN NASR KONSULTAN",
    fallbackDescription:
      "Mitra teknik yang tumbuh bersama pembangunan daerah. Kami hadir untuk memastikan setiap rencana pembangunan berjalan dengan perhitungan yang matang dan pelaksanaan yang bertanggung jawab.",
    path: "/tentang",
  });
}

export default async function TentangPage() {
  const [heroData, mainHeroData, founderData, aboutData, servicesData, teamData, reasonData] = await Promise.all([
    fetchTentangHeroData().catch(() => undefined),
    fetchHeroSectionData().catch(() => undefined),
    fetchFounderSectionData().catch(() => undefined),
    fetchAboutSectionData().catch(() => undefined),
    fetchServicesSectionData().catch(() => []),
    fetchTeamSettingsData().catch(() => []),
    fetchReasonSettingsData().catch(() => []),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <div className="flex flex-col min-h-screen bg-background font-sans">
        <TentangHeroSection data={heroData} />
        <AboutSection
          data={aboutData}
          tagline={heroData?.aboutTagline1}
          servicesCount={servicesData.length}
        />
        <VisionMissionSection
          data={aboutData}
          title={heroData?.aboutTagline2}
        />
        <FounderSection data={founderData} useBiography={true} />
        <TeamSection tagline={heroData?.teamTagline} members={teamData} />
        <ReasonSection tagline={heroData?.reasonTagline} reasons={reasonData} />
        <LocationsSection tagline={mainHeroData?.locationTagline} />
        <CtaSection />
      </div>
    </>
  );
}




