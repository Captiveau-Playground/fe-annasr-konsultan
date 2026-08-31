import { getStrapiBaseUrl } from "./hero";
import { FaqItem } from "@/types/faq";

export const DEFAULT_FAQS: FaqItem[] = [
  {
    id: 1,
    question: "Layanan apa saja yang disediakan CV. AN NASR KONSULTAN?",
    answer:
      "CV. AN NASR KONSULTAN adalah penyedia jasa konsultansi teknik sipil dan arsitektur yang berkedudukan di Kabupaten Jombang, Jawa Timur. Kami menangani pekerjaan perencanaan, pengawasan, pengurusan perizinan bangunan (PBG & SLF), serta pelaksanaan konstruksi untuk instansi pemerintah, lembaga, maupun perorangan. Tujuan kami sederhana: memastikan setiap rencana pembangunan berjalan tepat mutu, tepat biaya, dan tepat waktu.",
  },
  {
    id: 2,
    question: "Apakah CV. AN NASR KONSULTAN melayani pengurusan perizinan bangunan (PBG & SLF)?",
    answer:
      "Ya, kami menyediakan layanan pengurusan perizinan teknis seperti Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) yang mencakup penyusunan dokumen teknis, perhitungan struktur, serta asistensi hingga izin diterbitkan oleh instansi berwenang.",
  },
  {
    id: 3,
    question: "Di mana wilayah jangkauan operasional proyek CV. AN NASR KONSULTAN?",
    answer:
      "Kantor pusat operasional kami berada di Kabupaten Jombang, Jawa Timur. Namun, kami menangani proyek di berbagai kabupaten/kota baik di Jawa Timur maupun wilayah Indonesia lainnya.",
  },
  {
    id: 4,
    question: "Bagaimana alur untuk memulai konsultasi teknis proyek kami?",
    answer:
      "Anda dapat langsung menghubungi tim kami melalui tombol WhatsApp atau halaman kontak website. Tim ahli kami siap berdiskusi, memahami kebutuhan proyek, dan membantu menyusun rancangan teknis yang sesuai.",
  },
];

export async function fetchFaqSettingsData(): Promise<FaqItem[]> {
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/faq-settings`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token && token.trim() !== "") {
    headers["Authorization"] = `Bearer ${token.trim()}`;
  }

  try {
    const res = await fetch(endpoint, {
      headers,
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`Failed to fetch faq-settings data (${res.status}): ${res.statusText}`);
      return DEFAULT_FAQS;
    }

    const json = await res.json();

    if (json.data && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map((item: any) => {
        const attrs = item.attributes || item;
        return {
          id: item.id || attrs.id,
          documentId: item.documentId || attrs.documentId,
          question: attrs.question || "",
          answer: attrs.answer || "",
          createdAt: attrs.createdAt,
          updatedAt: attrs.updatedAt,
          publishedAt: attrs.publishedAt,
        };
      });
    }

    return DEFAULT_FAQS;
  } catch (error) {
    console.error("Error fetching faq-settings data:", error);
    return DEFAULT_FAQS;
  }
}
