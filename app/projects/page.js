import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import Work from "../components/Work";

export const metadata = {
  title: "Projects | Rafid Dwi Prakoso",
  description: "Web apps, internal dashboards, and game prototypes built by Rafid Dwi Prakoso.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        translationKey="pages.projects"
        eyebrow="Projects (2024 - 2026)"
        title="Things I've built."
        description="Web apps, school projects, internal tools, and game prototypes I've worked on."
        ctaLabel="Contact me"
        ctaHref="/contact"
      />
      <Work />
    </SiteShell>
  );
}
