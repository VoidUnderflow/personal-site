export type QuotePart = { text: string; href?: string } | { break: true };
export type Quote = { parts: QuotePart[]; author?: string; weight: number };

export const quotes: Quote[] = [
  {
    parts: [{ text: "Rolled a 1 on your quote" }],
    weight: 1,
  },
  {
    parts: [{ text: `${new Date().getFullYear()}/5000` }],
    weight: 2,
  },
  {
    parts: [{ text: "Good things come to those who float :)" }],
    weight: 2,
  },
  {
    parts: [{ text: "All is well." }],
    weight: 2,
  },
  {
    parts: [{ text: "Tenjō tenge yuiga dokuson" }],
    weight: 2,
  },
  {
    parts: [{ text: "戦え! 戦え! 戦え!" }],
    weight: 2,
  },
  {
    parts: [{ text: "Wind's howling..." }],
    weight: 2,
  },
  {
    parts: [
      {
        text: "Silver for monsters...",
        href: "https://www.youtube.com/watch?v=jRG0gyVFP60",
      },
    ],
    weight: 1,
  },
  {
    parts: [
      {
        text: "Caed'mill, bloedhe dh'oine, hocus pocus, abracadabra, arse blathana...",
      },
    ],
    weight: 1,
  },
  {
    parts: [{ text: "Chaos from silence." }],
    weight: 2,
  },
  {
    parts: [{ text: "俺は進み続ける。" }],
    weight: 2,
  },
  {
    parts: [{ text: "Fear is the mind-killer" }],
    weight: 2,
  },
  {
    parts: [{ text: "Sunrise, Parabellum" }],
    weight: 2,
  },
  {
    parts: [
      {
        text: "The cold atmosphere of a new land... it fills you with determination.",
      },
    ],
    weight: 2,
  },
  {
    parts: [{ text: "Off-meta maths" }],
    weight: 2,
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
