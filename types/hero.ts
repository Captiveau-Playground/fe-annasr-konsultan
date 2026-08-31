export interface HeroSeoData {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  metaImageUrl?: string;
}

export interface HeroSectionData {
  title?: string;
  titleHighlight?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  backgroundImageUrl?: string;
  seo?: HeroSeoData;
  serviceTagline?: string;
  portfolioTagline?: string;
  portfolioCtaBtnText?: string;
  clientTagline?: string;
  locationTagline?: string;
  faqTagline?: string;
  faqDescription?: string;
  faqCtaBtnText?: string;
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

export interface StrapiSeoItem {
  id?: number | string;
  metaTile?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  title?: string;
  description?: string;
  metaImage?: StrapiImage;
  [key: string]: unknown;
}

export interface StrapiHeroItem {
  id: number | string;
  documentId?: string;
  // Field names matching Strapi API output
  hero_tagline?: string;
  hero_description?: string;
  hero_contact_cta_text?: string;
  hero_service_cta_text?: string;
  service_tagline?: string;
  portfolio_tagline?: string;
  portfolio_cta_btn_text?: string;
  client_tagline?: string;
  location_tagline?: string;
  fag_tagline?: string;
  faq_tagline?: string;
  fag_description?: string;
  faq_description?: string;
  faq_cta_btn_text?: string;
  hero_bg_image?: StrapiImage;
  seo?: StrapiSeoItem[] | StrapiSeoItem;
  
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

