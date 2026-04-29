"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import FullscreenLoader from "./components/FullscreenLoader";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Work from "./components/Work";
import ToolsSection from "./components/tools-section";
import WakaTimeStats from "./components/WakaTimeStats";
import ClickSpark from "./components/ClickSpark";
import SiteShell from "./components/SiteShell";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <FullscreenLoader />
  ) : (
    <ClickSpark
      sparkColor="#fff"
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
          title="Featured case studies"
          description="A quick look at the projects that best represent how I design interfaces, structure product flows, and build interactive experiences."
        />
        <section className="mx-auto w-full max-w-7xl px-6 py-4 sm:px-10 lg:px-16">
          <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <WakaTimeStats />
          </div>
        </section>
        <Contact />
      </SiteShell>
    </ClickSpark>
  );
}
