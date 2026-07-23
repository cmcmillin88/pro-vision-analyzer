import { createFileRoute } from "@tanstack/react-router";
import { History } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/efteranalys")({
  head: () => ({ meta: [
    { title: "Efteranalys — Projekt 13" },
    { name: "description", content: "Utvärdera resultat och lärdomar." },
  ]}),
  component: () => <PlaceholderPage title="Efteranalys" description="Utvärdera tidigare kuponger och beslut." icon={History} />,
});
