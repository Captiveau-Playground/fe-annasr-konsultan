import { HeroSeoData, StrapiImage, StrapiSeoItem } from "./hero";

export interface AboutSectionData {
  title?: string;
  tagline?: string;
  description?: string;
  biography?: string;
  vision?: string;
  mission?: string;
  officeAddress?: string;
  domicileAddress?: string;
  phone?: string;
  email?: string;
  operationalHours?: string;
  bornDate?: string;
  imageUrl?: string;
  imageAlt?: string;
  imageCaption?: string;
  seo?: HeroSeoData;
}

export interface StrapiAboutItem {
  id: number | string;
  documentId?: string;
  title?: string;
  tagline?: string;
  description?: string;
  biography?: string;
  vision?: string;
  mission?: string;
  office_address?: string;
  domicile_address?: string;
  operational_hours?: string;
  born_date?: string;
  phone?: string;
  email?: string;
  image?: StrapiImage & {
    alternativeText?: string;
    caption?: string;
  };
  seo?: StrapiSeoItem[] | StrapiSeoItem;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;

  attributes?: Record<string, any>;
  [key: string]: unknown;
}

