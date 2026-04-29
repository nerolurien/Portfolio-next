"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Work = ({
  projects = workData,
  title = "Projects with a bit more personality",
  description = "A mix of frontend builds, dashboards, and game experiments that show how I approach structure, visuals, and interaction.",
  eyebrow = "Selected Work",
  showFilters = true,
  maxItems,
  showViewAll = false,
}) => {
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
    <section id="work" className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 px-6 py-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 md:px-8 md:py-10">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-lime-300/20 blur-3xl dark:bg-lime-300/10" />
        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-300/10" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-600 dark:text-lime-300">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">{title}</h2>
          <p className="mt-5 text-balance text-base leading-7 text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        {showFilters ? (
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "border border-black/10 bg-white/80 text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                  }`}
                >
                  {category}
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
            transition={{ duration: 0.3 }}
            className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition dark:border-white/10 dark:bg-slate-900/80"
              >
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-800">
                        {project.category}
                      </span>
                      <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/80">{project.description}</p>
                    </div>
                  </div>
                </Link>

                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-gray-700 dark:bg-white/[0.06] dark:text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm font-medium text-gray-700 hover:text-black dark:text-gray-200 dark:hover:text-white"
                    >
                      Read case study
                    </Link>

                    <Link
                      href={project.link || `/projects/${project.id}`}
                      target={project.link && project.link !== "#" ? "_blank" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 dark:border-white/10"
                    >
                      Visit
                      <Image src={assets.send_icon} alt="" className="w-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {showViewAll ? (
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-900 dark:bg-white dark:text-black"
            >
              View all projects
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Work;
