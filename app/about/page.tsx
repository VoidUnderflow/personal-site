import Section from "@/components/about/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="page-vertical-spacing">
      <h1 className="title-heading">About</h1>
      <p>
        This website is a place to showcase some of my projects and write about
        things I find interesting.
      </p>
      <Separator />

      <Card>
        <CardContent className="flex flex-col gap-4 py-2">
          <Section label="Who">
            <p>
              My name is Mihai, and I&apos;m a backend-focused full stack dev.
              <br />
              If you want to know more about me, you can read my
              <Link href="/posts/welcome" className="inline-link">
                {" "}
                welcome
              </Link>{" "}
              post.
            </p>
          </Section>
          <Separator />
          <Section label="Frontend">
            React + Tailwind. VanillaJS too, but only if absolutely necessary.{" "}
            <br />I work best when I have a Figma to follow, my designs are a
            bit hit-and-miss.
          </Section>
          <Separator />
          <Section label="Backend">
            I have commercial experience with Node/Express and C#, but
            haven&apos;t quite settled on a framework yet. I&apos;ve
            experimented a bit with NextJS, Express, Django, and FastAPI.
          </Section>
          <Separator />
          <Section label="current focus">
            Getting back into C#, and doing{" "}
            <Link href="https://www.frontendmentor.io">Frontend Mentor</Link>{" "}
            challenges. Also learning Rust, but it&apos;s more of a hobby thing
            for now.
          </Section>
          <Separator />
          <Section label="Resume">
            My resume can be found <Link href="/404">here.</Link> <br />
            In the future, I may be adding some things that didn&apos;t fit
            there on this page.
          </Section>
        </CardContent>
      </Card>
    </div>
  );
}
