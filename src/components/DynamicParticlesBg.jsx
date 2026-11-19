import React, { useEffect, useRef } from 'react';

/**
 * Dynamic Luminous Particles Background
 * Enhanced with radial glow and canvas shadowBlur to create
 * a glowing light effect ("biar kayak nyala") across all sections.
 */
export default function DynamicParticlesBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    // Luminous Particle class
    class LuminousParticle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;
        this.radius = Math.random() * 1.8 + 1.0;
        this.baseAlpha = Math.random() * 0.45 + 0.25;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
        this.isGlower = Math.random() > 0.65; // special glowing star particle
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around boundaries
        if (this.x < 0) this.x = width;
        else if (this.x > width) this.x = 0;

        if (this.y < 0) this.y = height;
        else if (this.y > height) this.y = 0;

        // Gentle breathing pulse
        this.pulseAngle += this.pulseSpeed;
        const pulse = Math.sin(this.pulseAngle) * 0.2;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 1.8;
            this.y -= Math.sin(angle) * force * 1.8;
            this.alpha = Math.min(1.0, this.baseAlpha + force * 0.6 + pulse);
          } else {
            this.alpha = Math.max(0.15, this.baseAlpha + pulse);
          }
        } else {
          this.alpha = Math.max(0.15, this.baseAlpha + pulse);
        }
      }

      draw() {
        // 1. Draw outer radiant glowing halo (like a box-shadow/halo)
        const glowRadius = this.radius * (this.isGlower ? 6 : 4);
        const grad = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, glowRadius
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${this.alpha * 0.9})`);
        grad.addColorStop(0.4, `rgba(230, 235, 255, ${this.alpha * 0.35})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // 2. Draw solid bright core with canvas shadow
        ctx.shadowBlur = this.isGlower ? 14 : 8;
        ctx.shadowColor = `rgba(255, 255, 255, ${this.alpha * 0.95})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, this.alpha + 0.3)})`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }
    }

    let particles = [];
    const initParticles = () => {
      particles = [];
      const count = Math.min(90, Math.max(45, Math.floor((width * height) / 20000)));
      for (let i = 0; i < count; i++) {
        particles.push(new LuminousParticle());
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle luminescent lines
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Cursor connection beam
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Update and draw glowing particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-85"
      />
    </div>
  );
}
