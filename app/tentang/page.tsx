import type { Metadata } from "next";
import TentangHeroSection from "@/components/tentang/TentangHeroSection";
import FounderSection from "@/components/home/FounderSection";
import AboutSection from "@/components/home/AboutSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchTentangHeroData } from "@/lib/api/about-use";
import { fetchFounderSectionData } from "@/lib/api/founder";
import { fetchAboutSectionData } from "@/lib/api/about";

export const metadata: Metadata = {
  title: "Tentang Kami — CV. AN NASR KONSULTAN",
  description:
    "Mitra teknik yang tumbuh bersama pembangunan daerah. Kami hadir untuk memastikan setiap rencana pembangunan berjalan dengan perhitungan yang matang dan pelaksanaan yang bertanggung jawab.",
};

export const dynamic = "force-dynamic";

export default async function TentangPage() {
  const [heroData, founderData, aboutData] = await Promise.all([
    fetchTentangHeroData().catch(() => undefined),
    fetchFounderSectionData().catch(() => undefined),
    fetchAboutSectionData().catch(() => undefined),
  ]);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <TentangHeroSection data={heroData} />
      <FounderSection data={founderData} />
      <AboutSection data={aboutData} />
      <CtaSection />
    </div>
  );
}



