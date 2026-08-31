export interface TeamMember {
  id: number | string;
  documentId?: string;
  name: string;
  position: string;
  photoUrl?: string;
  photoAlt?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

export interface TeamSectionProps {
  tagline?: string;
  members?: TeamMember[];
}
