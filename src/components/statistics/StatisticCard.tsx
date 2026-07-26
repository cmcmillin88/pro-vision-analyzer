import { Card } from "@/components/Card";
import type { Statistic } from "@/types";

function fmt(value: number, unit?: string) {
  const v = Number.isInteger(value) ? value.toString() : value.toFixed(2);
  return unit ? `${v}${unit === "%" ? " %" : ` ${unit}`}` : v;
}

export function StatisticCard({ statistic }: { statistic: Statistic }) {
  const total = statistic.home + statistic.away || 1;
  const homeShare = Math.round((statistic.home / total) * 100);

  return (
    <Card className="space-y-3 p-4 hover:-translate-y-0.5 transition-transform">
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium">{statistic.label}</span>
        {statistic.hint && <span className="text-[11px] text-muted-foreground">{statistic.hint}</span>}
      </div>

      <div className="flex items-baseline justify-between text-lg font-semibold tabular-nums">
        <span>{fmt(statistic.home, statistic.unit)}</span>
        <span className="text-sm font-normal text-muted-foreground">vs</span>
        <span className="text-muted-foreground">{fmt(statistic.away, statistic.unit)}</span>
      </div>

      <div className="flex h-1.5 overflow-hidden rounded-full bg-muted">
        <div className="bg-primary" style={{ width: `${homeShare}%` }} />
        <div className="flex-1 bg-muted-foreground/40" />
      </div>
    </Card>
  );
}
