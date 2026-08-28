import Link from "next/link";
import { Container } from "@/components/ui";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-md transition-colors">
      <Container className="flex items-center justify-between gap-3 py-1.5 sm:py-2">
        <Link
          href="/"
          className="flex items-center gap-1.5 font-display text-xs sm:text-sm md:text-base font-bold tracking-tight text-ink hover:text-accent-red whitespace-nowrap shrink-0"
        >
          <span className="inline-block h-2 w-2 bg-accent-red" />
          <span>HÀ NỘI NHẬT BÁO</span>
        </Link>
        <Navigation />
      </Container>
    </header>
  );
}
