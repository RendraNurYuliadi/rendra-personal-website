import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Reusable Parallax Component for minimalist scroll depth
 * @param {number} speed - Positive moves up, negative moves down
 * @param {string} className - Additional CSS classes
 */
export default function ParallaxWrapper({ children, speed = 25, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yRaw = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const y = useSpring(yRaw, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
