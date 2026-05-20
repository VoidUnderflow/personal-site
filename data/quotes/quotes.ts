export type QuotePart = { text: string; href?: string } | { break: true };
export type Quote = { parts: QuotePart[]; author?: string; weight: number };

export const quotes: Quote[] = [
  {
    parts: [{ text: "Rolled a 1 on your quote" }],
    weight: 1,
  },
  {
    parts: [{ text: `${new Date().getFullYear()}/5000` }],
    weight: 1,
  },
];

export function getRandomQuote(): Quote {
  const totalWeight = quotes.reduce((sum, quote) => sum + quote.weight, 0);

  let random = Math.random() * totalWeight;
  for (const quote of quotes) {
    random -= quote.weight;
    if (random < 0) return quote;
  }

  return quotes[quotes.length - 1];
}
