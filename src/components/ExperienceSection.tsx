import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      period: "11/2024 – Present",
      title: "Co-Founder & CTO",
      company: "Super DataInsights & AI Scientists Innovations",
      location: "Bamako",
      description: "Vision-language models extend capabilities by combining text and image analysis for deeper multimodal understanding. Transformers, Attention, Tokenization, Embeddings, Fine-tuning, Prompt Engineering, RAG, RLHF."
    },
    {
      period: "11/2024 – Present",
      title: "Data Analyst - Full Time (Remote)",
      company: "ObjectWays Technologies",
      location: "Chennai, Tamil Nadu",
      description: "Responsible for cleaning and pre-processing Speech-to-Text transcript files for French CCP customer care. Main objective: label and annotate data while applying redaction and masking techniques to protect personal information."
    },
    {
      period: "4/2023 – 10/2024",
      title: "Business Development Intern",
      company: "BrightChamps Private Limited",
      location: "Bangalore",
      description: "Converted hot leads into closed deals, driving revenue growth. Built strong client relationships to accelerate deal closure. Dealt with Middle East Region and UK customers."
    },
    {
      period: "10/2020 – 2/2022",
      title: "Network Systems Engineer Intern",
      company: "Celeste Telecom Mali Sarl",
      location: "Bamako",
      description: "Assessed business communication needs and recommended PABX/VoIP solutions. Skilled in L2/L3 protocols (BGP, OSPF, EIGRP, RIP, VLAN, STP, VTP) and SD-WAN/SONiC."
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold mb-2">My professional journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-secondary/30 border border-primary/20 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 inline-block self-start">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-16">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
