/*
  Página de detalhes de um projeto (rota /projetos/:slug).

  Animações: "reveal" encadeado conforme o usuário rola a página —
  breadcrumb → título/cabeçalho → banner → visão geral → problema/solução →
  funcionalidades → tecnologias → botões finais. O emoji do banner flutua
  suavemente (loop contínuo).
*/

import {
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  FolderGit2,
  Sparkles,
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
import { SITE_URL } from "../lib/site";

/* Metadados de SEO por projeto (título, descrição, Open Graph) */
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

/* Linha de metadados do projeto (ano, status, papel, stack) */
function ProjectMeta({ project }: { project: Project }) {
  const [from, to] = project.gradient;
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-600 dark:text-zinc-400">
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
      {/* Taglines com as cores do gradiente do projeto */}
      <span
        className="rounded-md px-2 py-0.5 text-xs font-semibold"
        style={{ color: from, backgroundColor: `${from}1a` }}
      >
        {project.tagline}
      </span>
      <span
        className="hidden rounded-md px-2 py-0.5 text-xs font-semibold sm:inline"
        style={{ color: to, backgroundColor: `${to}1a` }}
      >
        {project.stack[0]}
      </span>
    </div>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Slug desconhecido → renderiza a página 404
  if (!project) {
    return <NotFound />;
  }

  const [from, to] = project.gradient;

  return (
    <article className="mx-auto max-w-4xl px-6 py-14">
      {/* Breadcrumb: volta para a seção de projetos */}
      <Reveal>
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden />
          Voltar para projetos
        </Link>
      </Reveal>

      {/* Cabeçalho: título, tagline e metadados */}
      <Reveal delay={0.05}>
        <header className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
            {project.tagline}
          </p>
          <div className="mt-5">
            <ProjectMeta project={project} />
          </div>
        </header>
      </Reveal>

      {/* Banner: fundo em gradiente com as cores do projeto + emoji flutuando */}
      <Reveal
        delay={0.1}
        y={24}
        className="relative mt-10 flex aspect-[16/7] items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800"
      >
        {/* Gradiente linear de fundo */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${from}1a, ${to}26)`,
          }}
        />
        {/* Brilhos radiais decorativos */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 25% 30%, ${from}40, transparent 55%), radial-gradient(circle at 75% 70%, ${to}40, transparent 55%)`,
          }}
        />
        {/* Mockup da interface em tamanho grande, levitando suavemente */}
        <ProjectCover project={project} variant="banner" animateFloat />
      </Reveal>

      {/* Visão geral do projeto */}
      <Reveal delay={0.05}>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Visão geral
          </h2>
          <p className="mt-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.description}
          </p>
        </div>
      </Reveal>

      {/*
        Dois cards lado a lado (problema/solução) que entram em cascata
        ao rolar até eles.
      */}
      <motion.section
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-10 grid gap-6 md:grid-cols-2"
      >
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="inline-flex items-center gap-2 text-rose-500">
            <Sparkles className="size-4" strokeWidth={1.5} aria-hidden />
          </div>
          <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">
            O problema
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.problem}
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="inline-flex items-center gap-2 text-emerald-500">
            <Wand2 className="size-4" strokeWidth={1.5} aria-hidden />
          </div>
          <h3 className="mt-3 font-semibold text-zinc-900 dark:text-zinc-50">
            A solução
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {project.solution}
          </p>
        </motion.div>
      </motion.section>

      {/* Lista de funcionalidades, com cada item entrando em cascata */}
      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Funcionalidades
          </h2>
        </Reveal>
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-4 grid gap-3 sm:grid-cols-2"
        >
          {project.features.map((feature) => (
            <motion.li
              key={feature}
              variants={cardVariants}
              className="flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {/* Pontinho colorido com a cor secundária do projeto */}
              <span
                className="size-2 shrink-0 rounded-full"
                style={{ background: to }}
                aria-hidden
              />
              {feature}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Tags da stack utilizada */}
      <section className="mt-10">
        <Reveal>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            Tecnologias
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Ações finais: código no GitHub + volta para os projetos */}
      <Reveal delay={0.05}>
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            <GithubIcon className="size-4" />
            Ver código no GitHub
          </a>
          <Link
            to="/#projetos"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
          >
            <ArrowUpRight className="size-4" strokeWidth={1.5} aria-hidden />
            Ver outros projetos
          </Link>
        </div>
      </Reveal>
    </article>
  );
}