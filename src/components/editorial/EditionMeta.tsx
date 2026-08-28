import { cn } from "@/lib/cn";
import { EditorialRule } from "./EditorialRule";

export interface EditionMetaProps {
  issueNumber?: string;
  date?: string;
  location?: string;
  price?: string;
  extraNotice?: string;
  className?: string;
}

export function EditionMeta({
  issueNumber = "SỐ 001",
  date = "28 THÁNG 08 NĂM 2026",
  location = "HÀ NỘI",
  price = "GIÁ: MỘT CÚ CLICK",
  extraNotice = "NIÊN GIÁM KỸ THUẬT",
  className,
}: EditionMetaProps) {
  return (
    <div className={cn("my-2 w-full font-mono text-xs uppercase tracking-wider", className)}>
      <EditorialRule variant="double" className="my-1" />
      <div className="grid grid-cols-1 items-center justify-between gap-2 py-1 text-center text-ink md:grid-cols-3">
        <div className="text-left font-medium text-ink-faded md:text-left">
          {location} • {extraNotice}
        </div>
        <div className="font-bold tracking-widest text-ink">
          {issueNumber} — {date}
        </div>
        <div className="text-right font-medium text-ink-faded md:text-right">
          {price}
        </div>
      </div>
      <EditorialRule variant="single" className="my-1" />
    </div>
  );
}
