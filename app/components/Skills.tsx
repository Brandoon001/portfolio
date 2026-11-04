import {
  Database,
  GraduationCap,
  MonitorSmartphone,
  Server,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, staggerParent, cardVariants } from "./motion";
import { SectionHeading } from "./SectionHeading";
import { getTechMeta } from "../data/tech";

const categories = [
  {
    title: "Front-end",
    description: "Interfaces rápidas, acessíveis e responsivas.",
    icon: MonitorSmartphone,
    gradient: "from-blue-500 to-cyan-500",
    items: ["JavaScript", "HTML", "CSS", "React", "TypeScript"],
  },
  {
    title: "Back-end",
    description: "Regras de negócio, APIs e integrações.",
    icon: Server,
    gradient: "from-violet-500 to-fuchsia-500",
    items: ["Java", "Node.js", "APIs REST", "POO"],
  },
  {
    title: "Banco de Dados",
    description: "Estrutura, modelagem e persistência.",
    icon: Database,
    gradient: "from-cyan-500 to-teal-500",
    items: ["MySQL", "Modelagem", "Relacionamentos"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative isolate border-y border-border bg-surface/30 py-24 sm:py-28"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 size-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            icon={GraduationCap}
            title="Tecnologias que eu uso"
            description="Ferramentas que domino hoje e as que estou estudando para evoluir como desenvolvedor full stack."
          />
        </Reveal>

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((category, index) => (
            <motion.article
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex items-start justify-between">
                <span
                  className={`inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-tr ${category.gradient} text-white shadow-lg shadow-black/10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105`}
                >
                  <category.icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{category.description}</p>

              <ul className="mt-5 space-y-2">
                {category.items.map((item) => {
                  const meta = getTechMeta(item);
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-border/70 bg-background/50 px-3 py-2 text-sm text-foreground/85 transition-colors group-hover:border-border"
                    >
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full"
                        style={{ backgroundColor: meta.color }}
                      />
                      {item}
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
            <Sparkles className="size-4 text-primary" aria-hidden />
            Sempre estudando — foco atual em TypeScript, Node.js e boas práticas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
