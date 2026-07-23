import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/matchcenter")({
  head: () => ({ meta: [
    { title: "Matchcenter — Projekt 13" },
    { name: "description", content: "Detaljerad översikt över matcher och lag." },
  ]}),
  component: () => <PlaceholderPage title="Matchcenter" description="Analys av matcher, lag och form." icon={Trophy} />,
});
