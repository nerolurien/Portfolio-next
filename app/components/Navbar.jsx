import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { openCommandPalette } from "./CommandPalette";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const { language, toggleLanguage, t } = useLanguage();
    const [isScroll, setIsScroll] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [shortcutKey, setShortcutKey] = useState("Ctrl K");
    const pathname = usePathname();

    useEffect(() => {
        if (typeof navigator !== "undefined" && /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
            setShortcutKey("⌘K");
        }
    }, []);

    const navItems = [
        { label: t("nav.home"), href: "/" },
        { label: t("nav.projects"), href: "/projects" },
        { label: t("nav.about"), href: "/about" },
    ];

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const shouldScroll = window.scrollY > 50;
            setIsScroll((prev) => (prev !== shouldScroll ? shouldScroll : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const stars = [
        { top: 20, left: 18, delay: 0, duration: 2.5 },
        { top: 70, left: 24, delay: 0.8, duration: 3.2 },
        { top: 35, left: 45, delay: 1.4, duration: 2.8 },
        { top: 80, left: 60, delay: 0.4, duration: 3.0 },
        { top: 25, left: 82, delay: 1.9, duration: 2.6 },
        { top: 65, left: 88, delay: 1.1, duration: 3.4 },
    ];

    const clouds = [
        { width: 22, top: 4, left: 14 },
        { width: 28, top: 6, left: 44 },
        { width: 20, top: 3, left: 76 },
    ];

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
                <Image src={assets.header_bg_color} alt="" className="w-full" priority />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-0 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll
                    ? "bg-white/80 backdrop-blur-xl shadow-sm dark:bg-[#09090b]/85 dark:border-b dark:border-white/10"
                    : ""
                    }`}
            >
                <Link href="/" aria-label="Back to top">
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        alt="Website Logo"
                        className="w-28 cursor-pointer mr-14"
                        priority
                    />
                </Link>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
                        ? ""
                        : "bg-white/80 shadow-sm backdrop-blur-md border border-black/5 dark:border-white/10 dark:bg-white/5"
                        }`}
                >
                    {navItems.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    className={`font-ovo transition-colors duration-200 ${
                                        active
                                            ? "text-sky-600 dark:text-sky-400 font-semibold"
                                            : "text-gray-700 dark:text-gray-300 hover:text-sky-600 dark:hover:text-sky-400"
                                    }`}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-3 sm:gap-4">
                    <motion.button
                        onClick={() => setIsDarkMode((prev) => !prev)}
                        className={`relative flex items-center justify-start w-20 h-10 rounded-full p-1 transition-all duration-500 shadow-md ${isDarkMode
                                ? "bg-gradient-to-r from-zinc-800 to-zinc-900 border border-zinc-700"
                                : "bg-gradient-to-r from-amber-300 to-yellow-400 border border-amber-400"
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            {isDarkMode && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0">
                                    {stars.map((star, i) => (
                                        <motion.div
                                            key={`star-${i}`}
                                            className="absolute w-1 h-1 bg-white rounded-full"
                                            style={{ top: `${star.top}%`, left: `${star.left}%` }}
                                            animate={{ opacity: [0, 1, 0.5, 1, 0], scale: [0, 1, 0.8, 1, 0] }}
                                            transition={{ duration: star.duration, repeat: Infinity, delay: star.delay }}
                                        />
                                    ))}
                                </motion.div>
                            )}

                            {!isDarkMode && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0">
                                    {clouds.map((cloud, i) => (
                                        <motion.div
                                            key={`cloud-${i}`}
                                            className="absolute h-3 rounded-full bg-white/40"
                                            style={{ width: `${cloud.width}px`, top: `${cloud.top}px`, left: `${cloud.left}%` }}
                                            animate={{ x: [0, 5, 0], opacity: [0.4, 0.6, 0.4] }}
                                            transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, repeatType: "reverse" }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <motion.div
                            className={`absolute z-10 w-8 h-8 rounded-full flex items-center justify-center ${
                                isDarkMode ? "bg-gradient-to-br from-sky-400 to-blue-600" : "bg-gradient-to-br from-yellow-300 to-amber-500"
                            }`}
                            animate={{
                                x: isDarkMode ? 40 : 0,
                                boxShadow: isDarkMode ? "0 0 15px 2px rgba(56, 189, 248, 0.6)" : "0 0 15px 2px rgba(251, 191, 36, 0.7)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={isDarkMode ? "moon" : "sun"}
                                    initial={{ opacity: 0, rotate: -30, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 30, scale: 0.5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isDarkMode ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-amber-800" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </motion.button>

                    <button
                        onClick={openCommandPalette}
                        type="button"
                        aria-label="Open command palette"
                        title={`Command Palette (${shortcutKey})`}
                        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-full border border-black/15 dark:border-white/20 bg-white/70 dark:bg-white/10 shadow-sm backdrop-blur transition hover:scale-105 active:scale-95 text-gray-700 dark:text-gray-200"
                    >
                        <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="hidden sm:inline font-mono text-[10px] text-gray-500 dark:text-gray-400 px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">
                            {shortcutKey}
                        </span>
                    </button>

                    <button
                        onClick={toggleLanguage}
                        type="button"
                        aria-label={`Switch to ${language === "en" ? "Indonesian" : "English"}`}
                        title="Toggle language"
                        className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full border border-black/15 dark:border-white/20 bg-white/70 dark:bg-white/10 shadow-sm backdrop-blur transition hover:scale-105 active:scale-95"
                    >
                        <span className={language === "id" ? "font-bold text-sky-600 dark:text-sky-400" : "text-gray-400 dark:text-gray-400"}>
                            ID
                        </span>
                        <span className="text-gray-300 dark:text-gray-600">/</span>
                        <span className={language === "en" ? "font-bold text-sky-600 dark:text-sky-400" : "text-gray-400 dark:text-gray-400"}>
                            EN
                        </span>
                    </button>

                    <Link
                        href="/contact"
                        className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-500 rounded-full font-ovo dark:border-white/50 transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent duration-300"
                    >
                        {t("nav.contact")}
                        <Image
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                            alt=""
                            className="w-3 cursor-pointer"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="relative md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-white/80 dark:bg-white/10 backdrop-blur-md shadow-sm transition hover:scale-105 active:scale-95 focus:outline-none"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span
                            className={`block h-0.5 w-4 rounded-full bg-gray-900 dark:bg-white transition-all duration-300 ease-out ${
                                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-4 rounded-full bg-gray-900 dark:bg-white transition-all duration-300 ease-out my-1 ${
                                isMobileMenuOpen ? "opacity-0 scale-0" : ""
                            }`}
                        />
                        <span
                            className={`block h-0.5 w-4 rounded-full bg-gray-900 dark:bg-white transition-all duration-300 ease-out ${
                                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                            }`}
                        />
                    </button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                                aria-hidden="true"
                            />

                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                                className="fixed top-0 right-0 bottom-0 w-72 max-w-[85vw] h-screen z-50 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-2xl border-l border-black/10 dark:border-white/10 shadow-2xl flex flex-col justify-between p-6 md:hidden text-gray-900 dark:text-white"
                            >
                                <div>
                                    <div className="flex items-center justify-between pb-6 border-b border-black/10 dark:border-white/10">
                                        <Image
                                            src={isDarkMode ? assets.logo_dark : assets.logo}
                                            alt="Logo"
                                            className="w-24"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            aria-label="Close menu"
                                            className="p-2 rounded-full border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
                                        >
                                            <Image
                                                src={isDarkMode ? assets.close_white : assets.close_black}
                                                alt=""
                                                className="w-4 h-4"
                                            />
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            openCommandPalette();
                                        }}
                                        className="mt-4 flex items-center justify-between w-full px-4 py-2.5 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 text-gray-700 dark:text-gray-300 text-xs font-medium transition hover:border-sky-500/50"
                                    >
                                        <span className="flex items-center gap-2.5">
                                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            {language === "id" ? "Cari perintah & proyek..." : "Search commands & projects..."}
                                        </span>
                                        <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-[10px] font-mono">
                                            {shortcutKey}
                                        </kbd>
                                    </button>

                                    <ul className="flex flex-col gap-2 mt-4">
                                        {navItems.map((item) => {
                                            const active = pathname === item.href;

                                            return (
                                                <li key={item.href}>
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`flex items-center justify-between px-4 py-3 rounded-2xl text-base font-medium transition ${
                                                            active
                                                                ? "bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold"
                                                                : "text-gray-700 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5"
                                                        }`}
                                                    >
                                                        <span>{item.label}</span>
                                                        {active && (
                                                            <span className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_8px_#38bdf8]" />
                                                        )}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                <div className="pt-6 border-t border-black/10 dark:border-white/10 space-y-4">
                                    <div className="flex items-center justify-between px-2">
                                        <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                                            Bahasa / Language
                                        </span>
                                        <div className="inline-flex rounded-full p-1 border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/5">
                                            <button
                                                type="button"
                                                onClick={toggleLanguage}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                                                    language === "id"
                                                        ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                                                        : "text-gray-500 dark:text-gray-400"
                                                }`}
                                            >
                                                ID
                                            </button>
                                            <button
                                                type="button"
                                                onClick={toggleLanguage}
                                                className={`px-3 py-1 rounded-full text-xs font-semibold transition ${
                                                    language === "en"
                                                        ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                                                        : "text-gray-500 dark:text-gray-400"
                                                }`}
                                            >
                                                EN
                                            </button>
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-sm transition hover:opacity-90 shadow-sm"
                                    >
                                        <span>{t("nav.contact")}</span>
                                        <Image
                                            src={isDarkMode ? assets.arrow_icon : assets.arrow_icon_dark}
                                            alt=""
                                            className="w-3 invert dark:invert-0"
                                        />
                                    </Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
