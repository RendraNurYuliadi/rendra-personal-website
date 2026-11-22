import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Bike, Code2, Gamepad2, Palette, Paintbrush, Pencil,
  PanelsTopLeft, Trophy, Tv, X, ArrowUpRight
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

const hobbyIcons = {
  drawing: Pencil,
  painting: Paintbrush,
  cycling: Bike,
  badminton: Trophy,
  anime: Tv,
  gaming: Gamepad2,
  coding: Code2,
  uiDesign: PanelsTopLeft
};

const hobbyStyles = {
  drawing: {
    icon: 'text-amber-300',
    iconBg: 'border-amber-300/20 bg-amber-300/10',
    glow: 'bg-amber-400/10'
  },
  painting: {
    icon: 'text-rose-300',
    iconBg: 'border-rose-300/20 bg-rose-300/10',
    glow: 'bg-rose-400/10'
  },
  cycling: {
    icon: 'text-emerald-300',
    iconBg: 'border-emerald-300/20 bg-emerald-300/10',
    glow: 'bg-emerald-400/10'
  },
  badminton: {
    icon: 'text-sky-300',
    iconBg: 'border-sky-300/20 bg-sky-300/10',
    glow: 'bg-sky-400/10'
  },
  anime: {
    icon: 'text-violet-300',
    iconBg: 'border-violet-300/20 bg-violet-300/10',
    glow: 'bg-violet-400/10'
  },
  gaming: {
    icon: 'text-cyan-300',
    iconBg: 'border-cyan-300/20 bg-cyan-300/10',
    glow: 'bg-cyan-400/10'
  },
  coding: {
    icon: 'text-blue-300',
    iconBg: 'border-blue-300/20 bg-blue-300/10',
    glow: 'bg-blue-400/10'
  },
  uiDesign: {
    icon: 'text-fuchsia-300',
    iconBg: 'border-fuchsia-300/20 bg-fuchsia-300/10',
    glow: 'bg-fuchsia-400/10'
  }
};

const hobbyLayouts = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2'
];

export default function HobbiesSection({ hobbies }) {
  const [activeHobby, setActiveHobby] = useState(null);
  const ActiveHobbyIcon = activeHobby ? hobbyIcons[activeHobby.id] || Palette : Palette;
  const activeHobbyStyle = activeHobby ? hobbyStyles[activeHobby.id] || hobbyStyles.drawing : hobbyStyles.drawing;

  return (
    <section id="hobbies" className="relative overflow-hidden border-t border-zinc-800/80 bg-[#09090b] py-20">
      <GlowingParticlesSectionBg count={8} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1 font-mono text-xs text-zinc-300">
            <Palette className="h-3.5 w-3.5 text-zinc-400" />
            <span>HOBBIES &amp; INTERESTS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Hobi &amp; <span className="text-gradient-mono">Minat</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Hal-hal yang saya nikmati untuk berkreasi, belajar, bergerak, dan mengisi waktu luang.
          </p>
        </motion.div>

        <div className="grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hobbies.map((hobby, index) => {
            const Icon = hobbyIcons[hobby.id] || Palette;
            const style = hobbyStyles[hobby.id] || hobbyStyles.drawing;

            return (
              <motion.button
                key={hobby.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => setActiveHobby(hobby)}
                className={`group relative min-h-[220px] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-5 text-left sm:min-h-0 ${hobbyLayouts[index] || 'lg:col-span-2'}`}
              >
                <div className={`pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full blur-3xl transition-opacity group-hover:opacity-150 ${style.glow}`} />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.iconBg}`}>
                      <Icon className={`h-5 w-5 ${style.icon}`} />
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-black/40 px-2.5 py-1 font-mono text-[9px] tracking-[0.16em] text-zinc-500">
                      {hobby.category}
                    </span>
                  </div>
                  <div className="mt-5">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      {hobby.tagline}
                    </p>
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-bold text-white sm:text-xl">{hobby.title}</h3>
                        {hobby.items && (
                          <p className="mt-2 line-clamp-2 text-xs leading-5 text-zinc-400">
                            {hobby.items.slice(0, 3).join(' · ')}
                            {hobby.items.length > 3 ? ' · +' + (hobby.items.length - 3) : ''}
                          </p>
                        )}
                      </div>
                      <ArrowUpRight className="mb-1 h-4 w-4 shrink-0 text-zinc-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeHobby && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveHobby(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setActiveHobby(null)}
                aria-label="Tutup detail hobi"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
              <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${activeHobbyStyle.iconBg}`}>
                <ActiveHobbyIcon className={`h-5 w-5 ${activeHobbyStyle.icon}`} />
              </div>
              <p className="mt-5 font-mono text-[10px] tracking-[0.2em] text-zinc-500">{activeHobby.category}</p>
              <h3 className="mt-2 pr-10 text-2xl font-bold text-white">{activeHobby.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{activeHobby.description}</p>
              {activeHobby.items && (
                <div className="mt-6">
                  <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">Game Favorit</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeHobby.items.map((item) => (
                      <span key={item} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <button
                type="button"
                onClick={() => setActiveHobby(null)}
                className="mt-7 rounded-full border border-zinc-700 bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-zinc-200 transition hover:bg-zinc-800"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
