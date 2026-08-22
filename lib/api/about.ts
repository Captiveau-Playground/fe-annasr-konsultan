import { AboutSectionData, StrapiAboutItem } from "@/types/about";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, STRAPI_BASE_URL } from "./hero";

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

  return {
    title: attrs.title,
    tagline: attrs.tagline,
    description: attrs.description,
    vision: attrs.vision,
    mission: attrs.mission,
    officeAddress: attrs.office_address,
    domicileAddress: attrs.domicile_address,
    phone: attrs.phone,
    email: attrs.email,
    imageUrl,
    imageAlt,
    imageCaption,
  };
}

/**
 * Server-Side Fetcher for About Section / Company Settings data
 * Endpoint: GET company-settings?populate=*
 */
export async function fetchAboutSectionData(): Promise<AboutSectionData> {
  const queryString = getAboutQueryString("*");
  const endpoint = `${STRAPI_BASE_URL}/api/company-settings?${queryString}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(endpoint, {
    headers,
    cache: "no-store", // SSR: Fetch fresh data on each server request
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch About Section data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<StrapiAboutItem[] | StrapiAboutItem> = await res.json();

  let firstItem: StrapiAboutItem | undefined;

  if (Array.isArray(json.data)) {
    firstItem = json.data[0];
  } else if (json.data) {
    firstItem = json.data;
  }

  return normalizeAboutData(firstItem);
}
