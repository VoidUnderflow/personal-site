import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoidUnderflow",
};

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="font-logo text-tertiary border-tertiary px-1 text-4xl font-bold">
        <span className="text-foreground">VOID</span>
        <span>UNDERFLOW</span>
      </p>
    </div>
  );
}
