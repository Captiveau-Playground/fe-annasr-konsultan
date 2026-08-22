import { StrapiResponse } from "@/types/hero";
import { STRAPI_BASE_URL } from "./hero";
import { AboutUseItem, TentangHeroData } from "@/types/about-use";

/**
 * Normalizes raw Strapi item from /api/about-uses into clean TentangHeroData
 */
export function normalizeTentangHeroData(rawItem?: AboutUseItem): TentangHeroData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as AboutUseItem;

  return {
    badge: "Tentang Kami",
    title: attrs.hero_title || attrs.title,
    description: attrs.hero_description || attrs.description,
  };
}

/**
 * Server-Side Fetcher for Tentang Hero Section data from GET /api/about-uses
 */
export async function fetchTentangHeroData(): Promise<TentangHeroData> {
  const endpoint = `${STRAPI_BASE_URL}/api/about-uses`;

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
    throw new Error(`Failed to fetch About Uses data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<AboutUseItem[] | AboutUseItem> = await res.json();

  let firstItem: AboutUseItem | undefined;

  if (Array.isArray(json.data)) {
    firstItem = json.data[0];
  } else if (json.data) {
    firstItem = json.data;
  }

  return normalizeTentangHeroData(firstItem);
}
