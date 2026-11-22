import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import backgroundMusic from '../assets/Audio/Most Beautiful Music Ever_ Everdream by Epic Soul Factory.mp3';

export default function StickyScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState('');
  const audioRef = useRef(null);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const removeGestureListeners = () => {
      window.removeEventListener('pointerdown', startPlayback);
      window.removeEventListener('keydown', startPlayback);
    };

    const startPlayback = () => {
      if (!audio.paused) return;
      audio.play()
        .then(() => {
          setAudioError('');
          removeGestureListeners();
        })
        .catch(() => {
          setAudioError('Autoplay dibatasi browser. Klik layar untuk memulai musik.');
        });
    };

    startPlayback();
    window.addEventListener('pointerdown', startPlayback);
    window.addEventListener('keydown', startPlayback);

    return removeGestureListeners;
  }, []);

  const scrollToHero = () => {
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setAudioError('');
    if (isPlaying) {
      audio.pause();
      return;
    }

    try {
      await audio.play();
    } catch (error) {
      setAudioError('Audio tidak dapat diputar. Coba tekan tombol putar lagi.');
    }
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) audioRef.current.muted = nextMuted;
  };

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
      <audio
        ref={audioRef}
        src={backgroundMusic}
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'}
          aria-pressed={isPlaying}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/90 text-zinc-200 shadow-xl backdrop-blur-xl transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-white/20"
          title={isPlaying ? 'Jeda musik' : 'Putar musik'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={toggleMute}
          aria-label={isMuted ? 'Nyalakan suara' : 'Bisukan musik'}
          aria-pressed={isMuted}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/90 text-zinc-200 shadow-xl backdrop-blur-xl transition-colors hover:border-zinc-500 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-white/20"
          title={isMuted ? 'Nyalakan suara' : 'Bisukan musik'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </motion.button>
      </div>
      {audioError && (
        <p role="status" className="max-w-56 rounded-lg border border-zinc-700 bg-zinc-900/95 px-3 py-2 text-xs text-zinc-300">
          {audioError}
        </p>
      )}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToHero}
          aria-label="Kembali ke Hero Section"
          className="group relative flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/90 p-3.5 text-zinc-300 shadow-2xl shadow-black/80 backdrop-blur-xl transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20"
        >
          <ArrowUp className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-0.5" />
          <span className="pointer-events-none absolute left-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-[11px] text-zinc-300 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100">
            Kembali ke Atas &uarr;
          </span>
        </motion.button>
      )}
    </div>
  );
}
