import type { MatchIntelligenceScore, Statistic, TeamForm } from "@/types";

/** Statistikplattform: samma nycklar för alla matcher så nya datakällor kan mappas rakt in. */
export const STATISTIC_KEYS = [
  { key: "xg", label: "xG", unit: "", hint: "Förväntade mål" },
  { key: "xga", label: "xGA", unit: "", hint: "Förväntade insläppta mål" },
  { key: "possession", label: "Bollinnehav", unit: "%" },
  { key: "shots", label: "Skott", unit: "" },
  { key: "shotsOnTarget", label: "Skott på mål", unit: "" },
  { key: "corners", label: "Hörnor", unit: "" },
  { key: "yellowCards", label: "Gula kort", unit: "" },
  { key: "redCards", label: "Röda kort", unit: "" },
] as const;

const STAT_VALUES: Record<string, Array<[number, number]>> = {
  default: [
    [1.72, 1.18], [1.05, 1.44], [54, 46], [14.2, 10.8],
    [5.4, 4.1], [6.2, 4.8], [2.1, 2.4], [0.1, 0.2],
  ],
  "2": [
    [2.31, 0.86], [0.94, 1.92], [63, 37], [17.4, 7.9],
    [7.1, 2.8], [7.4, 3.1], [1.6, 2.9], [0.05, 0.3],
  ],
  "3": [
    [1.28, 1.35], [1.31, 1.24], [49, 51], [11.6, 12.1],
    [4.2, 4.6], [5.1, 5.4], [2.6, 2.5], [0.2, 0.2],
  ],
};

export function getStatistics(matchId: string): Statistic[] {
  const values = STAT_VALUES[matchId] ?? STAT_VALUES.default;
  return STATISTIC_KEYS.map((s, i) => ({
    key: s.key,
    label: s.label,
    unit: s.unit,
    hint: "hint" in s ? s.hint : undefined,
    home: values[i][0],
    away: values[i][1],
  }));
}

export const MOCK_FORM: Record<string, { home: TeamForm; away: TeamForm }> = {
  default: {
    home: { teamId: "home", teamName: "Hemmalag", results: ["W", "W", "D", "L", "W"], wins: 3, draws: 1, losses: 1, goalsFor: 9, goalsAgainst: 5 },
    away: { teamId: "away", teamName: "Bortalag", results: ["L", "D", "W", "D", "L"], wins: 1, draws: 2, losses: 2, goalsFor: 6, goalsAgainst: 8 },
  },
};

export function getForm(matchId: string, homeName: string, awayName: string) {
  const base = MOCK_FORM[matchId] ?? MOCK_FORM.default;
  return {
    home: { ...base.home, teamName: homeName },
    away: { ...base.away, teamName: awayName },
  };
}

/** Match Intelligence Score — internt objekt som AI-motorn läser i kommande sprintar. */
const MIS_BASE: Omit<MatchIntelligenceScore, "matchId" | "total"> = {
  form: 78,
  statistics: 82,
  xg: 74,
  odds: 69,
  distribution: 63,
  injuries: 71,
  motivation: 80,
  market: 66,
  news: 58,
  history: 76,
};

export function getIntelligenceScore(matchId: string, aiScore: number): MatchIntelligenceScore {
  const offset = (Number(matchId) % 5) - 2;
  const parts = Object.fromEntries(
    Object.entries(MIS_BASE).map(([k, v]) => [k, Math.max(0, Math.min(100, v + offset * 3))]),
  ) as Omit<MatchIntelligenceScore, "matchId" | "total">;
  return { matchId, ...parts, total: aiScore };
}
