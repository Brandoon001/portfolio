/*
  Sobre: seção (id "sobre") com a apresentação pessoal.
  Estrutura em 2 colunas que entram com "reveal" (animam ao rolar até a tela):
  - Esquerda: textos e lista de diferenciais.
  - Direita: card de "código" estilizado como janela de terminal, com os
    pontos (vermelho/amarelo/verde) piscando em cascata.
*/

import { UserRound } from "lucide-react";
import { Reveal } from "./motion";

export function Sobre() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Coluna esquerda: texto de apresentação */}
        <Reveal>
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
              <UserRound className="size-3.5" aria-hidden />
              Sobre mim
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Desenvolvedor em constante evolução
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estudo programação com foco em construir soluções completas: do
              banco de dados ao front-end. Tenho base sólida em{" "}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                Java
              </strong>{" "}
              e{" "}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                JavaScript
              </strong>
              , com especial interesse em aplicações web escaláveis.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Atualmente me aprofundo em{" "}
              <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                React, TypeScript, Node.js e MySQL
              </strong>{" "}
              para atuar como full stack com produtividade e boas práticas.
            </p>

            {/* Lista de diferenciais, com pontinhos alternando azul/violeta */}
            <ul className="mt-6 grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-500" aria-hidden />
                APIs REST e integrações
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-violet-500" aria-hidden />
                Programação Orientada a Objetos
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-500" aria-hidden />
                Interfaces responsivas
              </li>
              <li className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-violet-500" aria-hidden />
                Modelagem de dados
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Coluna direita: card "terminal" (entra com pequeno atraso) */}
        <Reveal delay={0.15}>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              {/* Barra superior da janela: pontos piscando (terminal-dot) */}
              <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-100 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900">
                <span
                  className="terminal-dot size-3 rounded-full bg-red-400"
                  aria-hidden
                />
                <span
                  className="terminal-dot size-3 rounded-full bg-amber-400"
                  aria-hidden
                />
                <span
                  className="terminal-dot size-3 rounded-full bg-green-400"
                  aria-hidden
                />
                <span className="ml-2 font-mono text-xs text-zinc-500">
                  Brandoon.java
                </span>
              </div>
              {/* Código sintetizado em Java, com destaque de sintaxe manual */}
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-zinc-700 dark:text-zinc-300">
                <code>
                  <span className="text-violet-600 dark:text-violet-400">
                    public class
                  </span>{" "}
                  Brandoon {"{"}
                  {"\n"}
                  {"  "}
                  String nome ={" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"Brandoon Silva"'}
                  </span>
                  ;{"\n"}
                  {"  "}
                  String cargo ={" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"Dev Full Stack"'}
                  </span>
                  ;{"\n"}
                  {"  "}
                  String[] linguagens = {"{"}
                  {'"Java"'}
                  ,{" "}
                  {'"JavaScript"'}
                  {"}"};{"\n"}
                  {"  "}
                  String[] estudando = {"{"}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"React"'}
                  </span>
                  ,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"TypeScript"'}
                  </span>
                  ,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"Node.js"'}
                  </span>
                  ,{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">
                    {'"MySQL"'}
                  </span>
                  {"}"};{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}