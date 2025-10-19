import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ProjectsSection = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      id: "smart-battery-management",
      year: "2024",
      title: "Smart Battery Management System for Portable Devices",
      journal: "IJIRT Volume 10 Issue 11",
      description: "Machine Learning-based BMS to enhance battery life. Deep learning models estimated SoC, SoH, and RUL with high accuracy using Python, TensorFlow, and Scikit-learn.",
      tags: ["Deep Learning", "Python", "TensorFlow"],
      images: ["/bms-prototype.jpg", "/bms-dashboard.png", "/bms-circuit.jpeg"], // Multiple images
      githubLink: "https://github.com/koneke55/cnn-sbms-ml"
    },
    {
      id: "bpe-tokenizer",
      year: "2024",
      title: "BPE Tokenizer for Bamanakan Language",
      journal: "NLP Research Project",
      description: "A clean, research-grade Byte Pair Encoding (BPE) tokenizer built from scratch for the Bambara language. Designed for linguists, NLP researchers, and developers working on Mande language processing.",
      tags: ["NLP", "Python", "BPE", "Bambara", "Tokenization"],
      images: ["/bpe_tokenizer.PNG", "/bpe-code.jpg", "/bpe-results.png"], // Multiple images
      githubLink: "https://github.com/koneke55/BPE_Tokenizer_Bamanakan_language"
    },
    {
      id: "ai-derma-doctor",
      year: "2024",
      title: "AI-Derma-Doctor",
      journal: "AI-Powered Dermatology Assistant",
      description: "Advanced AI system for dermatological diagnosis using computer vision and deep learning. Provides accurate skin condition analysis and treatment recommendations.",
      tags: ["Computer Vision", "Deep Learning", "Medical AI", "Python"],
      images: ["/ai-derma-doctor.jpg", "/skin-analysis.jpg", "/diagnosis-ui.jpg"], // Multiple images
      githubLink: "https://github.com/koneke55/cnn-sbms-ml"
    },
    {
      id: "cotton-wool-detection",
      year: "2023",
      title: "Cotton Wool Detection for Diabetic Retinopathy",
      journal: "ECE Department Research Project",
      description: "Minor project focused on detecting cotton wool spots in retinal images for early diabetic retinopathy diagnosis using computer vision techniques.",
      tags: ["Computer Vision", "Medical AI", "Image Processing"],
      images: ["/cotton-wool-detection.JPG", "/retinal-image.jpg", "/detection-results.JPG"], // Multiple images
      githubLink: ""
    },
    {
      id: "voice-recognition",
      year: "2020",
      title: "Human Voice Recognition System",
      journal: "Master's Final Project",
      description: "Feed Forward Neural Networks for platform voice recognition. Implemented using PyTorch with MFCC/FBANK features for audio processing.",
      tags: ["Neural Networks", "PyTorch", "DSP"],
      images: ["/voice-recognition.jpg", "/neural-network.JPG", "/audio-processing.JPG"], // Multiple images
      githubLink: ""
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold mb-2">My work and research</p>
          <h2 className="text-4xl md:text-5xl font-bold">Projects & Publications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-secondary/30 border border-primary/20 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Images */}
              {project.images && project.images.length > 0 ? (
                <div className="mb-4">
                  {/* Main Image */}
                  <div className="rounded-lg overflow-hidden mb-2">
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Additional Images Grid */}
                  {project.images.length > 1 && (
                    <div className="grid grid-cols-2 gap-2">
                      {project.images.slice(1, 3).map((img, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden">
                          <img 
                            src={img} 
                            alt={`${project.title} ${imgIndex + 2}`}
                            className="w-full h-20 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : project.image ? (
                <div className="mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : null}
              
              <div className="mb-4">
                <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                  {project.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-primary/80 mb-3 font-medium">
                {project.journal}
              </p>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded bg-primary/5 border border-primary/20 text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                {project.githubLink && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex-1 group-hover:text-primary"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1 group-hover:text-primary"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/30 text-center">
          <h3 className="text-2xl font-bold mb-2">Conference Presentations</h3>
          <p className="text-muted-foreground mb-4">
            'Electronics And Communication Engineering - 2030'
          </p>
          <p className="text-sm text-muted-foreground">
            Presented at Jain University's ECE Department Avalanche Club, Bangalore (March 2023)
          </p>
        </div>
      </div>
    </section>
  );
};
