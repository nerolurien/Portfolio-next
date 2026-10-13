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
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0b0b0c] text-[#ece8df] px-6 py-8 sm:px-12 sm:py-10 border-b border-zinc-800"
    >
      <div className="flex items-center justify-between border-b border-zinc-800/90 pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-amber-500" />
          <span>Rafid Dwi Prakoso</span>
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
            <span className="font-display italic text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#ece8df] whitespace-nowrap">
              {words[index]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="border-t border-zinc-800/90 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
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
                  : "w-2 bg-zinc-800"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
