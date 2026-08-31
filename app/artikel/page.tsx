import type { Metadata } from "next";
import ArtikelHeaderSection from "@/components/artikel/ArtikelHeaderSection";
import ArtikelFeaturedSection from "@/components/artikel/ArtikelFeaturedSection";
import ArtikelGridSection from "@/components/artikel/ArtikelGridSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchArticleData } from "@/lib/api/article";
import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  return constructMetadata({
    fallbackTitle: "Artikel & Berita — CV. AN NASR KONSULTAN",
    fallbackDescription:
      "Publikasi resmi mengenai kebijakan, kegiatan operasional, serta perkembangan CV An Nasr Konsultan.",
    path: "/artikel",
  });
}

export default async function ArtikelPage() {
  const { featuredArticle, articles } = await fetchArticleData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
      />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
        <ArtikelHeaderSection />
        <ArtikelFeaturedSection article={featuredArticle} />
        <ArtikelGridSection articles={articles} />
        <CtaSection />
      </div>
    </>
  );
}
