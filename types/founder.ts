import { StrapiImage } from "./hero";

export interface FounderAttachment {
  url: string;
  alt?: string;
}

export interface FounderSectionData {
  name?: string;
  position?: string;
  description?: string;
  quote?: string;
  photoUrl?: string;
  photoAlt?: string;
  attachments?: FounderAttachment[];
}

export interface StrapiFounderItem {
  id: number | string;
  documentId?: string;
  name?: string;
  position?: string;
  description?: string;
  quote?: string;
  photo?: StrapiImage;
  attachments?: StrapiImage[];
  attributes?: Record<string, any>;
  [key: string]: unknown;
}
