import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/layout/AppShell";
import { KPICard } from "@/components/KPICard";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { DataTable, type Column } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ChartCard } from "@/components/ChartCard";
import { KPIS, MATCHES, ALERTS } from "@/services/mockData";
import { Bell } from "lucide-react";
import type { Match } from "@/types";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Projekt 13" },
      { name: "description", content: "Översikt över AI Score, värde, risk och aktuella matcher." },
    ],
  }),
  component: DashboardPage,
});

const matchColumns: Column<Match>[] = [
  { key: "time",   header: "Tid",     render: (m) => <span className="tabular-nums text-muted-foreground">{m.time}</span> },
  { key: "league", header: "Liga",    render: (m) => <span className="text-muted-foreground">{m.league}</span> },
  { key: "match",  header: "Match",   render: (m) => <span className="font-medium">{m.home} – {m.away}</span> },
  { key: "odds",   header: "1 / X / 2", render: (m) => (
      <span className="tabular-nums text-sm">
        {m.odds["1"].toFixed(2)} · {m.odds.X.toFixed(2)} · {m.odds["2"].toFixed(2)}
      </span>
    ) },
  { key: "ai",     header: "AI",      render: (m) => <span className="font-semibold text-primary tabular-nums">{m.aiScore}</span> },
  { key: "value",  header: "Value",   render: (m) => (
      <span className={m.value >= 10 ? "text-[color:var(--success)] tabular-nums" : "text-muted-foreground tabular-nums"}>
        {m.value.toFixed(1)}%
      </span>
    ) },
  { key: "status", header: "Status",  render: (m) =>
      m.status === "live" ? <StatusBadge tone="danger">LIVE</StatusBadge>
      : m.status === "finished" ? <StatusBadge tone="neutral">Slutförd</StatusBadge>
      : <StatusBadge tone="info">Kommande</StatusBadge>
  },
];

const alertTone = { info: "info", warning: "warning", danger: "danger" } as const;

function DashboardPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Realtidsöversikt över matcher, marknad och AI-signaler.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {KPIS.map((k) => <KPICard key={k.label} kpi={k} />)}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <Card className="xl:col-span-2 p-0 overflow-hidden">
            <div className="p-5 pb-3">
              <SectionTitle
                title="Matchlista"
                subtitle="Kommande matcher med AI-utvärdering"
                action={<Button variant="outline" size="sm">Visa alla</Button>}
              />
            </div>
            <DataTable columns={matchColumns} rows={MATCHES} getRowKey={(m) => m.id} />
          </Card>

          <Card>
            <SectionTitle
              title="Marknadslarm"
              subtitle="Signifikanta oddsrörelser"
              action={<Bell className="h-4 w-4 text-muted-foreground" />}
            />
            <ul className="space-y-3">
              {ALERTS.map((a) => (
                <li key={a.id} className="flex items-start justify-between gap-3 rounded-lg border border-border/50 p-3 hover:bg-accent/40 transition-colors">
                  <div className="min-w-0">
                    <div className="text-sm font-medium truncate">{a.match}</div>
                    <div className="text-xs text-muted-foreground">{a.market} · {a.change}</div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <StatusBadge tone={alertTone[a.severity]}>{a.severity.toUpperCase()}</StatusBadge>
                    <span className="text-[11px] text-muted-foreground tabular-nums">{a.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card>
          <SectionTitle title="Analys" subtitle="Diagram och trender (kommer snart)" />
          <div className="h-64 rounded-xl border border-dashed border-border/60 grid place-items-center text-muted-foreground">
            <div className="flex flex-col items-center gap-2">
              <BarChart3 className="h-8 w-8 opacity-60" />
              <span className="text-sm">Diagram-platshållare</span>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
