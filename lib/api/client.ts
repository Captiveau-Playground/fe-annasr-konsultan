import { getStrapiBaseUrl } from "./hero";
import { ClientsSectionData, ClientSectionHeaderData, ClientItemData } from "@/types/client";
import { HOME_CLIENTS } from "@/lib/constant";

/**
 * Server-side fetcher for Clients Section data
 * Fetches header from GET /api/client-pages
 * Fetches client list from GET /api/client-settings?populate=*
 */
export async function fetchClientsSectionData(): Promise<ClientsSectionData> {
  const baseUrl = getStrapiBaseUrl();
  const headerEndpoint = `${baseUrl}/api/client-pages`;
  const clientsEndpoint = `${baseUrl}/api/client-settings?populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const [headerRes, clientsRes] = await Promise.all([
    fetch(headerEndpoint, { headers, cache: "no-store" }).catch(() => null),
    fetch(clientsEndpoint, { headers, cache: "no-store" }).catch(() => null),
  ]);

  let header: ClientSectionHeaderData = {
    title: "Klien Kami",
    tagline: "Dipercaya instansi, lembaga, dan mitra usaha",
    description:
      "Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR KONSULTAN.",
  };

  if (headerRes && headerRes.ok) {
    try {
      const headerJson = await headerRes.json();
      const rawHeader = Array.isArray(headerJson.data) ? headerJson.data[0] : headerJson.data;
      if (rawHeader) {
        const attrs = rawHeader.attributes || rawHeader;
        header = {
          title:
            attrs.client_section_title || attrs.title || "Klien Kami",
          tagline:
            attrs.client_section_tagline ||
            attrs.tagline ||
            "Dipercaya instansi, lembaga, dan mitra usaha",
          description:
            attrs.client_section_description ||
            attrs.description ||
            "Sebagian pemberi tugas yang pernah bekerja sama dengan CV. AN NASR KONSULTAN.",
        };
      }
    } catch (e) {
      console.error("Error parsing client-pages API data:", e);
    }
  }

  let clients: ClientItemData[] = HOME_CLIENTS.map((c) => ({
    label: c.label,
    name: c.name,
  }));

  if (clientsRes && clientsRes.ok) {
    try {
      const clientsJson = await clientsRes.json();
      if (clientsJson.data && Array.isArray(clientsJson.data) && clientsJson.data.length > 0) {
        clients = clientsJson.data.map((item: any) => {
          const attrs = item.attributes || item;
          const name = attrs.name || "Klien";
          const initial = attrs.initial || attrs.label || name.slice(0, 2).toUpperCase();
          return {
            label: initial,
            name: name,
            type: attrs.type,
          };
        });
      }
    } catch (e) {
      console.error("Error parsing client-settings API data:", e);
    }
  }

  return {
    header,
    clients,
  };
}
