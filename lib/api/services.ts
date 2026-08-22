import { ServiceCardData, StrapiServiceItem } from "@/types/service";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, STRAPI_BASE_URL } from "./hero";

/**
 * Default fallback service items when API is unavailable
 */
export const DEFAULT_SERVICES: ServiceCardData[] = [
  {
    id: 1,
    title: "Jasa Perencanaan",
    slug: "perencanaan",
    description:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    image: "/images/perencanaan.jpg",
    alt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    href: "/layanan/perencanaan",
    tags: [
      "Perencanaan Bangunan Gedung",
      "Perencanaan Jalan",
      "Perencanaan Jembatan",
    ],
  },
  {
    id: 2,
    title: "Jasa Pengawasan",
    slug: "pengawasan",
    description:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    image: "/images/pengawasan.jpg",
    alt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    href: "/layanan/pengawasan",
    tags: [
      "Pengawasan Bangunan Gedung",
      "Pengawasan Jalan",
      "Pengawasan Jembatan",
    ],
  },
  {
    id: 3,
    title: "Jasa Perizinan",
    slug: "perizinan",
    description:
      "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    image: "/images/perizinan.jpg",
    alt: "Pendampingan pengurusan dokumen perizinan bangunan PBG dan SLF",
    href: "/layanan/perizinan",
    tags: [
      "Persetujuan Bangunan Gedung (PBG)",
      "Sertifikat Laik Fungsi (SLF)",
    ],
  },
  {
    id: 4,
    title: "Jasa Konstruksi",
    slug: "konstruksi",
    description:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    image: "/images/konstruksi.jpg",
    alt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    href: "/layanan/konstruksi",
    tags: ["Pembangunan Rumah", "Renovasi Rumah", "Gedung"],
  },
];

/**
 * Normalizes a single Strapi service item into ServiceCardData
 */
export function normalizeServiceItem(
  rawItem: StrapiServiceItem,
  index: number
): ServiceCardData {
  const attrs = (rawItem.attributes || rawItem) as StrapiServiceItem;
  const slug = attrs.slug || `service-${index}`;

  // Resolve title
  let title = attrs.title || "";
  if (!title || title === "Layanan Kami" || title === "Layanan") {
    if (slug.includes("perencanaan")) title = "Jasa Perencanaan";
    else if (slug.includes("pengawasan") || slug.includes("pelayanan"))
      title = "Jasa Pengawasan";
    else if (slug.includes("perizinan")) title = "Jasa Perizinan";
    else if (slug.includes("konstruksi")) title = "Jasa Konstruksi";
    else
      title =
        slug
          .replace("jasa-", "")
          .charAt(0)
          .toUpperCase() + slug.slice(1);
  }

  // Resolve href
  let href = `/layanan/${slug.replace("jasa-", "")}`;
  if (slug === "jasa-pelayanan") href = "/layanan/pengawasan";

  // Resolve image
  const defaultFallback = DEFAULT_SERVICES[index % DEFAULT_SERVICES.length];
  const imageUrl = getStrapiMediaUrl(attrs.hero_image) || defaultFallback.image;
  const imageAlt =
    (attrs.hero_image as any)?.alternativeText ||
    (attrs.hero_image as any)?.caption ||
    defaultFallback.alt;

  // Resolve tags
  let tags: string[] = [];
  if (attrs.scope_list_text) {
    tags = attrs.scope_list_text
      .split(/,|\n/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  if (tags.length === 0) {
    tags = defaultFallback.tags;
  }

  return {
    id: attrs.id || index + 1,
    title,
    slug,
    description: attrs.short_description || defaultFallback.description,
    image: imageUrl,
    alt: imageAlt,
    href,
    tags,
  };
}

/**
 * Server-Side Fetcher for Service Settings data
 * Endpoint: GET /api/service-settings?populate=*
 */
export async function fetchServicesSectionData(): Promise<ServiceCardData[]> {
  const endpoint = `${STRAPI_BASE_URL}/api/service-settings?populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token =
    process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(
        `Failed to fetch service settings (${res.status}): ${res.statusText}. Using fallback.`
      );
      return DEFAULT_SERVICES;
    }

    const json: StrapiResponse<StrapiServiceItem[]> = await res.json();
    const data = Array.isArray(json.data) ? json.data : [];

    if (data.length === 0) {
      return DEFAULT_SERVICES;
    }

    return data.map((item, idx) => normalizeServiceItem(item, idx));
  } catch (error) {
    console.error("Error fetching Service Settings data:", error);
    return DEFAULT_SERVICES;
  }
}
