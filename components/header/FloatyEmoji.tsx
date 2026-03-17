"use client";

import { useEffect, useState } from "react";

interface FloatyEmojiProps {
  emoji: string;
  onComplete: () => void;
  buttonRect: DOMRect;
}

export default function FloatyEmoji({
  emoji,
  onComplete,
  buttonRect,
}: FloatyEmojiProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 50);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 1050);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className="text-foreground pointer-events-none fixed text-xl"
      style={{
        top: `${buttonRect.top}px`,
        left: `${buttonRect.right + 10}px`,
        opacity,
        transition: "opacity 1s ease-out",
      }}
    >
      {emoji}
    </div>
  );
}
