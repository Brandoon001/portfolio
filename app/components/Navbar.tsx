/*
  Navbar: barra de navegação fixa no topo.

  Comportamentos:
  - Entra deslizando de cima com fade ao carregar a página.
  - Scroll-spy: o link da seção visível fica destacado (useActiveSection usa
    IntersectionObserver) com uma "pílula" de fundo que desliza entre os links
    (animação layoutId do framer-motion).
  - Em telas menores que md, um botão hambúrguer abre o menu tela cheia
    (MobileMenu). O menu fecha ao clicar num link, ao pressionar Escape, e
    automaticamente quando a tela cresce para md.
  - Ícone do logo gira levemente no hover.
*/

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu, type NavLink } from "./MobileMenu";
import { useActiveSection } from "../lib/useActiveSection";

/* Links de âncora para as seções da home */
const links: NavLink[] = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

/* IDs (sem o "#") observados pelo scroll-spy — mantidos estáveis entre renders */
const SECTION_IDS = links.map((link) => link.href.slice(1));

export function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  /* Trava o scroll do fundo enquanto o menu overlay está aberto */
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  /* Fecha o menu com a tecla Escape */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        /* Devolve o foco ao botão hambúrguer após fechar (acessibilidade) */
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  /* Fecha automaticamente se a tela crescer para md ou maior (ex.: girar tablet) */
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  function closeMenu() {
    setIsOpen(false);
    /* Devolve o foco ao botão hambúrguer após fechar (acessibilidade) */
    triggerRef.current?.focus();
  }

  /*
    ATENÇÃO: o overlay fixo NÃO pode ficar dentro do <header>. O header tem
    backdrop-blur e transform (framer), que criam um "containing block" e
    fariam o fixed ser posicionado em relação a ele — quebrando a tela cheia.
    Por isso o MobileMenu é renderizado como irmão do header, não filho.
  */
  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-zinc-800/70 dark:bg-zinc-950/80"
      >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* Logo: leva para a página inicial */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          aria-label="Brandoon Silva — página inicial"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 text-white transition-transform duration-300 group-hover:-rotate-6">
            <Code2 className="size-4" strokeWidth={2} aria-hidden />
          </span>
          <span>Brandoon.dev</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Links de navegação desktop (visíveis a partir de md) */}
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const isActive = activeId === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-md px-3 py-2 text-sm transition-colors ${
                      isActive
                        ? "font-medium text-blue-600 dark:text-blue-300"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-50"
                    }`}
                  >
                    {/*
                      Pílula do link ativo. O layoutId compartilhado faz o
                      framer-motion animar a "bolha" deslizando entre links
                      quando a seção visível muda.
                    */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-md bg-zinc-100 dark:bg-zinc-800/60"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Botão hambúrguer (só no mobile) — 44px de área de toque */}
          <button
            ref={triggerRef}
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            className="inline-flex size-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 md:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
          >
            {/* Crossfade Menu <-> X (mesmo padrão do ThemeToggle) */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="inline-flex"
              >
                {isOpen ? (
                  <X className="size-5" strokeWidth={1.5} aria-hidden />
                ) : (
                  <Menu className="size-5" strokeWidth={1.5} aria-hidden />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <ThemeToggle />
        </div>
      </nav>
      </motion.header>

      {/* Menu mobile em overlay tela cheia (irmão do header, fora do backdrop) */}
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            open={isOpen}
            links={links}
            activeId={activeId}
            onClose={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}