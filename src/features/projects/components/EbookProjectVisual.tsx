export function EbookProjectVisual() {
  return (
    <div className="relative w-full overflow-hidden border-2 border-rule bg-paper-warm p-5 sm:p-7 font-mono shadow-lg">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between border-b border-rule-light pb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-accent-red" />
          <span className="font-bold uppercase tracking-wider text-ink">
            CHUỖI DỊCH VỤ & BẢNG ĐIỀU KHIỂN HỆ THỐNG
          </span>
        </div>
        <span className="font-semibold text-accent-red">DA-002 • MVC</span>
      </div>

      {/* 4 Verified Core Capabilities Grid */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Capability 1 */}
        <div className="border border-rule-light bg-paper p-4 space-y-1.5 transition-colors hover:border-ink">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-accent-red">01</span>
            <span className="text-[9px] uppercase tracking-wider text-ink-muted">UI/UX & Tra cứu</span>
          </div>
          <h4 className="font-[family-name:var(--font-sans-display)] text-xs font-bold uppercase text-ink">
            Đọc sách & Quản lý Tài khoản
          </h4>
          <p className="font-body text-[11px] leading-relaxed text-ink-soft">
            Giao diện đọc sách trực tuyến trực quan, hỗ trợ đánh dấu trang, tìm kiếm tác phẩm và quản lý thông tin hồ sơ cá nhân.
          </p>
        </div>

        {/* Capability 2 */}
        <div className="border border-rule-light bg-paper p-4 space-y-1.5 transition-colors hover:border-ink">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-accent-red">02</span>
            <span className="text-[9px] uppercase tracking-wider text-ink-muted">Quản trị & RBAC</span>
          </div>
          <h4 className="font-[family-name:var(--font-sans-display)] text-xs font-bold uppercase text-ink">
            Admin Dashboard & Phân quyền
          </h4>
          <p className="font-body text-[11px] leading-relaxed text-ink-soft">
            Bảng điều khiển quản trị danh mục sách, quản lý người dùng và phân quyền 3 cấp độ: Admin, User và Premium.
          </p>
        </div>

        {/* Capability 3 */}
        <div className="border border-rule-light bg-paper p-4 space-y-1.5 transition-colors hover:border-ink">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-accent-red">03</span>
            <span className="text-[9px] uppercase tracking-wider text-ink-muted">Trí tuệ Nhân tạo</span>
          </div>
          <h4 className="font-[family-name:var(--font-sans-display)] text-xs font-bold uppercase text-ink">
            Trợ lý AI Chat & Tóm tắt Sách
          </h4>
          <p className="font-body text-[11px] leading-relaxed text-ink-soft">
            Tích hợp trợ lý đối thoại AI hỗ trợ giải đáp nội dung và tự động tạo bản tóm tắt tác phẩm cho độc giả.
          </p>
        </div>

        {/* Capability 4 */}
        <div className="border border-rule-light bg-paper p-4 space-y-1.5 transition-colors hover:border-ink">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-accent-red">04</span>
            <span className="text-[9px] uppercase tracking-wider text-ink-muted">Xử lý Tự động</span>
          </div>
          <h4 className="font-[family-name:var(--font-sans-display)] text-xs font-bold uppercase text-ink">
            Gợi ý Sách & Kiểm duyệt AI
          </h4>
          <p className="font-body text-[11px] leading-relaxed text-ink-soft">
            Đề xuất đầu sách theo sở thích đọc; tự động kiểm duyệt nội dung và gán nhãn thể loại tác phẩm khi tải lên.
          </p>
        </div>
      </div>

      {/* Bottom Tech Metadata */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-rule-light pt-3 text-[10px] text-ink-muted">
        <div className="flex items-center gap-2">
          <span className="font-bold text-ink">CÔNG NGHỆ:</span>
          <span>Java Servlet · JSP · MySQL · AI Pipeline</span>
        </div>
        <span>MÔ HÌNH MVC</span>
      </div>
    </div>
  );
}
