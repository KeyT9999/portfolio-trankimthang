import Image from "next/image";
import { cn } from "@/lib/cn";

export interface HeroPortraitProps {
  className?: string;
  priority?: boolean;
}

export function HeroPortrait({ className, priority = true }: HeroPortraitProps) {
  return (
    <div
      data-hero-portrait
      className={cn(
        "relative flex items-end justify-center w-full max-w-[320px] sm:max-w-[440px] md:max-w-[560px] lg:max-w-[720px] xl:max-w-[820px] mx-auto z-10",
        "transform md:-translate-y-8 lg:-translate-y-14 xl:-translate-y-18 md:-translate-x-2 lg:-translate-x-6 xl:-translate-x-10",
        className
      )}
    >
      <div
        className="relative w-full aspect-[853/1280] max-h-[50svh] sm:max-h-[64svh] md:max-h-[74svh] lg:max-h-[86svh] -mb-1"
        style={{
          maskImage: "linear-gradient(to bottom, black 84%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 84%, transparent 100%)",
        }}
      >
        <Image
          src="/images/profile/tran-kim-thang-cutout.webp"
          alt="Trần Kim Thắng"
          fill
          priority={priority}
          sizes="(max-width: 640px) 320px, (max-width: 1024px) 560px, (max-width: 1440px) 720px, 820px"
          className="object-contain object-bottom drop-shadow-[0_24px_50px_rgba(24,23,21,0.32)]"
        />
      </div>
    </div>
  );
}
