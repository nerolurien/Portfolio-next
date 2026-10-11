"use client";

import { assets, highlightStats } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import RotatingText from "./RotatingText";
import { useLanguage } from "@/app/context/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const statLabels = [
    t("header.stats.projects"),
    t("header.stats.specialties"),
    t("header.stats.energy"),
  ];

  return (
    <header
      id="top"
      className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-14 pt-28 sm:px-10 lg:px-16"
    >
      <div className="absolute left-8 top-28 h-24 w-24 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10 pointer-events-none" />
      <div className="absolute right-8 top-24 h-32 w-32 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-300/15 pointer-events-none" />

      <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
            {t("header.badge")}
          </motion.div>

          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            {t("header.headline")}
          </motion.h1>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 text-lg font-ovo lg:justify-start lg:text-2xl"
          >
            <span>{t("header.greeting")}</span>
            <RotatingText
              texts={t("header.roles")}
              mainClassName="rounded-xl bg-cyan-300 px-3 py-1.5 text-base text-black sm:px-4 lg:text-xl"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
            />
            <motion.div
              animate={{ rotate: [0, 18, -10, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
              className="inline-block"
            >
              <Image src={assets.hand_icon} alt="Waving hand" className="w-6" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-2xl text-balance text-base leading-7 text-gray-600 dark:text-gray-300 lg:text-lg mx-auto lg:mx-0"
          >
            {t("header.bio")}
          </motion.p>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:items-start lg:justify-start"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
            >
              {t("header.exploreProjects")}
              <Image src={assets.right_arrow_white} alt="" className="w-4 dark:invert" />
            </Link>

            <a
              href="/CV Rafid Dwi Prakoso.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-7 py-3 text-sm font-medium shadow-sm backdrop-blur transition hover:-translate-y-0.5 dark:border-white/20 dark:bg-white/5"
            >
              {t("header.downloadResume")}
              <Image src={assets.download_icon} alt="" className="w-4 dark:invert" />
            </a>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
            {highlightStats.map((item, idx) => (
              <div
                key={item.label}
                className="rounded-2xl border border-black/10 bg-white/75 p-4 text-left shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{statLabels[idx] || item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.94, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sky-400/20 via-blue-500/15 to-transparent blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/80 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{t("header.nowBuilding")}</p>
                <p className="font-medium">{t("header.nowBuildingText")}</p>
              </div>
              <div className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 border border-sky-200/50 dark:bg-sky-400/10 dark:text-sky-300 dark:border-sky-400/20">
                {t("header.openToWork")}
              </div>
            </div>

            <div className="relative rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl pointer-events-none" />
              <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />
              <Image
                src={assets.profile_img}
                alt="Portrait of Rafid"
                className="relative mx-auto w-44 rounded-[1.75rem] border border-white/10 bg-white/95 p-2 shadow-lg"
                priority
              />
              <div className="relative mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-white/70">{t("header.coreFocus")}</p>
                <p className="mt-2 text-lg font-medium">{t("header.coreFocusText")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-sm text-gray-500 md:inline-flex dark:text-gray-400"
      >
        {t("header.exploreBelow")}
        <span className="flex h-8 w-5 justify-center rounded-full border border-current">
          <motion.span
            animate={{ y: [4, 12, 4] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="mt-1.5 h-2 w-2 rounded-full bg-current"
          />
        </span>
      </motion.div>
    </header>
  );
};

export default Header;
