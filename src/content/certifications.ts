export interface CertificationRecord {
  docketId: string;
  title: string;
  year: string;
  issuer?: string;
  credentialId?: string;
  verificationUrl?: string;
  category: string;
}

export const certificationsData: CertificationRecord[] = [
  {
    docketId: "CN-001",
    title: "AI Agents in Java with Generative AI",
    year: "2025",
    category: "Trí tuệ nhân tạo & Java",
  },
  {
    docketId: "CN-002",
    title: "Web Design for Everybody: Basics of Web Development & Coding Specialization",
    year: "2025",
    category: "Phát triển Web & Lập trình",
  },
];
