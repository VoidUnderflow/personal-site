"use client";

import { GithubIcon } from "../icons/GithubIcon";
import { LeetcodeIcon } from "../icons/LeetcodeIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { GoodreadsIcon } from "../icons/GoodreadsIcon";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import IconTooltip from "./IconTooltip";
import FooterQuote from "./FooterQuote";

export default function Footer() {
  return (
    <footer className="bg-background my-4 flex flex-col items-center gap-2 pb-2">
      <div>
        <TooltipProvider>
          <ul className="flex items-center gap-4">
            <li>
              <IconTooltip label="GitHub">
                <a
                  href="https://github.com/VoidUnderflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon size={20} className="text-foreground" />
                </a>
              </IconTooltip>
            </li>
            <li aria-hidden="true">
              <Separator
                orientation="vertical"
                className="bg-primary h-4 w-0.5"
              />
            </li>
            <li>
              <IconTooltip label="LeetCode">
                <a
                  href="https://leetcode.com/u/VoidUnderflow/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LeetcodeIcon size={20} className="text-foreground" />
                </a>
              </IconTooltip>
            </li>
            <li aria-hidden="true">
              <Separator
                orientation="vertical"
                className="bg-secondary h-4 w-0.5"
              />
            </li>
            <li>
              <IconTooltip label="LinkedIn">
                <a href="/linkedin-404">
                  <LinkedinIcon size={20} className="text-foreground" />
                </a>
              </IconTooltip>
            </li>
            <li aria-hidden="true">
              <Separator
                orientation="vertical"
                className="bg-primary h-4 w-0.5"
              />
            </li>
            <li>
              <IconTooltip label="Goodreads">
                <a
                  href="https://www.goodreads.com/user/show/194734626-mihai-c"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GoodreadsIcon size={20} className="text-foreground" />
                </a>
              </IconTooltip>
            </li>
          </ul>
        </TooltipProvider>
      </div>
      <FooterQuote />
    </footer>
  );
}
