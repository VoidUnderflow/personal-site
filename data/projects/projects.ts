import { getImageURL } from "@/lib/utils";
import { ProjectTagId } from "./tags";

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  tags: ProjectTagId[];
  image: string;
}

const projects: Project[] = [
  {
    id: "personal-website",
    title: "voidunderflow.com",
    description:
      "This website. Made with Next.js and hosted on Vercel. Uses Giscus for discussions and MDX for displaying posts.",
    githubUrl: "https://github.com/VoidUnderflow/personal-site",
    tags: ["NextJS", "TailwindCSS", "TypeScript", "MDX"],
    image: getImageURL("projects","voidunderflow.png"),
  },
  {
    id: "learning-react-and-next",
    title: "React and NextJS practice",
    description:
      "Learning React through small projects and courses. Still adding things here.",
    githubUrl: "https://github.com/VoidUnderflow/learning-react-and-next",
    tags: [
      "NextJS",
      "React",
      "TailwindCSS",
      "TypeScript",
      "Docker",
      "Postgres",
    ],
    image: getImageURL("projects","react-and-next-practice.png"),
  },
  {
    id: "electron-progress-tracker",
    title: "Electron Progress Tracker",
    description:
      "Desktop app for tracking goals through progress bars. Has Dropbox cloud back-ups, customisable sounds and themes, and notes.",
    githubUrl: "https://github.com/VoidUnderflow/electron-progress-tracker",
    tags: ["React", "TailwindCSS", "TypeScript"],
    image: getImageURL("projects","electron-progress-tracker.png"),
  },

  {
    id: "strawberry-job-board-api",
    title: "Strawberry GraphQL job board API",
    description:
      "A practice GraphQL API using Strawberry, FastAPI, and SQLAlchemy. Has JWT-based auth, roles, and >90% test coverage.",
    githubUrl: "https://github.com/VoidUnderflow/strawberry-job-board-api",
    tags: ["FastAPI", "GraphQL", "Postgres", "Docker", "Python", "PyTest"],
    image: getImageURL("projects","strawberry-api.png"),
  },
  {
    id: "algorithms-and-data-structures",
    title: "Algorithms and Data Structures",
    description:
      "Algo practice in Python and TypeScript - LeetCode problems, Advent of Code, and some theory.",
    githubUrl:
      "https://github.com/VoidUnderflow/algorithms-and-data-structures",
    tags: ["Python", "TypeScript"],
    image: getImageURL("projects","dsa.png"),
  },
  {
    id: "miscellaneous-projects",
    title: "Miscellaneous Projects",
    description:
      "Various tutorials, university projects, and experiments with different languages and tools.",
    githubUrl: "https://github.com/VoidUnderflow/miscellaneous-projects",
    tags: ["Python", "Java", "Rust", "Haskell"],
    image: getImageURL("projects","misc-fractal.png"),
  },
  {
    id: "ml-practice",
    title: "ML Practice",
    description:
      "Machine Learning tutorials, experiments, and university coursework.",
    githubUrl: "https://github.com/VoidUnderflow/ml-practice",
    tags: ["Python", "PyTorch"],
    image: getImageURL("projects","ml-practice.png"),
  },
  {
    id: "frontend-fundamentals",
    title: "Frontend Fundamentals",
    description:
      "Refreshing CSS knowledge and learning JS with exercises from The Odin Project, MDN, and others.",
    githubUrl: "https://github.com/VoidUnderflow/frontend-fundamentals",
    tags: ["JavaScript"],
    image: getImageURL("projects","frontend-fundamentals.png"),
  },
  {
    id: "drf-recipes",
    title: "Django Rest Framework - Recipes API",
    description:
      "Practice API with a focus on testing (built with TDD - 99% coverage). Has CI with GitHub Actions, JWT auth.",
    githubUrl: "https://github.com/VoidUnderflow/drf-recipes-practice-api",
    tags: ["Django", "Docker", "Postgres"],
    image: getImageURL("projects","drf-recipes.png"),
  },
  {
    id: "tailwind-practice",
    title: "Tailwind Practice",
    description: "Learning Tailwind basics through FrontendMentor challenges.",
    githubUrl: "https://github.com/VoidUnderflow/tailwind-practice",
    tags: ["TailwindCSS", "JavaScript"],
    image: getImageURL("projects","tailwind-practice.png"),
  },
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByTag(tag: ProjectTagId): Project[] {
  return projects.filter((p) => p.tags.includes(tag));
}

/** Return all project tags sorted by decreasing frequency. */
export function getAllProjectTags(): ProjectTagId[] {
  const tagCount = new Map<ProjectTagId, number>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => {
      tagCount.set(tag, (tagCount.get(tag) ?? 0) + 1);
    });
  });

  return Array.from(tagCount.keys()).sort(
    (a, b) => tagCount.get(b)! - tagCount.get(a)!,
  );
}
