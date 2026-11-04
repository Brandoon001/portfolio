import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  FolderGit2,
  Target,
  UserRound,
  Wand2,
} from "lucide-react";
import { Link, useParams, type MetaFunction } from "react-router";
import { motion } from "framer-motion";
import { GithubIcon } from "../components/icons";
import { NotFound } from "../components/NotFound";
import { projects, type Project } from "../data/projects";
import { Reveal, cardVariants, staggerParent } from "../components/motion";
import { ProjectCover } from "../components/ProjectCover";
import { TechChip } from "../components/TechChip";
import { SITE_URL } from "../lib/site";

export const meta: MetaFunction = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return [
      { title: "Projeto não encontrado · Brandoon Silva" },
      { name: "robots", content: "noindex" },
    ];
  }

  return [
    { title: `${project.title} · Brandoon Silva` },
    { name: "description", content: project.description },
    { tagName: "link", rel: "canonical", href: `${SITE_URL}/projetos/${project.slug}` },
    { property: "og:type", content: "article" },
    { property: "og:url", content: `${SITE_URL}/projetos/${project.slug}` },
    { property: "og:title", content: `${project.title} — ${project.tagline}` },
    { property: "og:description", content: project.description },
    { property: "og:locale", content: "pt_BR" },
    { property: "og:site_name", content: "Brandoon Silva" },
    { property: "og:image", content: `${SITE_URL}/og.png` },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

function StatusBadge({ project }: { project: Project }) {
  const to = project.gradient[1];

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium"
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

function ProjectMeta({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-4" strokeWidth={1.5} aria-hidden />
        {project.year}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <FolderGit2 className="size-4" strokeWidth={1.5} aria-hidden />
        {project.status}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <UserRound className="size-4" strokeWidth={1.5} aria-hidden />
        {project.role}
      </span>
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const [from, to] = project.gradient;
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-6 py-14 sm:py-20">
      <Reveal>
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
          Voltar para projetos
        </Link>
      </Reveal>

      <Reveal delay={0.05}>
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Estudo de caso
            </span>
            <StatusBadge project={project} />
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-lg text-muted">{project.tagline}</p>
          <div className="mt-6">
            <ProjectMeta project={project} />
          </div>
        </header>
      </Reveal>

      <Reveal
        delay={0.1}
        y={24}
        className="relative mt-10 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl border border-border sm:aspect-[16/7]"
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${from}1a, ${to}26)` }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 25% 30%, ${from}40, transparent 55%), radial-gradient(circle at 75% 70%, ${to}40, transparent 55%)`,
          }}
        />
        <div aria-hidden className="absolute inset-0 bg-noise opacity-[0.04]" />
        <ProjectCover project={project} variant="banner" animateFloat />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Visão geral
          </h2>
          <p className="leading-relaxed text-muted">{project.description}</p>
        </div>
      </Reveal>

      <motion.section
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-5 md:grid-cols-2"
      >
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
            <Target className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="mt-4 font-semibold text-foreground">O problema</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.problem}
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-border bg-surface p-6"
        >
          <span className="inline-flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
            <Wand2 className="size-4" strokeWidth={1.75} aria-hidden />
          </span>
          <h3 className="mt-4 font-semibold text-foreground">A solução</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {project.solution}
          </p>
        </motion.div>
      </motion.section>

      <section className="mt-12">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Funcionalidades
          </h2>
        </Reveal>
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-4 grid gap-2.5 sm:grid-cols-2"
        >
          {project.features.map((feature) => (
            <motion.li
              key={feature}
              variants={cardVariants}
              className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground/85"
            >
              <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                <Check className="size-3" strokeWidth={3} aria-hidden />
              </span>
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section className="mt-12">
        <Reveal>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Tecnologias
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li key={tech}>
                <TechChip name={tech} />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <Reveal delay={0.05}>
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition hover:-translate-y-0.5 active:translate-y-0"
          >
            <GithubIcon className="size-4" />
            Ver código no GitHub
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
          <Link
            to="/#projetos"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-surface-muted active:translate-y-0"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
            Ver outros projetos
          </Link>
        </div>
      </Reveal>

      {nextProject ? (
        <Reveal delay={0.05}>
          <Link
            to={`/projetos/${nextProject.slug}`}
            className="group mt-10 flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface p-5 transition hover:border-foreground/20 hover:shadow-lg"
          >
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                Próximo projeto
              </span>
              <p className="mt-1 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {nextProject.title}
              </p>
              <p className="text-sm text-muted">{nextProject.tagline}</p>
            </div>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted transition group-hover:border-primary group-hover:text-primary">
              <ArrowRight className="size-4" aria-hidden />
            </span>
          </Link>
        </Reveal>
      ) : null}
    </article>
  );
}
