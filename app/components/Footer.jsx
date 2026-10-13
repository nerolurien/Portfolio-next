import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import SpotifyCurrentlyPlaying from "./SpotifyCurrentlyPlaying";
import { useLanguage } from "@/app/context/LanguageContext";

const Footer = ({ isDarkMode }) => {
    const { language } = useLanguage();
    const isId = language === "id";
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-stone-300/90 dark:border-zinc-800/90 bg-[#efece4]/40 dark:bg-[#0d0d0f]">
            <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 lg:px-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src={isDarkMode ? assets.logo_dark : assets.logo}
                                alt="Rafid Dwi Prakoso"
                                className="w-28"
                            />
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 border border-stone-300 dark:border-zinc-800 px-2 py-0.5">
                                {year}
                            </span>
                        </div>

                        <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            {isId
                                ? "Developer software & game asal Bogor, Indonesia. Dibangun dengan Next.js dan Tailwind CSS."
                                : "Software & game developer based in Bogor, Indonesia. Built with Next.js and Tailwind CSS."}
                        </p>

                        <div className="pt-1">
                            <a
                                href="mailto:rafiddwiprakoso@gmail.com"
                                className="inline-flex items-center gap-2 font-mono text-xs text-zinc-800 dark:text-[#ece8df] hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                            >
                                <span className="h-1.5 w-1.5 bg-amber-500" />
                                <span>rafiddwiprakoso@gmail.com</span>
                                <span>↗</span>
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-7 lg:flex lg:justify-end">
                        <div className="w-full max-w-md">
                            <SpotifyCurrentlyPlaying variant="deck" />
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-stone-300/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-500">
                        &copy; {year} Rafid Dwi Prakoso
                    </p>

                    <ul className="flex flex-wrap items-center gap-5 font-mono text-xs uppercase tracking-[0.16em]">
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                                href="https://github.com/nerolurien"
                            >
                                GitHub ↗
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                                href="https://www.linkedin.com/in/rafid-dwi-prakoso-895a80300/"
                            >
                                LinkedIn ↗
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                                href="https://www.instagram.com/fiddd_dwi/"
                            >
                                Instagram ↗
                            </a>
                        </li>
                        <li>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                                href="https://open.spotify.com/user/31hil227n4qwgjzabs5hiu52i6v4?si=456f6635e96246aa"
                            >
                                Spotify ↗
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
