import { Container } from "@/components/ui";
import { EditorialRule } from "@/components/editorial";
import { profileData } from "@/content";

export function Footer() {
  return (
    <footer className="border-t-2 border-rule bg-paper py-10 text-center font-mono text-xs text-ink-faded">
      <Container className="space-y-4">
        <div className="grid grid-cols-1 gap-4 text-center md:grid-cols-3 md:text-left">
          <div>
            <span className="font-bold uppercase text-ink">TÒA SOẠN & XUẤT BẢN</span>
            <p className="mt-1 font-body text-xs text-ink-soft">
              {profileData.location.public} • Niên khóa 2026
            </p>
          </div>
          <div className="md:text-center">
            <span className="font-bold uppercase text-ink">CHỦ NHIỆM & KỸ SƯ BACKEND</span>
            <p className="mt-1 font-body text-xs text-ink-soft">
              {profileData.name} ({profileData.handle})
            </p>
          </div>
          <div className="md:text-right">
            <span className="font-bold uppercase text-ink">HỒ SƠ LƯU KHO SỐ</span>
            <p className="mt-1 font-mono text-xs font-bold text-accent-red">
              HS-2026/FPT
            </p>
          </div>
        </div>

        <EditorialRule variant="double" className="my-4" />

        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-ink-muted">
          <p>© {new Date().getFullYear()} {profileData.name}. Bảo lưu mọi quyền xuất bản kỹ thuật số.</p>
          <p className="italic font-body">Hồ sơ năng lực kỹ thuật • Đại học FPT.</p>
        </div>
      </Container>
    </footer>
  );
}
