import type { MetaFunction } from "react-router";
import { NotFound } from "../components/NotFound";

export const meta: MetaFunction = () => [
  { title: "Página não encontrada · Brandoon Silva" },
  { name: "robots", content: "noindex" },
];

export default function NotFoundPage() {
  return <NotFound />;
}