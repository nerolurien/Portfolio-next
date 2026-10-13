"use client";

import { getLocalizedProject, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/context/LanguageContext";

const Work = ({
  projects = workData,
  title,
  description,
  eyebrow,
  showFilters = true,
  maxItems,
  showViewAll = false,
}) => {
  const { language, t } = useLanguage();
  const displayTitle = title || (showViewAll ? t("work.title") : t("work.titleAll"));
  const displayDescription = description || (showViewAll ? t("work.desc") : t("work.descAll"));
  const displayEyebrow = eyebrow || t("work.eyebrow");

  const [activeFilter, setActiveFilter] = useState("all");

  const categories = useMemo(
    () => ["all", ...new Set(projects.map((project) => project.category || "other"))],
    [projects]
  );

  const filteredProjects = useMemo(() => {
    const base =
      activeFilter === "all"
        ? projects
        : projects.filter((project) => project.category === activeFilter);

    return maxItems ? base.slice(0, maxItems) : base;
  }, [activeFilter, maxItems, projects]);

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-16 border-t border-stone-300/80 dark:border-zinc-800/90"
    >
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            {displayEyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-normal tracking-tight text-stone-900 dark:text-[#ece8df] sm:text-5xl">
            {displayTitle}
          </h2>
        </div>
        <p className="max-w-xl text-sm leading-relaxed text-stone-600 dark:text-zinc-400 sm:text-base">
          {displayDescription}
        </p>
      </div>

      {showFilters ? (
        <div className="mb-10 flex flex-wrap items-center gap-2 border-y border-stone-300/80 py-3.5 dark:border-zinc-800">
          <span className="mr-2 font-mono text-[10px] uppercase tracking-widest text-stone-400 dark:text-zinc-500">
            {language === "id" ? "Kategori:" : "Category:"}
          </span>
          {categories.map((category) => {
            const isActive = activeFilter === category;
            const categoryLabel =
              category === "all"
                ? t("work.filterAll")
                : t(`categories.${category}`) || category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition ${
                  isActive
                    ? "bg-stone-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] font-semibold"
                    : "border border-stone-300/80 bg-transparent text-stone-600 hover:border-stone-600 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-600"
                }`}
              >
                {categoryLabel}
              </button>
            );
          })}
        </div>
      ) : null}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((rawProject, index) => {
            const project = getLocalizedProject(rawProject, language);
            const indexLabel = String(index + 1).padStart(2, "0");

            return (
              <article
                key={project.id}
                className="group flex flex-col justify-between border border-stone-300/90 bg-[#efece4]/60 transition-colors hover:border-amber-600/60 dark:border-zinc-800 dark:bg-[#111113] dark:hover:border-amber-500/50"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-stone-300/80 px-4 py-2.5 font-mono text-[11px] dark:border-zinc-800">
                    <span className="text-amber-700 dark:text-amber-400 font-semibold">
                      {indexLabel} / {project.year}
                    </span>
                    <span className="uppercase tracking-wider text-stone-500 dark:text-zinc-400">
                      {t(`categories.${project.category}`) || project.category}
                    </span>
                  </div>

                  <Link href={`/projects/${project.id}`} className="block overflow-hidden border-b border-stone-300/80 dark:border-zinc-800">
                    <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                      <Image
                        src={project.bgImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="p-5">
                    <Link href={`/projects/${project.id}`}>
                      <h3 className="font-display text-2xl font-normal text-stone-900 group-hover:text-amber-700 dark:text-[#ece8df] dark:group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-stone-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2">
                  <div className="flex flex-wrap gap-1.5 border-t border-stone-300/80 pt-4 dark:border-zinc-800/90">
                    {project.tech?.map((item) => (
                      <span
                        key={item}
                        className="border border-stone-300/90 bg-[#f6f4ef] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-stone-700 dark:border-zinc-800 dark:bg-[#0b0b0c] dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4 pt-2 font-mono text-xs">
                    <Link
                      href={`/projects/${project.id}`}
                      className="font-semibold uppercase tracking-wider text-stone-900 hover:text-amber-700 dark:text-[#ece8df] dark:hover:text-amber-400 transition-colors"
                    >
                      {t("work.readCase")} →
                    </Link>

                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-stone-400/70 px-3 py-1.5 text-[11px] uppercase tracking-wider text-stone-700 transition hover:border-stone-900 hover:bg-stone-900 hover:text-white dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-amber-400 dark:hover:text-amber-400"
                      >
                        <span>{t("work.visit")}</span>
                        <span>↗</span>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            );
          })}
        </motion.div>
      </AnimatePresence>

      {showViewAll ? (
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 border border-stone-900 bg-stone-900 px-8 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-[#f6f4ef] transition hover:bg-amber-600 hover:border-amber-600 dark:border-[#ece8df] dark:bg-[#ece8df] dark:text-[#0b0b0c] dark:hover:bg-amber-400 dark:hover:border-amber-400"
          >
            <span>{t("work.viewAll")}</span>
            <span>→</span>
          </Link>
        </div>
      ) : null}
    </section>
  );
};

export default Work;
