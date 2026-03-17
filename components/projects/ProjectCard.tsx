import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects/projects";
import ProjectTagBadge from "./ProjectTagBadge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // return (
  //   <article>
  //     <Image src={project.image} alt={project.title} width={400} height={300} />
  //     <h3>{project.title}</h3>
  //     <p>{project.description}</p>
  //     <div>
  //       {project.tags.map((tag) => (
  //         <ProjectTagBadge key={tag} tag={tag} />
  //       ))}
  //     </div>
  //     <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
  //       Lorem Ipsum
  //     </Link>
  //   </article>
  // );
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <Image src={project.image} alt={project.title} width={400} height={300} />
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
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <ProjectTagBadge key={tag} tag={tag} />
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
