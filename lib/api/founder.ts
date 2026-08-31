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
  let photoUrl = getStrapiMediaUrl(photoMedia);

  // Normalize the multi-media attachments gallery
  const rawAttachments = attrs.attachments || (attrs as any).attachment;
  const attachmentList = Array.isArray(rawAttachments)
    ? rawAttachments
    : rawAttachments
    ? [rawAttachments]
    : [];

  const attachments = attachmentList
    .map((media) => ({
      url: getStrapiMediaUrl(media) || "",
      alt:
        (media as any)?.alternativeText ||
        (media as any)?.caption ||
        (media as any)?.name ||
        undefined,
      caption: (media as any)?.caption || undefined,
    }))
    .filter((attachment) => attachment.url !== "");

  if (!photoUrl && attachments.length > 0) {
    photoUrl = attachments[0].url;
  }

  // Extract alternativeText or caption from Strapi image if available
  const photoAlt =
    (photoMedia as any)?.alternativeText ||
    (photoMedia as any)?.caption ||
    attachments[0]?.alt ||
    attrs.name ||
    "Founder Photo";

  return {
    name: attrs.name || "Nasrulloh, ST",
    position: attrs.position || "Founder & Direktur",
    description: attrs.description,
    biography: attrs.biography || (attrs as any).biography,
    tagline: attrs.tagline || (attrs as any).tagline || "Mengenal Sosok di Balik An Nasr",
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
