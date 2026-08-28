export interface SkillCategory {
  id: string;
  name: string;
  kicker: string;
  items: Array<{
    name: string;
    level?: string;
    note?: string;
    isCoreDirection?: boolean;
    provenInProjects?: string[];
  }>;
}

export const skillsData: SkillCategory[] = [
  {
    id: "backend",
    name: "Phát triển Backend & Frameworks",
    kicker: "01 / BACKEND & RUNTIMES",
    items: [
      {
        name: "Java",
        note: "Ngôn ngữ cốt lõi phát triển dịch vụ",
        provenInProjects: ["restaurant-booking-platform", "ebook-reading-website"],
      },
      {
        name: "Spring Boot 3.2",
        note: "Xây dựng RESTful API, cấu hình bảo mật và dịch vụ",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "Java Servlet & JSP",
        note: "Phát triển ứng dụng web đa tầng",
        provenInProjects: ["ebook-reading-website"],
      },
      {
        name: "NodeJS",
        isCoreDirection: true,
        note: "Định hướng kỹ thuật chuyên sâu",
      },
    ],
  },
  {
    id: "database",
    name: "Cơ sở Dữ liệu & Lưu trữ",
    kicker: "02 / DATABASE",
    items: [
      {
        name: "PostgreSQL",
        note: "Thiết kế lược đồ quan hệ và tối ưu truy vấn",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "MySQL",
        note: "Thiết kế và chuẩn hóa schema dữ liệu",
        provenInProjects: ["ebook-reading-website"],
      },
    ],
  },
  {
    id: "security",
    name: "Bảo mật & Xác thực Phân quyền",
    kicker: "03 / AUTH & SECURITY",
    items: [
      {
        name: "Spring Security",
        note: "Cấu hình bảo vệ tài nguyên và lọc yêu cầu",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "OAuth2",
        note: "Xác thực người dùng an toàn",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "Role-Based Access Control (RBAC)",
        note: "Phân quyền User / Customer / Admin / Premium",
        provenInProjects: ["restaurant-booking-platform", "ebook-reading-website"],
      },
    ],
  },
  {
    id: "api-realtime",
    name: "Giao thức API & Thời gian thực",
    kicker: "04 / API & REALTIME",
    items: [
      {
        name: "RESTful APIs",
        note: "Thiết kế chuẩn endpoint nghiệp vụ",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "WebSocket",
        note: "Kênh giao tiếp tin nhắn tức thời hai chiều",
        provenInProjects: ["restaurant-booking-platform"],
      },
    ],
  },
  {
    id: "ai-integration",
    name: "Tích hợp Trí tuệ Nhân tạo (AI)",
    kicker: "05 / AI INTEGRATION",
    items: [
      {
        name: "OpenAI API",
        note: "Tích hợp mô hình ngôn ngữ lớn vào nghiệp vụ",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "AI Recommendation System",
        note: "Gợi ý món ăn và sách theo sở thích người dùng",
        provenInProjects: ["restaurant-booking-platform", "ebook-reading-website"],
      },
      {
        name: "AI Content Pipeline",
        note: "Kiểm duyệt nội dung, tóm tắt và tự động gán nhãn",
        provenInProjects: ["ebook-reading-website"],
      },
      {
        name: "AI Chat Assistant",
        note: "Trợ lý đối thoại thảo luận nội dung",
        provenInProjects: ["ebook-reading-website"],
      },
    ],
  },
  {
    id: "testing",
    name: "Kiểm thử & Đảm bảo Chất lượng",
    kicker: "06 / TESTING & QUALITY",
    items: [
      {
        name: "JUnit 5",
        note: "Kiểm thử đơn vị (Unit testing)",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "Mockito",
        note: "Mocking phụ thuộc dịch vụ và repository",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "JaCoCo",
        note: "Đo lường độ bao phủ mã nguồn (>80% Code Coverage)",
        provenInProjects: ["restaurant-booking-platform"],
      },
    ],
  },
  {
    id: "services",
    name: "Dịch vụ Tích hợp & Lưu trữ Media",
    kicker: "07 / INTEGRATIONS",
    items: [
      {
        name: "PayOS API",
        note: "Tích hợp cổng thanh toán trực tuyến & thông báo giao dịch",
        provenInProjects: ["restaurant-booking-platform"],
      },
      {
        name: "Cloudinary",
        note: "Tải lên và tối ưu hóa tệp tin đa phương tiện",
        provenInProjects: ["restaurant-booking-platform"],
      },
    ],
  },
];
