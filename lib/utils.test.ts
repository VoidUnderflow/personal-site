import { test, expect } from "vitest";
import { formatPostDate } from "./utils";

test("Formatting post date works.", () => {
  expect(formatPostDate("2026-05-18")).toBe("May 18, 2026");
});
