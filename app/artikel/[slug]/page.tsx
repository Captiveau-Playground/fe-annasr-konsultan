import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArtikelDetailHeaderSection from "@/components/artikel/ArtikelDetailHeaderSection";
import ArtikelDetailBodySection from "@/components/artikel/ArtikelDetailBodySection";
import ArtikelShareSection from "@/components/artikel/ArtikelShareSection";
import ArtikelRelatedSection from "@/components/artikel/ArtikelRelatedSection";
import CtaSection from "@/components/home/CtaSection";
import { fetchArticleBySlug, fetchRelatedArticles } from "@/lib/api/article";
import { constructMetadata, LOCAL_BUSINESS_JSON_LD } from "@/lib/seo";

export const dynamic = "force-dynamic";

interface ArtikelDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArtikelDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = await fetchArticleBySlug(resolvedParams.slug);

  return constructMetadata({
    seo: article?.seo,
    fallbackTitle: `${article.title} — CV. AN NASR KONSULTAN`,
    fallbackDescription: article.excerpt,
    path: `/artikel/${article.slug}`,
  });
}

export default async function ArtikelDetailPage({ params }: ArtikelDetailPageProps) {
  const resolvedParams = await params;
  const article = await fetchArticleBySlug(resolvedParams.slug);
  if (!article) {
    notFound();
  }

  const relatedArticles = await fetchRelatedArticles(article.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    author: {
      "@type": "Person",
      name: article.authorName || "Dr. Arif Nugroho",
      jobTitle: article.authorRole || "Direktur Operasional",
    },
    publisher: LOCAL_BUSINESS_JSON_LD,
    datePublished: article.date,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-800">
        <ArtikelDetailHeaderSection article={article} />
        <ArtikelDetailBodySection article={article} />
        <ArtikelShareSection title={article.title} />
        <ArtikelRelatedSection articles={relatedArticles} />
        <CtaSection />
      </div>
    </>
  );
}
