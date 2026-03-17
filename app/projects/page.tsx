import { ProjectClient } from "@/components/projects/ProjectClient";
import { Separator } from "@/components/ui/separator";
import {
  getAllProjects,
  getAllProjectTags,
  Project,
} from "@/data/projects/projects";
import { ProjectTagId } from "@/data/projects/tags";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const projects: Project[] = getAllProjects();
  const tags: ProjectTagId[] = getAllProjectTags();

  return (
    <div className="page-vertical-spacing">
      <h1 className="title-heading">Projects</h1>
      <p>
        A collection of hobby projects I worked on - the main focus was to learn
        new tools, languages, and have fun doing it. Unsure if there&apos;s
        anything truly useful in here.
      </p>

      <Separator />

      <ProjectClient projects={projects} tags={tags} />
    </div>
  );
}
