"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  dotted = false,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root> & {
  dotted?: boolean;
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        dotted
          ? orientation === "horizontal"
            ? "border-foreground h-px w-full border-t border-dashed bg-transparent"
            : "border-foreground h-full w-px border-l border-dashed bg-transparent"
          : [
              "bg-foreground",
              orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
            ],
        className,
      )}
      {...props}
    />
  );
}

export { Separator };
