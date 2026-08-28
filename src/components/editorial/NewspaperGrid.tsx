import { cn } from "@/lib/cn";

export interface NewspaperGridProps {
  children: React.ReactNode;
  className?: string;
}

export function NewspaperGrid({ children, className }: NewspaperGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-6 lg:grid-cols-12",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface NewspaperColumnProps {
  span?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  hasBorderRight?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function NewspaperColumn({
  span = 12,
  hasBorderRight = false,
  children,
  className,
}: NewspaperColumnProps) {
  const spanClasses = {
    3: "col-span-1 md:col-span-3 lg:col-span-3",
    4: "col-span-1 md:col-span-3 lg:col-span-4",
    5: "col-span-1 md:col-span-3 lg:col-span-5",
    6: "col-span-1 md:col-span-6 lg:col-span-6",
    7: "col-span-1 md:col-span-3 lg:col-span-7",
    8: "col-span-1 md:col-span-6 lg:col-span-8",
    9: "col-span-1 md:col-span-6 lg:col-span-9",
    12: "col-span-1 md:col-span-6 lg:col-span-12",
  }[span];

  return (
    <div
      className={cn(
        spanClasses,
        hasBorderRight && "rule-column-r md:pr-6",
        className
      )}
    >
      {children}
    </div>
  );
}
