"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("./Footer"));
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });
const TerminalDrawer = dynamic(() => import("./TerminalDrawer"), { ssr: false });

export default function SiteShell({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (localStorage.theme === "light") {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main>{children}</main>
      <Footer isDarkMode={isDarkMode} />
      <CommandPalette isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <TerminalDrawer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </>
  );
}
