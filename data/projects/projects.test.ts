import { describe, test, expect } from "vitest";
import { getAllProjects, getAllProjectTags } from "./projects";

describe("Validate metadata for projects.", () => {
  const projects = getAllProjects();

  test("Every project has a GitHub URL.", () => {
    for (const project of projects) {
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\//);
    }
  });

  test("No duplicate project IDs.", () => {
    const ids = projects.map((project) => project.id);
    expect(ids.length).toBe(new Set(ids).size);
  });
});

describe("getAllProjectTags", () => {
  test("Returns only tags that appear on at least one project.", () => {
    const projects = getAllProjects();
    const usedTags = new Set(projects.flatMap((project) => project.tags));

    for (const tag of getAllProjectTags()) {
      expect(usedTags.has(tag)).toBe(true);
    }
  });
});
