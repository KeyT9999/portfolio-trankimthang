export interface AwardRecord {
  docketId: string;
  title: string;
  competition: string;
  organizer: string;
  year: string;
  result: "Finalist"; // Strictly typed to Finalist
  resultDisplay: string;
  associatedProjectSlug: string;
  summary: string;
}

export const awardsData: AwardRecord[] = [
  {
    docketId: "GN-001",
    title: "Finalist – AI4SE: Prompt Your Future Competition 2025",
    competition: "AI4SE: Prompt Your Future",
    organizer: "Đại học FPT (FPT University)",
    year: "2025",
    result: "Finalist",
    resultDisplay: "Vòng Chung kết (Final Round)",
    associatedProjectSlug: "restaurant-booking-platform",
    summary:
      "Đạt thành tích Finalist tại cuộc thi AI4SE: Prompt Your Future năm 2025 do Đại học FPT tổ chức với dự án Restaurant Booking Platform tích hợp tính năng gợi ý món ăn bằng OpenAI API và kiến trúc Java Spring Boot 3.2.",
  },
];
