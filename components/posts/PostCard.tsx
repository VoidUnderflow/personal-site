import { Post } from "@/data/posts/posts";
import Link from "next/link";
import { PostTag } from "./PostTag";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article key={post.slug} className="flex gap-4 rounded-xl py-2">
      {/* Date */}
      <div className="pl-2">
        <time className="text-primary text-lg" dateTime={post.date}>
          {post.date}
        </time>
      </div>

      {/* Title + Description + Tags */}
      <div className="flex flex-col gap-2">
        {/* Title */}
        <h2 className="decoration-primary hover:text-primary text-lg font-bold underline decoration-2">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        {/* Description */}
        <p>{post.description}</p>
        {/* Tags */}
        <div className="tags-container">
          {post.tags.map((tag) => (
            <PostTag tag={tag} key={tag} />
          ))}
        </div>
      </div>
    </article>
  );
}
