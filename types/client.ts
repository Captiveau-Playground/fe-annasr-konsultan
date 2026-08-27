import { HeroSeoData, StrapiSeoItem } from "./hero";

export interface ClientSectionHeaderData {
  title?: string;
  tagline?: string;
  description?: string;
  seo?: HeroSeoData;
}

export interface ClientItemData {
  label: string;
  name: string;
  type?: string;
}

export interface ClientsSectionData {
  header?: ClientSectionHeaderData;
  clients?: ClientItemData[];
}
