/*
  Footer: rodapé da página (id "contato"), com chamada para contato e
  links de e-mail, GitHub e LinkedIn.
*/

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "../lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Chamada para contato */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Vamos trabalhar juntos?
            </h2>
            <p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
              Aberto a novas oportunidades e projetos. Fale comigo pelos canais
              abaixo.
            </p>
          </div>

          {/* Canal principal (e-mail) + redes sociais (quebra linha em telas estreitas) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${site.email}`}
              aria-label="Enviar e-mail para Brandoon Silva"
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
            >
              <Mail className="size-4" strokeWidth={1.5} aria-hidden />
              Entrar em contato
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Brandoon Silva (abre em nova aba)"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Brandoon Silva (abre em nova aba)"
              className="inline-flex size-11 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>

          {/* Créditos e stack do site */}
          <div className="flex flex-col items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500">
            <p>
              © {year} Brandoon Silva — Desenvolvedor Full Stack.
            </p>
            <p className="flex items-center gap-1">
              Feito com{" "}
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                React
              </span>
              ,{" "}
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Next.js
              </span>{" "}
              e{" "}
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}