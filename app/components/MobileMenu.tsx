/*
  MobileMenu: menu de navegação "tela cheia" para telas menores que md.

  - Overlay fixo com fundo translúcido + blur (identidade zinc), abaixo da
    navbar (z-40) para que o botão "fechar" continue visível.
  - Links grandes centralizados com entrada em cascata.
  - Rodapé com os canais sociais.
  - Fecha ao clicar num link; o "Escape" e o "resize" são tratados na Navbar.
*/

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./icons";
import { EASE } from "./motion";
import { site } from "../lib/site";

export type NavLink = { href: string; label: string };

export function MobileMenu({
  open,
  links,
  activeId,
  onClose,
}: {
  open: boolean;
  links: NavLink[];
  activeId: string;
  onClose: () => void;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  /* Ao abrir, move o foco para o primeiro link (acessibilidade) */
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="fixed inset-0 z-40 bg-zinc-50/95 backdrop-blur-xl md:hidden dark:bg-zinc-950/95"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <nav className="mx-auto flex h-full max-w-6xl flex-col px-6">
        {/* Links centrados verticalmente, entram em cascata */}
        <div className="flex flex-1 flex-col items-center justify-center gap-1">
          {links.map((link, index) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <motion.a
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={link.href}
                onClick={onClose}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 + index * 0.06,
                  duration: 0.4,
                  ease: EASE,
                }}
                className={`px-4 py-3 text-2xl font-semibold transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-700 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-50"
                }`}
              >
                {link.label}
              </motion.a>
            );
          })}
        </div>

        {/* Canais sociais no rodapé do menu */}
        <div className="flex items-center justify-center gap-3 pb-10">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Brandoon Silva (abre em nova aba)"
            className="inline-flex size-12 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Brandoon Silva (abre em nova aba)"
            className="inline-flex size-12 items-center justify-center rounded-lg border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </div>
      </nav>
    </motion.div>
  );
}