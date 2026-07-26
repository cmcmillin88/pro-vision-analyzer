import { createFileRoute } from "@tanstack/react-router";
import { MatchCenterPage } from "@/pages/MatchCenter/MatchCenterPage";

export const Route = createFileRoute("/matchcenter/")({
  head: () => ({
    meta: [
      { title: "Matchcenter — Projekt 13" },
      { name: "description", content: "Samtliga matcher på kupongen med AI Score, streck och rekommenderat tecken." },
      { property: "og:title", content: "Matchcenter — Projekt 13" },
      { property: "og:description", content: "Matchlista med AI-utvärdering för Stryktipset, Europatipset och Topptipset." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatchCenterPage,
});
