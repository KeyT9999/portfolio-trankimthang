"use client";

import Link from "next/link";
import { useUIStore } from "@/store/uiStore";

const NAV_ITEMS = [
  { label: "Bìa", href: "#cover" },
  { label: "Trang Nhất", href: "#newspaper" },
  { label: "Dự Án", href: "#projects" },
  { label: "Năng Lực", href: "#capabilities" },
  { label: "Học Vấn", href: "#archive" },
  { label: "Tiểu Sử", href: "#about" },
  { label: "Liên Hệ", href: "#contact" },
];

export function Navigation() {
  const activeSection = useUIStore((s) => s.activeSection);

  return (
    <nav aria-label="Main Navigation" className="overflow-x-auto no-scrollbar shrink">
      <ul className="flex items-center gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-ink-muted whitespace-nowrap">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`transition-colors px-1 py-0.5 hover:text-accent-red ${
                  isActive ? "font-bold text-accent-red border-b border-accent-red" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
