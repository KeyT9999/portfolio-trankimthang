import { type ElementType } from "react";
import { cn } from "@/lib/cn";

export interface HeadlineProps {
  as?: ElementType;
  kicker?: string;
  subdeck?: string;
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "masthead" | "display-xl" | "display-lg" | "headline";
  className?: string;
}

export function Headline({
  as: Component = "h2",
  kicker,
  subdeck,
  children,
  align = "left",
  size = "headline",
  className,
}: HeadlineProps) {
  const sizeClasses = {
    masthead: "text-masthead font-extrabold tracking-tight",
    "display-xl": "text-display-xl font-bold",
    "display-lg": "text-display-lg font-bold",
    headline: "text-headline font-bold",
  }[size];

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <header className={cn("space-y-1.5", alignClasses, className)}>
      {kicker && <p className="kicker mb-1">{kicker}</p>}
      <Component className={cn("font-display text-ink", sizeClasses)}>
        {children}
      </Component>
      {subdeck && <p className="subdeck mt-1.5">{subdeck}</p>}
    </header>
  );
}
