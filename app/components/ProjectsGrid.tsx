import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal, staggerParent } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { site } from "../lib/site";

export function ProjectsGrid() {
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Projetos"
            icon={FolderGit2}
            title="Projetos em destaque"
            description="Cada projeto tem uma página completa com o problema, a solução e as decisões técnicas por trás."
          />
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Todos os repositórios no GitHub
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </div>
      </Reveal>

      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-12 space-y-6"
      >
        <ProjectCard
          project={projects[0]}
          index={0}
          total={projects.length}
          featured
        />

        <motion.div
          variants={staggerParent}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.slice(1).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index + 1}
              total={projects.length}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
