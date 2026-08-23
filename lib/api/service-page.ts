import { StrapiResponse } from "@/types/hero";
import { STRAPI_BASE_URL } from "./hero";
import { ServicePageItem, LayananHeroData } from "@/types/service-page";

/**
 * Normalizes raw Strapi item from /api/service-pages into clean LayananHeroData
 */
export function normalizeLayananHeroData(rawItem?: ServicePageItem): LayananHeroData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as ServicePageItem;

  return {
    badge: attrs.hero_title || "Layanan",
    title: attrs.hero_tagline || "Layanan teknik yang lengkap dan terintegrasi",
    description:
      attrs.hero_description ||
      "Dari studi awal hingga serah terima pekerjaan, seluruh kebutuhan teknis proyek Anda dapat kami tangani dalam satu koordinasi.",
    sectionTitle: attrs.title || "Layanan Kami",
    sectionTagline: attrs.tagline || "Solusi lengkap dari perencanaan hingga pelaksanaan",
    sectionDescription:
      attrs.description ||
      "Empat lini layanan utama yang saling terhubung, sehingga setiap tahap proyek Anda tetap terkendali dalam satu standar mutu.",
  };
}

/**
 * Server-Side Fetcher for Layanan Hero Section data from GET /api/service-pages
 */
export async function fetchLayananHeroData(): Promise<LayananHeroData> {
  const endpoint = `${STRAPI_BASE_URL}/api/service-pages`;

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
    throw new Error(`Failed to fetch Service Pages data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<ServicePageItem[] | ServicePageItem> = await res.json();

  let firstItem: ServicePageItem | undefined;

  if (Array.isArray(json.data)) {
    firstItem = json.data[0];
  } else if (json.data) {
    firstItem = json.data;
  }

  return normalizeLayananHeroData(firstItem);
}
