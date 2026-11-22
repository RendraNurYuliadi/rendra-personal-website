import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, Palette, Code, FileCode, Globe, Layers, Zap, 
  Server, Repeat, ShieldCheck, Database, Box, Terminal,
  Bot, Sparkles, Cpu, Wand2, MessageSquare, BookOpen, 
  HardDrive, Boxes, Radio, Scan, Wifi, Power, Share2,
  GitBranch, Laptop, Layout, Send, Table, Coffee, Hash,
  Search, Braces, CodeXml, Route, BrainCircuit, Gauge,
  DatabaseZap, Binary, CircuitBoard, X
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function SkillsMarquee({ data }) {
  const [activeSkill, setActiveSkill] = useState(null);

  const marqueeItemsRow1 = [
    { name: "LivePerson AI", tag: "AI Studio", icon: Bot },
    { name: "React.js", tag: "Frontend", icon: Atom },
    { name: "Google Gemini", tag: "GenAI", icon: Sparkles },
    { name: "OpenAI GPT", tag: "LLM", icon: Cpu },
    { name: "Node.js", tag: "Backend", icon: Server },
    { name: "Tailwind CSS", tag: "Styling", icon: Palette },
    { name: "PHP & Laravel", tag: "Backend", icon: ShieldCheck },
    { name: "ESP32 IoT", tag: "Microcontroller", icon: Radio },
    { name: "RFID RC522", tag: "Hardware", icon: Scan },
    { name: "TypeScript", tag: "Type-Safe", icon: FileCode }
  ];

  const marqueeItemsRow2 = [
    { name: "Prompt Engineering", tag: "Advanced", icon: Wand2 },
    { name: "Next.js", tag: "Full-Stack", icon: Globe },
    { name: "REST API Integration", tag: "Backend", icon: Repeat },
    { name: "MySQL", tag: "Relational DB", icon: Database },
    { name: "MongoDB", tag: "NoSQL", icon: Box },
    { name: "LM Studio", tag: "Local LLM", icon: HardDrive },
    { name: "Vite & Inertia.js", tag: "Web Tools", icon: Zap },
    { name: "Git & GitHub", tag: "Version Control", icon: GitBranch },
    { name: "Figma", tag: "UI/UX", icon: Layout },
    { name: "Postman", tag: "API Testing", icon: Send }
  ];

  const skillIcons = {
    Atom, Palette, Code, FileCode, Globe, Layers, Zap,
    Server, Repeat, ShieldCheck, Database, Box, Terminal,
    Bot, Sparkles, Cpu, Wand2, MessageSquare, BookOpen,
    HardDrive, Boxes, Radio, Scan, Wifi, Power, Share2,
    GitBranch, Laptop, Layout, Send, Table, Coffee, Hash,
    Search, Braces, CodeXml, Route, BrainCircuit, Gauge,
    DatabaseZap, Binary, CircuitBoard
  };

  const brandIcons = {
    'React.js': 'react',
    'TypeScript': 'typescript',
    'Next.js': 'nextdotjs',
    'JavaScript (ES6+)': 'javascript',
    'HTML5 & CSS3': 'html5',
    'Tailwind CSS': 'tailwindcss',
    'Vite & Inertia.js': 'vite',
    'Node.js': 'nodedotjs',
    'PHP & Laravel': 'laravel',
    'PHP': 'php',
    'Java': 'openjdk',
    'C#': 'dotnet',
    'MySQL': 'mysql',
    'MongoDB': 'mongodb',
    'Python': 'python',
    'Git & GitHub': 'github',
    'VS Code & VSCodium': 'vscode',
    'Figma': 'figma',
    'Postman': 'postman',
    'OpenAI GPT': 'openai',
    'Google Gemini': 'googlegemini',
    'ESP32': 'espressif',
    'Arduino': 'arduino',
    'Arduino IDE': 'arduino',
    'NVIDIA NIM': 'nvidia',
    'Docker': 'docker'
  };

  const BrandIcon = ({ name, fallback: Fallback, className = 'h-4 w-4' }) => {
    const slug = brandIcons[name];
    if (!slug) return <Fallback className={className} />;
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt=""
        className={`${className} object-contain`}
        loading="lazy"
      />
    );
  };

  const skillCategories = [
    ...data.technicalSkills.ai.map((skill) => ({ ...skill, category: 'AI & LLM' })),
    ...data.technicalSkills.frontend.map((skill) => ({ ...skill, category: 'Frontend' })),
    ...data.technicalSkills.backend.map((skill) => ({ ...skill, category: 'Backend' })),
    ...data.technicalSkills.iot.map((skill) => ({ ...skill, category: 'IoT & Hardware' })),
    ...data.technicalSkills.tools.map((skill) => ({ ...skill, category: 'Tools' }))
  ];

  const openSkill = (item) => {
    const match = skillCategories.find((skill) => skill.name === item.name);
    setActiveSkill(match || {
      name: item.name,
      level: item.tag,
      category: item.tag,
      icon: item.icon?.displayName || 'Terminal'
    });
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
            <span>TECHNICAL SKILLS & TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tech Stack & <span className="text-gradient-mono">Kemampuan Teknis</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Teknologi dan kemampuan teknis yang saya gunakan dalam pengembangan aplikasi web, integrasi Generative AI, serta sistem IoT dan mikrokontroler.
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
              <motion.button
                key={idx}
                type="button"
                onClick={() => openSkill(item)}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                <div className="p-1.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <BrandIcon name={item.name} fallback={Icon} className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-200">{item.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400">{item.tag}</div>
                </div>
              </motion.button>
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
              <motion.button
                key={idx}
                type="button"
                onClick={() => openSkill(item)}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-850 transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                <div className="p-1.5 rounded-xl bg-zinc-950 border border-zinc-800">
                  <BrandIcon name={item.name} fallback={Icon} className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-200">{item.name}</div>
                  <div className="text-[10px] font-mono text-zinc-400">{item.tag}</div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setActiveSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 18, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActiveSkill(null)}
                className="absolute right-4 top-4 rounded-xl border border-zinc-700 bg-zinc-900 p-2 text-zinc-400 hover:text-white"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-zinc-200">
                <BrandIcon
                  name={activeSkill.name}
                  fallback={skillIcons[activeSkill.icon] || Bot}
                  className="h-5 w-5"
                />
              </div>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                {activeSkill.category}
              </p>
              <h3 className="mt-2 pr-10 text-xl font-bold text-white">{activeSkill.name}</h3>
              <p className="mt-3 text-sm text-zinc-400">
                Level penggunaan: <span className="font-semibold text-zinc-200">{activeSkill.level}</span>
              </p>
              <button
                type="button"
                onClick={() => setActiveSkill(null)}
                className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-800"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
