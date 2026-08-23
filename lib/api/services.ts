import { ServiceCardData, ServiceDetailData, StrapiServiceItem } from "@/types/service";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, getStrapiBaseUrl } from "./hero";

/**
 * Default fallback detailed services when API is unavailable
 */
export const DEFAULT_SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  perencanaan: {
    id: "perencanaan",
    title: "Jasa Perencanaan Teknik Sipil & Arsitektur",
    slug: "perencanaan",
    shortDescription:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    aboutTitle: "Membangun dengan Desain Presisi & Perhitungan Matang",
    aboutText: [
      "Perencanaan konstruksi yang matang adalah kunci keberhasilan setiap pembangunan fisik. Tanpa desain teknis yang presisi dan perhitungan struktur yang akurat, proyek berisiko mengalami keterlambatan, pembengkakan biaya, hingga kegagalan fungsi bangunan.",
      "CV. AN NASR KONSULTAN menghadirkan layanan jasa perencanaan teknik sipil dan arsitektur yang terpadu. Kami menyusun Gambar Rencana (DED), Rencana Kerja dan Syarat-Syarat (RKS), serta Rencana Anggaran Biaya (RAB) yang realistis dan dapat dipertanggungjawabkan.",
    ],
    scopeTitle: "Lingkup Jasa Perencanaan Kami",
    scopes: [
      "Perencanaan Bangunan Gedung (Rumah, Kantor, Sekolah, Fasilitas Umum)",
      "Perencanaan Struktur Jalan Aspal & Jalan Beton",
      "Perencanaan Jembatan & Bangunan Pelengkap",
      "Perencanaan Saluran Irigasi & Sumber Daya Air",
      "Perencanaan Dinding Penahan Tanah (Retaining Wall)",
      "Perencanaan Bendungan & Embung",
    ],
    benefits: [
      "Gambar Kerja (DED) Lengkap & Detail",
      "Rencana Anggaran Biaya (RAB) Akurat",
      "Rencana Kerja & Syarat-Syarat (RKS)",
      "Perhitungan Struktur Terverifikasi",
      "Hasil Analisis Topografi & Ukur Tanah",
    ],
    heroImage: "/images/perencanaan.jpg",
    heroImageAlt:
      "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    gallery: [],
  },
  pengawasan: {
    id: "pengawasan",
    title: "Jasa Pengawasan Konstruksi Lapangan",
    slug: "pengawasan",
    shortDescription:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    aboutTitle: "Memastikan Pelaksanaan Sesuai Gambar Rencana & Spesifikasi",
    aboutText: [
      "Pengawasan proyek konstruksi merupakan garda terdepan untuk menjamin bahwa seluruh pekerjaan di lapangan dilaksanakan sesuai dengan spesifikasi teknis, gambar rencana (DED), dan RKS yang disepakati.",
      "Tim pengawas dari CV. AN NASR KONSULTAN melakukan inspeksi rutin dan berkala, pengujian mutu material, serta verifikasi laporan progres fisik bulanan dan harian guna menghindari penyimpangan di lapangan.",
    ],
    scopeTitle: "Lingkup Jasa Pengawasan Kami",
    scopes: [
      "Pengawasan Bangunan Gedung",
      "Pengawasan Jalan",
      "Pengawasan Jembatan",
      "Pengawasan Irigasi",
      "Pengawasan Penahan Tanah",
      "Pengawasan Bendungan",
    ],
    benefits: [
      "Laporan Progres Fisik Harian, Mingguan & Bulanan",
      "Sertifikat Quality Control & Uji Mutu Bahan",
      "Berita Acara Kemajuan Pekerjaan (Opname)",
      "Dokumentasi Foto Progres Lapangan",
    ],
    heroImage: "/images/pengawasan.jpg",
    heroImageAlt:
      "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    gallery: [],
  },
  perizinan: {
    id: "perizinan",
    title: "Pengurusan Perizinan PBG & SLF",
    slug: "perizinan",
    shortDescription:
      "Pendampingan penuh pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) melalui sistem SIMBG resmi agar proyek Anda legal dan siap beroperasi.",
    aboutTitle: "Legalitas Bangunan Gedung Sesuai Standar Nasional Indonesia",
    aboutText: [
      "Sesuai dengan Undang-Undang Cipta Kerja dan Peraturan Pemerintah No. 16 Tahun 2021, setiap pemilik bangunan gedung di Indonesia wajib mengantongi dokumen Persetujuan Bangunan Gedung (PBG) sebelum melakukan konstruksi, serta Sertifikat Laik Fungsi (SLF) sebagai izin operasional pemanfaatan gedung.",
      "Dokumen SLF diterbitkan setelah bangunan gedung diperiksa kelaikan fungsi teknisnya meliputi keandalan struktur bangunan, proteksi bahaya kebakaran, ketersediaan sarana evakuasi, pencahayaan alami, hingga pengelolaan sanitasi air bersih. CV. AN NASR KONSULTAN mendampingi pengurusan perizinan ini secara terintegrasi mulai dari pemeriksaan dokumen teknis, pengkajian lapangan, pengunggahan dokumen ke portal SIMBG, hingga penerbitan sertifikat formal dari Dinas PUPR setempat.",
    ],
    scopeTitle: "Lingkup Jasa Perizinan Kami",
    scopes: [
      "Persetujuan Bangunan Gedung (PBG) Gedung & Rumah",
      "Sertifikat Laik Fungsi (SLF) Bangunan Usaha & Industri",
      "Kajian Teknis Kelaikan Fungsi Bangunan",
      "Pemeriksaan Keselamatan & Proteksi Kebakaran",
      "Pendampingan Portal SIMBG Resmi Kementerian PUPR",
    ],
    benefits: [
      "Dokumen Gambar Rencana Arsitektur & Struktur (DED)",
      "Perhitungan Ketahanan Struktur & Fondasi",
      "Laporan Hasil Pemeriksaan Kelaikan Fungsi (SLF)",
      "Rekomendasi Proteksi Kebakaran & Sanitasi",
      "Kajian Dampak Lalu Lintas (Andalalin)",
      "Dokumen Lingkungan (SPPL / UKL-UPL)",
    ],
    heroImage: "/images/perizinan.jpg",
    heroImageAlt: "Perizinan PBG SLF Jombang",
    gallery: [],
  },
  konstruksi: {
    id: "konstruksi",
    title: "Jasa Pelaksanaan Konstruksi",
    slug: "konstruksi",
    shortDescription:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    aboutTitle: "Pelaksanaan Konstruksi dengan Standar Mutu Terjamin",
    aboutText: [
      "Pelaksanaan konstruksi yang sukses membutuhkan kombinasi manajemen proyek yang handal, tenaga kerja berpengalaman, serta pemilihan bahan material berkualitas tinggi.",
      "CV. AN NASR KONSULTAN siap mengeksekusi proyek konstruksi mulai dari tahap persiapan lahan, pondasi, struktur utama, hingga pekerjaan finishing dengan komitmen ketepatan waktu dan anggaran.",
    ],
    scopeTitle: "Lingkup Jasa Konstruksi Kami",
    scopes: [
      "Pembangunan Rumah",
      "Renovasi Rumah",
      "Gedung",
      "Kantor",
      "Sekolah",
      "Jalan Aspal",
      "Jalan Beton",
      "Jembatan",
      "Saluran Irigasi",
      "Penahan Tanah",
      "Bendungan",
    ],
    benefits: [
      "Hasil Pekerjaan Sesuai Spesifikasi Teknis",
      "Jaminan Garansi Pemeliharaan Pasca Konstruksi",
      "Manajemen K3 & Keselamatan Kerja di Lapangan",
      "Penyerahan Berita Acara Serah Terima (BAST)",
    ],
    heroImage: "/images/konstruksi.jpg",
    heroImageAlt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    gallery: [],
  },
};

/**
 * Server-Side Fetcher for Service Detail by slug
 */
export async function fetchServiceDetailBySlug(
  slug: string
): Promise<ServiceDetailData> {
  const cleanSlug = slug.toLowerCase().replace("jasa-", "");
  const defaultDetail =
    DEFAULT_SERVICE_DETAILS[cleanSlug] || DEFAULT_SERVICE_DETAILS.perencanaan;

  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/service-settings?populate=*`;
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
      return defaultDetail;
    }

    const json: StrapiResponse<StrapiServiceItem[]> = await res.json();
    const dataList = Array.isArray(json.data) ? json.data : [];

    const matched = dataList.find((item) => {
      const attrs = (item.attributes || item) as StrapiServiceItem;
      const rawSlug = (attrs.slug || "").toLowerCase();
      const itemCleanSlug = rawSlug.replace("jasa-", "");

      if (rawSlug === slug.toLowerCase()) return true;
      if (itemCleanSlug === cleanSlug) return true;
      if (
        cleanSlug === "pengawasan" &&
        (itemCleanSlug === "pelayanan" || rawSlug.includes("pelayanan"))
      )
        return true;
      if (
        cleanSlug === "pelayanan" &&
        (itemCleanSlug === "pengawasan" || rawSlug.includes("pengawasan"))
      )
        return true;
      return (
        itemCleanSlug.includes(cleanSlug) || cleanSlug.includes(itemCleanSlug)
      );
    });

    if (!matched) {
      return defaultDetail;
    }

    const attrs = (matched.attributes || matched) as StrapiServiceItem;

    const heroImageUrl =
      getStrapiMediaUrl(attrs.hero_image) || defaultDetail.heroImage;
    const heroImageAlt =
      (attrs.hero_image as any)?.alternativeText ||
      (attrs.hero_image as any)?.caption ||
      attrs.title ||
      defaultDetail.heroImageAlt;

    const aboutTextRaw = attrs.about_text;
    const aboutText = aboutTextRaw
      ? aboutTextRaw
          .split(/\n+/)
          .map((s) => s.trim())
          .filter(Boolean)
      : defaultDetail.aboutText;

    const scopeListRaw = attrs.scope_list_text;
    const scopes = scopeListRaw
      ? scopeListRaw
          .split(/\n+|,/)
          .map((s) => s.trim())
          .filter(Boolean)
      : defaultDetail.scopes;

    const benefitListRaw = attrs.benefit_text_list || attrs.benefilt_text_list;
    const benefits = benefitListRaw
      ? benefitListRaw
          .split(/\n+|,/)
          .map((s) => s.trim())
          .filter(Boolean)
      : defaultDetail.benefits;

    const galleryRaw = attrs.gallery;
    const gallery = Array.isArray(galleryRaw)
      ? galleryRaw
          .map((imgItem) => ({
            url: getStrapiMediaUrl(imgItem) || "",
            alt:
              (imgItem as any)?.alternativeText ||
              (imgItem as any)?.caption ||
              attrs.title ||
              "Dokumentasi Galeri Proyek",
          }))
          .filter((item) => Boolean(item.url))
      : defaultDetail.gallery;

    // Resolve title if generic "Layanan Kami" / "Layanan"
    let title = attrs.title || defaultDetail.title;
    if (title === "Layanan Kami" || title === "Layanan") {
      title = defaultDetail.title;
    }

    return {
      id: attrs.id || matched.id || defaultDetail.id,
      title,
      slug: attrs.slug || cleanSlug,
      shortDescription:
        attrs.short_description || defaultDetail.shortDescription,
      aboutTitle: attrs.about_title || defaultDetail.aboutTitle,
      aboutText,
      scopeTitle: attrs.scope_title || defaultDetail.scopeTitle,
      scopes,
      benefits,
      heroImage: heroImageUrl,
      heroImageAlt,
      gallery,
    };
  } catch (error) {
    console.error(`Error fetching service detail for ${slug}:`, error);
    return defaultDetail;
  }
}


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
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/service-settings?populate=*`;

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

