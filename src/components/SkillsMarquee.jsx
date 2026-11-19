import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Palette, Code, FileCode, Globe, Layers, Zap, 
  Server, Repeat, ShieldCheck, Database, Box, Terminal,
  Bot, Sparkles, Cpu, Wand2, MessageSquare, BookOpen, 
  HardDrive, Boxes, Radio, Scan, Wifi, Power, Share2,
  GitBranch, Laptop, Layout, Send, Table
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function SkillsMarquee({ data }) {
  const [activeTab, setActiveTab] = useState('all');

  const marqueeItemsRow1 = [
    { name: "LivePerson AI", tag: "AI Studio", icon: Bot },
    { name: "React.js", tag: "Frontend", icon: Atom },
    { name: "Google Gemini", tag: "GenAI", icon: Sparkles },
    { name: "OpenAI GPT-4", tag: "LLM", icon: Cpu },
    { name: "Node.js", tag: "Backend", icon: Server },
    { name: "Tailwind CSS", tag: "Styling", icon: Palette },
    { name: "Laravel 13", tag: "PHP", icon: ShieldCheck },
    { name: "ESP32 IoT", tag: "Microcontroller", icon: Radio },
    { name: "RFID RC522", tag: "Hardware", icon: Scan },
    { name: "TypeScript", tag: "Type-Safe", icon: FileCode }
  ];

  const marqueeItemsRow2 = [
    { name: "Prompt Engineering", tag: "Advanced", icon: Wand2 },
    { name: "Next.js", tag: "Full-Stack", icon: Globe },
    { name: "REST API", tag: "Integration", icon: Repeat },
    { name: "MySQL", tag: "Relational DB", icon: Database },
    { name: "MongoDB", tag: "NoSQL", icon: Box },
    { name: "LM Studio", tag: "Local LLM", icon: HardDrive },
    { name: "Inertia.js", tag: "Monolith Bridge", icon: Zap },
    { name: "Git & GitHub", tag: "Version Control", icon: GitBranch },
    { name: "Figma", tag: "UI/UX", icon: Layout },
    { name: "Postman", tag: "API Testing", icon: Send }
  ];

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ai', label: 'AI & LLM' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'iot', label: 'IoT & Hardware' },
    { id: 'tools', label: 'Tools' }
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'all') {
      return [
        ...data.technicalSkills.ai.map(s => ({ ...s, cat: 'AI & LLM' })),
        ...data.technicalSkills.frontend.map(s => ({ ...s, cat: 'Frontend' })),
        ...data.technicalSkills.backend.map(s => ({ ...s, cat: 'Backend' })),
        ...data.technicalSkills.iot.map(s => ({ ...s, cat: 'IoT & Hardware' })),
        ...data.technicalSkills.tools.map(s => ({ ...s, cat: 'Tools' }))
      ];
    }
    return data.technicalSkills[activeTab] || [];
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-[#09090b]">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Zap className="h-3.5 w-3.5 text-zinc-400" />
            <span>CORE COMPETENCIES & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="text-gradient-mono">Kemampuan Teknis</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Kombinasi teknologi yang digunakan dalam proyek nyata mulai dari integrasi Generative AI, sistem web full-stack, hingga arsitektur IoT dan mikrokontroler.
          </p>
        </motion.div>
      </div>

      {/* Infinite Loop Marquee (Row 1 - Left to Right) */}
      <div className="relative w-full overflow-hidden mb-4 py-2 border-y border-zinc-800/80 bg-zinc-950/60 z-10">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#09090b] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none" />
        
        <div className="flex animate-marquee gap-3.5">
          {[...marqueeItemsRow1, ...marqueeItemsRow1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 transition-colors cursor-default shrink-0 shadow-sm"
              >
                <div className="p-1.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <Icon className="h-4 w-4 text-zinc-200" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-200">{item.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400">{item.tag}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Infinite Loop Marquee (Row 2 - Right to Left) */}
      <div className="relative w-full overflow-hidden mb-16 py-2 border-b border-zinc-800/80 bg-zinc-950/40 z-10">
        <div className="absolute left-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-r from-[#09090b] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-28 z-10 bg-gradient-to-l from-[#09090b] to-transparent pointer-events-none" />
        
        <div className="flex animate-marquee-reverse gap-3.5">
          {[...marqueeItemsRow2, ...marqueeItemsRow2].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 transition-colors cursor-default shrink-0 shadow-sm"
              >
                <div className="p-1.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <Icon className="h-4 w-4 text-zinc-200" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-200">{item.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400">{item.tag}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detailed Technical Skills Interactive Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Category Tabs: Rounded Minimalist Pills with Click Animation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeTab === cat.id
                  ? 'bg-white text-zinc-950 font-bold shadow-lg shadow-white/10'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Cards Grid with Staggered Scroll Animation */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5"
        >
          <AnimatePresence>
            {getFilteredSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                whileHover={{ y: -6, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:scale-110 group-hover:text-white group-hover:border-zinc-700 transition-all">
                    <Bot className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-zinc-950 text-zinc-400 border border-zinc-800">
                    {skill.level}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {skill.name}
                  </h4>
                  {skill.cat && (
                    <p className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {skill.cat}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
