import { STRAPI_BASE_URL } from "./hero";
import { ProcessSectionData, ProcessHeaderData, ProcessItemData } from "@/types/process";
import { HOME_PROCESSES } from "@/lib/constant";

/**
 * Server-side fetcher for Process Section data
 * Fetches header from GET /api/working-process-settings
 * Fetches steps from GET /api/working-process-detail-settings
 */
export async function fetchProcessSectionData(): Promise<ProcessSectionData> {
  const headerEndpoint = `${STRAPI_BASE_URL}/api/working-process-settings`;
  const itemsEndpoint = `${STRAPI_BASE_URL}/api/working-process-detail-settings`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const [headerRes, itemsRes] = await Promise.all([
    fetch(headerEndpoint, { headers, cache: "no-store" }).catch(() => null),
    fetch(itemsEndpoint, { headers, cache: "no-store" }).catch(() => null),
  ]);

  let header: ProcessHeaderData = {
    badge: "Proses Kerja",
    tagline: "Tujuh tahap kerja yang terukur",
    description:
      "Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima.",
  };

  if (headerRes && headerRes.ok) {
    try {
      const headerJson = await headerRes.json();
      const rawHeader = Array.isArray(headerJson.data) ? headerJson.data[0] : headerJson.data;
      if (rawHeader) {
        const attrs = rawHeader.attributes || rawHeader;
        header = {
          badge: attrs.title || attrs.badge || "Proses Kerja",
          tagline: attrs.tagline || "Tujuh tahap kerja yang terukur",
          description:
            attrs.description ||
            "Alur kerja yang sama untuk setiap proyek, sehingga progres mudah dipantau dari awal hingga serah terima.",
        };
      }
    } catch (e) {
      console.error("Error parsing working-process-settings:", e);
    }
  }

  let items: ProcessItemData[] = HOME_PROCESSES.map((item) => ({
    step: item.step,
    title: item.title,
    desc: item.desc,
  }));

  if (itemsRes && itemsRes.ok) {
    try {
      const itemsJson = await itemsRes.json();
      if (itemsJson.data && Array.isArray(itemsJson.data) && itemsJson.data.length > 0) {
        items = itemsJson.data.map((item: any, idx: number) => {
          const attrs = item.attributes || item;
          const stepNum = (idx + 1).toString().padStart(2, "0");
          return {
            step: stepNum,
            title: attrs.title || `Tahap ${idx + 1}`,
            desc: attrs.description || attrs.desc || "",
          };
        });
      }
    } catch (e) {
      console.error("Error parsing working-process-detail-settings:", e);
    }
  }

  return {
    header,
    items,
  };
}
