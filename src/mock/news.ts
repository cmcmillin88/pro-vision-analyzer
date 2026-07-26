import type { NewsItem } from "@/types";

export const MOCK_NEWS: NewsItem[] = [
  { id: "n1", source: "Presskonferens", headline: "Tränaren: \"Vi roterar inte inför derbyt\"", summary: "Starkaste elvan väntas från start trots tät matchkalender.", publishedAt: "2 h sedan" },
  { id: "n2", source: "Lokalmedia", headline: "Nyckelspelaren tillbaka i truppen", summary: "Deltog fullt ut i gårdagens avslutande träning.", publishedAt: "5 h sedan" },
  { id: "n3", source: "Klubbkanal", headline: "Avstängning avtjänad", summary: "Mittfältaren är spelklar igen efter ett ackumulerat kortförbud.", publishedAt: "1 dag sedan" },
  { id: "n4", source: "Marknadsbevakning", headline: "Ökad omsättning på hemmasidan", summary: "Flera operatörer justerade sina linjer inom loppet av tio minuter.", publishedAt: "1 dag sedan" },
];

export function getNews(_matchId: string): NewsItem[] {
  return MOCK_NEWS;
}
