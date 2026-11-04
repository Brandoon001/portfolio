import { motion, type Variants } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { StackMarquee } from "./StackMarquee";
import { getTechMeta } from "../data/tech";
import { projects } from "../data/projects";
import { site } from "../lib/site";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const techCount = new Set(projects.flatMap((project) => project.stack)).size;

const floatingTech = [
  { name: "Java", position: "left-0 top-4", delay: 0 },
  { name: "React", position: "right-0 top-24", delay: 0.6 },
  { name: "Node.js", position: "bottom-20 left-0", delay: 1.2 },
  { name: "MySQL", position: "bottom-4 right-2", delay: 1.8 },
];

const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Projetos" },
  { value: String(techCount).padStart(2, "0"), label: "Tecnologias" },
  { value: "Full", label: "Stack" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-grid"
          style={{
            maskImage:
              "radial-gradient(ellipse 68% 55% at 50% 0%, #000 20%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 68% 55% at 50% 0%, #000 20%, transparent 78%)",
          }}
        />
        <motion.div
          animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-[-14rem] size-[44rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/25 via-violet-500/20 to-fuchsia-500/10 blur-3xl"
        />
        <div className="absolute -left-48 top-52 size-96 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-48 bottom-10 size-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-noise opacity-[0.025]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-16 pt-14 sm:pt-16 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-300">
              <span className="relative flex size-2" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Disponível para novas oportunidades
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-[clamp(2.9rem,8vw,4.9rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-foreground"
          >
            Brandoon <span className="text-gradient">Silva</span>
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.26em] text-primary sm:text-xs"
          >
            Desenvolvedor Full Stack
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted"
          >
            Construo aplicações web completas — do banco de dados à interface.
            Foco em{" "}
            <span className="font-medium text-foreground">
              Java, JavaScript e React
            </span>
            , com código limpo e atenção à experiência de quem usa.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projetos"
              className="group inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0"
            >
              Ver projetos
              <ArrowDown
                className="size-4 transition-transform group-hover:translate-y-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground/25 hover:bg-surface-muted active:translate-y-0"
            >
              <Mail className="size-4" strokeWidth={1.75} aria-hidden />
              Fale comigo
            </a>
            <div className="flex items-center gap-1.5">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Brandoon Silva (abre em nova aba)"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Brandoon Silva (abre em nova aba)"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground"
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-10 grid max-w-md grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="px-4 py-3.5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative mx-auto aspect-square w-64 sm:w-80">
            <motion.div
              aria-hidden
              animate={{ scale: [1, 1.07, 1], opacity: [0.55, 0.8, 0.55] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-600 via-violet-600 to-fuchsia-500 opacity-50 blur-2xl"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600 via-violet-600 to-fuchsia-500 p-[2px] shadow-2xl"
            >
              <img
                src={site.avatar}
                alt={`Foto de perfil de ${site.name}`}
                width={320}
                height={320}
                loading="eager"
                fetchPriority="high"
                className="size-full rounded-full border-4 border-background object-cover"
              />
            </motion.div>
          </div>

          {floatingTech.map((tech) => {
            const meta = getTechMeta(tech.name);
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
                transition={{
                  opacity: { duration: 0.4, delay: 0.6 + tech.delay },
                  scale: { duration: 0.4, delay: 0.6 + tech.delay },
                  y: {
                    duration: 5 + tech.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: tech.delay,
                  },
                }}
                className={`absolute ${tech.position}`}
              >
                <span className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-3 py-2 text-xs font-medium text-foreground shadow-lg shadow-black/5 backdrop-blur">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: meta.color }}
                  />
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <StackMarquee />
    </section>
  );
}
