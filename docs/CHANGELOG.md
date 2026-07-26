# Changelog

## [0.4.2] — Sprint 1.3 (Match Intelligence Foundation)
- Matchcenter: full matchlista (13 matcher) med matchnummer, lag, liga, tid, status, AI Score och rekommenderat tecken
- Matchdetalj (`/matchcenter/:matchId`): matchinformation, AI-panel, form, statistik, odds & streck, skador, förväntad startelva, press & nyheter, marknadslarm och rekommendation
- Nya komponenter: MatchCard, MatchHeader, TeamFormCard, StatisticCard, OddsCard, MarketAlertCard, InjuryTable, LineupCard, RecommendationCard, NewsPanel, ConfidenceBadge, SignBadge, IntelligenceScoreCard
- Nytt mocklager i `src/mock/` (matches, statistics, odds, marketAlerts, injuries, lineups, recommendations, news) — helt frikopplat från UI
- Nytt dataåtkomstlager `src/services/matchService.ts` som senare byts till API-källor
- Match Intelligence Score (MIS) infört som internt AI-objekt
- Utökade TypeScript-interfaces: Match, Team, TeamForm, Statistic, Odds, Distribution, Injury, Lineup, MarketAlert, Recommendation, NewsItem, MatchIntelligenceScore
- Versionsbump till 0.4.2

## [0.4.1] — Sprint 1.2
- Nya komponenter: Section, PageHeader, ChartCard, Loader, EmptyState
- Sidebar med mobil-drawer (öppna/stäng)
- Topbar med notifikationer, profilikon och versionsnummer
- Dashboard: Analysöversikt med tre ChartCards (Value över tid, ROI, AI Precision)
- Versionsbump till 0.4.1

## [1.1.0] — Sprint 1.1
- Initial projektstruktur
- Mörk professionell layout (Sidebar + Topbar)
- Dashboard med KPI-kort, matchlista och marknadslarm
- Återanvändbara komponenter: Card, KPICard, Button, StatusBadge, DataTable, SectionTitle
- Docs-struktur under `docs/`
