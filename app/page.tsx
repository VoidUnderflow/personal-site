import { getAllPosts } from "@/data/posts/posts";
import { getAllProjects } from "@/data/projects/projects";
import { Hero } from "@/components/home/hero/Hero";
import { HomeSection } from "@/components/home/HomeSection";
import { HomeCard } from "@/components/home/HomeCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VoidUnderflow",
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 2);
  const projects = getAllProjects().slice(0, 4);

  return (
    <>
      <div className="-mt-10 flex h-screen flex-col items-center justify-center">
        <Hero />
      </div>
      <div className="flex flex-col gap-12 py-16">
        <p>
          Welcome to my little corner of the internet, where I share things I
          find interesting and some stuff I&apos;ve coded.
          <br />I don&apos;t take myself too seriously and you probably
          shouldn&apos;t either.
        </p>
        <div className="flex flex-col gap-12">
          <HomeSection title="Latest posts">
            {posts.map((post) => (
              <HomeCard key={post.slug} variant="post" post={post} />
            ))}
          </HomeSection>
          <HomeSection title="Recent projects">
            {projects.map((project) => (
              <HomeCard key={project.id} variant="project" project={project} />
            ))}
          </HomeSection>
        </div>
      </div>
    </>
  );
}
