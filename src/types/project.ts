export interface ProjectCategory {
  id: string;
  name: string;
  slug: string;
}

export interface ProjectMetadata {
  slug: string;
  title: string;
  edition: string;
  headline: string;
  date: string;
  summary: string;
  tags: string[];
  role: string;
  client?: string;
  coverImage?: string;
  featured: boolean;
  order: number;
}

export interface Project extends ProjectMetadata {
  content?: string;
}
