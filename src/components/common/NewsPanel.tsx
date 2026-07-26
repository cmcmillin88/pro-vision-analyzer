import { Newspaper } from "lucide-react";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { EmptyState } from "@/components/EmptyState";
import type { NewsItem } from "@/types";

export function NewsPanel({ items }: { items: NewsItem[] }) {
  return (
    <Card className="space-y-3">
      <SectionTitle
        title="Press & Nyheter"
        subtitle="Rapportering kring lagen"
        action={<Newspaper className="h-4 w-4 text-muted-foreground" />}
      />
      {items.length === 0 ? (
        <EmptyState title="Inga nyheter" description="Nyhetsflödet kopplas in i Sprint 2.x." icon={Newspaper} />
      ) : (
        <ul className="space-y-3">
          {items.map((n) => (
            <li key={n.id} className="rounded-xl border border-border/50 p-3 transition-colors hover:bg-accent/30">
              <div className="flex items-center justify-between gap-2 text-[11px] text-muted-foreground">
                <span className="uppercase tracking-wide">{n.source}</span>
                <span>{n.publishedAt}</span>
              </div>
              <div className="mt-1 text-sm font-medium">{n.headline}</div>
              <p className="mt-1 text-xs text-muted-foreground">{n.summary}</p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
