import { FEATURED_ARTICLE, ARTICLES_LIST } from "@/lib/constant";

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
}

export interface ArticlePageData {
  featuredArticle: ArticleItem;
  articles: ArticleItem[];
}

export async function fetchArticleData(): Promise<ArticlePageData> {
  return {
    featuredArticle: FEATURED_ARTICLE,
    articles: ARTICLES_LIST,
  };
}

export async function fetchArticleBySlug(slug: string): Promise<ArticleItem> {
  if (slug === FEATURED_ARTICLE.slug) {
    return FEATURED_ARTICLE;
  }
  const found = ARTICLES_LIST.find((a) => a.slug === slug);
  if (found) {
    return found;
  }
  // Default to featured article if slug is not matched
  return FEATURED_ARTICLE;
}

export async function fetchRelatedArticles(currentSlug: string): Promise<ArticleItem[]> {
  const all = [FEATURED_ARTICLE, ...ARTICLES_LIST];
  const filtered = all.filter((a) => a.slug !== currentSlug);
  return filtered.slice(0, 3);
}
