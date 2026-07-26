import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import type { MatchIntelligenceScore } from "@/types";

const LABELS: Array<[keyof Omit<MatchIntelligenceScore, "matchId" | "total">, string]> = [
  ["form", "Form"],
  ["statistics", "Statistik"],
  ["xg", "xG"],
  ["odds", "Odds"],
  ["distribution", "Streck"],
  ["injuries", "Skador"],
  ["motivation", "Motivation"],
  ["market", "Marknad"],
  ["news", "Nyheter"],
  ["history", "Historik"],
];

export function IntelligenceScoreCard({ mis }: { mis: MatchIntelligenceScore }) {
  return (
    <Card className="space-y-4">
      <SectionTitle
        title="Match Intelligence Score"
        subtitle="Internt AI-objekt (MIS) — delkomponenter och totalscore"
        action={<span className="text-2xl font-semibold text-primary tabular-nums">{mis.total}</span>}
      />
      <div className="space-y-2">
        {LABELS.map(([key, label]) => (
          <div key={key} className="flex items-center gap-3">
            <span className="w-24 shrink-0 text-xs text-muted-foreground">{label}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary/80" style={{ width: `${mis[key]}%` }} />
            </div>
            <span className="w-8 text-right text-xs tabular-nums">{mis[key]}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
