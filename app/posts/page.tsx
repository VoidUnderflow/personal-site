import { getAllPosts, getActivePostTags } from "@/data/posts/posts";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { PostsClient } from "@/components/posts/PostsClient";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getActivePostTags();

  return (
    <div className="page-vertical-spacing">
      <h1 className="title-heading">Posts</h1>
      <p>
        Random non-AI generated thoughts, both tech and non-tech related. The
        opinions here are my own.
      </p>
      <Separator />
      <PostsClient posts={posts} tags={tags} />
    </div>
  );
}
