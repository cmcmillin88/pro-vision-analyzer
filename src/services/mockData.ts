import type { KPI, Match, MarketAlert } from "@/types";

export const KPIS: KPI[] = [
  { label: "AI Score", value: "84.2", delta: "+2.1", trend: "up" },
  { label: "Value", value: "12.7%", delta: "+0.8%", trend: "up" },
  { label: "Risknivå", value: "Medel", delta: "Stabil", trend: "neutral" },
  { label: "Jackpot", value: "48.5 M kr", delta: "+1.2 M", trend: "up" },
];

export const MATCHES: Match[] = [
  { id: "1", time: "15:00", league: "Premier League", home: "Arsenal",   away: "Chelsea",    odds: { "1": 1.85, X: 3.60, "2": 4.20 }, aiScore: 87, value: 14.2, status: "upcoming" },
  { id: "2", time: "17:30", league: "La Liga",        home: "Barcelona", away: "Sevilla",    odds: { "1": 1.55, X: 4.10, "2": 5.80 }, aiScore: 91, value:  9.8, status: "upcoming" },
  { id: "3", time: "20:00", league: "Serie A",        home: "Juventus",  away: "Napoli",     odds: { "1": 2.40, X: 3.20, "2": 2.95 }, aiScore: 72, value: 18.5, status: "upcoming" },
  { id: "4", time: "20:45", league: "Bundesliga",     home: "Dortmund",  away: "Leverkusen", odds: { "1": 2.10, X: 3.50, "2": 3.30 }, aiScore: 68, value:  6.1, status: "live" },
  { id: "5", time: "21:00", league: "Ligue 1",        home: "PSG",       away: "Marseille",  odds: { "1": 1.40, X: 4.80, "2": 7.20 }, aiScore: 82, value: 11.4, status: "upcoming" },
];

export const ALERTS: MarketAlert[] = [
  { id: "a1", match: "Arsenal – Chelsea",   market: "1X2",      change: "1.90 → 1.85", severity: "warning", time: "12:04" },
  { id: "a2", match: "Barcelona – Sevilla", market: "Over 2.5", change: "1.75 → 1.62", severity: "danger",  time: "11:47" },
  { id: "a3", match: "Juventus – Napoli",   market: "BTTS",     change: "1.80 → 1.85", severity: "info",    time: "11:12" },
  { id: "a4", match: "PSG – Marseille",     market: "1X2",      change: "1.45 → 1.40", severity: "warning", time: "10:58" },
];
