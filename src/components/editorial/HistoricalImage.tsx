import Image from "next/image";
import { cn } from "@/lib/cn";

export interface HistoricalImageProps {
  src: string;
  alt: string;
  caption?: string;
  source?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "auto";
}

export function HistoricalImage({
  src,
  alt,
  caption,
  source,
  width = 800,
  height = 500,
  priority = false,
  className,
  aspectRatio = "auto",
}: HistoricalImageProps) {
  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    auto: "",
  }[aspectRatio];

  return (
    <figure className={cn("my-4 space-y-2", className)}>
      <div
        className={cn(
          "newsprint-frame relative overflow-hidden bg-paper-aged",
          aspectClass
        )}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="newsprint-image h-auto w-full object-cover"
        />
      </div>
      {(caption || source) && (
        <figcaption className="editorial-caption flex flex-wrap items-baseline justify-between gap-2 border-b border-rule-light pb-1 font-body text-xs text-ink-faded">
          {caption && <span className="italic">{caption}</span>}
          {source && (
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
              [Tư liệu: {source}]
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
