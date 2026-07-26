# Masterplan — Projekt 13 Professional Edition

## Vision
Ett professionellt analysverktyg för sportspel, marknadsanalys och AI-drivna beslut.

## Kärnpelare
1. Datainsamling
2. AI-motor
3. Regelmotor
4. Analys & visualisering
5. Efteranalys och lärande

## Faser
- Sprint 1.x — Grund, layout och komponentbibliotek
- Sprint 2.x — Datacenter och API-integrationer
- Sprint 3.x — AI-motor och regelmotor
- Sprint 4.x — Realtidsmarknad och kupongbygge
- Sprint 5.x — Efteranalys och rapporter

## Match Intelligence Foundation (Sprint 1.3)
Matchcenter är systemets kärna. All analys — AI, statistik, odds, marknad och
efteranalys — utgår från matchobjektet och dess analysvy.

### Arkitektur
```text
UI (components/, pages/)
        |
services/matchService.ts   <- enda dataåtkomstpunkten
        |
mock/  ->  ersätts av API/DB i Sprint 2.x
```

- Komponenter innehåller aldrig data; allt hämtas via `services/`.
- Mocklagret är per-domän (matcher, statistik, odds, marknad, skador, lineups,
  rekommendationer, nyheter) och kan bytas källa för källa.
- Typer i `src/types/` är kontraktet mellan datakälla och UI.

### Match Intelligence Score (MIS)
Internt objekt som samlar delscoren Form, Statistik, xG, Odds, Streck, Skador,
Motivation, Marknad, Nyheter och Historik samt en totalscore. AI-motorn i
Sprint 3.x fyller objektet med riktiga värden utan att UI behöver skrivas om.
