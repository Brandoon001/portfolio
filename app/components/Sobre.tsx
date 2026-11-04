import {
  Boxes,
  Database,
  MonitorSmartphone,
  Server,
  UserRound,
} from "lucide-react";
import { Reveal } from "./motion";
import { SectionHeading } from "./SectionHeading";

const highlights = [
  { icon: Server, label: "APIs REST e integrações" },
  { icon: Boxes, label: "Programação orientada a objetos" },
  { icon: MonitorSmartphone, label: "Interfaces responsivas" },
  { icon: Database, label: "Modelagem de dados" },
];

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <Reveal className="min-w-0">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre mim"
              icon={UserRound}
              title="Desenvolvedor em constante evolução"
            />

            <p className="mt-5 leading-relaxed text-muted">
              Estudo programação com foco em construir soluções completas: do
              banco de dados ao front-end. Tenho base sólida em{" "}
              <strong className="font-semibold text-foreground">Java</strong> e{" "}
              <strong className="font-semibold text-foreground">
                JavaScript
              </strong>
              , com especial interesse em aplicações web escaláveis.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Atualmente me aprofundo em{" "}
              <strong className="font-semibold text-foreground">
                React, TypeScript, Node.js e MySQL
              </strong>{" "}
              para atuar como full stack com produtividade e boas práticas.
            </p>

            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-3.5 py-3 text-sm text-foreground/85"
                >
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0">
          <div className="relative min-w-0">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/15 via-violet-500/10 to-fuchsia-500/15 blur-2xl"
            />
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-xl shadow-black/5">
              <div className="flex items-center gap-1.5 border-b border-border bg-surface-muted px-4 py-3">
                <span className="terminal-dot size-2.5 rounded-full bg-red-400" aria-hidden />
                <span className="terminal-dot size-2.5 rounded-full bg-amber-400" aria-hidden />
                <span className="terminal-dot size-2.5 rounded-full bg-green-400" aria-hidden />
                <span className="ml-2 font-mono text-xs text-muted">
                  Brandoon.java
                </span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  Java
                </span>
              </div>

              <pre
                tabIndex={0}
                aria-label="Exemplo de código Java"
                className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-foreground/85"
              >
                <code>
                  <span className="text-violet-600 dark:text-violet-400">
                    public class
                  </span>{" "}
                  Brandoon {"{"}
                  {"\n"}
                  {"  "}
                  String nome ={" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"Brandoon Silva"'}
                  </span>
                  ;{"\n"}
                  {"  "}
                  String cargo ={" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"Dev Full Stack"'}
                  </span>
                  ;{"\n"}
                  {"  "}
                  String[] linguagens = {"{"}
                  {'"Java"'}
                  ,{" "}
                  {'"JavaScript"'}
                  {"}"};{"\n"}
                  {"  "}
                  String[] estudando = {"{"}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"React"'}
                  </span>
                  ,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"TypeScript"'}
                  </span>
                  ,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"Node.js"'}
                  </span>
                  ,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"MySQL"'}
                  </span>
                  {"}"};{"\n"}
                  {"}"}
                </code>
              </pre>

              <div className="flex items-center justify-between border-t border-border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                <span>UTF-8</span>
                <span>main</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
