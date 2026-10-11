"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets, toolsData } from "@/assets/assets";

const toolGroups = [
  { name: "VS Code", image: assets.vscode },
  { name: "Firebase", image: assets.firebase },
  { name: "MongoDB", image: assets.mongodb },
  { name: "Git", image: assets.git },
  { name: "Unity", image: assets.unity },
  { name: "MySQL", image: assets.mysql },
  { name: "Next.js", image: assets.next_js },
  { name: "Figma", image: assets.figma },
  { name: "GO", image: assets.go },
  { name: "Spring boot", image: assets.spring}
];

import { useLanguage } from "@/app/context/LanguageContext";

export default function ToolsSection() {
  const { t } = useLanguage();
  const rowA = [...toolGroups, ...toolGroups];
  const rowB = [...toolGroups.slice().reverse(), ...toolGroups.slice().reverse()];

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
      <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 px-6 py-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300">
              {t("tools.eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">{t("tools.title")}</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300">
            {t("tools.desc")}
          </p>
        </div>

        <div className="space-y-4">
          <MarqueeRow items={rowA} direction="left" />
          <MarqueeRow items={rowB} direction="right" />
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] p-4 dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Image src={tool} alt={`Tool ${index + 1}`} className="h-9 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }) {
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-4 ${animationName} group-hover:[animation-play-state:paused]`}
      >
        {items.map((tool, index) => (
          <motion.div
            key={`${tool.name}-${index}`}
            whileHover={{ y: -4, scale: 1.02 }}
            className="flex min-w-fit items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 text-sm shadow-sm dark:border-white/10 dark:bg-white/5"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] p-2 dark:bg-white/[0.08]">
              <Image src={tool.image} alt={tool.name} className="h-5 w-auto object-contain" />
            </span>
            <span className="font-medium text-gray-700 dark:text-gray-100">{tool.name}</span>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .marquee-left {
          animation: marquee-left 26s linear infinite;
          will-change: transform;
        }

        .marquee-right {
          animation: marquee-right 26s linear infinite;
          will-change: transform;
        }

        @keyframes marquee-left {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes marquee-right {
          from {
            transform: translate3d(-50%, 0, 0);
          }
          to {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </div>
  );
}
