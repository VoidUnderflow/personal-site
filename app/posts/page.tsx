import PostsList from "@/components/posts/PostsList";
import { getAllPosts, getActivePostTags } from "@/data/posts/posts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getActivePostTags();

  return (
    <div>
      <h1>Lorem Ipsum Dolor</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <section>
        <h2>Consectetur Adipiscing</h2>
        <div>
          {tags.map((tag) => (
            <Link key={tag} href={`/posts/tag/${tag}`}>
              {tag}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Sed Do Eiusmod</h2>
        <PostsList posts={posts} />
      </section>
    </div>
  );
}
