
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/path-to-your-resume.pdf";
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Raj_Mishra_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Optional Profile Image */}
          <div className="animate-fade-in mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              {/* Replace with your actual image */}
              <img 
                src="/placeholder.svg" 
                alt="Raj Mishra" 
                className="w-full h-full object-cover"
              />
              {/* Fallback if no image */}
              {/* <span className="text-gray-400 text-sm">Your Photo</span> */}
            </div>
          </div>

          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-800 mb-6 leading-tight">
              Hello, I'm{" "}
              <span className="font-medium gradient-text">
                Raj Mishra
              </span>
            </h1>
            <p className="text-xl sm:text-2xl gradient-warmup mb-4 max-w-3xl mx-auto font-light">
              Student at PW IOI Institute of Innovation
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
              2nd Semester, 1st Year - School of Management in Entrepreneurship & Technology. Specializing in AI/ML, Data Science, and Business Strategy.
            </p>
          </div>

          <div className="animate-fade-in delay-200 mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="gradient-button-hover bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-base font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group"
                size="lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleResumeDownload}
                variant="outline"
                className="gradient-button-hover border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-lg group"
                size="lg"
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
                Resume
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
                className="gradient-hover-bg text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/raj-mishra-4ba018202/"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-hover-bg text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:raj1103mishra@gmail.com"
                className="gradient-hover-bg text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-lg"
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
