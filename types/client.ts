export interface ClientSectionHeaderData {
  title?: string;
  tagline?: string;
  description?: string;
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
