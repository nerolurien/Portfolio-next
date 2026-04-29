import { assets } from "@/assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const [stars, setStars] = useState([]);
    const [clouds, setClouds] = useState([]);
    const pathname = usePathname();
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        setStars(
            [...Array(6)].map(() => ({
                top: Math.random() * 100,
                left: Math.random() * 100,
            }))
        );
        setClouds(
            [...Array(3)].map((_, i) => ({
                width: 10 + Math.random() * 20,
                top: 2 + Math.random() * 6,
                left: 10 + i * 20 + Math.random() * 10,
            }))
        );
    }, []);

    const openMenu = () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)";
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => {
        sideMenuRef.current.style.transform = "translateX(16rem)";
    };

    return (
        <>
            <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
                <Image src={assets.header_bg_color} alt="" className="w-full" />
            </div>

            <nav
                className={`w-full fixed px-5 lg:px-0 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll
                    ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
                    : ""
                    }`}
            >
                <Link href="/" aria-label="Back to top">
                    <Image
                        src={isDarkMode ? assets.logo_dark : assets.logo}
                        alt="Website Logo"
                        className="w-28 cursor-pointer mr-14"
                    />
                </Link>

                <ul
                    className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll
                        ? ""
                        : "bg-white shadow-sm bg-opacity-50 dark border dark:border-white/50 dark:bg-transparent"
                        }`}
                >
                    {navItems.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <li key={item.href}>
                                <Link
                                    className={`font-ovo transition ${active ? "text-lime-600 dark:text-lime-300" : ""}`}
                                    href={item.href}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-4">
                    <motion.button
                        onClick={() => setIsDarkMode((prev) => !prev)}
                        className={`relative flex items-center justify-start w-20 h-10 rounded-full p-1 transition-all duration-500 shadow-lg ${isDarkMode
                                ? "bg-gradient-to-r from-indigo-900 to-purple-900 border border-indigo-700"
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
                                            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 5 }}
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
                                            style={{ width: cloud.width, top: cloud.top, left: cloud.left }}
                                            animate={{ x: [0, 5, 0], opacity: [0.4, 0.6, 0.4] }}
                                            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }}
                                        />
                                    ))}
                                </motion.div>
                            )}
                        </div>

                        <motion.div
                            className={`absolute z-10 w-8 h-8 rounded-full flex items-center justify-center ${isDarkMode ? "bg-gradient-to-br from-indigo-500 to-purple-600" : "bg-gradient-to-br from-yellow-300 to-amber-500"
                                }`}
                            animate={{
                                x: isDarkMode ? 40 : 0,
                                boxShadow: isDarkMode ? "0 0 15px 2px rgba(139, 92, 246, 0.7)" : "0 0 15px 2px rgba(251, 191, 36, 0.7)",
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

                    <Link
                        href="/contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo dark:border-white/50"
                    >
                        Contact
                        <Image
                            src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                            alt=""
                            className="w-3 cursor-pointer"
                        />
                    </Link>
                    <button className="block md:hidden ml-3" onClick={openMenu} aria-label="open menu">
                        <Image
                            src={isDarkMode ? assets.menu_white : assets.menu_black}
                            alt=""
                            className="w-6"
                        />
                    </button>
                </div>

                {/* MOBILE MENU */}
                <ul
                    ref={sideMenuRef}
                    className="flex md:hidden flex-col gap-4 px-10 py-20 fixed
            -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-darkhover transition duration-500 dark:text-white"
                >
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={isDarkMode ? assets.close_white : assets.close_black}
                            alt=""
                            className="w-5 cursor-pointer"
                        />
                    </div>

                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link className="font-ovo" onClick={closeMenu} href={item.href}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
