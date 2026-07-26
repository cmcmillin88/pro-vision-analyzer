import { Link } from "@tanstack/react-router";
import { ChevronRight, Clock } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { SignBadge } from "@/components/common/SignBadge";
import type { Match } from "@/types";

function StatusPill({ status }: { status: Match["status"] }) {
  if (status === "live") return <StatusBadge tone="danger">LIVE</StatusBadge>;
  if (status === "finished") return <StatusBadge tone="neutral">Slutförd</StatusBadge>;
  return <StatusBadge tone="info">Kommande</StatusBadge>;
}

export function MatchCard({ match }: { match: Match }) {
  return (
    <Link
      to="/matchcenter/$matchId"
      params={{ matchId: match.id }}
      className="group block rounded-2xl border border-border/60 bg-card p-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-sm font-semibold text-primary tabular-nums">
          {match.number}
        </div>

        <div className="min-w-0 flex-1">
          <div className="truncate font-medium">
            {match.home.name} <span className="text-muted-foreground">–</span> {match.away.name}
          </div>
          <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="truncate">{match.league}</span>
            <span className="opacity-40">·</span>
            <Clock className="h-3 w-3" />
            <span className="tabular-nums">{match.kickoff}</span>
          </div>
        </div>

        <div className="hidden shrink-0 sm:block">
          <StatusPill status={match.status} />
        </div>

        <div className="shrink-0 text-right">
          <div className="text-xs text-muted-foreground">AI</div>
          <div className="font-semibold text-primary tabular-nums">{match.aiScore}</div>
        </div>

        <SignBadge sign={match.recommendedSign} className="shrink-0" />

        <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
