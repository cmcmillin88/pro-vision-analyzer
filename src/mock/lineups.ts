import type { Lineup, LineupPlayer } from "@/types";

const HOME_PLAYERS: LineupPlayer[] = [
  { number: 1, name: "D. Raya", position: "MV" },
  { number: 4, name: "B. White", position: "HB" },
  { number: 2, name: "W. Saliba", position: "MB" },
  { number: 6, name: "G. Magalhães", position: "MB" },
  { number: 35, name: "O. Zinchenko", position: "VB" },
  { number: 5, name: "T. Partey", position: "CM" },
  { number: 41, name: "D. Rice", position: "CM" },
  { number: 8, name: "M. Ødegaard", position: "OM" },
  { number: 7, name: "B. Saka", position: "HY" },
  { number: 11, name: "G. Martinelli", position: "VY" },
  { number: 9, name: "K. Havertz", position: "FW" },
];

const AWAY_PLAYERS: LineupPlayer[] = [
  { number: 1, name: "R. Sánchez", position: "MV" },
  { number: 24, name: "R. James", position: "HB" },
  { number: 6, name: "T. Silva", position: "MB" },
  { number: 26, name: "L. Colwill", position: "MB" },
  { number: 3, name: "M. Cucurella", position: "VB" },
  { number: 8, name: "E. Fernández", position: "CM" },
  { number: 25, name: "M. Caicedo", position: "CM" },
  { number: 20, name: "C. Palmer", position: "OM" },
  { number: 7, name: "R. Sterling", position: "HY" },
  { number: 11, name: "N. Madueke", position: "VY" },
  { number: 15, name: "N. Jackson", position: "FW" },
];

export function getLineups(matchId: string, homeTeam: string, awayTeam: string): Lineup[] {
  return [
    { matchId, team: homeTeam, formation: "4-3-3", players: HOME_PLAYERS },
    { matchId, team: awayTeam, formation: "4-2-3-1", players: AWAY_PLAYERS },
  ];
}
