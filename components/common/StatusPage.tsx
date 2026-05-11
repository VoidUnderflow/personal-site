import { BackButton } from "@/components/common/BackButton";

type Props = {
  title: string;
  text: string;
  children?: React.ReactNode;
};

/**
 * Common component for 404 and error pages.
 * @returns
 */
export function StatusPage({ title, text, children }: Props) {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-4 pt-16">
      <h1 className="font-logo-underflow text-9xl">{title}</h1>
      <h2 className="text-2xl">{text}</h2>
      {children}
      <BackButton />
    </div>
  );
}
