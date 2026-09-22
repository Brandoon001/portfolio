/*
  useActiveSection: hook de "scroll-spy".

  Retorna o id da seção atualmente visível na tela. Usado pela Navbar para
  destacar o link da seção em que o usuário está.

  Como funciona:
  - Um IntersectionObserver observa cada elemento (por id).
  - rootMargin "-45% 0px -50% 0px" cria uma "faixa central" de detecção: uma
    seção só é considerada ativa quando cruza o meio da tela.
  - Entre várias seções visíveis, escolhe a de maior intersectionRatio
    (a mais "presente" na faixa central).
*/

import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  /* Estado inicial = primeiro id da lista (ex.: "inicio") */
  const [activeId, setActiveId] = useState<string>(() => ids[0] ?? "");

  useEffect(() => {
    // Guarda para ambientes sem IntersectionObserver (pouco comum hoje)
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    // Observa cada seção da página que tenha um id correspondente
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}