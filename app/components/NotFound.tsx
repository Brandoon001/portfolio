/*
  NotFound: estado visual da página 404.
  Usado tanto na rota de fallback quanto quando um slug de projeto não existe.
*/

import { Link } from "react-router";
import { FileQuestion, Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      {/* Ícone central com a cor de identidade (azul) */}
      <div className="inline-flex size-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
        <FileQuestion className="size-8" strokeWidth={1.5} aria-hidden />
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        404
      </h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-400">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-500"
      >
        <Home className="size-4" strokeWidth={1.5} aria-hidden />
        Voltar para a página inicial
      </Link>
    </div>
  );
}