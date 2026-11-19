import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, MessageSquare, Send, Github, Linkedin, 
  MapPin, Copy, Check, CheckCircle2 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import GlowingParticlesSectionBg from './GlowingParticlesSectionBg';

export default function ContactSection({ contact, location }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'AI Chatbot Development',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const services = [
    'AI Chatbot Development (LivePerson / Gemini)',
    'Full-Stack Web App (React / Laravel / Node)',
    'IoT & Hardware Prototype (ESP32)',
    'Diskusi Proyek & Konsultasi'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // fallback
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        service: 'AI Chatbot Development',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#09090b] border-t border-zinc-800/80 overflow-hidden">
      {/* Background Glowing Moving Particles with Box-Shadow */}
      <GlowingParticlesSectionBg count={12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Mail className="h-3.5 w-3.5 text-zinc-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Berkolaborasi & <span className="text-gradient-mono">Bangun Solusi Nyata</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Punya ide proyek sistem AI chatbot, website modern, atau otomasi hardware IoT? Diskusikan langsung sekarang.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Info with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            
            {/* Quick Email Card */}
            <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 backdrop-blur-md shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Direct Email:
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1 text-[11px] font-mono text-white hover:text-zinc-300 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Salin Email</span>
                    </>
                  )}
                </motion.button>
              </div>
              <div className="text-base font-bold text-white font-mono break-all">
                {contact.email}
              </div>
            </div>

            {/* Direct WhatsApp Card with Hover/Tap Animation */}
            <motion.a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="group p-5 rounded-3xl bg-zinc-950 border border-zinc-800 hover:border-zinc-500 transition-all flex items-center justify-between block shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
            >
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-1">
                  Chat Langsung via WhatsApp:
                </span>
                <span className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                  {contact.whatsappNumber}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-200 group-hover:scale-105 transition-transform shadow-inner">
                <MessageSquare className="h-5 w-5" />
              </div>
            </motion.a>

            {/* Social Links & Location Card */}
            <div className="p-5 rounded-3xl bg-zinc-950 border border-zinc-800 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <MapPin className="h-4 w-4 text-zinc-400 shrink-0" />
                <span>{location}</span>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 flex items-center gap-3">
                <motion.a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-all flex-1 justify-center"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.94 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white hover:border-zinc-600 transition-all flex-1 justify-center"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>

            {/* Status Commitment Badge */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-center gap-2.5">
              <CheckCircle2 className="h-4 w-4 text-zinc-300 shrink-0" />
              <span>Respon rata-rata dalam waktu &lt; 24 jam untuk setiap pertanyaan kerja sama.</span>
            </div>

          </motion.div>

          {/* Right Column: Minimalist Contact Form with Scroll Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-zinc-900 text-white border border-zinc-700 shadow-md">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Pesan Berhasil Terkirim!
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                    Terima kasih telah menghubungi. Saya akan meninjau pesan Anda dan segera memberikan respon balik melalui email.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium transition-all border border-zinc-700"
                  >
                    Kirim Pesan Lainnya
                  </motion.button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Pratama"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@example.com"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Layanan / Topik Diskusi
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-zinc-500 transition-all"
                    >
                      {services.map((s, idx) => (
                        <option key={idx} value={s} className="bg-zinc-900 text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Pesan / Ringkasan Kebutuhan *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan gambaran sistem yang ingin Anda bangun atau informasi yang Anda perlukan..."
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-all resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3.5 rounded-2xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs sm:text-sm shadow-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </motion.button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
