import { getPostBySlug, getAllPosts } from "@/data/posts/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PostTagList } from "@/components/posts/PostTagList";
import Link from "next/link";
import { ScrollProgressBar } from "@/components/header/ScrollProgressBar";
import { Separator } from "@/components/ui/separator";
import { formatPostDate } from "@/lib/utils";

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
    <article className="page-vertical-spacing">
      <ScrollProgressBar />
      <header className="flex flex-col gap-3">
        <h1 className="title-heading">{post.title}</h1>
        <time className="text-muted-foreground italic" dateTime={post.date}>
          {formatPostDate(post.date)}
        </time>
        <p>{post.description}</p>
        <PostTagList tags={post.tags} />
      </header>

      <Separator />

      <div className="prose prose-lg mx-auto max-w-prose">
        <Post />
      </div>
      {/* TODO: Modify this when you create a discussion with GitHub Actions. */}
      <p className="text-muted-foreground text-sm">
        Want to discuss this post? Head over to{" "}
        <Link
          href="https://github.com/VoidUnderflow/personal-site/discussions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          GitHub Discussions
        </Link>
        .
      </p>
    </article>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
