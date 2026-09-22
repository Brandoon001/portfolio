/*
  Primitivas de animação reutilizáveis (framer-motion).

  Objetivo: manter as animações do site consistentes entre si — mesmo easing,
  mesma duração, mesmo deslocamento — e com uma única fonte de ajuste.
*/

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

/*
  EASE: curva de timing cúbica suave (ease-out expo).
  Começa rápida e desacelera muito — dá o "polido" sem parecer mecânico.
*/
export const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* DURATION: duração padrão das entradas, em segundos. */
export const DURATION = 0.6;

/*
  fadeUp: variante de entrada padrão.
  Aplica opacidade + um pequeno deslocamento vertical (16px) que some ao
  animar. O "hidden"/"show" é interpretado pelo componente pai (stagger).
*/
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

/*
  staggerParent: variante do CONTÊINER que controla a "cascata".
  No estado "show" ele libera os filhos em sequência com um atraso entre eles.
  Os filhos precisam ter variantes próprias (ex.: cardVariants).
*/
export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/* cardVariants: padrão de entrada usado pelos cards/grades (usa o fadeUp). */
export const cardVariants: Variants = fadeUp;

/*
  Reveal: componente simples para animar um bloco quando ele entra na tela.

  - whileInView: dispara a animação quando o elemento entra no viewport.
  - viewport.once: anima só a primeira vez (não "pula" ao voltar a rolar).
  - viewport.margin: antecipa o disparo em 80px (anima um pouco antes do
    elemento chegar à borda da tela).
  - delay: atraso opcional para encadear reveals.
*/
export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: DURATION, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}