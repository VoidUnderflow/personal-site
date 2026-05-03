import Link from "next/link";
import { Post } from "@/data/posts/posts";
import { ExternalLink } from "lucide-react";
import { Project } from "@/data/projects/projects";
import ProjectTagBadge from "@/components/projects/ProjectTagBadge";
import { cn } from "@/lib/utils";

type HomeCardProps =
  | { variant: "post"; post: Post }
  | { variant: "project"; project: Project };

export function HomeCard(props: HomeCardProps) {
  const { variant } = props;
  const description =
    variant === "post" ? props.post.description : props.project.description;

  return (
    <article
      className={cn(
        "flex flex-col gap-1",
        variant === "post" ? "h-18" : "h-28",
      )}
    >
      {variant === "post" ? (
        // Post header: title (link) + date
        <div className="flex flex-col items-baseline">
          <Link href={`/posts/${props.post.slug}`} className="font-semibold">
            {props.post.title}
          </Link>
        </div>
      ) : (
        // Project header: project name (link) + link icon
        <Link
          href={props.project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 font-semibold"
        >
          {props.project.title}
          <ExternalLink size={13} className="mt-0.5 shrink-0" />
        </Link>
      )}
      {/* Project/Post description — grows to fill available space, scrolls if too long */}
      <p className="text-muted-foreground min-h-0 flex-1 overflow-y-auto text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {description}
      </p>

      <div className="flex flex-wrap gap-1">
        {variant === "post"
          ? // Post tags
            props.post.tags.map((tag) => (
              <span
                key={tag}
                className="border-foreground rounded-lg border px-2 text-xs"
              >
                {tag}
              </span>
            ))
          : // Project tags.
            props.project.tags.map((tag) => (
              <ProjectTagBadge key={tag} tag={tag} className="h-5 w-5" />
            ))}
      </div>
    </article>
  );
}
