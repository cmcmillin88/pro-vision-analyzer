import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/ai")({
  head: () => ({ meta: [
    { title: "AI — Projekt 13" },
    { name: "description", content: "AI-modeller, signaler och konfiguration." },
  ]}),
  component: () => <PlaceholderPage title="AI" description="AI-motor, signaler och prediktioner." icon={Sparkles} />,
});
