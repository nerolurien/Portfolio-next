"use client";

import Link from "next/link";
import { useLanguage } from "@/app/context/LanguageContext";

export default function PageHero({
  translationKey,
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}) {
  const { t } = useLanguage();

  const finalEyebrow = translationKey ? t(`${translationKey}.eyebrow`) : eyebrow;
  const finalTitle = translationKey ? t(`${translationKey}.title`) : title;
  const finalDesc = translationKey ? t(`${translationKey}.desc`) : description;
  const finalCta = translationKey ? t(`${translationKey}.cta`) : ctaLabel;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-8 pt-28 sm:px-10 lg:px-16">
      <div className="border border-stone-300/90 bg-[#efece4]/70 px-6 py-10 dark:border-zinc-800 dark:bg-[#111113] md:px-10 md:py-14">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-amber-700 dark:text-amber-400">
            {finalEyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-normal leading-tight text-stone-900 dark:text-[#ece8df] sm:text-5xl">
            {finalTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone-600 dark:text-zinc-300">
            {finalDesc}
          </p>

          {finalCta && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center gap-2.5 bg-stone-900 px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#f6f4ef] transition hover:bg-amber-600 dark:bg-[#ece8df] dark:text-[#0b0b0c] dark:hover:bg-amber-400"
            >
              <span>{finalCta}</span>
              <span>→</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
