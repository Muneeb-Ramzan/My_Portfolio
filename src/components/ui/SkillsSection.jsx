import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Sparkles, Cpu, Layers, Activity, Database, Terminal, Code2, TrendingUp } from 'lucide-react';
import SkillsSphere from '../3d/SkillsSphere';
import ErrorBoundary from './ErrorBoundary';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeSkill, setActiveSkill] = useState("Generative AI");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  const categories = ["All", "Generative AI & Agentic Systems", "Core AI, Machine Learning & Python", "Web Engineering & Growth Marketing"];

  const filteredCategories = activeCategoryFilter === "All"
    ? skills
    : skills.filter(c => c.category === activeCategoryFilter);

  // Find active skill metadata if available
  const currentSkillMeta = skills.flatMap(c => c.items).find(s => s.name.toLowerCase() === activeSkill.toLowerCase()) || {
    name: activeSkill,
    level: 90,
    description: "Specialized intelligent software engineering module."
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-slate-950/70 border-t border-b border-white/5 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>3D INTERACTIVE KNOWLEDGE MESH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Skills & Technological Stack
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Rotate the 3D orbital neural sphere or interact with 3D cards below to explore technical proficiencies.
          </p>

          {/* Category Quick Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playClick();
                  setActiveCategoryFilter(cat);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeCategoryFilter === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat === "All" ? "All 15 Skills" : cat.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 3D Skills Sphere Canvas */}
          <div className="lg:col-span-5 relative h-[440px] sm:h-[500px] rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-5 shadow-2xl sticky top-24">
            {/* Header info badge */}
            <div className="z-10 flex items-center justify-between pointer-events-none">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                <Activity className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span>ACTIVE: <strong className="text-pink-400 text-sm font-bold">{currentSkillMeta.name}</strong></span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Drag to rotate 3D</span>
            </div>

            {/* 3D Canvas */}
            <div className="absolute inset-0">
              <ErrorBoundary fallback={<div className="w-full h-full flex items-center justify-center text-xs font-mono text-cyan-400">3D Skills Mesh Active</div>}>
                <Canvas camera={{ position: [0, 0, 8.2], fov: 48 }}>
                  <ambientLight intensity={0.9} />
                  <directionalLight position={[5, 5, 5]} intensity={1.5} />
                  <pointLight position={[-5, -5, 5]} color="#ff007f" intensity={2.5} />
                  <pointLight position={[5, -5, -5]} color="#00f3ff" intensity={2.5} />
                  <Suspense fallback={null}>
                    <SkillsSphere onActiveSkill={(name) => setActiveSkill(name)} />
                  </Suspense>
                  <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    rotateSpeed={0.8}
                    autoRotate
                    autoRotateSpeed={0.6}
                  />
                </Canvas>
              </ErrorBoundary>
            </div>

            {/* Bottom Card Summary for Active Skill */}
            <div className="z-10 glass-panel p-3.5 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-1">
                <span className="font-bold">{currentSkillMeta.name}</span>
                <span className="text-emerald-400">{currentSkillMeta.level}% Mastery</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug">
                {currentSkillMeta.description || "Core AI & Software Developer competence."}
              </p>
            </div>
          </div>

          {/* Right Column: Categorized 3D Skill Cards */}
          <div className="lg:col-span-7 space-y-6">
            {filteredCategories.map((category, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">
                    {category.category}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                    {category.items.length} Technologies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {category.items.map((skill, sIdx) => {
                    const isSelected = activeSkill.toLowerCase() === skill.name.toLowerCase();
                    return (
                      <div
                        key={sIdx}
                        onMouseEnter={() => {
                          setActiveSkill(skill.name);
                          soundFX.playHover();
                        }}
                        className={`p-4 rounded-2xl transition-all cursor-pointer border ${
                          isSelected
                            ? 'bg-cyan-500/15 border-cyan-400 shadow-lg shadow-cyan-500/20 -translate-y-0.5'
                            : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-cyan-500/40'
                        }`}
                      >
                        <div className="flex items-center justify-between text-sm font-semibold mb-1">
                          <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-white'}>
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs text-cyan-400">{skill.level}%</span>
                        </div>

                        <p className="text-[11px] text-slate-400 leading-snug mb-2.5 line-clamp-2">
                          {skill.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
