import { PostTag } from "@/data/posts/posts";
import { PostTagBadge } from "./PostTagBadge";

interface PostTagListProps {
  tags: PostTag[];
}

export function PostTagList({ tags }: PostTagListProps) {
  return (
    <div className="tags-container">
      {tags.map((tag) => (
        <PostTagBadge key={tag} tag={tag} />
      ))}
    </div>
  );
}
