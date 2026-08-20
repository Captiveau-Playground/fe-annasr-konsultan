export interface HeroSectionData {
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  backgroundImageUrl?: string;
}

export interface StrapiImage {
  id?: number | string;
  url?: string;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
  };
  data?: {
    attributes?: {
      url: string;
    };
  };
}

export interface StrapiHeroItem {
  id: number | string;
  documentId?: string;
  // Field names matching Strapi API output
  hero_tagline?: string;
  hero_description?: string;
  hero_contact_cta_text?: string;
  hero_service_cta_text?: string;
  hero_bg_image?: StrapiImage;
  
  // Alternative / legacy field names
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  heroBackground?: StrapiImage;
  backgroundImage?: StrapiImage;

  attributes?: Record<string, any>;
  [key: string]: unknown;
}

export interface StrapiResponse<T> {
  data: T;
  meta?: unknown;
}
