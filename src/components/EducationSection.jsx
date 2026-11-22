import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2, MapPin, CalendarDays } from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function EducationSection({ education }) {
  const levelAccents = {
    'sdn2-sumedang': { icon: 'text-red-500', background: 'border-red-500/25 bg-red-500/10' },
    'smpn3-sumedang': { icon: 'text-green-500', background: 'border-green-500/25 bg-green-500/10' },
    'smkn1-sumedang': { icon: 'text-orange-500', background: 'border-orange-500/25 bg-orange-500/10' },
    unsap: { icon: 'text-yellow-400', background: 'border-yellow-400/25 bg-yellow-400/10' }
  };

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
            <span>EDUCATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            <span className="text-gradient-mono">Pendidikan</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Perjalanan pendidikan dan pengembangan kompetensi di bidang teknologi informasi.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute bottom-8 left-7 top-8 w-px bg-zinc-800 sm:left-1/2" />

          <div className="space-y-8">
            {education.timeline.map((item, index) => {
              const accent = levelAccents[item.id] || {
                icon: 'text-zinc-200',
                background: 'border-zinc-700 bg-zinc-900'
              };

              return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="relative grid items-stretch gap-5 sm:grid-cols-2"
              >
                <div className="absolute left-7 top-8 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-zinc-950 bg-white shadow-[0_0_14px_rgba(255,255,255,0.45)] sm:left-1/2" />

                <div className={`${index % 2 === 1 ? 'sm:col-start-2' : ''}`}>
                  <div className="ml-14 rounded-3xl border border-zinc-800 bg-zinc-950/90 p-5 sm:ml-0 sm:p-6">
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${accent.background}`}>
                          <GraduationCap className={`h-5 w-5 ${accent.icon}`} />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-500">
                            {item.level}
                          </p>
                          <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                            {item.institution}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-base font-semibold text-zinc-200">
                      {item.program}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-200">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        {item.status}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 px-3 py-1.5 text-xs text-zinc-400">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.period}
                        {item.detail && ` • ${item.detail}`}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>

                    <div className="mt-5 border-t border-zinc-800 pt-4">
                      <h4 className="mb-3 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                        <BookOpen className="h-4 w-4" />
                        Fokus Pembelajaran
                      </h4>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {item.focus.map((focus) => (
                          <div key={focus} className="flex items-start gap-2 text-xs text-zinc-300">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
                            <span>{focus}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-500">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
