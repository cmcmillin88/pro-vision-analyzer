import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import type { Lineup } from "@/types";

export function LineupCard({ lineup }: { lineup: Lineup }) {
  return (
    <Card className="space-y-3">
      <SectionTitle title={lineup.team} subtitle={`Förväntad uppställning · ${lineup.formation}`} />
      <ul className="divide-y divide-border/50">
        {lineup.players.map((p) => (
          <li key={p.number} className="flex items-center gap-3 py-2">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted text-xs font-semibold tabular-nums">
              {p.number}
            </span>
            <span className="min-w-0 flex-1 truncate text-sm">{p.name}</span>
            <span className="shrink-0 text-[11px] uppercase tracking-wide text-muted-foreground">{p.position}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
