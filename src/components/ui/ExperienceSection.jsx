import { Briefcase, Calendar, GraduationCap, Sparkles, CheckCircle2, Bot, BookOpen, Layers } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function ExperienceSection() {
  const { experience, education, currentFocus } = portfolioData;

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-slate-950/50 border-t border-b border-white/5 cyber-grid">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-pink-500/30 text-xs font-mono text-pink-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>ACADEMIC & INDUSTRY TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Experience & Learning Timeline
          </h2>
          <p className="max-w-xl text-slate-400 text-sm sm:text-base">
            Hands-on AI development traineeship, structured machine learning studies, and foundational computer science education.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Futuristic Timeline */}
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold font-display text-white mb-8 flex items-center gap-2.5">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>Milestones & Traineeship</span>
            </h3>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/30 space-y-10">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => soundFX.playHover()}
                  className="relative group"
                >
                  {/* Timeline Glowing Pulsing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:border-pink-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-cyan-400/50" />

                  <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                          {item.role}
                        </h4>
                        <div className="text-xs sm:text-sm font-medium text-purple-400 mt-0.5">
                          {item.company}
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Education & Current Focus Cards */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education Box */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 space-y-5 shadow-xl">
              <h3 className="text-xl font-bold font-display text-white flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span>Education</span>
              </h3>

              <div className="space-y-4">
                {education.map((edu, eIdx) => (
                  <div
                    key={eIdx}
                    onMouseEnter={() => soundFX.playHover()}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-purple-300 mb-1">
                      <span>{edu.institution}</span>
                      <span className="text-slate-400">{edu.year}</span>
                    </div>
                    <div className="text-base font-bold text-white mb-1">
                      {edu.degree}
                    </div>
                    <p className="text-xs text-slate-400 leading-snug">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus Box */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-cyan-500/30 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-display text-white flex items-center gap-2.5">
                  <Bot className="w-5 h-5 text-cyan-400" />
                  <span>Current Focus</span>
                </h3>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30 animate-pulse">
                  ACTIVE 2026
                </span>
              </div>

              <p className="text-xs text-slate-300">
                Key disciplines under continuous active development:
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Generative AI",
                  "RAG",
                  "AI Agents",
                  "Python"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    onMouseEnter={() => soundFX.playHover()}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-cyan-200 border border-cyan-500/30 hover:border-pink-400 hover:text-pink-300 transition-all cursor-default"
                  >
                    ✦ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
