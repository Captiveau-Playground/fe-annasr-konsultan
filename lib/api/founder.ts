import { FounderSectionData, StrapiFounderItem } from "@/types/founder";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, STRAPI_BASE_URL } from "./hero";

/**
 * Builds the Strapi Query String for founder-settings endpoint
 */
export function getFounderQueryString(populate = "*"): string {
  const params = new URLSearchParams();
  if (populate) {
    params.append("populate", populate);
  }
  return params.toString();
}

/**
 * Normalizes raw Strapi response into clean FounderSectionData
 */
export function normalizeFounderData(rawItem?: StrapiFounderItem): FounderSectionData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as StrapiFounderItem;

  // Extract media object safely
  const photoMedia = attrs.photo;
  const photoUrl = getStrapiMediaUrl(photoMedia);

  // Extract alternativeText or caption from Strapi image if available
  const photoAlt =
    (photoMedia as any)?.alternativeText ||
    (photoMedia as any)?.caption ||
    attrs.name ||
    "Founder Photo";

  return {
    name: attrs.name,
    position: attrs.position,
    description: attrs.description,
    quote: attrs.quote,
    photoUrl,
    photoAlt,
  };
}

/**
 * Server-Side Fetcher for Founder Section data
 * Endpoint: GET founder-settings?populate=*
 */
export async function fetchFounderSectionData(): Promise<FounderSectionData> {
  const queryString = getFounderQueryString("*");
  const endpoint = `${STRAPI_BASE_URL}/api/founder-settings?${queryString}`;

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
    throw new Error(`Failed to fetch Founder Section data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<StrapiFounderItem[] | StrapiFounderItem> = await res.json();

  let firstItem: StrapiFounderItem | undefined;

  if (Array.isArray(json.data)) {
    firstItem = json.data[0];
  } else if (json.data) {
    firstItem = json.data;
  }

  return normalizeFounderData(firstItem);
}
