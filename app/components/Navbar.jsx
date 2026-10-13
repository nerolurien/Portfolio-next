import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
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
        { code: "01", label: t("nav.home"), href: "/" },
        { code: "02", label: t("nav.projects"), href: "/projects" },
        { code: "03", label: t("nav.about"), href: "/about" },
    ];

    const mobileNavItems = [
        ...navItems,
        { code: "04", label: t("nav.contact"), href: "/contact" },
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
            const shouldScroll = window.scrollY > 30;
            setIsScroll((prev) => (prev !== shouldScroll ? shouldScroll : prev));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 right-0 px-6 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between z-50 transition-all duration-300 border-b ${
                isScroll
                    ? "bg-[#f6f4ef]/90 dark:bg-[#0b0b0c]/90 backdrop-blur-md border-stone-300/90 dark:border-zinc-800/90"
                    : "bg-[#f6f4ef]/70 dark:bg-[#0b0b0c]/70 backdrop-blur-sm border-stone-300/50 dark:border-zinc-800/60"
            }`}
        >
            <div className="flex items-center gap-8">
                <Link href="/" aria-label="Back to top" className="flex items-center gap-3 group">
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        alt="Rafid Dwi Prakoso"
                        className="w-24 sm:w-28 cursor-pointer opacity-95 group-hover:opacity-100 transition-opacity"
                        priority
                    />
                </Link>

                <ul className="hidden md:flex items-center gap-1 border-l border-stone-300/80 dark:border-zinc-800 pl-6">
                    {navItems.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-[0.14em] transition-colors ${
                                        active
                                            ? "text-amber-700 dark:text-amber-400 bg-amber-500/10 border border-amber-500/30"
                                            : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-[#ece8df] border border-transparent"
                                    }`}
                                    href={item.href}
                                >
                                    <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                                        {item.code}/
                                    </span>
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5">
                <button
                    onClick={openCommandPalette}
                    type="button"
                    aria-label="Open command palette"
                    title={`Search (${shortcutKey})`}
                    className="hidden sm:flex items-center gap-2 px-2.5 sm:px-3 py-1.5 text-xs font-mono border border-stone-300 dark:border-zinc-800 bg-[#efece4]/80 dark:bg-[#111113] text-zinc-700 dark:text-zinc-300 hover:border-amber-500/50 transition-colors"
                >
                    <svg className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400">
                        {shortcutKey}
                    </span>
                </button>

                <button
                    onClick={toggleLanguage}
                    type="button"
                    aria-label={`Switch to ${language === "en" ? "Indonesian" : "English"}`}
                    title="Language"
                    className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-mono border border-stone-300 dark:border-zinc-800 bg-[#efece4]/80 dark:bg-[#111113] transition-colors hover:border-amber-500/50"
                >
                    <span className={language === "id" ? "font-semibold text-amber-700 dark:text-amber-400" : "text-zinc-400 dark:text-zinc-600"}>
                        ID
                    </span>
                    <span className="text-zinc-300 dark:text-zinc-700">/</span>
                    <span className={language === "en" ? "font-semibold text-amber-700 dark:text-amber-400" : "text-zinc-400 dark:text-zinc-600"}>
                        EN
                    </span>
                </button>

                <button
                    onClick={() => setIsDarkMode((prev) => !prev)}
                    type="button"
                    aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                    title={isDarkMode ? "Light mode" : "Dark mode"}
                    className="flex items-center justify-center w-8 h-8 border border-stone-300 dark:border-zinc-800 bg-[#efece4]/80 dark:bg-[#111113] text-zinc-700 dark:text-zinc-300 hover:border-amber-500/50 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                    {isDarkMode ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-amber-700" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>

                <Link
                    href="/contact"
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-1.5 border border-zinc-900 dark:border-[#ece8df] bg-zinc-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] font-mono text-[11px] uppercase tracking-[0.16em] hover:bg-amber-600 hover:border-amber-600 dark:hover:bg-amber-400 dark:hover:border-amber-400 transition-colors"
                >
                    <span>{t("nav.contact")}</span>
                    <span>↗</span>
                </Link>

                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="relative md:hidden flex flex-col justify-center items-center w-8 h-8 border border-stone-300 dark:border-zinc-800 bg-[#efece4]/80 dark:bg-[#111113] focus:outline-none"
                    aria-label="Open menu"
                >
                    <span className="block h-0.5 w-3.5 bg-zinc-900 dark:bg-[#ece8df]" />
                    <span className="block h-0.5 w-3.5 bg-zinc-900 dark:bg-[#ece8df] my-1" />
                    <span className="block h-0.5 w-3.5 bg-zinc-900 dark:bg-[#ece8df]" />
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 w-full h-[100dvh] max-h-[100dvh] z-50 bg-[#f6f4ef] dark:bg-[#0b0b0c] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto overscroll-contain md:hidden text-zinc-900 dark:text-[#ece8df]"
                    >
                        <div>
                            <div className="flex items-center justify-between pb-5 border-b border-stone-300 dark:border-zinc-800">
                                <Link
                                    href="/"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center gap-3"
                                >
                                    <Image
                                        src={isDarkMode ? assets.logo_dark : assets.logo}
                                        alt="Rafid Dwi Prakoso"
                                        className="w-24 cursor-pointer"
                                    />
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    aria-label="Close menu"
                                    className="p-2 border border-stone-300 dark:border-zinc-800 hover:border-amber-500/50 transition"
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
                                className="mt-5 flex items-center justify-between w-full px-4 py-3 border border-stone-300 dark:border-zinc-800 bg-[#efece4]/70 dark:bg-[#111113] text-zinc-700 dark:text-zinc-300 text-xs font-mono transition hover:border-amber-500/50"
                            >
                                <span className="flex items-center gap-2.5">
                                    <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    {language === "id" ? "Cari perintah & proyek..." : "Search commands & projects..."}
                                </span>
                                <kbd className="px-1.5 py-0.5 border border-stone-300 dark:border-zinc-700 text-[10px] font-mono">
                                    {shortcutKey}
                                </kbd>
                            </button>

                            <ul className="flex flex-col divide-y divide-stone-300/70 dark:divide-zinc-800/80 mt-5 border-y border-stone-300/70 dark:border-zinc-800/80">
                                {mobileNavItems.map((item) => {
                                    const active = pathname === item.href;

                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className={`flex items-center justify-between py-4 font-mono text-xs uppercase tracking-[0.16em] transition ${
                                                    active
                                                        ? "text-amber-700 dark:text-amber-400 font-semibold"
                                                        : "text-zinc-700 dark:text-zinc-300"
                                                }`}
                                            >
                                                <span>
                                                    <span className="text-zinc-400 dark:text-zinc-600 mr-2">{item.code}/</span>
                                                    {item.label}
                                                </span>
                                                {active ? (
                                                    <span className="w-1.5 h-1.5 bg-amber-500" />
                                                ) : (
                                                    <span className="text-zinc-400 dark:text-zinc-600 text-xs">→</span>
                                                )}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="pt-6 mt-6 pb-4 border-t border-stone-300 dark:border-zinc-800 space-y-4 shrink-0">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                                    {language === "id" ? "Bahasa" : "Language"}
                                </span>
                                <div className="inline-flex border border-stone-300 dark:border-zinc-800">
                                    <button
                                        type="button"
                                        onClick={toggleLanguage}
                                        className={`px-3 py-1 font-mono text-xs transition ${
                                            language === "id"
                                                ? "bg-zinc-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c]"
                                                : "text-zinc-500"
                                        }`}
                                    >
                                        ID
                                    </button>
                                    <button
                                        type="button"
                                        onClick={toggleLanguage}
                                        className={`px-3 py-1 font-mono text-xs transition ${
                                            language === "en"
                                                ? "bg-zinc-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c]"
                                                : "text-zinc-500"
                                        }`}
                                    >
                                        EN
                                    </button>
                                </div>
                            </div>

                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] font-mono text-xs uppercase tracking-[0.18em] transition hover:bg-amber-600 dark:hover:bg-amber-400"
                            >
                                <span>{t("nav.contact")}</span>
                                <span>↗</span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
