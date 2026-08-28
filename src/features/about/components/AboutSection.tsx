import { Container } from "@/components/ui";
import {
  SectionLabel,
  Headline,
  ArticleBlock,
  EditorialRule,
  NewspaperGrid,
  NewspaperColumn,
  HistoricalImage,
  ArchiveStamp,
} from "@/components/editorial";
import { profileData, skillsData } from "@/content";

export function AboutSection() {
  return (
    <section id="about" className="border-b-2 border-rule bg-paper py-12">
      <Container>
        <SectionLabel label="TRANG 04 • TIỂU SỬ TÁC GIẢ & CHỈ MỤC KỸ THUẬT" pageNumber="04" />

        <div className="mt-8">
          <NewspaperGrid>
            {/* Left Column (4 cols): Profile Snapshot & Illustration */}
            <NewspaperColumn span={4} hasBorderRight>
              <div className="space-y-4">
                <HistoricalImage
                  src="/images/generated/vintage-typewriter-illustration-800.webp"
                  alt="Minh họa máy đánh chữ"
                  caption="Công cụ lao động của người làm chữ: từ cơ học đến mã nguồn phần mềm."
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

                <div className="border-t border-rule-light pt-2 text-center">
                  <ArchiveStamp variant="seal" text="CHỨNG THỰC" />
                </div>
              </div>
            </NewspaperColumn>

            {/* Right Column (8 cols): Bio & Technical Experience Index */}
            <NewspaperColumn span={8}>
              <Headline
                kicker="TIỂU SỬ NGHỀ NGHIỆP"
                size="display-lg"
                subdeck="Hành trình học tập và phát triển hệ thống backend chất lượng cao trên nền tảng Java Spring Boot và NodeJS."
              >
                {profileData.name.toUpperCase()} — {profileData.title.toUpperCase()}
              </Headline>

              <EditorialRule variant="single" className="my-4" />

              <ArticleBlock
                hasDropCap
                byline="HỒ SƠ NĂNG LỰC"
                category="TỔNG QUAN"
              >
                <p>{profileData.editorialBio}</p>
              </ArticleBlock>

              <div className="mt-6 border-t-2 border-rule pt-4">
                <h4 className="font-display text-base font-bold text-ink uppercase">
                  CHỈ MỤC KỸ NĂNG & CÔNG NGHỆ THỰC NGHIỆM
                </h4>
                <p className="font-body text-xs text-ink-faded">
                  Toàn bộ các danh mục kỹ thuật dưới đây đều được chứng minh qua sản phẩm phần mềm thực tế hoặc định hướng học thuật rõ ràng.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {skillsData.map((category) => (
                    <div
                      key={category.id}
                      className="border border-rule-light bg-paper-warm p-3"
                    >
                      <span className="font-mono text-[10px] font-bold uppercase text-accent-red">
                        {category.kicker}
                      </span>
                      <h5 className="mt-0.5 font-display text-xs font-bold text-ink">
                        {category.name}
                      </h5>

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
                              <span className="text-[11px] text-ink-faded pl-3">
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
            </NewspaperColumn>
          </NewspaperGrid>
        </div>
      </Container>
    </section>
  );
}
