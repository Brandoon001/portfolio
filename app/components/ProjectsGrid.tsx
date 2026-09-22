/*
  ProjectsGrid: seção (id "projetos") que lista os projetos em destaque.

  Animações:
  - Cabeçalho entra com Reveal.
  - Grade de cards entra em "cascata" ao rolar (o ProjectCard usa cardVariants
    e o grid atua como staggerParent).
*/

import { FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal, staggerParent } from "./motion";

export function ProjectsGrid() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
      {/* Cabeçalho da seção */}
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
            <FolderGit2 className="size-3.5" aria-hidden />
            Projetos
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Projetos em destaque
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Uma amostra do que desenvolvo — cada projeto tem uma página completa
            com problema, solução e tecnologias usadas.
          </p>
        </div>
      </Reveal>

      {/*
        Grade de cards. No modo "show", o staggerParent libera cada filho
        (ProjectCard) em sequência, criando o efeito cascata.
      */}
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  );
}