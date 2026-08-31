import { getStrapiBaseUrl, getStrapiMediaUrl } from "./hero";
import { TeamMember } from "@/types/team";

export const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Mohammad Khusnul\nKhakim, ST",
    position: "Tenaga Ahli",
    photoUrl: "/images/team.jpg",
  },
  {
    id: 2,
    name: "Mohammad Khusnul\nKhakim 2, ST",
    position: "Tenaga Ahli",
    photoUrl: "/images/team.jpg",
  },
  {
    id: 3,
    name: "Mohammad Khusnul\nKhakim 3, ST",
    position: "Tenaga Ahli",
    photoUrl: "/images/team.jpg",
  },
  {
    id: 4,
    name: "Mohammad Khusnul\nKhakim 4, ST",
    position: "Tenaga Ahli",
    photoUrl: "/images/team.jpg",
  },
];

export async function fetchTeamSettingsData(): Promise<TeamMember[]> {
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/team-settings?populate=*`;

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
      console.warn(`Failed to fetch team-settings (${res.status}): ${res.statusText}`);
      return DEFAULT_TEAM_MEMBERS;
    }

    const json = await res.json();

    if (json.data && Array.isArray(json.data) && json.data.length > 0) {
      return json.data.map((item: any, idx: number) => {
        const attrs = item.attributes || item;
        const photoMedia = attrs.photo || attrs.image || attrs.avatar;
        const photoUrl = getStrapiMediaUrl(photoMedia) || "/images/team.jpg";
        return {
          id: item.id || attrs.id || idx + 1,
          documentId: item.documentId || attrs.documentId,
          name: attrs.name || "Anggota Tim",
          position: attrs.position || "Tenaga Ahli",
          photoUrl,
          photoAlt: attrs.name || "Foto Anggota Tim",
          createdAt: attrs.createdAt,
          updatedAt: attrs.updatedAt,
          publishedAt: attrs.publishedAt,
        };
      });
    }

    return DEFAULT_TEAM_MEMBERS;
  } catch (error) {
    console.error("Error fetching team-settings data:", error);
    return DEFAULT_TEAM_MEMBERS;
  }
}
