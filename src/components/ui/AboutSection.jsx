import { Sparkles, Terminal, Workflow, Database, Cpu, TrendingUp, Code2, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function AboutSection() {
  const { personal, currentFocus } = portfolioData;

  const pillars = [
    {
      icon: Sparkles,
      title: "Generative AI & RAG",
      desc: "Architecting Retrieval-Augmented Generation pipelines with vector embeddings, intelligent chunking, and contextual hallucination prevention.",
      accent: "text-cyan-400",
      border: "hover:border-cyan-400/50"
    },
    {
      icon: Workflow,
      title: "AI Agents & LangChain",
      desc: "Engineering autonomous agentic workflows, multi-agent collaboration with LangGraph, cyclic reasoning, and automated tool invocation.",
      accent: "text-purple-400",
      border: "hover:border-purple-400/50"
    },
    {
      icon: Terminal,
      title: "Python & Machine Learning",
      desc: "Developing backend services, predictive ML pipelines, deep neural architectures, and data manipulation with Pandas & NumPy.",
      accent: "text-pink-400",
      border: "hover:border-pink-400/50"
    },
    {
      icon: Code2,
      title: "Web & Automation Systems",
      desc: "Crafting modern, accessible web experiences with HTML and CSS, integrated with intelligent conversational chatbots and automated workflows.",
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
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed relative z-10">
              <p className="text-lg text-white font-medium">
                I am <strong className="text-cyan-400 font-semibold">Shoaib Raoof</strong>, an AI student and AI Software Developer Trainee at <span className="text-purple-300 font-medium">Adan Institute of Technology, Islamabad</span>. I am passionate about Artificial Intelligence and enjoy learning how intelligent systems can solve real-world problems.
              </p>
              <p>
                My current focus includes <strong className="text-white">Python, Machine Learning, Generative AI, RAG systems, LangChain, AI agents, chatbots</strong>. I also have experience and knowledge of <strong className="text-white">HTML and CSS</strong>.
              </p>
              <p className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 font-mono text-xs sm:text-sm">
                "I believe in learning by building projects and continuously improving my technical skills."
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 relative z-10 mt-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                AI Software Developer Trainee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                LangChain & LangGraph
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                Retrieval-Augmented Generation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
                Multi-Agent Systems
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
                <p className="text-xs text-slate-400 mb-4">
                  Core disciplines and engineering paradigms under active daily development:
                </p>

                <div className="space-y-3">
                  {currentFocus.map((focus, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => soundFX.playHover()}
                      className="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-400/40 transition-all flex items-start gap-3 group"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 group-hover:scale-110 transition-transform">
                        <span className="text-xs font-mono text-purple-300 font-bold">0{i + 1}</span>
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {focus.name}
                        </div>
                        <div className="text-[11px] text-slate-400 leading-snug">
                          {focus.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                onMouseEnter={() => soundFX.playHover()}
                className={`glass-panel p-6 rounded-3xl border border-white/10 ${pillar.border} transition-all duration-300 group hover:-translate-y-1 shadow-lg`}
              >
                <div className="w-12 h-12 rounded-2xl glass-panel border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md">
                  <Icon className={`w-6 h-6 ${pillar.accent}`} />
                </div>
                <h4 className="text-base font-bold font-display text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
