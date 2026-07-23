import { createFileRoute } from "@tanstack/react-router";
import { LineChart } from "lucide-react";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/marknaden")({
  head: () => ({ meta: [
    { title: "Marknaden — Projekt 13" },
    { name: "description", content: "Oddsrörelser och marknadsanalys i realtid." },
  ]}),
  component: () => <PlaceholderPage title="Marknaden" description="Följ oddsrörelser och marknadssignaler." icon={LineChart} />,
});
