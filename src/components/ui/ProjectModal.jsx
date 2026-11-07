import { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, GitBranch, Cpu } from 'lucide-react';
import { soundFX } from '../../utils/audio';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        soundFX.playClick();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-3xl glass-panel bg-slate-900/95 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10 max-h-[90vh] flex flex-col">
        {/* Header Image / Visual */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 rounded-full glass-panel border border-white/20 hover:border-pink-400 text-white hover:text-pink-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category Tag */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Flagship AI Build
              </span>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Architecture Pipeline Section */}
          {project.architecture && (
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <span>End-to-End System Pipeline</span>
              </div>
              <div className="text-xs font-mono text-slate-200 bg-slate-950/70 p-3.5 rounded-xl border border-cyan-500/20 overflow-x-auto">
                {project.architecture}
              </div>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && (
            <div className="p-4 rounded-xl glass-panel border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="text-xs sm:text-sm font-mono text-emerald-300">
                <span className="text-slate-400 font-bold">Key Highlights: </span>
                {project.metrics}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technologies & Libraries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFX.playClick()}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold font-mono text-sm bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
