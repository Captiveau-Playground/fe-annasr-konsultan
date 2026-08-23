export interface PortfolioPageItem {
  id: number;
  documentId?: string;
  title?: string;
  tagline?: string;
  description?: string;
  hero_title?: string;
  hero_tagline?: string;
  hero_description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  attributes?: PortfolioPageItem;
}

export interface PortfolioHeroData {
  badge?: string;
  title?: string;
  tagline?: string;
  description?: string;
}
