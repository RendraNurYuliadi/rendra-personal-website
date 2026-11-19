import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Send, Sparkles, User, Terminal, RefreshCw } from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function AIAssistantWidget({ data }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: `Halo! Saya adalah **Rendra AI Assistant**, representasi conversational AI yang dirancang dengan arsitektur dialog flow LivePerson & LLM integration. Ada yang ingin Anda ketahui seputar pengalaman kerja, proyek, atau tech stack saya?`,
      time: 'Baru saja'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    "Apa pengalaman Rendra di LivePerson?",
    "Bagaimana arsitektur proyek FAMS & IoT?",
    "Ceritakan tentang migrasi GPT ke Gemini di Lexus?",
    "Apakah Rendra menerima proyek freelance?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Generate smart response based on knowledge base
    setTimeout(() => {
      let reply = "";
      const lower = query.toLowerCase();

      if (lower.includes('liveperson') || lower.includes('peran') || lower.includes('pekerjaan')) {
        reply = "Di **LivePerson** (bergabung sejak September 2024), Rendra bertanggung jawab mengembangkan sistem conversational AI enterprise. Tugasnya meliputi perancangan dialog flow, prompt engineering untuk Large Language Models, integrasi Google Gemini & OpenAI GPT, serta penulisan custom functions Node.js untuk dynamic carousel dan API integration.";
      } else if (lower.includes('fams') || lower.includes('rfid') || lower.includes('iot') || lower.includes('fakultas')) {
        reply = "Proyek **FAMS** (Smart Faculty Assets & Facility Management System) adalah aplikasi full-stack terintegrasi hardware. Rendra membangun backend Laravel 13, frontend React + Inertia.js, serta menghubungkan mikrokontroler **ESP32 + modul RFID RC522** untuk pemindaian kartu aset otomatis via REST API secara real-time!";
      } else if (lower.includes('lexus') || lower.includes('gemini') || lower.includes('migrasi')) {
        reply = "Pada implementasi **Lexus Philippines & Vietnam**, Rendra merancang percakapan seputar katalog mobil, test drive booking, dan lead collection. Menariknya di Lexus Vietnam, Rendra memimpin proses migrasi model AI dari OpenAI GPT ke **Google Gemini**, menguji konsistensi jawaban, dan mengoptimalkan latensi respon.";
      } else if (lower.includes('freelance') || lower.includes('hire') || lower.includes('kontak') || lower.includes('kerja')) {
        reply = "Ya, Rendra sangat terbuka untuk tawaran proyek freelance (pengembangan chatbot AI, integrasi API, pembuatan web React/Node.js) maupun kesempatan internship / full-time software engineering. Anda dapat langsung mengklik tombol **Hubungi Saya** atau WhatsApp di bagian bawah halaman ini!";
      } else if (lower.includes('kuliah') || lower.includes('unsap') || lower.includes('pendidikan')) {
        reply = "Rendra saat ini menempuh studi **S1 Informatika di Universitas Sebelas April (UNSAP)** semester 5 dengan fokus pada Software Engineering, Artificial Intelligence, dan Internet of Things.";
      } else {
        reply = `Terima kasih atas pertanyaannya! Rendra menguasai Full-Stack Development (React, Node.js, Laravel, Tailwind), Generative AI (LivePerson, Google Gemini, OpenAI GPT, Prompt Engineering), dan IoT (ESP32, RFID). Silakan tanyakan hal spesifik lainnya atau kirim pesan langsung via form kontak!`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 800);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: `Percakapan telah di-reset. Ada yang ingin Anda ketahui lebih lanjut mengenai keahlian Rendra?`,
        time: 'Baru saja'
      }
    ]);
  };

  return (
    <section id="ai-chat" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={8} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Bot className="h-3.5 w-3.5 text-zinc-400" />
            <span>INTERACTIVE CHATBOT SIMULATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Chat dengan <span className="text-gradient-mono">Rendra AI Assistant</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Simulasi interaktif conversational AI berbasis pengetahuan proyek dan pengalaman kerja nyata Rendra.
          </p>
        </motion.div>

        {/* Chat Widget Container: Minimalist Rounded 3xl */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col h-[560px]"
        >
          
          {/* Chat Header */}
          <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 text-white shadow-md">
                  <Bot className="h-5 w-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Rendra AI Assistant</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-zinc-800 text-zinc-300 border border-zinc-700">
                    LivePerson Agent
                  </span>
                </h3>
                <p className="text-[11px] font-mono text-zinc-400">
                  Model: Hybrid Gemini &amp; Knowledge Base
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleReset}
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-xs flex items-center gap-1.5 border border-zinc-700"
              title="Reset Percakapan"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </motion.button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 mt-0.5 shadow-sm">
                      <Bot className="h-4 w-4" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-white text-zinc-950 font-medium rounded-tr-none shadow-md'
                        : 'bg-zinc-900/90 border border-zinc-800/90 text-zinc-200 rounded-tl-none shadow-sm'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>
                    <div className={`text-[10px] font-mono mt-1.5 text-right ${msg.sender === 'user' ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      {msg.time}
                    </div>
                  </div>
                  {msg.sender === 'user' && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-white mt-0.5 shadow-sm">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl rounded-tl-none bg-zinc-900 border border-zinc-800 px-4 py-3 flex items-center gap-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce" />
                  <span className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce delay-150" />
                  <span className="h-2 w-2 rounded-full bg-zinc-400 animate-bounce delay-300" />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Suggestions with Click Animations */}
          <div className="px-4 py-2 bg-zinc-950/80 border-t border-zinc-800/80 overflow-x-auto flex gap-2">
            {quickPrompts.map((prompt, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.94 }}
                onClick={() => handleSend(prompt)}
                className="shrink-0 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors font-mono"
              >
                {prompt}
              </motion.button>
            ))}
          </div>

          {/* Input Box with Click Animation */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 bg-zinc-950 border-t border-zinc-800 flex gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tanyakan sesuatu tentang Rendra, LivePerson, atau tech stack..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition-all"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              disabled={!inputText.trim()}
              className="px-4 py-2.5 rounded-2xl bg-white hover:bg-zinc-200 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-950 font-medium transition-all shadow-md flex items-center justify-center"
              aria-label="Kirim Pesan"
            >
              <Send className="h-4 w-4" />
            </motion.button>
          </form>

        </motion.div>

      </div>
    </section>
  );
}
