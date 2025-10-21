export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl w-full">
        <div className="mb-12 text-center">
          <p className="text-primary text-sm font-semibold mb-2">My background and journey</p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dual full time Bachelor's degree holder in Computer Science and Electronics & Communication passionate about 
                Data Science and Machine Learning / Deep Learning with a focus on AI driven Data Solutions with strong 
                motivation in Research on Cognitive Science.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently serving as Co-Founder & CTO at AI Scientists Innovations and Data Analyst at ObjectWays Technology, I specialize in vision-language models, transformer architectures, and advanced deep learning techniques. My work bridges the gap between theoretical AI research and practical industrial applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My academic foundation includes a BTech in Electronics and Communication from Jain University (Topper with 4.55/5.0 CGPA) and ongoing Master's studies in Computer Science. I have published research on Smart Battery Management Systems using Deep Learning and continue to explore cognitive science applications in AI.
              </p>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 rounded-lg bg-secondary/30 border border-green-500/20">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-medium">Available for work and research collaborations</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-secondary/30 border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-2 text-primary">Education</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• BTech - Electronics and Communication @ Jain University, Bangalore, India</li>
                <li>• Bachelor - Computer Engineering and Telecom @ National School of Engineering, Bamako Mali</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-secondary/30 border border-primary/20 hover:border-primary/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-primary">Research Focus & Expertise</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">AI-Driven Data Solutions</span>
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-full h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Medical AI & Computer Vision</span>
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cognitive Science Research</span>
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-4/5 lsh-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Smart & Autonomous Systems</span>
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Multilingual NLP & Computational Linguistics</span>
                  <div className="w-20 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="w-5/6 h-full bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
