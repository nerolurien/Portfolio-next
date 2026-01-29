"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import FullscreenLoader from "./components/FullscreenLoader";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import ToolsSection from "./components/tools-section";
import WakaTimeStats from "./components/WakaTimeStats";
import ClickSpark from "./components/ClickSpark";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Logic Dark Mode (Tetap sama)
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  }, [isDarkMode]);

  // PERBAIKAN DI SINI:
  useEffect(() => {
    const fakeLoading = async () => {
      // Kita set loading true di awal (meskipun default state sudah true)
      setIsLoading(true);

      // Gunakan setTimeout untuk menahan layar loading selama 2 detik (2000ms)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 

      // Bersihkan timer jika komponen di-unmount agar tidak memory leak
      return () => clearTimeout(timer);
    };

    fakeLoading();
  }, []);

  return isLoading ? ( 
    <FullscreenLoader />
  ) : (
    <>
      <ClickSpark
        isDarkMode={isDarkMode}
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <ToolsSection isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <WakaTimeStats isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </ClickSpark>
    </>
  );
}