import Link from "next/link";

interface PostTagProps {
  tag: string;
}

export function PostTag({ tag }: PostTagProps) {
  return (
    <div className="border-foreground hover:bg-foreground hover:text-background mt-2 rounded-lg border px-2">
      <Link href={`/posts/tag/${tag}`}>{tag}</Link>
    </div>
  );
}
