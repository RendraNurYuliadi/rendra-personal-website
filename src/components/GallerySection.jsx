import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, ZoomIn, X } from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function GallerySection({ items }) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section id="gallery" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
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
            <Image className="h-3.5 w-3.5 text-zinc-400" />
            <span>VISUAL EXPLORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeri Rekayasa & <span className="text-gradient-mono">Arsitektur Visual</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Dokumentasi konsep arsitektur, diagram alur percakapan AI, integrasi mikrokontroler IoT, serta prototipe antarmuka.
          </p>
        </motion.div>

        {/* Gallery Cards Grid: Minimalist Rounded Bento with Hover & Click Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 backdrop-blur-md hover:border-zinc-500 hover:bg-zinc-900/80 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.08)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                    {item.category}
                  </span>
                  <span className="p-2 rounded-xl bg-zinc-950 text-zinc-400 group-hover:text-white transition-colors">
                    <ZoomIn className="h-4 w-4" />
                  </span>
                </div>

                {/* Minimalist Visual Box */}
                <div className="h-40 rounded-2xl mb-4 bg-zinc-950 border border-zinc-800 flex items-center justify-center p-6 text-center relative overflow-hidden group-hover:border-zinc-700 transition-all">
                  <div className="absolute inset-0 bg-minimal-grid opacity-25" />
                  <div className="relative z-10">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-bold block mb-1">
                      {item.tag}
                    </span>
                    <span className="text-base font-bold text-white">
                      {item.title}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>View Blueprint</span>
                <span className="text-white group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal with Animated Entrance */}
      <AnimatePresence>
        {activeItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 shadow-2xl space-y-4"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
              >
                <X className="h-5 w-5" />
              </motion.button>

              <span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-mono">
                {activeItem.category}
              </span>

              <h3 className="text-xl font-bold text-white">
                {activeItem.title}
              </h3>

              <div className="h-48 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-6 text-center shadow-inner">
                <div className="font-mono text-white text-base font-bold">
                  [{activeItem.tag}] ARCHITECTURE BLUEPRINT
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeItem.caption}
              </p>

              <div className="pt-4 border-t border-zinc-800 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.94 }}
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs font-medium transition-colors"
                >
                  Tutup
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
