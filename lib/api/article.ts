import { FEATURED_ARTICLE, ARTICLES_LIST } from "@/lib/constant";
import { getStrapiBaseUrl, getStrapiMediaUrl } from "./hero";

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  authorName?: string;
  authorRole?: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  tags?: string[];
  contentParagraphs?: string[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    metaImageUrl?: string;
  };
}

export interface ArticlePageHeaderData {
  title?: string;
  tagline?: string;
  description?: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string;
    metaImageUrl?: string;
  };
}

export interface ArticlePageData {
  page: ArticlePageHeaderData;
  featuredArticle: ArticleItem;
  articles: ArticleItem[];
}

/**
 * Normalizes a raw Strapi item from /api/article-settings into a clean ArticleItem
 */
export function normalizeStrapiArticle(item: any): ArticleItem {
  if (!item) return FEATURED_ARTICLE;

  const attrs = item.attributes || item;
  const rawThumbnail = attrs.thumbnail || attrs.image;
  const imageUrl = getStrapiMediaUrl(rawThumbnail) || FEATURED_ARTICLE.image;

  // Format content paragraphs from string
  const rawContent = attrs.content || "";
  const contentParagraphs =
    typeof rawContent === "string" && rawContent.trim() !== ""
      ? rawContent
          .split(/\n\s*\n|\n/)
          .map((p: string) => p.trim())
          .filter(Boolean)
      : [];

  // Calculate estimated read time
  const totalWords = rawContent ? rawContent.split(/\s+/).length : 0;
  const readMinutes = Math.max(1, Math.ceil(totalWords / 150));
  const readTime = `${readMinutes} menit baca`;

  // Format publication date
  let formattedDate = attrs.date || "";
  if (!formattedDate && (attrs.publishedAt || attrs.createdAt)) {
    try {
      const d = new Date(attrs.publishedAt || attrs.createdAt);
      formattedDate = d.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    } catch {
      formattedDate = "12 Agustus 2026";
    }
  }

  // Extract Category
  const categoryRaw = attrs.article_category_setting || attrs.category;
  const categoryName =
    typeof categoryRaw === "string"
      ? categoryRaw
      : categoryRaw?.title || categoryRaw?.name || attrs.category_name || "KORPORAT";

  // Extract Tags
  const tags = attrs.tags
    ? Array.isArray(attrs.tags)
      ? attrs.tags
      : [attrs.tags]
    : undefined;

  // Extract SEO
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
    id: String(item.id || item.documentId || attrs.slug),
    category: categoryName.toUpperCase(),
    title: attrs.title || FEATURED_ARTICLE.title,
    excerpt: attrs.description || attrs.excerpt || FEATURED_ARTICLE.excerpt,
    authorName: attrs.author || attrs.authorName || "Dr. Arif Nugroho",
    authorRole: attrs.author_position || attrs.authorRole || "Direktur Operasional",
    date: formattedDate || "12 Agustus 2026",
    readTime: attrs.readTime || readTime,
    slug: attrs.slug || FEATURED_ARTICLE.slug,
    image: imageUrl,
    tags: tags || FEATURED_ARTICLE.tags,
    contentParagraphs:
      contentParagraphs.length > 0 ? contentParagraphs : FEATURED_ARTICLE.contentParagraphs,
    seo,
  };
}

export async function fetchArticleData(): Promise<ArticlePageData> {
  const baseUrl = getStrapiBaseUrl();
  const pageEndpoint = `${baseUrl}/api/article-pages?populate=*`;
  const articlesEndpoint = `${baseUrl}/api/article-settings?populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const rawToken = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";
  const token = rawToken.trim();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const [pageRes, articlesRes] = await Promise.all([
    fetch(pageEndpoint, { headers, cache: "no-store" }).catch(() => null),
    fetch(articlesEndpoint, { headers, cache: "no-store" }).catch(() => null),
  ]);

  let page: ArticlePageHeaderData = {
    title: "ARTIKEL & BERITA",
    tagline: "Informasi Resmi Perusahaan",
    description:
      "Publikasi resmi mengenai kebijakan, kegiatan operasional, serta perkembangan CV An Nasr Konsultan. Pilih salah satu berita untuk membaca isi selengkapnya.",
  };

  if (pageRes && pageRes.ok) {
    try {
      const pageJson = await pageRes.json();
      const rawPage = Array.isArray(pageJson.data) ? pageJson.data[0] : pageJson.data;
      if (rawPage) {
        const attrs = rawPage.attributes || rawPage;
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

        page = {
          title: attrs.title || "ARTIKEL & BERITA",
          tagline: attrs.tagline || "Informasi Resmi Perusahaan",
          description:
            attrs.description ||
            "Publikasi resmi mengenai kebijakan, kegiatan operasional, serta perkembangan CV An Nasr Konsultan. Pilih salah satu berita untuk membaca isi selengkapnya.",
          seo,
        };
      }
    } catch (e) {
      console.error("Error parsing article-pages API data:", e);
    }
  }

  let featuredArticle: ArticleItem = FEATURED_ARTICLE;
  let articles: ArticleItem[] = ARTICLES_LIST;

  if (articlesRes && articlesRes.ok) {
    try {
      const articlesJson = await articlesRes.json();
      if (articlesJson.data && Array.isArray(articlesJson.data) && articlesJson.data.length > 0) {
        const normalized = articlesJson.data.map(normalizeStrapiArticle);
        featuredArticle = normalized[0];
        articles = normalized.length > 1 ? normalized.slice(1) : normalized;
      }
    } catch (e) {
      console.error("Error parsing article-settings API data:", e);
    }
  }

  return {
    page,
    featuredArticle,
    articles,
  };
}

export async function fetchArticleBySlug(slug: string): Promise<ArticleItem> {
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/article-settings?filters[slug][$eq]=${encodeURIComponent(
    slug
  )}&populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const rawToken = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";
  const token = rawToken.trim();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(endpoint, { headers, cache: "no-store" }).catch(() => null);
    if (res && res.ok) {
      const json = await res.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        return normalizeStrapiArticle(json.data[0]);
      }
    }
  } catch (e) {
    console.error("Error fetching article by slug from API:", e);
  }

  // Fallback to local data matching slug
  if (slug === FEATURED_ARTICLE.slug) {
    return FEATURED_ARTICLE;
  }
  const found = ARTICLES_LIST.find((a) => a.slug === slug);
  if (found) {
    return found;
  }
  return FEATURED_ARTICLE;
}

export async function fetchRelatedArticles(currentSlug: string): Promise<ArticleItem[]> {
  const baseUrl = getStrapiBaseUrl();
  const endpoint = `${baseUrl}/api/article-settings?populate=*`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const rawToken = process.env.STRAPI_API_TOKEN || process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || "";
  const token = rawToken.trim();
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const res = await fetch(endpoint, { headers, cache: "no-store" }).catch(() => null);
    if (res && res.ok) {
      const json = await res.json();
      if (json.data && Array.isArray(json.data) && json.data.length > 0) {
        const allNormalized: ArticleItem[] = json.data.map(normalizeStrapiArticle);
        const filtered = allNormalized.filter((a: ArticleItem) => a.slug !== currentSlug);
        if (filtered.length > 0) {
          return filtered.slice(0, 3);
        }
      }
    }
  } catch (e) {
    console.error("Error fetching related articles from API:", e);
  }

  // Fallback
  const all = [FEATURED_ARTICLE, ...ARTICLES_LIST];
  const filtered = all.filter((a) => a.slug !== currentSlug);
  return filtered.slice(0, 3);
}
