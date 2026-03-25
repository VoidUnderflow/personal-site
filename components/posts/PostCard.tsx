import { Post } from "@/data/posts/posts";
import Link from "next/link";
import { PostTagList } from "./PostTagList";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article key={post.slug} className="flex gap-4 rounded-xl py-2">
      {/* Date */}
      <div className="pl-2">
        <time className="text-lg italic" dateTime={post.date}>
          {post.date}
        </time>
      </div>

      {/* Title + Description + Tags */}
      <div className="flex flex-col gap-2">
        <h2 className="decoration-primary hover:text-primary text-lg font-bold underline decoration-2">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h2>
        <p>{post.description}</p>
        <PostTagList tags={post.tags} />
      </div>
    </article>
  );
}
