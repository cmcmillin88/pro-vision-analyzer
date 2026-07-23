import { createFileRoute } from "@tanstack/react-router";
import { Settings } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/installningar")({
  head: () => ({ meta: [
    { title: "Inställningar — Projekt 13" },
    { name: "description", content: "Konfigurera konto, preferenser och integrationer." },
  ]}),
  component: () => <PlaceholderPage title="Inställningar" description="Konfigurera konto, preferenser och integrationer." icon={Settings} />,
});
