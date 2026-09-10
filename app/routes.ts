import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "./pages/home.tsx"),
  route("/projetos/:slug", "./pages/projects.$slug.tsx"),
  route("*", "./pages/not-found.tsx"),
] satisfies RouteConfig;