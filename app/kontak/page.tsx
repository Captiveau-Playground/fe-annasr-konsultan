import type { Metadata } from "next";
import ContactInfoSection from "@/components/kontak/ContactInfoSection";
import ContactMapsSection from "@/components/kontak/ContactMapsSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchAboutSectionData } from "@/lib/api/about";
import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await fetchAboutSectionData().catch(() => undefined);
  return constructMetadata({
    seo: aboutData?.seo,
    fallbackTitle: "Hubungi Kami — CV. AN NASR KONSULTAN",
    fallbackDescription:
      "Konsultasikan rencana proyek perencanaan, pengawasan, perizinan bangunan (PBG & SLF), maupun konstruksi Anda dengan CV. AN NASR KONSULTAN Jombang.",
    path: "/kontak",
  });
}

export default async function KontakPage() {
  const companyData = await fetchAboutSectionData().catch(() => undefined);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
        <ContactInfoSection data={companyData} />
        <ContactMapsSection
          domicileAddress={companyData?.domicileAddress}
          officeAddress={companyData?.officeAddress}
        />
        <CtaSection />
      </div>
    </>
  );
}
