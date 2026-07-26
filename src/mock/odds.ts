import type { Distribution, Odds } from "@/types";

export const MOCK_ODDS: Record<string, Omit<Odds, "matchId">> = {
  "1": { home: 1.85, draw: 3.60, away: 4.20, movement: { selection: "1", from: 1.90, to: 1.85, at: "12:04" }, trend: "down" },
  "2": { home: 1.55, draw: 4.10, away: 5.80, movement: { selection: "1", from: 1.62, to: 1.55, at: "11:47" }, trend: "down" },
  "3": { home: 2.40, draw: 3.20, away: 2.95, movement: { selection: "X", from: 3.10, to: 3.20, at: "11:12" }, trend: "up" },
  default: { home: 2.10, draw: 3.40, away: 3.30, movement: { selection: "1", from: 2.05, to: 2.10, at: "10:58" }, trend: "stable" },
};

export function getOdds(matchId: string): Odds {
  return { matchId, ...(MOCK_ODDS[matchId] ?? MOCK_ODDS.default) };
}

export const MOCK_DISTRIBUTION: Record<string, Omit<Distribution, "matchId">> = {
  "1": { home: 58, draw: 24, away: 18 },
  "2": { home: 72, draw: 17, away: 11 },
  "3": { home: 34, draw: 29, away: 37 },
  default: { home: 46, draw: 27, away: 27 },
};

export function getDistribution(matchId: string): Distribution {
  return { matchId, ...(MOCK_DISTRIBUTION[matchId] ?? MOCK_DISTRIBUTION.default) };
}
