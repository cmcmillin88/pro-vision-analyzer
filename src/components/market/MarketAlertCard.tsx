import { Flame, LineChart, Sparkles, TrendingDown, Users } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { cn } from "@/lib/utils";
import type { MarketAlert, MarketAlertType } from "@/types";
import type { LucideIcon } from "lucide-react";

const icons: Record<MarketAlertType, LucideIcon> = {
  odds_drop: TrendingDown,
  steam_move: Flame,
  sharp_money: LineChart,
  overbet_favourite: Users,
  value_alert: Sparkles,
};

export function MarketAlertCard({ alert, className }: { alert: MarketAlert; className?: string }) {
  const Icon = icons[alert.type];
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-xl border border-border/50 bg-background/40 p-3 transition-colors hover:border-border hover:bg-accent/30",
        className,
      )}
    >
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate text-sm font-medium">{alert.title}</span>
          <StatusBadge tone={alert.severity}>{alert.time}</StatusBadge>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">{alert.description}</p>
      </div>
    </div>
  );
}
