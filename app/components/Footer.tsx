import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contato"
      className="relative isolate overflow-hidden border-t border-border"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 size-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-sm sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-tr from-blue-500/15 to-violet-500/15 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02]"
          />

          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden />
                Contato
              </span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Vamos construir algo{" "}
                <span className="text-gradient">juntos?</span>
              </h2>
              <p className="mt-3 max-w-md leading-relaxed text-muted">
                Estou aberto a oportunidades full stack e a projetos desafiadores.
                Me chame para conversar sobre tecnologia, produto ou uma vaga.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${site.email}`}
                aria-label="Enviar e-mail para Brandoon Silva"
                className="group inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition hover:-translate-y-0.5 active:translate-y-0"
              >
                <Mail className="size-4" strokeWidth={1.75} aria-hidden />
                Falar comigo
                <ArrowUpRight
                  className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Brandoon Silva (abre em nova aba)"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:-translate-y-0.5 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Brandoon Silva (abre em nova aba)"
                className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-background text-muted transition hover:-translate-y-0.5 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-6 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-muted transition-colors hover:text-foreground"
            >
              <Mail className="size-4" strokeWidth={1.75} aria-hidden />
              {site.email}
            </a>
            <span className="hidden size-1 rounded-full bg-border sm:block" aria-hidden />
            <span className="text-muted">Disponível para novas oportunidades</span>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Brandoon Silva. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>Feito com React Router, Vite e Tailwind CSS.</p>
            <a
              href="#inicio"
              className="inline-flex items-center gap-1.5 font-medium text-foreground transition hover:text-primary"
            >
              Voltar ao topo
              <ArrowUp className="size-3.5" aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
