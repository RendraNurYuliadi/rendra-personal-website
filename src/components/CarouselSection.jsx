import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Play, Pause, 
  ExternalLink, Sparkles, CheckCircle2 
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function CarouselSection({ projects, onSelectProject }) {
  const featured = projects.filter((p) => p.featured || ['fams', 'noventra', 'lexus-ph', 'lexus-vn', 'tahungoding-lms'].includes(p.id));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-play interval
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % featured.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPlaying, featured.length, currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % featured.length);
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const current = featured[currentIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section className="py-20 relative bg-[#09090b] overflow-hidden border-t border-zinc-800/80">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll In Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 mb-2">
              <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
              <span>FLAGSHIP SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sorotan Proyek <span className="text-gradient-mono">Interaktif (Slider Carousel)</span>
            </h2>
          </div>

          {/* Carousel Slider Controls with Click & Hover Animations */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors shadow-md"
              title={isPlaying ? "Jeda Auto-Slide" : "Lanjutkan Auto-Slide"}
              aria-label="Toggle Carousel Autoplay"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="p-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel Slide Card Container with Animated Slide Transitions */}
        <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/90 backdrop-blur-xl overflow-hidden shadow-2xl">
          
          {/* Animated 5.5s Auto-play Progress Line */}
          {isPlaying && (
            <motion.div
              key={currentIndex}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 5.5, ease: "linear" }}
              className="absolute top-0 left-0 h-[2px] bg-white shadow-[0_0_8px_rgba(255,255,255,0.9)] z-30"
            />
          )}

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px]"
            >
              
              {/* Visual / Image Side */}
              <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] overflow-hidden group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 lg:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-zinc-950 hidden lg:block" />
                
                <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-700 text-zinc-200 text-xs font-mono font-medium backdrop-blur-md">
                    {current.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-zinc-400 text-xs font-mono backdrop-blur-md">
                    Slide {currentIndex + 1} of {featured.length}
                  </span>
                </div>
              </div>

              {/* Content Details Side */}
              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
                    <span>CLIENT / PARTNER:</span>
                    <span className="text-white font-semibold">{current.client}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mb-3">
                    {current.subtitle}
                  </p>

                  <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                    {current.description}
                  </p>

                  {/* Key Contributions Highlights */}
                  <div className="space-y-1.5 mb-4">
                    {current.contributions.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {current.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Actions & Interactive Dots */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => onSelectProject(current)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs shadow-md transition-colors"
                  >
                    <span>Lihat Detail Lengkap</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </motion.button>

                  {/* Slider Indicator Dots with Tap Animations */}
                  <div className="flex items-center gap-2">
                    {featured.map((_, dotIdx) => (
                      <motion.button
                        key={dotIdx}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDotClick(dotIdx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          dotIdx === currentIndex ? 'w-7 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
