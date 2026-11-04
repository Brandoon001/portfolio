import { getTechMeta } from "../data/tech";

const stack = [
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "MySQL",
  "HTML",
  "CSS",
  "APIs REST",
  "Maven",
];

export function StackMarquee() {
  return (
    <div
      aria-label="Tecnologias do dia a dia"
      className="marquee relative overflow-hidden border-y border-border bg-surface/40 py-4"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28"
      />

      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center gap-8 pr-8"
          >
            {stack.map((name) => {
              const meta = getTechMeta(name);
              return (
                <li
                  key={name}
                  className="flex items-center gap-8 font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted"
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: meta.color }}
                    />
                    {name}
                  </span>
                  <span className="text-border">/</span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}
