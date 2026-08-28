import Link from "next/link";
import { Container } from "@/components/ui";
import { getProjectBySlug } from "@/content";
import { EbookProjectVisual } from "./EbookProjectVisual";

export function ProjectsSection() {
  const project = getProjectBySlug("ebook-reading-website");

  if (!project) return null;

  return (
    <section
      id="projects"
      data-secondary-project
      className="relative border-b-2 border-rule bg-paper py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        {/* ==========================================================================
            TRANSITION FROM DA-001:
            Primary Evidence (DA-001) → Secondary Evidence (DA-002)
            ========================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light pb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 bg-ink" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink">
              SELECTED PROJECT / 02
            </span>
            <span className="font-mono text-xs text-ink-muted">
              • HỒ SƠ CHUYÊN ÁN THỰC TẾ
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span>DA-002</span>
            <span className="text-ink-muted">•</span>
            <span>05.2025 — 08.2025</span>
          </div>
        </div>

        {/* ==========================================================================
            ASYMMETRIC 12-COLUMN EDITORIAL COMPOSITION (65-75% Weight of DA-001)
            ========================================================================== */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left 5 Columns: Project Title, Role, Summary & CTA */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
                02 / FULL-STACK & AI
              </span>
              <h2 className="mt-1.5 font-[family-name:var(--font-sans-display)] text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-ink leading-[0.95]">
                {project.title}
              </h2>
              <p className="mt-2 font-mono text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-soft">
                {project.role} • 05.2025 — 08.2025
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-ink">
              {project.technologies.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="border border-rule-light bg-paper-warm px-2 py-0.5 uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Concise Summary */}
            <p className="font-body text-xs sm:text-sm leading-relaxed text-ink-soft">
              Hệ thống đọc và quản lý sách điện tử trực tuyến xây dựng theo mô hình MVC
              trên nền tảng Java Servlet, JSP và MySQL. Bao gồm bảng điều khiển quản trị,
              phân quyền 3 cấp độ (Admin, User, Premium) và đường ống xử lý nội dung ứng dụng trí tuệ nhân tạo (AI).
            </p>

            {/* Direct CTA Link */}
            <div className="pt-2">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-2 border border-rule bg-paper-warm px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors hover:border-accent-red hover:text-accent-red"
              >
                <span>Khảo sát chuyên án DA-002</span>
                <span className="text-accent-red">→</span>
              </Link>
            </div>
          </div>

          {/* Right 7 Columns: Dominant Ebook Project Visual (45-55% Section Mass) */}
          <div className="lg:col-span-7">
            <EbookProjectVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
