import { StaticImageData } from "next/image";
import placeholderImage from "./placeholder.jpg";
import { ProjectTagId } from "./tags";

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  tags: ProjectTagId[];
  image: StaticImageData;
}

const projects: Project[] = [
  {
    id: "neural-viz",
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Let's push this to the limit. A really really really really really really really really really really really really  long description.",
    githubUrl: "https://example.com",
    tags: ["Python", "TensorFlow", "React"],
    image: placeholderImage,
  },
  {
    id: "task-queue",
    title: "Consectetur Adipiscing",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    githubUrl: "https://example.com",
    tags: ["Go", "Redis", "Docker", "Kubernetes"],
    image: placeholderImage,
  },
  {
    id: "md-blog",
    title: "Sed Do Eiusmod",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    githubUrl: "https://example.com",
    tags: ["TypeScript", "NextJS", "MDX", "TailwindCSS"],
    image: placeholderImage,
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByTag(tag: ProjectTagId): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}

export function getAllProjectTags(): ProjectTagId[] {
  const tagSet = new Set<ProjectTagId>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
