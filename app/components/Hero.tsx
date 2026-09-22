/*
  Hero: primeira seção (id "inicio").
  Contém a apresentação, os botões de ação e o avatar, com:
  - Entrada em cascata dos textos (framer-motion, via container/items).
  - Glow de fundo e avatar com animações contínuas sutis (float).
  - Micro-interação de hover nos botões (elevar 2px).
*/

import { Link } from "react-router";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "./icons";
import { site } from "../lib/site";

/* Variante do CONTÊINER: anima os filhos em cascata (stagger 0.12s) */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* Variante de cada ITEM: sobe 24px até a posição final com fade */
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/*
        Glow decorativo: um "bola" de luz azul→violeta bem desfocada atrás
        do texto. Anima continuamente (y sobe/desce e scale pulsa) em ~14s —
        movimento quase imperceptível, só para dar vida ao fundo.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, -24, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="size-[500px] rounded-full bg-gradient-to-tr from-blue-500/20 to-violet-500/20 blur-3xl"
        />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        {/* Coluna de texto com entrada em cascata */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          {/* Badge "Disponível": o ícone Sparkles pulsa suavemente */}
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex"
              aria-hidden
            >
              <Sparkles className="size-3.5" />
            </motion.span>
            Disponível para novas oportunidades
          </motion.p>

          {/* Título com o nome em gradiente azul → violeta (identidade) */}
          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50"
          >
            Olá, eu sou{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-violet-400">
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

          {/* Botões de ação: elevam 2px no hover (transform + transition) */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              to="#projetos"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-500 active:translate-y-0"
            >
              Ver projetos
              <ArrowDown className="size-4" strokeWidth={1.5} aria-hidden />
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
            >
              <GithubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100 active:translate-y-0 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800/60"
            >
              <Mail className="size-4" strokeWidth={1.5} aria-hidden />
              Contato
            </a>
          </motion.div>
        </motion.div>

        {/*
          Coluna do avatar.
          - Halo: anel gradiente desfocado que pulsa (scale/opacidade).
          - Foto: levita 8px de forma contínua (float sutil).
        */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              aria-hidden
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.55, 0.8, 0.55],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 opacity-60 blur-xl"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <img
                src={site.avatar}
                alt={`Foto de perfil de ${site.name}`}
                width={280}
                height={280}
                className="relative size-56 rounded-full border-4 border-white object-cover shadow-2xl dark:border-zinc-900 sm:size-72"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}