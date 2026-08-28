export interface NewspaperArticle {
  id: string;
  headline: string;
  subheadline?: string;
  leadParagraph: string;
  body: string[];
  columnSpan?: number;
}
