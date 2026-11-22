import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Layers, Sparkles, CheckCircle2, 
  AlertCircle, X, ChevronLeft, ChevronRight
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function ProjectsShowcase({ projects, selectedProject, setSelectedProject }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [modalSlide, setModalSlide] = useState(1);
  const modalSlideTotal = 10;

  useEffect(() => {
    setModalSlide(1);
  }, [selectedProject]);
  const includedProjectIds = [
    'lexus-ph',
    'lexus-vn',
    'sptel-ai',
    'sekolah-auliya',
    'public-service-bogor',
    'public-service-kab-bogor',
    'public-service-karawang',
    'fams',
    'tahungoding-lms',
    'noventra',
    'genai-chatbot'
  ];
  const visibleProjects = projects.filter((project) => includedProjectIds.includes(project.id));

  const categories = [
    { id: 'all', label: 'Semua Proyek' },
    { id: 'ai-enterprise', label: 'Enterprise AI & Chatbot' },
    { id: 'web-software', label: 'Full-Stack Web' },
    { id: 'iot-robotics', label: 'IoT & Hardware' },
    { id: 'ai-research', label: 'AI Research & Agents' }
  ];

  const filteredProjects = activeCategory === 'all'
    ? visibleProjects
    : visibleProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Layers className="h-3.5 w-3.5 text-zinc-400" />
            <span>PORTFOLIO DIRECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Katalog Proyek & <span className="text-gradient-mono">Implementasi Nyata</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Daftar lengkap pekerjaan profesional, proyek akademik, dan eksperimen riset dengan arsitektur modern dan clean code.
          </p>
        </motion.div>

        {/* Filter Navigation with Click Animations */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => {
                setActiveCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-zinc-950 font-bold shadow-lg shadow-white/10'
                  : 'bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Projects Cards Grid: Minimalist Rounded Bento with Staggered Scroll & Hover Animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.slice(0, showAll ? filteredProjects.length : 6).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer rounded-3xl border border-zinc-800 bg-zinc-900/40 p-5 backdrop-blur-md hover:border-zinc-500 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]"
              >
                <div>
                  {/* Card Thumbnail */}
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-zinc-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 filter contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-zinc-950/90 border border-zinc-700 text-zinc-300 text-[10px] font-mono backdrop-blur-md">
                        {project.status.split('/')[0]}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-300 font-medium">
                        {project.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors line-clamp-1 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 line-clamp-1 mb-2.5">
                    {project.subtitle}
                  </p>

                  {/* Description snippet */}
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Tags & Footer */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded-full bg-zinc-950 text-[10px] font-mono text-zinc-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs font-medium text-white">
                    <span className="group-hover:underline">Buka Spesifikasi Proyek</span>
                    <ExternalLink className="h-3.5 w-3.5 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length > 6 && (
          <div className="mt-8 flex justify-center">
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setShowAll((current) => !current)}
              className="rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white"
            >
              {showAll ? 'Tampilkan Lebih Sedikit' : `Tampilkan Lebih Banyak (${filteredProjects.length - 6})`}
            </motion.button>
          </div>
        )}

      </div>

      {/* Project Detail Modal Popup with Animated Entrance */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-[min(1180px,calc(100vw-32px))] max-h-[88vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7 shadow-2xl"
            >
              
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Modal Header */}
              <div className="pr-12">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono">
                    {selectedProject.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono">
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-1">
                  Client / Partner: {selectedProject.client}
                </p>
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                {/* Modal Image */}
                <div className="relative min-h-[420px] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 lg:sticky lg:top-0 lg:self-start">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute inset-0 h-full w-full object-cover filter contrast-105"
                  />
                  <button
                    type="button"
                    onClick={() => setModalSlide((current) => current === 1 ? modalSlideTotal : current - 1)}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition hover:bg-black"
                    aria-label="Gambar sebelumnya"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalSlide((current) => current === modalSlideTotal ? 1 : current + 1)}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition hover:bg-black"
                    aria-label="Gambar berikutnya"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 right-4 rounded-full border border-white/20 bg-black/65 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                    {modalSlide}/{modalSlideTotal}
                  </div>
                </div>

                {/* Problem & Description */}
                <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    Deskripsi Proyek
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white flex items-center gap-1.5 mb-1">
                      <AlertCircle className="h-3.5 w-3.5 text-zinc-400" />
                      Problem / Tantangan yang Diselesaikan
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>
                )}
              </div>

              {/* Contributions */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-white mb-2">
                  Kontribusi & Langkah Teknis Saya
                </h4>
                <div className="space-y-2">
                  {selectedProject.contributions.map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                  Teknologi yang Digunakan
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                </div>
              </div>

              {/* Action buttons with Tap Animations */}
              <div className="pt-4 border-t border-zinc-800 flex justify-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-medium transition-colors"
                >
                  Tutup Jendela
                </motion.button>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Konsultasikan Proyek Serupa</span>
                </motion.a>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
