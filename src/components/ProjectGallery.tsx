import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGallery() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
}

