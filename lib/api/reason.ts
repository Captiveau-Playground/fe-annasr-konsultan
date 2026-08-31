import { getStrapiBaseUrl } from "./hero";
import { ReasonItem } from "@/types/reason";

export const DEFAULT_REASONS: ReasonItem[] = [
  {
    id: 1,
    title: "Integritas Pengawasan",
    description:
      "Kami bertindak sebagai mitra independen yang menjaga kepentingan klien dan memastikan pekerjaan berjalan tepat waktu, tepat mutu, dan tepat biaya.",
  },
  {
    id: 2,
    title: "One-Stop Solution",
    description:
      "Berbagai kebutuhan proyek dapat ditangani dalam satu layanan, mulai dari studi kelayakan, desain arsitektur, perhitungan struktur, perizinan PBG/SLF, hingga pengawasan lapangan.",
  },
  {
    id: 3,
    title: "Kepatuhan Regulasi",
    description:
      "Kami memastikan dokumen teknis dan pekerjaan memenuhi ketentuan perizinan serta standar yang berlaku.",
  },
];

export async function fetchReasonSettingsData(): Promise<ReasonItem[]> {
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/reason-settings`;

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
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`Failed to fetch reason-settings (${res.status}): ${res.statusText}`);
      return DEFAULT_REASONS;
    }

    const json = await res.json();

    if (json.data && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map((item: any, idx: number) => {
        const attrs = item.attributes || item;
        return {
          id: item.id || attrs.id || idx + 1,
          documentId: item.documentId || attrs.documentId,
          title: attrs.title || `Alasan ${idx + 1}`,
          description: attrs.description || "",
          createdAt: attrs.createdAt,
          updatedAt: attrs.updatedAt,
          publishedAt: attrs.publishedAt,
        };
      });
    }

    return DEFAULT_REASONS;
  } catch (error) {
    console.error("Error fetching reason-settings data:", error);
    return DEFAULT_REASONS;
  }
}
