"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import dynamic from "next/dynamic";
import CommandPalette from "./CommandPalette";
import TerminalDrawer from "./TerminalDrawer";

const Footer = dynamic(() => import("./Footer"));

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
