import Section from "@/components/about/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getResumeURL } from "@/lib/utils";
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
              My name is Mihai. I code for a living and for fun. It&apos;s
              likely that I&apos;m currently a full stack dev{" "}
              <span className="italic">somewhere</span>.
              <br />
              If you want to know more about me, you can read my
              <Link href="/posts/welcome" className="inline-link">
                {" "}
                welcome
              </Link>{" "}
              post. You can contact me by email{" "}
              <a
                href="mailto:alexmihai.ciobanu@gmail.com"
                className="inline-link"
              >
                here
              </a>
              .
            </p>
          </Section>
          <Separator />
          <Section label="Frontend">
            React + Tailwind. Vanilla JS too, but only if absolutely necessary.{" "}
            <br />I work best when I have a design to follow, my own are a bit
            hit-or-miss (e.g: might <span className="italic">accidentally</span>{" "}
            forget to add light mode).
          </Section>
          <Separator />
          <Section label="Backend">
            I have commercial experience with Node/Express and C#, but
            haven&apos;t quite settled on a framework yet. I&apos;ve
            experimented a bit with NextJS, Express, Django, and FastAPI.
          </Section>
          <Separator />
          <Section label="current focus">
            Getting back into Java, and doing{" "}
            <Link href="https://www.frontendmentor.io">Frontend Mentor</Link>{" "}
            challenges. Also learning Rust, but it&apos;s more of a hobby thing
            for now.
          </Section>
          <Separator />
          <Section label="Resume">
            My resume can be found <Link href={getResumeURL()}>here</Link>. Some
            older interesting things that I&apos;ve done didn&apos;t make the
            cut. <br />
            Will probably add them in the future™, as I also want to talk a bit
            more about my previous roles.
          </Section>
        </CardContent>
      </Card>
    </div>
  );
}
