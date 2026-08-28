import Image from "next/image";
import { Container } from "@/components/ui";
import { profileData } from "@/content";

export function ContactSection() {
  return (
    <section
      id="contact"
      data-contact-section
      className="relative border-b-2 border-rule bg-paper py-14 sm:py-20 lg:py-24 overflow-hidden"
    >
      <Container>
        {/* ==========================================================================
            TRANSITION FROM ABOUT:
            About (HUMAN IDENTITY) → Contact (START A CONVERSATION)
            ========================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light pb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 bg-accent-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red">
              CORRESPONDENCE / 06
            </span>
            <span className="font-mono text-xs text-ink-muted">
              • HỘP THƯ TÒA SOẠN & THƯ TÍN
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span>LT-001</span>
            <span className="text-accent-red">•</span>
            <span>BƯU CỤC ĐÀ NẴNG</span>
          </div>
        </div>

        {/* ==========================================================================
            ASYMMETRIC 12-COLUMN CONTACT COMPOSITION
            Left 8 Cols: Strong Modern Callout, Email CTA & Metadata
            Right 4 Cols: Single Postal Stamp Device & Archival Frame
            ========================================================================== */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* ========================================================================
              LEFT 8 COLUMNS: PRIMARY CONTACT STATEMENT & EMAIL CTA
              ======================================================================== */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
                KẾT NỐI & TRAO ĐỔI CHUYÊN MÔN
              </span>
              <h2 className="mt-1 font-[family-name:var(--font-sans-display)] text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-ink leading-[0.9]">
                LET&apos;S TALK.
              </h2>
              <p className="mt-4 font-body text-sm sm:text-base leading-relaxed text-ink-soft max-w-xl">
                Mọi trao đổi về chuyên môn kỹ thuật backend, cơ hội thực tập nghề nghiệp
                hoặc đề xuất hợp tác phát triển hệ thống, vui lòng gửi thư điện tử trực tiếp.
              </p>
            </div>

            {/* Primary Action: Direct Email Box */}
            <div className="border-2 border-rule bg-paper-warm p-5 sm:p-7 shadow-lg space-y-3">
              <div className="flex items-center justify-between border-b border-rule-light pb-2 text-[11px] font-mono text-ink-muted">
                <span className="font-bold uppercase text-accent-red">HỘP THƯ CHÍNH THỨC</span>
                <span>MAILTO DIRECT</span>
              </div>

              <div className="pt-1">
                <a
                  href={`mailto:${profileData.email}`}
                  className="group inline-flex flex-wrap items-center gap-2 font-[family-name:var(--font-sans-display)] text-xl sm:text-3xl lg:text-4xl font-black text-ink transition-colors hover:text-accent-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-red break-all"
                  aria-label={`Gửi thư điện tử tới ${profileData.email}`}
                >
                  <span>{profileData.email}</span>
                  <span className="font-mono text-xl sm:text-2xl text-accent-red transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              </div>

              <p className="font-mono text-[11px] text-ink-muted">
                Nhấp trực tiếp để mở trình soạn thư hoặc sao chép địa chỉ hộp thư.
              </p>
            </div>

            {/* Profile Metadata Strip */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-ink-muted pt-1">
              <div>
                <span>ĐỊA BÀN: </span>
                <strong className="text-ink">{profileData.location.public}</strong>
              </div>
              <span>•</span>
              <div>
                <span>CHỮ KÝ SỐ: </span>
                <strong className="text-ink">@{profileData.handle}</strong>
              </div>
              <span>•</span>
              <div>
                <span>VAI TRÒ: </span>
                <strong className="text-ink">{profileData.title}</strong>
              </div>
            </div>
          </div>

          {/* ========================================================================
              RIGHT 4 COLUMNS: SINGLE AUTHENTIC POSTAL STAMP MOTIF
              ======================================================================== */}
          <div className="lg:col-span-4">
            <div
              className="border-2 border-rule bg-paper-warm p-5 sm:p-6 space-y-4 shadow-md"
              aria-labelledby="postal-badge-title"
            >
              <div className="flex items-center justify-between border-b border-rule-light pb-2 text-[10px] font-mono text-ink-muted">
                <span id="postal-badge-title" className="font-bold uppercase text-ink">
                  DẤU BƯU CHÍNH
                </span>
                <span>INDOCIHNE 1931</span>
              </div>

              {/* Single Authentic Stamp Asset */}
              <div className="relative aspect-[3/4] w-28 sm:w-32 mx-auto overflow-hidden border border-rule shadow-inner bg-paper">
                <Image
                  src="/images/generated/dong-phap-stamp-1931-400.webp"
                  alt="Tem Bưu điện Đông Pháp 1931"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-center font-mono text-[11px] space-y-1 text-ink-muted">
                <p className="font-bold text-ink uppercase">BƯU CHÍNH HÀ NỘI — ĐÀ NẴNG</p>
                <p className="text-[10px] text-ink-soft">Bản quyền số hóa tác phẩm</p>
              </div>

              <div className="border-t border-rule-light pt-2 text-center font-mono text-[10px] font-bold text-accent-red tracking-widest">
                [ KHẢO CHỨNG BƯU CỤC ]
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
