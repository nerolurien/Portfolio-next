"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const shouldShow = window.scrollY > 200;
            setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 w-10 h-10 border border-stone-300 dark:border-zinc-800 bg-zinc-900 text-[#f6f4ef] dark:bg-[#ece8df] dark:text-[#0b0b0c] hover:bg-amber-600 dark:hover:bg-amber-400 flex items-center justify-center shadow-lg transition-all duration-300 z-40 ${
                isVisible
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-3 pointer-events-none"
            }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}