import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects/projects";
import ProjectTagBadge from "./ProjectTagBadge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import LazyImage from "../common/LazyImage";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative mx-auto flex w-full max-w-sm flex-col justify-end border-none pt-0">
      <LazyImage
        src={project.image}
        alt={project.title}
        width={384}
        height={256}
        className="rounded-t-xl"
      />
      <CardHeader>
        <CardTitle>
          <Link
            className="flex gap-2 underline"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <ExternalLink size={16} className="mt-0.5" />
          </Link>
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex gap-2 py-1">
          {project.tags.map((tag) => (
            <ProjectTagBadge key={tag} tag={tag} />
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
