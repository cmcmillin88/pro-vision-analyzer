import { createFileRoute } from "@tanstack/react-router";
import { Ticket } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/kupong")({
  head: () => ({ meta: [
    { title: "Kupong — Projekt 13" },
    { name: "description", content: "Bygg och analysera kuponger." },
  ]}),
  component: () => <PlaceholderPage title="Kupong" description="Bygg, spara och utvärdera kuponger." icon={Ticket} />,
});
