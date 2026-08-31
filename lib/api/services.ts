import { ServiceCardData, ServiceDetailData, StrapiServiceItem } from "@/types/service";
import { StrapiResponse } from "@/types/hero";
import { getStrapiMediaUrl, getStrapiBaseUrl } from "./hero";

/**
 * Default fallback detailed services when API is unavailable
 */
export const DEFAULT_SERVICE_DETAILS: Record<string, ServiceDetailData> = {
  perencanaan: {
    id: "perencanaan",
    title: "Jasa Perencanaan",
    slug: "jasa-perencanaan",
    shortDescription:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    ctaBtnText: "Konsultasi Sekarang",
    heroImage: "/images/perencanaan.jpg",
    heroImageAlt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    section2Description: `# Mengapa Perencanaan penting?\n1. Mencegah kesalahan fatal dalam pelaksanaan fisik yang berpotensi memicu kegagalan struktur atau kegagalan fungsi bangunan.\n2. Memastikan rancangan memenuhi standar Peraturan Daerah dan standar teknis nasional agar perizinan dapat diterbitkan.\n3. Mencegah pembengkakan anggaran (cost overrun) dan pemborosan material akibat perencanaan yang tidak terukur.\n\n# Apa manfaat yang diperoleh klien?\n1.  Bangunan Aman & Tahan Lama\n2.  Optimasi Fungsi & Estetika\n3.  Biaya & Waktu Terkontrol\n4.  Kemudahan Perizinan`,
    section2Image: "/images/perencanaan.jpg",
    section2ImageAlt: "Diskusi tim perencanaan konstruksi",
    workflows: [
      { id: 1, title: "Tahap Inisiasi & Pengumpulkan Data", stepNumber: "01" },
      { id: 2, title: "Tahap Pra-Rancangan (Konsep Desain)", stepNumber: "02" },
      { id: 3, title: "Tahap Pengembangan Desain", stepNumber: "03" },
      { id: 4, title: "Tahap Pembuatan Gambar Detail", stepNumber: "04" },
      { id: 5, title: "Tahap Perhitungan RAB & Penyusunan Dokumen", stepNumber: "05" },
      { id: 6, title: "Tahap Finalisasi & Serah Terima", stepNumber: "06" },
    ],
    section3Text: `# Apa saja output atau dokumen yang akan diterima klien?\n1.  Dokumen Gambar Kerja :\n- Gambar Arsitektur\n- Gambar Struktur\n- Gambar MEP\n2.  Dokumen Anggaran & Spesifikasi:\n- Rencana Anggaran Biaya (RAB)\n- Spesifikasi Teknis Material.`,
    section3Image: "/images/perencanaan.jpg",
    section3ImageAlt: "Tim perencana proyek jembatan dan gedung",
    aboutTitle: "Membangun dengan Desain Presisi & Perhitungan Matang",
    aboutText: [
      "Perencanaan konstruksi yang matang adalah kunci keberhasilan setiap pembangunan fisik.",
    ],
    scopeTitle: "Lingkup Jasa Perencanaan Kami",
    scopes: [
      "Perencanaan Bangunan Gedung (Rumah, Kantor, Sekolah, Fasilitas Umum)",
      "Perencanaan Struktur Jalan Aspal & Jalan Beton",
    ],
    benefits: [
      "Gambar Kerja (DED) Lengkap & Detail",
      "Rencana Anggaran Biaya (RAB) Akurat",
    ],
    gallery: [],
  },
  pengawasan: {
    id: "pengawasan",
    title: "Jasa Pengawasan",
    slug: "jasa-pengawasan",
    shortDescription:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    ctaBtnText: "Konsultasi Sekarang",
    heroImage: "/images/pengawasan.jpg",
    heroImageAlt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi",
    section2Description: `# Mengapa Pengawasan penting?\n1. Memastikan pelaksanaan fisik sesuai dengan spesifikasi teknis dan DED.\n2. Mengontrol penggunaan anggaran dan ketepatan waktu pelaksanaan proyek.\n3. Menjamin kualitas material dan keselamatan kerja di lapangan.\n\n# Apa manfaat yang diperoleh klien?\n1. Pelaksanaan Proyek Tepat Waktu\n2. Kualitas Konstruksi Terjamin\n3. Laporan Kemajuan Progres Transparan\n4. Minim Risiko Penyimpangan Lapangan`,
    section2Image: "/images/pengawasan.jpg",
    section2ImageAlt: "Pengawasan lapangan proyek",
    workflows: [
      { id: 1, title: "Tahap Inspeksi Rutin Lapangan", stepNumber: "01" },
      { id: 2, title: "Tahap Pengujian Mutu Material", stepNumber: "02" },
      { id: 3, title: "Tahap Verifikasi Laporan Progres", stepNumber: "03" },
      { id: 4, title: "Tahap Evaluasi & Serah Terima Pekerjaan", stepNumber: "04" },
    ],
    section3Text: `# Apa saja output atau dokumen yang akan diterima klien?\n1. Dokumen Laporan Progres Fisik (Harian, Mingguan & Bulanan)\n2. Sertifikat Quality Control & Uji Mutu Bahan\n3. Berita Acara Kemajuan Pekerjaan & Foto Dokumentasi Lapangan`,
    section3Image: "/images/pengawasan.jpg",
    section3ImageAlt: "Insinyur melakukan pengawasan mutu di lapangan",
    aboutTitle: "Memastikan Pelaksanaan Sesuai Gambar Rencana",
    aboutText: ["Pengawasan proyek konstruksi merupakan garda terdepan."],
    scopeTitle: "Lingkup Jasa Pengawasan Kami",
    scopes: ["Pengawasan Bangunan Gedung", "Pengawasan Jalan"],
    benefits: ["Laporan Progres Fisik", "QC & Uji Mutu"],
    gallery: [],
  },
  perizinan: {
    id: "perizinan",
    title: "Jasa Perizinan",
    slug: "jasa-perizinan",
    shortDescription:
      "Pendampingan penuh pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) melalui sistem SIMBG resmi agar proyek Anda legal dan siap beroperasi.",
    ctaBtnText: "Konsultasi Sekarang",
    heroImage: "/images/perizinan.jpg",
    heroImageAlt: "Perizinan PBG SLF Jombang",
    section2Description: `# Mengapa Layanan ini Penting?\n1. Legalitas bangunan yang terjamin sesuai Peraturan Pemerintah No. 16 Tahun 2021.\n2. Mengurangi risiko sanksi administratif dan penghentian operasional bangunan.\n3. Memastikan bangunan memenuhi kelaikan fungsi teknis dan keselamatan pengguna.\n\n# Apa manfaat yang diperoleh klien?\n1. Proses Pengurusan SIMBG Cepat & Terarah\n2. Pendampingan Pemeriksaan Kelaikan Teknis\n3. Terbitnya Dokumen PBG & SLF Resmi\n4. Bangunan Siap Beroperasi Legal`,
    section2Image: "/images/perizinan.jpg",
    section2ImageAlt: "Rapat verifikasi dokumen perizinan",
    requirements: [
      {
        id: 1,
        title: "Persyaratan Pengurusan PBG :",
        description: "1. Mempunyai akun SIMBG \n2. Data pemohon (KTP, Nomor HP, email) \n3. Data bangunan (lokasi, jenis, fungsi, luas, jumlah lantai, tinggi, luas dan jumlah lantai basement, perancang dokumen teknis)\n4. Data tanah (jenis-nomor-tanggal surat tanah, lokasi, luas, atas nama, gambar batas tanah, gambar dan informasi hasil penyelidikan tanah, surat perjanjian pemanfaatan tanah) dilengkapi rekomendasi desa dan camat, persetujuan simpadan \n5. Kesesuaian Rencana Kabupaten (KRK) \n6. Dokumen Lingkungan (AMDAL / UKL-UPL / SPPL) \n7. Surat Persetujuan Simpadan, Rekomendasi Camat, Rekomendasi Kepala Desa/Lurah \n8. Data Penyedia Jasa Perencana Konstruksi (badan usaha/perseorangan), Arsitek berlisensi \n9. Dokumen arsitektur, gambar situasi, rencana tapak, denah, potongan, tampak dan detail bangunan gedung, spesifikasi teknis (jenis, tipe dan karakteristik material/bahan) \n10. Dokumen struktur : perhitungan teknis sederhana dan gambar rencana fondasi, basemen kolom ; gambar detail struktur ; spesifikasi teknis (jenis, tipe dan karakteristik material/bahan) \n11. Dokumen MEP (Mekanikal Elektrikal Plambing) : perhitungan teknis sederhana dan gambar jaringan listrik (gambar sumber, jaringan dan pencahayaan) ; perhitungan teknis dan gambar rencana system sanitasi (pengelolaan air bersih, air limbah, air hujan, drainase dan persampahan) ; spesifikasi teknis (jenis, tipe dan karakteristik material/bahan)",
      },
      {
        id: 2,
        title: "Persyaratan Pengurusan SLF :",
        description: "1. Mempunyai akun SIMBG \n2. Data pemohon (KTP, Nomor HP, email) \n3. Data bangunan (lokasi, jenis, fungsi, luas, jumlah lantai, tinggi, luas dan jumlah lantai basement, perancang dokumen teknis) \n4. Data tanah (jenis-nomor-tanggal surat tanah, lokasi, luas, atas nama, gambar batas tanah, gambar dan informasi hasil penyelidikan tanah, surat perjanjian pemanfaatan tanah) dilengkapi rekomendasi desa dan camat, persetujuan simpadan \n5. Kesesuaian Rencana Kabupaten (KRK) \n6. Dokumen Lingkungan (AMDAL / UKL-UPL / SPPL) \n7. Surat Persetujuan Simpadan, Rekomendasi Camat, Rekomendasi Kepala Desa/Lurah \n8. Data Penyedia Jasa Perencana Konstruksi (badan usaha/perseorangan), Arsitek berlisensi \n9. Dokumen arsitektur, gambar situasi, rencana tapak, denah, potongan, tampak dan detail bangunan gedung, spesifikasi teknis (jenis, tipe dan karakteristik material/bahan) \n10. Dokumen struktur : perhitungan teknis sederhana dan gambar rencana fondasi, basemen kolom ; gambar detail struktur ; spesifikasi teknis (jenis, tipe dan karakteristik material/bahan) \n11. Dokumen MEP (Mekanikal Elektrikal Plambing) : perhitungan teknis sederhana dan gambar jaringan listrik (gambar sumber, jaringan dan pencahayaan) ; perhitungan teknis dan gambar rencana system sanitasi (pengelolaan air bersih, air limbah, air hujan, drainase dan persampahan) ; spesifikasi teknis (jenis, tipe dan karakteristik material/bahan)",
      },
    ],
    section3Text: `# Apa saja output atau dokumen yang akan diterima klien?\n1. Sertifikat PBG (Persetujuan Bangunan Gedung) resmi pemerintah daerah / SIMBG\n2. Sertifikat Laik Fungsi (SLF) resmi serta dokumen rekomendasi kelaikan fungsi bangunan.`,
    section3Image: "/images/perizinan.jpg",
    section3ImageAlt: "Pemeriksaan kelaikan fungsi bangunan",
    aboutTitle: "Legalitas Bangunan Gedung",
    aboutText: ["Sesuai dengan Undang-Undang Cipta Kerja."],
    scopeTitle: "Lingkup Jasa Perizinan Kami",
    scopes: ["Persetujuan Bangunan Gedung (PBG)", "Sertifikat Laik Fungsi (SLF)"],
    benefits: ["Sertifikat PBG/SLF Resmi", "Kajian Kelaikan Teknis"],
    gallery: [],
  },
  konstruksi: {
    id: "konstruksi",
    title: "Jasa Pelaksanaan Konstruksi",
    slug: "jasa-konstruksi",
    shortDescription:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    ctaBtnText: "Konsultasi Sekarang",
    heroImage: "/images/konstruksi.jpg",
    heroImageAlt: "Pekerja konstruksi membangun struktur bangunan",
    section2Description: `# Mengapa Konstruksi penting?\n1. Menjamin eksekusi fisik pembangunan sesuai dengan standar keamanan dan kekuatan struktur.\n2. Menggunakan material pilihan berkualitas tingi dengan manajemen waktu kerja teratur.\n\n# Apa manfaat yang diperoleh klien?\n1. Mutu Bangunan Terjamin\n2. Garansi Pemeliharaan Pasca Konstruksi\n3. Ketepatan Waktu Pelaksanaan Proyek`,
    section2Image: "/images/konstruksi.jpg",
    section2ImageAlt: "Lokasi proyek konstruksi fisik",
    workflows: [
      { id: 1, title: "Tahap Persiapan Lahan & Mobile Material", stepNumber: "01" },
      { id: 2, title: "Tahap Pekerjaan Fondasi & Struktur Utama", stepNumber: "02" },
      { id: 3, title: "Tahap Arsitektural & Finishing", stepNumber: "03" },
      { id: 4, title: "Tahap Serah Terima Pekerjaan (BAST)", stepNumber: "04" },
    ],
    section3Text: `# Apa saja output atau dokumen yang akan diterima klien?\n1. Bangunan Fisik Siap Pakai\n2. Berita Acara Serah Terima (BAST)\n3. Dokumen As-Built Drawing & Garansi Pemeliharaan`,
    section3Image: "/images/konstruksi.jpg",
    section3ImageAlt: "Tim fisik konstruksi di lapangan",
    aboutTitle: "Pelaksanaan Konstruksi dengan Standar Mutu Terjamin",
    aboutText: ["Pelaksanaan konstruksi yang sukses membutuhkan kombinasi manajemen proyek."],
    scopeTitle: "Lingkup Jasa Konstruksi Kami",
    scopes: ["Pembangunan Rumah", "Gedung"],
    benefits: ["Hasil Bergaransi", "Keselamatan K3"],
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
  const endpoint = `${baseUrl}/api/service-settings?populate[portofolio_settings][populate]=*`;
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

    const section2ImageUrl =
      getStrapiMediaUrl(attrs.section_2_image) ||
      defaultDetail.section2Image ||
      heroImageUrl;
    const section2ImageAlt =
      (attrs.section_2_image as any)?.alternativeText ||
      (attrs.section_2_image as any)?.caption ||
      attrs.title ||
      defaultDetail.section2ImageAlt;

    const section3ImageUrl =
      getStrapiMediaUrl(attrs.section_3_image) ||
      defaultDetail.section3Image ||
      heroImageUrl;
    const section3ImageAlt =
      (attrs.section_3_image as any)?.alternativeText ||
      (attrs.section_3_image as any)?.caption ||
      attrs.title ||
      defaultDetail.section3ImageAlt;

    const workflowsRaw = attrs.workflow_service_settings;
    const workflows =
      Array.isArray(workflowsRaw) && workflowsRaw.length > 0
        ? workflowsRaw.map((item, idx) => ({
          id: item.id || idx + 1,
          title: item.title,
          stepNumber: String(idx + 1).padStart(2, "0"),
        }))
        : defaultDetail.workflows;

    const requirementsRaw = attrs.requirment_service_settings;
    const requirements =
      Array.isArray(requirementsRaw) && requirementsRaw.length > 0
        ? requirementsRaw.map((item, idx) => ({
          id: item.id || idx + 1,
          title: item.title,
          description: item.description,
        }))
        : defaultDetail.requirements;

    const portfoliosRaw =
      attrs.portofolio_settings || attrs.portfolio_settings;
    const portfolios =
      Array.isArray(portfoliosRaw) && portfoliosRaw.length > 0
        ? portfoliosRaw.map((item: any, idx: number) => {
          const catItem = Array.isArray(item.portofolio_category_settings)
            ? item.portofolio_category_settings[0]
            : item.portofolio_category_settings;

          const categoryName =
            catItem?.name ||
            catItem?.attributes?.name ||
            item.category ||
            (item.title && item.title.toLowerCase().includes("jalan")
              ? "JALAN"
              : "BANGUNAN");

          const rawImg = Array.isArray(item.image) ? item.image[0] : item.image;
          const rawHeroImg = Array.isArray(item.hero_image)
            ? item.hero_image[0]
            : item.hero_image;

          const imgUrl =
            getStrapiMediaUrl(rawImg) || getStrapiMediaUrl(rawHeroImg);

          console.log("[DEBUG portfolio image]", {
            title: item.title,
            item_image: item.image,
            rawImg,
            imgUrl,
          });

          const fallbacks = [
            "/assets/proyek-gedung-DKD8sHd2.jpg",
            "/assets/proyek-jalan-xGjvwBYW.jpg",
            "/assets/proyek-jembatan-DmEaBVlD.jpg",
          ];
          const fallbackImage = fallbacks[idx % fallbacks.length];

          return {
            id: item.id || idx + 1,
            title: item.title || "Proyek Konstruksi",
            location: item.address || item.location || "Kabupaten Jombang",
            category: categoryName,
            image: imgUrl || fallbackImage,
            fallbackImage,
          };
        })
        : defaultDetail.portfolios;

    let title = attrs.title || defaultDetail.title;
    if (title === "Layanan Kami" || title === "Layanan") {
      title = defaultDetail.title;
    }

    const rawSeo = attrs.seo;
    const seoItem = Array.isArray(rawSeo) ? rawSeo[0] : rawSeo;
    const seo = seoItem
      ? {
        metaTitle: seoItem.metaTile || seoItem.metaTitle || seoItem.title,
        metaDescription: seoItem.metaDescription || seoItem.description,
        keywords: seoItem.keywords,
        metaImageUrl: getStrapiMediaUrl(seoItem.metaImage),
      }
      : undefined;

    return {
      id: attrs.id || matched.id || defaultDetail.id,
      title,
      slug: attrs.slug || cleanSlug,
      shortDescription:
        attrs.short_description || defaultDetail.shortDescription,
      ctaBtnText: attrs.cta_btn_text || defaultDetail.ctaBtnText || "Konsultasi Sekarang",
      heroImage: heroImageUrl,
      heroImageAlt,
      section2Description:
        attrs.section_2_description || defaultDetail.section2Description,
      section2Image: section2ImageUrl,
      section2ImageAlt,
      section3Text: attrs.section_3_text || defaultDetail.section3Text,
      section3Image: section3ImageUrl,
      section3ImageAlt,
      workflows,
      requirements,
      portfolios,
      aboutTitle: attrs.about_title || defaultDetail.aboutTitle,
      aboutText: defaultDetail.aboutText,
      scopeTitle: attrs.scope_title || defaultDetail.scopeTitle,
      scopes: defaultDetail.scopes,
      benefits: defaultDetail.benefits,
      gallery: defaultDetail.gallery,
      seo,
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
    slug: "jasa-perencanaan",
    description:
      "Perencanaan teknis dan penyusunan desain yang matang, terukur, dan sesuai standar teknis yang berlaku.",
    image: "/images/perencanaan.jpg",
    alt: "Tim teknik CV. AN NASR KONSULTAN menyusun gambar rencana bangunan di kantor",
    href: "/layanan/jasa-perencanaan",
    tags: [
      "Perencanaan Bangunan Gedung",
      "Perencanaan Jalan",
      "Perencanaan Jembatan",
    ],
  },
  {
    id: 2,
    title: "Jasa Pengawasan",
    slug: "jasa-pengawasan",
    description:
      "Pengendalian mutu, biaya, dan waktu pelaksanaan pekerjaan melalui pengawasan lapangan yang disiplin.",
    image: "/images/pengawasan.jpg",
    alt: "Pengawas lapangan memeriksa progres pekerjaan konstruksi dengan alat ukur",
    href: "/layanan/jasa-pengawasan",
    tags: [
      "Pengawasan Bangunan Gedung",
      "Pengawasan Jalan",
      "Pengawasan Jembatan",
    ],
  },
  {
    id: 3,
    title: "Jasa Perizinan",
    slug: "jasa-perizinan",
    description:
      "Pendampingan penuh pengurusan dokumen perizinan bangunan agar proyek Anda legal dan siap difungsikan.",
    image: "/images/perizinan.jpg",
    alt: "Pendampingan pengurusan dokumen perizinan bangunan PBG dan SLF",
    href: "/layanan/jasa-perizinan",
    tags: [
      "Persetujuan Bangunan Gedung (PBG)",
      "Sertifikat Laik Fungsi (SLF)",
    ],
  },
  {
    id: 4,
    title: "Jasa Konstruksi",
    slug: "jasa-konstruksi",
    description:
      "Pelaksanaan pekerjaan konstruksi bangunan dan infrastruktur dengan metode kerja yang aman dan efisien.",
    image: "/images/konstruksi.jpg",
    alt: "Pekerja konstruksi membangun struktur bangunan dua lantai",
    href: "/layanan/jasa-konstruksi",
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

  // Resolve href directly using API slug
  let href = `/layanan/${slug}`;
  if (slug === "jasa-pelayanan") href = "/layanan/jasa-pengawasan";

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

