/*
  ProjectCard: card individual de um projeto (usado na grade de Projetos).

  Capa:
  - O mockup da interface é renderizado por <ProjectCover /> (mini-UI por slug).
  - Tilt 3D + glare na área da capa via useTilt (só em dispositivos com mouse;
    quem prefere menos movimento não recebe inclinação).
  - Entrada "drop-in" do mockup, sincronizada com a cascata do grid.

  Animações gerais: card levita 4px no hover (whileHover) e participa da
  entrada em cascata da grade (variantes herdadas do staggerParent).
*/

import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";
import { cardVariants, EASE, DURATION } from "./motion";
import { ProjectCover } from "./ProjectCover";
import { useTilt } from "../lib/useTilt";

/* Entrada temática da capa: "cai" suavemente junto com a cascata do grid */
const coverVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: EASE, delay: 0.08 },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.gradient;
  const tilt = useTilt(6);

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
    >
      {/* Capa: link para a página de detalhes do projeto */}
      <Link
        to={`/projetos/${project.slug}`}
        aria-label={`Ver detalhes do projeto ${project.title}`}
        className="relative block aspect-[16/9]"
      >
        {/* Camada com tilt 3D: gradiente + brilhos + mockup + glare da capa */}
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
          {/* Fundo em gradiente com os tons do projeto */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${from}22, ${to}33)`,
            }}
          />
          {/* Brilho radial decorativo; escala suavemente no hover */}
          <span
            className="absolute inset-0 opacity-60 transition-transform duration-300 group-hover:scale-105"
            role="presentation"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${from}33, transparent 60%), radial-gradient(circle at 70% 70%, ${to}33, transparent 60%)`,
            }}
          />
          {/* Glare: reflexo de luz que acompanha o cursor (só no hover) */}
          <motion.span
            aria-hidden
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: tilt.glare }}
          />
          {/* Mockup da interface, centralizado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ProjectCover project={project} variant="card" />
          </div>
        </motion.div>
        {/* Selo "Detalhes" fixo no canto da capa */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-md bg-zinc-900/80 px-2 py-1 text-xs font-medium text-white backdrop-blur">
          <ArrowUpRight className="size-3" aria-hidden />
          Detalhes
        </span>
      </Link>

      {/* Corpo do card: título, status, resumo e stack */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
          {/* Status do projeto, colorido com o tom secundário do gradiente */}
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

        {/* Tags da stack utilizada */}
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

        {/* Rodapé do card: link para o estudo de caso + link externo (GitHub) */}
        <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <Link
            to={`/projetos/${project.slug}`}
            className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400"
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
            {/* Ícone de link externo: rotaciona 45° no hover do card */}
            <ExternalLink
              className="size-4 transition-transform duration-300 group-hover:rotate-45"
              strokeWidth={1.5}
              aria-hidden
            />
          </a>
        </div>
      </div>
    </motion.article>
  );
}