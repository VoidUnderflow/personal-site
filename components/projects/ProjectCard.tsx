import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects/projects";
import ProjectTagBadge from "./ProjectTagBadge";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative mx-auto flex w-full max-w-sm flex-col justify-end border-none pt-0">
      <div className="relative h-64 w-full">
        <Image
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          style={{ objectFit: "contain" }}
          src={project.image}
          alt={project.title}
          className="rounded-t-xl bg-black"
        />
      </div>
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
