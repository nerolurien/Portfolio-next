"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useLanguage } from "@/app/context/LanguageContext";

const svgIcons = {
  react: (
    <svg className="h-5 w-5 text-[#61DAFB]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  vue: (
    <svg className="h-5 w-5" viewBox="0 0 256 221" fill="none">
      <path d="M204.8 0H256L128 220.8L0 0h97.92L128 51.2L157.44 0h47.36Z" fill="#41B883" />
      <path d="M0 0l128 220.8L256 0h-51.2L128 132.48L50.56 0H0Z" fill="#41B883" />
      <path d="M50.56 0L128 133.12L204.8 0h-47.36L128 51.2L97.92 0H50.56Z" fill="#35495E" />
    </svg>
  ),
  tailwind: (
    <svg className="h-5 w-5 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  ),
  bootstrap: (
    <svg className="h-5 w-5 text-[#7952B3]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.77 11.24H9.25V8.19h2.85c1.56 0 2.42.63 2.42 1.5s-.91 1.55-2.75 1.55zm.33 1.53H9.25v3.39h2.92c1.9 0 2.86-.66 2.86-1.71 0-1.06-.99-1.68-2.93-1.68zM24 5.57v12.86c0 3.07-2.49 5.57-5.56 5.57H5.56C2.49 24 0 21.5 0 18.43V5.57C0 2.5 2.49 0 5.56 0h12.88C21.51 0 24 2.5 24 5.57zm-6.77 8.85c0-1.65-1.16-2.79-2.88-2.99v-.07c1.27-.27 2.18-1.22 2.18-2.58 0-1.8-1.42-2.98-3.98-2.98H6.93v12.4h5.92c2.87 0 4.38-1.39 4.38-3.78z" />
    </svg>
  ),
  laravel: (
    <svg className="h-5 w-5 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.337.337 0 01-.066.029c-.018.006-.037.015-.056.018a.394.394 0 01-.196-.019c-.022-.007-.042-.018-.062-.03L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.008-.032.023-.061.04-.089.017-.027.04-.051.064-.072.025-.021.053-.038.084-.051L4.87.173a.378.378 0 01.376 0L9.57 2.664c.03.013.058.03.083.051.025.021.047.045.065.072.017.028.031.057.04.089.008.032.013.065.013.098v9.812l3.573-2.06V5.53c0-.034.006-.067.015-.1.007-.031.022-.06.039-.088.017-.027.04-.051.064-.072.025-.021.053-.038.084-.051l4.323-2.491a.378.378 0 01.377 0l4.323 2.491c.03.013.059.03.084.051.024.021.047.045.064.072.017.028.031.057.039.088z" />
    </svg>
  ),
  codeigniter: (
    <svg className="h-5 w-5 text-[#EF4223]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.46 0c.65 2.46-.37 4.49-2.22 6.32-1.87 1.85-3.9 3.74-3.9 6.84 0 2.75 1.87 5.21 4.66 5.95-.93-.95-1.45-2.16-1.45-3.44 0-2.46 2.05-3.82 3.63-5.46 1.28-1.34 2.13-2.88 1.66-4.88 2.27 1.15 4.02 3.44 4.02 6.13 0 1.46-.53 2.86-1.41 3.96 2.68-.95 4.55-3.48 4.55-6.48 0-4.01-2.82-7.14-6.44-8.04-.97-.24-2.03-.55-3.1-.9z" />
    </svg>
  ),
  adonis: (
    <svg className="h-5 w-5 text-[#5A45FF] dark:text-[#8172FF]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.5L1.5 21h21L12 1.5zm0 4.84L18.82 19H5.18L12 6.34z" />
    </svg>
  ),
  python: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z"
        fill="#3776AB"
      />
      <path
        d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.451s-3.24-.052-3.24 3.148v5.292S5.72 24 12.086 24zm3.206-1.85c-.578 0-1.046-.47-1.046-1.052 0-.581.468-1.051 1.046-1.051.579 0 1.046.47 1.046 1.051 0 .582-.467 1.052-1.046 1.052z"
        fill="#FFD43B"
      />
    </svg>
  ),
  java: (
    <svg className="h-5 w-5 text-[#E76F00]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627" />
    </svg>
  ),
  docker: (
    <svg className="h-5 w-5 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
    </svg>
  ),
};

const stackManifest = [
  {
    categoryCode: "01",
    categoryEn: "Frontend & UI",
    categoryId: "Frontend & Tampilan",
    items: [
      {
        id: "nextjs",
        name: "Next.js",
        role: "App Router / React Framework",
        roleId: "Framework React & Full-Stack",
        icon: assets.next_js,
        usageEn: "What I use most for building full-stack web apps, routing, and API endpoints.",
        usageId: "Framework utama yang paling sering saya pakai buat bikin web, routing, dan API.",
      },
      {
        id: "react",
        name: "React",
        role: "UI Components",
        roleId: "Komponen Antarmuka",
        icon: null,
        svg: svgIcons.react,
        usageEn: "Building reusable UI components, hooks, and interactive client views.",
        usageId: "Membuat komponen tampilan yang reusable, state, dan halaman interaktif.",
      },
      {
        id: "vue",
        name: "Vue.js",
        role: "Frontend Framework",
        roleId: "Framework Frontend",
        icon: null,
        svg: svgIcons.vue,
        usageEn: "Building reactive single-page interfaces with clean template syntax.",
        usageId: "Membangun tampilan web yang reaktif dan ringan dengan struktur komponen Vue.",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        role: "Utility CSS",
        roleId: "Styling & Layout CSS",
        icon: null,
        svg: svgIcons.tailwind,
        usageEn: "My go-to tool for styling layouts, responsive grids, and dark mode.",
        usageId: "Andalan buat ngatur layout, tampilan responsif, dan tema dark mode.",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        role: "CSS Component Toolkit",
        roleId: "Komponen CSS & Grid",
        icon: null,
        svg: svgIcons.bootstrap,
        usageEn: "Used across several Laravel and CodeIgniter dashboard projects for tables, modals, and forms.",
        usageId: "Dipakai di beberapa proyek dashboard Laravel dan CodeIgniter untuk tabel, form, dan layout cepat.",
      },
      {
        id: "figma",
        name: "Figma",
        role: "UI Design",
        roleId: "Desain Antarmuka",
        icon: assets.figma,
        usageEn: "Sketching page layouts and checking spacing before writing code.",
        usageId: "Buat nyusun wireframe dan desain halaman sebelum mulai ngoding.",
      },
    ],
  },
  {
    categoryCode: "02",
    categoryEn: "Backend & Languages",
    categoryId: "Backend & Bahasa",
    items: [
      {
        id: "laravel",
        name: "Laravel / PHP",
        role: "Full-Stack MVC & API",
        roleId: "Backend MVC & REST API",
        icon: null,
        svg: svgIcons.laravel,
        usageEn: "Used across most of my school and internship projects for auth, CRUD, and dashboards.",
        usageId: "Paling sering dipakai buat bikin sistem informasi, login multi-role, dan dashboard.",
      },
      {
        id: "codeigniter",
        name: "CodeIgniter",
        role: "PHP MVC Framework",
        roleId: "Framework PHP MVC",
        icon: null,
        svg: svgIcons.codeigniter,
        usageEn: "Lightweight PHP framework I used for building attendance and CRUD web apps.",
        usageId: "Framework PHP ringan yang saya pakai buat bikin aplikasi presensi dan web CRUD.",
      },
      {
        id: "adonis",
        name: "AdonisJS",
        role: "Node.js / TypeScript MVC",
        roleId: "Backend Node.js & TypeScript",
        icon: null,
        svg: svgIcons.adonis,
        usageEn: "TypeScript-based backend framework for building structured REST APIs.",
        usageId: "Framework backend berbasis TypeScript dan Node.js untuk bikin REST API.",
      },
      {
        id: "golang",
        name: "Go (Golang)",
        role: "Backend & REST API",
        roleId: "Layanan Backend & API",
        icon: assets.go,
        usageEn: "Writing fast, compiled backend services and clean HTTP handlers.",
        usageId: "Dipakai buat nulis layanan backend dan REST API yang cepat dan ringan.",
      },
      {
        id: "python",
        name: "Python",
        role: "Scripting & Backend",
        roleId: "Otomatisasi & Backend",
        icon: null,
        svg: svgIcons.python,
        usageEn: "Writing automation scripts, data processing utilities, and backend services.",
        usageId: "Dipakai buat bikin script otomatisasi, pengolahan data, dan logika backend.",
      },
      {
        id: "java",
        name: "Java",
        role: "Object-Oriented Programming",
        roleId: "Pemrograman Berorientasi Objek",
        icon: null,
        svg: svgIcons.java,
        usageEn: "Core object-oriented programming language used for backend logic and algorithms.",
        usageId: "Bahasa pemrograman berorientasi objek (OOP) untuk logika aplikasi dan backend.",
      },
      {
        id: "spring",
        name: "Spring Boot",
        role: "Java Backend",
        roleId: "Framework Backend Java",
        icon: assets.spring,
        usageEn: "Building Java-based REST APIs with controllers and service layers.",
        usageId: "Membuat layanan REST API dan sistem backend berbasis Java.",
      },
    ],
  },
  {
    categoryCode: "03",
    categoryEn: "Game Dev & Interactive",
    categoryId: "Pengembangan Game",
    items: [
      {
        id: "unity",
        name: "Unity Engine",
        role: "2D/3D Game Engine",
        roleId: "Engine Game 2D/3D",
        icon: assets.unity,
        usageEn: "Setting up game scenes, physics collisions, lighting, and playable builds.",
        usageId: "Engine utama buat nyusun level game 2D/3D, fisika, kamera, dan build game.",
      },
      {
        id: "csharp",
        name: "C#",
        role: "Gameplay Scripting",
        roleId: "Pemrograman Mekanik Game",
        icon: null,
        codeBadge: "C#",
        usageEn: "Writing player movement, interaction triggers, and dialogue scripts in Unity.",
        usageId: "Menulis kode pergerakan karakter, sistem dialog, dan logika gameplay di Unity.",
      },
      {
        id: "canvas",
        name: "HTML5 Canvas",
        role: "2D Browser Graphics",
        roleId: "Grafis & Fisika 2D Web",
        icon: null,
        codeBadge: "2D",
        usageEn: "Building interactive 2D particle and physics animations directly in JavaScript.",
        usageId: "Membuat animasi partikel dan simulasi fisika 2D langsung di browser.",
      },
    ],
  },
  {
    categoryCode: "04",
    categoryEn: "Database, Docker & Tools",
    categoryId: "Database, Kontainer & Tools",
    items: [
      {
        id: "docker",
        name: "Docker",
        role: "Containers & Setup",
        roleId: "Kontainer & Deployment",
        icon: null,
        svg: svgIcons.docker,
        usageEn: "Running databases and app services in containers so setup stays consistent.",
        usageId: "Menjalankan aplikasi dan database di dalam kontainer biar gampang di-setup.",
      },
      {
        id: "mysql",
        name: "MySQL",
        role: "Relational Database",
        roleId: "Database Relasional",
        icon: assets.mysql,
        usageEn: "Designing relational tables, foreign keys, and queries for Laravel and PHP apps.",
        usageId: "Database relasional utama untuk menyimpan data pengguna, transaksi, dan laporan.",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        role: "NoSQL Database",
        roleId: "Database NoSQL",
        icon: assets.mongodb,
        usageEn: "Storing flexible JSON-like documents for Node.js and modern web projects.",
        usageId: "Database NoSQL berbasis dokumen untuk aplikasi web modern.",
      },
      {
        id: "firebase",
        name: "Firebase",
        role: "Auth & Realtime DB",
        roleId: "Autentikasi & Cloud DB",
        icon: assets.firebase,
        usageEn: "Quick authentication setup and cloud database syncing for web apps.",
        usageId: "Layanan login dan penyimpanan data cloud real-time.",
      },
      {
        id: "git",
        name: "Git & VS Code",
        role: "Daily Workflow",
        roleId: "Alat Kerja Harian",
        icon: assets.git,
        usageEn: "Version control on GitHub and my daily code editor setup.",
        usageId: "Pengelolaan versi kode di GitHub dan editor yang dipakai ngoding tiap hari.",
      },
    ],
  },
];

export default function ToolsSection() {
  const { language, t } = useLanguage();
  const isId = language === "id";

  const [inspectedTool, setInspectedTool] = useState(stackManifest[0].items[0]);

  return (
    <section
      id="stack"
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 border-t border-stone-300/80 dark:border-zinc-800/90"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            {t("tools.eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal tracking-tight text-stone-900 dark:text-[#ece8df] sm:text-5xl">
            {t("tools.title")}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-stone-600 dark:text-zinc-400 sm:text-base">
          {t("tools.desc")}
        </p>
      </div>

      <div className="mb-8 border border-stone-300/90 bg-[#efece4] p-4 sm:p-5 dark:border-zinc-800 dark:bg-[#111113]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest bg-stone-900 text-amber-400 dark:bg-zinc-900 border border-stone-700 dark:border-zinc-700">
              {inspectedTool.name}
            </span>
            <span className="font-mono text-xs text-amber-700 dark:text-amber-400">
              {isId && inspectedTool.roleId ? inspectedTool.roleId : inspectedTool.role}
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-stone-400 dark:text-zinc-500">
            {isId ? "Klik atau arahkan kursor" : "Hover or click to view details"}
          </span>
        </div>
        <p className="mt-2.5 font-mono text-xs leading-relaxed text-stone-600 dark:text-zinc-300">
          {"> "}
          {isId ? inspectedTool.usageId : inspectedTool.usageEn}
        </p>
      </div>

      <div className="grid gap-px bg-stone-300/90 border border-stone-300/90 dark:bg-zinc-800 dark:border-zinc-800 md:grid-cols-2">
        {stackManifest.map((group) => (
          <div
            key={group.categoryCode}
            className="bg-[#f6f4ef] p-6 sm:p-8 dark:bg-[#0b0b0c] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between border-b border-stone-300/80 pb-3 mb-5 dark:border-zinc-800/90">
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-stone-800 dark:text-zinc-200">
                  {isId ? group.categoryId : group.categoryEn}
                </span>
                <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400">
                  [{group.categoryCode}]
                </span>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {group.items.map((tool) => {
                  const isSelected = inspectedTool.id === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onMouseEnter={() => setInspectedTool(tool)}
                      onClick={() => setInspectedTool(tool)}
                      className={`group flex items-center gap-3.5 p-3 text-left border transition-all ${
                        isSelected
                          ? "border-amber-600/80 bg-[#efece4] dark:border-amber-400/70 dark:bg-[#161619]"
                          : "border-stone-300/80 bg-[#efece4]/40 hover:border-stone-500 dark:border-zinc-800/90 dark:bg-[#111113]/60 dark:hover:border-zinc-600"
                      }`}
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-stone-300/80 bg-[#f6f4ef] dark:border-zinc-800 dark:bg-[#0b0b0c]">
                        {tool.icon ? (
                          <Image
                            src={tool.icon}
                            alt={tool.name}
                            className="h-5 w-5 object-contain"
                          />
                        ) : tool.svg ? (
                          tool.svg
                        ) : (
                          <span className="font-mono text-[10px] font-bold text-amber-700 dark:text-amber-400">
                            {tool.codeBadge}
                          </span>
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-sans text-sm font-semibold text-stone-900 dark:text-[#ece8df] group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                          {tool.name}
                        </p>
                        <p className="truncate font-mono text-[10px] text-stone-500 dark:text-zinc-500">
                          {isId && tool.roleId ? tool.roleId : tool.role}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
