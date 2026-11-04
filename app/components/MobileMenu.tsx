import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
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

  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
  }, [open]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE }}
      className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-40"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 20%, transparent 75%)",
        }}
      />

      <nav className="relative mx-auto flex h-full max-w-6xl flex-col px-6">
        <div className="flex flex-1 flex-col justify-center gap-1">
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
                  delay: 0.08 + index * 0.05,
                  duration: 0.4,
                  ease: EASE,
                }}
                className={`flex items-center gap-3 py-3 text-3xl font-semibold tracking-tight transition-colors ${
                  isActive ? "text-foreground" : "text-muted hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden
                  className={`size-2 rounded-full transition ${
                    isActive
                      ? "bg-gradient-to-tr from-blue-500 to-violet-500"
                      : "bg-border"
                  }`}
                />
                {link.label}
              </motion.a>
            );
          })}
        </div>

        <div className="flex flex-col gap-5 pb-10">
          <a
            href={`mailto:${site.email}`}
            onClick={onClose}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-foreground text-sm font-semibold text-background"
          >
            <Mail className="size-4" aria-hidden />
            {site.email}
          </a>
          <div className="flex items-center justify-center gap-3">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Brandoon Silva (abre em nova aba)"
              className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Brandoon Silva (abre em nova aba)"
              className="inline-flex size-12 items-center justify-center rounded-xl border border-border bg-surface text-muted transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
