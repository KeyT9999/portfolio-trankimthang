import { ArchiveStamp } from "@/components/editorial";

export function HeroHighlights() {
  return (
    <div className="flex flex-col justify-between space-y-4 z-20">
      {/* Stat Card 1: Code Coverage */}
      <div className="border border-rule bg-paper p-4 transition-transform hover:-translate-y-0.5">
        <div className="flex items-center justify-between border-b border-rule-light pb-1.5">
          <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
            CHỈ SỐ KIỂM THỬ
          </span>
          <span className="font-mono text-[10px] text-ink-muted">JaCoCo</span>
        </div>
        <div className="mt-2">
          <span className="font-display text-3xl font-black text-ink">80%+</span>
          <p className="mt-0.5 font-body text-xs text-ink-soft">
            Độ bao phủ kiểm thử đơn vị trên các tầng nghiệp vụ dự án.
          </p>
        </div>
      </div>

      {/* Stat Card 2: Competition Finalist */}
      <div className="border border-rule bg-paper p-4 transition-transform hover:-translate-y-0.5">
        <div className="flex items-center justify-between border-b border-rule-light pb-1.5">
          <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
            THÀNH TÍCH HỌC THUẬT
          </span>
          <ArchiveStamp variant="ticket" serial="GN-001" />
        </div>
        <div className="mt-2">
          <span className="font-display text-lg font-black text-ink uppercase">
            FINALIST AI4SE 2025
          </span>
          <p className="mt-0.5 font-body text-xs text-ink-soft">
            Vòng Chung kết cuộc thi Prompt Your Future — Đại học FPT.
          </p>
        </div>
      </div>

      {/* Stat Card 3: Location & Readiness */}
      <div className="border border-rule bg-paper p-4 transition-transform hover:-translate-y-0.5">
        <div className="flex items-center justify-between border-b border-rule-light pb-1.5">
          <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
            ĐỊA BÀN HOẠT ĐỘNG
          </span>
          <span className="font-mono text-[10px] text-ink-muted">2026</span>
        </div>
        <div className="mt-2">
          <span className="font-display text-base font-bold text-ink">
            ĐÀ NẴNG, VIỆT NAM
          </span>
          <p className="mt-0.5 font-body text-xs text-ink-soft">
            Sẵn sàng tiếp nhận chương trình On-the-Job Training (OJT).
          </p>
        </div>
      </div>
    </div>
  );
}
