import { Link } from "@tanstack/react-router";
import { ArrowLeft, Bell, Stethoscope, Trophy, Users } from "lucide-react";
import { AppShell } from "@/layout/AppShell";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { SectionTitle } from "@/components/SectionTitle";
import { KPICard } from "@/components/KPICard";
import { EmptyState } from "@/components/EmptyState";
import { MatchHeader } from "@/components/match/MatchHeader";
import { TeamFormCard } from "@/components/match/TeamFormCard";
import { InjuryTable } from "@/components/match/InjuryTable";
import { LineupCard } from "@/components/match/LineupCard";
import { IntelligenceScoreCard } from "@/components/match/IntelligenceScoreCard";
import { StatisticCard } from "@/components/statistics/StatisticCard";
import { OddsCard } from "@/components/market/OddsCard";
import { MarketAlertCard } from "@/components/market/MarketAlertCard";
import { NewsPanel } from "@/components/common/NewsPanel";
import { RecommendationCard } from "@/components/recommendation/RecommendationCard";
import { getMatch, getMatchIntelligence } from "@/services/matchService";
import type { KPI } from "@/types";

const riskText = { low: "Låg", medium: "Medel", high: "Hög" } as const;

export function MatchDetailsPage({ matchId }: { matchId: string }) {
  const match = getMatch(matchId);

  if (!match) {
    return (
      <AppShell>
        <Section>
          <EmptyState
            title="Matchen hittades inte"
            description="Kontrollera länken eller gå tillbaka till Matchcenter."
            icon={Trophy}
            action={
              <Link to="/matchcenter" className="text-sm font-medium text-primary hover:underline">
                Till Matchcenter
              </Link>
            }
          />
        </Section>
      </AppShell>
    );
  }

  const data = getMatchIntelligence(match);

  const kpis: KPI[] = [
    { label: "AI Score", value: String(match.aiScore), delta: "Modell v1", trend: "up" },
    { label: "Value Score", value: `${match.valueScore.toFixed(1)}%`, delta: "vs marknad", trend: match.valueScore >= 10 ? "up" : "neutral" },
    { label: "Risknivå", value: riskText[match.risk], delta: "Regelmotor", trend: "neutral" },
    { label: "Konfidens", value: `${match.confidence}%`, delta: "MIS-total", trend: match.confidence >= 70 ? "up" : "down" },
  ];

  return (
    <AppShell>
      <Section className="space-y-6">
        <Link
          to="/matchcenter"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till Matchcenter
        </Link>

        <MatchHeader match={match} />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {kpis.map((k) => (
            <KPICard key={k.label} kpi={k} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <TeamFormCard form={data.form.home} side="home" />
          <TeamFormCard form={data.form.away} side="away" />
        </div>

        <div>
          <SectionTitle title="Statistik" subtitle="Underliggande siffror per lag (hemma vs borta)" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {data.statistics.map((s) => (
              <StatisticCard key={s.key} statistic={s} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <OddsCard odds={data.odds} distribution={data.distribution} />
          </div>
          <IntelligenceScoreCard mis={data.mis} />
        </div>

        <Card className="space-y-3">
          <SectionTitle
            title="Skador & avstängningar"
            subtitle="Tillgänglighet inför avspark"
            action={<Stethoscope className="h-4 w-4 text-muted-foreground" />}
          />
          <InjuryTable injuries={data.injuries} />
        </Card>

        <div>
          <SectionTitle
            title="Förväntad startelva"
            subtitle="Prognos baserad på senaste uppställningar"
            action={<Users className="h-4 w-4 text-muted-foreground" />}
          />
          <div className="mt-3 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {data.lineups.map((l) => (
              <LineupCard key={l.team} lineup={l} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <NewsPanel items={data.news} />
          <Card className="space-y-3">
            <SectionTitle
              title="Marknadslarm"
              subtitle="Signaler från oddsmarknaden"
              action={<Bell className="h-4 w-4 text-muted-foreground" />}
            />
            <div className="space-y-2">
              {data.marketAlerts.map((a) => (
                <MarketAlertCard key={a.id} alert={a} />
              ))}
            </div>
          </Card>
        </div>

        <RecommendationCard recommendation={data.recommendation} />
      </Section>
    </AppShell>
  );
}
