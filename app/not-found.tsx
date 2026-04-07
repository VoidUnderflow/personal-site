import { BackButton } from "@/components/error/BackButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 pt-16">
      <h1 className="font-logo text-9xl">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <BackButton />
    </div>
  );
}
