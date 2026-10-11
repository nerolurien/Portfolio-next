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
      badge: "Available for freelance and collaborative builds",
      headline: "Building web products and interactive experiences with a clean, modern feel.",
      greeting: "Hi, I'm Rafid.",
      roles: ["Web Developer", "Game Developer", "Creative Coder"],
      bio: "Based in Bogor, I craft thoughtful digital products with Next.js, Laravel, and Unity. I care about interfaces that look sharp, feel smooth, and solve real problems.",
      exploreProjects: "Explore Projects",
      downloadResume: "Download Resume",
      stats: {
        projects: "Projects shipped",
        specialties: "Main specialties",
        energy: "Curious builder energy",
      },
      nowBuilding: "Now building",
      nowBuildingText: "Portfolio experiences that feel alive",
      openToWork: "Open to work",
      coreFocus: "Core focus",
      coreFocusText: "Readable UI, solid frontend architecture, and motion with purpose.",
      exploreBelow: "Explore pages below",
    },
    about: {
      eyebrow: "Introduction",
      title: "About Me",
      desc: "I enjoy turning ideas into polished experiences, from useful dashboards to interactive projects with a bit of personality. The part I care about most is making something feel both capable and pleasant to use.",
      stackTitle: "Stack",
      stackDesc: "Next.js, React, Laravel, PHP, Tailwind CSS, Unity, and C# for interactive products.",
      learningTitle: "Learning Path",
      learningDesc: "PPLG student at SMK Wikrama Bogor, building real products while sharpening engineering fundamentals.",
      projectFocusTitle: "Project Focus",
      projectFocusDesc: "Web apps, dashboards, and game prototypes that balance usability, polish, and performance.",
      whatILikeBuilding: "What I like building",
      serviceHighlights: [
        {
          title: "Web experiences",
          description: "Landing pages and product sites that feel clean, fast, and intentionally crafted.",
        },
        {
          title: "Operational apps",
          description: "Internal tools and dashboards that help people work faster with less friction.",
        },
        {
          title: "Interactive builds",
          description: "Game and motion-driven experiments that make interfaces feel alive.",
        },
      ],
      experienceTitle: "Experience",
      educationTitle: "Education",
      internship1Desc: "Completed a 6-month internship and gained hands-on experience working in a professional engineering environment.",
      internship2Desc: "Working on backend development tasks and supporting application logic, data flow, and system functionality.",
      educationDesc: "Studying software and game development fundamentals while building real projects and strengthening engineering skills.",
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
      eyebrow: "Toolbox",
      title: "Tools I work with",
      desc: "From frontend shipping to backend workflows and game experiments, these are the tools I keep reaching for.",
    },
    work: {
      eyebrow: "Selected Work",
      title: "Featured case studies",
      titleAll: "All projects",
      desc: "A quick look at the projects that best represent how I design interfaces, structure product flows, and build interactive experiences.",
      descAll: "Filter by type, scan the stack, and open each case study for a more focused view.",
      filterAll: "all",
      readCase: "Read case study",
      visit: "Visit",
      viewAll: "View all projects",
    },
    contact: {
      eyebrow: "Contact me",
      title: "Get In Touch",
      desc: "If you have any questions, comments, or feedback, use the form below.",
      namePlaceholder: "Enter Your Name",
      emailPlaceholder: "Enter Your Email",
      messagePlaceholder: "Enter Your Message",
      submit: "Submit",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Something went wrong. Please try again.",
    },
    pages: {
      about: {
        eyebrow: "About",
        title: "A builder who likes clean interfaces and lively interactions.",
        desc: "I am currently learning, shipping, and refining my taste through real projects. This page gives more context about how I work, what I focus on, and the tools I keep growing with.",
        cta: "See projects",
      },
      contact: {
        eyebrow: "Contact",
        title: "Let’s talk about what you want to build.",
        desc: "Whether it is a portfolio refresh, a dashboard idea, or an interactive concept, I’m open to collaborative conversations and new opportunities.",
        cta: "Browse projects",
      },
      projects: {
        eyebrow: "Project Archive",
        title: "A closer look at the things I have been building.",
        desc: "This page collects my featured work in one place so each project has a little more room to breathe, explain itself, and show the decisions behind it.",
        cta: "Say hello",
      },
      projectDetail: {
        back: "Back to projects",
        visit: "Visit live project",
        contact: "Contact me",
        relatedEyebrow: "Related work",
        relatedTitle: "More projects in a similar lane",
        stack: "Stack",
        highlights: "Key highlights",
        problem: "Problem",
        approach: "Approach",
        outcome: "Outcome",
        process: "Process",
        learnings: "What I learned",
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
      badge: "Terbuka untuk freelance dan kolaborasi proyek",
      headline: "Membangun produk web dan pengalaman interaktif yang bersih dan modern.",
      greeting: "Halo, saya Rafid.",
      roles: ["Web Developer", "Game Developer", "Creative Coder"],
      bio: "Berbasis di Bogor, saya merancang produk digital berkualitas dengan Next.js, Laravel, dan Unity. Berfokus pada antarmuka yang rapi, halus, dan memecahkan masalah nyata.",
      exploreProjects: "Lihat Proyek",
      downloadResume: "Unduh Resume",
      stats: {
        projects: "Proyek selesai",
        specialties: "Keahlian utama",
        energy: "Energi pembelajar",
      },
      nowBuilding: "Sedang dikerjakan",
      nowBuildingText: "Pengalaman portfolio yang dinamis dan hidup",
      openToWork: "Siap bekerja",
      coreFocus: "Fokus utama",
      coreFocusText: "UI yang nyaman dibaca, arsitektur frontend kokoh, dan animasi bermakna.",
      exploreBelow: "Jelajahi halaman di bawah",
    },
    about: {
      eyebrow: "Pengenalan",
      title: "Tentang Saya",
      desc: "Saya senang mengubah ide menjadi karya yang matang, mulai dari dashboard fungsional hingga proyek interaktif yang berkarakter. Yang paling saya utamakan adalah membuat sistem yang andal dan menyenangkan untuk digunakan.",
      stackTitle: "Teknologi",
      stackDesc: "Next.js, React, Laravel, PHP, Tailwind CSS, Unity, dan C# untuk produk interaktif.",
      learningTitle: "Jalur Belajar",
      learningDesc: "Siswa PPLG di SMK Wikrama Bogor, membangun produk nyata sembari memperdalam fundamental rekayasa perangkat lunak.",
      projectFocusTitle: "Fokus Proyek",
      projectFocusDesc: "Aplikasi web, dashboard, dan prototipe game yang menyeimbangkan kegunaan, kerapian, dan performa.",
      whatILikeBuilding: "Fokus Minat Berkarya",
      serviceHighlights: [
        {
          title: "Pengalaman Web",
          description: "Landing page dan situs produk yang bersih, cepat, dan dirancang dengan matang.",
        },
        {
          title: "Aplikasi Operasional",
          description: "Tools internal dan dashboard yang membantu tim bekerja lebih cepat dan efisien.",
        },
        {
          title: "Karya Interaktif",
          description: "Eksperimen game dan animasi yang membuat antarmuka terasa dinamis dan hidup.",
        },
      ],
      experienceTitle: "Pengalaman",
      educationTitle: "Pendidikan",
      internship1Desc: "Menyelesaikan program magang 6 bulan dan mendapatkan pengalaman langsung di lingkungan rekayasa profesional.",
      internship2Desc: "Mengerjakan tugas pengembangan backend, mendukung logika aplikasi, alur data, dan fungsionalitas sistem.",
      educationDesc: "Mempelajari dasar-dasar pengembangan perangkat lunak dan game sambil membangun proyek nyata serta memperkuat keterampilan rekayasa.",
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
      eyebrow: "Peralatan",
      title: "Teknologi yang Saya Gunakan",
      desc: "Dari pengembangan antarmuka frontend hingga alur backend dan eksperimen game, inilah teknologi yang saya andalkan.",
    },
    work: {
      eyebrow: "Karya Terpilih",
      title: "Studi kasus unggulan",
      titleAll: "Semua proyek",
      desc: "Sekilas tentang proyek yang merepresentasikan cara saya mendesain antarmuka, menyusun alur produk, dan membangun pengalaman interaktif.",
      descAll: "Saring berdasarkan kategori, telusuri teknologi yang digunakan, dan buka setiap studi kasus untuk rincian lengkap.",
      filterAll: "semua",
      readCase: "Baca studi kasus",
      visit: "Kunjungi",
      viewAll: "Lihat semua proyek",
    },
    contact: {
      eyebrow: "Hubungi saya",
      title: "Mari Terhubung",
      desc: "Jika Anda memiliki pertanyaan, diskusi proyek, atau tawaran kerja sama, kirimkan pesan melalui formulir di bawah.",
      namePlaceholder: "Masukkan Nama Anda",
      emailPlaceholder: "Masukkan Email Anda",
      messagePlaceholder: "Tulis Pesan Anda",
      submit: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil terkirim!",
      error: "Terjadi kesalahan. Silakan coba lagi.",
    },
    pages: {
      about: {
        eyebrow: "Tentang",
        title: "Kreator yang menyukai antarmuka bersih dan interaksi dinamis.",
        desc: "Saya terus belajar, merilis, dan mengasah standar kualitas melalui proyek nyata. Halaman ini memberikan konteks tentang cara kerja, fokus utama, dan teknologi yang terus saya kembangkan.",
        cta: "Lihat proyek",
      },
      contact: {
        eyebrow: "Kontak",
        title: "Mari bicarakan proyek yang ingin Anda bangun.",
        desc: "Baik untuk pembaruan website, ide dashboard, maupun konsep interaktif, saya terbuka untuk diskusi kolaboratif dan peluang baru.",
        cta: "Jelajahi proyek",
      },
      projects: {
        eyebrow: "Arsip Proyek",
        title: "Melihat lebih dekat karya yang telah saya bangun.",
        desc: "Halaman ini mengumpulkan karya-karya unggulan dalam satu tempat agar setiap proyek memiliki ruang untuk menjelaskan proses dan keputusan di baliknya.",
        cta: "Kirim pesan",
      },
      projectDetail: {
        back: "Kembali ke proyek",
        visit: "Kunjungi proyek",
        contact: "Hubungi saya",
        relatedEyebrow: "Karya Terkait",
        relatedTitle: "Proyek serupa lainnya",
        stack: "Teknologi",
        highlights: "Sorotan Utama",
        problem: "Tantangan",
        approach: "Pendekatan",
        outcome: "Hasil Akhir",
        process: "Alur Proses",
        learnings: "Pelajaran yang Diperoleh",
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
