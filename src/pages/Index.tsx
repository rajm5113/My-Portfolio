
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
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Biography />
        <Skills />
        <Accomplishments />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
