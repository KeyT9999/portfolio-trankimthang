import { cn } from "@/lib/cn";

export interface SectionLabelProps {
  label: string;
  pageNumber?: string;
  className?: string;
}

export function SectionLabel({
  label,
  pageNumber,
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b-2 border-rule pb-1 font-mono text-xs uppercase tracking-widest text-ink",
        className
      )}
    >
      <div className="flex items-center gap-2 font-bold">
        <span className="inline-block h-2 w-2 bg-accent-red" />
        <span>{label}</span>
      </div>
      {pageNumber && (
        <span className="text-ink-faded font-normal">
          TRANG {pageNumber}
        </span>
      )}
    </div>
  );
}
