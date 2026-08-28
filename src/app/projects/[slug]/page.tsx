import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { Container } from "@/components/ui";
import {
  SectionLabel,
  Headline,
  ArticleBlock,
  EditorialRule,
  ArchiveStamp,
  HistoricalImage,
} from "@/components/editorial";
import { createMetadata } from "@/lib/metadata";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projectsData,
} from "@/content";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Không tìm thấy hồ sơ công trình",
      description: "Hồ sơ công trình yêu cầu không tồn tại trong kho lưu trữ.",
      path: `/projects/${slug}`,
    });
  }

  return createMetadata({
    title: `${project.title} (${project.serial}) — Hồ sơ công trình`,
    description: project.summary,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const otherProject = projectsData.find((p) => p.slug !== slug);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1 py-10">
        <Container>
          {/* Top Navigation & Dossier Stamp */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-ink hover:text-accent-red"
            >
              <span>←</span>
              <span>Trở về trang nhất</span>
            </Link>
            <div className="flex items-center gap-2">
              <ArchiveStamp variant="ticket" serial={project.serial} />
              <span className="font-mono text-xs text-ink-muted">
                {project.period.display}
              </span>
            </div>
          </div>

          <SectionLabel
            label={`HỒ SƠ CÔNG TRÌNH • ${project.serial} — ${project.category}`}
            pageNumber="02"
          />

          <article className="mt-8 space-y-6">
            <Headline
              kicker="BÁO CÁO CÔNG TRÌNH KỸ THUẬT"
              size="display-xl"
              subdeck={project.lead}
            >
              {project.title.toUpperCase()}
            </Headline>

            <EditorialRule variant="thick-thin" className="my-6" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              {/* Main Column (8 cols): In-depth Dossier Content */}
              <div className="space-y-8 md:col-span-8">
                {/* 01. Context & Executive Summary */}
                <section>
                  <ArticleBlock
                    hasDropCap
                    byline={`VAI TRÒ: ${project.role.toUpperCase()}`}
                    category="BỐI CẢNH & MỤC TIÊU"
                  >
                    <p>{project.summary}</p>
                  </ArticleBlock>
                </section>

                <EditorialRule variant="single" />

                {/* 02. Core Features Breakdown */}
                <section className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-ink uppercase">
                    DANH MỤC TÍNH NĂNG NGHIỆP VỤ
                  </h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {project.keyFeatures.map((feat) => (
                      <div
                        key={feat.title}
                        className="border border-rule-light bg-paper-warm p-4"
                      >
                        <h4 className="font-display text-sm font-bold text-ink">
                          {feat.title}
                        </h4>
                        <p className="mt-1 font-body text-xs leading-relaxed text-ink-soft">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <EditorialRule variant="single" />

                {/* 03. Technical Implementation Details */}
                <section className="space-y-4">
                  <h3 className="font-display text-lg font-bold text-ink uppercase">
                    CHI TIẾT TRIỂN KHAI KỸ THUẬT
                  </h3>
                  <div className="space-y-4">
                    {project.technicalDetails.map((detail) => (
                      <div
                        key={detail.label}
                        className="border-l-2 border-accent-red pl-4"
                      >
                        <h4 className="font-display text-sm font-bold text-ink">
                          {detail.label}
                        </h4>
                        <ul className="mt-2 list-disc space-y-1 pl-4 font-body text-xs text-ink-soft">
                          {detail.points.map((pt, pIdx) => (
                            <li key={pIdx}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 04. Testing & Quality (if available) */}
                {project.testing && (
                  <>
                    <EditorialRule variant="single" />
                    <section className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-lg font-bold text-ink uppercase">
                          KIỂM THỬ & ĐẢM BẢO CHẤT LƯỢNG (QA)
                        </h3>
                        {project.testing.coverage && (
                          <span className="border border-rule bg-paper-warm px-2 py-0.5 font-mono text-xs font-bold text-accent-red">
                            ĐỘ BAO PHỦ: {project.testing.coverage}
                          </span>
                        )}
                      </div>
                      <p className="font-body text-xs leading-relaxed text-ink-soft">
                        {project.testing.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
                        <span className="text-ink-muted">CÔNG CỤ KIỂM THỬ:</span>
                        {project.testing.tools.map((t) => (
                          <span
                            key={t}
                            className="border border-rule-light bg-paper-warm px-2 py-0.5 text-ink font-semibold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </section>
                  </>
                )}

                {/* 05. Integrations */}
                {project.integrations && project.integrations.length > 0 && (
                  <>
                    <EditorialRule variant="single" />
                    <section className="space-y-3">
                      <h3 className="font-display text-lg font-bold text-ink uppercase">
                        DỊCH VỤ & GIAO TIẾP TÍCH HỢP
                      </h3>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {project.integrations.map((integ) => (
                          <div
                            key={integ.name}
                            className="border border-rule-light bg-paper-warm p-3"
                          >
                            <span className="font-mono text-xs font-bold text-accent-red">
                              {integ.name}
                            </span>
                            <p className="mt-0.5 font-body text-xs text-ink-soft">
                              {integ.purpose}
                            </p>
                          </div>
                        ))}
                      </div>
                    </section>
                  </>
                )}

                {/* 06. Recognition / Awards (if available) */}
                {project.recognition && (
                  <>
                    <EditorialRule variant="single" />
                    <section className="border-2 border-rule bg-paper-warm p-5">
                      <div className="flex items-center justify-between border-b border-rule pb-2">
                        <span className="font-mono text-xs font-bold uppercase text-accent-red">
                          GHI NHẬN HỌC THUẬT & GIẢI THƯỞNG
                        </span>
                        <ArchiveStamp variant="ticket" serial="GN-001" />
                      </div>
                      <h4 className="mt-2 font-display text-base font-bold text-ink">
                        {project.recognition.title}
                      </h4>
                      <p className="mt-1 font-mono text-xs text-ink-muted">
                        Đơn vị: {project.recognition.organizer} • Thành tích:{" "}
                        <span className="font-bold text-accent-red">
                          {project.recognition.level}
                        </span>
                      </p>
                    </section>
                  </>
                )}
              </div>

              {/* Sidebar Column (4 cols): Specifications & Navigation */}
              <div className="space-y-6 md:col-span-4">
                <HistoricalImage
                  src={project.coverImage || "/images/generated/vintage-typewriter-illustration-800.webp"}
                  alt={project.title}
                  caption={`Tư liệu lưu trữ hồ sơ công trình ${project.serial}.`}
                  source="Kho lưu trữ dự án"
                  aspectRatio="landscape"
                />

                {/* Technical Specifications Card */}
                <div className="border border-rule bg-paper-warm p-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-red">
                    THÔNG SỐ HỒ SƠ CÔNG TRÌNH
                  </span>
                  <ul className="mt-3 space-y-2 font-mono text-xs text-ink-soft">
                    <li className="flex justify-between border-b border-rule-light pb-1">
                      <span>MÃ SỐ:</span>
                      <span className="font-bold text-accent-red">{project.serial}</span>
                    </li>
                    <li className="flex justify-between border-b border-rule-light pb-1">
                      <span>VAI TRÒ:</span>
                      <span className="font-semibold text-ink">{project.role}</span>
                    </li>
                    <li className="flex justify-between border-b border-rule-light pb-1">
                      <span>THỜI GIAN:</span>
                      <span>{project.period.display}</span>
                    </li>
                    <li className="flex justify-between border-b border-rule-light pb-1">
                      <span>DANH MỤC:</span>
                      <span>{project.category}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>TRẠNG THÁI:</span>
                      <span className="font-bold text-accent-red">HOÀN TẤT & ĐỐI CHIẾU</span>
                    </li>
                  </ul>
                </div>

                {/* Technology Tags */}
                <div className="border border-rule-light bg-paper-warm p-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-muted">
                    CÔNG NGHỆ ÁP DỤNG
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span
                        key={t}
                        className="border border-rule-light bg-paper px-2 py-0.5 font-mono text-[11px] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Next / Related Dossier */}
                {otherProject && (
                  <div className="border border-rule bg-paper-warm p-4">
                    <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
                      CHUYÊN ÁN TIẾP THEO
                    </span>
                    <h5 className="mt-1 font-display text-sm font-bold text-ink">
                      <Link
                        href={`/projects/${otherProject.slug}`}
                        className="hover:text-accent-red"
                      >
                        {otherProject.title} ({otherProject.serial})
                      </Link>
                    </h5>
                    <p className="mt-1 font-body text-xs text-ink-faded">
                      {otherProject.role} • {otherProject.period.display}
                    </p>
                    <div className="mt-3 text-right">
                      <Link
                        href={`/projects/${otherProject.slug}`}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase text-accent-red hover:underline"
                      >
                        <span>Xem hồ sơ</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                )}

                <div className="flex justify-center pt-2">
                  <ArchiveStamp variant="seal" text="CHỨNG THỰC" />
                </div>
              </div>
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
