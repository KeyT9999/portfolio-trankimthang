export interface EducationRecord {
  docketId: string;
  institution: string;
  major: string;
  period: {
    start: string;
    end: string;
    display: string;
  };
  gpa: {
    score: string;
    scale: string;
  };
  status: string;
  description: string;
}

export const educationData: EducationRecord = {
  docketId: "HV-001",
  institution: "Đại học FPT (FPT University)",
  major: "Kỹ thuật Phần mềm (Software Engineering)",
  period: {
    start: "09.2022",
    end: "01.2027",
    display: "Tháng 09 · 2022 — Tháng 01 · 2027",
  },
  gpa: {
    score: "3.0",
    scale: "4.0",
  },
  status: "Đang theo học (Sinh viên)",
  description:
    "Đào tạo chính quy chuyên ngành Kỹ thuật Phần mềm, tập trung vào cấu trúc dữ liệu và giải thuật, lập trình hướng đối tượng, kiến trúc hệ thống phân tán, kiểm thử phần mềm và phát triển ứng dụng web trên nền tảng Java & NodeJS.",
};
