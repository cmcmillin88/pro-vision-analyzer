import type { Match, Recommendation } from "@/types";

const MOTIVATIONS: Record<string, string> = {
  "1": "Modellen väger hemmalagets xG-överskott (1.72 mot 1.18) och stabil form mot en bortasida med två raka förluster. Oddsfallet på 1 bekräftas av sharp money och streckningen ligger nära modellens sannolikhet.",
  X: "Jämna underliggande siffror och låg konfidens i båda riktningar. Modellen ser överstreckad favorit och rekommenderar en gardering med X som primärt tecken.",
  "2": "Bortalaget har högre xG per match, bättre defensiv struktur och gynnsam vilotid. Marknaden har inte fullt ut prisat in nyhetsläget kring hemmalagets skadeläge.",
};

export function getRecommendation(match: Match): Recommendation {
  return {
    matchId: match.id,
    sign: match.recommendedSign,
    motivation: MOTIVATIONS[match.recommendedSign],
    confidence: match.confidence,
    risk: match.risk,
  };
}
