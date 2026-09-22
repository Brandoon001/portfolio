/*
  ThemeToggle: botão que alterna entre os temas claro e escuro.

  Animações:
  - AnimatePresence troca o ícone (sol <-> lua) com rotação/fade fluido.
    O prop key muda conforme o tema para que o framer-motion detecte a troca.
  - whileTap encolhe o botão um pouco ao clicar (feedback de toque).
*/

import { useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/* Hook auxiliar: detecta quando o componente foi hidratado no navegador,
   evitando diferenças de renderização entre servidor e cliente (SSR). */
const emptySubscribe = () => () => {};

function useIsHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isHydrated = useIsHydrated();

  // Antes da hidratação, renderiza um espaço vazio do mesmo tamanho
  // para a navbar não "saltar".
  if (!isHydrated) {
    return <div className="size-10" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.85 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      aria-pressed={isDark}
      className="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
    >
      {/*
        AnimatePresence renderiza o ícone correto com transição:
        - mode="wait": espera o atual sair antes de entrar o novo.
        - initial={false}: não anima na primeira renderização.
      */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="inline-flex"
        >
          {isDark ? (
            <Moon className="size-4" strokeWidth={1.5} aria-hidden />
          ) : (
            <Sun className="size-4" strokeWidth={1.5} aria-hidden />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}