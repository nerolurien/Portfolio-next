"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const Contact = () => {
  const { language, t } = useLanguage();
  const isId = language === "id";
  const [result, setResult] = useState({ message: "", status: "" });
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (result.status === "success" || result.status === "error") {
      const timer = setTimeout(() => {
        setShowResult(false);
        setTimeout(() => setResult({ message: "", status: "" }), 500);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  useEffect(() => {
    if (result.message) {
      setShowResult(true);
    }
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult({ message: t("contact.sending"), status: "loading" });
    setShowResult(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "4c98aa29-cfc7-42b3-b8dc-9780c33eb656");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({ message: t("contact.success"), status: "success" });
        event.target.reset();
      } else {
        setResult({ message: data.message || t("contact.error"), status: "error" });
      }
    } catch {
      setResult({ message: t("contact.error"), status: "error" });
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 border-t border-stone-300/80 dark:border-zinc-800/90 scroll-mt-20"
    >
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
              {t("contact.eyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl font-normal tracking-tight text-stone-900 dark:text-[#ece8df] sm:text-5xl">
              {t("contact.title")}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-zinc-400">
              {t("contact.desc")}
            </p>
          </div>

          <div className="mt-10 border border-stone-300/90 bg-[#efece4]/60 p-6 font-mono text-xs dark:border-zinc-800 dark:bg-[#111113] space-y-4">
            <div className="flex items-center justify-between border-b border-stone-300/80 pb-3 dark:border-zinc-800">
              <span className="text-stone-500 dark:text-zinc-500">
                {isId ? "Info Kontak" : "Contact Info"}
              </span>
              <span className="text-amber-700 dark:text-amber-400">
                {isId ? "Aktif" : "Online"}
              </span>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
                Email
              </p>
              <a
                href="mailto:rafiddwiprakoso@gmail.com"
                className="mt-1 block text-sm font-semibold text-stone-900 hover:text-amber-600 dark:text-[#ece8df] dark:hover:text-amber-400 transition-colors"
              >
                rafiddwiprakoso@gmail.com ↗
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
                {isId ? "Domisili" : "Location"}
              </p>
              <p className="mt-1 text-stone-800 dark:text-zinc-300">
                Bogor, Jawa Barat (WIB / UTC+7)
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="border border-stone-300/90 bg-[#efece4]/50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-[#111113]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-400">
                  {isId ? "Nama" : "Name"}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  required
                  name="name"
                  className="w-full p-3.5 text-sm outline-none border border-stone-300/90 bg-[#f6f4ef] text-stone-900 placeholder-stone-400 focus:border-amber-600 dark:bg-[#0b0b0c] dark:border-zinc-800 dark:text-[#ece8df] dark:placeholder-zinc-600 dark:focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  name="email"
                  className="w-full p-3.5 text-sm outline-none border border-stone-300/90 bg-[#f6f4ef] text-stone-900 placeholder-stone-400 focus:border-amber-600 dark:bg-[#0b0b0c] dark:border-zinc-800 dark:text-[#ece8df] dark:placeholder-zinc-600 dark:focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-400">
                {isId ? "Pesan" : "Message"}
              </label>
              <textarea
                rows="6"
                placeholder={t("contact.messagePlaceholder")}
                required
                name="message"
                className="w-full p-4 text-sm outline-none border border-stone-300/90 bg-[#f6f4ef] text-stone-900 placeholder-stone-400 focus:border-amber-600 dark:bg-[#0b0b0c] dark:border-zinc-800 dark:text-[#ece8df] dark:placeholder-zinc-600 dark:focus:border-amber-400 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-stone-900 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#f6f4ef] transition hover:bg-amber-600 dark:bg-[#ece8df] dark:text-[#0b0b0c] dark:hover:bg-amber-400"
            >
              <span>{t("contact.submit")}</span>
              <span>→</span>
            </button>

            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="fixed bottom-6 right-6 max-w-md z-50"
                >
                  <div
                    className={`flex items-center gap-3 px-5 py-4 border font-mono text-xs shadow-xl ${
                      result.status === "success"
                        ? "bg-stone-900 text-amber-400 border-amber-500/50 dark:bg-[#141417] dark:text-amber-400"
                        : result.status === "error"
                        ? "bg-stone-900 text-rose-400 border-rose-500/50"
                        : "bg-stone-900 text-stone-200 border-stone-700"
                    }`}
                  >
                    <div>
                      <p className="mt-0.5 text-stone-200">{result.message}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
