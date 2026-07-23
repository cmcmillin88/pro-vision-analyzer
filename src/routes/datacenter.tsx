import { createFileRoute } from "@tanstack/react-router";
import { Database } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/datacenter")({
  head: () => ({ meta: [
    { title: "Datacenter — Projekt 13" },
    { name: "description", content: "Datakällor, integrationer och synkstatus." },
  ]}),
  component: () => <PlaceholderPage title="Datacenter" description="Datakällor, integrationer och synkstatus." icon={Database} />,
});
