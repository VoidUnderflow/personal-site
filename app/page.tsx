import { HeroAnimation } from "@/components/home/HeroAnimation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoidUnderflow",
};

export default function HomePage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <HeroAnimation />
    </div>
  );
}
