export type RiskLevel = "low" | "medium" | "high";
export type MatchStatus = "upcoming" | "live" | "finished";
export type Sign = "1" | "X" | "2";
export type FormResult = "W" | "D" | "L";
export type Trend = "up" | "down" | "stable";
export type Severity = "info" | "warning" | "danger";

/* ---------- Core ---------- */

export interface Team {
  id: string;
  name: string;
  shortName: string;
  league: string;
}

export interface Match {
  id: string;
  number: number;
  home: Team;
  away: Team;
  league: string;
  date: string;
  kickoff: string;
  venue: string;
  referee: string;
  status: MatchStatus;
  aiScore: number;
  valueScore: number;
  confidence: number;
  risk: RiskLevel;
  recommendedSign: Sign;
}

/* ---------- Form ---------- */

export interface TeamForm {
  teamId: string;
  teamName: string;
  results: FormResult[];
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
}

/* ---------- Statistik ---------- */

export interface Statistic {
  key: string;
  label: string;
  home: number;
  away: number;
  unit?: string;
  hint?: string;
}

/* ---------- Odds & streck ---------- */

export interface OddsMovement {
  selection: Sign;
  from: number;
  to: number;
  at: string;
}

export interface Odds {
  matchId: string;
  home: number;
  draw: number;
  away: number;
  movement: OddsMovement;
  trend: Trend;
}

export interface Distribution {
  matchId: string;
  home: number;
  draw: number;
  away: number;
}

/* ---------- Skador & lineup ---------- */

export type InjuryStatus = "out" | "doubtful" | "fit";

export interface Injury {
  id: string;
  player: string;
  position: string;
  status: InjuryStatus;
  comment: string;
  team: string;
}

export interface LineupPlayer {
  number: number;
  name: string;
  position: string;
}

export interface Lineup {
  matchId: string;
  team: string;
  formation: string;
  players: LineupPlayer[];
}

/* ---------- Marknad, nyheter, rekommendation ---------- */

export type MarketAlertType =
  | "odds_drop"
  | "steam_move"
  | "sharp_money"
  | "overbet_favourite"
  | "value_alert";

export interface MarketAlert {
  id: string;
  matchId: string;
  type: MarketAlertType;
  title: string;
  description: string;
  severity: Severity;
  time: string;
}

export interface NewsItem {
  id: string;
  source: string;
  headline: string;
  summary: string;
  publishedAt: string;
}

export interface Recommendation {
  matchId: string;
  sign: Sign;
  motivation: string;
  confidence: number;
  risk: RiskLevel;
}

/* ---------- Match Intelligence Score (AI-förberedelse) ---------- */

export interface MatchIntelligenceScore {
  matchId: string;
  form: number;
  statistics: number;
  xg: number;
  odds: number;
  distribution: number;
  injuries: number;
  motivation: number;
  market: number;
  news: number;
  history: number;
  total: number;
}

/* ---------- Dashboard ---------- */

export interface OddsAlert {
  id: string;
  match: string;
  market: string;
  change: string;
  severity: Severity;
  time: string;
}

export interface KPI {
  label: string;
  value: string;
  delta?: string;
  trend?: "up" | "down" | "neutral";
}
