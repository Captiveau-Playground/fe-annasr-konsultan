import { StrapiResponse } from "@/types/hero";
import { getStrapiBaseUrl, getStrapiMediaUrl } from "./hero";
import { AboutUseItem, TentangHeroData } from "@/types/about-use";

/**
 * Normalizes raw Strapi item from /api/about-uses into clean TentangHeroData
 */
export function normalizeTentangHeroData(rawItem?: AboutUseItem): TentangHeroData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as AboutUseItem;

  const bgImage =
    getStrapiMediaUrl(attrs.bg_image) ||
    getStrapiMediaUrl(attrs.hero_bg_image) ||
    getStrapiMediaUrl((attrs as any).bgImage);

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
    badge: "Tentang Kami",
    title: attrs.hero_title || attrs.title,
    description: attrs.hero_description || attrs.description,
    aboutTagline1: attrs.about_tagline_1 || (attrs as any).aboutTagline1,
    aboutTagline2: attrs.about_tagline_2 || (attrs as any).aboutTagline2,
    teamTagline: attrs.team_tagline || attrs.team_title || (attrs as any).teamTagline || "Tim di Balik Setiap Proyek",
    biography: attrs.biography || (attrs as any).biography,
    bgImage,
    seo,
  };
}

/**
 * Server-Side Fetcher for Tentang Hero Section data from GET /api/about-uses?populate=*
 */
export async function fetchTentangHeroData(): Promise<TentangHeroData> {
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/about-uses?populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store", // SSR: Fetch fresh data on each server request
    });

    if (!res.ok) {
      console.warn(`Failed to fetch About Uses data (${res.status}): ${res.statusText}`);
      return normalizeTentangHeroData(undefined);
    }

    const json: StrapiResponse<AboutUseItem[] | AboutUseItem> = await res.json();

    let firstItem: AboutUseItem | undefined;

    if (Array.isArray(json.data)) {
      firstItem = json.data[0];
    } else if (json.data) {
      firstItem = json.data;
    }

    return normalizeTentangHeroData(firstItem);
  } catch (error) {
    console.error("Error fetching About Uses data on server:", error);
    return normalizeTentangHeroData(undefined);
  }
}

