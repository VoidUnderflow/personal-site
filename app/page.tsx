import { Hero } from "@/components/home/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoidUnderflow",
};

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Hero />
    </div>
  );
}
