"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibiliy = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        };

        window.addEventListener("scroll", toggleVisibiliy);
        return () => {
            window.removeEventListener("scroll", toggleVisibiliy);
        }
    }, []);

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={ScrollToTop}
            className={`fixed bottom-5 right-5 w-12 h-12 bg-black text-white rounded-full text-xl flex items-center justify-center shadow-lg transition-opacity duration-300
                ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 15l7-7 7 7"
                />
            </svg>

        </button>
    );
}