export type RiskLevel = "low" | "medium" | "high";
export type MatchStatus = "upcoming" | "live" | "finished";

export interface Match {
  id: string;
  time: string;
  league: string;
  home: string;
  away: string;
  odds: { "1": number; X: number; "2": number };
  aiScore: number;
  value: number;
  status: MatchStatus;
}

export interface MarketAlert {
  id: string;
  match: string;
  market: string;
  change: string;
  severity: "info" | "warning" | "danger";
  time: string;
}

export interface KPI {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "neutral";
}
