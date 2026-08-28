import { Header, Footer } from "@/components/layout";
import { CoverSection } from "@/features/cover";
import { NewspaperSection } from "@/features/newspaper";
import { ProjectsSection } from "@/features/projects";
import { ArchiveSection } from "@/features/archive";
import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CoverSection />
        <NewspaperSection />
        <ProjectsSection />
        <ArchiveSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
