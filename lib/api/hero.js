export const STRAPI_BASE_URL = process.env.STRAPI_API_URL || process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";
/**
 * Builds the Strapi Query String for home-pages endpoint
 * Default populate targeting only HeroSection relations: hero_bg_image
 */
export function getHeroQueryString(populate = "hero_bg_image,seo") {
    const params = new URLSearchParams();
    if (populate) {
        params.append("populate", populate);
    }
    return params.toString();
}
/**
 * Normalizes image URL from Strapi media response
 */
export function getStrapiMediaUrl(media) {
    var _a, _b, _c, _d, _e, _f, _g;
    if (!media)
        return undefined;
    const url = (media === null || media === void 0 ? void 0 : media.url) ||
        ((_b = (_a = media === null || media === void 0 ? void 0 : media.data) === null || _a === void 0 ? void 0 : _a.attributes) === null || _b === void 0 ? void 0 : _b.url) ||
        ((_e = (_d = (_c = media === null || media === void 0 ? void 0 : media.data) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.attributes) === null || _e === void 0 ? void 0 : _e.url) ||
        ((_g = (_f = media === null || media === void 0 ? void 0 : media.formats) === null || _f === void 0 ? void 0 : _f.large) === null || _g === void 0 ? void 0 : _g.url);
    if (!url)
        return undefined;
    if (url.startsWith("http://") || url.startsWith("https://")) {
        return url;
    }
    return `${STRAPI_BASE_URL}${url}`;
}
/**
 * Normalizes raw Strapi response into clean HeroSectionData
 */
export function normalizeHeroData(rawItem) {
    if (!rawItem)
        return {};
    const attrs = (rawItem.attributes || rawItem);
    // Extract tagline / title
    const fullTagline = attrs.hero_tagline || attrs.title || "CV. An Nasr Konsultan";
    let title = "CV. An Nasr";
    let titleHighlight = "Konsultan";
    if (attrs.title && attrs.titleHighlight) {
        title = attrs.title;
        titleHighlight = attrs.titleHighlight;
    }
    else if (fullTagline) {
        const highlightWord = "Konsultan";
        if (fullTagline.endsWith(highlightWord)) {
            title = fullTagline.slice(0, fullTagline.lastIndexOf(highlightWord)).trim();
            titleHighlight = highlightWord;
        }
        else {
            title = fullTagline;
            titleHighlight = "";
        }
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
        title,
        titleHighlight,
        description: attrs.hero_description || attrs.description,
        primaryCtaText: attrs.hero_contact_cta_text || attrs.primaryCtaText || "Konsultasi Sekarang",
        primaryCtaUrl: attrs.primaryCtaUrl || "/kontak",
        secondaryCtaText: attrs.hero_service_cta_text || attrs.secondaryCtaText || "Lihat Layanan",
        secondaryCtaUrl: attrs.secondaryCtaUrl || "/layanan",
        backgroundImageUrl: getStrapiMediaUrl(attrs.hero_bg_image) ||
            getStrapiMediaUrl(attrs.heroBackground) ||
            getStrapiMediaUrl(attrs.backgroundImage),
        seo,
    };
}
/**
 * Server-Side Fetcher for Hero Section data
 * Endpoint: http://localhost:1337/api/home-pages?populate=hero_bg_image,seo
 */
export async function fetchHeroSectionData() {
    const queryString = getHeroQueryString("hero_bg_image,seo");
    const endpoint = `${STRAPI_BASE_URL}/api/home-pages?${queryString}`;
    const headers = {
        "Content-Type": "application/json",
    };
    const token = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }
    const res = await fetch(endpoint, {
        headers,
        cache: "no-store", // SSR: Fetch fresh data on each server request
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch Hero Section data (${res.status}): ${res.statusText}`);
    }
    const json = await res.json();
    let firstItem;
    if (Array.isArray(json.data)) {
        firstItem = json.data[0];
    }
    else if (json.data) {
        firstItem = json.data;
    }
    return normalizeHeroData(firstItem);
}
