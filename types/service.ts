import { StrapiImage } from "./hero";

export interface StrapiServiceItem {
  id: number | string;
  documentId?: string;
  title?: string;
  slug?: string;
  short_description?: string;
  about_title?: string;
  about_text?: string;
  benefilt_text_list?: string | null;
  benefit_text_list?: string | null;
  scope_title?: string;
  scope_list_text?: string | null;
  hero_image?: StrapiImage;
  gallery?: StrapiImage[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  attributes?: Record<string, any>;
  [key: string]: unknown;
}

export interface ServiceCardData {
  id: number | string;
  title: string;
  slug: string;
  description: string;
  image: string;
  alt: string;
  href: string;
  tags: string[];
}
