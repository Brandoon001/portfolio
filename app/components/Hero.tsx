import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons";
import { site } from "../lib/site";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 to-fuchsia-500/20 blur-3xl"
      />
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            <Sparkles className="size-3.5" aria-hidden />
            Disponível para novas oportunidades
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
          >
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
              Brandoon Silva
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg font-medium text-zinc-700 dark:text-zinc-300"
          >
            {site.role} com foco em Java e JavaScript, construindo aplicações
            completas.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 text-zinc-600 dark:text-zinc-400"
          >
            Transformo ideias em produtos — do banco de dados à interface.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-500"
            >
              Ver projetos
              <ArrowDown className="size-4" strokeWidth={1.5} aria-hidden />
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
            >
              <Mail className="size-4" strokeWidth={1.5} aria-hidden />
              Contato
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-indigo-600 to-fuchsia-600 opacity-60 blur-xl"
            />
            <img
              src={site.avatar}
              alt={`Foto de perfil de ${site.name}`}
              width={280}
              height={280}
              className="relative size-56 rounded-full border-4 border-white object-cover shadow-2xl dark:border-zinc-900 sm:size-72"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}