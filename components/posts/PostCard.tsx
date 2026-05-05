import { Post } from "@/data/posts/posts";
import Link from "next/link";
import { PostTagList } from "./PostTagList";
import { formatPostDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="flex flex-col gap-1">
      <h2 className="hover:text-primary text-lg font-bold underline decoration-2">
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="text-sm">{post.description}</p>
      <time
        className="text-muted-foreground text-sm italic"
        dateTime={post.date}
      >
        {formatPostDate(post.date)}
      </time>
      <PostTagList tags={post.tags} />
    </article>
  );
}
