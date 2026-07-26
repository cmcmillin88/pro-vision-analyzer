import { createFileRoute } from "@tanstack/react-router";
import { MatchDetailsPage } from "@/pages/MatchDetails/MatchDetailsPage";

export const Route = createFileRoute("/matchcenter/$matchId")({
  head: () => ({
    meta: [
      { title: "Matchanalys — Projekt 13" },
      { name: "description", content: "Full matchanalys: AI-panel, form, statistik, odds, streck, skador, startelva och rekommendation." },
      { property: "og:title", content: "Matchanalys — Projekt 13" },
      { property: "og:description", content: "AI-driven analysvy per match med odds, streck, skadeläge och rekommendation." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MatchDetailsRoute,
});

function MatchDetailsRoute() {
  const { matchId } = Route.useParams();
  return <MatchDetailsPage matchId={matchId} />;
}
