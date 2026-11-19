import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, Calendar, MapPin, CheckCircle, 
  ChevronRight, Terminal, Building2 
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function ExperienceTimeline({ experiences }) {
  const [activeExp, setActiveExp] = useState(experiences[0]?.id || 'liveperson');

  const selected = experiences.find((e) => e.id === activeExp) || experiences[0];

  return (
    <section id="experience" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Briefcase className="h-3.5 w-3.5 text-zinc-400" />
            <span>CAREER & WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pengalaman Kerja & <span className="text-gradient-mono">Jejak Profesional</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Pengalaman nyata dalam pengembangan sistem conversational AI enterprise dan implementasi aplikasi web skala produksi.
          </p>
        </motion.div>

        {/* Experience Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Company Selector Tabs with Click & Hover Animations */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-3"
          >
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block px-1">
              Pilih Organisasi / Klien:
            </span>
            {experiences.map((exp) => (
              <motion.button
                key={exp.id}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveExp(exp.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start justify-between ${
                  activeExp === exp.id
                    ? 'bg-zinc-900 border-zinc-600 shadow-xl shadow-black/50'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className={`h-4 w-4 ${activeExp === exp.id ? 'text-white' : 'text-zinc-500'}`} />
                    <span className="text-sm font-bold text-white">{exp.company}</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-medium">{exp.role}</div>
                  <div className="text-[11px] font-mono text-zinc-500 mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 mt-1 transition-transform ${activeExp === exp.id ? 'text-white translate-x-1' : 'text-zinc-600'}`} />
              </motion.button>
            ))}

            {/* Enterprise Client Highlights Box */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs space-y-2.5">
              <span className="font-mono text-zinc-300 font-bold block text-[11px] uppercase tracking-wider">
                Enterprise Accounts Managed:
              </span>
              <ul className="space-y-1.5 text-zinc-400 font-mono text-[11px]">
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <span>Lexus Philippines (Automotive)</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <span>Lexus Vietnam (Gemini Migration)</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>SPTel (Telecom & Infrastructure)</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  <span>Sekolah Auliya (Educational AI)</span>
                </li>
                <li className="flex items-center gap-2 text-zinc-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                  <span>Kota Bogor, Kab. Bogor & Karawang</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Selected Role Deep Dive with AnimatePresence */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6"
              >
                
                {/* Header */}
                <div className="border-b border-zinc-800 pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono font-medium">
                      {selected.type}
                    </span>
                    <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                        {selected.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                        {selected.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selected.role}
                  </h3>
                  <p className="text-sm font-semibold text-zinc-400 mt-0.5">
                    @{selected.company}
                  </p>
                </div>

                {/* Summary description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selected.description}
                </p>

                {/* Responsibilities list */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5">
                    <Terminal className="h-4 w-4 text-zinc-300" />
                    Tanggung Jawab Utama & Deliverables:
                  </h4>
                  <div className="space-y-2.5">
                    {selected.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack used */}
                <div className="pt-4 border-t border-zinc-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-2.5">
                    Teknologi & Platform:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
