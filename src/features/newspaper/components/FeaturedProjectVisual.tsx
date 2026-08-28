export function FeaturedProjectVisual() {
  return (
    <div className="relative w-full overflow-hidden border-2 border-rule bg-ink text-paper p-4 sm:p-6 lg:p-8 font-mono shadow-2xl">
      {/* Top Interface Header */}
      <div className="flex items-center justify-between border-b border-paper/15 pb-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent-red" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent-gold" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-paper/70">
            HỆ THỐNG DỊCH VỤ BACKEND & TÍCH HỢP
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px] sm:text-xs">
          <span className="hidden sm:inline-block text-paper/50">JAVA · SPRING BOOT 3.2</span>
          <span className="border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-emerald-400 font-bold">
            POSTGRESQL
          </span>
        </div>
      </div>

      {/* Main Technical Architecture Canvas */}
      <div className="mt-5 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left 7 Cols: Verified Core Service Layers */}
        <div className="space-y-4 lg:col-span-7">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent-gold">
              Tầng Dịch vụ Nghiệp vụ (RESTful Services)
            </span>
            <span className="text-[10px] text-paper/40">Spring Security + OAuth2</span>
          </div>

          <div className="space-y-2 text-[11px] sm:text-xs">
            {/* Service 1 */}
            <div className="flex items-center justify-between rounded border border-paper/10 bg-paper/5 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] font-bold text-emerald-400">
                  CORE
                </span>
                <span className="font-semibold text-paper/90">Quản lý Đặt bàn & Sơ đồ Bàn tiệc</span>
              </div>
              <span className="text-[10px] text-paper/50">Áp dụng mã Voucher</span>
            </div>

            {/* Service 2 */}
            <div className="flex items-center justify-between rounded border border-paper/10 bg-paper/5 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-bold text-blue-400">
                  GATEWAY
                </span>
                <span className="font-semibold text-paper/90">Tích hợp Cổng Thanh toán PayOS API</span>
              </div>
              <span className="text-[10px] text-paper/50">Xử lý Webhook giao dịch</span>
            </div>

            {/* Service 3 */}
            <div className="flex items-center justify-between rounded border border-paper/10 bg-paper/5 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[10px] font-bold text-purple-400">
                  AI ENGINE
                </span>
                <span className="font-semibold text-paper/90">Gợi ý Món ăn qua OpenAI API</span>
              </div>
              <span className="text-[10px] text-paper/50">Phân tích khẩu vị</span>
            </div>

            {/* Service 4 */}
            <div className="flex items-center justify-between rounded border border-paper/10 bg-paper/5 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold text-amber-400">
                  REALTIME
                </span>
                <span className="font-semibold text-paper/90">Kênh Nhắn tin Trực tuyến WebSocket</span>
              </div>
              <span className="text-[10px] text-paper/50">Trao đổi thời gian thực</span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Verified Telemetry & Quality Assurance */}
        <div className="flex flex-col justify-between space-y-4 lg:col-span-5 lg:border-l lg:border-paper/10 lg:pl-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent-gold">
              Bảo mật & Kiểm thử Đơn vị
            </span>
            <div className="mt-3 space-y-3">
              {/* JaCoCo Metric */}
              <div className="border border-paper/10 bg-paper/5 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-paper/60 uppercase">Độ bao phủ JaCoCo</span>
                  <span className="text-sm font-black text-emerald-400">&gt;80%</span>
                </div>
                <div className="mt-1.5 h-1.5 w-full rounded-full bg-paper/10 overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full w-[84%]" />
                </div>
                <p className="mt-1 text-[10px] text-paper/40">JUnit 5 · Mockito · Tầng Nghiệp vụ</p>
              </div>

              {/* RBAC Auth Matrix */}
              <div className="border border-paper/10 bg-paper/5 p-3">
                <span className="text-[10px] text-paper/60 uppercase">Ma trận Phân quyền (RBAC)</span>
                <div className="mt-1.5 flex gap-1.5 text-[10px]">
                  <span className="border border-paper/20 px-1.5 py-0.5 text-paper/80">USER</span>
                  <span className="border border-paper/20 px-1.5 py-0.5 text-paper/80">CUSTOMER</span>
                  <span className="border border-accent-red/60 bg-accent-red/20 px-1.5 py-0.5 text-accent-red font-bold">
                    ADMIN
                  </span>
                </div>
                <p className="mt-1 text-[10px] text-paper/40">Spring Security + OAuth2 Phê duyệt</p>
              </div>
            </div>
          </div>

          <div className="border-t border-paper/10 pt-2 flex items-center justify-between text-[10px] text-paper/40">
            <span>HỒ SƠ DA-001</span>
            <span>CLOUDINARY MEDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
