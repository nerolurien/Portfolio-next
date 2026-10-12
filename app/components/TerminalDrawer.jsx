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
      text: "RafidOS Interactive Terminal v2.4.0 (x86_64-portfolio)",
    },
    {
      type: "system",
      text: "Type 'help' to view available commands or 'neofetch' for system specs.",
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
      // Toggle terminal on Ctrl + ` (backtick/tilde)
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
            text: [
              "Available Commands:",
              "  help          - Display this help message",
              "  whoami        - About Rafid Dwi Prakoso",
              "  skills        - Technical stack and core proficiencies",
              "  projects      - List all featured projects & case studies",
              "  open <slug>   - Navigate to a project (e.g., 'open taskly')",
              "  lab           - Scroll to Interactive Canvas Physics Lab",
              "  contact       - Contact details & social profiles",
              "  music         - Live Spotify playback status",
              "  theme [mode]  - Toggle theme ('theme dark', 'theme light', or 'theme')",
              "  neofetch      - Display developer system info",
              "  hire          - Why you should collaborate / hire me",
              "  date          - Show current local timestamp",
              "  clear         - Clear terminal window",
              "  exit          - Close this terminal drawer",
            ].join("\n"),
          });
          break;

        case "whoami":
          newHistory.push({
            type: "output",
            text: isId
              ? "Rafid Dwi Prakoso — Web Developer, Game Developer & Creative Coder berbasis di Bogor, Indonesia.\nFokus membangun antarmuka web modern dengan performa tinggi, arsitektur backend andal, dan pengalaman interaktif yang menyenangkan."
              : "Rafid Dwi Prakoso — Web Developer, Game Developer & Creative Coder based in Bogor, Indonesia.\nFocuses on crafting clean, high-performance web products, dependable backends, and lively interactive experiences.",
          });
          break;

        case "skills":
          newHistory.push({
            type: "output",
            text: [
              "TECHNICAL STACK & PROFICIENCIES:",
              "  ┌── Frontend: Next.js, React, Tailwind CSS, JavaScript (ES6+), GSAP, Framer Motion",
              "  ├── Backend:  Laravel, PHP, Go (Golang), MySQL, Firebase, MongoDB, RESTful APIs",
              "  ├── Game Dev: Unity, C#, 2D/3D Mechanics, Gameplay Physics, UI Integration",
              "  └── Tools:    Git, VS Code, Postman, Figma, Linux/Bash, Vercel",
            ].join("\n"),
          });
          break;

        case "projects":
          newHistory.push({
            type: "output",
            text: [
              "FEATURED PROJECTS (Type 'open <id>' to inspect):",
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
              text: "Usage: open <project-id> (e.g. 'open taskly' or 'open pengaduan-masyarakat')",
            });
          } else {
            const slug = args[0].toLowerCase();
            const project = workData.find(
              (p) => p.id.toLowerCase() === slug || p.title.toLowerCase() === slug
            );
            if (project) {
              newHistory.push({
                type: "output",
                text: `>> Navigating to /projects/${project.id}...`,
              });
              router.push(`/projects/${project.id}`);
            } else {
              newHistory.push({
                type: "error",
                text: `Project '${slug}' not found. Type 'projects' to view all valid slugs.`,
              });
            }
          }
          break;

        case "lab":
        case "sandbox":
          newHistory.push({
            type: "output",
            text: ">> Navigating to Creative Canvas Physics Lab (/#lab)...",
          });
          router.push("/#lab");
          break;

        case "contact":
          newHistory.push({
            type: "output",
            text: [
              "CONNECT & COLLABORATE:",
              "  Email:     rafiddwiprakoso@gmail.com",
              "  GitHub:    https://github.com/nerolurien",
              "  LinkedIn:  https://www.linkedin.com/in/rafid-dwi-prakoso-895a80300/",
              "  Instagram: https://www.instagram.com/fiddd_dwi/",
              "  Spotify:   https://open.spotify.com/user/31hil227n4qwgjzabs5hiu52i6v4",
            ].join("\n"),
          });
          break;

        case "music":
          newHistory.push({
            type: "system",
            text: "Fetching live Spotify status...",
          });
          try {
            const res = await fetch("/api/spotify/currently-playing");
            const data = await res.json();
            if (data.isPlaying) {
              newHistory.push({
                type: "output",
                text: `♫ NOW PLAYING: "${data.title}" by ${data.artist}\n   Album: ${data.album || "Unknown"}\n   Link:  ${data.songUrl}`,
              });
            } else if (data.title) {
              newHistory.push({
                type: "output",
                text: `♫ LAST PLAYED: "${data.title}" by ${data.artist}\n   Link: ${data.songUrl}`,
              });
            } else {
              newHistory.push({
                type: "output",
                text: "No active or recent track scrobbled on Spotify.",
              });
            }
          } catch {
            newHistory.push({
              type: "error",
              text: "Could not fetch current Spotify status.",
            });
          }
          break;

        case "theme":
          if (args[0] === "dark") {
            setIsDarkMode(true);
            newHistory.push({ type: "output", text: "Theme set to dark mode." });
          } else if (args[0] === "light") {
            setIsDarkMode(false);
            newHistory.push({ type: "output", text: "Theme set to light mode." });
          } else {
            setIsDarkMode((prev) => !prev);
            newHistory.push({
              type: "output",
              text: `Theme toggled. Current mode: ${!isDarkMode ? "Dark" : "Light"}.`,
            });
          }
          break;

        case "neofetch":
          newHistory.push({
            type: "output",
            text: [
              "         /\\          rafid@portfolio-next",
              "        /  \\         --------------------",
              "       / /\\ \\        OS: Next.js 16.1.6 App Router (Turbopack)",
              "      / /  \\ \\       Runtime: Vercel Edge & Node.js",
              "     / / /\\ \\ \\      UI Framework: React 19 + Tailwind CSS + Framer Motion",
              "    / / /  \\ \\ \\     Shell: zsh (interactive portfolio terminal)",
              "   /_/ /____\\ \\_\\    Host: rafid-portfolio.app",
              "     \\________/      Location: Bogor, West Java, Indonesia",
              "                     Role: Full-Stack Developer & Game Creator",
              "                     Main Stack: Next.js, Laravel, Go, Unity, C#",
              "                     Status: Open to Work & Creative Collaborations",
            ].join("\n"),
          });
          break;

        case "sudo":
        case "hire":
          if (command === "sudo" && args[0] !== "hire-me" && args[0] !== "hire") {
            newHistory.push({
              type: "error",
              text: "rafid is not in the sudoers file. This incident will be reported.",
            });
          } else {
            newHistory.push({
              type: "output",
              text: [
                "[ACCESS GRANTED: HIRING PROTOCOL]",
                "  Candidate:   Rafid Dwi Prakoso",
                "  Strengths:   Clean code architecture, proactive builder, UI/UX polish, fast adaptation",
                "  Availability: Freelance, Full-time, or Collaborative projects",
                "  >> Launching email client to rafiddwiprakoso@gmail.com...",
              ].join("\n"),
            });
            setTimeout(() => {
              window.location.href =
                "mailto:rafiddwiprakoso@gmail.com?subject=Job%20Opportunity%20-%20Rafid%20Dwi%20Prakoso";
            }, 600);
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
            text: `Command not found: '${trimmed}'. Type 'help' to see available commands.`,
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
      {/* Floating Launcher Pill Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        type="button"
        aria-label="Open Interactive Terminal"
        title="Open Interactive Terminal (Ctrl + `)"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3.5 py-2 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-[#121216]/90 backdrop-blur-md shadow-lg text-xs font-mono font-medium text-gray-800 dark:text-gray-200 transition hover:scale-105 active:scale-95 group hover:border-sky-500/50"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:animate-ping" />
        <span className="font-bold text-sky-500">{">_"}</span>
        <span className="hidden sm:inline">Terminal</span>
        <kbd className="hidden md:inline-flex px-1.5 py-0.5 text-[9px] font-semibold text-gray-400 dark:text-gray-500 bg-black/5 dark:bg-white/10 rounded">
          Ctrl + `
        </kbd>
      </button>

      {/* Terminal Modal Drawer */}
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
              className={`relative pointer-events-auto w-full transition-all duration-300 bg-[#0c0c0e] border border-zinc-800 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs sm:text-sm text-gray-200 ${
                isMaximized
                  ? "h-screen sm:h-[92vh] max-w-6xl"
                  : "h-[75vh] sm:h-[540px] max-w-3xl"
              }`}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#18181b]/90 border-b border-zinc-800 select-none">
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
                  <span className="text-zinc-500">guest@rafid-dev:</span>
                  <span className="text-sky-400">~ (zsh)</span>
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

              {/* Terminal Body */}
              <div
                onClick={() => inputRef.current?.focus()}
                className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-2.5 selection:bg-sky-500/30 selection:text-white"
              >
                {history.map((item, idx) => {
                  if (item.type === "command") {
                    return (
                      <div key={idx} className="flex items-center gap-2 text-zinc-100">
                        <span className="text-emerald-400 font-bold">➜</span>
                        <span className="text-sky-400 font-semibold">~</span>
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

                {/* Live Input Prompt */}
                <div className="flex items-center gap-2 text-zinc-100 pt-1">
                  <span className="text-emerald-400 font-bold">➜</span>
                  <span className="text-sky-400 font-semibold">~</span>
                  <input
                    ref={inputRef}
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-gray-100 outline-none caret-sky-400 font-mono"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />
                </div>
                <div ref={bottomRef} />
              </div>

              {/* Terminal Footer Quick Bar */}
              <div className="px-4 py-2 bg-[#121215] border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-0.5">
                  <span className="text-zinc-500 shrink-0">Try:</span>
                  {["help", "neofetch", "projects", "lab", "music", "hire"].map((quickCmd) => (
                    <button
                      key={quickCmd}
                      onClick={() => handleCommand(quickCmd)}
                      className="px-2 py-0.5 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 transition shrink-0"
                    >
                      {quickCmd}
                    </button>
                  ))}
                </div>

                <span className="text-[10px] text-zinc-500 shrink-0 hidden sm:inline ml-2">
                  ESC to close
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
