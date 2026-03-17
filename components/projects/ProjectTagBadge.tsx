"use client";

import { Icon } from "@iconify/react";
import { PROJECT_TAGS, type ProjectTagId } from "@/data/projects/tags";

export default function ProjectTagBadge({
  tag,
  className = "w-6 h-6 md:w-8 md:h-8",
}: {
  tag: ProjectTagId;
  className?: string;
}) {
  return (
    <span title={tag}>
      <Icon icon={PROJECT_TAGS[tag]} className={className} />
    </span>
  );
}
