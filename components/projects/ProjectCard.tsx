import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects/projects";
import ProjectTagBadge from "./ProjectTagBadge";
import { Card, CardDescription, CardTitle } from "../ui/card";
import LazyImage from "../common/LazyImage";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="relative mx-auto flex w-full max-w-sm flex-col justify-between border-none pt-0">
      {/* Top div: image + title + description */}
      <div>
        <LazyImage
          src={project.image}
          alt={project.title}
          width={384}
          height={256}
          className="rounded-t-xl"
        />
        <div className="mt-6 flex flex-col gap-2 px-6">
          <CardTitle>
            <Link
              className="underline"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title}
              <ExternalLink
                size={16}
                className="ml-1.5 inline-block -translate-y-px align-middle"
              />
            </Link>
          </CardTitle>
          <CardDescription className="h-auto overflow-visible">
            {project.description}
          </CardDescription>
        </div>
      </div>

      {/* Bottom div: tags always pinned here */}
      <div className="flex gap-2 px-6">
        {project.tags.map((tag) => (
          <ProjectTagBadge key={tag} tag={tag} />
        ))}
      </div>
    </Card>
  );
}
