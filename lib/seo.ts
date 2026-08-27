import type { Metadata } from "next";
import { HeroSeoData } from "@/types/hero";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://annasr.id";

export interface ConstructMetadataOptions {
  seo?: HeroSeoData;
  fallbackTitle: string;
  fallbackDescription: string;
  path?: string;
}

export function constructMetadata({
  seo,
  fallbackTitle,
  fallbackDescription,
  path = "",
}: ConstructMetadataOptions): Metadata {
  const title = seo?.metaTitle || fallbackTitle;
  const description = seo?.metaDescription || fallbackDescription;
  const keywords = seo?.keywords
    ? seo.keywords
        .split(",")
        .map((k) => k.trim())
        .filter(Boolean)
    : undefined;

  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImageUrl =
    seo?.metaImageUrl || `${SITE_URL}/images/og-default.jpg`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "CV. AN NASR KONSULTAN",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "CV. AN NASR KONSULTAN",
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CV. AN NASR KONSULTAN",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Perumahan Candi Regency No. A10, Desa Candi Mulyo",
    addressLocality: "Jombang",
    addressRegion: "Jawa Timur",
    countryName: "ID",
  },
  url: SITE_URL,
  telephone: "+6281200000000",
  priceRange: "$$",
};
