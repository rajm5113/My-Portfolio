import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Biography } from "@/components/Biography";
import { Skills } from "@/components/Skills";
import { Accomplishments } from "@/components/Accomplishments";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StatsCounter } from "@/components/StatsCounter";

// Reusable scroll-reveal wrapper
const ScrollReveal = ({
  children,
  animation = "scroll-fade-up",
  className = "",
}: {
  children: React.ReactNode;
  animation?: string;
  className?: string;
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("." + animation.split(" ")[0]);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [animation]);

  return (
    <div className={animation + " " + className}>
      {children}
    </div>
  );
};

const Index = () => {
  useEffect(() => {
    // Scroll animation observer for all scroll-fade-up elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedEls = document.querySelectorAll(
      ".scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .stagger-children"
    );
    animatedEls.forEach((el) => observer.observe(el));

    // Handle hash-based deep linking (e.g., /#projects)
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }

    // Handle query param category scrolling
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    if (category) {
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          const yOffset = -60;
          const y = projectsSection.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 500);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />

        {/* Wave divider after Hero */}
        <div className="wave-divider bg-white">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f9fafb" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>

        <div className="scroll-fade-up">
          <Biography />
        </div>

        {/* Stats counter between Biography and Skills */}
        <StatsCounter />

        {/* Wave divider */}
        <div className="wave-divider bg-gray-50">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,30 C360,0 1080,60 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>

        <div className="scroll-fade-up">
          <Skills />
        </div>

        <div className="scroll-fade-up">
          <Projects />
        </div>

        {/* Wave divider before Accomplishments */}
        <div className="wave-divider bg-gray-50">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z" />
          </svg>
        </div>

        <div className="scroll-fade-up">
          <Accomplishments />
        </div>

        <div className="scroll-fade-up">
          <Services />
        </div>

        <div className="scroll-fade-up">
          <Contact />
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
