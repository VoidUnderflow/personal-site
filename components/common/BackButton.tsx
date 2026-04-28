"use client";

import { Button } from "../ui/button";

export function BackButton() {
  return (
    <Button variant={"outline"} onClick={() => window.history.back()}>
      Go Back
    </Button>
  );
}
