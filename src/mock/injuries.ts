import type { Injury } from "@/types";

const BASE: Omit<Injury, "team">[] = [
  { id: "i1", player: "M. Ødegaard", position: "Mittfältare", status: "doubtful", comment: "Individuell träning, sen bedömning." },
  { id: "i2", player: "G. Jesus", position: "Forward", status: "out", comment: "Knäskada, åter om 3 veckor." },
  { id: "i3", player: "T. Partey", position: "Mittfältare", status: "fit", comment: "Tillbaka efter avstängning." },
  { id: "i4", player: "R. James", position: "Back", status: "out", comment: "Muskelbristning." },
  { id: "i5", player: "C. Palmer", position: "Ytter", status: "doubtful", comment: "Lättare vristbesvär." },
];

export function getInjuries(homeTeam: string, awayTeam: string): Injury[] {
  return BASE.map((i, idx) => ({ ...i, team: idx < 3 ? homeTeam : awayTeam }));
}
