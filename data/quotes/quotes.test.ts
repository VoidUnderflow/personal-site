import { describe, test, expect } from "vitest";
import { quotes, getRandomQuote } from "./quotes";

describe("quotes data", () => {
  test("every quote has a positive integer weight", () => {
    for (const quote of quotes) {
      expect(Number.isInteger(quote.weight), `weight must be an integer`).toBe(
        true,
      );
      expect(quote.weight > 0, `weight must be positive`).toBe(true);
    }
  });
});

describe("getRandomQuote", () => {
  test("returns a quote from the quotes array", () => {
    expect(quotes).toContain(getRandomQuote());
  });
});
