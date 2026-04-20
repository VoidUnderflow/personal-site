import Comments from "@/components/posts/Comments";
import { getPostBySlug, getAllPosts } from "@/data/posts/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PostTagList } from "@/components/posts/PostTagList";
import Link from "next/link";
import { ScrollProgressBar } from "@/components/header/ScrollProgressBar";
import { Separator } from "@/components/ui/separator";

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
      <header className="flex flex-col gap-1">
        <h1 className="title-heading">{post.title}</h1>
        <time className="text-muted-foreground italic" dateTime={post.date}>
          {post.date}
        </time>
        <p>{post.description}</p>
        <PostTagList tags={post.tags} />
      </header>

      <Separator />

      <div className="prose prose-lg max-w-none px-16">
        <Post />
      </div>
      <div className="mx-1">
        <Comments />
        <p className="text-muted-foreground mt-2 text-sm">
          Note: if you don&apos;t want to give any permissions to{" "}
          <Link
            href="https://giscus.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Giscus
          </Link>
          , you can instead create a &quot;General&quot; discussion{" "}
          <Link
            href="https://github.com/VoidUnderflow/personal-site/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            here
          </Link>{" "}
          with the title &quot;posts/{slug}&quot; and comment there instead :D
          (although, it should be{" "}
          <Link
            href="https://github.com/orgs/giscus/discussions/950"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            safe
          </Link>
          )
        </p>
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
