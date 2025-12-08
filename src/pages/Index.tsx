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

const Index = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
      // Wait for page to fully load then scroll to projects
      const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          const yOffset = -60;
          const y = projectsSection.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };
      setTimeout(scrollToProjects, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Biography />
        <Skills />
        <Projects />
        <Accomplishments />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
