import Navbar from './components/ui/Navbar';
import HeroScene from './components/3d/HeroScene';
import HeroOverlay from './components/ui/HeroOverlay';
import AboutSection from './components/ui/AboutSection';
import SkillsSection from './components/ui/SkillsSection';
import ProjectsSection from './components/ui/ProjectsSection';
import ExperienceSection from './components/ui/ExperienceSection';
import ContactSection from './components/ui/ContactSection';
import Footer from './components/ui/Footer';
import AIAssistantWidget from './components/ui/AIAssistantWidget';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cyber-darker text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Navigation */}
      <Navbar />

      <main>
        {/* 3D Hero Section */}
        <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
          {/* Background 3D Three.js Canvas */}
          <HeroScene />

          {/* Foreground UI Layer */}
          <HeroOverlay />

          {/* Bottom subtle gradient blend */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent pointer-events-none" />
        </section>

        {/* Specifications & About */}
        <AboutSection />

        {/* 3D Interactive Skills Constellation */}
        <SkillsSection />

        {/* 3D Projects Showcase */}
        <ProjectsSection />

        {/* Engineering Experience Timeline */}
        <ExperienceSection />

        {/* Interactive Hologram Contact Portal */}
        <ContactSection />
      </main>

      {/* Floating Interactive AI Assistant */}
      <AIAssistantWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
