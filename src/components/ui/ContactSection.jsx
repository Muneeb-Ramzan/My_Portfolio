import { useState } from 'react';
import { Mail, Send, Copy, Check, Terminal, Sparkles, MessageSquare, MapPin, Bot } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../../config/portfolioData';
import { soundFX } from '../../utils/audio';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    soundFX.playClick();
    navigator.clipboard.writeText(personal.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFX.playSuccess();

      // Trigger celebratory cosmic confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f3ff', '#a855f7', '#ff007f', '#38bdf8']
      });

      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-md">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI COLLABORATION PORTAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white">
            Let's Build Something Intelligent
          </h2>
          <p className="max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Have an idea for an AI project? Let's connect and build something innovative.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Info & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold font-display text-white mb-2">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Open to AI developer traineeships, collaborative research, GenAI agent builds, and intelligent software engineering projects.
                </p>
              </div>

              {/* Email Copier Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Primary Email</div>
                    <div className="text-xs sm:text-sm font-mono text-cyan-300 truncate">
                      {personal.socials.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => soundFX.playHover()}
                  className="p-2.5 rounded-xl glass-panel hover:border-cyan-400 text-slate-300 hover:text-white transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-300" />}
                </button>
              </div>

              {/* Institute & Location */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 font-mono">
                  <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{personal.institute}</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-300 font-mono">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{personal.location}</span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <div className="text-xs font-mono text-emerald-300">
                  STATUS: <strong>AVAILABLE FOR AI PROJECTS</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative shadow-2xl">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-400/40">
                    <Sparkles className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Transmission Received!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Muhammad Muneeb Ramzan will review your inquiry and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Muhammad Muneeb, I'd like to collaborate on an intelligent AI application..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm placeholder-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => soundFX.playHover()}
                    className="w-full py-3.5 rounded-xl font-bold font-mono text-sm bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-slate-950 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>SENDING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
