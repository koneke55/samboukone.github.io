import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TechnologyStack } from "@/components/TechnologyStack";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <TechnologyStack />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
      
      <footer className="py-8 px-6 border-t border-primary/20 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 Sambou Kone. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
