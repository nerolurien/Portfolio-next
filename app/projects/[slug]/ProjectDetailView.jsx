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
    <section className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-10 lg:px-16">
      <div className="mb-8 flex items-center justify-between border-b border-stone-300/90 dark:border-zinc-800/90 pb-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-zinc-600 transition hover:text-amber-700 dark:text-zinc-400 dark:hover:text-amber-400"
        >
          <span>←</span>
          <span>{t("pages.projectDetail.back")}</span>
        </Link>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          {localizedProject.year}
        </span>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-6">
          <div className="flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-amber-700 dark:text-amber-400">
              {t(`categories.${localizedProject.category}`) || localizedProject.category}
            </span>
            <span className="border border-stone-300 dark:border-zinc-800 px-3 py-1 text-zinc-600 dark:text-zinc-400">
              {localizedProject.year}
            </span>
            <span className="border border-stone-300 dark:border-zinc-800 px-3 py-1 text-zinc-600 dark:text-zinc-400">
              {localizedProject.role}
            </span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-zinc-900 dark:text-[#ece8df] sm:text-5xl">
            {localizedProject.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {localizedProject.intro || localizedProject.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={localizedProject.link || "#"}
              target={localizedProject.link && localizedProject.link !== "#" ? "_blank" : undefined}
              className="inline-flex items-center gap-2 bg-zinc-900 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-[#f6f4ef] transition hover:bg-amber-600 dark:bg-[#ece8df] dark:text-[#0b0b0c] dark:hover:bg-amber-400"
            >
              <span>{t("pages.projectDetail.visit")}</span>
              <span>↗</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center border border-stone-300 dark:border-zinc-800 bg-[#efece4]/60 dark:bg-[#111113] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-zinc-800 dark:text-[#ece8df] transition hover:border-amber-500/50"
            >
              {t("pages.projectDetail.contact")}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-6 border border-stone-300 dark:border-zinc-800 bg-[#efece4] dark:bg-[#111113] p-2">
          <div className="relative aspect-[16/10] overflow-hidden border border-stone-300/70 dark:border-zinc-800/80">
            <Image
              src={localizedProject.bgImage}
              alt={localizedProject.title}
              fill
              sizes="(max-width: 1200px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 border border-stone-300 dark:border-zinc-800 divide-y sm:divide-y-0 sm:divide-x divide-stone-300 dark:divide-zinc-800 bg-[#efece4]/50 dark:bg-[#111113]/90">
        {localizedProject.summaryStats?.map((item, idx) => (
          <div key={item.label} className="p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
              0{idx + 1} / {item.label}
            </p>
            <p className="mt-2 font-display text-lg font-medium text-zinc-900 dark:text-[#ece8df]">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="border border-stone-300 dark:border-zinc-800 bg-[#efece4]/40 dark:bg-[#111113]/80 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
              {t("pages.projectDetail.stack")}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {localizedProject.tech?.map((item) => (
                <span
                  key={item}
                  className="border border-stone-300/90 dark:border-zinc-800 bg-[#f6f4ef] dark:bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-700 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="border border-stone-300 dark:border-zinc-800 bg-[#efece4]/40 dark:bg-[#111113]/80 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
              {t("pages.projectDetail.highlights")}
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {localizedProject.caseStudy?.highlights?.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-amber-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-6">
          <div className="border border-stone-300 dark:border-zinc-800 bg-[#efece4]/40 dark:bg-[#111113]/80 p-6">
            <div className="grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-300/80 dark:divide-zinc-800">
              <CaseBlock
                title={t("pages.projectDetail.problem")}
                text={localizedProject.caseStudy?.problem || localizedProject.description}
              />
              <div className="pt-4 md:pt-0 md:pl-6">
                <CaseBlock
                  title={t("pages.projectDetail.approach")}
                  text={localizedProject.caseStudy?.approach || localizedProject.challenge}
                />
              </div>
              <div className="pt-4 md:pt-0 md:pl-6">
                <CaseBlock
                  title={t("pages.projectDetail.outcome")}
                  text={localizedProject.outcome}
                />
              </div>
            </div>
          </div>

          <div className="border border-stone-300 dark:border-zinc-800 bg-[#efece4]/40 dark:bg-[#111113]/80 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
              {t("pages.projectDetail.process")}
            </p>
            <div className="mt-5 divide-y divide-stone-300/70 dark:divide-zinc-800/80 border-t border-stone-300/70 dark:border-zinc-800/80">
              {localizedProject.caseStudy?.process?.map((step, index) => (
                <div key={step} className="flex gap-4 py-4">
                  <span className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-400 pt-0.5">
                    0{index + 1}/
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-stone-300 dark:border-zinc-800 bg-[#efece4]/40 dark:bg-[#111113]/80 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
              {t("pages.projectDetail.learnings")}
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {localizedProject.caseStudy?.learnings?.map((item) => (
                <div
                  key={item}
                  className="border border-stone-300/80 dark:border-zinc-800 bg-[#f6f4ef]/70 dark:bg-zinc-900/50 p-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {localizedRelated.length > 0 ? (
        <div className="mt-16 border-t border-stone-300/90 dark:border-zinc-800/90 pt-10">
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
              {t("pages.projectDetail.relatedEyebrow")}
            </p>
            <h2 className="mt-2 font-display text-2xl font-medium text-zinc-900 dark:text-[#ece8df]">
              {t("pages.projectDetail.relatedTitle")}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {localizedRelated.map((item, idx) => (
              <Link
                key={item.id}
                href={`/projects/${item.id}`}
                className="group flex flex-col border border-stone-300 dark:border-zinc-800 bg-[#efece4]/40 dark:bg-[#111113]/90 transition hover:border-amber-500/60"
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-stone-300/80 dark:border-zinc-800 font-mono text-[11px] text-zinc-500">
                  <span>0{idx + 1}</span>
                  <span>{item.year}</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-stone-300/80 dark:border-zinc-800">
                  <Image
                    src={item.bgImage}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-zinc-900 dark:text-[#ece8df] group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
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
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        {title}
      </p>
      <p className="mt-2.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
        {text}
      </p>
    </div>
  );
}
