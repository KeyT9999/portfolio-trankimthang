import { cn } from "@/lib/cn";
import { profileData } from "@/content";

export interface HeroIdentityProps {
  className?: string;
}

export function HeroIdentity({ className }: HeroIdentityProps) {
  return (
    <div
      data-hero-identity
      className={cn("flex flex-col justify-end space-y-2.5 sm:space-y-4 lg:space-y-5 z-20", className)}
    >
      {/* Editorial Micro-meta line */}
      <div className="flex items-center gap-2">
        <span className="inline-block h-2 w-2 bg-accent-red" />
        <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-accent-red">
          SỐ ĐẶC BIỆT / 2026 • HN / DN
        </span>
      </div>

      {/* Semantic H1 (Old Hanoi Serif) & Modern Sans Role */}
      <div>
        <h1 className="font-display text-3xl font-black uppercase tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
          {profileData.name}
        </h1>
        <p className="mt-0.5 sm:mt-1 font-[family-name:var(--font-sans-display)] text-xs sm:text-base lg:text-lg font-bold uppercase tracking-widest text-ink-soft">
          BACKEND DEVELOPER
        </p>
      </div>

      {/* Technical Stack Tags */}
      <div>
        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] sm:text-xs font-semibold text-ink">
          {profileData.technicalFocus.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="border border-rule bg-paper-warm px-2 py-0.5 sm:px-2.5 sm:py-1 uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Academic Context & Location */}
      <div className="border-t border-rule-light pt-2 sm:pt-3 font-mono text-[10px] sm:text-xs text-ink-muted space-y-0.5">
        <p className="text-ink-soft font-medium">
          SOFTWARE ENGINEERING • FPT UNIVERSITY
        </p>
        <p>ĐÀ NẴNG · VIỆT NAM</p>
      </div>

      {/* Scroll indicator */}
      <div className="pt-1">
        <a
          href="#newspaper"
          className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-accent-red hover:underline"
        >
          <span>CUỘN XUỐNG ĐỌC BÁO</span>
          <span className="text-sm animate-bounce">↓</span>
        </a>
      </div>
    </div>
  );
}
