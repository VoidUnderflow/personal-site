"use client";

import { PostTag } from "@/data/posts/posts";
import clsx from "clsx";

interface PostTagBadgeProps {
  tag: PostTag;
  isActive?: boolean;
  onToggle?: (tag: PostTag) => void;
}

export function PostTagBadge({
  tag,
  isActive = true,
  onToggle,
}: PostTagBadgeProps) {
  return (
    <div
      className={clsx(
        "border-foreground mt-2 rounded-lg border px-2",
        onToggle && "hover:cursor-pointer",
        isActive
          ? "bg-foreground text-background"
          : onToggle && "hover:bg-foreground hover:text-background",
      )}
      onClick={() => {
        if (onToggle !== undefined) onToggle(tag);
      }}
    >
      {tag}
    </div>
  );
}
