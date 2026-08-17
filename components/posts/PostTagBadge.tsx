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
    // oxlint-disable-next-line jsx-a11y/no-static-element-interactions jsx-a11y/click-events-have-key-events
    <div
      className={clsx(
        "border-foreground rounded-lg border px-1.5 py-0.5 text-xs",
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
