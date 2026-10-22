import { ArrowRight, Sparkles, Github, Linkedin, Move3d, GraduationCap, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function HeroOverlay() {
  const { personal, stats } = portfolioData;

  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 min-h-[92vh] flex flex-col justify-between pointer-events-none">
      {/* Top Tag & Main Hero Introduction */}
      <div className="space-y-5 max-w-3xl pointer-events-auto">
        {/* Status and Institute Badge */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{personal.status}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-panel border border-purple-500/30 text-[11px] font-mono text-purple-300">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>{personal.institute}</span>
          </div>
        </div>

        {/* Hero Title and Role */}
        <div>
          <h2 className="text-xl sm:text-2xl font-mono font-medium text-cyan-400 tracking-wide mb-1">
            Hi, I'm
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
            Muhammad <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent text-glow-cyan">
              Muneeb Ramzan
            </span>
          </h1>
        </div>

        {/* Subtitle / Role Tagline */}
        <div className="text-base sm:text-lg font-mono text-purple-200/90 font-medium">
          {personal.roleTagline}
        </div>

        {/* Short introduction paragraph */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
          {personal.heroIntro}
        </p>

        {/* Action Buttons: 'View My Projects' and 'Contact Me' */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a
            href="#projects"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-slate-950 hover:brightness-110 transition-all shadow-lg hover:shadow-cyan-500/30 group"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <a
            href="#contact"
            onClick={() => soundFX.playClick()}
            onMouseEnter={() => soundFX.playHover()}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm glass-panel border border-white/20 hover:border-cyan-400 text-slate-100 hover:text-white transition-all shadow-md group"
          >
            <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons & Location */}
        <div className="flex items-center gap-3 pt-2 text-slate-400">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            className="p-2.5 rounded-xl glass-panel hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => soundFX.playHover()}
            className="p-2.5 rounded-xl glass-panel hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 px-2 py-1 rounded-lg glass-panel">
            <MapPin className="w-3.5 h-3.5 text-pink-400" />
            <span>{personal.location}</span>
          </div>
        </div>
      </div>

      {/* Center 3D Drag / Orbit Hint */}
      <div className="self-center hidden sm:flex items-center gap-2.5 px-5 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 animate-pulse-glow my-4 shadow-lg shadow-cyan-500/10">
        <Move3d className="w-4 h-4 text-cyan-400" />
        <span>Move cursor & drag to interact with 3D Particles</span>
      </div>

      {/* Bottom Key Metric Counters */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 pt-4 pointer-events-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            onMouseEnter={() => soundFX.playHover()}
            className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all group hover:-translate-y-1 shadow-lg"
          >
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white group-hover:text-cyan-300 transition-colors">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-slate-400 mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
