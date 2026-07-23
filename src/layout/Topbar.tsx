import { Activity, Bell, CalendarDays, Menu, UserCircle2 } from "lucide-react";
import { APP_NAME, APP_EDITION, APP_VERSION } from "@/lib/constants";
import { StatusBadge } from "@/components/StatusBadge";

type TopbarProps = {
  onMenuClick?: () => void;
};

export function Topbar({ onMenuClick }: TopbarProps) {
  const date = new Date().toLocaleDateString("sv-SE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="h-16 shrink-0 border-b border-border/60 bg-background/80 backdrop-blur px-4 md:px-6 flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="md:hidden rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label="Öppna meny"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex min-w-0 items-baseline gap-2">
          <span className="truncate font-semibold">{APP_NAME}</span>
          <span className="hidden sm:inline text-xs text-muted-foreground">{APP_EDITION}</span>
          <span className="text-xs text-muted-foreground">v{APP_VERSION}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <StatusBadge tone="info">
          <Activity className="h-3 w-3" />
          AI Score 84.2
        </StatusBadge>
        <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          <span className="capitalize">{date}</span>
        </div>
        <button
          type="button"
          className="relative rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label="Notifikationer"
        >
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[color:var(--danger)]" />
        </button>
        <button
          type="button"
          className="rounded-full p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label="Profil"
        >
          <UserCircle2 className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
