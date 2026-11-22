import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Code2, Sparkles, Terminal, CheckCircle2,
  Cpu, Copy, Check
} from 'lucide-react';
// import profileImg from '../assets/namarendra-casual.jpg';
import aboutPoster from '../assets/about-poster.png';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function About({ data, activePersona }) {
  const currentPersona = data.personas[activePersona] || data.personas.persona1;
  const [copied, setCopied] = useState(false);

  const jsonSnippet = `{
  "developer": "Rendra Nur Yuliadi",
  "status": "Undergraduate (Sem 5) & Developer",
  "university": "Universitas Sebelas April (UNSAP)",
  "roles": [
    "AI Chatbot Developer",
    "Full-Stack Web Developer",
    "IoT & Robotics Explorer"
  ],
  "experience": {
    "enterprise_platform": "LivePerson AI Studio",
    "core_models": ["Google Gemini", "OpenAI GPT"],
    "frontend": ["React", "Next.js", "Tailwind CSS"],
    "backend": ["Node.js", "Laravel", "MySQL"]
  },
  "current_focus": "RAG, Agentic AI, and IoT Hardware Integration",
  "motto": "Turning Ideas Into Functional Digital Solutions."
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const principles = [
    { title: "Problem Solver", desc: "Berfokus pada penyelesaian akar masalah secara praktis, terstruktur, dan terukur." },
    { title: "Continuous Learner", desc: "Cepat beradaptasi dengan model AI, framework modern, dan arsitektur baru." },
    { title: "Detail-Oriented", desc: "Menjaga kualitas clean code, keamanan sistem, dan kepuasan antarmuka pengguna." },
    { title: "Functional Impact", desc: "Membangun teknologi yang memberikan dampak riil dan nilai bisnis nyata." }
  ];

  return (
    <section id="about" className="relative isolate overflow-hidden bg-[#ffffff] py-24 sm:py-28 lg:py-32">
      <GlowingParticlesSectionBg count={8} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="mb-12 flex items-end justify-between border-b border-zinc-800 pb-6"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] tracking-[0.28em] text-zinc-500">
              <User className="h-3.5 w-3.5" />
              DISCOVER MY JOURNEY
            </div>
            <h2 className="max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Tentang Saya
              <span className="block text-zinc-500">& Filosofi Rekayasa.</span>
            </h2>
          </div>
          <span className="hidden font-mono text-xs text-zinc-700 lg:block">01 / PROFILE</span>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[560px] overflow-hidden border border-zinc-800 bg-zinc-950 sm:min-h-[660px]"
          >
            <img
              src={aboutPoster}
              alt="Potret editorial Rendra Nur Yuliadi"
              className="absolute inset-0 h-full w-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/30 pt-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <div>
                <p className="font-mono text-[10px] tracking-[0.32em] text-zinc-300">PROFILE / 2026</p>
                <p className="mt-1 text-lg font-black tracking-tight">RENDR.AI</p>
              </div>
              <p className="font-mono text-[10px] leading-4 tracking-[0.16em] text-zinc-300">SUMEDANG<br />INDONESIA</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75 }}
            className="flex flex-col"
          >
            <div className="border-l border-zinc-800 pl-5 sm:pl-8">
              <p className="mb-5 font-mono text-xs tracking-[0.22em] text-zinc-500">/ WHO I AM</p>
              <p className="text-xl leading-relaxed text-zinc-100 sm:text-2xl">
                Saya adalah mahasiswa <span className="font-semibold text-white">S1 Informatika UNSAP</span> sekaligus Software & AI Developer yang aktif membangun teknologi modern.
              </p>
            </div>

            <div className="mt-8 space-y-5 text-sm leading-7 text-zinc-400 sm:text-base">
              <p>
                Melalui peran profesional di <span className="font-semibold text-zinc-100">LivePerson</span>, saya terlibat langsung dalam implementasi Conversational AI berskala internasional untuk Lexus Philippines & Vietnam, SPTel, dan sektor publik.
              </p>
              <p>
                Pengalaman tersebut mengasah kemampuan <span className="text-zinc-200">prompt engineering, integrasi Google Gemini & OpenAI GPT, optimasi latensi, serta pembuatan dynamic payload dengan Node.js</span>.
              </p>
              <p>
                Saya percaya teknologi bukan sekadar baris kode—tetapi cara menciptakan solusi yang <span className="text-zinc-100">bermanfaat, efisien, dan berdampak nyata</span>.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-2">
              {principles.map((p, idx) => (
                <motion.div
                  key={p.title}
                  whileHover={{ backgroundColor: '#18181b' }}
                  className="group min-h-36 bg-[#0d0d0f] p-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-zinc-600">0{idx + 1}</span>
                    <CheckCircle2 className="h-4 w-4 text-zinc-500 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{p.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid gap-px overflow-hidden border border-zinc-800 bg-zinc-800 sm:grid-cols-[1fr_220px]">
              <div className="bg-[#0d0d0f] p-5 sm:p-6">
                <p className="font-mono text-[10px] tracking-[0.2em] text-zinc-600">PERSONAL BRAND STATEMENT</p>
                <p className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">
                  “{data.personal.brandStatement}”
                </p>
              </div>
              <div className="flex min-h-28 items-center justify-center bg-white p-5 text-black">
                <button
                  onClick={handleCopy}
                  className="group flex items-center gap-3 font-mono text-xs font-bold tracking-[0.12em]"
                  title="Copy JSON profile"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? 'COPIED' : 'COPY JSON'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
