# Brandoon.dev — Portfólio

Site portfólio de Brandoon Silva, desenvolvedor full stack com foco em Java e JavaScript.

## Stack

- React 19 + TypeScript
- Vite + React Router (framework mode, SSG/SPA Mode)
- Tailwind CSS v4 (dark mode por classe)
- Framer Motion, next-themes, Lucide Icons
- Fontes: Geist / Geist Mono (fontsource)

## Scripts

```bash
npm run dev          # ambiente de desenvolvimento
npm run build        # build de produção (pré-renderiza /, /projetos/* e fallback SPA)
npm run start        # serve a pasta build/client
npm run lint         # eslint
npm run generate:og  # regenera public/og.png (1200x630) via sharp
```

## Estrutura

```
app/
  pages/             # rotas renderizadas (home, projetos/[slug], 404)
  components/        # UI (Navbar, Hero, Sobre, Skills, ProjectCard, etc.)
  data/projects.ts   # dados dos projetos
  lib/site.ts        # config do site (nome, links, SITE_URL)
react-router.config.ts  # SSG: ssr false + prerender das páginas
vercel.json             # headers de segurança + rewrite SPA + build/output
```

## SEO & Segurança

- `meta()` do React Router por rota (title, description, canonical, Open Graph, Twitter)
- JSON-LD `Person` no `<head>`
- `sitemap.xml`, `robots.txt`, `og.png` e `favicon.svg`
- Headers via `vercel.json`: CSP, `Referrer-Policy`, `nosniff`, `frame-ancestors none`
- Links externos sempre com `rel="noopener noreferrer"`