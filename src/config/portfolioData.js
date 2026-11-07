export const portfolioData = {
  personal: {
    name: "Shoaib Raoof",
    roleTagline: "AI Software Developer Trainee | AI Student | Python & Generative AI Developer",
    institute: "Adan Institute of Technology, Islamabad",
    heroIntro: "I build intelligent AI applications and explore the future of Generative AI, Machine Learning, and automation.",
    bio: "I am Shoaib Raoof, an AI student and AI Software Developer Trainee at Adan Institute of Technology, Islamabad. I am passionate about Artificial Intelligence and enjoy learning how intelligent systems can solve real-world problems.\n\nMy current focus includes Python, Machine Learning, Generative AI, RAG systems, LangChain, AI agents, chatbots. I also have experience and knowledge of HTML and CSS.\n\nI believe in learning by building projects and continuously improving my technical skills.",
    location: "Islamabad, Pakistan",
    status: "AI Software Developer Trainee • Available for AI Projects",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#contact",
    socials: {
      github: "https://github.com/shoaib-raoof",
      linkedin: "https://linkedin.com/in/shoaib-raoof",
      twitter: "https://twitter.com/shoaib_raoof",
      email: "shoaibrauf415@gmail.com"
    }
  },
  
  stats: [
    { label: "Flagship AI Projects", value: "6" },
    { label: "Core AI & Tech Stack", value: "12+" },
    { label: "Traineeship Year", value: "2026" },
    { label: "Engineering Focus", value: "100% AI" }
  ],

  currentFocus: [
    { name: "Artificial Intelligence", desc: "Core algorithms, neural architectures & reasoning systems", icon: "Cpu", color: "from-cyan-500 to-blue-600" },
    { name: "Machine Learning", desc: "Supervised & unsupervised models, prediction pipelines & evaluation", icon: "Activity", color: "from-purple-500 to-indigo-600" },
    { name: "Generative AI", desc: "Large Language Models, prompt engineering, multimodal diffusion & generation", icon: "Sparkles", color: "from-pink-500 to-rose-600" },
    { name: "RAG Systems", desc: "Retrieval-Augmented Generation with vector embeddings & document Q&A", icon: "Database", color: "from-emerald-500 to-teal-600" },
    { name: "AI Agents", desc: "Autonomous agentic workflows with LangGraph, cyclic reasoning & tools", icon: "Workflow", color: "from-amber-500 to-orange-600" },
    { name: "Python", desc: "FastAPI, LangChain, NumPy, Pandas, scripting & intelligent backend APIs", icon: "Terminal", color: "from-blue-500 to-cyan-600" }
  ],

  skills: [
    {
      category: "Generative AI & Agentic Systems",
      color: "from-cyan-400 to-blue-600",
      items: [
        { name: "Generative AI", level: 93, icon: "Sparkles", description: "Prompt engineering, LLM fine-tuning concepts, multimodal pipelines & image/video synthesis." },
        { name: "RAG", level: 92, icon: "Database", description: "Retrieval-Augmented Generation, vector embeddings, chunking strategies & hallucination guardrails." },
        { name: "LangChain", level: 90, icon: "Layers", description: "Modular LCEL chains, conversational memory buffers, prompt templates & LLM integrations." },
        { name: "LangGraph", level: 88, icon: "Activity", description: "Stateful multi-actor agent orchestration, cyclic graph workflows & human-in-the-loop loops." },
        { name: "AI Agents", level: 89, icon: "Workflow", description: "Autonomous task-executing agents with reasoning, multi-agent swarms & external tool invocation." },
        { name: "Chatbot Development", level: 94, icon: "MessageSquare", description: "Production-ready conversational chatbots, context managers, streaming replies & custom UIs." }
      ]
    },
    {
      category: "Core AI, Machine Learning & Deep Learning",
      color: "from-purple-400 to-pink-600",
      items: [
        { name: "Python", level: 95, icon: "Terminal", description: "OOP design, async programming, data structures, automation scripting & clean architecture." },
        { name: "Artificial Intelligence", level: 92, icon: "Cpu", description: "Intelligent systems design, heuristic search, logic representation & problem-solving frameworks." },
        { name: "Machine Learning", level: 88, icon: "TrendingUp", description: "Classification, regression, clustering, feature engineering, cross-validation & evaluation metrics." },
        { name: "Deep Learning", level: 85, icon: "Network", description: "Neural network architectures, backpropagation, activation functions & deep representation learning." },
        { name: "Pandas", level: 90, icon: "FileSpreadsheet", description: "High-speed tabular data manipulation, cleansing, aggregation, EDA & statistical transformations." },
        { name: "NumPy", level: 88, icon: "Binary", description: "High-performance multidimensional arrays, vectorized numerical operations & linear algebra." }
      ]
    },
    {
      category: "Web & Interface Engineering",
      color: "from-emerald-400 to-teal-600",
      items: [
        { name: "HTML", level: 92, icon: "Code", description: "Semantic, accessible & SEO-friendly modern markup for interactive web applications." },
        { name: "CSS", level: 90, icon: "Palette", description: "Responsive layouts, Flexbox, Grid, 3D CSS transforms, Glassmorphism & dark cyberpunk themes." }
      ]
    }
  ],

  projects: [
    {
      id: "ai-recruiter",
      title: "AI Recruiter",
      subtitle: "AI-Powered Resume Screening & Candidate Analysis System",
      category: "Generative AI",
      featured: true,
      description: "An AI-powered recruitment system that can analyze resumes and help with candidate screening. Parses resumes from PDF/DOCX formats, extracts key candidate qualifications against job descriptions, calculates semantic matching scores, and provides structured candidate summaries for hiring teams.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Generative AI", "LangChain", "RAG", "FastAPI", "NLP"],
      metrics: "Automated candidate parsing • Semantic match scoring",
      architecture: "Resume Ingestion -> Text Chunker -> Vector Embeddings -> LLM Scoring Pipeline -> Structured JSON Candidate Evaluation",
      demoUrl: "https://github.com/shoaib-raoof/ai-recruiter",
      githubUrl: "https://github.com/shoaib-raoof/ai-recruiter"
    },
    {
      id: "agentic-rag-chatbot",
      title: "Agentic RAG Chatbot",
      subtitle: "Intelligent Document Q&A with Retrieval-Augmented Generation",
      category: "RAG & LLMs",
      featured: true,
      description: "A Retrieval-Augmented Generation chatbot designed to answer questions using provided documents. Integrates high-performance vector embeddings, semantic chunking, and hallucination guardrails to deliver accurate, citation-backed answers from complex document repositories.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "RAG", "LangChain", "Vector DB", "Embeddings", "LLMs"],
      metrics: "Sub-second vector retrieval • Citation verification guardrails",
      architecture: "Document Preprocessing -> Vector Embeddings -> Vector Similarity Search -> Context Augmentation -> LLM Answer Synthesis",
      demoUrl: "https://github.com/shoaib-raoof/agentic-rag-chatbot",
      githubUrl: "https://github.com/shoaib-raoof/agentic-rag-chatbot"
    },
    {
      id: "aitech-agentic-rag-chatbot",
      title: "AITECH Agentic RAG Chatbot",
      subtitle: "Adan Institute of Technology Intelligent Knowledge Assistant",
      category: "Chatbots & RAG",
      featured: true,
      description: "An AI chatbot that provides information about courses, admissions, fees, and other institute information. Designed specifically for Adan Institute of Technology to guide prospective students with real-time academic advisory, fee schedules, and course outlines.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "LangChain", "RAG", "LangGraph", "AI Agents", "Adan Tech Knowledge Base"],
      metrics: "Instant multi-turn admissions guidance • Accurate fee & curriculum retrieval",
      architecture: "Institute Knowledge Base -> Document Chunking -> Vector Index -> Agentic Intent Classifier -> Dynamic RAG Response Generator",
      demoUrl: "https://github.com/shoaib-raoof/aitech-agentic-rag-chatbot",
      githubUrl: "https://github.com/shoaib-raoof/aitech-agentic-rag-chatbot"
    },
    {
      id: "script-to-video-generator",
      title: "Script to Video Generator",
      subtitle: "Multimodal Generative AI Script-to-Video Production Pipeline",
      category: "Generative AI",
      featured: true,
      description: "A Generative AI project designed to transform scripts into video content. Automatically breaks down textual narrative scripts into discrete scenes, generates visual storyboard prompts, synthesizes natural AI voiceovers, and stitches them into complete video reels.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Generative AI", "Multimodal LLMs", "Text-to-Speech", "OpenCV", "Video Synthesis"],
      metrics: "Automated storyboard generation • Synchronized AI voiceover composition",
      architecture: "Input Script -> LLM Scene Decomposition -> Visual Prompt Engineering -> Text-to-Speech Engine -> Automated Video Timeline Composer",
      demoUrl: "https://github.com/shoaib-raoof/script-to-video-generator",
      githubUrl: "https://github.com/shoaib-raoof/script-to-video-generator"
    },
    {
      id: "ai-travel-planner",
      title: "AI Travel Planner",
      subtitle: "Autonomous Multi-Agent Travel & Itinerary Orchestration Swarm",
      category: "AI Agents",
      featured: true,
      description: "A multi-agent AI concept that can help users plan travel using intelligent AI agents. Features specialized coordinating agents (Flight Agent, Accommodation Agent, Budget Optimizer, and Activity Planner) collaborating seamlessly via LangGraph to craft personalized trip plans.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "LangGraph", "AI Agents", "Multi-Agent Swarm", "LangChain", "APIs"],
      metrics: "Collaborative multi-agent swarm • Real-time budget & route optimization",
      architecture: "User Destination & Budget -> Trip Coordinator Agent -> Sub-Agents (Flight, Hotel, Activities, Weather) -> Constraint Solver -> Unified Smart Itinerary",
      demoUrl: "https://github.com/shoaib-raoof/ai-travel-planner",
      githubUrl: "https://github.com/shoaib-raoof/ai-travel-planner"
    },
    {
      id: "protac-predictor",
      title: "PROTAC-Predictor",
      subtitle: "ML-Based Protein Degradation Prediction for Targeted Therapeutics",
      category: "Machine Learning",
      featured: true,
      description: "A Machine Learning-based protein degradation prediction model. Employs advanced supervised machine learning algorithms, molecular fingerprint descriptors, and biochemical feature sets to predict PROTAC (Proteolysis Targeting Chimera) degradation efficacy.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Machine Learning", "Scikit-Learn", "Deep Learning", "Pandas", "Bioinformatics"],
      metrics: "High predictive accuracy • Biochemical descriptor analysis",
      architecture: "PROTAC Molecular Structures -> Feature Extraction (Physicochemical & Structural Descriptors) -> ML Predictive Pipeline -> Protein Degradation Efficiency Score",
      demoUrl: "https://github.com/shoaib-raoof/protac-predictor",
      githubUrl: "https://github.com/shoaib-raoof/protac-predictor"
    }
  ],

  experience: [
    {
      role: "AI Software Developer Trainee",
      company: "Adan Institute of Technology, Islamabad",
      period: "2026",
      type: "Traineeship & System Engineering",
      description: "AI Software Developer Trainee at Adan Institute of Technology, Islamabad. Designing and deploying real-world AI applications, developing Agentic RAG pipelines, training predictive machine learning models, and building intelligent conversational chatbots with modern Python backends.",
      skills: ["Python", "Generative AI", "RAG", "LangChain", "LangGraph", "AI Agents", "Chatbot Development"]
    },
    {
      role: "Artificial Intelligence Studies",
      company: "Adan Institute of Technology, Islamabad",
      period: "2026",
      type: "Academic & Practical AI Mastery",
      description: "Learning Machine Learning, Generative AI, RAG, LangChain, AI Agents and Python. Deepening practical mastery through project-driven engineering, hands-on labs, vector database integrations, and automated AI workflows.",
      skills: ["Machine Learning", "Deep Learning", "Python", "Generative AI", "Pandas", "NumPy", "RAG"]
    }
  ],

  education: [
    {
      degree: "BSCS",
      institution: "Higher Education Degree",
      year: "Active Studies",
      details: "Comprehensive Bachelor of Science in Computer Science curriculum covering algorithms, data structures, software engineering, databases, and computational logic."
    },
    {
      degree: "Intermediate Education",
      institution: "Higher Secondary Board",
      year: "Completed",
      details: "Solid pre-engineering / computer science foundation emphasizing advanced mathematics, analytical reasoning, and physics principles."
    }
  ]
};
