import { FounderSectionData, StrapiFounderItem } from "@/types/founder";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, getStrapiBaseUrl } from "./hero";

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

  // Normalize the multi-media attachments gallery
  const attachments = (Array.isArray(attrs.attachments) ? attrs.attachments : [])
    .map((media) => ({
      url: getStrapiMediaUrl(media) || "",
      alt:
        (media as any)?.alternativeText ||
        (media as any)?.caption ||
        (media as any)?.name ||
        undefined,
    }))
    .filter((attachment) => attachment.url !== "");

  return {
    name: attrs.name,
    position: attrs.position,
    description: attrs.description,
    quote: attrs.quote,
    photoUrl,
    photoAlt,
    attachments,
  };
}

/**
 * Server-Side Fetcher for Founder Section data
 */
export async function fetchFounderSectionData(): Promise<FounderSectionData> {
  const queryString = getFounderQueryString("*");
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/founder-settings?${queryString}`;

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
      console.warn(`Failed to fetch Founder Section data (${res.status}): ${res.statusText}`);
      return normalizeFounderData(undefined);
    }

    const json: StrapiResponse<StrapiFounderItem[] | StrapiFounderItem> = await res.json();

    let firstItem: StrapiFounderItem | undefined;

    if (Array.isArray(json.data)) {
      firstItem = json.data[0];
    } else if (json.data) {
      firstItem = json.data;
    }

    return normalizeFounderData(firstItem);
  } catch (error) {
    console.error("Error fetching FounderSection data on server:", error);
    return normalizeFounderData(undefined);
  }
}
