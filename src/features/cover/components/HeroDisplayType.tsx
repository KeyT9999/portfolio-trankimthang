import { cn } from "@/lib/cn";

export interface HeroDisplayTypeProps {
  className?: string;
}

export function HeroDisplayType({ className }: HeroDisplayTypeProps) {
  return (
    <div
      aria-hidden="true"
      data-hero-display
      className={cn(
        "pointer-events-none select-none absolute inset-0 flex flex-col justify-between overflow-hidden z-0",
        className
      )}
    >
      {/* ==========================================================================
          LAYER 1: Rich Atmospheric Oxblood / Cinnabar Darkroom Field
          Targeted directly behind the head & upper shoulders.
          ========================================================================== */}
      <div
        className="absolute right-[-5%] sm:right-[5%] lg:right-[8%] top-[2%] sm:top-[6%] h-[340px] w-[340px] sm:h-[500px] sm:w-[500px] lg:h-[680px] lg:w-[680px] rounded-full pointer-events-none opacity-85 mix-blend-multiply"
        style={{
          background:
            "radial-gradient(circle at center, #9e2a1d 0%, #68150a 40%, rgba(104, 21, 10, 0.15) 60%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* ==========================================================================
          LAYER 2: Modern Grotesk Graphic Words (BACKEND & DEVELOPER)
          'BACKEND' spans across with the portrait overlapping the 'END' section.
          ========================================================================== */}
      {/* Top Graphic Word: BACKEND */}
      <div className="w-full text-center lg:text-left lg:pl-6 xl:pl-10 pt-2 sm:pt-4 lg:pt-10 xl:pt-12">
        <span
          className="block font-[family-name:var(--font-sans-display)] font-black uppercase tracking-tight leading-[0.82] text-ink/[0.15] sm:text-ink/[0.18] lg:text-ink/[0.22] select-none text-[clamp(2.4rem,14vw,17.5rem)]"
        >
          BACKEND
        </span>
      </div>

      {/* Bottom Graphic Word: DEVELOPER */}
      <div className="w-full text-center lg:text-right lg:pr-6 xl:pr-10 pb-1 sm:pb-2">
        <span
          className="block font-[family-name:var(--font-sans-display)] font-black uppercase tracking-tight leading-[0.82] text-ink/[0.12] sm:text-ink/[0.15] lg:text-ink/[0.18] select-none text-[clamp(1.9rem,10vw,14rem)]"
        >
          DEVELOPER
        </span>
      </div>
    </div>
  );
}
