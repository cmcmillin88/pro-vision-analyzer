import type { MarketAlert, OddsAlert } from "@/types";

export const MOCK_MARKET_ALERTS: MarketAlert[] = [
  { id: "m1", matchId: "1", type: "odds_drop", title: "Oddsfall", description: "1-odds ned från 1.90 till 1.85 senaste timmen.", severity: "warning", time: "12:04" },
  { id: "m2", matchId: "1", type: "steam_move", title: "Steam Move", description: "Samtidig rörelse hos flera större operatörer.", severity: "danger", time: "11:52" },
  { id: "m3", matchId: "1", type: "sharp_money", title: "Sharp Money", description: "Professionella pengar indikerade på hemmasidan.", severity: "info", time: "11:20" },
  { id: "m4", matchId: "1", type: "overbet_favourite", title: "Överstreckad favorit", description: "Streckningen ligger 9 % över modellens sannolikhet.", severity: "warning", time: "10:58" },
  { id: "m5", matchId: "1", type: "value_alert", title: "Value Alert", description: "Modellen ser 14.2 % värde på rekommenderat tecken.", severity: "info", time: "10:31" },
];

export function getMarketAlerts(matchId: string): MarketAlert[] {
  return MOCK_MARKET_ALERTS.map((a) => ({ ...a, matchId }));
}

/** Dashboardens oddsrörelser. */
export const MOCK_ODDS_ALERTS: OddsAlert[] = [
  { id: "a1", match: "Arsenal – Chelsea", market: "1X2", change: "1.90 → 1.85", severity: "warning", time: "12:04" },
  { id: "a2", match: "Barcelona – Sevilla", market: "Over 2.5", change: "1.75 → 1.62", severity: "danger", time: "11:47" },
  { id: "a3", match: "Juventus – Napoli", market: "BTTS", change: "1.80 → 1.85", severity: "info", time: "11:12" },
  { id: "a4", match: "PSG – Marseille", market: "1X2", change: "1.45 → 1.40", severity: "warning", time: "10:58" },
];
