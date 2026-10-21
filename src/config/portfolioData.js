export const portfolioData = {
  personal: {
    name: "Muhammad Muneeb Ramzan",
    roleTagline: "AI Software Developer | Python & Generative AI Specialist",
    institute: "Adan Institute of Technology, Islamabad (AI Completed)",
    heroIntro: "I build intelligent AI applications and explore the future of Generative AI, Machine Learning, and automation.",
    bio: "I am Muhammad Muneeb Ramzan, an AI Software Developer who has completed comprehensive Artificial Intelligence training at Adan Institute of Technology, Islamabad. I am passionate about Artificial Intelligence and enjoy developing intelligent systems that solve real-world problems.\n\nMy expertise includes Python, Machine Learning, Generative AI, RAG systems, LangChain, AI agents, chatbots, and automation pipelines. I also have solid experience in Digital Marketing, SEO, HTML, and CSS.\n\nI believe in learning by building projects and continuously delivering impactful AI solutions.",
    location: "Islamabad, Pakistan",
    status: "Available for AI Developer Roles & Collaborations",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    resumeUrl: "#contact",
    socials: {
      github: "https://github.com/Muneeb-Ramzan",
      linkedin: "https://linkedin.com/in/muhammad-muneeb-ramzan",
      twitter: "https://twitter.com/muneeb_ai_dev",
      email: "muneebramzan246@gmail.com"
    }
  },
  
  stats: [
    { label: "GitHub Repos", value: "7+" },
    { label: "AI & Tech Stack", value: "15+" },
    { label: "AI Training", value: "Completed" },
    { label: "Focus Metric", value: "100% AI" }
  ],

  currentFocus: [
    { name: "Artificial Intelligence", desc: "Core algorithms, neural architectures & reasoning", icon: "Bot", color: "from-cyan-500 to-blue-600" },
    { name: "Machine Learning", desc: "Supervised/unsupervised models & predictive pipelines", icon: "Cpu", color: "from-purple-500 to-indigo-600" },
    { name: "Generative AI", desc: "LLMs, prompt engineering, multimodal diffusion & generation", icon: "Sparkles", color: "from-pink-500 to-rose-600" },
    { name: "RAG Systems", desc: "Retrieval-Augmented Generation with vector embeddings", icon: "Database", color: "from-emerald-500 to-teal-600" },
    { name: "AI Agents", desc: "Autonomous agentic workflows with LangGraph & tools", icon: "Activity", color: "from-amber-500 to-orange-600" },
    { name: "Python", desc: "FastAPI, LangChain, NumPy, Pandas, scripting & APIs", icon: "Terminal", color: "from-blue-500 to-cyan-600" }
  ],

  skills: [
    {
      category: "Generative AI & Agentic Systems",
      color: "from-cyan-400 to-blue-600",
      items: [
        { name: "Generative AI", level: 92, icon: "Sparkles", description: "Prompt engineering, LLM fine-tuning concepts & diffusion pipelines" },
        { name: "RAG", level: 90, icon: "Database", description: "Retrieval-Augmented Generation, vector embeddings & document Q&A" },
        { name: "LangChain", level: 88, icon: "Layers", description: "Chains, memory, prompt templates & external LLM integrations" },
        { name: "LangGraph", level: 85, icon: "Activity", description: "Stateful multi-actor agent orchestration & cyclic workflows" },
        { name: "AI Agents", level: 87, icon: "Bot", description: "Autonomous task-executing agents with reasoning & tool invocation" },
        { name: "Chatbot Development", level: 92, icon: "MessageSquare", description: "Interactive intelligent conversational assistants & context managers" }
      ]
    },
    {
      category: "Core AI, Machine Learning & Python",
      color: "from-purple-400 to-pink-600",
      items: [
        { name: "Python", level: 94, icon: "Terminal", description: "Modern OOP, async programming, data structures & backend APIs" },
        { name: "Artificial Intelligence", level: 90, icon: "Cpu", description: "Intelligent systems design, heuristic search & problem solving" },
        { name: "Machine Learning", level: 86, icon: "Brain", description: "Classification, regression, clustering & model evaluation" },
        { name: "Pandas", level: 88, icon: "FileSpreadsheet", description: "Data manipulation, transformation, cleansing & analysis" },
        { name: "NumPy", level: 86, icon: "Binary", description: "High-performance multidimensional arrays & numerical math" }
      ]
    },
    {
      category: "Web Engineering & Growth Marketing",
      color: "from-emerald-400 to-teal-600",
      items: [
        { name: "HTML", level: 95, icon: "Code", description: "Semantic, accessible & SEO-optimized modern markup" },
        { name: "CSS", level: 92, icon: "Palette", description: "Responsive layouts, Flexbox/Grid, 3D animations & Glassmorphism" },
        { name: "Digital Marketing", level: 88, icon: "TrendingUp", description: "Online growth campaigns, audience targeting & conversion funnels" },
        { name: "SEO", level: 90, icon: "Search", description: "Search engine optimization, keyword research & technical indexing" }
      ]
    }
  ],

  projects: [
    {
      id: "machine-learning-projects",
      title: "Machine Learning Projects",
      subtitle: "Heart Disease & Customer Churn Prediction Models",
      category: "Machine Learning",
      featured: true,
      description: "Machine Learning projects for Heart Disease Prediction and Customer Churn Prediction using Python, Scikit-learn, data preprocessing, EDA, visualization, model training, cross-validation, and performance evaluation metrics.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Scikit-Learn", "Machine Learning", "Pandas", "EDA", "Healthcare AI"],
      metrics: "Dual ML Models • Comprehensive EDA & Evaluation",
      architecture: "Healthcare/Customer Dataset -> Data Preprocessing & Cleansing -> Exploratory Data Analysis -> Scikit-learn Classification -> Evaluation Metrics",
      demoUrl: "https://github.com/Muneeb-Ramzan/Machine-Learning-Projects",
      githubUrl: "https://github.com/Muneeb-Ramzan/Machine-Learning-Projects"
    },
    {
      id: "ai-recruiter",
      title: "AI Recruiter",
      subtitle: "AI-Powered Candidate Resume Screening System",
      category: "Generative AI",
      featured: true,
      description: "An intelligent automated recruitment assistant that parses candidate resumes, extracts domain competencies against job descriptions, computes semantic matching scores, and provides structured candidate summaries for hiring managers.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "LangChain", "Generative AI", "RAG", "PDF Parser", "FastAPI"],
      metrics: "Automated resume parsing • Semantic ranking",
      architecture: "Resume Ingestion -> Text Chunker -> Vector Embeddings -> LLM Scoring Pipeline -> Structured JSON Output",
      demoUrl: "https://github.com/Muneeb-Ramzan/ai-recruiter",
      githubUrl: "https://github.com/Muneeb-Ramzan/ai-recruiter"
    },
    {
      id: "rag-project",
      title: "RAG Project",
      subtitle: "Retrieval-Augmented Generation & Document Intelligence",
      category: "RAG",
      featured: true,
      description: "A comprehensive Retrieval-Augmented Generation (RAG) system built with Python and vector databases. Indexes documents into vector spaces to perform semantic similarity retrieval and synthesize accurate, hallucination-free answers with source citations.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "RAG", "LangChain", "Vector DB", "Embeddings", "LLMs"],
      metrics: "Sub-second vector retrieval • Citation verification",
      architecture: "Document Preprocessing -> Vector Embeddings -> Vector Similarity Search -> Context Augmentation -> LLM Answer Synthesis",
      demoUrl: "https://github.com/Muneeb-Ramzan/RAG-Project",
      githubUrl: "https://github.com/Muneeb-Ramzan/RAG-Project"
    },
    {
      id: "langchain-projects",
      title: "LangChain AI Projects",
      subtitle: "LLM Chains, Prompt Engineering & Agent Workflows",
      category: "Generative AI",
      featured: true,
      description: "A hands-on collection of LangChain applications demonstrating sequential LLM chains, custom prompt engineering templates, conversational memory buffers, and dynamic tool invocations for intelligent automated workflows.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "LangChain", "Prompt Engineering", "Agents", "Memory", "LLMs"],
      metrics: "Modular LCEL chains • Multi-model LLM compatibility",
      architecture: "Prompt Templates -> LangChain LCEL -> Memory Management -> LLM Execution -> Structured Output Parser",
      demoUrl: "https://github.com/Muneeb-Ramzan/Langchain-Projects",
      githubUrl: "https://github.com/Muneeb-Ramzan/Langchain-Projects"
    },
    {
      id: "exploratory-data-analysis",
      title: "Exploratory Data Analysis (EDA)",
      subtitle: "Statistical Data Science & Visualization Pipelines",
      category: "Data Science",
      featured: false,
      description: "A collection of Exploratory Data Analysis (EDA) tasks and projects using Python, NumPy, Pandas, and Matplotlib. Explores distributions, correlations, feature relationships, and visual patterns across complex datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
      metrics: "Statistical distributions • Feature correlation matrices",
      architecture: "Raw Dataset -> Data Cleansing & Missing Values -> Statistical Summary -> Matplotlib/Seaborn Plots",
      demoUrl: "https://github.com/Muneeb-Ramzan/Exploratory-Data-Analysis",
      githubUrl: "https://github.com/Muneeb-Ramzan/Exploratory-Data-Analysis"
    },
    {
      id: "oops-architecture",
      title: "Python OOP Architecture",
      subtitle: "Object-Oriented Design Patterns & Clean Code",
      category: "Software Engineering",
      featured: false,
      description: "Deep dive into Object-Oriented Programming (OOP) in Python. Implements Inheritance, Polymorphism, Encapsulation, Abstraction, and modular software architecture designed for scalable AI and engineering applications.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "OOP", "Design Patterns", "Clean Code", "Software Architecture"],
      metrics: "Modular classes • Clean code best practices",
      architecture: "Base Abstract Classes -> Concrete Subclasses -> Polymorphic Dispatch -> Encapsulated Services",
      demoUrl: "https://github.com/Muneeb-Ramzan/OOPS",
      githubUrl: "https://github.com/Muneeb-Ramzan/OOPS"
    },
    {
      id: "python-foundations",
      title: "Python Algorithms & Logic",
      subtitle: "Core Computational Algorithms & Automation Logic",
      category: "Python Foundations",
      featured: false,
      description: "Foundational Python repository containing algorithmic logic, data structures, computational problem-solving techniques, and automation scripts that power modern AI systems.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      tags: ["Python", "Algorithms", "Data Structures", "Automation", "Logic"],
      metrics: "Optimized computational algorithms • Clean logic",
      architecture: "Problem Definition -> Mathematical Modeling -> Python Implementation -> Computational Testing",
      demoUrl: "https://github.com/Muneeb-Ramzan/Python-",
      githubUrl: "https://github.com/Muneeb-Ramzan/Python-"
    }
  ],

  experience: [
    {
      role: "AI Software Developer",
      company: "Adan Institute of Technology, Islamabad",
      period: "Completed (2026)",
      type: "AI Graduate & Practical Engineer",
      description: "Completed intensive AI software engineering curriculum and hands-on system building at Adan Institute of Technology. Designed and shipped end-to-end intelligent systems, Agentic RAG pipelines, custom conversational chatbots, and Python backend services for real-world automated problem solving.",
      skills: ["Python", "Generative AI", "RAG", "LangChain", "LangGraph", "AI Agents", "Chatbot Development"]
    },
    {
      role: "Artificial Intelligence Studies & Labs",
      company: "Adan Institute of Technology, Islamabad",
      period: "Completed (2026)",
      type: "Academic & Practical Mastery",
      description: "Mastered core curriculum focused on Machine Learning fundamentals, deep neural reasoning, Python data science libraries (Pandas, NumPy), prompt engineering, vector database architectures, and agentic workflows.",
      skills: ["Machine Learning", "Python", "Generative AI", "Pandas", "NumPy", "Vector Databases"]
    },
    {
      role: "Digital Marketing & SEO Training",
      company: "Professional Certification Program",
      period: "Completed",
      type: "Certification",
      description: "Mastered strategic online marketing, search engine optimization (SEO) algorithms, keyword research, performance analytics, content funnels, and technical web indexing strategies to maximize project visibility and impact.",
      skills: ["SEO", "Digital Marketing", "Analytics", "HTML", "CSS", "Content Strategy"]
    }
  ],

  education: [
    {
      degree: "Artificial Intelligence & Software Engineering",
      institution: "Adan Institute of Technology, Islamabad",
      year: "Completed (2026)",
      details: "Comprehensive training and project completion in Generative AI, RAG Systems, LangChain, Machine Learning, and Python-driven automation."
    },
    {
      degree: "Intermediate Education",
      institution: "College / Higher Secondary Board",
      year: "Completed",
      details: "Solid foundation in science, mathematics, computer science fundamentals, and logical reasoning."
    }
  ]
};
