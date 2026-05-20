import { describe, test, expect } from "vitest";
import { getAllPosts } from "./posts";

const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;

describe("Validate metadata for posts.", () => {
  const posts = getAllPosts();

  test("Every post has a slug with no spaces.", () => {
    for (const post of posts) {
      expect(post.slug.length).toBeGreaterThan(0);
      expect(post.slug).not.toContain(" ");
    }
  });

  test("Every post has a valid YYYY-MM-DD date.", () => {
    for (const post of posts) {
      expect(post.date).toMatch(DATE_REGEX);
    }
  });
});
