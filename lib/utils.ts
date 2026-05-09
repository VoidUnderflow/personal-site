import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPostDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getBaseImageURL(): string {
  return process.env.NEXT_PUBLIC_BUCKET_URL
    ? `${process.env.NEXT_PUBLIC_BUCKET_URL}`
    : "";
}

export function getImageURL(
  subfolder: "projects" | "hero" | "posts",
  imageName: string,
): string {
  return `${getBaseImageURL()}/images/${subfolder}/${imageName}`;
}
