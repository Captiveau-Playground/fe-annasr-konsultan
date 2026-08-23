import { STRAPI_BASE_URL } from "./hero";
import { CareerData, CareerPageData, CareerItemData } from "@/types/career";

export const FALLBACK_CAREER_JOBS: CareerItemData[] = [
  {
    title: "Drafter Teknik Sipil",
    location: "Jombang · Penuh Waktu",
    description:
      "Menyusun gambar kerja bangunan, jalan, dan jembatan menggunakan AutoCAD.",
    cta_button_text: "Lamar posisi ini",
  },
  {
    title: "Pengawas Lapangan",
    location: "Jombang & sekitarnya · Penuh Waktu",
    description:
      "Mengawasi mutu, volume, dan progres pekerjaan konstruksi di lokasi proyek.",
    cta_button_text: "Lamar posisi ini",
  },
  {
    title: "Estimator / Quantity Surveyor",
    location: "Jombang · Penuh Waktu",
    description:
      "Menyusun rencana anggaran biaya dan analisa harga satuan pekerjaan.",
    cta_button_text: "Lamar posisi ini",
  },
  {
    title: "Administrasi Proyek",
    location: "Jombang · Penuh Waktu",
    description:
      "Mengelola dokumen kontrak, laporan, dan administrasi perizinan proyek.",
    cta_button_text: "Lamar posisi ini",
  },
];

/**
 * Server-side fetcher for Career page data
 * Fetches page info from GET /api/career-pages?populate=*
 * Fetches job listings from GET /api/career-settings?populate=*
 */
export async function fetchCareerData(): Promise<CareerData> {
  const pageEndpoint = `${STRAPI_BASE_URL}/api/career-pages?populate=*`;
  const jobsEndpoint = `${STRAPI_BASE_URL}/api/career-settings?populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const [pageRes, jobsRes] = await Promise.all([
    fetch(pageEndpoint, { headers, cache: "no-store" }).catch(() => null),
    fetch(jobsEndpoint, { headers, cache: "no-store" }).catch(() => null),
  ]);

  let page: CareerPageData = {
    hero_title: "Karir",
    hero_tagline: "Tumbuh bersama tim teknik kami",
    hero_description:
      "Kami mencari orang-orang yang teliti, disiplin, dan senang belajar di dunia perencanaan dan konstruksi.",
    cta_tagline: "Konsultasikan Kebutuhan Proyek Anda Bersama Kami",
    cta_description:
      "Sampaikan rencana pembangunan Anda, tim kami akan membantu menyusun solusi teknis yang tepat sasaran dan sesuai anggaran.",
    cta_button_text: "Hubungi Kami",
  };

  if (pageRes && pageRes.ok) {
    try {
      const pageJson = await pageRes.json();
      const rawPage = Array.isArray(pageJson.data) ? pageJson.data[0] : pageJson.data;
      if (rawPage) {
        const attrs = rawPage.attributes || rawPage;
        page = {
          hero_title: attrs.hero_title || attrs.title || "Karir",
          hero_tagline: attrs.hero_tagline || attrs.tagline || "Tumbuh bersama tim teknik kami",
          hero_description:
            attrs.hero_description ||
            attrs.description ||
            "Kami mencari orang-orang yang teliti, disiplin, dan senang belajar di dunia perencanaan dan konstruksi.",
          cta_tagline:
            attrs.cta_tagline || "Konsultasikan Kebutuhan Proyek Anda Bersama Kami",
          cta_description:
            attrs.cta_description ||
            "Sampaikan rencana pembangunan Anda, tim kami akan membantu menyusun solusi teknis yang tepat sasaran dan sesuai anggaran.",
          cta_button_text: attrs.cta_button_text || "Hubungi Kami",
        };
      }
    } catch (e) {
      console.error("Error parsing career-pages API data:", e);
    }
  }

  let jobs: CareerItemData[] = FALLBACK_CAREER_JOBS;

  if (jobsRes && jobsRes.ok) {
    try {
      const jobsJson = await jobsRes.json();
      if (jobsJson.data && Array.isArray(jobsJson.data) && jobsJson.data.length > 0) {
        jobs = jobsJson.data.map((item: any) => {
          const attrs = item.attributes || item;
          return {
            id: item.id,
            title: attrs.title || "Lowongan Karir",
            description: attrs.description || attrs.desc || "",
            location: attrs.location || "Jombang · Penuh Waktu",
            cta_button_text: attrs.cta_button_text || "Lamar posisi ini",
          };
        });
      }
    } catch (e) {
      console.error("Error parsing career-settings API data:", e);
    }
  }

  return {
    page,
    jobs,
  };
}
