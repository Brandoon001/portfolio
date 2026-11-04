/*
  Layout raiz de todas as páginas.
  Aqui ficam: metadados globais, dados estruturados (SEO), provedor de tema
  (claro/escuro) e a configuração de redução de movimento para as animações.
*/

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { SITE_URL, site } from "./lib/site";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./app.css";

/*
  Dados estruturados (schema.org) para SEO: descrevem a "Person" para o
  Google, melhorando o perfil do autor nos resultados de busca.
*/
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: SITE_URL,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  image: site.avatar,
  sameAs: [site.github, site.linkedin],
  knowsAbout: [
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "MySQL",
    "HTML",
    "CSS",
  ],
};

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Cor usada pelo navegador na barra de endereço (mobile) — azul da identidade */}
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#f7f6f2" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#08080a" />
        <meta name="author" content={site.name} />
        <link rel="preconnect" href="https://avatars.githubusercontent.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col overflow-x-clip bg-background text-foreground">
        {/*
          ThemeProvider: gerencia tema claro/escuro/sistema e aplica a classe
          .dark na <html> automaticamente.
          disableTransitionOnChange evita "piscadas" ao trocar de tema.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*
            MotionConfig reducedMotion="user": instrui o framer-motion a NÃO
            animar transformações (movimento) para quem prefere menos movimento,
            mantendo apenas as transições de opacidade.
          */}
          <MotionConfig reducedMotion="user">
            <Navbar />
            {/* Outlet renderiza a página de cada rota */}
            <main className="flex-1">{children}</main>
            <Footer />
          </MotionConfig>
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}