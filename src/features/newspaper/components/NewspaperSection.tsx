import Link from "next/link";
import { Container } from "@/components/ui";
import { getProjectBySlug } from "@/content";
import { FeaturedProjectVisual } from "./FeaturedProjectVisual";

export function NewspaperSection() {
  const project = getProjectBySlug("restaurant-booking-platform");

  if (!project) return null;

  return (
    <section
      id="newspaper"
      data-featured-project
      className="relative border-b-2 border-rule bg-paper py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        {/* ==========================================================================
            TRANSITION FROM HERO:
            Hero (WHO I AM) → Featured Project (WHAT I CAN BUILD)
            ========================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light pb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 bg-accent-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red">
              SELECTED WORK / 01
            </span>
            <span className="font-mono text-xs text-ink-muted">
              • HỒ SƠ CHUYÊN ÁN TIÊU BIỂU
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span>DA-001</span>
            <span className="text-accent-red">•</span>
            <span>08.2025 — 11.2025</span>
          </div>
        </div>

        {/* ==========================================================================
            LARGE ARCHITECTURAL TITLE (Modern Grotesk Display)
            ========================================================================== */}
        <div className="mt-6 sm:mt-8">
          <div className="max-w-4xl">
            <h2 className="font-[family-name:var(--font-sans-display)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-ink leading-[0.95]">
              {project.title}
            </h2>
            <p className="mt-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-soft">
              {project.role} • Java · Spring Boot 3.2 · PostgreSQL
            </p>
          </div>
        </div>

        {/* ==========================================================================
            DOMINANT PROJECT VISUAL AREA (50-65% Visible Section Mass)
            Clean technical software interface & live architecture showcase
            ========================================================================== */}
        <div className="mt-8 sm:mt-10">
          <FeaturedProjectVisual />
        </div>

        {/* ==========================================================================
            3 KEY TECHNICAL EVIDENCE HIGHLIGHTS (Spacious Contemporary Layout)
            ========================================================================== */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 border-t border-rule-light pt-8">
          {/* Fact 1: RESTful Architecture & RBAC */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-accent-red">01</span>
              <h3 className="font-[family-name:var(--font-sans-display)] text-base font-bold uppercase text-ink">
                Kiến trúc RESTful & Phân quyền
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink-soft">
              Thiết kế chuẩn phân tầng Controller - Service - Repository trên nền Java Spring Boot 3.2 và PostgreSQL.
              Bảo vệ đa cấp với Spring Security & OAuth2 (User, Customer, Admin).
            </p>
          </div>

          {/* Fact 2: PayOS Payment & Realtime WebSocket */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-accent-red">02</span>
              <h3 className="font-[family-name:var(--font-sans-display)] text-base font-bold uppercase text-ink">
                Thanh toán PayOS & Realtime
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink-soft">
              Xử lý webhook thanh toán trực tuyến bất đồng bộ qua PayOS API với xác thực chữ ký bảo mật.
              Kênh trao đổi tin nhắn tức thời thời gian thực qua giao thức WebSocket.
            </p>
          </div>

          {/* Fact 3: AI Recommendation & Unit Testing */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-accent-red">03</span>
              <h3 className="font-[family-name:var(--font-sans-display)] text-base font-bold uppercase text-ink">
                AI Gợi ý & Kiểm thử 80%+
              </h3>
            </div>
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink-soft">
              Tích hợp OpenAI API gợi ý món ăn thông minh theo khẩu vị khách hàng.
              Bộ kiểm thử đơn vị toàn diện với JUnit 5 & Mockito đạt độ bao phủ trên 80% với JaCoCo.
            </p>
          </div>
        </div>

        {/* ==========================================================================
            DIRECT CASE STUDY ACTION LINK
            ========================================================================== */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-4">
          <span className="font-mono text-xs text-ink-muted">
            HỒ SƠ KỸ THUẬT ĐẦY ĐỦ • 12 ĐẦU MỤC TÍNH NĂNG
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 border-2 border-rule bg-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-paper transition-transform hover:-translate-y-0.5"
          >
            <span>Khảo sát toàn văn chuyên án DA-001</span>
            <span className="text-accent-red">→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
