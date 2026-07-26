import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { cn } from "@/lib/utils";
import type { Distribution, Odds, Sign } from "@/types";

const trendMeta = {
  down: { Icon: ArrowDownRight, className: "text-destructive", label: "Fallande" },
  up: { Icon: ArrowUpRight, className: "text-[color:var(--success)]", label: "Stigande" },
  stable: { Icon: Minus, className: "text-muted-foreground", label: "Stabil" },
} as const;

function OddsCell({ sign, value, highlight }: { sign: Sign; value: number; highlight: boolean }) {
  return (
    <div
      className={cn(
        "rounded-xl border p-3 text-center transition-colors",
        highlight ? "border-primary/40 bg-primary/10" : "border-border/50 bg-background/40",
      )}
    >
      <div className="text-[11px] uppercase tracking-wide text-muted-foreground">{sign}</div>
      <div className="mt-1 text-xl font-semibold tabular-nums">{value.toFixed(2)}</div>
    </div>
  );
}

export function OddsCard({ odds, distribution }: { odds: Odds; distribution: Distribution }) {
  const { Icon, className, label } = trendMeta[odds.trend];
  const lowest = Math.min(odds.home, odds.draw, odds.away);

  return (
    <Card className="space-y-4">
      <SectionTitle title="Odds & streck" subtitle="Marknadsläge och folkets fördelning" />

      <div className="grid grid-cols-3 gap-3">
        <OddsCell sign="1" value={odds.home} highlight={odds.home === lowest} />
        <OddsCell sign="X" value={odds.draw} highlight={odds.draw === lowest} />
        <OddsCell sign="2" value={odds.away} highlight={odds.away === lowest} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-border/50 p-3 text-sm">
        <span className="text-muted-foreground">Senaste oddsrörelse</span>
        <span className="tabular-nums">
          {odds.movement.selection}: {odds.movement.from.toFixed(2)} → {odds.movement.to.toFixed(2)}
          <span className="ml-2 text-xs text-muted-foreground">{odds.movement.at}</span>
        </span>
        <span className={cn("inline-flex items-center gap-1 text-xs font-medium", className)}>
          <Icon className="h-3.5 w-3.5" />
          {label}
        </span>
      </div>

      <div className="space-y-2">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">Streck</div>
        {([
          ["1", distribution.home],
          ["X", distribution.draw],
          ["2", distribution.away],
        ] as const).map(([sign, pct]) => (
          <div key={sign} className="flex items-center gap-3">
            <span className="w-4 text-sm text-muted-foreground">{sign}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} />
            </div>
            <span className="w-12 text-right text-sm tabular-nums">{pct} %</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
