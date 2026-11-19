import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function StickyScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToHero = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-6 left-6 z-40 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-75 pointer-events-none'
      }`}
    >
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToHero}
        aria-label="Kembali ke Hero Section"
        className="group relative flex items-center justify-center p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-700 shadow-2xl shadow-black/80 backdrop-blur-xl text-zinc-300 hover:text-white hover:border-zinc-500 hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
      >
        {/* Animated Arrow Icon */}
        <ArrowUp className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-0.5" />

        {/* Floating tooltip */}
        <span className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl">
          Kembali ke Atas &uarr;
        </span>
      </motion.button>
    </div>
  );
}
