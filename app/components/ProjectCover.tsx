/*
  ProjectCover: miniatura da interface ("mini-mockup") de cada projeto,
  exibida na capa do card e no banner da página de detalhes.

  Cada projeto tem uma mini-UI própria construída em JSX puro (sem imagens),
  usando as cores do gradiente do projeto para manter a identidade:
  - FinTrack     → mini terminal com saldo (azul → violeta)
  - NLW Agents   → mini chat com um bot (âmbar → vermelho)
  - Task Manager → mini lista de tarefas (ciano → azul)

  Todo o conteúdo é decorativo (aria-hidden no uso). A variante define o
  tamanho: "card" (compacta) ou "banner" (grande).
*/

import { motion } from "framer-motion";
import {
  Bot,
  Check,
  Send,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "../data/projects";

type Variant = "card" | "banner";

/* Classes de tamanho por variante (textos, espaçamento e largura do painel) */
const sizes: Record<
  Variant,
  { frame: string; text: string; title: string; gap: string }
> = {
  card: {
    frame: "w-36 rounded-xl p-2.5 sm:w-44",
    text: "text-[10px]",
    title: "text-[11px]",
    gap: "space-y-2",
  },
  banner: {
    frame: "w-64 rounded-2xl p-4 md:w-80",
    text: "text-xs md:text-sm",
    title: "text-sm md:text-base",
    gap: "space-y-3",
  },
};

/* Pontinho da "barra de janela" (estilo macOS) */
function Dot() {
  return <span className="size-1.5 rounded-full bg-zinc-500/70" aria-hidden />;
}

/* Mini checkbox estilizado (usado no Task Manager) */
function Checkbox({ checked }: { checked: boolean }) {
  return (
    <span
      aria-hidden
      className={`inline-flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border ${
        checked ? "border-blue-400 bg-blue-500/70" : "border-zinc-400/60"
      }`}
    >
      {checked && <Check className="size-2.5 text-white" strokeWidth={3} />}
    </span>
  );
}

/* Painel compartilhado: fundo glass escuro para legibilidade sobre o gradiente */
function Pane({
  size,
  children,
}: {
  size: Variant;
  children: ReactNode;
}) {
  return (
    <div
      className={`relative border border-white/10 bg-zinc-900/50 shadow-2xl backdrop-blur-md ${sizes[size].frame} ${sizes[size].gap}`}
    >
      {children}
    </div>
  );
}

/* ---- FinTrack: mini terminal de finanças ---- */
function FinTrack({ from, to, size }: { from: string; to: string; size: Variant }) {
  const s = sizes[size];
  return (
    <Pane size={size}>
      {/* Ícone "marca" do app no canto */}
      <div
        aria-hidden
        className="absolute -right-2 -top-2 inline-flex size-7 items-center justify-center rounded-lg shadow-lg"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <Wallet className="size-3.5 text-white" strokeWidth={2} />
      </div>

      {/* Barra de janela */}
      <div className="flex items-center gap-1">
        <Dot />
        <Dot />
        <Dot />
        <span className={`ml-1 font-mono uppercase tracking-wider text-zinc-400 ${s.text}`}>
          fintrack
        </span>
      </div>

      {/* Linhas estilo terminal */}
      <div className={`font-mono leading-relaxed text-zinc-100 ${s.text}`}>
        <p>
          <span className="text-emerald-400">$</span> saldo
        </p>
        <p className="text-zinc-400">Saldo atual</p>
        <p className={`font-semibold text-white ${s.title}`}>R$ 1.250,00</p>
      </div>

      {/* Entradas/saídas */}
      <div className={`flex items-center gap-1.5 font-mono ${s.text}`}>
        <span className="inline-flex items-center gap-1 rounded bg-emerald-500/20 px-1.5 py-0.5 text-emerald-300">
          <TrendingUp className="size-3" strokeWidth={2} aria-hidden /> R$ 350,00
        </span>
        <span className="inline-flex items-center gap-1 rounded bg-rose-500/20 px-1.5 py-0.5 text-rose-300">
          <TrendingDown className="size-3" strokeWidth={2} aria-hidden /> R$ 120,00
        </span>
      </div>
    </Pane>
  );
}

/* ---- NLW Agents: mini chat com um bot ---- */
function NlwAgents({ from, to, size }: { from: string; to: string; size: Variant }) {
  const s = sizes[size];
  return (
    <Pane size={size}>
      {/* Cabeçalho do chat */}
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="inline-flex size-6 items-center justify-center rounded-full shadow"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        >
          <Bot className="size-3.5 text-white" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p className={`font-semibold leading-tight text-white ${s.title}`}>
            NLW Agents
          </p>
          <p className={`flex items-center gap-1 text-zinc-400 ${s.text}`}>
            <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
            online
          </p>
        </div>
      </div>

      {/* Mensagens */}
      <div className={`space-y-1.5 ${s.text} text-zinc-100`}>
        <div className="ml-8 rounded-lg rounded-tr-sm bg-blue-500/30 px-2 py-1">
          Monte meu time!
        </div>
        <div className="mr-8 rounded-lg rounded-tl-sm bg-white/10 px-2 py-1">
          Comece por Cartun Ville. {}
          <span className="text-zinc-400">Evolua rápido!</span>
        </div>
      </div>

      {/* Indicador "digitando" */}
      <div className={`flex items-center gap-1 text-zinc-400 ${s.text}`}>
        <Send className="size-3" strokeWidth={2} aria-hidden />
        <span className="flex items-center gap-0.5">
          <span className="terminal-dot size-1 rounded-full bg-zinc-300" />
          <span className="terminal-dot size-1 rounded-full bg-zinc-300" />
          <span className="terminal-dot size-1 rounded-full bg-zinc-300" />
        </span>
        digitando
      </div>
    </Pane>
  );
}

/* ---- Task Manager: mini lista com checkboxes ---- */
function TaskManager({ from, size }: { from: string; size: Variant }) {
  const s = sizes[size];
  const tasks = [
    { label: "Estudar React", done: true },
    { label: "Praticar TS", done: false },
    { label: "Revisar portfólio", done: false },
  ];
  return (
    <Pane size={size}>
      {/* Cabeçalho da lista */}
      <div className="flex items-center justify-between">
        <p className={`font-semibold leading-tight text-white ${s.title}`}>
          Task Manager
        </p>
        <span
          aria-hidden
          className="size-2 rounded-full"
          style={{ background: from }}
        />
      </div>

      {/* Linhas de tarefa */}
      <ul className={`space-y-1.5 ${s.text} text-zinc-100`}>
        {tasks.map((task) => (
          <li
            key={task.label}
            className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1"
          >
            <Checkbox checked={task.done} />
            <span className={task.done ? "text-zinc-500 line-through" : "text-zinc-200"}>
              {task.label}
            </span>
          </li>
        ))}
      </ul>

      {/* Ação "nova tarefa" */}
      <p className={`font-medium text-white/70 ${s.text}`}>+ nova tarefa</p>
    </Pane>
  );
}

/* ---- Componente principal ---- */
export function ProjectCover({
  project,
  variant = "card",
  animateFloat = false,
}: {
  project: Project;
  variant?: Variant;
  animateFloat?: boolean;
}) {
  const [from, to] = project.gradient;

  let content: ReactNode;
  switch (project.slug) {
    case "fintrack":
      content = <FinTrack from={from} to={to} size={variant} />;
      break;
    case "nlw-agents":
      content = <NlwAgents from={from} to={to} size={variant} />;
      break;
    case "task-manager":
      content = <TaskManager from={from} size={variant} />;
      break;
    default:
      content = null;
  }

  /* Ponteiro de eventos desativado: o mockup é decorativo */
  const inner = (
    <div aria-hidden className="pointer-events-none select-none">
      {content}
    </div>
  );

  // No banner, o mockup "levita" em loop contínuo (movimento sutil)
  if (animateFloat) {
    return (
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        {inner}
      </motion.div>
    );
  }

  return inner;
}