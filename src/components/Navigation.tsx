
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-medium text-gray-800">Raj Mishra</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("biography")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Biography
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("accomplishments")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Accomplishments
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-50"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Dark Mode + Mobile Buttons */}
          <div className="flex items-center space-x-2">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Mobile hamburger */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("biography")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Biography
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("accomplishments")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Accomplishments
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left rounded-lg hover:bg-gray-50"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
