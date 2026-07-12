import Link from "next/link";
import { Post } from "@/data/posts/posts";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects/projects";
import ProjectTagBadge from "@/components/projects/ProjectTagBadge";
import { Card } from "@/components/ui/card";

type HomeCardProps =
  { variant: "post"; post: Post } | { variant: "project"; project: Project };

export function HomeCard(props: HomeCardProps) {
  const { variant } = props;
  const description =
    variant === "post" ? props.post.description : props.project.description;

  return (
    <Card className="flex flex-col gap-3 p-4">
      <div className="flex flex-1 flex-col gap-2">
        {variant === "post" ? (
          <Link href={`/posts/${props.post.slug}`} className="font-semibold">
            {props.post.title}
          </Link>
        ) : (
          <Link
            href={props.project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold"
          >
            {props.project.title}
            <ExternalLink
              size={13}
              className="ml-1 inline-block shrink-0 -translate-y-px align-middle"
            />
          </Link>
        )}
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap gap-1">
        {variant === "post"
          ? props.post.tags.map((tag) => (
              <span
                key={tag}
                className="border-foreground rounded-lg border px-2 text-xs"
              >
                {tag}
              </span>
            ))
          : props.project.tags.map((tag) => (
              <ProjectTagBadge key={tag} tag={tag} className="h-5 w-5" />
            ))}
      </div>
    </Card>
  );
}
