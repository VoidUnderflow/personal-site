"use client";

import { BackButton } from "@/components/common/BackButton";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 pt-16">
      <h1 className="font-logo text-9xl">500</h1>
      <h2 className="text-2xl">Something Went Wrong</h2>
      <BackButton />
    </div>
  );
}
