import { Link, useRouterState } from "@tanstack/react-router";
import { Zap } from "lucide-react";
import { NAV_ITEMS, APP_NAME, APP_EDITION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="hidden md:flex md:w-64 shrink-0 flex-col bg-sidebar border-r border-sidebar-border">
      <div className="h-16 flex items-center gap-2 px-5 border-b border-sidebar-border">
        <div className="h-9 w-9 rounded-lg bg-primary/15 grid place-items-center">
          <Zap className="h-5 w-5 text-primary" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">{APP_NAME}</div>
          <div className="text-[11px] text-muted-foreground">{APP_EDITION}</div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 text-[11px] text-muted-foreground border-t border-sidebar-border">
        © {new Date().getFullYear()} {APP_NAME}
      </div>
    </aside>
  );
}
