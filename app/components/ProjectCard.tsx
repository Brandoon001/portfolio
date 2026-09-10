import { Link } from "react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

const emojiBySlug: Record<string, string> = {
  fintrack: "💰",
  "nlw-agents": "🤖",
  "task-manager": "✅",
};

export function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.gradient;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <Link
        to={`/projetos/${project.slug}`}
        aria-label={`Ver detalhes do projeto ${project.title}`}
        className="relative block aspect-[16/9]"
      >
        <div
          className="flex h-full w-full items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${from}22, ${to}33)`,
          }}
        >
          <span
            className="absolute inset-0 opacity-60 transition-transform duration-300 group-hover:scale-105"
            role="presentation"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${from}33, transparent 60%), radial-gradient(circle at 70% 70%, ${to}33, transparent 60%)`,
            }}
          />
          <span className="relative text-6xl drop-shadow-lg" aria-hidden>
            {emojiBySlug[project.slug] ?? "📦"}
          </span>
        </div>
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-zinc-900/80 px-2 py-1 text-xs font-medium text-white backdrop-blur">
          <ArrowUpRight className="size-3" aria-hidden />
          Detalhes
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <span
            className="shrink-0 rounded-md px-2 py-0.5 text-xs font-medium"
            style={{ color: to, backgroundColor: `${to}1a` }}
          >
            {project.status}
          </span>
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {project.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack do projeto">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <Link
            to={`/projetos/${project.slug}`}
            className="text-sm font-medium text-indigo-600 transition-colors hover:text-indigo-500 dark:text-indigo-400"
          >
            Ver estudo de caso
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código-fonte do ${project.title} no GitHub (abre em nova aba)`}
            className="inline-flex size-8 items-center justify-center rounded-md text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            <ExternalLink className="size-4" strokeWidth={1.5} aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}