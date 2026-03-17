"use client";

import { Project } from "@/data/projects/projects";
import { ProjectTagId } from "@/data/projects/tags";
import ProjectTagBadge from "./ProjectTagBadge";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";

interface ProjectClientProps {
  projects: Project[];
  tags: ProjectTagId[];
}

export function ProjectClient({ projects, tags }: ProjectClientProps) {
  const [activeTags, setActiveTags] = useState<ProjectTagId[]>([]);

  function toggleTag(tag: ProjectTagId, isActive: boolean) {
    if (isActive) {
      setActiveTags((activeTags) => activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags((activeTags) => [...activeTags, tag]);
    }
  }

  return (
    <>
      {" "}
      <section className="flex flex-col gap-2">
        <h2>Filter by tag (click to toggle): </h2>
        <div className="flex gap-2">
          {tags.map((tag) => {
            const isActive = activeTags.includes(tag);

            return (
              <button
                key={tag}
                className="flex flex-col items-center gap-0.5 hover:cursor-pointer"
                onClick={() => toggleTag(tag, isActive)}
              >
                <ProjectTagBadge tag={tag} />
                <span
                  className={clsx(
                    "bg-tertiary mt-0.5 h-0.5 w-1/2 rounded-full transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            );
          })}
        </div>
      </section>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTags.join(",")}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {projects
            .filter((project) =>
              activeTags.every((tag) => project.tags.includes(tag)),
            )
            .map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
