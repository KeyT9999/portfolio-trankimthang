export interface ProfileConfig {
  name: string;
  title: string;
  technicalFocus: string[];
  educationStatus: string;
  email: string;
  handle: string;
  location: {
    public: string;
    fullStreet?: string;
  };
  phone?: string;
  birthDate?: string;
  editorialBio: string;
  objectiveSummary: string;
  privacy: {
    showPhone: boolean;
    showBirthDate: boolean;
    showFullAddress: boolean;
  };
}

export const profileData: ProfileConfig = {
  name: "Trần Kim Thắng",
  title: "Backend Developer Intern",
  technicalFocus: ["Java", "Spring Boot", "NodeJS", "Backend Development", "Software Engineering"],
  educationStatus: "Sinh viên Kỹ thuật Phần mềm tại Đại học FPT",
  email: "trankimthang0207@gmail.com",
  handle: "KeyT9999",
  location: {
    public: "Đà Nẵng, Việt Nam",
    fullStreet: "Khu đô thị FPT, Hòa Hải, Đà Nẵng, Việt Nam",
  },
  phone: "0868 899 104",
  birthDate: "02/07/2004",
  editorialBio:
    "Sinh viên chuyên ngành Kỹ thuật Phần mềm tại Đại học FPT, định hướng chuyên sâu về phát triển hệ thống Backend với Java Spring Boot và NodeJS. Tập trung nghiên cứu xây dựng các dịch vụ web RESTful có kiến trúc chuẩn mực, cơ chế bảo mật phân quyền nghiêm ngặt và khả năng tích hợp AI thực tế.",
  objectiveSummary:
    "Sinh viên Kỹ thuật Phần mềm Đại học FPT định hướng Backend Developer, mong muốn tham gia phát triển các dự án thực tế, củng cố kỹ năng với Java Spring Boot và NodeJS, đồng thời đóng góp vào việc xây dựng các ứng dụng web hiệu năng cao và có khả năng mở rộng.",
  privacy: {
    showPhone: false, // Set to true to display phone publicly
    showBirthDate: false, // Set to true to display birth date publicly
    showFullAddress: false, // Set to true to display street-level address publicly
  },
};
