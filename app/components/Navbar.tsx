import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowUpRight, Code2, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu, type NavLink } from "./MobileMenu";
import { useActiveSection } from "../lib/useActiveSection";

const navLinks: NavLink[] = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
];

const mobileLinks: NavLink[] = [
  ...navLinks,
  { href: "#contato", label: "Contato" },
];

const SECTION_IDS = mobileLinks.map((link) => link.href.slice(1));

export function Navbar() {
  const activeId = useActiveSection(SECTION_IDS);
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001,
  });

  const isContactActive = activeId === "contato";

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

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
    triggerRef.current?.focus();
  }

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/75 backdrop-blur-xl"
      >
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2.5 font-semibold tracking-tight text-foreground"
            aria-label="Brandoon Silva — página inicial"
          >
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 to-violet-600 text-white shadow-md shadow-violet-600/20 transition-transform duration-300 group-hover:-rotate-6">
              <Code2 className="size-4" strokeWidth={2} aria-hidden />
            </span>
            <span>
              brandoon<span className="text-muted">.dev</span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-0.5 md:flex">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative rounded-lg px-3 py-2 text-sm transition-colors ${
                        isActive
                          ? "font-medium text-foreground"
                          : "text-muted hover:text-foreground"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-lg bg-surface-muted"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative">{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contato"
              className={`group ml-1 hidden h-10 items-center gap-1.5 rounded-lg px-4 text-sm font-semibold transition sm:inline-flex ${
                isContactActive
                  ? "bg-surface-muted text-foreground"
                  : "bg-foreground text-background hover:opacity-90"
              }`}
            >
              Contato
              <ArrowUpRight
                className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
            </a>

            <ThemeToggle />

            <button
              ref={triggerRef}
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-muted md:hidden"
            >
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
          </div>
        </nav>

        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
        />
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            open={isOpen}
            links={mobileLinks}
            activeId={activeId}
            onClose={closeMenu}
          />
        )}
      </AnimatePresence>
    </>
  );
}
