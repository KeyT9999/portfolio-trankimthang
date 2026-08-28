import Image from "next/image";
import { Container } from "@/components/ui";
import { profileData } from "@/content";

export function AboutSection() {
  return (
    <section
      id="about"
      data-about-section
      className="relative border-b-2 border-rule bg-paper py-14 sm:py-20 lg:py-24 overflow-hidden"
    >
      <Container>
        {/* ==========================================================================
            TRANSITION FROM CREDENTIALS:
            Credentials (FORMAL EVIDENCE) → About (THE PERSON BEHIND THE EVIDENCE)
            ========================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light pb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 bg-accent-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red">
              PROFILE / 05
            </span>
            <span className="font-mono text-xs text-ink-muted">
              • HỒ SƠ TÁC GIẢ
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span>HS-001</span>
            <span className="text-accent-red">•</span>
            <span>{profileData.location.public}</span>
          </div>
        </div>

        {/* ==========================================================================
            ASYMMETRIC 12-COLUMN PROFILE COMPOSITION (GENEROUS NEGATIVE SPACE)
            Left 5 Cols: Framed Editorial Portrait + Archival Cartographic Background
            Right 7 Cols: Name, Identity, Concise Narrative & Technical Summary
            ========================================================================== */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ========================================================================
              LEFT 5 COLUMNS: EDITORIAL PORTRAIT
              ======================================================================== */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Single Subtle Historical Layer: Historical Hanoi Map plan (Watermark) */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 sm:-inset-6 border border-rule-light bg-paper-warm/80 overflow-hidden opacity-90 -z-10 shadow-sm"
              >
                <Image
                  src="/images/generated/hanoi-map-plan-1890-800.webp"
                  alt=""
                  fill
                  className="object-cover opacity-15 mix-blend-multiply"
                />
              </div>

              {/* Framed Portrait Box */}
              <div className="relative border-2 border-rule bg-paper p-3 sm:p-4 shadow-md">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-warm flex items-end justify-center">
                  <Image
                    src="/images/profile/tran-kim-thang-cutout.webp"
                    alt="Chân dung Trần Kim Thắng - Backend Developer Intern"
                    width={480}
                    height={600}
                    className="h-full w-auto object-contain object-bottom filter contrast-[1.03] brightness-[0.98]"
                  />
                  {/* Subtle paper vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-paper/60 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Frame Meta */}
                <div className="mt-3 flex items-center justify-between border-t border-rule-light pt-2 font-mono text-[11px] text-ink-muted">
                  <span className="font-bold text-accent-red">HS-001</span>
                  <span>@{profileData.handle}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================
              RIGHT 7 COLUMNS: IDENTITY & EDITORIAL NARRATIVE
              ======================================================================== */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
                KỸ SƯ PHÁT TRIỂN BACKEND
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-sans-display)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-ink leading-[0.95]">
                {profileData.name}
              </h2>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-soft">
                <span>{profileData.title}</span>
                <span className="text-accent-red">•</span>
                <span>{profileData.educationStatus}</span>
              </div>
            </div>

            {/* Concise Editorial Narrative (2 Short Paragraphs) */}
            <div className="space-y-3.5 font-body text-sm sm:text-base leading-relaxed text-ink-soft max-w-2xl">
              <p>
                Sinh viên chuyên ngành Kỹ thuật Phần mềm tại Đại học FPT, định hướng chuyên sâu
                về phát triển hệ thống Backend với <strong>Java Spring Boot</strong> và <strong>NodeJS</strong>.
              </p>
              <p>
                Tập trung xây dựng các dịch vụ web RESTful có kiến trúc chuẩn mực, cơ chế bảo mật
                phân quyền nghiêm ngặt và khả năng tích hợp trí tuệ nhân tạo (AI) trong các bài toán thực tế.
              </p>
            </div>

            {/* Technical Identity Summary */}
            <div className="border-t border-rule-light pt-5 space-y-3 max-w-2xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink-muted">
                TÓM LƯỢC TRỌNG TÂM KỸ THUẬT
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="border border-rule-light bg-paper-warm p-3">
                  <span className="text-[10px] font-bold uppercase text-accent-red block">
                    CỐT LÕI (CORE)
                  </span>
                  <span className="mt-1 font-bold text-ink block">
                    Java · Spring Boot 3.2
                  </span>
                </div>

                <div className="border border-rule-light bg-paper-warm p-3">
                  <span className="text-[10px] font-bold uppercase text-ink-muted block">
                    CHỨNG THỰC DỰ ÁN
                  </span>
                  <span className="mt-1 font-bold text-ink block">
                    PostgreSQL · Security · AI
                  </span>
                </div>

                <div className="border border-rule-light bg-paper-warm p-3">
                  <span className="text-[10px] font-bold uppercase text-ink-muted block">
                    ĐỊNH HƯỚNG MỞ RỘNG
                  </span>
                  <span className="mt-1 font-bold text-ink block">
                    NodeJS Ecosystem
                  </span>
                </div>
              </div>
            </div>

            {/* Location & Digital Handle Badge */}
            <div className="pt-1 flex flex-wrap items-center gap-4 font-mono text-xs text-ink-muted">
              <div className="flex items-center gap-1.5">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
                <span>Địa bàn công tác: <strong className="text-ink">{profileData.location.public}</strong></span>
              </div>
              <span>•</span>
              <div>
                <span>Chữ ký số: <strong className="text-ink">@{profileData.handle}</strong></span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
