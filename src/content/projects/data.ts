import { type ProjectDossier, ProjectDossierSchema } from "../schema";

export const rawProjects: ProjectDossier[] = [
  {
    slug: "restaurant-booking-platform",
    serial: "DA-001",
    title: "Restaurant Booking Platform",
    edition: "SỐ 001 • TRANG NHẤT",
    category: "HỆ THỐNG BACKEND & AI",
    period: {
      start: "08.2025",
      end: "11.2025",
      display: "Tháng 08 · 2025 — Tháng 11 · 2025",
    },
    role: "Backend Developer",
    summary:
      "Hệ thống đặt bàn nhà hàng trực tuyến toàn diện, xây dựng trên nền tảng Java Spring Boot 3.2, PostgreSQL, bảo mật phân quyền Spring Security & OAuth2, tích hợp thanh toán trực tuyến PayOS, nhắn tin thời gian thực WebSocket và tính năng AI gợi ý món ăn qua OpenAI API.",
    lead:
      "Dự án tập trung vào thiết kế hệ thống dịch vụ RESTful API hoàn chỉnh, kiểm soát giao dịch thanh toán trực tuyến, kênh chat thời gian thực và đạt độ bao phủ kiểm thử đơn vị trên 80% với JUnit 5, Mockito và JaCoCo.",
    featured: true,
    technologies: [
      "Java",
      "Spring Boot 3.2",
      "PostgreSQL",
      "Spring Security",
      "OAuth2",
      "PayOS API",
      "OpenAI API",
      "WebSocket",
      "Cloudinary",
      "JUnit 5",
      "Mockito",
      "JaCoCo",
    ],
    keyFeatures: [
      {
        title: "Quản lý Đặt bàn & Khách hàng",
        description:
          "Thiết kế và triển khai RESTful API phục vụ đăng ký, đăng nhập, đặt bàn trước, quản lý sơ đồ bàn tiệc và áp dụng mã giảm giá (voucher).",
      },
      {
        title: "Phân quyền Truy cập (RBAC) & OAuth2",
        description:
          "Thiết lập cơ chế phân quyền đa cấp độ (User, Customer, Admin) bao gồm quy trình phê duyệt tài khoản và quản trị bảo mật qua Spring Security & OAuth2.",
      },
      {
        title: "Cổng Thanh toán Trực tuyến PayOS",
        description:
          "Tích hợp PayOS API xử lý thanh toán trực tuyến và cơ chế tự động gửi thông báo xác nhận giao dịch cho khách hàng và ban quản trị.",
      },
      {
        title: "Trí tuệ Nhân tạo Gợi ý Món ăn",
        description:
          "Ứng dụng OpenAI API phân tích sở thích và khẩu vị của khách hàng để tự động đề xuất thực đơn và món ăn phù hợp.",
      },
      {
        title: "Kênh Chat Thời gian thực WebSocket",
        description:
          "Xây dựng kênh giao tiếp tin nhắn tức thời giữa khách hàng và nhân viên nhà hàng qua giao thức WebSocket.",
      },
      {
        title: "Lưu trữ Đa phương tiện Cloudinary",
        description:
          "Tích hợp Cloudinary để tải lên và tối ưu hóa hình ảnh món ăn, nhà hàng và tối ưu luồng xác nhận đặt bàn.",
      },
    ],
    technicalDetails: [
      {
        label: "Kiến trúc Backend & Dữ liệu",
        points: [
          "Java Spring Boot 3.2 với kiến trúc phân tầng chuẩn Controller - Service - Repository.",
          "Cơ sở dữ liệu quan hệ PostgreSQL với thiết kế bảng và chỉ mục tối ưu cho đặt chỗ và giao dịch.",
          "Cấu hình Spring Security kết hợp OAuth2 bảo vệ nghiêm ngặt các endpoint nghiệp vụ.",
        ],
      },
      {
        label: "Giao thức Realtime & Tích hợp Dịch vụ",
        points: [
          "Kênh WebSocket hai chiều cho phép trao đổi thông tin lập tức giữa thực khách và bộ phận phục vụ.",
          "Xử lý callback thanh toán bất đồng bộ từ PayOS API với cơ chế xác thực chữ ký bảo mật.",
          "Tích hợp OpenAI API với prompt engineering có cấu trúc phục vụ đề xuất thực đơn.",
        ],
      },
    ],
    testing: {
      tools: ["JUnit 5", "Mockito", "JaCoCo"],
      coverage: "Hơn 80% (Over 80%)",
      description:
        "Xây dựng bộ kiểm thử đơn vị toàn diện với JUnit 5 và Mockito cho các tầng dịch vụ nghiệp vụ, đo lường và kiểm soát chất lượng mã nguồn đạt độ bao phủ trên 80% qua công cụ JaCoCo.",
    },
    integrations: [
      {
        name: "PayOS API",
        purpose: "Xử lý thanh toán trực tuyến và phản hồi giao dịch",
      },
      {
        name: "OpenAI API",
        purpose: "Gợi ý món ăn thông minh dựa trên sở thích người dùng",
      },
      {
        name: "Cloudinary",
        purpose: "Lưu trữ và phân phối hình ảnh thực đơn tối ưu",
      },
      {
        name: "WebSocket",
        purpose: "Nhắn tin trao đổi thời gian thực",
      },
    ],
    recognition: {
      title: "AI4SE: Prompt Your Future Competition 2025",
      organizer: "Đại học FPT (FPT University)",
      level: "Finalist (Vòng Chung kết)",
    },
    coverImage: "/images/generated/leveil-economique-1934-p1-1200.webp",
  },
  {
    slug: "ebook-reading-website",
    serial: "DA-002",
    title: "Ebook Reading Website",
    edition: "SỐ 001 • TRANG 02",
    category: "HỆ THỐNG ĐỌC SÁCH & AI",
    period: {
      start: "05.2025",
      end: "08.2025",
      display: "Tháng 05 · 2025 — Tháng 08 · 2025",
    },
    role: "Full-stack Developer",
    summary:
      "Hệ thống đọc và quản lý sách điện tử trực tuyến xây dựng trên nền tảng Java Servlet, JSP và MySQL; tích hợp bảng điều khiển quản trị, phân quyền tài khoản đa cấp độ và đường ống xử lý nội dung ứng dụng trí tuệ nhân tạo (AI).",
    lead:
      "Dự án bao quát từ thiết kế và chuẩn hóa cơ sở dữ liệu MySQL, phân quyền bảo mật 3 cấp độ (Admin, User, Premium) đến tích hợp chuỗi tính năng AI: kiểm duyệt nội dung, tóm tắt sách tự động, gán nhãn thể loại và trợ lý AI thảo luận sách.",
    featured: false,
    technologies: [
      "Java Servlet",
      "JSP",
      "MySQL",
      "AI Chat Assistant",
      "AI Recommendation",
      "AI Content Moderation",
      "AI Summarization",
      "AI Auto-tagging",
    ],
    keyFeatures: [
      {
        title: "Hệ thống Đọc & Quản lý Tài khoản",
        description:
          "Cung cấp giao diện đọc sách điện tử trực quan, tính năng đăng ký, đăng nhập và quản lý thông tin hồ sơ cá nhân an toàn.",
      },
      {
        title: "Phân quyền Tài khoản 3 Cấp độ",
        description:
          "Triển khai cơ chế phân quyền bảo mật nghiêm ngặt cho 3 nhóm người dùng: Admin, User thông thường và Premium.",
      },
      {
        title: "Bảng Điều khiển Quản trị (Admin Dashboard)",
        description:
          "Xây dựng khu vực quản trị tập trung: quản lý người dùng, kiểm soát kho sách điện tử và theo dõi thống kê vận hành hệ thống.",
      },
      {
        title: "Trợ lý AI Thảo luận Sách (AI Chat Assistant)",
        description:
          "Tích hợp trợ lý đối thoại AI hỗ trợ bạn đọc trao đổi, phân tích nội dung tác phẩm và giải đáp các chủ đề trong sách.",
      },
      {
        title: "Hệ thống AI Gợi ý Tác phẩm",
        description:
          "Tự động phân tích lịch sử và sở thích của độc giả để đưa ra các đề xuất đầu sách phù hợp nhất.",
      },
      {
        title: "Đường ống Xử lý Nội dung AI (AI Pipeline)",
        description:
          "Tự động kiểm duyệt nội dung khi tải sách lên (Content Moderation), tạo bản tóm tắt nội dung tự động (Summarization) và tự động gán nhãn phân loại thể loại (Auto-tagging & Categorization).",
      },
      {
        title: "Thống kê & Đo lường Mức độ Tương tác",
        description:
          "Thu thập và phân tích dữ liệu về các đầu sách phổ biến và chỉ số tương tác của người dùng trên nền tảng.",
      },
    ],
    technicalDetails: [
      {
        label: "Nền tảng & Cấu trúc Dữ liệu",
        points: [
          "Phát triển theo mô hình MVC sử dụng Java Servlet điều phối logic và JSP hiển thị giao diện.",
          "Thiết kế, chuẩn hóa và tối ưu hóa lược đồ cơ sở dữ liệu quan hệ MySQL.",
          "Hỗ trợ triển khai thử nghiệm nội bộ (Internal demo) và giai đoạn kiểm thử hệ thống.",
        ],
      },
    ],
    integrations: [
      {
        name: "AI Recommendation & Chat Engine",
        purpose: "Trợ lý đối thoại và đề xuất tác phẩm theo ngữ cảnh",
      },
      {
        name: "AI Moderation & Tagging Pipeline",
        purpose: "Kiểm duyệt và gán nhãn dữ liệu sách tự động khi upload",
      },
    ],
    coverImage: "/images/generated/vintage-typewriter-illustration-800.webp",
  },
];

// Validate all project records against Zod schema
export const projectsData: ProjectDossier[] = rawProjects.map((p) =>
  ProjectDossierSchema.parse(p)
);

export function getProjectBySlug(slug: string): ProjectDossier | undefined {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}
