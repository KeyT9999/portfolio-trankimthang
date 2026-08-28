import { Container } from "@/components/ui";

export function TechnicalCapabilitiesSection() {
  return (
    <section
      id="capabilities"
      data-capabilities-section
      className="relative border-b-2 border-rule bg-paper py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <Container>
        {/* ==========================================================================
            TRANSITION FROM DA-002:
            Secondary Evidence (DA-002) → Evidence Index (WHAT I CAN DO)
            ========================================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule-light pb-3">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 bg-accent-red" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent-red">
              TECHNICAL INDEX / 03
            </span>
            <span className="font-mono text-xs text-ink-muted">
              • DANH MỤC NĂNG LỰC KỸ THUẬT
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-ink-muted">
            <span>BẰNG CHỨNG: DA-001 · DA-002 · CN-001</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="mt-6 sm:mt-8 max-w-4xl">
          <h2 className="font-[family-name:var(--font-sans-display)] text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-ink leading-[0.95]">
            ENGINEERING CAPABILITIES
          </h2>
          <p className="mt-2 font-mono text-xs sm:text-sm text-ink-soft uppercase tracking-wider">
            Phân loại năng lực kỹ thuật đối chiếu trực tiếp với các dự án thực tế đã triển khai và chứng chỉ chuyên môn.
          </p>
        </div>

        {/* ==========================================================================
            DOMINANT CORE FOCUS: JAVA & SPRING BOOT (Highest Visual Weight)
            ========================================================================== */}
        <div className="mt-8 sm:mt-10 border-2 border-rule bg-paper-warm p-5 sm:p-7 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 bg-accent-red" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent-red">
                CÔNG NGHỆ CỐT LÕI • PRIMARY BACKEND FOCUS
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs font-bold">
              <span className="border border-rule bg-ink px-2 py-0.5 text-paper">DA-001</span>
              <span className="border border-rule bg-ink px-2 py-0.5 text-paper">DA-002</span>
              <span className="border border-rule bg-accent-red px-2 py-0.5 text-paper">CN-001</span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5">
              <h3 className="font-[family-name:var(--font-sans-display)] text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-ink">
                JAVA & SPRING BOOT 3.2
              </h3>
              <p className="mt-1 font-mono text-xs font-semibold text-accent-red uppercase">
                Ngôn ngữ & Framework trung tâm
              </p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-body text-xs sm:text-sm leading-relaxed text-ink-soft">
                Phát triển ứng dụng backend với <strong>Java</strong> và <strong>Spring Boot 3.2</strong>,
                xây dựng hệ thống <strong>RESTful APIs</strong>, cấu hình bảo mật tài nguyên đa cấp độ và xử lý dữ liệu giao dịch an toàn.
              </p>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            6 ASYMMETRIC EVIDENCE MATRIX GROUPS
            ========================================================================== */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Group 01: Database & Data */}
          <div className="border border-rule bg-paper p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                  01 / CƠ SỞ DỮ LIỆU
                </span>
                <span className="font-mono text-[10px] text-ink-muted">DATABASE</span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">PostgreSQL</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Thiết kế lược đồ quan hệ, tạo chỉ mục và tối ưu truy vấn dữ liệu đặt chỗ.
                  </p>
                </div>
                <div className="border-t border-rule-light pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">MySQL</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-002
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Chuẩn hóa cấu trúc bảng, quản lý kho sách và dữ liệu tương tác người dùng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group 02: Auth & Security */}
          <div className="border border-rule bg-paper p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                  02 / BẢO MẬT & PHÂN QUYỀN
                </span>
                <span className="font-mono text-[10px] text-ink-muted">SECURITY</span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">Spring Security & OAuth2</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Lọc yêu cầu HTTP, kiểm soát phiên và xác thực an toàn qua giao thức OAuth2.
                  </p>
                </div>
                <div className="border-t border-rule-light pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">Role-Based Access Control</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001 · DA-002
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Phân quyền đa cấp độ cho User, Customer, Admin và tài khoản Premium.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group 03: API & Realtime */}
          <div className="border border-rule bg-paper p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                  03 / GIAO THỨC & REALTIME
                </span>
                <span className="font-mono text-[10px] text-ink-muted">API & WS</span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">RESTful API Design</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001 · DA-002
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Quy chuẩn mã phản hồi, cấu trúc JSON phân tầng và quản lý tài nguyên đồng bộ.
                  </p>
                </div>
                <div className="border-t border-rule-light pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">WebSocket Communication</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Kênh nhắn tin tức thời hai chiều giữa khách hàng và bộ phận phục vụ.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group 04: AI Integration */}
          <div className="border border-rule bg-paper p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                  04 / TÍCH HỢP TRÍ TUỆ NHÂN TẠO
                </span>
                <span className="font-mono text-[10px] text-ink-muted">AI SERVICES</span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">OpenAI API Integration</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001 · DA-002
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Tích hợp LLM phân tích khẩu vị món ăn và trợ lý AI thảo luận nội dung sách.
                  </p>
                </div>
                <div className="border-t border-rule-light pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">AI Pipeline & Moderation</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-002
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Tự động kiểm duyệt văn bản, tóm tắt tác phẩm và tự động gán nhãn thể loại.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group 05: Testing & QA */}
          <div className="border border-rule bg-paper p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                  05 / KIỂM THỬ ĐƠN VỊ & QA
                </span>
                <span className="font-mono text-[10px] text-ink-muted">TESTING</span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">JUnit 5 & Mockito</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Xây dựng kịch bản kiểm thử đơn vị độc lập, mock dữ liệu dịch vụ và repository.
                  </p>
                </div>
                <div className="border-t border-rule-light pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">JaCoCo Code Coverage</span>
                    <span className="border border-emerald-500/40 bg-emerald-500/10 px-1.5 py-0.2 font-mono text-[10px] font-bold text-emerald-700">
                      &gt;80% (DA-001)
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Đo lường và đảm bảo độ bao phủ kiểm thử đơn vị trên các tầng nghiệp vụ dự án.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Group 06: Payment & Media Services */}
          <div className="border border-rule bg-paper p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between border-b border-rule-light pb-2">
                <span className="font-mono text-[11px] font-bold uppercase text-accent-red">
                  06 / DỊCH VỤ CỔNG & MEDIA
                </span>
                <span className="font-mono text-[10px] text-ink-muted">INTEGRATIONS</span>
              </div>
              <div className="mt-3 space-y-2.5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">PayOS Payment Gateway</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Xử lý thanh toán trực tuyến và cơ chế nhận thông báo giao dịch qua webhook.
                  </p>
                </div>
                <div className="border-t border-rule-light pt-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-ink">Cloudinary Media</span>
                    <span className="border border-rule-light bg-paper-warm px-1.5 py-0.2 font-mono text-[10px] font-bold text-ink">
                      DA-001
                    </span>
                  </div>
                  <p className="mt-0.5 font-body text-[11px] text-ink-soft">
                    Lưu trữ, tối ưu hóa và phân phối tài nguyên hình ảnh thực đơn và nhà hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================================================
            HONEST TECHNICAL DIRECTION & CURRENT FOCUS (NodeJS)
            Strictly distinguished from project-proven skills.
            ========================================================================== */}
        <div className="mt-6 border border-dashed border-rule-medium bg-paper-warm p-4 sm:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                ĐỊNH HƯỚNG MỞ RỘNG • CURRENT TECHNICAL FOCUS
              </span>
            </div>
            <span className="border border-rule px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-ink-muted">
              LEARNING DIRECTION
            </span>
          </div>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <span className="font-[family-name:var(--font-sans-display)] text-lg sm:text-xl font-bold uppercase text-ink">
              NODEJS BACKEND ECOSYSTEM
            </span>
            <p className="font-body text-xs text-ink-soft sm:max-w-xl">
              Định hướng nghiên cứu và phát triển kỹ năng xây dựng dịch vụ backend trên môi trường NodeJS.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
