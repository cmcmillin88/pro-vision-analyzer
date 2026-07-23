import { Activity, CalendarDays } from "lucide-react";
import { APP_NAME, APP_EDITION, APP_VERSION } from "@/lib/constants";
import { StatusBadge } from "@/components/StatusBadge";

export function Topbar() {
  const date = new Date().toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="h-16 shrink-0 border-b border-border/60 bg-background/80 backdrop-blur px-4 md:px-6 flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-baseline gap-2">
        <span className="truncate font-semibold">{APP_NAME}</span>
        <span className="hidden sm:inline text-xs text-muted-foreground">{APP_EDITION}</span>
        <span className="text-xs text-muted-foreground">v{APP_VERSION}</span>
      </div>

      <div className="flex items-center gap-3">
        <StatusBadge tone="info">
          <Activity className="h-3 w-3" />
          AI Score 84.2
        </StatusBadge>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <span className="capitalize">{date}</span>
        </div>
      </div>
    </header>
  );
}
