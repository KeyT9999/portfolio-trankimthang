export type PerformanceTier = "high" | "medium" | "low";

export type ViewportOrientation = "portrait" | "landscape";

export interface SiteMetadata {
  title: string;
  description: string;
  author: string;
  url: string;
  locale: string;
}
