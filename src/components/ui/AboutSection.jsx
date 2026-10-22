import { Sparkles, Terminal, Workflow, Database, Cpu, TrendingUp, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function AboutSection() {
  const { personal, currentFocus } = portfolioData;

  const pillars = [
    {
      icon: Sparkles,
      title: "Generative AI & RAG",
      desc: "Architecting Retrieval-Augmented Generation systems with vector embeddings, chunking strategies, and contextual hallucination prevention.",
      accent: "text-cyan-400",
      border: "hover:border-cyan-400/50"
    },
    {
      icon: Workflow,
      title: "AI Agents & LangChain",
      desc: "Building autonomous agentic workflows, multi-agent collaboration with LangGraph, tool invocation, and contextual conversation memory.",
      accent: "text-purple-400",
      border: "hover:border-purple-400/50"
    },
    {
      icon: Terminal,
      title: "Python & Machine Learning",
      desc: "Developing backend services, predictive ML pipelines, data manipulation with Pandas & NumPy, and high-performance APIs.",
      accent: "text-pink-400",
      border: "hover:border-pink-400/50"
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Marketing",
      desc: "Blending deep technical AI expertise with organic SEO indexing, growth marketing strategies, and modern responsive web development.",
      accent: "text-emerald-400",
      border: "hover:border-emerald-400/50"
    }
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-md">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>DISCOVER MY JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full" />
        </div>

        {/* Two-column layout: Bio Card + Highlight Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Bio Text Container */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed relative z-10">
              <p className="text-lg text-white font-medium">
                I am <strong className="text-cyan-400 font-semibold">Muhammad Muneeb Ramzan</strong>, an AI Software Developer who has successfully completed specialized Artificial Intelligence training at <span className="text-purple-300 font-medium">Adan Institute of Technology, Islamabad</span>. I am passionate about Artificial Intelligence and enjoy building intelligent systems that solve real-world problems.
              </p>
              <p>
                My current focus includes <strong className="text-white">Python, Machine Learning, Generative AI, RAG systems, LangChain, AI agents, chatbots, and automation</strong>. I also have experience and knowledge in <strong className="text-white">Digital Marketing, SEO, HTML, and CSS</strong>.
              </p>
              <p className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 font-mono text-xs sm:text-sm">
                "I believe in learning by building projects and continuously improving my technical skills."
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                AI Training Completed
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                LangChain & LangGraph
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Retrieval-Augmented Generation
              </span>
            </div>
          </div>

          {/* Current Focus Grid Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-purple-500/30 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-400" />
                    <span>Current Focus Areas</span>
                  </h3>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/30">
                    2026 ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentFocus.map((item, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => soundFX.playHover()}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all group"
                    >
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>Continuously Learning & Building</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                onMouseEnter={() => soundFX.playHover()}
                className={`glass-panel p-6 rounded-2xl border border-white/10 ${f.border} hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${f.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {f.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
                <div className="pt-6 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/80">
                  <span>ACTIVE_CAPABILITY</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
