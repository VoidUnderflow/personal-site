import PostsList from "@/components/posts/PostsList";
import { getAllPosts, getActivePostTags } from "@/data/posts/posts";
import { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { PostTagList } from "@/components/posts/PostTagList";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getActivePostTags();

  return (
    <div className="page-vertical-spacing">
      <h1 className="title-heading">Posts</h1>
      <Separator />

      <section className="flex gap-3">
        <p className="flex items-center">Filter posts by tag: </p>
        <PostTagList tags={tags} />
      </section>

      <section>
        <PostsList posts={posts} />
      </section>
    </div>
  );
}
