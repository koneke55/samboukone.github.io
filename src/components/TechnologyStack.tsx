export const TechnologyStack = () => {
  const technologies = [
    {
      name: "Python",
      description: "Data Science & ML",
      logo: "/python-logo.png"
    },
    {
      name: "C/C++",
      description: "System Programming",
      logo: "/cpp-logo.png"
    },
    {
      name: "MATLAB",
      description: "Scientific Computing",
      logo: "/matlab-logo.png"
    },
    {
      name: "PyTorch",
      description: "Deep Learning",
      logo: "/pytorch-logo.png"
    },
    {
      name: "TensorFlow",
      description: "Machine Learning",
      logo: "/tensorflow-logo.png"
    },
    {
      name: "React",
      description: "Frontend Development",
      logo: "/react-logo.svg"
    },
    {
      name: "Node.js",
      description: "Backend Development",
      logo: "/nodejs-logo.svg"
    },
    {
      name: "Docker",
      description: "Containerization",
      logo: "/docker-logo.svg"
    }
  ];

  // Duplicate the array to create seamless scrolling
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section id="technology-stack" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold mb-2">Technical expertise</p>
          <h2 className="text-4xl md:text-5xl font-bold">Technology Stack</h2>
        </div>

        {/* Moving Technology Cards */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="group flex-shrink-0 mx-4 p-6 rounded-lg bg-secondary/30 border border-primary/20 hover:border-primary/50 hover:bg-secondary/40 transition-all duration-300 text-center min-w-[200px]"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <h3 className="text-lg font-semibold text-primary mb-2">{tech.name}</h3>
                <p className="text-muted-foreground text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
