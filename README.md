# Projekt 13 Professional Edition

Ett modernt analysverktyg för professionell beslutsstöd — byggt med fokus på skalbarhet, återanvändbara komponenter och tydlig kodstruktur.

## Översikt

Projekt 13 Professional Edition är grunden till en analysplattform där användaren får en överblick över nyckeltal, matcher, marknadslarm och rapporter. Applikationen är byggd som en single-page application (SPA) med filbaserad routing och en modulär komponentarkitektur.

## Teknikstack

- **React 19** – UI-bibliotek
- **TypeScript** – typad kod överallt
- **Vite** – snabb byggmiljö och dev-server
- **TanStack Router** – filbaserad routing
- **TanStack Query** – server state-hantering
- **Tailwind CSS v4** – utility-first styling
- **Lucide React** – ikoner
- **Radix UI + shadcn/ui** – tillgängliga primitives
- **Zod + React Hook Form** – validering och formulär

## Kom igång

Krav:

- [Node.js](https://nodejs.org/) (rekommenderas via [nvm](https://github.com/nvm-sh/nvm))
- [Bun](https://bun.sh/) eller npm

Installera och starta utvecklingsservern:

```sh
bun install
bun run dev
```

Eller med npm:

```sh
npm install
npm run dev
```

Applikationen öppnas på `http://localhost:8080`.

## Tillgängliga skript

| Skript        | Beskrivning                          |
| ------------- | ------------------------------------ |
| `bun run dev` | Starta utvecklingsservern            |
| `bun run build` | Bygg för produktion                  |
| `bun run preview` | Förhandsvisa produktionsbygget       |
| `bun run lint` | Kör ESLint                           |
| `bun run format` | Formatera kod med Prettier           |

## Projektstruktur

```
src/
  assets/        Statiska filer och bilder
  components/    Återanvändbara UI-komponenter
  hooks/         Egna React-hooks
  layout/        Applikationslayout (sidebar, topbar, shell)
  lib/           Hjälpfunktioner, konstanter och utils
  routes/        Sidor via filbaserad routing
  services/      Data- och API-lager
  types/         Delade TypeScript-typer
  styles.css     Globala stilar och design-tokens
```

## Dokumentation

All dokumentation finns under `docs/`:

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) – Arkitektur och principer
- [`docs/MASTERPLAN.md`](docs/MASTERPLAN.md) – Övergripande plan
- [`docs/ROADMAP.md`](docs/ROADMAP.md) – Kommande funktioner
- [`docs/UI_GUIDELINES.md`](docs/UI_GUIDELINES.md) – Riktlinjer för UI
- [`docs/API.md`](docs/API.md) – API-integrering
- [`docs/DATABASE.md`](docs/DATABASE.md) – Databasstruktur
- [`docs/AI_ENGINE.md`](docs/AI_ENGINE.md) – AI-motor
- [`docs/RULE_ENGINE.md`](docs/RULE_ENGINE.md) – Regelmotor
- [`docs/CHANGELOG.md`](docs/CHANGELOG.md) – Förändringslogg
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md) – Riktlinjer för bidrag

## Komponenter

Applikationen innehåller följande återanvändbara komponenter:

- `Card` – generisk yta för innehåll
- `KPICard` – nyckeltalskort med trend och ikon
- `Button` – primär/sekundär/tertiär knapp
- `Sidebar` – sidonavigation
- `Topbar` – topprad med sök och användare
- `StatusBadge` – statusindikator
- `DataTable` – tabellkomponent
- `SectionTitle` – rubrik för sektioner

## Kodkvalitet

- TypeScript används konsekvent
- Tydliga och delade typer i `src/types/`
- Konstanter samlas i `src/lib/constants.ts`
- UI-komponenter hålls fria från affärslogik
- Kommentarer läggs endast till där de tillför värde

## GitHub-integration

Projektet kan kopplas till GitHub via Lovable:

1. Klicka på **Plus (+)-menyn** i chatten.
2. Välj **GitHub → Connect project**.
3. Autorisera Lovable GitHub App.
4. Välj ägare och skapa repository.

Därefter synkas ändringar automatiskt mellan Lovable och GitHub.

## Licens

Detta projekt är skapat för vidare utveckling inom Projekt 13 Professional Edition.
