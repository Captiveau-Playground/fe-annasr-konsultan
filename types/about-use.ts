import { HeroSeoData, StrapiSeoItem, StrapiImage } from "./hero";

export interface AboutUseItem {
  id: number | string;
  documentId?: string;
  title?: string;
  description?: string;
  hero_title?: string;
  hero_description?: string;
  card_title?: string;
  card_description?: string;
  about_tagline_1?: string;
  about_tagline_2?: string;
  bg_image?: StrapiImage;
  hero_bg_image?: StrapiImage;
  seo?: StrapiSeoItem[] | StrapiSeoItem;
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
  aboutTagline1?: string;
  aboutTagline2?: string;
  bgImage?: string;
  seo?: HeroSeoData;
}

