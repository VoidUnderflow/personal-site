"use client";

import { GithubIcon } from "../icons/GithubIcon";
import { LeetcodeIcon } from "../icons/LeetcodeIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { MailIcon } from "../icons/MailIcon";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import IconTooltip from "./IconTooltip";

export default function Footer() {
  return (
    <footer className="bg-background sticky bottom-0 my-2 flex h-10 items-center justify-center">
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
              <IconTooltip label="Email">
                <a href="mailto:alexmihai.ciobanu@gmail.com">
                  <MailIcon size={20} className="text-foreground" />
                </a>
              </IconTooltip>
            </li>
          </ul>
        </TooltipProvider>
      </div>
    </footer>
  );
}
