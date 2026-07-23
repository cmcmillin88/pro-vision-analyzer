import { Link, useRouterState } from "@tanstack/react-router";
import { Zap, X } from "lucide-react";
import { NAV_ITEMS, APP_NAME, APP_EDITION } from "@/lib/constants";
import { cn } from "@/lib/utils";

type SidebarProps = {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

export function Sidebar({ mobileOpen = false, onMobileClose }: SidebarProps) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const content = (
    <>
      <div className="h-16 flex items-center justify-between gap-2 px-5 border-b border-sidebar-border">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-9 w-9 shrink-0 rounded-lg bg-primary/15 grid place-items-center">
            <Zap className="h-5 w-5 text-primary" />
          </div>
          <div className="leading-tight min-w-0">
            <div className="text-sm font-semibold truncate">{APP_NAME}</div>
            <div className="text-[11px] text-muted-foreground truncate">{APP_EDITION}</div>
          </div>
        </div>
        <button
          type="button"
          onClick={onMobileClose}
          className="md:hidden rounded-md p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label="Stäng meny"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {NAV_ITEMS.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <Link
              key={item.to}
              to={item.to}
              onClick={onMobileClose}
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
    </>
  );

  return (
    <>
      <aside className="hidden md:flex md:w-64 shrink-0 flex-col bg-sidebar border-r border-sidebar-border">
        {content}
      </aside>

      {/* Mobile overlay drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 transition-opacity",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-background/70 backdrop-blur-sm"
          onClick={onMobileClose}
          aria-hidden
        />
        <aside
          className={cn(
            "absolute inset-y-0 left-0 flex w-64 flex-col bg-sidebar border-r border-sidebar-border shadow-xl transition-transform",
            mobileOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {content}
        </aside>
      </div>
    </>
  );
}
