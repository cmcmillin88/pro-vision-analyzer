import type { KPI } from "@/types";
import { MOCK_MATCHES } from "@/mock/matches";
import { MOCK_ODDS_ALERTS } from "@/mock/marketAlerts";
import { getOdds } from "@/mock/odds";

export const KPIS: KPI[] = [
  { label: "AI Score", value: "84.2", delta: "+2.1", trend: "up" },
  { label: "Value", value: "12.7%", delta: "+0.8%", trend: "up" },
  { label: "Risknivå", value: "Medel", delta: "Stabil", trend: "neutral" },
  { label: "Jackpot", value: "48.5 M kr", delta: "+1.2 M", trend: "up" },
];

/** Dashboardens matchurval (topp 5 från kupongen). */
export const MATCHES = MOCK_MATCHES.slice(0, 5);
export const ALERTS = MOCK_ODDS_ALERTS;

export { getOdds };
