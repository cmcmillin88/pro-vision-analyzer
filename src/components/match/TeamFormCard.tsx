import { Card } from "@/components/Card";
import { cn } from "@/lib/utils";
import type { FormResult, TeamForm } from "@/types";

const resultStyles: Record<FormResult, string> = {
  W: "bg-[color:var(--success)]/20 text-[color:var(--success)] border-[color:var(--success)]/30",
  D: "bg-[color:var(--warning)]/20 text-[color:var(--warning)] border-[color:var(--warning)]/30",
  L: "bg-destructive/20 text-destructive border-destructive/30",
};

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-border/50 bg-background/40 p-2.5 text-center">
      <div className="text-[11px] text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold tabular-nums">{value}</div>
    </div>
  );
}

export function TeamFormCard({ form, side }: { form: TeamForm; side: "home" | "away" }) {
  return (
    <Card className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
            {side === "home" ? "Hemmalag" : "Bortalag"}
          </div>
          <div className="truncate text-base font-semibold">{form.teamName}</div>
        </div>
        <div className="flex shrink-0 gap-1">
          {form.results.map((r, i) => (
            <span
              key={`${r}-${i}`}
              className={cn("grid h-6 w-6 place-items-center rounded-md border text-xs font-semibold", resultStyles[r])}
            >
              {r}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2">
        <Stat label="V" value={form.wins} />
        <Stat label="O" value={form.draws} />
        <Stat label="F" value={form.losses} />
        <Stat label="GM" value={form.goalsFor} />
        <Stat label="IM" value={form.goalsAgainst} />
      </div>
    </Card>
  );
}
