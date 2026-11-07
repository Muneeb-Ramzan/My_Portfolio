import Navbar from './components/ui/Navbar';
import HeroScene from './components/3d/HeroScene';
import HeroOverlay from './components/ui/HeroOverlay';
import AboutSection from './components/ui/AboutSection';
import SkillsSection from './components/ui/SkillsSection';
import ProjectsSection from './components/ui/ProjectsSection';
import ExperienceSection from './components/ui/ExperienceSection';
import ContactSection from './components/ui/ContactSection';
import AIAssistantWidget from './components/ui/AIAssistantWidget';
import Footer from './components/ui/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';

export default function App() {
  return (
    <div className="relative min-h-screen bg-cyber-darker text-slate-100 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Fixed Navigation */}
      <Navbar />

      <main>
        {/* 3D Hero Section */}
        <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
          {/* Background 3D Three.js Canvas */}
          <ErrorBoundary fallback={<div className="absolute inset-0 cyber-grid opacity-30" />}>
            <HeroScene />
          </ErrorBoundary>

          {/* Foreground UI Layer */}
          <HeroOverlay />

          {/* Bottom subtle gradient blend */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent pointer-events-none" />
        </section>

        {/* About Me Section */}
        <AboutSection />

        {/* 3D Interactive Skills Constellation & 3D Tilt Cards */}
        <SkillsSection />

        {/* 3D Projects Showcase (6 Real-World AI Creations) */}
        <ProjectsSection />

        {/* Engineering Experience Timeline, Education & Current Focus */}
        <ExperienceSection />

        {/* Interactive Collaboration Contact Portal */}
        <ContactSection />
      </main>

      {/* Floating Ask Shoaib AI Assistant */}
      <AIAssistantWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
