import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import About from "../components/About";
import ToolsSection from "../components/tools-section";

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
    </SiteShell>
  );
}
