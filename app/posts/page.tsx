import PostsList from "@/components/posts/PostsList";
import { getAllPosts, getActivePostTags } from "@/data/posts/posts";
import { Metadata } from "next";
import { PostTag } from "@/components/posts/PostTag";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getActivePostTags();

  return (
    <div className="page-vertical-spacing">
      <h1 className="title-heading">Posts</h1>

      <section className="flex gap-3">
        <p className="flex items-center">Filter posts by tag: </p>
        <div className="tags-container">
          {tags.map((tag) => (
            <PostTag key={tag} tag={tag} />
          ))}
        </div>
      </section>

      <Separator />

      <section>
        <PostsList posts={posts} />
      </section>
    </div>
  );
}
