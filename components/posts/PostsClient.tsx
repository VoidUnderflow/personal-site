"use client";

import { Post, PostTag } from "@/data/posts/posts";
import { PostTagList } from "./PostTagList";
import { PostCard } from "./PostCard";
import { DoubleSeparator } from "@/components/ui/separator";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

interface PostsClientProps {
  posts: Post[];
  tags: PostTag[];
}

export function PostsClient({ posts, tags }: PostsClientProps) {
  const [activeTags, setActiveTags] = useState<PostTag[]>([]);

  function toggleTag(tag: PostTag) {
    const isActive = activeTags.includes(tag);
    if (isActive) {
      setActiveTags((prev) => prev.filter((t) => t !== tag));
    } else {
      setActiveTags((prev) => [...prev, tag]);
    }
  }

  const filtered = posts.filter((post) =>
    activeTags.every((activeTag) => post.tags.includes(activeTag)),
  );

  return (
    <>
      <section className="flex gap-3">
        <p className="flex items-center">
          Filter posts by tag (click to toggle):{" "}
        </p>
        <PostTagList tags={tags} activeTags={activeTags} onToggle={toggleTag} />
      </section>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTags.join(",")}
          className="flex flex-col gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.length === 0 ? (
            <p className="text-muted-foreground mt-6 text-center italic">
              No posts match the selected tags.
            </p>
          ) : (
            <>
              <DoubleSeparator />
              {filtered.map((post) => (
                <React.Fragment key={post.slug}>
                  <PostCard post={post} />
                  <DoubleSeparator />
                </React.Fragment>
              ))}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
