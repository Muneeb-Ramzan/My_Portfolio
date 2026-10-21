import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, Minimize2, Maximize2, Terminal, RefreshCw, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "⚡ Neural Terminal Active. Hi! I'm Muneeb's AI Assistant. Ask me anything about Muhammad Muneeb Ramzan's AI projects, LangChain / RAG skills, education at Adan Institute of Technology, or how to collaborate!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Tell me about Muneeb's AI projects",
    "What is his experience with RAG & LangChain?",
    "Tell me about Adan Institute of Technology",
    "How can I contact Muneeb?"
  ];

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const generateAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase();
    
    if (q.includes('project') || q.includes('recruiter') || q.includes('rag') || q.includes('langchain') || q.includes('churn') || q.includes('heart') || q.includes('work')) {
      return `Muhammad Muneeb Ramzan has built 7+ open-source Python, AI & ML projects on GitHub:
1. 🩺 Machine Learning Projects — Heart Disease & Customer Churn Prediction using Scikit-learn, EDA & classification models.
2. 🤖 AI Recruiter — Intelligent resume parsing and semantic candidate screening system.
3. 📄 RAG Project — Retrieval-Augmented Generation system with vector embeddings & LLM question-answering.
4. ⛓️ LangChain Projects — Sequential LLM chains, prompt engineering, memory buffers & agentic integrations.
5. 📊 Exploratory Data Analysis (EDA) — Statistical data science pipelines with NumPy, Pandas & Matplotlib.
6. 🏛️ Python OOP Architecture — Object-Oriented design patterns, inheritance, and clean code principles.
7. 🐍 Python Algorithms & Logic — Computational problem-solving and algorithmic foundations for AI.`;
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('python')) {
      return `Muneeb's core AI stack includes:
• Frameworks: LangChain, RAG (Retrieval-Augmented Generation), Scikit-Learn
• Machine Learning: Classification, EDA, Predictive Modeling, Performance Evaluation
• Programming & Data: Python (OOP, Algorithms), Pandas, NumPy, Matplotlib
• Web & Growth: HTML, CSS, Digital Marketing, and SEO strategies.`;
    }

    if (q.includes('adan') || q.includes('education') || q.includes('trainee') || q.includes('institute') || q.includes('studies')) {
      return `Muneeb is an AI Software Developer who has completed his comprehensive Artificial Intelligence training at Adan Institute of Technology, Islamabad (2026). He also completed specialized training in Digital Marketing and SEO, alongside his Intermediate Education background. He believes in learning by building real-world intelligent systems!`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('location')) {
      return `You can connect with Muneeb directly:
• Email: muneebramzan246@gmail.com
• Location: Islamabad, Pakistan
• GitHub: github.com/Muneeb-Ramzan
• LinkedIn: linkedin.com/in/muhammad-muneeb-ramzan
You can also scroll to the 'Let's Build Something Intelligent' transmission portal below!`;
    }

    return `Muhammad Muneeb Ramzan is an AI Software Developer who has completed his AI training and specializes in building intelligent AI applications, chatbots, automation systems, and modern web experiences. He specializes in Python, Generative AI, RAG, LangChain, and LangGraph. Would you like to know more about his projects or tech stack?`;
  };

  const handleSend = (textToSend = input) => {
    const trimmed = textToSend.trim();
    if (!trimmed) return;

    soundFX.playClick();
    const newMessages = [...messages, { sender: 'user', text: trimmed }];
    setMessages(newMessages);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateAIResponse(trimmed);
      setMessages([...newMessages, { sender: 'ai', text: reply }]);
      setIsTyping(false);
      soundFX.playHover();
    }, 750);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => {
              soundFX.playClick();
              setIsOpen(true);
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-slate-950 font-bold text-xs font-mono shadow-2xl hover:brightness-110 hover:scale-105 transition-all animate-pulse-glow"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Bot className="w-5 h-5 text-slate-950" />
            <span className="hidden sm:inline">Ask Muneeb's AI</span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[92vw] sm:w-[420px] h-[520px] max-h-[85vh] glass-panel bg-slate-950/95 border border-cyan-500/40 rounded-3xl shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 border-b border-cyan-500/20 bg-slate-900/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <div className="text-xs font-bold font-mono text-white flex items-center gap-1.5">
                  <span>Muneeb AI Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <div className="text-[10px] font-mono text-slate-400">Agentic Intelligence Engine</div>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-pink-400 hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs font-mono">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                  </div>
                )}

                <div
                  className={`p-3.5 rounded-2xl max-w-[82%] whitespace-pre-line leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                <span className="text-[11px] text-slate-400">Synthesizing neural reply...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="px-3 py-2 border-t border-white/5 bg-slate-900/40 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="shrink-0 px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-400/40 transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/10 bg-slate-950 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Muneeb's AI projects..."
              className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-xs font-mono placeholder-slate-500"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold hover:brightness-110 disabled:opacity-40 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
