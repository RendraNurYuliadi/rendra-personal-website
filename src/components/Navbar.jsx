import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Menu, X, Bot, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'faq', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#projects' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Edukasi', href: '#education' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-black/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Top Reading Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-50 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo: Clean Minimalist Monochrome with Tap Animation */}
          <motion.a 
            href="#hero" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-300 group-hover:border-zinc-500 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Bot className="h-5 w-5 text-zinc-200 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
                Rendra<span className="text-zinc-400">.dev</span>
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                Software & AI
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation Links: Minimalist Rounded Pill with Animated Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-950/80 p-1.5 rounded-full border border-zinc-800/90 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/60'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 rounded-full bg-zinc-800 border border-zinc-700/80 shadow-md -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </motion.a>
              );
            })}
          </nav>

          {/* Right Action: Clean Contact CTA Button with Click/Tap Animation */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs transition-all shadow-md hover:shadow-lg shadow-black/40"
            >
              <span>Hubungi Saya</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden bg-[#09090b]/98 border-b border-zinc-800 px-4 pt-3 pb-6 backdrop-blur-2xl transition-all"
        >
          <div className="flex flex-col space-y-1.5 mb-4">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileTap={{ scale: 0.97 }}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                  activeSection === link.href.substring(1)
                    ? 'bg-zinc-800 text-white border border-zinc-700'
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="h-4 w-4 opacity-50" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileTap={{ scale: 0.96 }}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white text-zinc-950 font-semibold text-sm shadow-md"
          >
            Hubungi Saya Sekarang
          </motion.a>
        </motion.div>
      )}
    </header>
  );
}
