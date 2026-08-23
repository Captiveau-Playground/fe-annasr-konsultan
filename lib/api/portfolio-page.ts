import { StrapiResponse } from "@/types/hero";
import { STRAPI_BASE_URL, getStrapiMediaUrl } from "./hero";
import { PortfolioPageItem, PortfolioHeroData } from "@/types/portfolio-page";
import { Project } from "@/components/PortfolioGrid";

/**
 * Normalizes raw Strapi item from /api/portfolio-pages into clean PortfolioHeroData
 */
export function normalizePortfolioHeroData(rawItem?: PortfolioPageItem): PortfolioHeroData {
  if (!rawItem) return {};

  const attrs = (rawItem.attributes || rawItem) as PortfolioPageItem;

  return {
    badge: attrs.title || attrs.hero_title || "Portfolio",
    tagline: attrs.tagline || attrs.hero_tagline || "Pekerjaan yang berbicara melalui hasilnya",
    description:
      attrs.description ||
      attrs.hero_description ||
      "Setiap proyek kami dokumentasikan sebagai bukti komitmen terhadap mutu pekerjaan dan ketepatan pelaksanaan di lapangan.",
  };
}

/**
 * Server-Side Fetcher for Portfolio Hero Section data from GET /api/portfolio-pages
 */
export async function fetchPortfolioHeroData(): Promise<PortfolioHeroData> {
  const endpoint = `${STRAPI_BASE_URL}/api/portfolio-pages`;

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
    throw new Error(`Failed to fetch Portfolio Pages data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<PortfolioPageItem[] | PortfolioPageItem> = await res.json();

  let firstItem: PortfolioPageItem | undefined;

  if (Array.isArray(json.data)) {
    firstItem = json.data[0];
  } else if (json.data) {
    firstItem = json.data;
  }

  return normalizePortfolioHeroData(firstItem);
}

/**
 * Server-Side Fetcher for Portfolio Categories from GET /api/portofolio-category-settings
 */
export async function fetchPortfolioCategories(): Promise<string[]> {
  const endpoint = `${STRAPI_BASE_URL}/api/portofolio-category-settings`;

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
    throw new Error(`Failed to fetch Portfolio Categories data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<any[]> = await res.json();

  if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
    return [];
  }

  const names: string[] = json.data
    .map((item: any) => (item.attributes ? item.attributes.name : item.name))
    .filter(Boolean);

  // Ensure "Semua" is placed first if present, or prepend it if missing
  const withoutSemua = names.filter((n) => n.toLowerCase() !== "semua");
  return ["Semua", ...withoutSemua];
}

/**
 * Normalizes raw Strapi item from /api/portofolio-detail-settings into clean Project
 */
export function normalizePortfolioProjectItem(rawItem: any, index: number): Project {
  if (!rawItem) return { title: "", location: "", category: "" };

  const attrs = rawItem.attributes || rawItem;

  const categoryName =
    attrs.portofolio_category_settings?.[0]?.name ||
    attrs.portofolio_category_settings?.[0]?.attributes?.name ||
    attrs.category ||
    "Bangunan";

  let imgUrl: string | undefined;
  if (attrs.image) {
    imgUrl = getStrapiMediaUrl(attrs.image);
  }

  const fallbacks = [
    "/images/perencanaan.jpg",
    "/images/pengawasan.jpg",
    "/images/hero-bg.jpg",
    "/images/konstruksi.jpg",
    "/images/perizinan.jpg",
    "/images/team.jpg",
  ];
  const fallbackImage = fallbacks[index % fallbacks.length];

  const height =
    categoryName === "Gedung" || categoryName === "Jembatan" ? "h-[26rem]" : "h-64";

  return {
    title: attrs.title || "Proyek Konstruksi",
    location: attrs.address || attrs.location || "Kabupaten Jombang",
    category: categoryName,
    image: imgUrl || fallbackImage,
    fallbackImage: fallbackImage,
    height: height,
  };
}

/**
 * Server-Side Fetcher for Portfolio Projects list from GET /api/portofolio-detail-settings?populate=*
 */
export async function fetchPortfolioProjects(): Promise<Project[]> {
  const endpoint = `${STRAPI_BASE_URL}/api/portofolio-detail-settings?populate=*`;

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
    throw new Error(`Failed to fetch Portfolio Projects data (${res.status}): ${res.statusText}`);
  }

  const json: StrapiResponse<any[]> = await res.json();

  if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
    return [];
  }

  return json.data.map((item, idx) => normalizePortfolioProjectItem(item, idx));
}
