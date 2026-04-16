import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/hooks/useTypewriter";

// CSS particle background component
const ParticleBackground = () => {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 10,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    color: ["#4285f4", "#9c27b0", "#e91e63", "#ff5722", "#ff9800"][i % 5],
  }));

  return (
    <div className="particle-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.left + "%",
            background: p.color,
            animationDuration: p.duration + "s",
            animationDelay: p.delay + "s",
          }}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  const typedText = useTypewriter(
    ["Visionary", "Entrepreneur", "Problem Solver", "AI Enthusiast"],
    90,
    2200
  );

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <ParticleBackground />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="animate-fade-in mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-blue-100 hover:ring-blue-300 transition-all duration-300">
              <img
                src="/profile.png"
                alt="Raj Mishra"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-800 mb-2 leading-tight">
              Hello, I'm{" "}
              <span className="font-medium gradient-text">Raj Mishra</span>
            </h1>

            {/* Typewriter role line */}
            <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-4 h-8">
              <span className="typewriter-cursor">{typedText}</span>
            </p>

            <p className="text-lg sm:text-xl gradient-warmup mb-2 max-w-3xl mx-auto font-light">
              MCA Student at Manipal University Jaipur
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Bridging Technology and Business with focus in Data Science, AI/ML, and certifications from Google, IBM, and Microsoft
            </p>
          </div>

          <div className="animate-fade-in delay-200 mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="gradient-button-hover glow-on-hover bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="gradient-button-hover border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-lg group"
                size="lg"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1QVbK9IfpuMT95fQYuT8YtXsuLS1xx2K1/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                  Resume
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="gradient-button-hover border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-lg"
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/rajm5113"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-hover-bg glow-on-hover text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raj-mishra-4ba018202/"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-hover-bg glow-on-hover text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:raj1103mishra@gmail.com"
                className="gradient-hover-bg glow-on-hover text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
