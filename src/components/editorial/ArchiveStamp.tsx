import Image from "next/image";
import { cn } from "@/lib/cn";

export interface ArchiveStampProps {
  variant?: "seal" | "postmark" | "ticket" | "label";
  text?: string;
  serial?: string;
  className?: string;
}

export function ArchiveStamp({
  variant = "seal",
  text = "ĐÔNG PHÁP",
  serial = "DA-2026",
  className,
}: ArchiveStampProps) {
  if (variant === "seal") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "inline-flex flex-col items-center justify-center p-2 text-accent-red select-none",
          className
        )}
      >
        <Image
          src="/icons/indochina-seal-meander.svg"
          alt="Indochina Seal"
          width={48}
          height={48}
          className="opacity-85 mix-blend-multiply drop-shadow-sm"
        />
        <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-accent-red-dark">
          {text}
        </span>
      </div>
    );
  }

  if (variant === "postmark") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "inline-flex h-16 w-16 flex-col items-center justify-center rounded-full border-2 border-dashed border-accent-red text-center font-mono text-[9px] uppercase tracking-widest text-accent-red opacity-80 select-none",
          className
        )}
      >
        <span className="font-bold">HA-NOI</span>
        <span className="text-[8px]">28.08.26</span>
        <span>TONKIN</span>
      </div>
    );
  }

  if (variant === "ticket") {
    return (
      <div
        className={cn(
          "inline-flex items-center gap-3 border border-rule bg-paper-warm px-3 py-1.5 font-mono text-xs text-ink",
          className
        )}
      >
        <span className="border-r border-rule-light pr-2 font-bold uppercase text-accent-red">
          HỒ SƠ
        </span>
        <span className="tracking-wider text-ink-faded">SỐ: {serial}</span>
      </div>
    );
  }

  return (
    <span
      className={cn(
        "inline-block border border-rule-medium bg-paper-warm px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink",
        className
      )}
    >
      {text}
    </span>
  );
}
