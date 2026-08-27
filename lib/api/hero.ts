import { HeroSectionData, StrapiHeroItem, StrapiResponse } from "@/types/hero";

export function getStrapiBaseUrl(): string {
  const url = process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (url && url.trim() !== "") {
    return url;
  }
  // Default fallbacks when env var is not set or empty
  if (typeof window === "undefined") {
    return process.env.STRAPI_API_URL || "https://cms-annasr.captiveau.id";
  }
  return "https://cms-annasr.captiveau.id";
}

export const STRAPI_BASE_URL = getStrapiBaseUrl();

/**
 * Builds the Strapi Query String for home-pages endpoint
 * Default populate targeting HeroSection relations: hero_bg_image,seo
 */
export function getHeroQueryString(populate = "hero_bg_image,seo"): string {
  const params = new URLSearchParams();
  if (populate) {
    params.append("populate", populate);
  }
  return params.toString();
}

/**
 * Normalizes image URL from Strapi media response.
 * Rewrites internal docker hosts (e.g. annasr-cms, localhost:1337) to public domain.
 */
export function getStrapiMediaUrl(media?: any): string | undefined {
  if (!media) return undefined;

  let url: string | undefined =
    media?.url ||
    media?.data?.attributes?.url ||
    media?.data?.[0]?.attributes?.url ||
    media?.formats?.large?.url;

  if (!url) return undefined;

  const publicBaseUrl = (
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://cms-annasr.captiveau.id"
  ).replace(/\/$/, "");

  if (url.startsWith("http://") || url.startsWith("https://")) {
    // If Strapi returned an internal docker hostname or localhost
    if (
      url.includes("annasr-cms") ||
      url.includes("localhost:1337") ||
      url.includes("127.0.0.1:1337")
    ) {
      try {
        const parsed = new URL(url);
        return `${publicBaseUrl}${parsed.pathname}${parsed.search}`;
      } catch (e) {
        return url;
      }
    }
    return url;
  }

  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `${publicBaseUrl}${cleanPath}`;
}

/**
 * Normalizes raw Strapi response into clean HeroSectionData
 */
export function normalizeHeroData(rawItem?: StrapiHeroItem): HeroSectionData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as StrapiHeroItem;

  // Extract tagline / title
  const fullTagline = attrs.hero_tagline || attrs.title || "CV. An Nasr Konsultan";
  let title = "CV. An Nasr";
  let titleHighlight = "Konsultan";

  if (attrs.title && attrs.titleHighlight) {
    title = attrs.title;
    titleHighlight = attrs.titleHighlight;
  } else if (fullTagline) {
    const highlightWord = "Konsultan";
    if (fullTagline.endsWith(highlightWord)) {
      title = fullTagline.slice(0, fullTagline.lastIndexOf(highlightWord)).trim();
      titleHighlight = highlightWord;
    } else {
      title = fullTagline;
      titleHighlight = "";
    }
  }

  const rawSeo = attrs.seo;
  const seoItem = Array.isArray(rawSeo) ? rawSeo[0] : rawSeo;
  const seo = seoItem
    ? {
        metaTitle: seoItem.metaTile || seoItem.metaTitle || seoItem.title,
        metaDescription: seoItem.metaDescription || seoItem.description,
        keywords: seoItem.keywords,
        metaImageUrl: getStrapiMediaUrl(seoItem.metaImage),
      }
    : undefined;

  return {
    title,
    titleHighlight,
    description: attrs.hero_description || attrs.description,
    primaryCtaText: attrs.hero_contact_cta_text || attrs.primaryCtaText || "Konsultasi Sekarang",
    primaryCtaUrl: attrs.primaryCtaUrl || "/kontak",
    secondaryCtaText: attrs.hero_service_cta_text || attrs.secondaryCtaText || "Lihat Layanan",
    secondaryCtaUrl: attrs.secondaryCtaUrl || "/layanan",
    backgroundImageUrl:
      getStrapiMediaUrl(attrs.hero_bg_image) ||
      getStrapiMediaUrl(attrs.heroBackground) ||
      getStrapiMediaUrl(attrs.backgroundImage),
    seo,
  };
}

/**
 * Server-Side Fetcher for Hero Section data
 */
export async function fetchHeroSectionData(): Promise<HeroSectionData> {
  const queryString = getHeroQueryString("hero_bg_image,seo");
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/home-pages?${queryString}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const rawToken = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";
  const token = rawToken.trim();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store", // SSR: Fetch fresh data on each server request
    });

    if (!res.ok) {
      console.warn(`Failed to fetch Hero Section data (${res.status}): ${res.statusText}`);
      return normalizeHeroData(undefined);
    }

    const json: StrapiResponse<StrapiHeroItem[] | StrapiHeroItem> = await res.json();

    let firstItem: StrapiHeroItem | undefined;

    if (Array.isArray(json.data)) {
      firstItem = json.data[0];
    } else if (json.data) {
      firstItem = json.data;
    }

    return normalizeHeroData(firstItem);
  } catch (error) {
    console.error("Error fetching HeroSection data on server:", error);
    return normalizeHeroData(undefined);
  }
}
