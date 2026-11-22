import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function NewsletterSubscription() {
  const [notice, setNotice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice('Form belum terhubung ke layanan subscription. Email Anda belum dikirim atau disimpan.');
  };

  return (
    <section id="subscription" className="relative overflow-hidden border-t border-zinc-800/80 bg-[#09090b] py-16">
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-black px-6 py-9 text-center shadow-2xl shadow-black/50 sm:px-10 sm:py-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full bg-zinc-700/10 blur-3xl" />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-3.5 py-1 font-mono text-xs text-zinc-300">
              <Mail className="h-3.5 w-3.5 text-zinc-400" />
              <span>EMAIL UPDATES</span>
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Ikuti <span className="text-gradient-mono">Update Terbaru</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-400">
              Tinggalkan email untuk mendapatkan kabar terbaru seputar proyek dan teknologi.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row">
              <label htmlFor="subscription-email" className="sr-only">Alamat email</label>
              <input
                id="subscription-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="nama@email.com"
                className="min-w-0 flex-1 rounded-full border border-zinc-800 bg-zinc-950 px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-zinc-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                Berlangganan
                <Send className="h-4 w-4" />
              </button>
            </form>

            <p aria-live="polite" className="mt-4 min-h-5 text-xs text-zinc-500">
              {notice || 'Form tampilan saja; email belum dikirim atau disimpan.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
