"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { workData } from "@/assets/assets";
import { openTerminal } from "./TerminalDrawer";

export const openCommandPalette = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("toggle-command-palette"));
  }
};

export default function CommandPalette({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isMac, setIsMac] = useState(false);

  const router = useRouter();
  const { language, toggleLanguage, t } = useLanguage();
  const inputRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    setIsMac(typeof navigator !== "undefined" && /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleToggle = () => setIsOpen((prev) => !prev);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-command-palette", handleToggle);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-command-palette", handleToggle);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("rafiddwiprakoso@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  }, []);

  const allItems = useMemo(() => {
    const isIndo = language === "id";

    const navItems = [
      {
        id: "nav-home",
        group: isIndo ? "Navigasi" : "Navigation",
        title: isIndo ? "Beranda" : "Home",
        subtitle: isIndo ? "Halaman utama portofolio" : "Main portfolio homepage",
        keywords: ["home", "beranda", "main", "start"],
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        ),
        perform: () => router.push("/"),
      },
      {
        id: "nav-projects",
        group: isIndo ? "Navigasi" : "Navigation",
        title: isIndo ? "Proyek" : "Projects",
        subtitle: isIndo ? "Jelajahi seluruh karya & arsip proyek" : "Browse all works and case studies",
        keywords: ["projects", "proyek", "work", "portfolio", "showcase"],
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
        ),
        perform: () => router.push("/projects"),
      },
      {
        id: "nav-about",
        group: isIndo ? "Navigasi" : "Navigation",
        title: isIndo ? "Tentang" : "About",
        subtitle: isIndo ? "Latar belakang, keahlian & pengalaman" : "Background, skills & experience",
        keywords: ["about", "tentang", "bio", "experience", "education"],
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        ),
        perform: () => router.push("/about"),
      },
      {
        id: "nav-github-activity",
        group: isIndo ? "Navigasi" : "Navigation",
        title: isIndo ? "Aktivitas GitHub (Commit Calendar)" : "GitHub Activity (Commit Calendar)",
        subtitle: isIndo ? "Lihat riwayat dan konsistensi commit @nerolurien" : "View verified commit streak and history of @nerolurien",
        keywords: ["github", "activity", "commit", "calendar", "streak", "heatmap", "kontribusi"],
        icon: (
          <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
        perform: () => router.push("/about#about"),
      },
      {
        id: "nav-lab",
        group: isIndo ? "Navigasi" : "Navigation",
        title: isIndo ? "Lab Kanvas (Sandbox Fisika Interaktif)" : "Creative Lab (Interactive Canvas Physics)",
        subtitle: isIndo ? "Eksperimen komputasi visual, gravitasi & partikel" : "Visual computing, gravity & particle physics experiments",
        keywords: ["lab", "creative", "canvas", "physics", "particles", "game", "sandbox", "kanvas", "eksperimen"],
        icon: (
          <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
        perform: () => router.push("/#lab"),
      },
      {
        id: "nav-contact",
        group: isIndo ? "Navigasi" : "Navigation",
        title: isIndo ? "Kontak" : "Contact",
        subtitle: isIndo ? "Kirim pesan atau tawaran kolaborasi" : "Send a message or collaborate",
        keywords: ["contact", "kontak", "email", "hire", "message"],
        icon: (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        perform: () => router.push("/contact"),
      },
    ];

    const projectItems = workData.map((project) => ({
      id: `project-${project.id}`,
      group: isIndo ? "Proyek Terpilih" : "Projects",
      title: project.title,
      subtitle: isIndo ? project.description_id || project.description : project.description,
      badge: t(`categories.${project.category}`) || project.category,
      tags: project.tech || [],
      keywords: [
        project.title,
        project.category,
        ...(project.tech || []),
        project.year || "",
      ],
      icon: (
        <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      perform: () => router.push(`/projects/${project.id}`),
    }));

    const actionItems = [
      {
        id: "action-theme",
        group: isIndo ? "Aksi Cepat" : "Quick Actions",
        title: isDarkMode
          ? isIndo ? "Ganti ke Tema Terang (Light Mode)" : "Switch to Light Mode"
          : isIndo ? "Ganti ke Tema Gelap (Dark Mode)" : "Switch to Dark Mode",
        subtitle: isIndo ? "Sesuaikan tampilan visual website" : "Toggle visual theme",
        keywords: ["theme", "dark", "light", "mode", "tema", "warna"],
        icon: isDarkMode ? (
          <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ),
        perform: () => {
          if (setIsDarkMode) setIsDarkMode((prev) => !prev);
        },
      },
      {
        id: "action-lang",
        group: isIndo ? "Aksi Cepat" : "Quick Actions",
        title: isIndo ? "Ganti Bahasa ke Inggris (English)" : "Switch Language to Indonesian",
        subtitle: isIndo ? "Bahasa saat ini: Indonesia" : "Current language: English",
        keywords: ["language", "bahasa", "translate", "english", "indonesia"],
        icon: (
          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
          </svg>
        ),
        perform: () => toggleLanguage(),
      },
      {
        id: "action-copy-email",
        group: isIndo ? "Aksi Cepat" : "Quick Actions",
        title: isIndo ? "Salin Email" : "Copy Email Address",
        subtitle: "rafiddwiprakoso@gmail.com",
        keywords: ["copy", "email", "salin", "surat", "contact", "gmail"],
        icon: (
          <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        perform: () => copyEmail(),
      },
      {
        id: "action-cv",
        group: isIndo ? "Aksi Cepat" : "Quick Actions",
        title: isIndo ? "Unduh CV / Resume" : "Download CV / Resume",
        subtitle: "CV Rafid Dwi Prakoso.pdf",
        keywords: ["cv", "resume", "unduh", "download", "pdf"],
        icon: (
          <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        ),
        perform: () => {
          const a = document.createElement("a");
          a.href = "/CV Rafid Dwi Prakoso.pdf";
          a.download = "CV Rafid Dwi Prakoso.pdf";
          a.click();
        },
      },
      {
        id: "action-terminal",
        group: isIndo ? "Aksi Cepat" : "Quick Actions",
        title: isIndo ? "Buka Terminal Interaktif (CLI)" : "Open Interactive Terminal (CLI)",
        subtitle: isIndo ? "Mode terminal pengembang (>_ Ctrl + `)" : "Developer terminal drawer (>_ Ctrl + `)",
        keywords: ["terminal", "cli", "shell", "console", "bash", "command", "perintah"],
        icon: (
          <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        ),
        perform: () => openTerminal(),
      },
    ];

    const socialItems = [
      {
        id: "social-github",
        group: isIndo ? "Tautan Sosial" : "Social Links",
        title: isIndo ? "Profil GitHub" : "GitHub Profile",
        subtitle: "github.com/nerolurien",
        keywords: ["github", "code", "repo", "git"],
        icon: (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        ),
        perform: () => window.open("https://github.com/nerolurien", "_blank"),
      },
      {
        id: "social-linkedin",
        group: isIndo ? "Tautan Sosial" : "Social Links",
        title: isIndo ? "Profil LinkedIn" : "LinkedIn Profile",
        subtitle: "linkedin.com/in/rafid-dwi-prakoso-895a80300",
        keywords: ["linkedin", "career", "connect", "network"],
        icon: (
          <svg className="w-4 h-4 text-[#0288D1]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
        perform: () => window.open("https://www.linkedin.com/in/rafid-dwi-prakoso-895a80300/", "_blank"),
      },
      {
        id: "social-instagram",
        group: isIndo ? "Tautan Sosial" : "Social Links",
        title: "Instagram",
        subtitle: "@fiddd_dwi",
        keywords: ["instagram", "ig", "social", "photos"],
        icon: (
          <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
        perform: () => window.open("https://www.instagram.com/fiddd_dwi/", "_blank"),
      },
      {
        id: "social-spotify",
        group: isIndo ? "Tautan Sosial" : "Social Links",
        title: isIndo ? "Profil Spotify" : "Spotify Profile",
        subtitle: "open.spotify.com/user/31hil227n4qwgjzabs5hiu52i6v4",
        keywords: ["spotify", "music", "songs", "tracks", "playlist"],
        icon: (
          <svg className="w-4 h-4 text-[#1ED760]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
        ),
        perform: () => window.open("https://open.spotify.com/user/31hil227n4qwgjzabs5hiu52i6v4?si=456f6635e96246aa", "_blank"),
      },
    ];

    return [...navItems, ...projectItems, ...actionItems, ...socialItems];
  }, [language, isDarkMode, setIsDarkMode, toggleLanguage, router, copyEmail]);

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allItems;

    return allItems.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(q);
      const subtitleMatch = item.subtitle?.toLowerCase().includes(q);
      const groupMatch = item.group?.toLowerCase().includes(q);
      const keywordsMatch = item.keywords?.some((k) => k.toLowerCase().includes(q));
      const tagsMatch = item.tags?.some((t) => t.toLowerCase().includes(q));

      return titleMatch || subtitleMatch || groupMatch || keywordsMatch || tagsMatch;
    });
  }, [allItems, query]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeItem = useCallback(
    (item) => {
      if (!item) return;
      setIsOpen(false);
      item.perform();
    },
    []
  );

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (filteredItems.length ? (prev + 1) % filteredItems.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (filteredItems.length ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        executeItem(filteredItems[selectedIndex]);
      }
    }
  };

  useEffect(() => {
    if (listRef.current) {
      const activeElement = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="relative w-full max-w-2xl bg-white dark:bg-[#121216] border border-black/10 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 max-h-[80vh]"
              role="dialog"
              aria-modal="true"
              aria-label="Command Palette"
            >
              <div className="flex items-center px-4 py-3.5 border-b border-black/10 dark:border-white/10 gap-3">
                <svg
                  className="w-5 h-5 text-gray-400 dark:text-gray-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={language === "id" ? "Ketik perintah, proyek, atau aksi..." : "Type a command, project, or action..."}
                  className="w-full bg-transparent text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none"
                />

                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="p-1 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition text-xs"
                    aria-label="Clear query"
                  >
                    {language === "id" ? "Hapus" : "Clear"}
                  </button>
                )}

                <div className="hidden sm:flex items-center gap-1 shrink-0">
                  <kbd className="px-1.5 py-0.5 text-[10px] font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded">
                    ESC
                  </kbd>
                </div>
              </div>

              <div
                ref={listRef}
                className="overflow-y-auto p-2 divide-y divide-black/5 dark:divide-white/5 scroll-smooth"
              >
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    <p className="font-medium">
                      {language === "id" ? "Tidak ada hasil ditemukan." : "No results found."}
                    </p>
                    <p className="text-xs mt-1 text-gray-400 dark:text-gray-500">
                      {language === "id"
                        ? "Coba cari dengan kata kunci lain seperti 'proyek', 'github', atau 'tema'."
                        : "Try searching for 'projects', 'github', or 'theme'."}
                    </p>
                  </div>
                ) : (
                  <div>
                    {filteredItems.map((item, index) => {
                      const isSelected = index === selectedIndex;
                      const showGroupHeader =
                        index === 0 || filteredItems[index - 1].group !== item.group;

                      return (
                        <React.Fragment key={item.id}>
                          {showGroupHeader && (
                            <div className="px-3 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                              {item.group}
                            </div>
                          )}

                          <div
                            data-index={index}
                            onClick={() => executeItem(item)}
                            onMouseEnter={() => setSelectedIndex(index)}
                            className={`group flex items-center justify-between gap-3 px-3 py-2.5 cursor-pointer transition text-left ${
                              isSelected
                                ? "bg-amber-500/10 text-amber-900 dark:text-amber-300"
                                : "text-gray-700 dark:text-gray-200 hover:bg-black/[0.03] dark:hover:bg-white/5"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`w-8 h-8 flex items-center justify-center shrink-0 transition ${
                                  isSelected
                                    ? "bg-amber-500/20 text-amber-700 dark:text-amber-400"
                                    : "bg-black/[0.05] dark:bg-white/10 text-gray-500 dark:text-gray-400"
                                }`}
                              >
                                {item.icon}
                              </div>

                              <div className="min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium truncate">
                                    {item.title}
                                  </span>
                                  {item.badge && (
                                    <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400 shrink-0">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                {item.subtitle && (
                                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">
                                    {item.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              {item.tags && item.tags.length > 0 && (
                                <div className="hidden md:flex items-center gap-1">
                                  {item.tags.slice(0, 2).map((tag) => (
                                    <span
                                      key={tag}
                                      className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {isSelected && (
                                <kbd className="hidden sm:inline-flex px-1.5 py-0.5 text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-500/20">
                                  ↵
                                </kbd>
                              )}
                            </div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-[#0c0c0f] border-t border-black/10 dark:border-white/10 text-[11px] text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 font-semibold bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded">
                      ↑
                    </kbd>
                    <kbd className="px-1.5 py-0.5 font-semibold bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded">
                      ↓
                    </kbd>
                    <span className="ml-1">
                      {language === "id" ? "navigasi" : "navigate"}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <kbd className="px-1.5 py-0.5 font-semibold bg-white dark:bg-white/10 border border-black/10 dark:border-white/10 rounded">
                      ↵
                    </kbd>
                    <span className="ml-1">
                      {language === "id" ? "pilih" : "select"}
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-gray-400">
                  <span>{isMac ? "⌘K" : "Ctrl + K"}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed bottom-6 right-6 z-50 bg-black text-white dark:bg-white dark:text-black px-4 py-2.5 rounded-full text-xs font-semibold shadow-lg flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {language === "id" ? "Email berhasil disalin ke clipboard!" : "Email copied to clipboard!"}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
