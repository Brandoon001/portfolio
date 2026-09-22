/*
  ThemeProvider: apenas uma ponte tipada para o provedor de tema do
  "next-themes". As configurações reais ficam no app/root.tsx
  (attribute="class", defaultTheme="system", etc.).
*/

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}