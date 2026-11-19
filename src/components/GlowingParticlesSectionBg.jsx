import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/**
 * Luminous Glowing Particles Component with CSS Box-Shadow
 * Floating, pulsing dynamic particles that visibly glow like stars/fireflies
 * placed behind section content.
 */
export default function GlowingParticlesSectionBg({ count = 12, className = "" }) {
  // Generate random positions and animation properties once
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * (100 / count) + Math.random() * 8) % 96}%`,
      top: `${(Math.random() * 85 + 5)}%`,
      size: Math.random() * 4 + 3, // 3px to 7px
      duration: Math.random() * 5 + 6, // 6s to 11s
      delay: Math.random() * 3,
      moveX: (Math.random() - 0.5) * 50,
      moveY: (Math.random() - 0.5) * 60,
      glowIntensity: Math.random() * 0.4 + 0.6, // 0.6 to 1.0
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-0 ${className}`}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            boxShadow: `0 0 14px 3px rgba(255, 255, 255, ${p.glowIntensity}), 0 0 28px 8px rgba(220, 220, 255, 0.25)`,
          }}
          animate={{
            y: [0, p.moveY, 0],
            x: [0, p.moveX, 0],
            scale: [1, 1.4, 1],
            opacity: [0.35, 0.95, 0.35],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
