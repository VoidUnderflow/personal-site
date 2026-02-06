import Link from "next/link";

interface PostTagProps {
  tag: string;
}

export function PostTag({ tag }: PostTagProps) {
  return (
    <div
      className="border border-foreground hover:bg-foreground
        hover:text-background rounded-lg px-2 mt-2"
    >
      <Link href={`/posts/tag/${tag}`}>{tag}</Link>
    </div>
  );
}
