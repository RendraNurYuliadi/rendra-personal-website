export const portfolioData = {
  personal: {
    name: "Rendra Nur Yuliadi",
    shortName: "Rendra",
    title: "Software Developer | Conversational AI",
    tagline: "Membangun aplikasi web dan chatbot AI.",
    brandStatement: "Memahami masalah, menentukan solusi, lalu membangunnya menjadi sesuatu yang berfungsi.",
    location: "Sumedang, Jawa Barat, Indonesia",
    status: "Terbuka untuk proyek dan kolaborasi",
    avatar: "/images/rendra-casual.jpg",
    heroImages: [
      {
        id: "casual",
        title: "Rendra Nur Yuliadi",
        subtitle: "Software Developer & Conversational AI",
        tag: "Profil",
        src: "/images/rendra-casual.jpg",
        description: "Mengerjakan pengembangan web, chatbot berbasis LLM, dan integrasi API."
      },
      {
        id: "poster1",
        title: "Web Full-Stack & IoT",
        subtitle: "Poster 01",
        tag: "Engineering",
        src: "/images/rendra-poster-1.jpg",
        description: "Ringkasan proyek web full-stack dan IoT berbasis mikrokontroler."
      },
      {
        id: "poster2",
        title: "Chatbot Enterprise",
        subtitle: "Poster 02",
        tag: "GenAI & LLM",
        src: "/images/rendra-poster-2.jpg",
        description: "Ringkasan proyek chatbot di LivePerson (Lexus, SPTel) dan eksperimen multi-agent."
      }
    ],
    languages: ["Bahasa Indonesia (Native)", "English (Professional Working)"],
    roles: [
      "Conversational AI Developer",
      "Full-Stack Web Developer",
      "Software Developer",
      "IoT Developer (ESP32)",
      "LLM & AI Agent Developer"
    ],
    contact: {
      email: "rendranur.dev@gmail.com",
      github: "https://github.com/RendraNurYuliadi",
      githubUser: "RendraNurYuliadi",
      linkedin: "https://linkedin.com/in/rendra-nur-yuliadi",
      whatsapp: "https://wa.me/6281234567890",
      whatsappNumber: "+62 812-3456-7890",
      instagram: "https://instagram.com/rendranuryuliadi"
    }
  },

  personas: {
    persona1: {
      id: "persona1",
      badge: "Fokus: Pengembangan Web & Chatbot",
      title: "Full-Stack Developer & AI Chatbot Developer",
      headline: "Aplikasi web dan chatbot yang rapi dan mudah dipakai.",
      bio: "Software developer yang mengerjakan aplikasi web, chatbot AI, dan otomasi proses kerja. Saya menyusun arsitektur aplikasi yang jelas, performanya baik, dan antarmukanya mudah dipakai.",
      highlights: [
        "Full-Stack Web Development",
        "Conversational AI & Generative AI",
        "IoT & Hardware Development",
        "Software Engineering"
      ]
    },
    persona2: {
      id: "persona2",
      badge: "Fokus: GenAI & Chatbot Enterprise",
      title: "Conversational AI Developer",
      headline: "Chatbot berbasis LLM untuk klien perusahaan dan instansi pemerintah.",
      bio: "Mahasiswa Informatika yang bekerja di LivePerson menangani chatbot untuk klien seperti Lexus Philippines, Lexus Vietnam, SPTel, dan beberapa instansi pemerintah daerah. Pekerjaan saya meliputi integrasi LLM (OpenAI GPT dan Google Gemini), penyusunan prompt, dan proyek IoT dengan ESP32.",
      highlights: [
        "Chatbot enterprise untuk Lexus Philippines dan Lexus Vietnam",
        "Migrasi model dari GPT ke Gemini dan penyesuaian respons bot",
        "Integrasi ESP32 dan RFID dengan dashboard web",
        "Eksperimen AI agent, function calling, dan konsep robot humanoid"
      ]
    }
  },

  stats: [
    { value: "9", label: "Proyek Tercantum", icon: "Code2" },
    { value: "7", label: "Chatbot Enterprise & Pemerintah", icon: "Bot" },
    { value: "2+", label: "Tahun Pengalaman Software & AI", icon: "Cpu" },
    { value: "2", label: "Platform LLM: GPT & Gemini", icon: "Sparkles" }
  ],

  experiences: [
    {
      id: "savala",
      role: "AI Chatbot Developer",
      company: "PT SAVALA Inovasi Indonesia",
      period: "Juli 2024 - Sekarang",
      type: "Pengalaman Profesional",
      location: "Indonesia",
      description: "Terlibat dalam pengembangan solusi chatbot berbasis AI untuk kebutuhan bisnis dan layanan pelanggan.",
      responsibilities: [
        "Merancang alur percakapan chatbot.",
        "Mengembangkan prompt dan instruksi AI.",
        "Mengintegrasikan model OpenAI GPT dan Google Gemini ke dalam Bot Conversation.",
        "Mengelola knowledge base dan intent.",
        "Mengembangkan custom function menggunakan Node.js.",
        "Mengintegrasikan REST API dan mengolah data JSON."
      ],
      projects: ["Lexus Philippines", "Lexus Vietnam", "SPTel", "Sekolah Auliya", "Kabupaten Bogor", "Kota Bogor", "Kabupaten Karawang"],
      technologies: ["LivePerson AI Studio", "OpenAI GPT", "Google Gemini", "Node.js", "REST API", "Knowledge AI"]
    },
    {
      id: "tahungoding",
      role: "Pengurus / Anggota",
      company: "UKM TahuNgoding - UNSAP",
      period: "2024 - Sekarang",
      type: "Pengalaman Organisasi",
      location: "UNSAP",
      description: "Terlibat dalam kegiatan organisasi dan pengembangan program kerja di lingkungan UKM TahuNgoding.",
      responsibilities: [
        "Berpartisipasi dalam kegiatan dan program kerja organisasi.",
        "Terlibat dalam kegiatan divisi Diklatbang dan BPH.",
        "Membantu koordinasi kegiatan dan komunikasi antaranggota.",
        "Berkontribusi dalam pengembangan LMS TahuNgoding sebagai QA dan penyusunan panduan pengguna untuk mentor dan anggota."
      ],
      projects: [],
      technologies: []
    }
  ],

  projects: [
    {
      id: "lexus-ph",
      title: "Lexus Philippines AI Assistant",
      subtitle: "Chatbot Enterprise untuk Otomotif",
      category: "ai-enterprise",
      categoryLabel: "Enterprise AI",
      status: "Production",
      client: "Lexus Philippines (via LivePerson)",
      description: "Chatbot untuk calon pembeli Lexus di Filipina. Menjawab pertanyaan model dan spesifikasi, simulasi pembiayaan, booking test drive, dan mengumpulkan data calon pembeli.",
      problem: "Pertanyaan pelanggan tentang katalog mobil masuk juga di luar jam kerja dan perlu dijawab dengan cepat dan akurat.",
      contributions: [
        "Merancang alur test drive dan pengumpulan data lead.",
        "Menyusun prompt untuk jawaban spesifikasi katalog.",
        "Mengintegrasikan REST API ke CRM dan knowledge base.",
        "Menguji fungsi bot dan memperbaiki akurasi jawaban."
      ],
      technologies: ["LivePerson AI Studio", "OpenAI GPT", "Google Gemini", "REST API", "Prompt Engineering"],
      featured: true,
      accentColor: "from-amber-500 to-yellow-600",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "lexus-vn",
      title: "Lexus Vietnam Conversational AI",
      subtitle: "Chatbot Multibahasa dengan Migrasi ke Gemini",
      category: "ai-enterprise",
      categoryLabel: "Enterprise AI",
      status: "Production",
      client: "Lexus Vietnam (via LivePerson)",
      description: "Chatbot untuk pelanggan Lexus di Vietnam dengan dukungan dua bahasa dan informasi dealer terdekat. Implementasi AI-nya dipindahkan dari GPT ke Google Gemini.",
      problem: "Pelanggan perlu dijawab dalam bahasa lokal, dan klien ingin menurunkan latensi dan biaya API.",
      contributions: [
        "Memimpin migrasi implementasi AI dari OpenAI GPT ke Google Gemini.",
        "Merancang alur percakapan untuk harga, ketersediaan dealer, dan layanan purna jual.",
        "Menjalankan regression test untuk performa model dan akurasi knowledge base.",
        "Mengatur respons dinamis berdasarkan lokasi dealer."
      ],
      technologies: ["LivePerson AI Studio", "Google Gemini", "OpenAI GPT", "REST API", "JSON"],
      featured: true,
      accentColor: "from-blue-600 to-cyan-500",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "fams",
      title: "FAMS — Faculty Asset & Facility System",
      subtitle: "Aplikasi Web dengan Integrasi RFID ESP32",
      category: "web-software",
      categoryLabel: "Full-Stack & Hardware",
      status: "Dalam pengembangan (akademik)",
      client: "Fakultas Teknologi Informasi UNSAP",
      description: "Sistem manajemen aset dan fasilitas kampus berbasis web yang terhubung dengan pembaca RFID ESP32. Dipakai untuk peminjaman, pengembalian, dan laporan kerusakan barang.",
      problem: "Pencatatan aset secara manual rawan hilang, peminjaman lambat, dan kondisi barang tidak terpantau.",
      contributions: [
        "Membangun antarmuka dengan React, Inertia.js, dan Tailwind CSS.",
        "Merancang backend Laravel 13, database MySQL, dan Role-Based Access Control (Admin, Manajer, Peminjam).",
        "Memprogram ESP32 dengan modul RFID RC522 untuk scan kartu yang terhubung ke API.",
        "Membuat alur persetujuan, reset password dengan OTP, dan tiket laporan kerusakan."
      ],
      technologies: ["Laravel 13", "React 19", "Inertia.js", "Tailwind CSS", "MySQL", "ESP32", "RFID RC522"],
      featured: true,
      accentColor: "from-cyan-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "noventra",
      title: "NOVENTRA — Smart City & Smart Home IoT",
      subtitle: "Prototipe IoT Skala Miniatur dengan Monitoring Web",
      category: "iot-robotics",
      categoryLabel: "IoT & Hardware",
      status: "Prototipe berfungsi",
      client: "Proyek riset dan prototipe",
      description: "Miniatur yang menggabungkan smart home (lampu, kipas dengan relay, kendali lewat web) dan smart city (palang parkir otomatis dengan sensor ultrasonik, sensor ketinggian air untuk deteksi banjir).",
      problem: "Menguji apakah sensor IoT berbiaya rendah bisa dipantau lewat dashboard web secara real-time.",
      contributions: [
        "Memprogram firmware ESP32 dan Arduino untuk sensor ultrasonik, servo, dan relay.",
        "Membuat dashboard web dengan Next.js dan Tailwind untuk data sensor secara langsung.",
        "Membuat logika peringatan banjir dan deteksi slot parkir kosong.",
        "Mencoba perintah bahasa natural untuk menyalakan dan mematikan perangkat."
      ],
      technologies: ["ESP32", "Arduino", "Ultrasonic Sensor", "Servo Motor", "Next.js", "Tailwind CSS", "Relay"],
      featured: true,
      accentColor: "from-purple-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tahungoding-lms",
      title: "Tahungoding Learning Management System",
      subtitle: "Platform Belajar Komunitas Developer",
      category: "web-software",
      categoryLabel: "Web Development",
      status: "Konsep dan prototipe",
      client: "Komunitas Tahungoding",
      description: "Platform belajar untuk mengelola kurikulum, pengumpulan tugas, mentor, dan pertemuan divisi (Frontend, Backend, UI/UX, dan Office).",
      problem: "Materi dan tugas komunitas tersebar di banyak grup chat, sehingga perlu satu tempat untuk materi dan progres anggota.",
      contributions: [
        "Mendesain dashboard berbasis role (Admin, Mentor, Student).",
        "Mengelola modul belajar yang berisi video YouTube dan artikel teknis.",
        "Membuat fitur pengumpulan tugas dan penilaian oleh mentor.",
        "Mengelola data anggota dan jadwal pertemuan divisi."
      ],
      technologies: ["React.js", "Node.js", "Tailwind CSS", "REST API", "Figma"],
      featured: false,
      accentColor: "from-emerald-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sekolah-auliya",
      title: "Sekolah Auliya Virtual Assistant",
      subtitle: "Chatbot untuk Sekolah",
      category: "ai-enterprise",
      categoryLabel: "Conversational AI",
      status: "Production",
      client: "Sekolah Auliya (via LivePerson)",
      description: "Asisten virtual berbasis Generative AI untuk orang tua siswa dan calon pendaftar. Menjawab pertanyaan seputar PPDB, kurikulum, biaya pendidikan, dan ekstrakurikuler.",
      problem: "Layanan informasi pendaftaran kewalahan saat musim penerimaan siswa baru.",
      contributions: [
        "Menyusun knowledge base kurikulum dan jadwal pendaftaran.",
        "Mengatur prompt Google Gemini agar bahasanya ramah dan sopan.",
        "Membuat alur percakapan bercabang untuk pertanyaan biaya dan administrasi.",
        "Memeriksa akurasi jawaban terhadap kebijakan sekolah."
      ],
      technologies: ["LivePerson AI Studio", "Google Gemini", "Knowledge AI", "Prompt Engineering"],
      featured: false,
      accentColor: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "public-service-bogor",
      title: "Chatbot Layanan Kota Bogor",
      subtitle: "Asisten Informasi dan Layanan Publik",
      category: "ai-enterprise",
      categoryLabel: "Public Sector AI",
      status: "Production",
      client: "Pemerintah Kota Bogor",
      description: "Chatbot untuk memberikan informasi layanan publik dan panduan administrasi kependudukan.",
      problem: "Warga membutuhkan informasi yang cepat dan jelas mengenai layanan pemerintahan.",
      contributions: [
        "Menyusun prompt berdasarkan dokumen regulasi daerah.",
        "Mengatur dan menguji alur percakapan di LivePerson.",
        "Memantau akurasi jawaban dan menyesuaikan respons."
      ],
      technologies: ["LivePerson", "Generative AI", "Knowledge Management", "Prompt Engineering"],
      featured: false,
      accentColor: "from-sky-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "public-service-kab-bogor",
      title: "Chatbot Layanan Kabupaten Bogor",
      subtitle: "Asisten Informasi Administrasi dan Layanan Publik",
      category: "ai-enterprise",
      categoryLabel: "Public Sector AI",
      status: "Production",
      client: "Pemerintah Kabupaten Bogor",
      description: "Chatbot untuk membantu masyarakat menemukan informasi layanan administrasi kependudukan dan dinas pemerintah.",
      problem: "Informasi persyaratan layanan perlu disampaikan secara cepat, terstruktur, dan mudah dipahami.",
      contributions: [
        "Menyusun knowledge base berdasarkan dokumen layanan.",
        "Mengembangkan prompt dan alur percakapan.",
        "Menguji konsistensi jawaban chatbot."
      ],
      technologies: ["LivePerson", "Generative AI", "Knowledge Management", "Prompt Engineering"],
      featured: false,
      accentColor: "from-sky-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "public-service-karawang",
      title: "Chatbot Layanan Kabupaten Karawang",
      subtitle: "Asisten Informasi dan Administrasi Publik",
      category: "ai-enterprise",
      categoryLabel: "Public Sector AI",
      status: "Production",
      client: "Pemerintah Kabupaten Karawang",
      description: "Chatbot untuk memberikan panduan layanan publik dan administrasi kependudukan kepada masyarakat.",
      problem: "Masyarakat membutuhkan jawaban awal yang jelas sebelum mengakses layanan pemerintah.",
      contributions: [
        "Merancang alur percakapan layanan.",
        "Menyesuaikan prompt dengan informasi resmi.",
        "Menguji akurasi dan pemahaman pertanyaan pengguna."
      ],
      technologies: ["LivePerson", "Generative AI", "Knowledge Management", "Prompt Engineering"],
      featured: false,
      accentColor: "from-sky-500 to-blue-700",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "sptel-ai",
      title: "SPTel Conversational AI",
      subtitle: "Chatbot B2B untuk Telekomunikasi",
      category: "ai-enterprise",
      categoryLabel: "Enterprise AI",
      status: "Production",
      client: "SPTel (via LivePerson)",
      description: "Chatbot untuk klien korporasi SPTel yang ingin memahami layanan konektivitas serat optik dan infrastruktur edge computing.",
      problem: "Produk telekomunikasi B2B rumit, sehingga calon klien butuh penjelasan teknis awal.",
      contributions: [
        "Mengatur alur percakapan sesuai konteks industri telekomunikasi.",
        "Menyesuaikan instruksi AI dan prompt generatif.",
        "Memeriksa kualitas jawaban model untuk pertanyaan teknis."
      ],
      technologies: ["LivePerson", "Generative AI", "Prompt Engineering", "Testing"],
      featured: false,
      accentColor: "from-indigo-500 to-purple-600",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "genai-chatbot",
      title: "GenAI Chatbot",
      subtitle: "Chatbot Berbasis LLM dan Integrasi Function Calling",
      category: "ai-research",
      categoryLabel: "AI & Generative AI",
      status: "Pengembangan dan eksperimen",
      client: "Proyek pengembangan AI",
      description: "Pengembangan chatbot berbasis model generative AI dengan kemampuan pemanggilan fungsi, integrasi API, dan pengelolaan knowledge base.",
      problem: "Chatbot perlu memberikan jawaban yang relevan dan dapat terhubung dengan layanan sistem lain.",
      contributions: [
        "Mencoba tool calling di OpenAI dan Gemini API dengan JavaScript dan Node.js.",
        "Mengatur context management agar riwayat percakapan tetap terjaga.",
        "Membuat wrapper API untuk menjalankan perintah ke database."
      ],
      technologies: ["OpenAI API", "Google Gemini API", "Node.js", "Function Calling", "JSON Schema"],
      featured: false,
      accentColor: "from-pink-500 to-rose-600",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ai-humanoid-concept",
      title: "Konsep Arsitektur Robot Humanoid dengan LLM",
      subtitle: "Riset LLM, Computer Vision, dan Penggerak Servo",
      category: "iot-robotics",
      categoryLabel: "Robotics",
      status: "Konsep dan perancangan (belum dibuat)",
      client: "Riset pribadi",
      description: "Perancangan arsitektur robot humanoid yang menggabungkan LLM multimodal, computer vision untuk mengenali objek, sensor suhu dan jarak, serta mikrokontroler untuk menggerakkan servo.",
      problem: "Menghubungkan hasil penalaran AI dengan gerakan aktuator fisik dengan latensi rendah.",
      contributions: [
        "Menyusun rancangan integrasi LLM lokal dengan mikrokontroler ESP32.",
        "Memetakan skema function calling untuk perintah fisik (gerak servo, pembacaan sensor).",
        "Menganalisis kebutuhan daya dan modul computer vision yang hemat komputasi."
      ],
      technologies: ["Microcontrollers", "Local LLM", "Computer Vision", "Servo Logic", "Robotics Hardware"],
      featured: false,
      accentColor: "from-violet-600 to-indigo-800",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    }
  ],

  certificates: [
    {
      id: "sample-web-development",
      title: "Sertifikat Pengembangan Web",
      category: "WEB DEVELOPMENT",
      issuer: "Penyelenggara Contoh",
      date: "Tahun",
      description: "Konten dummy untuk menampilkan layout sertifikat. Ganti dengan aset, penerbit, tanggal, dan deskripsi sertifikat asli.",
      credentialId: "SAMPLE-WEB-001",
      accent: "#22d3ee",
      skills: ["HTML & CSS", "JavaScript", "React"]
    },
    {
      id: "sample-generative-ai",
      title: "Sertifikat Generative AI",
      category: "ARTIFICIAL INTELLIGENCE",
      issuer: "Penyelenggara Contoh",
      date: "Tahun",
      description: "Konten dummy untuk menampilkan layout sertifikat. Ganti dengan aset, penerbit, tanggal, dan deskripsi sertifikat asli.",
      credentialId: "SAMPLE-AI-002",
      accent: "#a78bfa",
      skills: ["Generative AI", "Prompt Engineering", "LLM"]
    },
    {
      id: "sample-iot",
      title: "Sertifikat Internet of Things",
      category: "IOT & HARDWARE",
      issuer: "Penyelenggara Contoh",
      date: "Tahun",
      description: "Konten dummy untuk menampilkan layout sertifikat. Ganti dengan aset, penerbit, tanggal, dan deskripsi sertifikat asli.",
      credentialId: "SAMPLE-IOT-003",
      accent: "#fbbf24",
      skills: ["ESP32", "Sensor", "Integrasi Hardware"]
    }
  ],

  technicalSkills: {
    frontend: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code" },
      { name: "TypeScript", level: "Intermediate", icon: "FileCode" },
      { name: "Next.js", level: "Intermediate", icon: "Globe" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layers" },
      { name: "Vite & Inertia.js", level: "Advanced", icon: "Zap" }
    ],
    backend: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "REST API Development & Integration", level: "Advanced", icon: "Repeat" },
      { name: "PHP & Laravel", level: "Intermediate", icon: "ShieldCheck" },
      { name: "PHP", level: "Intermediate", icon: "ShieldCheck" },
      { name: "Java", level: "Intermediate", icon: "Coffee" },
      { name: "C#", level: "Intermediate", icon: "Hash" },
      { name: "MySQL", level: "Advanced", icon: "Database" },
      { name: "MongoDB", level: "Intermediate", icon: "Box" },
      { name: "Python", level: "Intermediate", icon: "Terminal" },
      { name: "Web Scraping", level: "Intermediate", icon: "Search" },
      { name: "JSON", level: "Intermediate", icon: "Braces" }
    ],
    ai: [
      { name: "LivePerson AI Studio", level: "Advanced", icon: "Bot" },
      { name: "Google Gemini", level: "Advanced", icon: "Sparkles" },
      { name: "OpenAI GPT", level: "Advanced", icon: "Cpu" },
      { name: "Prompt Engineering", level: "Advanced", icon: "Wand2" },
      { name: "Conversational Design", level: "Advanced", icon: "MessageSquare" },
      { name: "Knowledge AI & RAG", level: "Advanced", icon: "BookOpen" },
      { name: "Local LLM & Model Deployment", level: "Intermediate", icon: "HardDrive" },
      { name: "Function Calling & Tool Integration", level: "Intermediate", icon: "Boxes" },
      { name: "OpenCode", level: "Intermediate", icon: "CodeXml" },
      { name: "OpenRouter", level: "Intermediate", icon: "Route" },
      { name: "AnythingLLM", level: "Intermediate", icon: "BrainCircuit" },
      { name: "NVIDIA NIM", level: "Intermediate", icon: "Gauge" },
      { name: "LanceDB", level: "Intermediate", icon: "DatabaseZap" },
      { name: "Embedding Models", level: "Intermediate", icon: "Binary" }
    ],
    iot: [
      { name: "ESP32", level: "Advanced", icon: "Cpu" },
      { name: "Arduino IDE", level: "Intermediate", icon: "Radio" },
      { name: "Arduino", level: "Intermediate", icon: "CircuitBoard" },
      { name: "RFID RC522", level: "Advanced", icon: "Scan" },
      { name: "Ultrasonic Sensor", level: "Advanced", icon: "Wifi" },
      { name: "Relay Module", level: "Advanced", icon: "Power" },
      { name: "Hardware-to-API Integration", level: "Advanced", icon: "Share2" }
    ],
    tools: [
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "VS Code & VSCodium", level: "Advanced", icon: "Laptop" },
      { name: "Figma", level: "Intermediate", icon: "Layout" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "Google Sheets API Integration", level: "Advanced", icon: "Table" }
    ]
  },

  education: {
    university: "Universitas Sebelas April (UNSAP)",
    faculty: "Fakultas Teknologi Informasi",
    studyProgram: "S1 Informatika",
    currentStatus: "Semester 5 (Aktif)",
    location: "Sumedang, Jawa Barat",
    timeline: [
      {
        id: "sdn2-sumedang",
        institution: "SD Negeri 2 Sumedang",
        level: "SD",
        program: "Pendidikan Dasar",
        status: "Lulus",
        period: "Pendidikan Dasar",
        detail: "SD",
        location: "Sumedang, Jawa Barat",
        description: "Tahap pendidikan dasar yang menjadi fondasi pembelajaran akademik dan pengembangan karakter.",
        focus: [
          "Dasar akademik",
          "Kemampuan membaca",
          "Kemampuan berhitung",
          "Pembentukan karakter"
        ]
      },
      {
        id: "smpn3-sumedang",
        institution: "SMP Negeri 3 Sumedang",
        level: "SMP",
        program: "Pendidikan Menengah Pertama",
        status: "Lulus",
        period: "Pendidikan Menengah",
        detail: "SMP",
        location: "Sumedang, Jawa Barat",
        description: "Melanjutkan pembelajaran umum dan mulai mengembangkan minat pada bidang teknologi serta pembelajaran mandiri.",
        focus: [
          "Pembelajaran umum",
          "Kerja kelompok",
          "Pengembangan minat",
          "Kemandirian belajar"
        ]
      },
      {
        id: "smkn1-sumedang",
        institution: "SMK Negeri 1 Sumedang",
        level: "SMK",
        program: "Rekayasa Perangkat Lunak",
        status: "Lulus",
        period: "2021 - 2024",
        detail: "Jurusan RPL",
        location: "Sumedang, Jawa Barat",
        description: "Mempelajari dasar pemrograman, pengembangan aplikasi, basis data, dan praktik pembuatan proyek perangkat lunak.",
        focus: [
          "Pemrograman",
          "Pengembangan aplikasi",
          "Basis data",
          "Praktik proyek",
          "Dasar teknologi informasi"
        ]
      },
      {
        id: "unsap",
        institution: "Universitas Sebelas April (UNSAP)",
        level: "S1",
        program: "Informatika",
        status: "Sedang Menempuh Pendidikan",
        period: "2024 - Sekarang",
        detail: "Semester 5",
        location: "Sumedang, Jawa Barat",
        description: "Mempelajari dasar dan penerapan ilmu komputer, pengembangan perangkat lunak, basis data, serta teknologi informasi.",
        focus: [
          "Pengembangan perangkat lunak",
          "Basis data",
          "Artificial Intelligence",
          "Internet of Things",
          "Arsitektur aplikasi"
        ]
      }
    ]
  },

  hobbies: [
    {
      id: "drawing",
      title: "Menggambar",
      category: "KREATIF",
      tagline: "SKETCH IDEAS",
      description: "Saya menikmati menggambar sebagai cara untuk menuangkan ide dan melatih imajinasi visual."
    },
    {
      id: "painting",
      title: "Melukis",
      category: "KREATIF",
      tagline: "COLOR & CANVAS",
      description: "Melukis memberi ruang untuk bereksperimen dengan warna, bentuk, dan suasana."
    },
    {
      id: "cycling",
      title: "Bersepeda",
      category: "AKTIVITAS",
      tagline: "RIDE & RESET",
      description: "Bersepeda menjadi kegiatan untuk bergerak, menikmati perjalanan, dan menyegarkan pikiran."
    },
    {
      id: "badminton",
      title: "Badminton",
      category: "OLAHRAGA",
      tagline: "PLAY IN MOTION",
      description: "Saya suka bermain badminton untuk menjaga kebugaran sekaligus menikmati permainan yang kompetitif."
    },
    {
      id: "anime",
      title: "Menonton Anime",
      category: "HIBURAN",
      tagline: "STORIES & WORLDS",
      description: "Menonton anime adalah salah satu cara saya menikmati cerita, karakter, dan dunia imajinatif."
    },
    {
      id: "gaming",
      title: "Bermain Game PC",
      category: "GAMING",
      tagline: "PLAY & EXPLORE",
      description: "Saya menikmati game dengan eksplorasi, kreativitas, cerita, dan dunia yang luas.",
      items: [
        "Minecraft Bedrock",
        "Minecraft Java",
        "Minecraft Legends",
        "Minecraft Dungeons 1",
        "Cyberpunk 2077",
        "GTA V"
      ]
    },
    {
      id: "coding",
      title: "Ngoding",
      category: "TEKNOLOGI",
      tagline: "BUILD & LEARN",
      description: "Di luar pekerjaan dan proyek, saya tetap senang bereksperimen dengan ide dan mencoba hal baru lewat kode."
    },
    {
      id: "uiDesign",
      title: "Desain UI Aplikasi",
      category: "DESAIN",
      tagline: "DESIGN WITH PURPOSE",
      description: "Saya tertarik merancang antarmuka aplikasi yang menarik, mudah dipahami, dan nyaman digunakan."
    }
  ],

  faqs: [
    {
      question: "Bisakah Rendra mengerjakan chatbot AI untuk bisnis saya?",
      answer: "Bisa. Saya bekerja di LivePerson membangun chatbot untuk klien seperti Lexus dan instansi pemerintah. Pekerjaannya mencakup perancangan alur percakapan, penulisan prompt untuk LLM (GPT atau Gemini), custom function Node.js, integrasi REST API ke sistem Anda, dan penyusunan knowledge base."
    },
    {
      question: "Teknologi apa yang paling sering dipakai untuk web full-stack?",
      answer: "Di frontend saya memakai React.js, Next.js, dan Tailwind CSS, dengan Vite atau Inertia.js. Di backend saya memakai Node.js untuk REST API dan integrasi AI, serta Laravel/PHP untuk aplikasi dengan struktur database yang jelas."
    },
    {
      question: "Bagaimana IoT dihubungkan dengan web di proyek Anda?",
      answer: "Di FAMS dan Noventra, ESP32 membaca sensor (RFID, ultrasonik, relay) lalu mengirim datanya lewat REST API ke backend web. Dari browser, status perangkat bisa dipantau dan dikendalikan."
    },
    {
      question: "Apakah Rendra menerima pekerjaan freelance atau full-time?",
      answer: "Ya. Saya menerima proyek freelance, kontrak pengembangan chatbot, kolaborasi web, serta magang atau pekerjaan di bidang software engineering dan Generative AI."
    },
    {
      question: "Bagaimana cara membahas kebutuhan proyek?",
      answer: "Hubungi saya lewat formulir kontak di website ini, WhatsApp, atau email. Biasanya saya membalas dalam 1x24 jam."
    }
  ]
};