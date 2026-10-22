import { ArrowUp, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/95 py-14 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand & Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                Muhammad Muneeb Ramzan
              </span>
            </div>

            <div className="text-xs font-mono text-cyan-300">
              {personal.roleTagline}
            </div>

            <div className="text-xs font-mono text-purple-400 flex items-center gap-1.5 pt-1">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>Building. Learning. Innovating.</span>
            </div>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#about"
              onClick={() => soundFX.playClick()}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => soundFX.playClick()}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              Skills 3D
            </a>
            <a
              href="#projects"
              onClick={() => soundFX.playClick()}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => soundFX.playClick()}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={() => soundFX.playClick()}
              className="text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
            >
              Contact
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFX.playHover()}
              className="p-2.5 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-slate-300 hover:text-white transition-all shadow-md ml-2"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          
          <div className="flex items-center gap-4">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${personal.socials.email}`}
              className="hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
