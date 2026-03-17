import ProjectCard from "@/components/projects/ProjectCard";
import ProjectTagBadge from "@/components/projects/ProjectTagBadge";
import { Separator } from "@/components/ui/separator";
import { getAllProjects, getAllProjectTags } from "@/data/projects/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const tags = getAllProjectTags();

  return (
    <div className="page-vertical-spacing">
      <h1 className="title-heading">Projects</h1>
      <p>
        A collection of hobby projects I worked on - the main focus was to learn
        new tools, languages, and have fun doing it. Unsure if there&apos;s
        anything truly useful in here.
      </p>

      <section className="flex flex-col gap-2">
        <h2>Filter by tag: </h2>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <button key={tag}>
              <ProjectTagBadge tag={tag} />
            </button>
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <h2>Sed Do Eiusmod</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
