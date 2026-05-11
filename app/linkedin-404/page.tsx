import { BackButton } from "@/components/common/BackButton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn",
};

export default function LinkedInComingSoon() {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-8 pt-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-logo text-9xl">404</h1>
        <p className="text-muted-foreground">Don&apos;t have a LinkedIn yet.</p>
      </div>

      <Card className="w-full max-w-xs">
        <CardContent className="flex flex-col gap-2">
          <p className="pb-1 text-sm font-bold">I&apos;ll make one...</p>
          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between text-sm">
              <span>soon(-ish)</span>
              <span>possibly never</span>
            </div>
            <div className="flex h-1.5 w-full overflow-hidden rounded-full">
              <div className="bg-tertiary h-full w-3/5" />
              <div className="bg-secondary h-full w-2/5" />
            </div>
          </div>
        </CardContent>
      </Card>

      <BackButton />
    </div>
  );
}
