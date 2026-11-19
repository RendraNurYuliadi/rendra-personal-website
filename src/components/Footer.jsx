import React from 'react';
import { Bot, ArrowUp, Github, Linkedin, MessageSquare, Heart } from 'lucide-react';

export default function Footer({ data }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#09090b] border-t border-zinc-800/80 py-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-900 border border-zinc-800 text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                {data.personal.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                {data.personal.title}
              </span>
            </div>
          </div>

          {/* Nav shortcut links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">Tentang</a>
            <a href="#experience" className="hover:text-white transition-colors">Pengalaman</a>
            <a href="#projects" className="hover:text-white transition-colors">Proyek</a>
            <a href="#skills" className="hover:text-white transition-colors">Tech Stack</a>
            <a href="#ai-chat" className="hover:text-white transition-colors">AI Chat</a>
            <a href="#contact" className="hover:text-white transition-colors">Kontak</a>
          </div>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={data.personal.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={data.personal.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all flex items-center gap-1 font-mono text-[11px]"
              title="Kembali ke atas"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span>Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px]">
          <p>
            &copy; {new Date().getFullYear()} {data.personal.name}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Designed with minimal aesthetics &bull; React, Vite &amp; Tailwind CSS</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
