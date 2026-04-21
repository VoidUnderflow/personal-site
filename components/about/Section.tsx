export default function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-muted-foreground text-xs tracking-widest uppercase">
        {label}
      </p>
      <div>{children}</div>
    </div>
  );
}
