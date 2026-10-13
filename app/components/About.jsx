"use client";

import { assets, educationList, experienceList, serviceHighlights } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/context/LanguageContext";
import GithubActivityGraph from "./GithubActivityGraph";

const About = () => {
  const { language, t } = useLanguage();
  const isId = language === "id";

  const fieldNotes = [
    {
      code: "01",
      label: t("about.stackTitle"),
      detail: t("about.stackDesc"),
    },
    {
      code: "02",
      label: t("about.learningTitle"),
      detail: t("about.learningDesc"),
    },
    {
      code: "03",
      label: t("about.projectFocusTitle"),
      detail: t("about.projectFocusDesc"),
    },
  ];

  const localizedExperience = [
    {
      ...experienceList[0],
      role: isId ? "Magang Divisi IT" : experienceList[0].role,
      description: t("about.internship1Desc"),
    },
    {
      ...experienceList[1],
      role: isId ? "Magang Backend Developer" : experienceList[1].role,
      description: t("about.internship2Desc"),
    },
  ];

  const localizedEducation = [
    {
      ...educationList[0],
      major: isId
        ? "PPLG (Pengembangan Perangkat Lunak & Gim)"
        : educationList[0].major,
      description: t("about.educationDesc"),
    },
  ];

  const rawPillars = t("about.serviceHighlights");
  const pillars = Array.isArray(rawPillars) ? rawPillars : serviceHighlights;

  return (
    <section
      id="about"
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 border-t border-stone-300/80 dark:border-zinc-800/90"
    >
      <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            {t("about.eyebrow")}
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal tracking-tight text-stone-900 dark:text-[#ece8df] sm:text-5xl">
            {t("about.title")}
          </h2>
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-stone-500 dark:text-zinc-500">
          Bogor, Indonesia
        </p>
      </div>

      <div className="grid items-start gap-12 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 space-y-6"
        >
          <div className="border border-stone-300/90 bg-[#efece4]/70 p-4 dark:border-zinc-800 dark:bg-[#111113]">
            <div className="mb-2.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-stone-500 dark:text-zinc-500">
              <span>Rafid Dwi Prakoso</span>
              <span>PPLG</span>
            </div>
            <div className="relative overflow-hidden border border-stone-400/50 dark:border-zinc-800 bg-zinc-900">
              <Image
                src={assets.user_image}
                alt="Rafid Dwi Prakoso"
                className="w-full object-cover grayscale-[15%] contrast-105 transition duration-500 hover:grayscale-0"
              />
            </div>
            <p className="mt-3 font-mono text-[11px] leading-relaxed text-stone-600 dark:text-zinc-400">
              {isId
                ? "SMK Wikrama Bogor • Pengembangan Web & Game"
                : "SMK Wikrama Bogor • Web & Game Development"}
            </p>
          </div>

          <div className="border border-stone-300/90 bg-[#efece4]/50 divide-y divide-stone-300/80 dark:border-zinc-800 dark:bg-[#111113]/70 dark:divide-zinc-800">
            {fieldNotes.map((note) => (
              <div key={note.code} className="p-4">
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-amber-700 dark:text-amber-400">
                  <span>{note.code}</span>
                </div>
                <h3 className="mt-1 font-sans text-sm font-semibold uppercase tracking-wide text-stone-900 dark:text-[#ece8df]">
                  {note.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
                  {note.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="lg:col-span-8 space-y-12"
        >
          <div className="border-l-2 border-amber-500 pl-6 py-1">
            <p className="font-display text-2xl leading-relaxed text-stone-900 dark:text-[#ece8df] sm:text-3xl">
              {t("about.desc")}
            </p>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between border-b border-stone-300/90 pb-2.5 dark:border-zinc-800">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 dark:text-zinc-400">
                {t("about.whatILikeBuilding")}
              </span>
              <span className="font-mono text-[11px] text-stone-400 dark:text-zinc-500">
                01 - 03
              </span>
            </div>

            <div className="divide-y divide-stone-300/80 border-b border-stone-300/80 dark:divide-zinc-800 dark:border-zinc-800">
              {pillars.map((item, idx) => (
                <div
                  key={item.title}
                  className="group grid gap-4 py-6 transition-colors sm:grid-cols-12 sm:items-baseline"
                >
                  <div className="sm:col-span-4">
                    <span className="font-mono text-xs text-amber-600 dark:text-amber-400">
                      /{item.id || `0${idx + 1}`}
                    </span>
                    <h4 className="mt-1 font-display text-xl font-medium text-stone-900 group-hover:text-amber-600 dark:text-[#ece8df] dark:group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    {item.spec && (
                      <p className="mt-1 font-mono text-[11px] text-stone-500 dark:text-zinc-500">
                        {item.spec}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-8">
                    <p className="text-sm leading-relaxed text-stone-700 dark:text-zinc-300 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7 border border-stone-300/90 bg-[#efece4]/60 p-6 dark:border-zinc-800 dark:bg-[#111113]">
              <div className="flex items-center justify-between border-b border-stone-300/80 pb-3 dark:border-zinc-800">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-zinc-300">
                  {t("about.experienceTitle")}
                </p>
                <span className="font-mono text-[10px] text-amber-600 dark:text-amber-400">
                  2025 - 2026
                </span>
              </div>

              <div className="mt-5 space-y-6">
                {localizedExperience.map((item, idx) => (
                  <div
                    key={`${item.company}-${item.period}`}
                    className={`relative pl-4 border-l border-stone-400/70 dark:border-zinc-700 ${
                      idx !== 0 ? "pt-2" : ""
                    }`}
                  >
                    <span className="absolute -left-[4.5px] top-1.5 h-2 w-2 bg-amber-500" />
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-sans text-base font-semibold text-stone-900 dark:text-[#ece8df]">
                        {item.company}
                      </h4>
                      <span className="font-mono text-[11px] text-amber-700 dark:text-amber-400">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-0.5 font-mono text-xs text-stone-500 dark:text-zinc-400">
                      {item.role}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 border border-stone-300/90 bg-[#efece4]/60 p-6 dark:border-zinc-800 dark:bg-[#111113] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-stone-300/80 pb-3 dark:border-zinc-800">
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-stone-700 dark:text-zinc-300">
                    {t("about.educationTitle")}
                  </p>
                  <span className="font-mono text-[10px] text-stone-500 dark:text-zinc-500">
                    SMK
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {localizedEducation.map((item) => (
                    <div key={`${item.school}-${item.major}`}>
                      <h4 className="font-display text-xl font-medium text-stone-900 dark:text-[#ece8df]">
                        {item.school}
                      </h4>
                      <p className="mt-1 font-mono text-xs text-amber-700 dark:text-amber-400">
                        {item.major}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-zinc-300">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-stone-300/80 pt-3 font-mono text-[11px] text-stone-500 dark:border-zinc-800 dark:text-zinc-500 flex justify-between">
                <span>{isId ? "JURUSAN" : "MAJOR"}</span>
                <span className="text-stone-800 dark:text-zinc-300">PPLG</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <GithubActivityGraph />
      </motion.div>
    </section>
  );
};

export default About;
