import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function FAQSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={8} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <HelpCircle className="h-3.5 w-3.5 text-zinc-400" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pertanyaan yang <span className="text-gradient-mono">Sering Diajukan</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Penjelasan seputar layanan rekayasa chatbot AI, arsitektur full-stack, serta model kolaborasi kerja.
          </p>
        </motion.div>

        {/* FAQ Accordion List with Smooth Expand Animation */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-zinc-900 border-zinc-700 shadow-xl shadow-black/40'
                    : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <motion.button
                  whileTap={{ scale: 0.99 }}
                  onClick={() => toggle(index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-500">0{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <motion.div 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-1.5 rounded-xl bg-zinc-800 text-zinc-400"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/60 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
