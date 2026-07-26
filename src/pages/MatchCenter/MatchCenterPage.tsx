import { useMemo, useState } from "react";
import { Search, Trophy } from "lucide-react";
import { AppShell } from "@/layout/AppShell";
import { Section } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { EmptyState } from "@/components/EmptyState";
import { MatchCard } from "@/components/match/MatchCard";
import { StatusBadge } from "@/components/StatusBadge";
import { listMatches } from "@/services/matchService";

export function MatchCenterPage() {
  const matches = listMatches();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return matches;
    return matches.filter((m) =>
      [m.home.name, m.away.name, m.league, String(m.number)].join(" ").toLowerCase().includes(q),
    );
  }, [matches, query]);

  return (
    <AppShell>
      <Section className="space-y-6">
        <PageHeader
          title="Matchcenter"
          subtitle="Samtliga matcher på kupongen med AI-utvärdering. Öppna en match för full analys."
          actions={<StatusBadge tone="info">{matches.length} matcher</StatusBadge>}
        />

        <Card className="p-3">
          <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/40 px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Sök lag, liga eller matchnummer…"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              aria-label="Sök match"
            />
          </div>
        </Card>

        {filtered.length === 0 ? (
          <EmptyState title="Inga matcher hittades" description="Prova en annan sökning." icon={Trophy} />
        ) : (
          <div className="grid grid-cols-1 gap-3 2xl:grid-cols-2">
            {filtered.map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        )}
      </Section>
    </AppShell>
  );
}
