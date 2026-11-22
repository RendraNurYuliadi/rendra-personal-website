import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, ChevronLeft, ChevronRight, X } from 'lucide-react';

function CertificateArtwork({ certificate, className = '' }) {
  const gradientId = `certificate-gradient-${certificate.id}`;

  return (
    <svg
      viewBox="0 0 1200 820"
      role="img"
      aria-label={`Placeholder sertifikat: ${certificate.title}`}
      className={className}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={certificate.accent} stopOpacity="0.22" />
          <stop offset="100%" stopColor="#09090b" stopOpacity="0.98" />
        </linearGradient>
      </defs>
      <rect width="1200" height="820" fill="#09090b" />
      <rect x="28" y="28" width="1144" height="764" rx="18" fill={`url(#${gradientId})`} stroke="#71717a" strokeOpacity="0.65" strokeWidth="3" />
      <rect x="52" y="52" width="1096" height="716" rx="12" fill="none" stroke={certificate.accent} strokeOpacity="0.65" strokeWidth="2" />
      <path d="M75 155 H1125 M75 665 H1125" stroke="#52525b" strokeOpacity="0.7" strokeWidth="2" />
      <circle cx="600" cy="410" r="118" fill={certificate.accent} fillOpacity="0.08" stroke={certificate.accent} strokeOpacity="0.65" strokeWidth="3" />
      <circle cx="600" cy="410" r="94" fill="none" stroke={certificate.accent} strokeOpacity="0.4" strokeWidth="2" strokeDasharray="8 12" />
      <text x="600" y="112" textAnchor="middle" fill="#a1a1aa" fontSize="24" letterSpacing="8" fontFamily="Arial, sans-serif">
        DUMMY CERTIFICATE
      </text>
      <text x="600" y="265" textAnchor="middle" fill="#f4f4f5" fontSize="46" fontWeight="700" fontFamily="Arial, sans-serif">
        CERTIFICATE OF ACHIEVEMENT
      </text>
      <text x="600" y="350" textAnchor="middle" fill="#a1a1aa" fontSize="24" fontFamily="Arial, sans-serif">
        THIS PLACEHOLDER IS AWARDED TO
      </text>
      <text x="600" y="465" textAnchor="middle" fill="#ffffff" fontSize="46" fontWeight="700" fontFamily="Arial, sans-serif">
        RENDRA NUR YULIADI
      </text>
      <text x="600" y="545" textAnchor="middle" fill="#d4d4d8" fontSize="28" fontFamily="Arial, sans-serif">
        {certificate.title}
      </text>
      <text x="600" y="720" textAnchor="middle" fill="#a1a1aa" fontSize="22" letterSpacing="3" fontFamily="Arial, sans-serif">
        SAMPLE ASSET - REPLACE WITH REAL CERTIFICATE
      </text>
      <circle cx="600" cy="410" r="66" fill={certificate.accent} fillOpacity="0.16" />
      <text x="600" y="422" textAnchor="middle" fill={certificate.accent} fontSize="34" fontWeight="700" letterSpacing="3" fontFamily="Arial, sans-serif">
        SAMPLE
      </text>
    </svg>
  );
}

export default function CertificatesShowcase({ certificates }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const activeCertificate = certificates[activeIndex];

  const showCertificate = (nextIndex) => {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex(nextIndex);
  };

  const showPrevious = () => {
    showCertificate((activeIndex - 1 + certificates.length) % certificates.length);
  };

  const showNext = () => {
    showCertificate((activeIndex + 1) % certificates.length);
  };

  return (
    <section id="certificates" className="relative overflow-hidden border-t border-zinc-800/80 bg-[#09090b] py-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3.5 py-1 font-mono text-xs text-zinc-300">
            <Award className="h-3.5 w-3.5 text-zinc-400" />
            <span>CERTIFICATES &amp; ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Sertifikat &amp; <span className="text-gradient-mono">Pencapaian</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
            Koleksi sertifikat dan pencapaian. Aset saat ini berupa contoh dan dapat diganti dengan dokumen asli.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950/90 shadow-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeCertificate.id}
              custom={direction}
              initial={(dir) => ({ opacity: 0, x: dir * 48 })}
              animate={{ opacity: 1, x: 0 }}
              exit={(dir) => ({ opacity: 0, x: dir * -48 })}
              transition={{ duration: 0.3 }}
              className="grid min-h-[420px] grid-cols-1 lg:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(activeCertificate)}
                className="group relative flex min-h-[260px] items-center justify-center overflow-hidden bg-zinc-900 p-5 text-left sm:min-h-[360px] lg:col-span-6 lg:min-h-[460px]"
                aria-label={`Lihat detail ${activeCertificate.title}`}
              >
                <CertificateArtwork
                  certificate={activeCertificate}
                  className="h-full max-h-[440px] w-full rounded-xl object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-8 left-8 rounded-full border border-white/15 bg-black/70 px-3 py-1.5 font-mono text-[10px] tracking-wider text-zinc-200 backdrop-blur">
                  DUMMY ASSET
                </span>
              </button>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:p-10">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-200">
                      {activeCertificate.category}
                    </span>
                    <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-xs text-zinc-500">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(certificates.length).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {activeCertificate.title}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-zinc-400">
                    {activeCertificate.issuer} <span className="text-zinc-600">/</span> {activeCertificate.date}
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300">
                    {activeCertificate.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeCertificate.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-zinc-800 pt-5">
                  <button
                    type="button"
                    onClick={() => setSelectedCertificate(activeCertificate)}
                    className="text-sm font-semibold text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white"
                  >
                    Lihat detail sertifikat
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPrevious}
                      aria-label="Sertifikat sebelumnya"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNext}
                      aria-label="Sertifikat berikutnya"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {certificates.map((certificate, index) => (
            <button
              key={certificate.id}
              type="button"
              onClick={() => showCertificate(index)}
              aria-label={`Tampilkan sertifikat ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-5"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: 'spring', stiffness: 260, damping: 26 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-6xl overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-4 shadow-2xl sm:p-7"
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Tutup detail sertifikat"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-300 transition hover:text-white sm:right-6 sm:top-6"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-6 pt-10 lg:grid-cols-2 lg:pt-0">
                <div className="flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 p-3 sm:min-h-[420px]">
                  <CertificateArtwork
                    certificate={selectedCertificate}
                    className="w-full rounded-lg object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center py-2 lg:px-4">
                  <span className="w-fit rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
                    {selectedCertificate.category} · DUMMY
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    {selectedCertificate.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">
                    {selectedCertificate.issuer} · {selectedCertificate.date}
                  </p>
                  <p className="mt-6 text-sm leading-7 text-zinc-300">
                    {selectedCertificate.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-500">
                      Kompetensi
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertificate.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 border-t border-zinc-800 pt-4 font-mono text-xs text-zinc-500">
                    ID: {selectedCertificate.credentialId}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
