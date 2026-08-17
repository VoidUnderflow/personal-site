"use client";

import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn, getImageURL } from "@/lib/utils";

interface PostImageProps {
  imageName: string;
  alt: string;
  caption?: string;
  className?: string;
}

export default function PostImage({
  imageName,
  alt,
  caption,
  className,
}: PostImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Ref to help check if the image is cached.
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Set loaded to true if image was cached.
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <figure className="my-6">
      <div className="relative">
        {!loaded && <Skeleton className="absolute inset-0 h-full w-full" />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={getImageURL("posts", imageName)}
          ref={imgRef}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={cn(
            "w-full rounded-md transition-opacity duration-200",
            loaded ? "opacity-100" : "opacity-0",
            className,
          )}
        />
      </div>
      {caption && (
        <figcaption className="text-muted-foreground mt-2 text-center text-sm italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
