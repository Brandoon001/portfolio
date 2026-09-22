/*
  useTilt: efeito de inclinação 3D que acompanha o cursor ("tilt" + "glare").

  Como funciona:
  - A posição do mouse dentro do elemento é convertida em rotação X/Y
    (máx. ~6°), aplicada via useSpring para suavizar o movimento.
  - Um segundo par de motion-values controla a posição de um reflexo de luz
    (glare) que segue o cursor.
  - Tudo usa MotionValue (sem re-render a cada mousemove) e respeita
    prefers-reduced-motion (rotação fica zerada nesse caso).
*/

import {
  useMotionTemplate,
  useMotionValue,
  useSpring,
  type MotionValue,
} from "framer-motion";
import type { MouseEvent } from "react";

export type Tilt = {
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  glare: MotionValue<string>;
  onMouseMove: (event: MouseEvent<HTMLElement>) => void;
  onMouseLeave: () => void;
};

export function useTilt(max = 6): Tilt {
  /* Usuários que preferem menos movimento não recebem inclinação */
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const limit = reduced ? 0 : max;

  /* Posição do cursor (usada no glare) em porcentagem 0-100 */
  const cursorX = useMotionValue(50);
  const cursorY = useMotionValue(50);

  /* Rotação suavizada (spring) em graus */
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });

  /* Reflexo de luz que acompanha o cursor */
  const glare = useMotionTemplate`radial-gradient(220px circle at ${cursorX}% ${cursorY}%, rgba(255,255,255,0.14), transparent 75%)`;

  function onMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    cursorX.set(x * 100);
    cursorY.set(y * 100);
    rotateY.set((x - 0.5) * 2 * limit);
    rotateX.set((0.5 - y) * 2 * limit);
  }

  function onMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return { rotateX, rotateY, glare, onMouseMove, onMouseLeave };
}