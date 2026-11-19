import React, { useState, useEffect } from 'react';
import { Terminal, Bot, CheckCircle2 } from 'lucide-react';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const steps = [
    "INITIALIZING CORE SYSTEM...",
    "LOADING NEURAL MODULES & LLM PROMPTS...",
    "CONNECTING TO LIVEPERSON & IOT MESH...",
    "RENDRA NUR YULIADI PORTFOLIO READY"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              onComplete();
            }, 500);
          }, 250);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 9) + 5;
        return next > 100 ? 100 : next;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 30) setCurrentStep(0);
    else if (progress < 60) setCurrentStep(1);
    else if (progress < 90) setCurrentStep(2);
    else setCurrentStep(3);
  }, [progress]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      onComplete();
    }, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-zinc-100 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Minimalist Grid */}
      <div className="absolute inset-0 bg-minimal-grid opacity-20 pointer-events-none" />

      {/* Main Content Box */}
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Minimalist Icon Logo */}
        <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900 shadow-2xl">
          <Bot className="h-9 w-9 text-white animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold tracking-tight text-white mb-1">
          RENDRA NUR YULIADI
        </h1>
        <p className="text-xs font-mono tracking-widest text-zinc-400 mb-6 uppercase">
          AI &amp; Full-Stack Developer
        </p>

        {/* Console / Status Box */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-left text-xs shadow-inner backdrop-blur mb-6">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-800 text-zinc-400">
            <span className="flex items-center gap-1.5 text-[11px] text-zinc-300">
              <Terminal className="h-3.5 w-3.5" /> BOOT_SEQUENCE.sh
            </span>
            <span className="text-[10px] text-zinc-600">v2.5.0</span>
          </div>
          <div className="space-y-1.5">
            {steps.slice(0, currentStep + 1).map((step, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 ${
                  idx === currentStep ? 'text-white font-medium' : 'text-zinc-500'
                }`}
              >
                <span className="text-zinc-600">&gt;</span>
                <span>{step}</span>
                {idx === currentStep && progress < 100 && (
                  <span className="inline-block h-3 w-1.5 bg-white ml-1 animate-pulse" />
                )}
                {idx < currentStep && (
                  <CheckCircle2 className="h-3.5 w-3.5 text-zinc-300 ml-auto shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono text-zinc-400">
            <span>LOADING ASSETS</span>
            <span className="text-white font-bold">{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              className="h-full bg-white transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Skip Button */}
        <button
          onClick={handleSkip}
          className="mt-6 text-xs text-zinc-500 hover:text-white transition-colors tracking-wide underline underline-offset-4"
        >
          Lewati Intro (Skip) &rarr;
        </button>
      </div>
    </div>
  );
}
