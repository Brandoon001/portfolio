import type { MetaFunction } from "react-router";
import { Hero } from "../components/Hero";
import { Sobre } from "../components/Sobre";
import { Skills } from "../components/Skills";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SITE_URL, site } from "../lib/site";

export const meta: MetaFunction = () => [
  { title: `${site.name} — ${site.role}` },
  {
    name: "description",
    content:
      "Portfólio de Brandoon Silva, desenvolvedor full stack com foco em Java e JavaScript. Construindo aplicações completas com React, Node.js, TypeScript e MySQL.",
  },
  {
    name: "keywords",
    content:
      "Brandoon Silva, desenvolvedor full stack, full stack developer, Java, JavaScript, React, Node.js, TypeScript, MySQL, portfólio",
  },
  { tagName: "link", rel: "canonical", href: SITE_URL },
  { property: "og:type", content: "website" },
  { property: "og:url", content: SITE_URL },
  { property: "og:site_name", content: site.name },
  { property: "og:title", content: `${site.name} — ${site.role}` },
  {
    property: "og:description",
    content:
      "Portfólio de Brandoon Silva. Java, JavaScript, React, Node.js, TypeScript e MySQL.",
  },
  { property: "og:locale", content: "pt_BR" },
  { property: "og:image", content: `${SITE_URL}/og.png` },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: `${site.name} — ${site.role}` },
  {
    name: "twitter:description",
    content:
      "Portfólio de Brandoon Silva. Java, JavaScript, React, Node.js, TypeScript e MySQL.",
  },
  { name: "twitter:image", content: `${SITE_URL}/og.png` },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Sobre />
      <Skills />
      <ProjectsGrid />
    </div>
  );
}