import type { Metadata } from "next";
import LayananHeroSection from "@/components/layanan/LayananHeroSection";
import LayananListSection from "@/components/layanan/LayananListSection";
import ProcessSection from "@/components/home/ProcessSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchServicesSectionData } from "@/lib/api/services";

export const metadata: Metadata = {
  title: "Layanan Teknik & Konstruksi — CV. AN NASR KONSULTAN",
  description:
    "Solusi lengkap dari perencanaan hingga pelaksanaan. Jasa perencanaan, pengawasan, perizinan (PBG & SLF), dan konstruksi bangunan di Kabupaten Jombang, Jawa Timur.",
};

export const dynamic = "force-dynamic";

export default async function LayananPage() {
  const servicesData = await fetchServicesSectionData().catch(() => undefined);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans">
      <LayananHeroSection />
      <LayananListSection services={servicesData} />
      <ProcessSection />
      <CtaSection />
    </div>
  );
}

