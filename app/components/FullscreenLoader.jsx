"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "Hello",
  "Halo",
  "Bonjour",
  "Hola",
  "Ciao",
  "こんにちは",
  "Guten Tag",
  "Olá",
  "Selamat Datang",
];

export default function FullscreenLoader({ onComplete }) {
  const [index, setIndex] = useState(0);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLight =
        localStorage.theme === "light" ||
        !document.documentElement.classList.contains("dark");
      setIsDark(!isLight);
    }
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      const finishTimeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 650);
      return () => clearTimeout(finishTimeout);
    }

    const delay = index === 0 ? 400 : 240;
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className={`fixed inset-0 z-[9999] flex flex-col justify-between px-6 py-8 sm:px-12 sm:py-10 border-b transition-colors duration-200 ${
        isDark
          ? "bg-[#0b0b0c] text-[#ece8df] border-zinc-800"
          : "bg-[#f6f4ef] text-stone-900 border-stone-300"
      }`}
    >
      <div
        className={`flex items-center justify-between pb-4 font-mono text-[11px] uppercase tracking-[0.2em] border-b ${
          isDark
            ? "border-zinc-800/90 text-zinc-500"
            : "border-stone-300/80 text-stone-500"
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-amber-500" />
          <span className={isDark ? "text-zinc-300" : "text-stone-800"}>
            Rafid Dwi Prakoso
          </span>
        </div>
        <span>
          0{index + 1} / 0{words.length}
        </span>
      </div>

      <div className="relative flex items-center justify-center min-h-[110px] w-full max-w-2xl mx-auto px-4 overflow-hidden text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-4 select-none text-center"
          >
            <span className="h-2.5 w-2.5 bg-amber-500 shrink-0" />
            <span
              className={`font-display italic text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight whitespace-nowrap ${
                isDark ? "text-[#ece8df]" : "text-stone-900"
              }`}
            >
              {words[index]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t ${
          isDark
            ? "border-zinc-800/90 text-zinc-500"
            : "border-stone-300/80 text-stone-500"
        }`}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
          Portfolio 2026
        </span>

        <div className="flex items-center gap-1.5">
          {words.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 transition-all duration-200 ${
                i === index
                  ? "w-6 bg-amber-500"
                  : i < index
                  ? "w-2 bg-amber-500/40"
                  : isDark
                  ? "w-2 bg-zinc-800"
                  : "w-2 bg-stone-300"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
