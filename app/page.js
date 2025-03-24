"use client";
import { useEffect, useState } from "react";
import About from "./Components/About";
import FullscreenLoader from "./Components/FullscreenLoader"; // Import the loader
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Work from "./Components/Work";
import ToolsSection from "./Components/tools-section";
import WakaTimeStats from "./Components/WakaTimeStats";
import ClickSpark from "./Components/ClickSpark";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        // Fetch your data here
        // Example: await fetch('/api/data');
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchData();
  }, []);

  return isLoading ? ( // Show loader while loading
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
