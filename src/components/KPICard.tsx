import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import type { KPI } from "@/types";

const trendStyles = {
  up: "text-[color:var(--success)]",
  down: "text-destructive",
  neutral: "text-muted-foreground",
} as const;

export function KPICard({ kpi }: { kpi: KPI }) {
  const Icon = kpi.trend === "up" ? ArrowUpRight : kpi.trend === "down" ? ArrowDownRight : Minus;
  return (
    <Card className="hover:-translate-y-0.5 transition-transform">
      <div className="text-sm text-muted-foreground">{kpi.label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-3xl font-semibold tracking-tight">{kpi.value}</div>
      </div>
      {kpi.delta && (
        <div className={cn("mt-3 inline-flex items-center gap-1 text-xs font-medium", trendStyles[kpi.trend ?? "neutral"])}>
          <Icon className="h-3.5 w-3.5" />
          {kpi.delta}
        </div>
      )}
    </Card>
  );
}
