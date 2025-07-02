
  import { Navigation } from "@/components/Navigation";
  import { HeroSection } from "@/components/HeroSection";
  import { AboutSection } from "@/components/AboutSection";
  import { SkillsSection } from "@/components/SkillsSection";
  import { ProjectsSection } from "@/components/ProjectsSection";
  import { BlogSection } from "@/components/BlogSection";
  import { ContactSection } from "@/components/ContactSection";
  import { Footer } from "@/components/Footer";

  const Index = () => {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    );
  };

  export default Index;
