export interface AboutUseItem {
  id: number | string;
  documentId?: string;
  title?: string;
  description?: string;
  hero_title?: string;
  hero_description?: string;
  card_title?: string;
  card_description?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  attributes?: Record<string, any>;
  [key: string]: unknown;
}

export interface TentangHeroData {
  badge?: string;
  title?: string;
  description?: string;
}
