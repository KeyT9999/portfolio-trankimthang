import { Container } from "@/components/ui";
import {
  SectionLabel,
  Headline,
  EditorialRule,
  NewspaperGrid,
  NewspaperColumn,
  ArchiveStamp,
  ArticleBlock,
} from "@/components/editorial";
import { educationData, awardsData, certificationsData } from "@/content";

export function ArchiveSection() {
  return (
    <section id="archive" className="border-b-2 border-rule bg-paper py-12">
      <Container>
        <SectionLabel label="TRANG 03 • HỒ SƠ HỌC THUẬT & GHI NHẬN THÀNH TÍCH" pageNumber="03" />

        <div className="mt-8">
          <NewspaperGrid>
            {/* Left 7 cols: Academic Record (Hồ Sơ Học Thuật) */}
            <NewspaperColumn span={7} hasBorderRight>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <div className="flex items-center gap-2">
                  <ArchiveStamp variant="ticket" serial={educationData.docketId} />
                  <span className="font-mono text-xs font-bold uppercase text-accent-red">
                    HỌC VẤN CHÍNH QUY
                  </span>
                </div>
                <span className="font-mono text-xs text-ink-muted">
                  {educationData.period.display}
                </span>
              </div>

              <div className="mt-4">
                <Headline
                  kicker="CƠ SỞ ĐÀO TẠO ĐẠI HỌC"
                  size="display-lg"
                  subdeck={educationData.major}
                >
                  {educationData.institution.toUpperCase()}
                </Headline>

                <EditorialRule variant="single" className="my-4" />

                <ArticleBlock
                  hasDropCap
                  byline="HỒ SƠ SINH VIÊN"
                  category="ĐÀO TẠO"
                >
                  <p>{educationData.description}</p>
                </ArticleBlock>

                <div className="mt-6 border border-rule bg-paper-warm p-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-red">
                    CHỈ SỐ HỌC TẬP TÍCH LŨY
                  </span>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-ink">
                      GPA {educationData.gpa.score}
                    </span>
                    <span className="font-mono text-xs text-ink-faded">
                      / {educationData.gpa.scale} (Thang điểm 4.0)
                    </span>
                  </div>
                  <p className="mt-1 font-body text-xs text-ink-soft">
                    Tình trạng: {educationData.status} • Niên khóa 2022–2027
                  </p>
                </div>
              </div>
            </NewspaperColumn>

            {/* Right 5 cols: Awards & Certifications */}
            <NewspaperColumn span={5}>
              <div className="space-y-6">
                {/* Honors & Awards Box */}
                <div className="border-2 border-rule bg-paper-warm p-5">
                  <div className="flex items-center justify-between border-b border-rule pb-2">
                    <span className="font-mono text-xs font-bold uppercase text-accent-red">
                      GHI NHẬN & GIẢI THƯỞNG
                    </span>
                    <ArchiveStamp variant="ticket" serial={awardsData[0]?.docketId || "GN-001"} />
                  </div>

                  {awardsData.map((award) => (
                    <div key={award.docketId} className="mt-3">
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-xs font-bold text-accent-red">
                          [{award.year}]
                        </span>
                        <span className="border border-rule px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase text-ink">
                          {award.result}
                        </span>
                      </div>

                      <h4 className="mt-2 font-display text-base font-bold text-ink">
                        {award.title}
                      </h4>
                      <p className="mt-1 font-mono text-xs text-ink-muted">
                        Đơn vị tổ chức: {award.organizer}
                      </p>
                      <p className="mt-2 font-body text-xs leading-relaxed text-ink-soft">
                        {award.summary}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Certifications Box */}
                <div className="border border-rule bg-paper-warm p-5">
                  <div className="flex items-center justify-between border-b border-rule-light pb-2">
                    <span className="font-mono text-xs font-bold uppercase text-ink">
                      CHỨNG NHẬN CHUYÊN MÔN
                    </span>
                    <span className="font-mono text-xs text-ink-faded">2025</span>
                  </div>

                  <ul className="mt-3 divide-y divide-rule-light">
                    {certificationsData.map((cert) => (
                      <li key={cert.docketId} className="py-2.5 first:pt-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <ArchiveStamp variant="ticket" serial={cert.docketId} />
                          <span className="font-mono text-[10px] uppercase text-ink-faded">
                            {cert.category}
                          </span>
                        </div>
                        <h5 className="mt-1 font-display text-xs font-bold text-ink">
                          {cert.title}
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-around pt-2">
                  <ArchiveStamp variant="postmark" />
                  <ArchiveStamp variant="seal" text="CHỨNG THỰC" />
                </div>
              </div>
            </NewspaperColumn>
          </NewspaperGrid>
        </div>
      </Container>
    </section>
  );
}
