"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { getLocalizedProject } from "@/assets/assets";

export default function ProjectDetailView({ project, relatedProjects = [] }) {
  const { language, t } = useLanguage();
  const localizedProject = getLocalizedProject(project, language);
  const localizedRelated = relatedProjects.map((p) => getLocalizedProject(p, language));

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-28 sm:px-10 lg:px-16">
      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            ← {t("pages.projectDetail.back")}
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold capitalize text-sky-700 border border-sky-200/50 dark:bg-sky-400/10 dark:text-sky-300 dark:border-sky-400/20">
              {t(`categories.${localizedProject.category}`) || localizedProject.category}
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium dark:border-white/10">
              {localizedProject.year}
            </span>
            <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium dark:border-white/10">
              {localizedProject.role}
            </span>
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {localizedProject.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            {localizedProject.intro || localizedProject.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedProject.link || "#"}
              target={localizedProject.link && localizedProject.link !== "#" ? "_blank" : undefined}
              className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black"
            >
              {t("pages.projectDetail.visit")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-black/10 px-6 py-3 text-sm font-medium transition hover:-translate-y-0.5 dark:border-white/10"
            >
              {t("pages.projectDetail.contact")}
            </Link>
          </div>
        </div>

        <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-black/10 shadow-sm dark:border-white/10">
          <Image
            src={localizedProject.bgImage}
            alt={localizedProject.title}
            fill
            sizes="(max-width: 1200px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {localizedProject.summaryStats?.map((item) => (
          <div
            key={item.label}
            className="rounded-[1.5rem] border border-black/10 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
              {item.label}
            </p>
            <p className="mt-3 text-lg font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t("pages.projectDetail.stack")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {localizedProject.tech?.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black/[0.04] px-3 py-1 text-sm dark:bg-white/[0.06]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t("pages.projectDetail.highlights")}
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
              {localizedProject.caseStudy?.highlights?.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-6 md:grid-cols-3">
              <CaseBlock
                title={t("pages.projectDetail.problem")}
                text={localizedProject.caseStudy?.problem || localizedProject.description}
              />
              <CaseBlock
                title={t("pages.projectDetail.approach")}
                text={localizedProject.caseStudy?.approach || localizedProject.challenge}
              />
              <CaseBlock
                title={t("pages.projectDetail.outcome")}
                text={localizedProject.outcome}
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t("pages.projectDetail.process")}
            </p>
            <div className="mt-5 space-y-4">
              {localizedProject.caseStudy?.process?.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-2xl bg-black/[0.03] p-4 dark:bg-white/[0.04]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-semibold text-white dark:bg-white dark:text-black">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t("pages.projectDetail.learnings")}
            </p>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {localizedProject.caseStudy?.learnings?.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-black/10 p-4 text-sm leading-7 text-gray-600 dark:border-white/10 dark:text-gray-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {localizedRelated.length > 0 ? (
        <div className="mt-14">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t("pages.projectDetail.relatedEyebrow")}
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {t("pages.projectDetail.relatedTitle")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {localizedRelated.map((item) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="group overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/80"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

function CaseBlock({ title, text }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
        {title}
      </p>
      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-300">
        {text}
      </p>
    </div>
  );
}
