import Link from "next/link";
import { Container } from "@/components/ui";
import { profileData } from "@/content";

export function Footer() {
  return (
    <footer className="border-t-2 border-rule bg-paper-warm py-8 sm:py-10 text-ink">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
          {/* Identity & Colophon */}
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <strong className="text-ink uppercase font-bold">{profileData.name}</strong>
            <span>•</span>
            <span>{profileData.title}</span>
            <span>•</span>
            <span>{profileData.location.public}</span>
          </div>

          {/* End of Edition Device & Back to Top */}
          <div className="flex items-center gap-4">
            <span className="border border-rule bg-paper px-2 py-0.5 font-bold uppercase tracking-widest text-accent-red">
              ■ SỐ 001 · HẾT
            </span>
            <Link
              href="#cover"
              className="text-ink transition-colors hover:text-accent-red underline underline-offset-4 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent-red"
              aria-label="Trở về đầu trang bìa"
            >
              Đầu trang ↑
            </Link>
          </div>
        </div>

        {/* Minimal Copyright Line */}
        <div className="mt-4 border-t border-rule-light pt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-ink-muted">
          <p>© {new Date().getFullYear()} {profileData.name} (@{profileData.handle}). All rights reserved.</p>
          <p>Ấn bản kỹ thuật số • Đại học FPT</p>
        </div>
      </Container>
    </footer>
  );
}
