import type { LucideIcon } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        {Icon ? <Icon className="size-3.5 text-primary" aria-hidden /> : null}
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
