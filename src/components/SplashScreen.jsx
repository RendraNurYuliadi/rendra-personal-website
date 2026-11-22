import React, { useEffect, useState } from 'react';
import rLogo from '../assets/r_logo_v2.jpg';

export default function SplashScreen({ onComplete }) {
  const [isFading, setIsFading] = useState(false);

  const finishSplash = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(onComplete, 500);
  };

  useEffect(() => {
    const timer = setTimeout(finishSplash, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden text-white transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="splash-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-minimal-grid opacity-[0.12]" />
      <div className="splash-particles absolute inset-0" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="splash-particle"
            style={{
              '--particle-x': `${8 + ((index * 29) % 88)}%`,
              '--particle-y': `${8 + ((index * 47) % 84)}%`,
              '--particle-delay': `${(index % 6) * 0.32}s`,
              '--particle-size': `${2 + (index % 3)}px`,
            }}
          />
        ))}
      </div>
      <div className="splash-aurora absolute h-[520px] w-[520px] rounded-full" />
      <div className="splash-ring splash-ring-one absolute" />
      <div className="splash-ring splash-ring-two absolute" />

      <div className="relative z-10 flex w-full max-w-xl flex-col items-center px-6 text-center">
        <div className="splash-logo-wrap relative mb-8">
          <img
            src={rLogo}
            alt="Rendra Nur Yuliadi"
            className="splash-logo relative h-28 w-28 rounded-[28px] object-cover shadow-2xl sm:h-32 sm:w-32"
          />
        </div>

        <div className="overflow-hidden">
          <p className="splash-label mb-3 text-[11px] font-medium uppercase tracking-[0.42em] text-zinc-400">
            Personal Portfolio
          </p>
        </div>

        <div className="overflow-hidden">
          <h1 className="splash-title text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Rendra Nur Yuliadi
          </h1>
        </div>

        <p className="splash-subtitle mt-4 text-sm text-zinc-400 sm:text-base">
          Software &amp; AI Developer
        </p>

        <div className="mt-9 h-px w-64 overflow-hidden bg-zinc-800">
          <div className="splash-progress h-full bg-white" />
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          Jika musik tidak otomatis diputar, klik layar untuk memulai.
        </p>
      </div>

      <button
        onClick={finishSplash}
        className="absolute bottom-6 right-6 rounded-full border border-zinc-800 bg-zinc-950/70 px-4 py-2 text-xs text-zinc-500 backdrop-blur-md transition-colors hover:text-white"
      >
        Lewati
      </button>
    </div>
  );
}
