import { Link } from "react-router";
import { ArrowLeft, FileQuestion, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative isolate mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-20 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 50%, #000 10%, transparent 75%)",
        }}
      />

      <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-violet-600 text-white shadow-xl shadow-violet-600/20">
        <FileQuestion className="size-7" strokeWidth={1.75} aria-hidden />
      </div>
      <span className="mt-6 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        Erro 404
      </span>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-3 max-w-md leading-relaxed text-muted">
        A página que você está procurando não existe ou foi movida para outro
        endereço.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background shadow-lg shadow-foreground/10 transition hover:-translate-y-0.5 active:translate-y-0"
        >
          <Home className="size-4" strokeWidth={1.75} aria-hidden />
          Voltar ao início
        </Link>
        <Link
          to="/#projetos"
          className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-surface px-5 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-surface-muted active:translate-y-0"
        >
          <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
          Ver projetos
        </Link>
      </div>
    </div>
  );
}
