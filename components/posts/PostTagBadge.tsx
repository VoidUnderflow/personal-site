import Link from "next/link";

interface PostTagBadgeProps {
  tag: string;
}

export function PostTagBadge({ tag }: PostTagBadgeProps) {
  return (
    <div className="border-foreground hover:bg-foreground hover:text-background mt-2 rounded-lg border px-2">
      <Link href={`/posts/tag/${tag}`}>{tag}</Link>
    </div>
  );
}
