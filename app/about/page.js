import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import About from "../components/About";
import ToolsSection from "../components/tools-section";
import WakaTimeStats from "../components/WakaTimeStats";

export const metadata = {
  title: "About | Rafid Dwi Prakoso",
  description: "Background, focus, tools, and current development journey of Rafid Dwi Prakoso.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        translationKey="pages.about"
        eyebrow="About"
        title="A builder who likes clean interfaces and lively interactions."
        description="I am currently learning, shipping, and refining my taste through real projects. This page gives more context about how I work, what I focus on, and the tools I keep growing with."
        ctaLabel="See projects"
        ctaHref="/projects"
      />
      <About />
      <ToolsSection />
      <section className="mx-auto w-full max-w-7xl px-6 py-4 sm:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
          <WakaTimeStats />
        </div>
      </section>
    </SiteShell>
  );
}
