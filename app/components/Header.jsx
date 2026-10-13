"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import SpotifyCurrentlyPlaying from "./SpotifyCurrentlyPlaying";
import { openTerminal } from "./TerminalDrawer";

const Header = () => {
  const { language, t } = useLanguage();
  const isId = language === "id";

  return (
    <header
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex flex-wrap items-center justify-between gap-4 border-y border-stone-300/90 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-600 dark:border-zinc-800 dark:text-zinc-400"
      >
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-500" />
          <span>{t("header.badge")}</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-stone-500 dark:text-zinc-500">
          <span>2026</span>
          <span>•</span>
          <span>NEXT.JS / LARAVEL / GO / UNITY</span>
        </div>
      </motion.div>

      <div className="grid w-full items-start gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mb-5 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-700 dark:text-amber-400"
            >
              <span>{t("header.greeting")}</span>
              <span className="text-stone-400 dark:text-zinc-600">/</span>
              <span className="text-stone-600 dark:text-zinc-400">
                {isId
                  ? "Full-Stack • Backend • Pengembang Game"
                  : "Full-Stack • Backend • Game Dev"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="font-display text-4xl font-normal leading-[1.08] tracking-tight text-stone-900 dark:text-[#ece8df] sm:text-6xl lg:text-[4.15rem]"
            >
              {isId ? (
                <>
                  Bikin{" "}
                  <span className="italic font-normal text-amber-600 dark:text-amber-400">
                    aplikasi web
                  </span>
                  , sistem backend, dan{" "}
                  <span className="underline decoration-stone-400/60 dark:decoration-zinc-700 decoration-1 underline-offset-8">
                    game interaktif
                  </span>
                  .
                </>
              ) : (
                <>
                  Building{" "}
                  <span className="italic font-normal text-amber-600 dark:text-amber-400">
                    web apps
                  </span>
                  , backend systems, and{" "}
                  <span className="underline decoration-stone-400/60 dark:decoration-zinc-700 decoration-1 underline-offset-8">
                    indie games
                  </span>
                  .
                </>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="mt-7 max-w-2xl text-base leading-relaxed text-stone-700 dark:text-zinc-300 sm:text-lg"
            >
              {t("header.bio")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3.5"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 bg-stone-900 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-wider text-[#f6f4ef] transition hover:bg-amber-600 dark:bg-[#ece8df] dark:text-[#0b0b0c] dark:hover:bg-amber-400"
            >
              <span>{t("header.exploreProjects")}</span>
              <span>→</span>
            </Link>

            <a
              href="/CV Rafid Dwi Prakoso.pdf"
              download
              className="inline-flex items-center gap-2.5 border border-stone-400/80 bg-transparent px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-wider text-stone-800 transition hover:border-stone-900 hover:bg-stone-200/50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-amber-400/60 dark:hover:bg-zinc-900"
            >
              <span>{t("header.downloadResume")}</span>
              <span className="text-amber-600 dark:text-amber-400">↓</span>
            </a>

            <button
              type="button"
              onClick={openTerminal}
              className="inline-flex items-center gap-2 border border-stone-300/90 bg-[#efece4] px-4 py-3.5 font-mono text-xs text-stone-600 transition hover:border-amber-600/50 hover:text-stone-900 dark:border-zinc-800 dark:bg-[#111113] dark:text-zinc-400 dark:hover:border-amber-500/40 dark:hover:text-amber-400"
              title={isId ? "Buka terminal" : "Open terminal"}
            >
              <span className="text-amber-600 dark:text-amber-400 font-bold">{">_"}</span>
              <span>terminal</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4 }}
            className="mt-10 max-w-xl"
          >
            <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
              <span>{isId ? "Musik / Spotify" : "Music / Spotify"}</span>
              <span>Last.fm</span>
            </div>
            <SpotifyCurrentlyPlaying variant="ticker" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="border border-stone-300/90 bg-[#efece4]/80 p-5 dark:border-zinc-800 dark:bg-[#111113]">
            <div className="flex items-center justify-between border-b border-stone-300/80 pb-3.5 mb-5 dark:border-zinc-800">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
                  {t("header.nowBuilding")}
                </p>
                <p className="mt-0.5 text-xs font-medium text-stone-800 dark:text-zinc-200">
                  {t("header.nowBuildingText")}
                </p>
              </div>
              <span className="border border-amber-600/40 bg-amber-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-700 dark:border-amber-400/30 dark:text-amber-400">
                {t("header.openToWork")}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
              <div className="sm:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden border border-stone-400/60 bg-zinc-900 dark:border-zinc-700">
                  <Image
                    src={assets.profile_img}
                    alt="Rafid Dwi Prakoso"
                    fill
                    sizes="(max-width: 640px) 100vw, 220px"
                    className="object-cover grayscale-[15%] contrast-105 transition duration-500 hover:grayscale-0"
                    priority
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-black/75 px-2.5 py-1 font-mono text-[10px] text-amber-400 flex justify-between">
                    <span>RAFID</span>
                    <span>BOGOR</span>
                  </div>
                </div>
              </div>

              <div className="sm:col-span-7 flex flex-col justify-between space-y-4">
                <div className="border-l-2 border-amber-500 pl-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
                    {t("header.coreFocus")}
                  </p>
                  <p className="mt-1.5 font-display text-base italic leading-snug text-stone-900 dark:text-[#ece8df]">
                    “{t("header.coreFocusText")}”
                  </p>
                </div>

                <div className="space-y-2 border-t border-stone-300/80 pt-3.5 font-mono text-[11px] dark:border-zinc-800">
                  <div className="flex justify-between">
                    <span className="text-stone-500 dark:text-zinc-500">WEB</span>
                    <span className="text-stone-800 dark:text-zinc-200">Next.js, Vue, Laravel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 dark:text-zinc-500">BACKEND</span>
                    <span className="text-stone-800 dark:text-zinc-200">Go, AdonisJS, Java</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 dark:text-zinc-500">GAME</span>
                    <span className="text-stone-800 dark:text-zinc-200">Unity 2D/3D & C#</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500 dark:text-zinc-500">INFRA / DB</span>
                    <span className="text-amber-700 dark:text-amber-400">Docker, MySQL, Mongo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
