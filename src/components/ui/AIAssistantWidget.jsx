import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Sparkles, User, Minimize2, Maximize2, Terminal, RefreshCw, MessageSquare } from 'lucide-react';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "⚡ Neural Terminal Active. Hi! I'm Shoaib's AI Assistant. Ask me anything about Shoaib Raoof's 6 AI projects, LangChain / RAG skills, education at Adan Institute of Technology, or how to collaborate!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Tell me about Shoaib's 6 AI projects",
    "What are his Generative AI & RAG skills?",
    "Tell me about Adan Institute of Technology",
    "How can I contact Shoaib Raoof?"
  ];

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const generateAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase();
    
    if (q.includes('project') || q.includes('recruiter') || q.includes('rag') || q.includes('travel') || q.includes('video') || q.includes('protac') || q.includes('work')) {
      return `Shoaib Raoof has built 6 featured real-world AI creations:
1. 🤖 AI Recruiter — AI-powered recruitment system for resume parsing and candidate screening.
2. 📄 Agentic RAG Chatbot — Retrieval-Augmented Generation chatbot designed to answer questions using provided documents.
3. 🏫 AITECH Agentic RAG Chatbot — AI chatbot for Adan Institute of Technology providing courses, admissions, and fee information.
4. 🎬 Script to Video Generator — Generative AI pipeline transforming text scripts into full video reels.
5. ✈️ AI Travel Planner — Multi-agent concept using intelligent LangGraph agents for itinerary planning.
6. 🧬 PROTAC-Predictor — ML-Based protein degradation prediction for targeted therapeutics.`;
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('python')) {
      return `Shoaib Raoof's core technical stack includes:
• Generative AI & Agents: Generative AI, RAG, LangChain, LangGraph, AI Agents, Chatbot Development
• Core AI & Machine Learning: Python, Artificial Intelligence, Machine Learning, Deep Learning, Pandas, NumPy
• Web & Interface: HTML and CSS for modern responsive frontends.`;
    }

    if (q.includes('adan') || q.includes('education') || q.includes('trainee') || q.includes('institute') || q.includes('studies') || q.includes('bscs')) {
      return `Shoaib Raoof is an AI Software Developer Trainee and AI student at Adan Institute of Technology, Islamabad (2026). His studies focus on Machine Learning, Generative AI, RAG, LangChain, AI Agents, and Python. His academic background also includes BSCS and Intermediate Education. He believes in learning by building projects!`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('location')) {
      return `You can connect with Shoaib Raoof directly:
• Email: shoaibrauf415@gmail.com
• Location: Islamabad, Pakistan
• GitHub: github.com/shoaib-raoof
• LinkedIn: linkedin.com/in/shoaib-raoof
You can also use the 'Let's Build Something Intelligent' form below on this page!`;
    }

    return `Shoaib Raoof is an AI student and AI Software Developer Trainee at Adan Institute of Technology, Islamabad. He is passionate about Artificial Intelligence and builds intelligent applications, chatbots, automation systems, and modern web experiences. Would you like to know more about his 6 AI projects or his technical skills?`;
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
    }, 700);
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
            <span>ASK SHOAIB'S AI</span>
          </button>
        )}
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[420px] h-[550px] max-h-[85vh] rounded-3xl glass-panel bg-slate-950/95 border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-900 to-slate-950 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-600 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold font-display text-white flex items-center gap-1.5">
                  Shoaib AI Assistant
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </h3>
                <div className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE • NEURAL AGENT</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setIsOpen(false);
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 border border-cyan-500/30">
                    <Bot className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none font-sans whitespace-pre-line'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Chips */}
          <div className="p-2.5 border-t border-white/5 bg-slate-950/70 overflow-x-auto flex gap-1.5">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSend(prompt)}
                className="shrink-0 text-[10px] font-mono px-2.5 py-1 rounded-full glass-panel border border-white/10 hover:border-cyan-400/50 text-slate-300 hover:text-white transition-all truncate max-w-[200px]"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about projects, skills, education..."
              className="flex-1 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 disabled:opacity-30 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
