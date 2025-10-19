import { Trophy, Award, Star, Medal } from "lucide-react";

export const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "BTech Topper with 4.55/5.0 CGPA",
      year: "2023",
      category: "Academic"
    },
    {
      icon: Award,
      title: "Research Publication",
      description: "Published in IJIRT Volume 10 Issue 11",
      year: "2024",
      category: "Research"
    },
    {
      icon: Star,
      title: "Conference Presentation",
      description: "Electronics And Communication Engineering - 2030",
      year: "2024",
      category: "Conference"
    },
    {
      icon: Medal,
      title: "Leadership Role",
      description: "Co-Founder & CTO at AI Scientists Innovations",
      year: "2024",
      category: "Leadership"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic":
        return "from-blue-500/20 to-blue-600/20 border-blue-500/30";
      case "Research":
        return "from-green-500/20 to-green-600/20 border-green-500/30";
      case "Conference":
        return "from-purple-500/20 to-purple-600/20 border-purple-500/30";
      case "Leadership":
        return "from-orange-500/20 to-orange-600/20 border-orange-500/30";
      default:
        return "from-primary/20 to-primary/30 border-primary/30";
    }
  };

  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold mb-2">Recognition and milestones</p>
          <h2 className="text-4xl md:text-5xl font-bold">Achievements & Awards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className={`group p-6 rounded-lg bg-gradient-to-br ${getCategoryColor(achievement.category)} border hover:border-primary/50 transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">{achievement.title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                        {achievement.year}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-1 bg-secondary/50 text-xs font-medium text-muted-foreground rounded border border-primary/10">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional highlights */}
        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 text-center">
          <h3 className="text-2xl font-bold mb-4">Key Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.55/5.0</div>
              <p className="text-muted-foreground">Academic Excellence</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <p className="text-muted-foreground">Research Publications</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">CTO</div>
              <p className="text-muted-foreground">Leadership Position</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
