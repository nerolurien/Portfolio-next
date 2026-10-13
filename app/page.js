"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import About from "./components/About";
import FullscreenLoader from "./components/FullscreenLoader";
import ClickSpark from "./components/ClickSpark";
import SiteShell from "./components/SiteShell";

const ToolsSection = dynamic(() => import("./components/tools-section"));
const Work = dynamic(() => import("./components/Work"));
const CreativeLab = dynamic(() => import("./components/CreativeLab"));
const Contact = dynamic(() => import("./components/Contact"));

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <FullscreenLoader
            key="preloader"
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      <ClickSpark
        sparkColor="#f59e0b"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      <SiteShell>
        <Header />
        <About />
        <ToolsSection />
        <Work
          maxItems={6}
          showViewAll
        />
        <CreativeLab />
        <Contact />
      </SiteShell>
      </ClickSpark>
    </>
  );
}
