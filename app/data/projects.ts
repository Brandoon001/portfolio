/*
  Dados dos projetos exibidos no portfólio.
  Cada projeto tem:
  - Informações para o card (title, tagline, stack, status...)
  - Textos da página de detalhes (problem, solution, features)
  - "gradient": par de cores [origem, destino] usadas no banner e nos detalhes
    (cada projeto tem sua própria identidade de cor)
*/

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: "Concluído" | "Em desenvolvimento";
  role: string;
  stack: string[];
  description: string;
  problem: string;
  solution: string;
  features: string[];
  github: string;
  image: string;
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    slug: "fintrack",
    title: "FinTrack",
    tagline: "Sistema de controle financeiro em Java",
    year: "2026",
    status: "Concluído",
    role: "Desenvolvimento completo",
    stack: ["Java", "Maven", "POO"],
    description:
      "Sistema de controle financeiro executado via terminal que permite cadastrar receitas e despesas, listar transações, calcular o saldo total e remover registros, aplicando conceitos de orientação a objetos.",
    problem:
      "Controlar finanças pessoais em planilhas é trabalhoso e propenso a erros. Era preciso de um sistema simples, direto e com regras sólidas de validação.",
    solution:
      "Aplicação em Java com arquitetura em camadas que separa regras de negócio, dados e apresentação. Todas as entradas são validadas e erros são tratados com exceções personalizadas.",
    features: [
      "Cadastro de receitas e despesas",
      "Listagem e remoção de transações",
      "Cálculo do saldo total",
      "Validação de entradas",
      "Exceções personalizadas",
      "Registro automático da data",
      "Formatação de valores em Real (R$)",
    ],
    github: "https://github.com/Brandoon001/fintrack",
    image: "/projects/fintrack.png",
    gradient: ["#2563eb", "#7c3aed"],
  },
  {
    slug: "nlw-agents",
    title: "NLW Agents",
    tagline: "Assistente com Inteligência Artificial",
    year: "2026",
    status: "Concluído",
    role: "Desenvolvimento completo",
    stack: ["JavaScript", "HTML", "CSS", "Gemini API"],
    description:
      "Aplicação web desenvolvida durante a Next Level Week da Rocketseat. O usuário informa sua API Key do Google Gemini, escolhe um jogo e faz perguntas — a IA responde em tempo real com estratégias e dicas.",
    problem:
      "Criar uma interface que conectasse usuários à API do Google Gemini de forma simples, com troca de linguagem de jogos e respostas em formato Markdown.",
    solution:
      "Front-end com JavaScript ES6+ consumindo a API do Gemini via Fetch API. As respostas em Markdown são convertidas automaticamente para HTML com o Showdown.js, com feedback visual durante o carregamento.",
    features: [
      "Seleção de diferentes jogos",
      "Integração com a API do Google Gemini",
      "Respostas em tempo real",
      "Conversão de Markdown para HTML",
      "Interface moderna e responsiva",
      "Feedback visual de carregamento",
    ],
    github: "https://github.com/Brandoon001/NLW",
    image: "/projects/nlw-agents.png",
    gradient: ["#f59e0b", "#ef4444"],
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    tagline: "Gerenciador de tarefas com API REST",
    year: "2026",
    status: "Concluído",
    role: "Desenvolvimento completo",
    stack: ["JavaScript", "HTML", "CSS", "JSON Server"],
    description:
      "Aplicação web para gerenciamento de tarefas com CRUD completo, criada com HTML, CSS e JavaScript e alimentada por uma API REST simulada com JSON Server.",
    problem:
      "Organizar tarefas diárias de forma rápida, com busca pelo título e persistência dos dados sem a complexidade de um servidor completo.",
    solution:
      "Interface responsiva com modal de cadastro, busca em tempo real e data de criação em cada tarefa. A persistência é feita via JSON Server, simulando uma API REST de verdade.",
    features: [
      "Criar, listar e excluir tarefas",
      "Pesquisa pelo título",
      "Exibição da data de criação",
      "Modal de cadastro",
      "Interface responsiva",
    ],
    github: "https://github.com/Brandoon001/task-manager",
    image: "/projects/task-manager.png",
    gradient: ["#06b6d4", "#3b82f6"],
  },
];