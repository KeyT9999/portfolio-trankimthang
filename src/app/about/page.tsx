import Link from "next/link";
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
  profileData,
  educationData,
  awardsData,
  certificationsData,
  skillsData,
} from "@/content";

export const metadata = createMetadata({
  title: "Tòa Soạn & Tiểu Sử — Trần Kim Thắng",
  description:
    "Hồ sơ năng lực, tiểu sử học thuật và chỉ mục kỹ thuật của Trần Kim Thắng (Backend Developer Intern).",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main className="flex-1 py-10">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-widest text-ink hover:text-accent-red"
            >
              <span>←</span>
              <span>Trở về trang nhất</span>
            </Link>
            <ArchiveStamp variant="ticket" serial="TS-HANOI" />
          </div>

          <SectionLabel label="TÒA SOẠN • TIỂU SỬ & QUÁ TRÌNH LÀM NGHỀ" pageNumber="04" />

          <article className="mt-8 space-y-8">
            <Headline
              kicker="HỒ SƠ CÁ NHÂN & NĂNG LỰC"
              size="display-xl"
              subdeck="Báo cáo chi tiết về nền tảng học thuật, giải thưởng nghiên cứu và năng lực kỹ thuật phần mềm."
            >
              {profileData.name.toUpperCase()} — {profileData.title.toUpperCase()}
            </Headline>

            <EditorialRule variant="thick-thin" className="my-6" />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
              {/* Left Column (4 cols): Profile Snapshot & Verification */}
              <div className="space-y-6 md:col-span-4">
                <HistoricalImage
                  src="/images/generated/vintage-typewriter-illustration-800.webp"
                  alt="Minh họa máy đánh chữ"
                  caption="Biểu tượng của sự tỉ mỉ trong từng dòng mã nguồn."
                  source="Bản khắc mộc bản"
                  aspectRatio="square"
                />

                <div className="border border-rule bg-paper-warm p-4 text-center">
                  <h3 className="font-display text-base font-bold text-ink">
                    {profileData.name.toUpperCase()}
                  </h3>
                  <p className="font-mono text-xs uppercase text-accent-red font-bold">
                    {profileData.title}
                  </p>
                  <p className="mt-2 font-body text-xs text-ink-soft">
                    {profileData.educationStatus}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink-faded">
                    Địa bàn: {profileData.location.public}
                  </p>
                </div>

                {/* Education Summary */}
                <div className="border border-rule-light bg-paper-warm p-4">
                  <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
                    HỌC VẤN CHÍNH QUY
                  </span>
                  <h4 className="mt-1 font-display text-sm font-bold text-ink">
                    {educationData.institution}
                  </h4>
                  <p className="font-mono text-xs text-ink-soft">
                    {educationData.major}
                  </p>
                  <p className="mt-1 font-mono text-xs text-ink-faded">
                    {educationData.period.display} • GPA {educationData.gpa.score}/4.0
                  </p>
                </div>

                {/* Awards Box */}
                <div className="border border-rule bg-paper-warm p-4">
                  <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
                    THÀNH TÍCH GHI NHẬN
                  </span>
                  <h5 className="mt-1 font-display text-xs font-bold text-ink">
                    {awardsData[0]?.title}
                  </h5>
                  <p className="mt-0.5 font-mono text-[11px] text-ink-muted">
                    {awardsData[0]?.organizer} • {awardsData[0]?.year}
                  </p>
                </div>

                <div className="flex justify-center pt-2">
                  <ArchiveStamp variant="seal" text="CHỨNG THỰC" />
                </div>
              </div>

              {/* Right Column (8 cols): Bio & Comprehensive Skills Index */}
              <div className="space-y-6 md:col-span-8">
                <ArticleBlock
                  hasDropCap
                  byline="BAN BIÊN TẬP TÒA SOẠN"
                  category="TIỂU SỬ & ĐỊNH HƯỚNG"
                >
                  <p>{profileData.editorialBio}</p>
                </ArticleBlock>

                <div className="border-t-2 border-rule pt-4">
                  <h3 className="font-display text-lg font-bold text-ink uppercase">
                    CHỈ MỤC KỸ NĂNG & NĂNG LỰC KỸ THUẬT
                  </h3>
                  <p className="mt-1 font-body text-xs text-ink-faded">
                    Các công nghệ được phân loại dựa trên bằng chứng phát triển dự án thực tế và quá trình đào tạo chính quy.
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {skillsData.map((category) => (
                      <div
                        key={category.id}
                        className="border border-rule-light bg-paper-warm p-3"
                      >
                        <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
                          {category.kicker}
                        </span>
                        <h4 className="mt-0.5 font-display text-xs font-bold text-ink">
                          {category.name}
                        </h4>

                        <ul className="mt-2 space-y-1 font-body text-xs text-ink-soft">
                          {category.items.map((item) => (
                            <li key={item.name} className="flex flex-col">
                              <span className="font-mono font-semibold text-ink">
                                • {item.name}
                                {item.isCoreDirection && (
                                  <span className="ml-1 text-[10px] text-accent-red font-normal">
                                    (Định hướng)
                                  </span>
                                )}
                              </span>
                              {item.note && (
                                <span className="pl-3 text-[11px] text-ink-faded">
                                  {item.note}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications Section */}
                <div className="border-t border-rule-light pt-4">
                  <h3 className="font-display text-base font-bold text-ink uppercase">
                    CHỨNG CHỈ & KHÓA ĐÀO TẠO CHUYÊN MÔN
                  </h3>
                  <ul className="mt-3 divide-y divide-rule-light border border-rule-light bg-paper-warm p-4">
                    {certificationsData.map((cert) => (
                      <li key={cert.docketId} className="py-2.5 first:pt-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold text-accent-red">
                            {cert.docketId}
                          </span>
                          <span className="font-mono text-[10px] uppercase text-ink-muted">
                            {cert.category} • {cert.year}
                          </span>
                        </div>
                        <h4 className="mt-1 font-display text-sm font-bold text-ink">
                          {cert.title}
                        </h4>
                      </li>
                    ))}
                  </ul>
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
