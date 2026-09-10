import type { ReactNode } from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { SITE_URL, site } from "./lib/site";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./app.css";

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
    <html lang="pt-BR" className="h-full antialiased">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4f46e5" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
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