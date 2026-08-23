import { StrapiResponse } from "@/types/hero";
import { STRAPI_BASE_URL, getStrapiMediaUrl } from "./hero";
import { PortfolioPageItem, PortfolioHeroData } from "@/types/portfolio-page";
import { Project } from "@/components/PortfolioGrid";

export const FALLBACK_CATEGORIES = [
  "Semua",
  "Bangunan",
  "Jalan",
  "Jembatan",
  "Irigasi",
  "Gedung",
  "Renovasi",
];

export const FALLBACK_PROJECTS: Project[] = [
  {
    title: "Pembangunan Gedung Serbaguna",
    location: "Kecamatan Jombang, Jombang",
    category: "Gedung",
    image: "/assets/proyek-gedung-DKD8sHd2.jpg",
    fallbackImage: "/images/perencanaan.jpg",
    height: "h-[26rem]",
  },
  {
    title: "Peningkatan Jalan Beton Desa",
    location: "Kecamatan Tembelang, Jombang",
    category: "Jalan",
    image: "/assets/proyek-jalan-xGjvwBYW.jpg",
    fallbackImage: "/images/pengawasan.jpg",
    height: "h-64",
  },
  {
    title: "Pembangunan Jembatan Penghubung Desa",
    location: "Kecamatan Ploso, Jombang",
    category: "Jembatan",
    image: "/assets/proyek-jembatan-DmEaBVlD.jpg",
    fallbackImage: "/images/hero-bg.jpg",
    height: "h-[26rem]",
  },
  {
    title: "Rehabilitasi Saluran Irigasi Primer",
    location: "Kecamatan Megaluh, Jombang",
    category: "Irigasi",
    image: "/assets/proyek-irigasi-Bmt-FDLU.jpg",
    fallbackImage: "/images/konstruksi.jpg",
    height: "h-64",
  },
  {
    title: "Renovasi Rumah Tinggal Dua Lantai",
    location: "Candi Mulyo, Jombang",
    category: "Renovasi",
    image: "/assets/proyek-renovasi-DNXca7xG.jpg",
    fallbackImage: "/images/perizinan.jpg",
    height: "h-64",
  },
  {
    title: "Pengawasan Bangunan Penahan Air",
    location: "Kabupaten Jombang",
    category: "Bangunan",
    image: "/assets/proyek-bendungan-CTIXBTEp.jpg",
    fallbackImage: "/images/team.jpg",
    height: "h-64",
  },
];

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

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (res.ok) {
      const json: StrapiResponse<PortfolioPageItem[] | PortfolioPageItem> = await res.json();
      let firstItem: PortfolioPageItem | undefined;

      if (Array.isArray(json.data)) {
        firstItem = json.data[0];
      } else if (json.data) {
        firstItem = json.data;
      }

      return normalizePortfolioHeroData(firstItem);
    }
  } catch (err) {
    console.error("Error fetching Portfolio Hero data:", err);
  }

  return {
    badge: "Portfolio",
    tagline: "Pekerjaan yang berbicara melalui hasilnya",
    description:
      "Setiap proyek kami dokumentasikan sebagai bukti komitmen terhadap mutu pekerjaan dan ketepatan pelaksanaan di lapangan.",
  };
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

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (res.ok) {
      const json: StrapiResponse<any[]> = await res.json();

      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        const names: string[] = json.data
          .map((item: any) => (item.attributes ? item.attributes.name : item.name))
          .filter(Boolean);

        const withoutSemua = names.filter((n) => n.toLowerCase() !== "semua");
        return ["Semua", ...withoutSemua];
      }
    }
  } catch (err) {
    console.error("Error fetching Portfolio Categories:", err);
  }

  return FALLBACK_CATEGORIES;
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

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (res.ok) {
      const json: StrapiResponse<any[]> = await res.json();

      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return json.data.map((item, idx) => normalizePortfolioProjectItem(item, idx));
      }
    }
  } catch (err) {
    console.error("Error fetching Portfolio Projects:", err);
  }

  return FALLBACK_PROJECTS;
}
