import Link from "next/link";

export default function PageHero({ eyebrow, title, description, ctaLabel, ctaHref }) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-6 pt-28 sm:px-10 lg:px-16">
      <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 px-6 py-10 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 md:px-10 md:py-14">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-lime-300/20 blur-3xl dark:bg-lime-300/10" />
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-300/10" />

        <div className="relative max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-lime-600 dark:text-lime-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-base leading-7 text-gray-600 dark:text-gray-300">
            {description}
          </p>

          {ctaLabel && ctaHref ? (
            <Link
              href={ctaHref}
              className="mt-8 inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-gray-900 dark:bg-white dark:text-black"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
