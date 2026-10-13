"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";
import { workData } from "@/assets/assets";

export const openTerminal = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("toggle-terminal"));
  }
};

export default function TerminalDrawer({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "rafid@portfolio ~ % type 'help' to see available commands.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const router = useRouter();
  const { language } = useLanguage();
  const isId = language === "id";

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === "`" || e.key === "~")) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    const handleToggle = () => setIsOpen((prev) => !prev);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("toggle-terminal", handleToggle);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("toggle-terminal", handleToggle);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const availableCommands = [
    "help",
    "whoami",
    "skills",
    "projects",
    "open",
    "lab",
    "contact",
    "music",
    "theme",
    "neofetch",
    "hire",
    "date",
    "clear",
    "exit",
  ];

  const handleCommand = useCallback(
    async (rawCmd) => {
      const trimmed = rawCmd.trim();
      if (!trimmed) return;

      setCommandHistory((prev) => [...prev, trimmed]);
      setHistoryIndex(-1);

      const parts = trimmed.split(/\s+/);
      const command = parts[0].toLowerCase();
      const args = parts.slice(1);

      const newHistory = [...history, { type: "command", text: trimmed }];

      switch (command) {
        case "help":
          newHistory.push({
            type: "output",
            text: isId
              ? [
                  "Daftar Perintah:",
                  "  help          - Tampilkan daftar perintah ini",
                  "  whoami        - Profil singkat saya",
                  "  skills        - Bahasa & framework yang saya pakai",
                  "  projects      - Daftar semua proyek",
                  "  open <slug>   - Buka halaman detail proyek (contoh: 'open taskly')",
                  "  lab           - Lompat ke eksperimen kanvas 2D",
                  "  contact       - Email & tautan sosial media",
                  "  music         - Cek lagu yang sedang diputar di Spotify",
                  "  theme [mode]  - Ganti tema ('theme dark' atau 'theme light')",
                  "  neofetch      - Info ringkas sistem portofolio",
                  "  hire          - Kirim email langsung ke saya",
                  "  date          - Waktu saat ini",
                  "  clear         - Bersihkan layar terminal",
                  "  exit          - Tutup terminal",
                ].join("\n")
              : [
                  "Commands:",
                  "  help          - Show this list",
                  "  whoami        - Short bio",
                  "  skills        - Tech stack",
                  "  projects      - List all projects",
                  "  open <slug>   - Open a project page (e.g. 'open taskly')",
                  "  lab           - Go to 2D Canvas playground",
                  "  contact       - Email & social links",
                  "  music         - Check what I'm playing on Spotify",
                  "  theme [mode]  - Switch theme ('theme dark' or 'theme light')",
                  "  neofetch      - System info",
                  "  hire          - Send me an email",
                  "  date          - Current time",
                  "  clear         - Clear screen",
                  "  exit          - Close terminal",
                ].join("\n"),
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: isId
              ? "Rafid Dwi Prakoso - developer asal Bogor & siswa PPLG di SMK Wikrama Bogor.\nSehari-hari bikin web pakai Next.js dan Laravel, backend API pakai Go, dan game di Unity."
              : "Rafid Dwi Prakoso - software & game developer from Bogor, studying PPLG at SMK Wikrama Bogor.\nMostly building web apps with Next.js and Laravel, backend APIs in Go, and games in Unity.",
          });
          break;

        case "skills":
          newHistory.push({
            type: "output",
            text: [
              "TECH STACK:",
              "  Frontend : Next.js, React, Vue.js, Tailwind CSS, Bootstrap, JavaScript",
              "  Backend  : Laravel, CodeIgniter, AdonisJS, Go (Golang), Python, Java",
              "  Game Dev : Unity, C#, 2D/3D Physics",
              "  Infra/DB : Docker, MySQL, MongoDB, Firebase, Git",
            ].join("\n"),
          });
          break;

        case "projects":
          newHistory.push({
            type: "output",
            text: [
              isId
                ? "DAFTAR PROYEK (ketik 'open <id>' untuk melihat):"
                : "PROJECTS (type 'open <id>' to view):",
              ...workData.map(
                (p, i) =>
                  `  [${i + 1}] ${p.id.padEnd(24)} | ${p.title} (${p.category}) - ${p.tech?.join(", ") || ""}`
              ),
            ].join("\n"),
          });
          break;

        case "open":
          if (!args[0]) {
            newHistory.push({
              type: "error",
              text: isId
                ? "Cara pakai: open <id-proyek> (contoh: 'open taskly')"
                : "Usage: open <project-id> (e.g. 'open taskly')",
            });
          } else {
            const slug = args[0].toLowerCase();
            const project = workData.find(
              (p) => p.id.toLowerCase() === slug || p.title.toLowerCase() === slug
            );
            if (project) {
              newHistory.push({
                type: "output",
                text: isId
                  ? `Membuka /projects/${project.id}...`
                  : `Opening /projects/${project.id}...`,
              });
              router.push(`/projects/${project.id}`);
            } else {
              newHistory.push({
                type: "error",
                text: isId
                  ? `Proyek '${slug}' tidak ditemukan. Ketik 'projects' untuk lihat daftar.`
                  : `Project '${slug}' not found. Type 'projects' to see the list.`,
              });
            }
          }
          break;

        case "lab":
        case "sandbox":
          newHistory.push({
            type: "output",
            text: isId
              ? "Menuju bagian eksperimen kanvas 2D..."
              : "Scrolling to 2D Canvas playground...",
          });
          router.push("/#lab");
          break;

        case "contact":
          newHistory.push({
            type: "output",
            text: [
              isId ? "KONTAK:" : "CONTACT:",
              "  Email     : rafiddwiprakoso@gmail.com",
              "  GitHub    : https://github.com/nerolurien",
              "  LinkedIn  : https://www.linkedin.com/in/rafid-dwi-prakoso-895a80300/",
              "  Instagram : https://www.instagram.com/fiddd_dwi/",
              "  Spotify   : https://open.spotify.com/user/31hil227n4qwgjzabs5hiu52i6v4",
            ].join("\n"),
          });
          break;

        case "music":
          newHistory.push({
            type: "system",
            text: isId ? "Mengecek Spotify..." : "Checking Spotify...",
          });
          try {
            const res = await fetch("/api/spotify/currently-playing");
            const data = await res.json();
            if (data.isPlaying) {
              newHistory.push({
                type: "output",
                text: isId
                  ? `Sedang diputar: "${data.title}" oleh ${data.artist}\nAlbum: ${data.album || "-"}\nLink: ${data.songUrl}`
                  : `Playing: "${data.title}" by ${data.artist}\nAlbum: ${data.album || "-"}\nLink: ${data.songUrl}`,
              });
            } else if (data.title) {
              newHistory.push({
                type: "output",
                text: isId
                  ? `Terakhir diputar: "${data.title}" oleh ${data.artist}\nLink: ${data.songUrl}`
                  : `Last played: "${data.title}" by ${data.artist}\nLink: ${data.songUrl}`,
              });
            } else {
              newHistory.push({
                type: "output",
                text: isId
                  ? "Sedang tidak memutar lagu di Spotify."
                  : "Not playing anything on Spotify right now.",
              });
            }
          } catch {
            newHistory.push({
              type: "error",
              text: isId ? "Gagal mengecek status Spotify." : "Failed to check Spotify status.",
            });
          }
          break;

        case "theme":
          if (args[0] === "dark") {
            setIsDarkMode(true);
            newHistory.push({
              type: "output",
              text: isId ? "Tema diubah ke mode gelap." : "Switched to dark mode.",
            });
          } else if (args[0] === "light") {
            setIsDarkMode(false);
            newHistory.push({
              type: "output",
              text: isId ? "Tema diubah ke mode terang." : "Switched to light mode.",
            });
          } else {
            setIsDarkMode((prev) => !prev);
            newHistory.push({
              type: "output",
              text: isId
                ? `Tema diubah ke mode ${!isDarkMode ? "gelap" : "terang"}.`
                : `Switched theme to ${!isDarkMode ? "dark" : "light"} mode.`,
            });
          }
          break;

        case "neofetch":
          newHistory.push({
            type: "output",
            text: [
              "  rafid@portfolio",
              "  ---------------",
              "  Framework : Next.js 16 (App Router)",
              "  UI        : React 19 + Tailwind CSS",
              isId ? "  Domisili  : Bogor, Indonesia" : "  Location  : Bogor, Indonesia",
              isId ? "  Sekolah   : SMK Wikrama Bogor (PPLG)" : "  School    : SMK Wikrama Bogor (PPLG)",
              "  Stack     : Next.js, Vue, Laravel, Go, Python, Java, Docker, Unity",
              isId
                ? "  Status    : Terbuka untuk kerja & proyek freelance"
                : "  Status    : Open to work & freelance",
            ].join("\n"),
          });
          break;

        case "sudo":
        case "hire":
          if (command === "sudo" && args[0] !== "hire-me" && args[0] !== "hire") {
            newHistory.push({
              type: "error",
              text: isId ? "Akses ditolak." : "Permission denied.",
            });
          } else {
            newHistory.push({
              type: "output",
              text: isId
                ? "Membuka aplikasi email ke rafiddwiprakoso@gmail.com..."
                : "Opening email to rafiddwiprakoso@gmail.com...",
            });
            setTimeout(() => {
              window.location.href =
                "mailto:rafiddwiprakoso@gmail.com?subject=Project%20or%20Job%20Inquiry";
            }, 500);
          }
          break;

        case "date":
          newHistory.push({
            type: "output",
            text: new Date().toString(),
          });
          break;

        case "clear":
        case "cls":
          setHistory([]);
          return;

        case "exit":
        case "quit":
          setIsOpen(false);
          return;

        default:
          newHistory.push({
            type: "error",
            text: isId
              ? `Perintah tidak ditemukan: '${trimmed}'. Ketik 'help' untuk melihat daftar perintah.`
              : `Command not found: '${trimmed}'. Type 'help' to see available commands.`,
          });
          break;
      }

      setHistory(newHistory);
    },
    [history, isId, isDarkMode, setIsDarkMode, router]
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || "");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.trim().toLowerCase();
      if (!current) return;

      if (current.startsWith("open ")) {
        const query = current.replace("open ", "");
        const match = workData.find((p) =>
          p.id.toLowerCase().startsWith(query)
        );
        if (match) setInputVal(`open ${match.id}`);
      } else {
        const match = availableCommands.find((c) => c.startsWith(current));
        if (match) setInputVal(match);
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-label="Open Terminal"
        title="Terminal (Ctrl + `)"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2 border border-stone-300 dark:border-zinc-800 bg-[#f6f4ef]/95 dark:bg-[#111113]/95 backdrop-blur-md shadow-lg text-xs font-mono font-medium text-zinc-800 dark:text-[#ece8df] transition group hover:border-amber-500/60"
      >
        <span className="w-2 h-2 bg-amber-500" />
        <span className="font-bold text-amber-600 dark:text-amber-400">{">_"}</span>
        <span className="hidden sm:inline uppercase tracking-wider text-[11px]">Terminal</span>
        <kbd className="hidden md:inline-flex px-1.5 py-0.5 text-[9px] font-semibold text-zinc-500 dark:text-zinc-400 border border-stone-300 dark:border-zinc-800">
          Ctrl + `
        </kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative pointer-events-auto w-full transition-all duration-300 bg-[#0b0b0c] border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm text-zinc-200 ${
                isMaximized
                  ? "h-screen sm:h-[92vh] max-w-6xl"
                  : "h-[75vh] sm:h-[540px] max-w-3xl"
              }`}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-[#111113] border-b border-zinc-800 select-none">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-3 h-3 rounded-full bg-[#ef4444] hover:opacity-80 transition"
                    aria-label="Close terminal"
                  />
                  <button
                    onClick={() => setIsMaximized((prev) => !prev)}
                    className="w-3 h-3 rounded-full bg-[#f59e0b] hover:opacity-80 transition"
                    aria-label="Resize terminal"
                  />
                  <button
                    onClick={() => setIsMaximized((prev) => !prev)}
                    className="w-3 h-3 rounded-full bg-[#10b981] hover:opacity-80 transition"
                    aria-label="Maximize terminal"
                  />
                </div>

                <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium">
                  <span className="text-zinc-500">rafid@portfolio:</span>
                  <span className="text-amber-400">~</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-500 hidden sm:inline">
                    Tab: autocomplete
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-zinc-400 hover:text-white text-xs px-1"
                    aria-label="Close terminal window"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div
                onClick={() => inputRef.current?.focus()}
                className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2.5 selection:bg-amber-500/30 selection:text-amber-200"
              >
                {history.map((item, idx) => {
                  if (item.type === "command") {
                    return (
                      <div key={idx} className="flex items-center gap-2 text-zinc-100">
                        <span className="text-amber-500 font-bold">➜</span>
                        <span className="text-amber-400 font-semibold">~</span>
                        <span>{item.text}</span>
                      </div>
                    );
                  }

                  if (item.type === "error") {
                    return (
                      <div key={idx} className="text-rose-400 whitespace-pre-wrap pl-4">
                        {item.text}
                      </div>
                    );
                  }

                  if (item.type === "system") {
                    return (
                      <div key={idx} className="text-zinc-500 whitespace-pre-wrap">
                        {item.text}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      className="text-zinc-300 whitespace-pre-wrap pl-4 leading-relaxed font-mono"
                    >
                      {item.text}
                    </div>
                  );
                })}

                <div className="flex items-center gap-2 text-zinc-100 pt-1">
                  <span className="text-amber-500 font-bold">➜</span>
                  <span className="text-amber-400 font-semibold">~</span>
                  <input
                    ref={inputRef}
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-gray-100 outline-none caret-amber-400 font-mono"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />
                </div>
                <div ref={bottomRef} />
              </div>

              <div className="px-4 py-2 bg-[#121215] border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
                  <span className="text-zinc-500 shrink-0">
                    {isId ? "Perintah:" : "Commands:"}
                  </span>
                  {["help", "neofetch", "projects", "lab", "music", "hire"].map((quickCmd) => (
                    <button
                      key={quickCmd}
                      onClick={() => handleCommand(quickCmd)}
                      className="px-2 py-0.5 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition shrink-0"
                    >
                      {quickCmd}
                    </button>
                  ))}
                </div>

                <span className="text-[10px] text-zinc-500 shrink-0 hidden sm:inline ml-2">
                  {isId ? "ESC untuk tutup" : "ESC to close"}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
