import { Container } from "@/components/ui";
import { HeroPortrait } from "./HeroPortrait";
import { HeroDisplayType } from "./HeroDisplayType";
import { HeroIdentity } from "./HeroIdentity";

export function CoverSection() {
  return (
    <section
      id="cover"
      data-hero-section
      className="relative min-h-[90svh] lg:min-h-[96svh] flex flex-col justify-between border-b-2 border-rule bg-paper pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 overflow-hidden"
    >
      <Container className="relative flex flex-col flex-1 justify-between h-full">
        {/* ==========================================================================
            HERO CENTERPIECE: 75% Modern Creative Portfolio × 25% Old Hanoi DNA
            - Full height poster aesthetic
            - Modern Grotesk oversized typography (BACKEND / DEVELOPER)
            - Atmospheric oxblood / cinnabar darkroom color field
            - Dominant waist-up portrait overlapping END portion of BACKEND
            - Left identity overlay with Old Hanoi serif & modern sans contrast
            ========================================================================== */}
        <div className="relative flex-1 flex items-end my-auto py-2 sm:py-4 lg:py-6">
          {/* Layer 1 & 2: Atmospheric Red Field + Modern Sans Typography */}
          <HeroDisplayType />

          {/* Layer 3 & 4: Asymmetrical Grid (side-by-side on md and lg) */}
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 items-end gap-5 sm:gap-6 lg:gap-8">
            {/* Left Columns (5 on md/lg): Identity & Essential Metadata */}
            <div className="md:col-span-5 lg:col-span-5 md:pb-4 lg:pb-6 order-1">
              <HeroIdentity />
            </div>

            {/* Center-Right Columns (7 on md/lg): Dominant Waist-Up Portrait */}
            <div className="flex items-end justify-center md:justify-center lg:justify-center md:col-span-7 lg:col-span-7 order-2">
              <HeroPortrait />
            </div>
          </div>
        </div>

        {/* Bottom Editorial Hallmark Line */}
        <div className="flex items-center justify-between border-t border-rule-light pt-2 z-20 font-mono text-[10px] sm:text-[11px] text-ink-muted">
          <span>TRẦN KIM THẮNG • PORTFOLIO EDITION</span>
          <span className="hidden sm:inline-block font-body italic text-ink-soft">
            “Kỹ nghệ phần mềm & Mỹ thuật xuất bản số”
          </span>
          <span>TRANG BÌA</span>
        </div>
      </Container>
    </section>
  );
}
