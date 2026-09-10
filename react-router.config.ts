import type { Config } from "@react-router/dev/config";
import { projects } from "./app/data/projects";

export default {
  ssr: false,
  prerender: () => ["/", ...projects.map((project) => `/projetos/${project.slug}`)],
} satisfies Config;