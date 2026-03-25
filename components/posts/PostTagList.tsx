import { PostTag } from "@/data/posts/posts";
import { PostTagBadge } from "./PostTagBadge";

interface PostTagListProps {
  tags: PostTag[];
  activeTags?: PostTag[];
  onToggle?: (tag: PostTag) => void;
}

export function PostTagList({ tags, activeTags, onToggle }: PostTagListProps) {
  return (
    <div className="tags-container">
      {tags.map((tag) => (
        <PostTagBadge
          key={tag}
          tag={tag}
          isActive={activeTags?.includes(tag)}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}
