import Image from "next/image";
import { Container } from "@/components/ui";
import {
  SectionLabel,
  Headline,
  EditorialRule,
  NewspaperGrid,
  NewspaperColumn,
  ArchiveStamp,
} from "@/components/editorial";
import { profileData } from "@/content";

export function ContactSection() {
  return (
    <section id="contact" className="bg-paper py-12">
      <Container>
        <SectionLabel label="TRANG CUỐI • HỘP THƯ TÒA SOẠN & LIÊN LẠC" pageNumber="05" />

        <div className="mt-8">
          <NewspaperGrid>
            {/* Left Column (8 cols): Official Postal Dispatch Box */}
            <NewspaperColumn span={8} hasBorderRight>
              <Headline
                kicker="KẾT NỐI TRUYỀN THÔNG & HỢP TÁC"
                size="display-lg"
                subdeck="Mọi trao đổi chuyên môn kỹ thuật, cơ hội nghề nghiệp hoặc đề xuất hợp tác phát triển hệ thống xin chuyển về các kênh liên lạc chính thức dưới đây."
              >
                LIÊN HỆ TRẦN KIM THẮNG
              </Headline>

              <EditorialRule variant="single" className="my-4" />

              <div className="border border-rule bg-paper-warm p-6">
                <div className="flex flex-wrap items-center justify-between border-b border-rule-light pb-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase text-ink-muted">
                      DANH TÍNH TÁC GIẢ
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink">
                      {profileData.name.toUpperCase()} — {profileData.title.toUpperCase()}
                    </h3>
                  </div>
                  <ArchiveStamp variant="ticket" serial="MAIL-2026" />
                </div>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-xs font-semibold text-accent-red">
                        HỘP THƯ ĐIỆN TỬ (EMAIL)
                      </span>
                      <p className="mt-0.5 font-mono text-sm font-bold text-ink">
                        <a
                          href={`mailto:${profileData.email}`}
                          className="hover:text-accent-red hover:underline"
                        >
                          {profileData.email}
                        </a>
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-xs font-semibold text-accent-red">
                        DANH DANH TRỰC TUYẾN (HANDLE)
                      </span>
                      <p className="mt-0.5 font-mono text-sm font-bold text-ink">
                        {profileData.handle}
                      </p>
                    </div>

                    {/* Conditional Phone rendering based on privacy settings */}
                    {profileData.privacy.showPhone && profileData.phone && (
                      <div>
                        <span className="font-mono text-xs font-semibold text-accent-red">
                          ĐIỆN THOẠI LIÊN LẠC
                        </span>
                        <p className="mt-0.5 font-mono text-sm font-bold text-ink">
                          {profileData.phone}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="font-mono text-xs font-semibold text-accent-red">
                        ĐỊA BÀN HOẠT ĐỘNG
                      </span>
                      <p className="mt-0.5 font-body text-sm text-ink-soft">
                        {profileData.privacy.showFullAddress && profileData.location.fullStreet
                          ? profileData.location.fullStreet
                          : profileData.location.public}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-xs font-semibold text-accent-red">
                        ĐƠN VỊ ĐÀO TẠO
                      </span>
                      <p className="mt-0.5 font-body text-sm text-ink-soft">
                        {profileData.educationStatus}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-xs font-semibold text-accent-red">
                        THỜI GIAN PHẢN HỒI DỰ KIẾN
                      </span>
                      <p className="mt-0.5 font-body text-xs text-ink-faded">
                        Trong vòng 24–48 giờ làm việc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </NewspaperColumn>

            {/* Right Column (4 cols): Postal Stamps & Postmark motif */}
            <NewspaperColumn span={4}>
              <div className="flex flex-col items-center justify-center space-y-6 border-2 border-dashed border-rule bg-paper-warm p-6 text-center">
                <div className="relative h-28 w-24 overflow-hidden border border-rule shadow-sm">
                  <Image
                    src="/images/generated/dong-phap-stamp-1931-400.webp"
                    alt="Tem Đông Pháp Bưu Điện 1931"
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink">
                    ĐÔNG PHÁP BƯU ĐIỆN
                  </span>
                  <p className="mt-1 font-body text-xs text-ink-faded">
                    Hà Nội — Đà Nẵng • Bưu cục kỹ thuật số
                  </p>
                </div>

                <ArchiveStamp variant="postmark" />
              </div>
            </NewspaperColumn>
          </NewspaperGrid>
        </div>
      </Container>
    </section>
  );
}
