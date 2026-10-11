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
  "Selamat Datang"
];

export default function FullscreenLoader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index === words.length - 1) {
      const finishTimeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 750);
      return () => clearTimeout(finishTimeout);
    }

    const delay = index === 0 ? 450 : 300;
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
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#09090b] text-white"
    >
      <div className="absolute h-64 w-64 rounded-full bg-sky-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute h-64 w-64 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none translate-x-20 translate-y-20" />

      <div className="relative flex items-center justify-center min-h-[90px] w-full max-w-xl mx-auto px-4 overflow-hidden text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={words[index]}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="inline-flex items-center justify-center gap-3 select-none text-center"
          >
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8] shrink-0" />
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight whitespace-nowrap text-center">
              {words[index]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-12 flex items-center gap-1.5">
        {words.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? "w-6 bg-sky-400 shadow-[0_0_8px_#38bdf8]"
                : i < index
                ? "w-1.5 bg-white/40"
                : "w-1.5 bg-white/10"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}
