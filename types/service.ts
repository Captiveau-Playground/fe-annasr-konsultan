import { HeroSeoData, StrapiImage, StrapiSeoItem } from "./hero";

export interface StrapiWorkflowItem {
  id: number | string;
  documentId?: string;
  title: string;
}

export interface StrapiRequirementItem {
  id: number | string;
  documentId?: string;
  title: string;
  description: string;
}

export interface StrapiPortfolioItem {
  id: number | string;
  documentId?: string;
  title: string;
  address?: string;
  location?: string;
  category?: string;
  image?: StrapiImage | StrapiImage[];
  portofolio_category_settings?: { id: number | string; name: string }[];
  service_settings?: any[];
  [key: string]: unknown;
}

export interface StrapiServiceItem {
  id: number | string;
  documentId?: string;
  title?: string;
  slug?: string;
  short_description?: string;
  cta_btn_text?: string;
  section_2_description?: string;
  section_3_text?: string;
  hero_image?: StrapiImage;
  section_2_image?: StrapiImage;
  section_3_image?: StrapiImage;
  workflow_service_settings?: StrapiWorkflowItem[];
  requirment_service_settings?: StrapiRequirementItem[];
  portofolio_settings?: StrapiPortfolioItem[];
  portfolio_settings?: StrapiPortfolioItem[];
  about_title?: string;
  about_text?: string;
  benefilt_text_list?: string | null;
  benefit_text_list?: string | null;
  scope_title?: string;
  scope_list_text?: string | null;
  gallery?: StrapiImage[];
  seo?: StrapiSeoItem[] | StrapiSeoItem;
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

export interface ServiceWorkflowItem {
  id: number | string;
  title: string;
  stepNumber: string;
}

export interface ServiceRequirementItem {
  id: number | string;
  title: string;
  description: string;
}

export interface ServicePortfolioItem {
  id: number | string;
  title: string;
  location: string;
  category: string;
  image: string;
  fallbackImage?: string;
}

export interface ServiceDetailData {
  id: number | string;
  title: string;
  slug: string;
  shortDescription: string;
  ctaBtnText?: string;
  heroImage: string;
  heroImageAlt: string;
  section2Description?: string;
  section2Image?: string;
  section2ImageAlt?: string;
  section3Text?: string;
  section3Image?: string;
  section3ImageAlt?: string;
  workflows?: ServiceWorkflowItem[];
  requirements?: ServiceRequirementItem[];
  portfolios?: ServicePortfolioItem[];
  aboutTitle?: string;
  aboutText?: string[];
  scopeTitle?: string;
  scopes?: string[];
  benefits?: string[];
  gallery?: { url: string; alt: string }[];
  seo?: HeroSeoData;
}


