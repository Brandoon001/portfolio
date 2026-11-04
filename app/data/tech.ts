export type TechMeta = {
  short: string;
  color: string;
};

export const techMeta: Record<string, TechMeta> = {
  Java: { short: "Ja", color: "#f59e0b" },
  JavaScript: { short: "JS", color: "#eab308" },
  TypeScript: { short: "TS", color: "#3b82f6" },
  React: { short: "Re", color: "#22d3ee" },
  "Node.js": { short: "No", color: "#22c55e" },
  MySQL: { short: "My", color: "#0ea5e9" },
  HTML: { short: "<>", color: "#f97316" },
  CSS: { short: "#", color: "#6366f1" },
  "APIs REST": { short: "API", color: "#8b5cf6" },
  Maven: { short: "Mv", color: "#ef4444" },
  POO: { short: "OO", color: "#14b8a6" },
  "Gemini API": { short: "AI", color: "#a855f7" },
  "JSON Server": { short: "JS", color: "#84cc16" },
  Modelagem: { short: "DB", color: "#06b6d4" },
  Relacionamentos: { short: "DB", color: "#06b6d4" },
};

export function getTechMeta(name: string): TechMeta {
  return (
    techMeta[name] ?? {
      short: name.slice(0, 2).toUpperCase(),
      color: "#71717a",
    }
  );
}
