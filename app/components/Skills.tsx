import {
  MonitorSmartphone,
  Server,
  Database,
  GraduationCap,
} from "lucide-react";

const categories = [
  {
    title: "Front-end",
    icon: MonitorSmartphone,
    color: "text-indigo-600 dark:text-indigo-400",
    items: ["JavaScript", "HTML", "CSS", "React", "TypeScript"],
  },
  {
    title: "Back-end",
    icon: Server,
    color: "text-fuchsia-600 dark:text-fuchsia-400",
    items: ["Java", "Node.js", "APIs REST"],
  },
  {
    title: "Banco de Dados",
    icon: Database,
    color: "text-cyan-600 dark:text-cyan-400",
    items: ["MySQL", "Modelagem", "Relacionamentos"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-y border-zinc-200 bg-zinc-100/60 py-24 dark:border-zinc-800/60 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-zinc-50 px-3 py-1 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            <GraduationCap className="size-3.5" aria-hidden />
            Skills
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Tecnologias que eu uso
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Ferramentas que domino hoje e as que estou estudando para evoluir
            como desenvolvedor full stack.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div
                className={`inline-flex size-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 ${category.color}`}
              >
                <category.icon className="size-5" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {category.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}