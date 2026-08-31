import { HeroSeoData, StrapiSeoItem } from "./hero";

export interface CareerPageData {
  hero_title?: string;
  hero_tagline?: string;
  hero_description?: string;
  cta_tagline?: string;
  cta_description?: string;
  cta_button_text?: string;
  seo?: HeroSeoData;
}

export interface CareerItemData {
  id?: number;
  title: string;
  description: string;
  location?: string;
  cta_button_text?: string;
}

export type CareerJobItem = CareerItemData;

export interface CareerData {
  page?: CareerPageData;
  jobs?: CareerItemData[];
}
