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
      <header className="flex flex-col gap-4">
        <h1 className="title-heading">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p>{post.description}</p>
          <p>–</p>
          <time className="text-muted-foreground italic" dateTime={post.date}>
            {formatPostDate(post.date)}
          </time>
          <PostTagList tags={post.tags} />
        </div>
        <Separator className="mx-auto mb-16 w-full" />
      </header>

      <div className="prose mx-auto w-full max-w-2xl">
        <Post />
      </div>

      <p className="text-muted-foreground mt-8 text-center text-sm">
        If you want to share your thoughts or say hi, please create a discussion{" "}
        <Link
          href="https://github.com/VoidUnderflow/personal-site/discussions"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          here
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
