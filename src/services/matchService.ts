import { MOCK_MATCHES } from "@/mock/matches";
import { getStatistics, getForm, getIntelligenceScore } from "@/mock/statistics";
import { getOdds, getDistribution } from "@/mock/odds";
import { getMarketAlerts } from "@/mock/marketAlerts";
import { getInjuries } from "@/mock/injuries";
import { getLineups } from "@/mock/lineups";
import { getRecommendation } from "@/mock/recommendations";
import { getNews } from "@/mock/news";
import type { Match } from "@/types";

/**
 * Dataåtkomstlager. Komponenter läser aldrig mockfilerna direkt — byt bara ut
 * implementationen här när riktiga API-källor kopplas in (Sprint 2.x).
 */
export function listMatches(): Match[] {
  return MOCK_MATCHES;
}

export function getMatch(matchId: string): Match | undefined {
  return MOCK_MATCHES.find((m) => m.id === matchId);
}

export function getMatchIntelligence(match: Match) {
  return {
    match,
    form: getForm(match.id, match.home.name, match.away.name),
    statistics: getStatistics(match.id),
    odds: getOdds(match.id),
    distribution: getDistribution(match.id),
    marketAlerts: getMarketAlerts(match.id),
    injuries: getInjuries(match.home.name, match.away.name),
    lineups: getLineups(match.id, match.home.name, match.away.name),
    recommendation: getRecommendation(match),
    news: getNews(match.id),
    mis: getIntelligenceScore(match.id, match.aiScore),
  };
}

export type MatchIntelligence = ReturnType<typeof getMatchIntelligence>;
