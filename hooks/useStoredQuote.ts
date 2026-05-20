import { useEffect, useState } from "react";
import { quotes, getRandomQuote, type Quote } from "@/data/quotes/quotes";

const STORAGE_KEY = "footer-quote";
const TTL_MS = 24 * 60 * 60 * 1000;

type StoredEntry = { idx: number; expiresAt: number };

/**
 * Either reads a stored entry and returns the corresponding
 * quote, or returns a random quote directly.
 * @returns
 */
function loadOrPick(): Quote {
  // See if we got a fresh quote in local storage.
  try {
    const raw = localStorage.getItem(STORAGE_KEY);

    if (raw) {
      // Parse stored entry.
      const entry: StoredEntry = JSON.parse(raw);
      const isIdxValid = Number.isInteger(entry.idx) && entry.idx >= 0;
      const isExpiryValid = Number.isFinite(entry.expiresAt);

      if (
        isIdxValid &&
        isExpiryValid &&
        entry.idx < quotes.length &&
        Date.now() < entry.expiresAt
      )
        return quotes[entry.idx];
    }
  } catch {}

  const quote = getRandomQuote();

  // Save the quote in local storage.
  try {
    const entry: StoredEntry = {
      idx: quotes.indexOf(quote),
      expiresAt: Date.now() + TTL_MS,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(entry));
  } catch {}

  return quote;
}

/**
 * Returns a quote that refreshes each day, or nothing if everything
 * went wrong.
 * @returns
 */
export function useStoredQuote(): Quote | null {
  const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setQuote(loadOrPick());
  }, []);

  return quote;
}
