import Link from "next/link";
import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper text-center">
      <Container>
        <span className="font-mono text-xs uppercase tracking-widest text-ink-muted">
          Lỗi 404 • Số báo không tồn tại
        </span>
        <h1 className="my-4 font-display text-4xl font-bold md:text-6xl">
          Không Tìm Thấy Trang
        </h1>
        <p className="mx-auto max-w-md font-body text-sm text-ink-muted">
          Trang báo hoặc tư liệu bạn đang tìm kiếm không tồn tại hoặc đã được lưu trữ vào kho tư liệu riêng.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wider text-paper hover:bg-transparent hover:text-ink"
          >
            Quay lại trang chính
          </Link>
        </div>
      </Container>
    </div>
  );
}
