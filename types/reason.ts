export interface ReasonItem {
  id: number | string;
  documentId?: string;
  title: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface ReasonSectionProps {
  tagline?: string;
  reasons?: ReasonItem[];
}
