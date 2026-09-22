/*
  entry.client: ponto de entrada do lado do cliente.
  Hidrata o HTML já renderizado no servidor (SSR) com o React no navegador.
*/
import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

hydrateRoot(
  document,
  <StrictMode>
    <HydratedRouter />
  </StrictMode>,
);