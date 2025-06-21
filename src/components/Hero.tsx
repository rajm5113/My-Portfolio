
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-google-gray-800 mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="font-medium">
                <span className="text-google-blue">Your</span>{" "}
                <span className="text-google-red">Name</span>
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-google-gray-600 mb-4 max-w-3xl mx-auto font-light">
              Student at PW IOI Institute of Innovation
            </p>
            <p className="text-lg text-google-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              Pursuing Entrepreneurship, Management & Technology with specializations from Google, IBM, Microsoft, and more
            </p>
          </div>

          <div className="animate-fade-in delay-200 mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-google-blue hover:bg-blue-600 text-white px-8 py-3 text-base font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-google-gray-300 text-google-gray-700 hover:bg-google-gray-50 px-8 py-3 text-base font-medium rounded-lg"
                size="lg"
              >
                Get in Touch
              </Button>
            </div>
          </div>

          <div className="animate-fade-in delay-300">
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-google-gray-500 hover:text-google-gray-700 transition-colors p-2"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-google-gray-500 hover:text-google-gray-700 transition-colors p-2"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-google-gray-500 hover:text-google-gray-700 transition-colors p-2"
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
