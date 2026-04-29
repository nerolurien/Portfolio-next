import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

export const metadata = {
  title: "Contact | Rafid Dwi Prakoso",
  description: "Reach out to Rafid Dwi Prakoso for collaboration, freelance work, or project discussion.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about what you want to build."
        description="Whether it is a portfolio refresh, a dashboard idea, or an interactive concept, I’m open to collaborative conversations and new opportunities."
        ctaLabel="Browse projects"
        ctaHref="/projects"
      />
      <Contact />
    </SiteShell>
  );
}
