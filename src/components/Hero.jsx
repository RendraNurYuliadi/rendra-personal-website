import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, Bot, Sparkles, CheckCircle2, 
  Terminal, Github, Linkedin, MessageSquare, 
  Cpu, Layers, Maximize2, X, ChevronRight, Eye
} from 'lucide-react';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function Hero({ data, activePersona }) {
  const currentPersona = data.personas[activePersona] || data.personas.persona1;
  const roles = [
    "Full-Stack Developer",
    "AI Chatbot Developer",
    "GenAI Specialist",
    "Conversational AI Designer",
    "IoT & Smart Systems Builder",
    "Software Engineer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Three editorial Hero portraits
  const heroImages = [
    {
      id: "no-dream",
      title: "Rendra Nur Yuliadi",
      subtitle: "Mahasiswa & Pengembang",
      badge: "FOKUS PADA SOLUSI",
      src: "/images/hero-rendra-final.png",
      details: "Mahasiswa Informatika UNSAP Semester 5 • Pengembang Chatbot AI di LivePerson"
    },
    {
      id: "dream",
      title: "Rendra Nur Yuliadi",
      subtitle: "Pengembangan Teknologi",
      badge: "TERUS BERKEMBANG",
      src: "/images/hero-rendra-poster-dream.png",
      details: "Berpengalaman membangun aplikasi web, chatbot, dan sistem IoT"
    },
    {
      id: "rendra",
      title: "Rendra Nur Yuliadi",
      subtitle: "Profil Pribadi",
      badge: "SIAP BERKOLABORASI",
      src: "/images/hero-rendra-poster-rendra.png",
      details: "Menerjemahkan ide menjadi solusi digital yang bermanfaat"
    }
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillDetails = {
    "Full-Stack Web Development": {
      label: "Bidang Utama",
      groups: [
        { title: "Frontend", items: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Vite", "Inertia.js"] },
        { title: "Backend", items: ["PHP & Laravel", "Node.js", "REST API", "Integrasi API", "Autentikasi & Otorisasi", "Role-Based Access Control (RBAC)"] },
        { title: "Database", items: ["MySQL", "MongoDB"] },
        { title: "Tools", items: ["Git & GitHub", "Postman", "VS Code", "Figma"] }
      ]
    },
    "Conversational AI & Generative AI": {
      label: "Bidang Profesional",
      description: "Pengalaman implementasi chatbot untuk klien perusahaan dan instansi.",
      groups: [
        { title: "Keahlian Utama", items: ["LivePerson AI Studio", "Pengembangan Chatbot", "Conversation Flow Design", "Prompt Engineering", "OpenAI GPT", "Google Gemini", "Knowledge AI", "Retrieval-Augmented RAG"] },
        { title: "Integrasi", items: ["Custom Function Node.js", "Function Calling", "Dynamic Response & Carousel", "Integrasi REST API", "Evaluasi Respons AI", "Migrasi Model AI", "Local LLM dengan LM Studio"] }
      ]
    },
    "IoT & Hardware Development": {
      label: "Bidang Pendukung",
      groups: [
        { title: "Perangkat & Pemrograman", items: ["ESP32", "Arduino", "RFID RC522", "Sensor Ultrasonik", "Sensor IR", "Relay", "Servo Motor", "Pemrograman Mikrokontroler"] },
        { title: "Integrasi Sistem", items: ["Koneksi Hardware ke Web", "Monitoring Data Sensor", "Dashboard IoT", "Kontrol Perangkat Real-time"] }
      ]
    },
    "Software Engineering": {
      label: "Kemampuan Pendukung",
      description: "Kemampuan lintas bidang untuk membangun aplikasi yang terstruktur dan mudah dipelihara.",
      groups: [
        { title: "Pengembangan", items: ["Software Development", "System & Database Design", "Application Architecture", "Pemrosesan JSON", "Integrasi Sistem", "Otomasi Alur Kerja", "Responsive Web Design", "Debugging & Functional Testing"] }
      ]
    }
  };

  // Mouse Parallax tracking
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Scroll parallax for hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScrollY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const cardParallax1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const cardParallax2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(100);
          return;
        }
      }
    }, isDeleting ? 40 : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  const activeImg = heroImages[activeImageIndex];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#09090b]"
    >
      {/* 1. Minimalist Architectural Grid Background */}
      <div className="absolute inset-0 bg-minimal-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 mask-radial-grid bg-dot-grid opacity-25 pointer-events-none" />

      {/* 2. Luminous Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={14} />

      {/* 3. Minimalist Grayscale Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-white/[0.035] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-zinc-700/[0.04] rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Parallax Minimal Badges */}
      <motion.div
        style={{
          x: mousePosition.x * 24,
          y: mousePosition.y * 24,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="absolute top-28 left-8 hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-xl shadow-xl z-20 pointer-events-none"
      >
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <Terminal className="h-3.5 w-3.5 text-zinc-400" />
        <span>LivePerson AI Studio Active</span>
      </motion.div>

      <motion.div
        style={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
        className="absolute bottom-24 left-12 hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300 backdrop-blur-xl shadow-xl z-20 pointer-events-none"
      >
        <Cpu className="h-3.5 w-3.5 text-zinc-400" />
        <span>ESP32 + RFID Hardware Mesh</span>
      </motion.div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          style={{ y: heroScrollY, opacity: heroOpacity }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* ================= LEFT COLUMN: HERO CONTENT ================= */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-7">
            
            {/* Status & Active Persona Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-medium text-zinc-300 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{data.personal.status}</span>
              </div>

              {/* Persona Tag */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs font-mono text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                <span>{currentPersona.badge}</span>
              </div>
            </div>

            {/* Dynamic Typewriter Heading */}
            <div className="space-y-3">
              <p className="text-base sm:text-lg font-mono text-zinc-400 font-medium">
                Halo, selamat datang!
              </p>
              
              <div className="min-h-[3.8rem] sm:min-h-[4.5rem] flex items-center justify-center lg:justify-start flex-wrap gap-x-3">
                <span className="text-3xl sm:text-5xl font-extrabold text-zinc-400">
                  Saya seorang
                </span>
                <span className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight inline-flex items-center">
                  {displayText}
                  <span className="inline-block w-1 h-8 sm:h-11 bg-white ml-1.5 animate-pulse" />
                </span>
              </div>

              {/* Persona Subheadline */}
              <h2 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-300">
                {currentPersona.headline}
              </h2>
            </div>

            {/* Bio paragraph */}
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              {currentPersona.bio}
            </p>

            {/* Persona Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-zinc-300 pt-1">
              {currentPersona.highlights.map((item, idx) => (
                <motion.button
                  key={idx}
                  type="button"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (skillDetails[item]) setSelectedSkill({ title: item, ...skillDetails[item] });
                  }}
                  className="flex items-start gap-2.5 text-left bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-900 transition-colors disabled:cursor-default"
                  disabled={!skillDetails[item]}
                >
                  <CheckCircle2 className="h-4 w-4 text-zinc-300 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.button>
              ))}
            </div>

            {/* Action Buttons: Minimalist Monochrome with Tap/Hover Animations */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-sm shadow-xl shadow-black/40 transition-colors"
              >
                <span>Jelajahi Proyek</span>
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <motion.button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-ai-assistant'))}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="ai-assistant-button group"
              >
                <span className="ai-button-content">
                  <Bot className="h-4 w-4 text-zinc-300" />
                  <span>Coba AI Assistant</span>
                </span>
                <span className="ai-orbit-dot ai-orbit-dot-1" />
                <span className="ai-orbit-dot ai-orbit-dot-2" />
                <span className="ai-orbit-dot ai-orbit-dot-3" />
              </motion.button>

            </div>

            {/* Social Media Links & Connect Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-zinc-400">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 mr-1">
                Connect:
              </span>
              <motion.a
                href={data.personal.contact.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                title="GitHub"
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={data.personal.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={data.personal.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.92 }}
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="h-4 w-4" />
              </motion.a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: 3-IMAGE PARALLAX SHOWCASE ================= */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            
            {/* Interactive 3-Card Parallax Stage */}
            <div className="relative w-full max-w-[500px] h-[480px] sm:h-[530px] flex items-center justify-center">

              {/* Background ambient card glow */}
              <div className="absolute inset-0 rounded-3xl bg-zinc-800/20 blur-2xl" />

              {/* Companion Card 1 */}
              <div
                onClick={() => setActiveImageIndex((activeImageIndex + 1) % 3)}
                className="absolute left-0 top-10 w-[240px] sm:w-[280px] h-[340px] sm:h-[390px] rotate-[-7deg] rounded-3xl border border-zinc-800/80 bg-zinc-900/90 overflow-hidden cursor-pointer shadow-2xl opacity-50 hover:opacity-90 transition-opacity z-0"
              >
                <img
                  src={heroImages[(activeImageIndex + 1) % 3].src}
                  alt="Foto portrait pendamping"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Companion Card 2 */}
              <div
                onClick={() => setActiveImageIndex((activeImageIndex + 2) % 3)}
                className="absolute right-0 bottom-8 w-[240px] sm:w-[280px] h-[340px] sm:h-[390px] rotate-[7deg] rounded-3xl border border-zinc-800/80 bg-zinc-900/90 overflow-hidden cursor-pointer shadow-2xl opacity-50 hover:opacity-90 transition-opacity z-0"
              >
                <img
                  src={heroImages[(activeImageIndex + 2) % 3].src}
                  alt="Foto portrait pendamping"
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Main Featured Center Card (Active Parallax Layer) */}
              <div
                className="relative z-10 w-[290px] sm:w-[340px] h-[420px] sm:h-[470px] rounded-3xl border border-zinc-700 bg-zinc-950/95 overflow-hidden shadow-2xl shadow-black/80 flex flex-col justify-between group"
              >
                {/* Photo Display */}
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={activeImg.src}
                    alt={activeImg.title}
                    className="w-full h-full object-cover filter contrast-105"
                  />

                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/20 pointer-events-none" />

                  {/* Top Bar inside Card */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-700 text-[11px] font-mono text-zinc-200 backdrop-blur-md">
                      <Sparkles className="h-3 w-3 text-zinc-300" />
                      {activeImg.badge}
                    </span>

                    <button
                      onClick={() => setLightboxImage(activeImg)}
                      title="Perbesar Foto"
                      className="p-2 rounded-xl bg-black/70 border border-zinc-700 text-zinc-300 hover:text-white hover:bg-black transition-all"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Bottom Info Bar inside Card */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-left space-y-1">
                    <div className="text-[11px] font-mono text-zinc-400">
                      {activeImg.subtitle}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                      {activeImg.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 pt-0.5">
                      {activeImg.details}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* 3-Image Selector */}
            <div className="mt-4 flex items-center gap-2 p-1.5 rounded-2xl bg-zinc-950/80 border border-zinc-800 backdrop-blur-md">
              {heroImages.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-mono transition-all ${
                    activeImageIndex === idx
                      ? 'bg-zinc-800 text-white font-semibold border border-zinc-600 shadow-md'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-5 h-5 rounded-md object-cover border border-zinc-700"
                  />
                  <span className="hidden sm:inline">{img.badge}</span>
                  <span className="sm:hidden">0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Quick Metrics Bar below photos */}
            <div className="w-full max-w-[500px] grid grid-cols-3 gap-2.5 mt-5">
              <div className="p-3 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 text-center">
                <div className="text-xl font-bold font-mono text-white">11</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Proyek</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 text-center">
                <div className="text-xl font-bold font-mono text-white">7</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Chatbot AI</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-950/70 border border-zinc-800/90 text-center">
                <div className="text-xl font-bold font-mono text-white">S1</div>
                <div className="text-[10px] font-mono text-zinc-400 uppercase mt-0.5">Informatika UNSAP</div>
              </div>
            </div>

          </div>

        </motion.div>
      </div>

      {/* ================= SKILL DETAIL MODAL ================= */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 18, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 18, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[82vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-5 sm:p-7 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-400 hover:text-white"
                aria-label="Tutup"
              >
                <X className="h-4 w-4" />
              </button>

              <p className="pr-12 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                {selectedSkill.label}
              </p>
              <h3 className="mt-2 pr-12 text-xl sm:text-2xl font-bold text-white">
                {selectedSkill.title}
              </h3>
              {selectedSkill.description && (
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {selectedSkill.description}
                </p>
              )}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {selectedSkill.groups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4">
                    <h4 className="text-sm font-bold text-zinc-100">{group.title}</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-[11px] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedSkill(null)}
                  className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-200 hover:bg-zinc-800"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= LIGHTBOX ZOOM MODAL ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-900/60">
                <div>
                  <h4 className="text-sm font-bold text-white">{lightboxImage.title}</h4>
                  <p className="text-xs text-zinc-400">{lightboxImage.subtitle}</p>
                </div>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-2 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/50">
                <img
                  src={lightboxImage.src}
                  alt={lightboxImage.title}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl border border-zinc-800"
                />
              </div>

              <div className="p-4 border-t border-zinc-800 bg-zinc-900/40 text-xs text-zinc-300 text-center">
                {lightboxImage.details}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
