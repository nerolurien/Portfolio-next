import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import Work from "../components/Work";

export const metadata = {
  title: "Projects | Rafid Dwi Prakoso",
  description: "A curated archive of web, dashboard, and interactive projects by Rafid Dwi Prakoso.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        translationKey="pages.projects"
        eyebrow="Project Archive"
        title="A closer look at the things I have been building."
        description="This page collects my featured work in one place so each project has a little more room to breathe, explain itself, and show the decisions behind it."
        ctaLabel="Say hello"
        ctaHref="/contact"
      />
      <Work />
    </SiteShell>
  );
}
