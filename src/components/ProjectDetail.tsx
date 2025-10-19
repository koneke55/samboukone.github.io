import { useState } from "react";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";

export const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectId } = useParams<{ projectId: string }>();

  // Project data - in a real app, this would come from an API
  const projects = [
    {
      id: "smart-battery-management",
      year: "2024",
      title: "Smart Battery Management System for Portable Devices",
      journal: "IJIRT Volume 10 Issue 11",
      description: "Machine Learning-based BMS to enhance battery life. Deep learning models estimated SoC, SoH, and RUL with high accuracy using Python, TensorFlow, and Scikit-learn.",
      tags: ["Deep Learning", "Python", "TensorFlow"],
      images: ["/bms-prototype.jpg", "/bms-dashboard.png", "/bms-circuit.jpeg"],
      githubLink: "https://github.com/koneke55/cnn-sbms-ml",
      details: {
        overview: "This project presents a comprehensive Smart Battery Management System (BMS) designed for portable devices, leveraging machine learning techniques to optimize battery performance and extend device lifespan.",
        features: [
          "Real-time State of Charge (SoC) estimation",
          "State of Health (SoH) monitoring",
          "Remaining Useful Life (RUL) prediction",
          "Adaptive charging algorithms",
          "Temperature compensation",
          "Overcharge/overdischarge protection"
        ],
        technologies: [
          "Python 3.8+",
          "TensorFlow 2.x",
          "Scikit-learn",
          "NumPy & Pandas",
          "Matplotlib & Seaborn",
          "Arduino IDE",
          "C++ for embedded systems"
        ],
        methodology: "The system employs deep learning models trained on extensive battery datasets to predict battery states with high accuracy. The BMS integrates seamlessly with portable devices, providing real-time monitoring and optimization capabilities.",
        results: "Achieved 95%+ accuracy in SoC estimation and 90%+ accuracy in SoH prediction, resulting in 20% improvement in battery lifespan."
      }
    },
    {
      id: "bpe-tokenizer",
      year: "2024",
      title: "BPE Tokenizer for Bamanakan Language",
      journal: "NLP Research Project",
      description: "A clean, research-grade Byte Pair Encoding (BPE) tokenizer built from scratch for the Bambara language. Designed for linguists, NLP researchers, and developers working on Mande language processing.",
      tags: ["NLP", "Python", "BPE", "Bambara", "Tokenization"],
      images: ["/bpe_tokenizer.PNG", "/bpe-code.jpg", "/bpe-results.png"],
      githubLink: "https://github.com/koneke55/BPE_Tokenizer_Bamanakan_language",
      details: {
        overview: "This project develops a specialized Byte Pair Encoding (BPE) tokenizer for the Bambara language, addressing the lack of proper tokenization tools for Mande languages in NLP research.",
        features: [
          "Custom BPE algorithm implementation",
          "Bambara language corpus processing",
          "Vocabulary optimization",
          "Subword tokenization",
          "Encoding/decoding functionality",
          "Performance benchmarking"
        ],
        technologies: [
          "Python 3.9+",
          "Regular Expressions",
          "Unicode handling",
          "Statistical analysis",
          "Corpus linguistics tools",
          "Jupyter Notebooks"
        ],
        methodology: "The tokenizer processes Bambara text corpora to learn optimal subword units, enabling better handling of morphological variations and improving downstream NLP task performance.",
        results: "Successfully tokenized 50,000+ Bambara sentences with 95% accuracy, enabling effective NLP research on Mande languages."
      }
    },
    {
      id: "ai-derma-doctor",
      year: "2024",
      title: "AI-Derma-Doctor",
      journal: "AI-Powered Dermatology Assistant",
      description: "Advanced AI system for dermatological diagnosis using computer vision and deep learning. Provides accurate skin condition analysis and treatment recommendations.",
      tags: ["Computer Vision", "Deep Learning", "Medical AI", "Python"],
      images: ["/ai-derma-doctor.jpg", "/skin-analysis.jpg", "/diagnosis-ui.jpg"],
      githubLink: "https://github.com/koneke55/cnn-sbms-ml",
      details: {
        overview: "AI-Derma-Doctor is an innovative medical AI system that assists dermatologists in diagnosing skin conditions through advanced computer vision and deep learning techniques.",
        features: [
          "Skin lesion classification",
          "Disease severity assessment",
          "Treatment recommendation engine",
          "Patient history integration",
          "Real-time image analysis",
          "Confidence scoring system"
        ],
        technologies: [
          "Python 3.8+",
          "PyTorch",
          "OpenCV",
          "Medical imaging libraries",
          "Docker",
          "FastAPI",
          "React frontend"
        ],
        methodology: "The system uses convolutional neural networks trained on extensive dermatological datasets to classify skin conditions with high accuracy, providing valuable support to medical professionals.",
        results: "Achieved 92% accuracy in skin condition classification across 20+ common dermatological conditions."
      }
    },
    {
      id: "cotton-wool-detection",
      year: "2023",
      title: "Cotton Wool Detection for Diabetic Retinopathy",
      journal: "ECE Department Research Project",
      description: "Minor project focused on detecting cotton wool spots in retinal images for early diabetic retinopathy diagnosis using computer vision techniques.",
      tags: ["Computer Vision", "Medical AI", "Image Processing"],
      images: ["/cotton-wool-detection.JPG", "/retinal-image.jpg", "/detection-results.JPG"],
      githubLink: "",
      details: {
        overview: "This project focuses on early detection of diabetic retinopathy by identifying cotton wool spots in retinal fundus images using advanced computer vision techniques.",
        features: [
          "Retinal image preprocessing",
          "Cotton wool spot detection",
          "Feature extraction",
          "Classification algorithms",
          "Severity assessment",
          "Report generation"
        ],
        technologies: [
          "Python 3.7+",
          "OpenCV",
          "Scikit-image",
          "NumPy",
          "Matplotlib",
          "Jupyter Notebooks"
        ],
        methodology: "The system processes retinal fundus images to detect cotton wool spots, which are early indicators of diabetic retinopathy, enabling timely medical intervention.",
        results: "Successfully detected cotton wool spots with 88% accuracy, aiding in early diabetic retinopathy diagnosis."
      }
    },
    {
      id: "voice-recognition",
      year: "2020",
      title: "Human Voice Recognition System",
      journal: "Master's Final Project",
      description: "Feed Forward Neural Networks for platform voice recognition. Implemented using PyTorch with MFCC/FBANK features for audio processing.",
      tags: ["Neural Networks", "PyTorch", "Audio Processing", "MFCC"],
      images: ["/voice-recognition.jpg", "/neural-network.JPG", "/audio-processing.JPG"],
      githubLink: "",
      details: {
        overview: "A comprehensive voice recognition system using feed-forward neural networks, designed for speaker identification and voice command recognition.",
        features: [
          "Speaker identification",
          "Voice command recognition",
          "MFCC feature extraction",
          "FBANK feature processing",
          "Neural network training",
          "Real-time processing"
        ],
        technologies: [
          "Python 3.6+",
          "PyTorch",
          "Librosa",
          "NumPy",
          "Scipy",
          "Matplotlib"
        ],
        methodology: "The system extracts MFCC and FBANK features from audio signals and uses feed-forward neural networks to classify speakers and recognize voice commands.",
        results: "Achieved 85% accuracy in speaker identification and 90% accuracy in voice command recognition."
      }
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center gap-4 mb-6">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="border-primary/20 hover:border-primary/40"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {project.title}
                  </h1>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      <span>{project.journal}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.githubLink && (
                <Button asChild className="mr-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              )}
            </div>
            
            <div className="w-full lg:w-96">
              <img 
                src={project.images?.[0] || "/placeholder.jpg"} 
                alt={project.title}
                className="w-full h-64 object-cover rounded-lg border border-primary/20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.overview}
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.details.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Methodology</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.methodology}
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Results</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.results}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
