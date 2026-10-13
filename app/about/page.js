import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import About from "../components/About";
import ToolsSection from "../components/tools-section";

export const metadata = {
  title: "About | Rafid Dwi Prakoso",
  description: "Background, internships, education, and tech stack of Rafid Dwi Prakoso.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        translationKey="pages.about"
        eyebrow="About Me"
        title="More about my background and experience."
        description="A closer look at what I study, where I've interned, and the tools I use day to day."
        ctaLabel="See my projects"
        ctaHref="/projects"
      />
      <About />
      <ToolsSection />
    </SiteShell>
  );
}
