import { StrapiImage } from "./hero";

export interface FounderSectionData {
  name?: string;
  position?: string;
  description?: string;
  quote?: string;
  photoUrl?: string;
  photoAlt?: string;
}

export interface StrapiFounderItem {
  id: number | string;
  documentId?: string;
  name?: string;
  position?: string;
  description?: string;
  quote?: string;
  photo?: StrapiImage;
  attributes?: Record<string, any>;
  [key: string]: unknown;
}
