import { Hero } from "@/components/home/hero/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoidUnderflow",
};

export default function HomePage() {
  return (
    <>
      <div className="-mt-10 flex h-screen flex-col items-center justify-center">
        <Hero />
      </div>
      {/* Placeholder vertical space. */}
      <div className="flex flex-col gap-32">
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
        <p>Vert</p>
      </div>
    </>
  );
}
