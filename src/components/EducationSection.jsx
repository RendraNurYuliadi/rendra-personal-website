import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, CheckCircle2, MapPin } from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function EducationSection({ education }) {
  return (
    <section id="education" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={8} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll In Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <GraduationCap className="h-3.5 w-3.5 text-zinc-400" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pendidikan & <span className="text-gradient-mono">Fondasi Akademik</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Pembelajaran terstruktur dalam ilmu informatika, rekayasa perangkat lunak, dan kecerdasan buatan.
          </p>
        </motion.div>

        {/* Main Education Card with Scroll Animation & Hover */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -4 }}
          className="max-w-4xl mx-auto rounded-3xl border border-zinc-800 bg-zinc-950/90 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden transition-all hover:border-zinc-600 hover:shadow-[0_0_30px_rgba(255,255,255,0.06)]"
        >
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-700 text-white shadow-lg shrink-0">
                <GraduationCap className="h-7 w-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Perguruan Tinggi
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {education.university}
                </h3>
                <p className="text-sm font-semibold text-zinc-300">
                  {education.faculty} &bull; <span className="text-white">{education.studyProgram}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1 font-mono text-xs text-zinc-400">
              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 font-semibold shadow-sm">
                {education.currentStatus}
              </span>
              <span className="flex items-center gap-1 mt-1 text-zinc-500">
                <MapPin className="h-3.5 w-3.5" />
                {education.location}
              </span>
            </div>
          </div>

          {/* Academic Focus & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Focus Areas */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-zinc-300" />
                Fokus Studi Akademik:
              </h4>
              <div className="space-y-2">
                {education.focus.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-2 text-xs text-zinc-300 cursor-default"
                  >
                    <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements & Academic Milestones */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-zinc-300" />
                Pencapaian & Proyek Akademik Unggulan:
              </h4>
              <div className="space-y-2">
                {education.achievements.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300 flex items-start gap-2 shadow-sm"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white mt-1.5 shrink-0 shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
