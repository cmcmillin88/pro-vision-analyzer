# Arkitektur

## Stack
- React + TypeScript
- Vite + TanStack Router (file-based routing)
- Tailwind CSS v4
- Lucide Icons

## Mappstruktur
```
src/
  assets/       Statiska filer
  components/   Återanvändbara UI-komponenter
  layout/       Sidebar, Topbar, AppShell
  routes/       Sidor (file-based routing)
  hooks/        Egna React-hooks
  services/     Data & API-lager
  types/        Delade TypeScript-typer
  utils/        Hjälpfunktioner
  styles/       Globala stilar
```

## Principer
- Modulära och små komponenter
- Typad kod överallt
- Konstanter samlas i `src/lib/constants.ts`
- Ingen affärslogik i UI-lagret
