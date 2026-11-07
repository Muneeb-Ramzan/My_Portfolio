import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Sparkles, FolderGit2, Briefcase, Mail, User } from 'lucide-react';
import SoundToggle from './SoundToggle';
import { soundFX } from '../../utils/audio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Skills 3D', href: '#skills', icon: Sparkles },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const handleLinkClick = () => {
    soundFX.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-panel bg-slate-950/85 border-b border-cyan-500/20 py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={() => soundFX.playClick()}
          onMouseEnter={() => soundFX.playHover()}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-0.5 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:text-pink-400 transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-cyan-300 transition-colors">
              SHOAIB<span className="text-cyan-400">.AI</span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">AI Developer Trainee</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Audio Controls */}
        <div className="flex items-center gap-3">
          <SoundToggle />

          <a
            href="#contact"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 transition-all shadow-md hover:shadow-cyan-500/30"
          >
            Connect
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel bg-slate-950/95 border-b border-cyan-500/20 px-6 py-6 mt-2 space-y-4 animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center py-3 rounded-xl font-bold font-mono text-xs bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
