"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
    header: {
      badge: "Bogor, Indonesia • Available for work & freelance",
      headline: "Building web apps, backend systems, and indie games.",
      greeting: "Rafid Dwi Prakoso",
      roles: ["Full-Stack Developer", "Backend Developer", "Game Developer"],
      bio: "Hi, I'm Rafid. I'm a software and game developer from Bogor. Most of my days are spent building full-stack web apps with Next.js and Laravel, writing backend APIs in Go, and making 2D/3D games in Unity.",
      exploreProjects: "See Projects",
      downloadResume: "Download CV",
      nowBuilding: "Currently working on",
      nowBuildingText: "Web apps, REST APIs & Unity game prototypes",
      openToWork: "Open to work",
      coreFocus: "How I work",
      coreFocusText: "Write readable code, keep the UI fast, and ship things that actually work in production.",
      exploreBelow: "Scroll down",
    },
    about: {
      eyebrow: "01 / About",
      title: "A bit about my background and what I build.",
      desc: "I got into programming because I wanted to know how websites and games actually work behind the scenes. Studying PPLG at SMK Wikrama Bogor gave me the chance to build real projects from scratch, from database design and backend routes all the way to the frontend and game mechanics.",
      stackTitle: "Main Stack",
      stackDesc: "Next.js, React, Vue, Tailwind, Bootstrap, Laravel, CodeIgniter, AdonisJS, Go, Python, Java, MySQL, Docker, Unity (C#).",
      learningTitle: "Education",
      learningDesc: "Software & Game Development (PPLG) student at SMK Wikrama Bogor.",
      projectFocusTitle: "What I Build",
      projectFocusDesc: "Web applications, internal dashboards, REST APIs, and 2D/3D Unity games.",
      whatILikeBuilding: "Areas I focus on",
      serviceHighlights: [
        {
          id: "01",
          title: "Web Applications",
          spec: "Next.js • React • Vue • Tailwind",
          description: "Building responsive web apps and dashboards that load fast and are straightforward for people to use.",
        },
        {
          id: "02",
          title: "Backend & Databases",
          spec: "Laravel • Go • AdonisJS • MySQL",
          description: "Setting up database tables, authentication, REST APIs, and server logic that stays easy to maintain.",
        },
        {
          id: "03",
          title: "Game Development",
          spec: "Unity • C# • 2D/3D Physics",
          description: "Making playable prototypes in Unity, writing C# scripts for player movement, game state, and UI.",
        },
      ],
      experienceTitle: "Work Experience",
      educationTitle: "Education",
      internship1Desc: "Did a 6-month internship in the IT department, helping maintain internal systems and supporting daily technical operations.",
      internship2Desc: "Working as a backend developer intern, handling API endpoints, database queries, and core application logic.",
      educationDesc: "Majoring in Software and Game Development (PPLG), focusing on web programming, databases, and Unity game development.",
    },
    categories: {
      all: "All",
      "web app": "Web App",
      game: "Game",
      dashboard: "Dashboard",
      "landing page": "Landing Page",
      frontend: "Frontend",
    },
    tools: {
      eyebrow: "02 / Tech Stack",
      title: "Languages, frameworks & tools I use",
      desc: "A list of the tools I use regularly for web development, backend services, and game projects.",
    },
    work: {
      eyebrow: "03 / Projects",
      title: "Selected Projects",
      titleAll: "All Projects",
      desc: "Some of the web apps, internal dashboards, and game prototypes I've built over the past few years.",
      descAll: "Filter by category or click on any project to read more about how it was built.",
      filterAll: "all",
      readCase: "Project details",
      visit: "Live demo",
      viewAll: "View all projects (9)",
    },
    lab: {
      eyebrow: "04 / Playground",
      title: "2D Canvas Physics Sandbox",
      desc: "A small HTML5 Canvas experiment I made to play around with 2D gravity, node connections, and bouncing collisions in the browser.",
      modeGravity: "Gravity",
      modeConstellation: "Nodes",
      modePhysics: "Bounce",
      fps: "FPS",
      entities: "Objects",
      speed: "Speed",
      particleCount: "Count",
      burst: "Push",
      reset: "Reset",
      hint: "Click or move your cursor inside the canvas",
    },
    contact: {
      eyebrow: "05 / Contact",
      title: "Get in touch",
      desc: "If you have a project in mind, a job opportunity, or just want to say hi, feel free to send a message through the form or email me directly.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Write your message here...",
      submit: "Send message",
      sending: "Sending...",
      success: "Thanks! Your message has been sent.",
      error: "Failed to send message. Please try again or email me directly.",
    },
    pages: {
      about: {
        eyebrow: "About Me",
        title: "More about my background and experience.",
        desc: "A closer look at what I study, where I've interned, and the tools I use day to day.",
        cta: "See my projects",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let's work together.",
        desc: "Open for freelance projects, internships, and full-stack or backend developer roles.",
        cta: "See my projects",
      },
      projects: {
        eyebrow: "Projects (2024 - 2026)",
        title: "Things I've built.",
        desc: "Web apps, school projects, internal tools, and game prototypes I've worked on.",
        cta: "Contact me",
      },
      projectDetail: {
        back: "Back to projects",
        visit: "Open live site",
        contact: "Ask about this project",
        relatedEyebrow: "Other Projects",
        relatedTitle: "More projects you might like",
        stack: "Tech Stack",
        highlights: "Key Features",
        problem: "Background",
        approach: "How I Built It",
        outcome: "Result",
        process: "Development Steps",
        learnings: "What I Learned",
      },
    },
  },
  id: {
    nav: {
      home: "Beranda",
      projects: "Proyek",
      about: "Tentang",
      contact: "Kontak",
    },
    header: {
      badge: "Bogor, Indonesia • Terbuka untuk kerja & proyek freelance",
      headline: "Bikin aplikasi web, sistem backend, dan game.",
      greeting: "Rafid Dwi Prakoso",
      roles: ["Full-Stack Developer", "Backend Developer", "Game Developer"],
      bio: "Halo, saya Rafid. Developer asal Bogor yang sehari-hari ngulik aplikasi web pakai Next.js dan Laravel, nulis REST API dengan Go, dan bikin game 2D/3D di Unity.",
      exploreProjects: "Lihat Proyek",
      downloadResume: "Unduh CV",
      nowBuilding: "Lagi fokus ngulik",
      nowBuildingText: "Aplikasi web, REST API & prototipe game Unity",
      openToWork: "Siap kerja",
      coreFocus: "Cara kerja",
      coreFocusText: "Nulis kode yang rapi, bikin tampilan yang enteng diakses, dan pastiin sistemnya jalan lancar.",
      exploreBelow: "Scroll ke bawah",
    },
    about: {
      eyebrow: "01 / Tentang Saya",
      title: "Sedikit cerita soal latar belakang dan apa yang saya kerjakan.",
      desc: "Saya mulai tertarik ngoding karena penasaran gimana sebuah website dan game bisa jalan di balik layar. Selama belajar di jurusan PPLG SMK Wikrama Bogor, saya terbiasa ngerjain proyek dari nol: mulai dari nyusun tabel database, bikin route di backend, sampai ngerapihin tampilan di frontend.",
      stackTitle: "Tech Stack Utama",
      stackDesc: "Next.js, React, Vue, Tailwind, Bootstrap, Laravel, CodeIgniter, AdonisJS, Go, Python, Java, MySQL, Docker, dan Unity (C#).",
      learningTitle: "Pendidikan",
      learningDesc: "Siswa Pengembangan Perangkat Lunak & Gim (PPLG) di SMK Wikrama Bogor.",
      projectFocusTitle: "Fokus Pengerjaan",
      projectFocusDesc: "Aplikasi web full-stack, dashboard internal, REST API, dan game Unity 2D/3D.",
      whatILikeBuilding: "Bidang yang saya kerjakan",
      serviceHighlights: [
        {
          id: "01",
          title: "Aplikasi Web & Frontend",
          spec: "Next.js • React • Vue • Tailwind",
          description: "Bikin tampilan web dan dashboard yang responsif, cepat dibuka, dan gampang dipakai.",
        },
        {
          id: "02",
          title: "Backend & Database",
          spec: "Laravel • Go • AdonisJS • MySQL",
          description: "Merancang struktur database, sistem login, REST API, dan logika server yang rapi.",
        },
        {
          id: "03",
          title: "Pengembangan Game",
          spec: "Unity • C# • 2D/3D",
          description: "Membangun prototipe game di Unity, mulai dari mekanik gerak karakter, interaksi objek, sampai UI dalam game.",
        },
      ],
      experienceTitle: "Pengalaman Kerja",
      educationTitle: "Pendidikan",
      internship1Desc: "Magang selama 6 bulan di divisi IT, bantu pemeliharaan sistem internal dan kebutuhan teknis operasional sehari-hari.",
      internship2Desc: "Magang sebagai backend developer, ngerjain pembuatan endpoint API, pengelolaan alur data, dan logika aplikasi.",
      educationDesc: "Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG), fokus belajar pemrograman web, database, dan pembuatan game dengan Unity.",
    },
    categories: {
      all: "Semua",
      "web app": "Aplikasi Web",
      game: "Game",
      dashboard: "Dashboard",
      "landing page": "Landing Page",
      frontend: "Frontend",
    },
    tools: {
      eyebrow: "02 / Tech Stack",
      title: "Bahasa, framework & tools sehari-hari",
      desc: "Daftar teknologi yang biasa saya pakai buat ngerjain aplikasi web, backend API, sampai project game.",
    },
    work: {
      eyebrow: "03 / Proyek",
      title: "Proyek Pilihan",
      titleAll: "Semua Proyek",
      desc: "Beberapa aplikasi web, sistem dashboard, dan game yang pernah saya kerjakan.",
      descAll: "Filter berdasarkan kategori atau klik salah satu proyek buat lihat detail pengerjaannya.",
      filterAll: "semua",
      readCase: "Lihat detail",
      visit: "Buka web",
      viewAll: "Lihat semua proyek (9)",
    },
    lab: {
      eyebrow: "04 / Eksperimen",
      title: "Sandbox Fisika 2D di Canvas",
      desc: "Eksperimen kecil pakai HTML5 Canvas buat nyobain simulasi gravitasi, jaring titik, dan pantulan bola langsung di browser.",
      modeGravity: "Gravitasi",
      modeConstellation: "Jaring Titik",
      modePhysics: "Pantulan",
      fps: "FPS",
      entities: "Objek",
      speed: "Kecepatan",
      particleCount: "Jumlah",
      burst: "Dorong",
      reset: "Ulang",
      hint: "Klik atau gerakkan kursor di dalam area kanvas",
    },
    contact: {
      eyebrow: "05 / Kontak",
      title: "Hubungi Saya",
      desc: "Kalau ada tawaran proyek, lowongan kerja, atau sekadar mau diskusi, silakan kirim pesan lewat form ini atau langsung via email.",
      namePlaceholder: "Nama kamu",
      emailPlaceholder: "Alamat email",
      messagePlaceholder: "Tulis pesan di sini...",
      submit: "Kirim pesan",
      sending: "Mengirim...",
      success: "Terima kasih! Pesan kamu sudah terkirim.",
      error: "Pesan gagal dikirim. Coba lagi atau hubungi lewat email langsung.",
    },
    pages: {
      about: {
        eyebrow: "Tentang Saya",
        title: "Latar belakang dan pengalaman belajar saya.",
        desc: "Ringkasan perjalanan saya belajar ngoding di SMK Wikrama, pengalaman magang, dan tools yang saya pakai.",
        cta: "Lihat proyek saya",
      },
      contact: {
        eyebrow: "Kontak",
        title: "Mari ngobrol atau kerja bareng.",
        desc: "Terbuka untuk pengerjaan proyek web, freelance, maupun posisi full-stack dan backend developer.",
        cta: "Lihat proyek saya",
      },
      projects: {
        eyebrow: "Arsip Proyek (2024 - 2026)",
        title: "Kumpulan proyek yang pernah saya buat.",
        desc: "Mulai dari aplikasi sekolah, portal pengaduan, dashboard internal, sampai prototipe game.",
        cta: "Hubungi saya",
      },
      projectDetail: {
        back: "Kembali ke daftar proyek",
        visit: "Buka website",
        contact: "Tanya soal proyek ini",
        relatedEyebrow: "Proyek Lainnya",
        relatedTitle: "Proyek lain yang pernah saya buat",
        stack: "Teknologi yang Dipakai",
        highlights: "Fitur Utama",
        problem: "Latar Belakang",
        approach: "Proses Pengerjaan",
        outcome: "Hasil Akhir",
        process: "Tahapan Pembuatan",
        learnings: "Hal yang Dipelajari",
      },
    },
  },
};

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio_lang");
    if (saved === "id" || saved === "en") {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang) => {
    if (lang === "id" || lang === "en") {
      setLanguageState(lang);
      localStorage.setItem("portfolio_lang", lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "id" : "en";
    setLanguage(nextLang);
  };

  const t = (path) => {
    const keys = path.split(".");
    let current = translations[language];
    for (const k of keys) {
      if (current && current[k] !== undefined) {
        current = current[k];
      } else {
        let fallback = translations.en;
        for (const fb of keys) {
          if (fallback && fallback[fb] !== undefined) {
            fallback = fallback[fb];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
