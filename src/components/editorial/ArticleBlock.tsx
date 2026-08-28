import { cn } from "@/lib/cn";

export interface ArticleBlockProps {
  headline?: React.ReactNode;
  byline?: string;
  category?: string;
  lead?: string;
  children: React.ReactNode;
  hasDropCap?: boolean;
  className?: string;
}

export function ArticleBlock({
  headline,
  byline = "TRẦN KIM THẮNG",
  category,
  lead,
  children,
  hasDropCap = false,
  className,
}: ArticleBlockProps) {
  return (
    <article className={cn("space-y-4 font-body", className)}>
      {headline && <div className="mb-3">{headline}</div>}
      {(byline || category) && (
        <div className="flex items-center justify-between border-t border-b border-rule-light py-1 font-mono text-[11px] uppercase tracking-wider text-ink-faded">
          {category && <span className="font-semibold text-accent-red">{category}</span>}
          {byline && <span>BÀI: {byline}</span>}
        </div>
      )}
      {lead && (
        <p className="font-body text-base font-medium leading-relaxed text-ink italic">
          {lead}
        </p>
      )}
      <div
        className={cn(
          "space-y-3 font-body text-sm leading-relaxed text-ink-soft md:text-[15px]",
          hasDropCap && "drop-cap"
        )}
      >
        {children}
      </div>
    </article>
  );
}
