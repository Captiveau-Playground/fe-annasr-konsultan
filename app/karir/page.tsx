import type { Metadata } from "next";
import CareerListSection from "@/components/karir/CareerListSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchCareerData } from "@/lib/api/career";
import { fetchAboutSectionData } from "@/lib/api/about";

import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const { page } = await fetchCareerData();
  return constructMetadata({
    seo: page?.seo,
    fallbackTitle: "Karir & Lowongan Kerja — CV. AN NASR KONSULTAN",
    fallbackDescription:
      "Tumbuh bersama tim teknik kami. Kami mencari orang-orang yang teliti, disiplin, dan senang belajar di dunia perencanaan dan konstruksi.",
    path: "/karir",
  });
}

export default async function KarirPage() {
  const [{ page, jobs }, companyData] = await Promise.all([
    fetchCareerData(),
    fetchAboutSectionData().catch(() => undefined),
  ]);

  const pageTitle = page?.hero_tagline || page?.hero_title || "Lowongan Kerja di An Nasr";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        <CareerListSection title={pageTitle} jobs={jobs} email={companyData?.email} />
        <CtaSection />
      </div>
    </>
  );
}
