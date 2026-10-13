import SiteShell from "../components/SiteShell";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";

export const metadata = {
  title: "Contact | Rafid Dwi Prakoso",
  description: "Get in touch with Rafid Dwi Prakoso for freelance work, internships, or developer roles.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        translationKey="pages.contact"
        eyebrow="Contact"
        title="Let's work together."
        description="Open for freelance projects, internships, and full-stack or backend developer roles."
        ctaLabel="See my projects"
        ctaHref="/projects"
      />
      <Contact />
    </SiteShell>
  );
}
