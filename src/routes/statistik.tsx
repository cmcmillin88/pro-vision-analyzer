import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/statistik")({
  head: () => ({ meta: [
    { title: "Statistik — Projekt 13" },
    { name: "description", content: "Djupgående statistik och nyckeltal." },
  ]}),
  component: () => <PlaceholderPage title="Statistik" description="Historisk statistik och nyckeltal." icon={BarChart3} />,
});
