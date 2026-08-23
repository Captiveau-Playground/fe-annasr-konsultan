export interface ProcessHeaderData {
  badge?: string;
  tagline?: string;
  description?: string;
}

export interface ProcessItemData {
  step: string;
  title: string;
  desc: string;
}

export interface ProcessSectionData {
  header?: ProcessHeaderData;
  items?: ProcessItemData[];
}
