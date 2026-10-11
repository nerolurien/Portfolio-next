import { notFound } from "next/navigation";
import { workData } from "@/assets/assets";
import SiteShell from "../../components/SiteShell";
import ProjectDetailView from "./ProjectDetailView";

export function generateStaticParams() {
  return workData.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = workData.find((item) => item.id === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Rafid Dwi Prakoso`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = workData.find((item) => item.id === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = workData
    .filter((item) => item.id !== project.id)
    .filter((item) => item.category === project.category)
    .slice(0, 3);

  return (
    <SiteShell>
      <ProjectDetailView project={project} relatedProjects={relatedProjects} />
    </SiteShell>
  );
}
