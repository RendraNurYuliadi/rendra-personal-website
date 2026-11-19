# 🚀 Rendra Nur Yuliadi — Modern Interactive Portfolio

Website portofolio modern, futuristik, dan interaktif yang dibangun menggunakan **React, Vite, Node.js, Tailwind CSS, dan Lucide Icons**. Didesain khusus dengan tema *Dark Cyber Minimalist*, animasi loop, efek paralaks, splashscreen, dan arsitektur modular yang mendukung multi-persona (**Persona 1: Software & AI Developer** dan **Persona 2: GenAI & Conversational AI Specialist**).

---

## ✨ Fitur & Komponen Unggulan

1. **⚡ Futuristic Splash Screen**
   - Animasi terminal boot sequence, persentase loading aset digital, dan transisi fade-out halus.
   - Opsi tombol *Skip Intro* untuk akses langsung.

2. **🎛️ Dynamic Persona Switcher (Persona 1 & Persona 2)**
   - Tombol toggle di navbar dan menu mobile untuk beralih instan antara:
     - **Persona 1:** Full-Stack & Software Developer (Laravel, React, Node.js, Arsitektur Sistem).
     - **Persona 2:** GenAI & Conversational AI Specialist (LivePerson, Lexus PH/VN, Gemini, GPT).
   - Seluruh headline, bio, dan highlight berubah secara dinamis dan reaktif.

3. **🔄 Hero Section dengan Kalimat Dinamis (Loop Typewriter)**
   - Kalimat pembuka berubah otomatis secara dinamis:
     - *"Saya seorang Web Developer"*
     - *"Saya seorang Full-Stack Developer"*
     - *"Saya seorang AI Chatbot Developer"*
     - *"Saya seorang GenAI Specialist"*
     - *"Saya seorang Conversation Designer"*
     - *"Saya seorang IoT & Smart Systems Builder"*
   - Dilengkapi kursor neon cyan berkedip dan transisi ketik halus.
   - Kartu metrik live interaktif dan badge enterprise chatbot (*Lexus, SPTel, Pemda Bogor*).

4. **🏹 Sticky Button di Sudut Kiri Bawah (Scroll to Hero)**
   - Tombol mengambang di pojok kiri bawah dengan ikon panah melayang ke atas.
   - Muncul otomatis saat pengguna melakukan scroll ke bawah, dengan animasi glow neon dan smooth scroll ke Hero Section.

5. **♾️ Dual Infinite Loop Marquee (Tech Stack)**
   - Animasi marquee loop dua arah tanpa henti menampilkan teknologi: *React, LivePerson, Gemini, GPT-4, Node.js, Tailwind, Laravel, ESP32, RFID, TypeScript*.
   - Filter tab kategori (*All, AI & LLM, Frontend, Backend, IoT & Hardware, Tools*).

6. **🎠 Flagship Projects Interactive Carousel**
   - Slider carousel interaktif untuk proyek unggulan (*FAMS, NOVENTRA, Lexus Philippines, Lexus Vietnam, Tahungoding LMS*).
   - Tombol Play/Pause autoplay, indikator titik slide, dan navigasi Next/Prev.

7. **🃏 Katalog Proyek Lengkap (3D Tilt Cards & Detail Modal)**
   - Filter kategori: *Semua Proyek, Enterprise AI, Full-Stack Web, IoT & Hardware, AI Research & Robotics*.
   - Modal popup lengkap menampilkan: Latar Belakang Masalah, Solusi, Kontribusi Teknis Nyata, dan Status Proyek (*Production / Working Prototype / Academic / Concept*).

8. **🤖 Live Interactive AI Assistant Simulation**
   - Widget chatbot interaktif di dalam portofolio yang mensimulasikan keahlian Rendra di bidang conversational AI dan prompt engineering.
   - Pengunjung dapat menanyakan seputar peran di LivePerson, proyek FAMS, migrasi Gemini, atau konsultasi proyek.

9. **🖼️ Galeri Visual & Arsitektur Sistem**
   - Dokumentasi visual arsitektur blueprint sistem, skema flow chatbot, dan miniatur IoT dengan modal lightbox zoom.

10. **🎓 Edukasi & Fondasi Akademik**
    - S1 Informatika di Universitas Sebelas April (UNSAP) Semester 5, fokus keilmuan, dan prestasi akademik.

11. **❓ FAQ (Pertanyaan yang Sering Diajukan)**
    - Accordion interaktif seputar layanan AI chatbot, tech stack, integrasi hardware, dan model kerja sama freelance.

12. **📬 Formulir Kontak Interaktif + Confetti Celebration**
    - Validasi input formulir secara instan, animasi letupan confetti saat submit berhasil, tombol salin email sekali klik, dan tautan WhatsApp langsung.

13. **🟢 Node.js Production & REST API Server (`server.js`)**
    - Server backend Node.js native dengan endpoint:
      - `GET /api/health`
      - `POST /api/contact`
      - `POST /api/chat`
      - Melayani file statis produksi `dist/` untuk deployment cepat.

---

## 🛠️ Menjalankan Project

### 1. Mode Development (Vite Live Reload)
```bash
npm run dev
```
Akses di browser: `http://localhost:3000`

### 2. Build untuk Produksi
```bash
npm run build
```
Hasil build tersimpan di folder `dist/` yang telah teroptimasi dan siap deploy.

### 3. Menjalankan Node.js Backend & Static Server
```bash
npm run server
# atau
node server.js
```
Akses di browser: `http://localhost:5000`

---

## 📂 Struktur File

```
├── dist/                      # File hasil kompilasi produksi
├── public/                    # Aset publik statis
├── src/
│   ├── components/
│   │   ├── SplashScreen.jsx      # Intro cyber boot loading
│   │   ├── Navbar.jsx            # Glassmorphic navbar + Persona toggle
│   │   ├── Hero.jsx              # Hero dinamis + Typewriter text
│   │   ├── StickyScrollTop.jsx   # Tombol sticky di sudut kiri bawah
│   │   ├── SkillsMarquee.jsx     # Dual infinite loop marquee
│   │   ├── About.jsx             # Profil, filosofi, JSON code viewer
│   │   ├── ExperienceTimeline.jsx# Pengalaman kerja LivePerson & freelance
│   │   ├── CarouselSection.jsx   # Flagship project carousel
│   │   ├── ProjectsShowcase.jsx  # Card proyek, filter, & modal detail
│   │   ├── AIAssistantWidget.jsx # Simulasi chatbot AI interaktif
│   │   ├── GallerySection.jsx    # Galeri visual arsitektur & IoT
│   │   ├── EducationSection.jsx  # Profil akademik UNSAP
│   │   ├── FAQSection.jsx        # Accordion tanya-jawab
│   │   ├── ContactSection.jsx    # Form kontak + efek confetti
│   │   └── Footer.jsx            # Footer & shortcut navigasi
│   ├── data/
│   │   └── portfolioData.js      # Konfigurasi data Persona 1 & Persona 2
│   ├── App.jsx                   # Root application container
│   ├── index.css                 # Custom cyber neon & Tailwind CSS
│   └── main.jsx                  # Entry point React
├── index.html                    # Single Page Application template
├── package.json                  # Dependencies & scripts
├── server.js                     # Backend REST API & file server Node.js
├── tailwind.config.js            # Konfigurasi styling Tailwind CSS
└── vite.config.js                # Konfigurasi bundler Vite
```

---

## ✏️ Kustomisasi Persona

Seluruh informasi personal, proyek, pengalaman, dan persona disimpan secara terstruktur di:
```
src/data/portfolioData.js
```
Jika Anda ingin menambahkan atau memperbarui data persona baru yang terpisah, cukup sesuaikan objek `personas` di file tersebut, dan antarmuka akan langsung menyesuaikan secara otomatis.

