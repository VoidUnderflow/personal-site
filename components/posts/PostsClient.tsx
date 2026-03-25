"use client";

import { Post, PostTag } from "@/data/posts/posts";
import { PostTagList } from "./PostTagList";
import { PostCard } from "./PostCard";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface PostsClientProps {
  posts: Post[];
  tags: PostTag[];
}

export function PostsClient({ posts, tags }: PostsClientProps) {
  const [activeTags, setActiveTags] = useState<PostTag[]>([]);

  function toggleTag(tag: PostTag) {
    const isActive = activeTags.includes(tag);

    if (isActive) {
      setActiveTags((activeTags) => activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags((activeTags) => [...activeTags, tag]);
    }
  }

  return (
    <>
      {" "}
      <section className="flex gap-3">
        <p className="flex items-center">
          Filter posts by tag (click to toggle):{" "}
        </p>
        <PostTagList tags={tags} activeTags={activeTags} onToggle={toggleTag} />
      </section>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTags.join(",")}
          className="flex flex-col gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {posts
            .filter((post) =>
              activeTags.every((activeTag) => post.tags.includes(activeTag)),
            )
            .map((post, index, filtered) => (
              <React.Fragment key={post.slug}>
                <PostCard post={post} />
                {index < filtered.length - 1 && <Separator dotted />}
              </React.Fragment>
            ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
