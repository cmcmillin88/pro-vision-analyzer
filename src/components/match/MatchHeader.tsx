import { CalendarDays, Clock, MapPin, Trophy, UserCheck } from "lucide-react";
import { Card } from "@/components/Card";
import { StatusBadge } from "@/components/StatusBadge";
import { SignBadge } from "@/components/common/SignBadge";
import type { Match } from "@/types";
import type { LucideIcon } from "lucide-react";

function Meta({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/50 bg-background/40 p-3">
      <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <div className="mt-1 truncate text-sm font-medium">{value}</div>
    </div>
  );
}

export function MatchHeader({ match }: { match: Match }) {
  return (
    <Card className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-primary tabular-nums">
              Match {match.number}
            </span>
            {match.status === "live" ? (
              <StatusBadge tone="danger">LIVE</StatusBadge>
            ) : match.status === "finished" ? (
              <StatusBadge tone="neutral">Slutförd</StatusBadge>
            ) : (
              <StatusBadge tone="info">Kommande</StatusBadge>
            )}
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            {match.home.name} <span className="text-muted-foreground">–</span> {match.away.name}
          </h1>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          Rekommendation
          <SignBadge sign={match.recommendedSign} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
        <Meta icon={Trophy} label="Liga" value={match.league} />
        <Meta icon={CalendarDays} label="Datum" value={match.date} />
        <Meta icon={Clock} label="Avspark" value={match.kickoff} />
        <Meta icon={MapPin} label="Arena" value={match.venue} />
        <Meta icon={UserCheck} label="Domare" value={match.referee} />
        <Meta icon={Trophy} label="Hemma / Borta" value={`${match.home.shortName} / ${match.away.shortName}`} />
      </div>
    </Card>
  );
}
