import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {
  Sparkles,
  Cpu,
  Layers,
  Activity,
  Database,
  Terminal,
  Code2,
  TrendingUp,
  Network,
  Workflow,
  MessageSquare,
  FileSpreadsheet,
  Binary,
  Code,
  Palette,
  Eye,
  Grid3X3,
  Globe2
} from 'lucide-react';
import SkillsSphere from '../3d/SkillsSphere';
import ErrorBoundary from './ErrorBoundary';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

// Helper to map skill names to dynamic Lucide icons
function getSkillIcon(name) {
  switch (name.toLowerCase()) {
    case 'python': return Terminal;
    case 'artificial intelligence': return Cpu;
    case 'machine learning': return TrendingUp;
    case 'deep learning': return Network;
    case 'generative ai': return Sparkles;
    case 'rag': return Database;
    case 'langchain': return Layers;
    case 'langgraph': return Activity;
    case 'ai agents': return Workflow;
    case 'chatbot development': return MessageSquare;
    case 'pandas': return FileSpreadsheet;
    case 'numpy': return Binary;
    case 'html': return Code;
    case 'css': return Palette;
    default: return Sparkles;
  }
}

// 3D Perspective Tilt Card Component
function Interactive3DSkillCard({ skill, categoryColor, isSelected, onSelect }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const Icon = getSkillIcon(skill.name);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.25
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => {
        soundFX.playHover();
        onSelect(skill.name);
      }}
      onClick={() => {
        soundFX.playClick();
        onSelect(skill.name);
      }}
      style={{
        transform: `perspective(900px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(${isSelected ? '12px' : '0px'})`,
        transition: 'transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      className={`group relative p-5 rounded-2xl cursor-pointer overflow-hidden transition-all duration-200 ${
        isSelected
          ? 'glass-panel bg-cyan-500/15 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/25 -translate-y-1'
          : 'glass-panel border border-white/10 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10'
      }`}
    >
      {/* Dynamic Glare Reflection Overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 243, 255, ${glare.opacity}), transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Top Row: Icon + Level Badge */}
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              isSelected
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-400/50'
                : 'bg-white/5 border border-white/10 text-cyan-400 group-hover:border-cyan-400/50'
            }`}>
              <Icon className="w-5 h-5" />
            </div>

            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              {skill.level}%
            </span>
          </div>

          {/* Skill Title */}
          <h4 className={`text-base font-bold font-display transition-colors mb-1.5 ${
            isSelected ? 'text-cyan-300' : 'text-white group-hover:text-cyan-300'
          }`}>
            {skill.name}
          </h4>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
            {skill.description}
          </p>
        </div>

        {/* Animated Progress Bar */}
        <div className="pt-2 border-t border-white/5">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
            <span>Proficiency</span>
            <span className="text-cyan-400 font-semibold">{skill.level}% Mastery</span>
          </div>
          <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-white/5">
            <div
              className={`h-full bg-gradient-to-r ${categoryColor} rounded-full transition-all duration-700`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { skills } = portfolioData;
  const [activeSkill, setActiveSkill] = useState("Generative AI");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");
  const [viewMode, setViewMode] = useState("split"); // 'split' (Sphere + Cards) or 'grid' (All 3D Cards)

  const categories = [
    "All",
    "Generative AI & Agentic Systems",
    "Core AI, Machine Learning & Deep Learning",
    "Web & Interface Engineering"
  ];

  const filteredCategories = activeCategoryFilter === "All"
    ? skills
    : skills.filter(c => c.category === activeCategoryFilter);

  const allSkillsFlat = skills.flatMap(c => c.items.map(item => ({ ...item, categoryColor: c.color, categoryName: c.category })));
  
  const filteredFlatSkills = activeCategoryFilter === "All"
    ? allSkillsFlat
    : allSkillsFlat.filter(s => s.categoryName === activeCategoryFilter);

  // Find active skill metadata
  const currentSkillMeta = allSkillsFlat.find(s => s.name.toLowerCase() === activeSkill.toLowerCase()) || {
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
            <span>INTERACTIVE 3D KNOWLEDGE MESH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Skills & Technological Stack
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Explore interactive 3D skill cards with real-time perspective tilt, or orbit the 3D Fibonacci neural sphere.
          </p>

          {/* Control Bar: Filters & View Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2">
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
                  {cat === "All" ? "All Skills" : cat.split('&')[0]}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-full glass-panel border border-white/10 ml-2">
              <button
                onClick={() => {
                  soundFX.playClick();
                  setViewMode("split");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  viewMode === 'split'
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="3D Sphere + Cards Split View"
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>3D Sphere</span>
              </button>
              <button
                onClick={() => {
                  soundFX.playClick();
                  setViewMode("grid");
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Interactive 3D Cards Grid View"
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>3D Cards Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* View Mode: Split View (3D Canvas + 3D Cards) */}
        {viewMode === 'split' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Interactive 3D Skills Sphere Canvas */}
            <div className="lg:col-span-5 relative h-[440px] sm:h-[500px] rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden flex flex-col justify-between p-5 shadow-2xl lg:sticky lg:top-24">
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
                  <span className="text-emerald-400 font-bold">{currentSkillMeta.level}% Mastery</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {currentSkillMeta.description || "Core AI & Software Developer competence."}
                </p>
              </div>
            </div>

            {/* Right Column: Categorized 3D Tilt Skill Cards */}
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
                      {category.items.length} Modules
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.items.map((skill, sIdx) => (
                      <Interactive3DSkillCard
                        key={sIdx}
                        skill={skill}
                        categoryColor={category.color}
                        isSelected={activeSkill.toLowerCase() === skill.name.toLowerCase()}
                        onSelect={(name) => setActiveSkill(name)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* View Mode: Full 3D Cards Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFlatSkills.map((skill, idx) => (
              <Interactive3DSkillCard
                key={idx}
                skill={skill}
                categoryColor={skill.categoryColor}
                isSelected={activeSkill.toLowerCase() === skill.name.toLowerCase()}
                onSelect={(name) => setActiveSkill(name)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
