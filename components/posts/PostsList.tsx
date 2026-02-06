import { Post } from "@/data/posts/posts";
import { PostCard } from "./PostCard";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div className="">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
