import { useState } from 'react';
import { ExternalLink, Github, Sparkles, FolderGit2, ArrowUpRight, Cpu, Eye, Code } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import ProjectModal from './ProjectModal';
import { soundFX } from '../../utils/audio';

function ProjectCard({ project, onOpenModal }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2
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
      onMouseEnter={() => soundFX.playHover()}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.2s ease, box-shadow 0.2s ease',
      }}
      className="group relative rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-500/15 flex flex-col justify-between"
    >
      {/* Glare effect overlay */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 243, 255, ${glare.opacity}), transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Project Thumbnail Image */}
        <div 
          onClick={() => {
            soundFX.playClick();
            onOpenModal(project);
          }}
          className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-950 cursor-pointer"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-85 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
          </div>

          {/* Quick Inspect Button */}
          <div className="absolute top-4 right-4 p-2 rounded-full glass-panel bg-slate-950/80 border border-white/20 text-slate-300 group-hover:text-cyan-300 group-hover:border-cyan-400 transition-all">
            <Eye className="w-4 h-4" />
          </div>

          {/* Metrics overlay badge */}
          {project.metrics && (
            <div className="absolute bottom-3 left-4 right-4">
              <div className="text-[10px] font-mono text-cyan-300/90 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-lg border border-cyan-500/20 truncate">
                ⚡ {project.metrics}
              </div>
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6">
          <h3 
            onClick={() => {
              soundFX.playClick();
              onOpenModal(project);
            }}
            className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
          >
            {project.title}
          </h3>
          <p className="text-xs font-mono text-purple-300 mb-3">
            {project.subtitle}
          </p>
          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Technologies Used Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons: GitHub & Inspect Pipeline */}
      <div className="p-6 pt-0 space-y-3 relative z-10">
        <div className="pt-3 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              soundFX.playClick();
            }}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium glass-panel border border-cyan-500/30 hover:border-cyan-400 bg-cyan-500/10 text-cyan-300 hover:text-white hover:bg-cyan-500/20 transition-all group/btn shadow-md"
          >
            <Github className="w-4 h-4 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
            <span>View on GitHub</span>
          </a>
        </div>

        <button
          onClick={() => {
            soundFX.playClick();
            onOpenModal(project);
          }}
          className="w-full py-1.5 text-center text-[11px] font-mono text-slate-400 hover:text-cyan-300 hover:underline flex items-center justify-center gap-1 transition-colors"
        >
          <span>Inspect Architecture & Pipeline</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Generative AI', 'RAG & LLMs', 'AI Agents', 'Machine Learning'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => 
        p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || 
        p.tags.some(t => t.toLowerCase().includes(selectedCategory.toLowerCase()))
      );

  return (
    <section id="projects" className="relative py-24 sm:py-32 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-md">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>FLAGSHIP AI CREATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Featured AI Projects
          </h2>
          <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
            Real-world AI systems built with Python, LangChain, LangGraph, RAG, and Machine Learning.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFX.playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat === 'All' ? 'All 6 Projects' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setActiveModalProject(proj)}
            />
          ))}
        </div>
      </div>

      {/* Modal View */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
