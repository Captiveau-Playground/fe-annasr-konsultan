import { HeroSeoData, StrapiSeoItem } from "./hero";

export interface ServicePageItem {
  id: number | string;
  documentId?: string;
  hero_title?: string;
  hero_tagline?: string;
  hero_description?: string;
  title?: string;
  tagline?: string;
  description?: string;
  seo?: StrapiSeoItem[] | StrapiSeoItem;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  attributes?: Record<string, any>;
  [key: string]: unknown;
}

export interface LayananHeroData {
  badge?: string;
  title?: string;
  description?: string;
  sectionTitle?: string;
  sectionTagline?: string;
  sectionDescription?: string;
  seo?: HeroSeoData;
}

