import { Sparkles } from "lucide-react";
import { Card } from "@/components/Card";
import { StatusBadge } from "@/components/StatusBadge";
import { ConfidenceBadge } from "@/components/common/ConfidenceBadge";
import type { Recommendation, RiskLevel } from "@/types";

const riskTone: Record<RiskLevel, "success" | "warning" | "danger"> = {
  low: "success",
  medium: "warning",
  high: "danger",
};
const riskLabel: Record<RiskLevel, string> = { low: "Låg", medium: "Medel", high: "Hög" };

export function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        <div className="flex items-center gap-4 lg:w-64 lg:shrink-0">
          <div className="grid h-20 w-20 place-items-center rounded-2xl border border-primary/40 bg-primary/15 text-4xl font-semibold text-primary">
            {recommendation.sign}
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground">Rekommenderat tecken</div>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <ConfidenceBadge value={recommendation.confidence} />
              <StatusBadge tone={riskTone[recommendation.risk]}>
                Riskklass: {riskLabel[recommendation.risk]}
              </StatusBadge>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Sparkles className="h-4 w-4 text-primary" />
            AI-motivering
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{recommendation.motivation}</p>
          <p className="mt-3 text-[11px] text-muted-foreground/70">
            Motiveringen genereras av AI-motorn i Sprint 3.x. Nuvarande text är en platshållare baserad på mockdata.
          </p>
        </div>
      </div>
    </Card>
  );
}
