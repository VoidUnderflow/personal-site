import { Post } from "@/data/posts/posts";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article key={post.slug} className="">
      <h2>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p>{post.description}</p>
      <time dateTime={post.date}>{post.date}</time>
      <div>
        {post.tags.map((tag) => (
          <Link key={tag} href={`/posts/tag/${tag}`}>
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
}
