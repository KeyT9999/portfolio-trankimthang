import React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArchiveStamp } from "./ArchiveStamp";

export interface MastheadProps {
  title?: string;
  motto?: string;
  leftEar?: React.ReactNode;
  rightEar?: React.ReactNode;
  className?: string;
}

export function Masthead({
  title = "HÀ NỘI NHẬT BÁO",
  motto = "KHOA HỌC GIAO DIỆN • NGHỆ THUẬT TƯƠNG TÁC • BIÊN NIÊN SỬ KỸ THUẬT",
  leftEar,
  rightEar,
  className,
}: MastheadProps) {
  return (
    <header className={cn("w-full text-center select-none pt-4 pb-2", className)}>
      {/* Top Motto Banner */}
      <div className="border-b border-rule-light pb-1 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
        {motto}
      </div>

      {/* Masthead Centerpiece with Left & Right Ears */}
      <div className="grid grid-cols-1 items-center justify-between gap-4 py-4 md:grid-cols-12">
        {/* Left Ear */}
        <div className="hidden flex-col items-center justify-center border border-rule-light bg-paper-warm p-2 text-center md:col-span-3 md:flex">
          {leftEar ? (
            <div className="font-mono text-xs text-ink-soft">{leftEar}</div>
          ) : (
            <>
              <ArchiveStamp variant="seal" text="TÒA SOẠN" />
              <p className="mt-1 font-mono text-[10px] uppercase text-ink-faded">
                ĐÔNG PHÁP KỸ NGHỆ
              </p>
            </>
          )}
        </div>

        {/* Center Title */}
        <div className="md:col-span-6">
          <Link href="/" className="group inline-block">
            <span className="block font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent-red">
              HỒ SƠ NĂNG LỰC KỸ THUẬT PHẦN MỀM
            </span>
            <h1 className="my-1 font-display text-4xl font-extrabold tracking-tight text-ink md:text-6xl lg:text-7xl">
              {title}
            </h1>
            <span className="block font-body text-xs italic tracking-wider text-ink-soft">
              Biên tập viên & Kỹ sư Backend • Đại học FPT
            </span>
          </Link>
        </div>

        {/* Right Ear */}
        <div className="hidden flex-col items-center justify-center border border-rule-light bg-paper-warm p-2 text-center md:col-span-3 md:flex">
          {rightEar ? (
            <div className="font-mono text-xs text-ink-soft">{rightEar}</div>
          ) : (
            <>
              <ArchiveStamp variant="postmark" />
              <p className="mt-1 font-mono text-[10px] uppercase text-ink-faded">
                HÀ NỘI — ĐÀ NẴNG
              </p>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
