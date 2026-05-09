"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

interface LazyImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}

export default function LazyImage({
  src,
  width,
  height,
  alt,
  className,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [bgNotLoadedColor] = useState(
    () =>
      ["bg-primary/50", "bg-secondary/50", "bg-neutral/50"][
        Math.floor(Math.random() * 3)
      ],
  );

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: `${width}/${height}` }}
    >
      {!loaded && (
        <div
          className={cn(
            "text-foreground absolute inset-0 flex items-center justify-center",
            bgNotLoadedColor,
          )}
        >
          <Spinner />
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-200",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
    </div>
  );
}
