import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { TypewriterName } from "./TypewriterName";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Floating code symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[15%] text-primary/20 text-2xl animate-float" style={{ animationDelay: "0s" }}>&lt;&gt;</div>
        <div className="absolute top-[30%] right-[20%] text-primary/20 text-2xl animate-float" style={{ animationDelay: "1s" }}>&#123; &#125;</div>
        <div className="absolute bottom-[25%] left-[25%] text-primary/20 text-2xl animate-float" style={{ animationDelay: "2s" }}>&lt;/&gt;</div>
        <div className="absolute bottom-[35%] right-[15%] text-primary/20 text-2xl animate-float" style={{ animationDelay: "1.5s" }}>( )</div>
        <div className="absolute top-[15%] right-[35%] text-primary/30 text-lg animate-float" style={{ animationDelay: "0.5s" }}>■</div>
        <div className="absolute bottom-[20%] left-[40%] text-primary/30 text-lg animate-float" style={{ animationDelay: "2.5s" }}>●</div>
        <div className="absolute top-[40%] left-[10%] text-primary/30 text-lg animate-float" style={{ animationDelay: "1.2s" }}>▲</div>
        <div className="absolute top-[50%] right-[10%] text-primary/30 text-lg animate-float" style={{ animationDelay: "0.8s" }}>◆</div>
      </div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left content */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block mt-8">
            <span className="px-3 py-2 md:px-4 md:py-2 rounded-full bg-secondary/50 border border-primary/20 text-xs md:text-sm text-muted-foreground">
              Machine Learning Engineer & Data Analyst
            </span>
          </div>

          <div className="inline-block">
            <a 
              href="https://www.aiscientists-innov.com/services/services-2/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-3 py-2 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/30 text-xs md:text-sm text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group"
            >
              CTO @ AI Scientists Innovations
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
              <TypewriterName 
                text="Hi, I'm Sambou Kone"
                speed={80}
                className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent"
              />
            </h1>
          </div>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            Passionate about advancing AI-driven solutions in medical diagnostics, smart autonomous systems, and multilingual NLP. Bridging cutting-edge research with real-world applications to solve complex challenges.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4">
            <Button 
              variant="hero" 
              size="default" 
              className="group text-sm md:text-base"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              View Projects
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              size="default" 
              className="text-sm md:text-base"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex gap-4 pt-4">
            <a 
              href="https://github.com/koneke55" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sambou-kone-843bb6218" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://twitter.com/koneke55" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:samboukone99@gmail.com"
              className="p-3 rounded-lg bg-secondary/50 border border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Right content - Profile Image */}
        <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-primary-glow opacity-30 blur-2xl animate-pulse-glow"></div>
            
            {/* Profile image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full border-4 border-primary overflow-hidden shadow-[var(--shadow-glow)]">
              <img 
                src={profileImage} 
                alt="Sambou Kone" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Available badge */}
            <div className="absolute bottom-8 right-8 px-4 py-2 rounded-full bg-card border border-green-500/30 flex items-center gap-2 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-medium">Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
