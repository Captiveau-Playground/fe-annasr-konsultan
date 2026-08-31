export interface FaqItem {
  id: number | string;
  documentId?: string;
  question: string;
  answer: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface FaqSectionProps {
  tagline?: string;
  description?: string;
  ctaBtnText?: string;
  faqs?: FaqItem[];
}
