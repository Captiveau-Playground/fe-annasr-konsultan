import { AboutSectionData, StrapiAboutItem } from "@/types/about";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, getStrapiBaseUrl } from "./hero";

/**
 * Builds the Strapi Query String for company-settings endpoint
 */
export function getAboutQueryString(populate = "*"): string {
  const params = new URLSearchParams();
  if (populate) {
    params.append("populate", populate);
  }
  return params.toString();
}

/**
 * Normalizes raw Strapi response into clean AboutSectionData
 */
export function normalizeAboutData(rawItem?: StrapiAboutItem): AboutSectionData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as StrapiAboutItem;

  const imageMedia = attrs.image;
  const imageUrl = getStrapiMediaUrl(imageMedia);

  const imageAlt =
    (imageMedia as any)?.alternativeText ||
    (imageMedia as any)?.caption ||
    attrs.tagline ||
    attrs.title ||
    "Tentang Kami Image";

  const imageCaption =
    (imageMedia as any)?.caption ||
    "Tim CV. AN NASR KONSULTAN — Jombang, Jawa Timur";

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
    title: attrs.title,
    tagline: attrs.tagline,
    description: attrs.description,
    vision: attrs.vision,
    mission: attrs.mission,
    officeAddress: attrs.office_address || (attrs as any).officeAddress,
    domicileAddress: attrs.domicile_address || (attrs as any).domicileAddress,
    operationalHours: attrs.operational_hours || (attrs as any).operationalHours,
    bornDate: attrs.born_date || (attrs as any).bornDate,
    phone: attrs.phone,
    email: attrs.email,
    imageUrl,
    imageAlt,
    imageCaption,
    seo,
  };
}

/**
 * Server-Side Fetcher for About Section / Company Settings data
 */
export async function fetchAboutSectionData(): Promise<AboutSectionData> {
  const queryString = getAboutQueryString("*");
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/company-settings?${queryString}`;

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
      console.warn(`Failed to fetch About Section data (${res.status}): ${res.statusText}`);
      return normalizeAboutData(undefined);
    }

    const json: StrapiResponse<StrapiAboutItem[] | StrapiAboutItem> = await res.json();

    let firstItem: StrapiAboutItem | undefined;

    if (Array.isArray(json.data)) {
      firstItem = json.data[0];
    } else if (json.data) {
      firstItem = json.data;
    }

    return normalizeAboutData(firstItem);
  } catch (error) {
    console.error("Error fetching AboutSection data on server:", error);
    return normalizeAboutData(undefined);
  }
}
