import { Header, Footer } from "@/components/layout";
import { CoverSection } from "@/features/cover";
import { NewspaperSection } from "@/features/newspaper";
import { ProjectsSection } from "@/features/projects";
import { TechnicalCapabilitiesSection } from "@/features/skills";
import { ArchiveSection } from "@/features/archive";
import { AboutSection } from "@/features/about";
import { ContactSection } from "@/features/contact";

// Force dev server refresh - Phase 03.13
export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <CoverSection />
        <NewspaperSection />
        <ProjectsSection />
        <TechnicalCapabilitiesSection />
        <ArchiveSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

