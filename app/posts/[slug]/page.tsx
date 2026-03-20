import Comments from "@/components/posts/Comments";
import { getPostBySlug, getAllPosts } from "@/data/posts/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PostTagList } from "@/components/posts/PostTagList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/data/posts/${slug}/index.mdx`);
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article className="flex flex-col gap-4 pb-2">
      <header className="flex flex-col gap-1">
        <h1 className="title-heading">{post.title}</h1>
        <time className="text-muted-foreground italic" dateTime={post.date}>
          {post.date}
        </time>
        <p>{post.description}</p>
        <PostTagList tags={post.tags} />
      </header>

      <div className="prose prose-lg max-w-none">
        <Post />
      </div>
      <Comments />
    </article>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
