import { Link } from "react-router";
import { Code2 } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link
          to="/"
          className="group inline-flex items-center gap-2 font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
          aria-label="Brandoon Silva — página inicial"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-600 text-white">
            <Code2 className="size-4" strokeWidth={2} aria-hidden />
          </span>
          <span>Brandoon.dev</span>
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}