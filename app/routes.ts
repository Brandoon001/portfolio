/*
  Configuração das rotas da aplicação.
  - "/" → página inicial (Hero, Sobre, Skills, Projetos)
  - "/projetos/:slug" → página de detalhes de um projeto
  - "*" → fallback para página 404
*/

import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./pages/home.tsx"),
  route("/projetos/:slug", "./pages/projects.$slug.tsx"),
  route("*", "./pages/not-found.tsx"),
] satisfies RouteConfig;