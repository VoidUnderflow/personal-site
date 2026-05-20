"use client";

import { useStoredQuote } from "@/hooks/useStoredQuote";

export default function FooterQuote() {
  const quote = useStoredQuote();

  if (quote === null) return null;

  return (
    <p className="text-foreground/40 max-w-sm text-center text-xs italic">
      {quote.parts.map((part, idx) => {
        if ("break" in part) return <br key={idx} />;
        if (part.href) {
          return (
            <a
              key={idx}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
            >
              {part.text}
            </a>
          );
        }
        return <span key={idx}>{part.text}</span>;
      })}
      {quote.author && <span className="not-italic"> - {quote.author}</span>}
    </p>
  );
}
