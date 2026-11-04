import { getTechMeta } from "../data/tech";

export function TechChip({ name, className = "" }: { name: string; className?: string }) {
  const meta = getTechMeta(name);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-foreground/20 hover:text-foreground ${className}`}
    >
      <span
        aria-hidden
        className="size-1.5 shrink-0 rounded-full"
        style={{ backgroundColor: meta.color }}
      />
      {name}
    </span>
  );
}
