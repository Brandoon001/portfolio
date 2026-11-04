import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { cardVariants, EASE, DURATION } from "./motion";
import { ProjectCover } from "./ProjectCover";
import { useTilt } from "../lib/useTilt";
import { getTechMeta } from "../data/tech";
import { GithubIcon } from "./icons";

const coverVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: EASE, delay: 0.08 },
  },
};

function StatusBadge({ project }: { project: Project }) {
  const to = project.gradient[1];

  return (
    <span
      className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
      style={{ color: to, backgroundColor: `${to}16` }}
    >
      <span
        aria-hidden
        className="size-1.5 rounded-full"
        style={{ backgroundColor: to }}
      />
      {project.status}
    </span>
  );
}

function Cover({
  project,
  featured,
}: {
  project: Project;
  featured: boolean;
}) {
  const [from, to] = project.gradient;
  const tilt = useTilt(6);

  return (
    <Link
      to={`/projetos/${project.slug}`}
      aria-label={`Ver detalhes do projeto ${project.title}`}
      className={`relative block overflow-hidden ${
        featured
          ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[24rem] lg:w-[56%]"
          : "aspect-[16/9]"
      }`}
    >
      <motion.div
        variants={coverVariants}
        style={{
          transformPerspective: 900,
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
        }}
        onMouseMove={tilt.onMouseMove}
        onMouseLeave={tilt.onMouseLeave}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${from}22, ${to}33)`,
          }}
        />
        <span
          className="absolute inset-0 opacity-60 transition-transform duration-500 group-hover:scale-105"
          role="presentation"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${from}33, transparent 60%), radial-gradient(circle at 70% 70%, ${to}33, transparent 60%)`,
          }}
        />
        <motion.span
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: tilt.glare }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <ProjectCover
            project={project}
            variant={featured ? "banner" : "card"}
          />
        </div>
      </motion.div>

      <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-zinc-950/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
        <ArrowUpRight className="size-3" aria-hidden />
        Detalhes
      </span>
    </Link>
  );
}

function Stack({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Stack do projeto">
      {project.stack.map((tech) => {
        const meta = getTechMeta(tech);
        return (
          <li
            key={tech}
            className="inline-flex items-center gap-1.5 rounded-md border border-border/70 bg-background/60 px-2 py-1 text-xs font-medium text-muted"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full"
              style={{ backgroundColor: meta.color }}
            />
            {tech}
          </li>
        );
      })}
    </ul>
  );
}

export function ProjectCard({
  project,
  index,
  total,
  featured = false,
}: {
  project: Project;
  index: number;
  total: number;
  featured?: boolean;
}) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group flex overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/5 ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      <Cover project={project} featured={featured} />

      <div
        className={`flex flex-1 flex-col ${
          featured ? "p-6 sm:p-8 lg:w-[44%]" : "p-6"
        }`}
      >
        <div className="flex items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Projeto {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <StatusBadge project={project} />
        </div>

        <h3
          className={`mt-3 font-semibold tracking-tight text-foreground ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm font-medium text-primary">
          {project.tagline}
        </p>
        {featured ? (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            {project.description}
          </p>
        ) : null}

        <div className="mt-5">
          <Stack project={project} />
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4 lg:mt-auto">
          <Link
            to={`/projetos/${project.slug}`}
            className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Ver estudo de caso
            <ArrowRight
              className="size-4 transition-transform group-hover/link:translate-x-0.5"
              aria-hidden
            />
          </Link>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Código-fonte do ${project.title} no GitHub (abre em nova aba)`}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
