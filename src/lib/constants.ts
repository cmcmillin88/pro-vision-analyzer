export const APP_NAME = "Projekt 13";
export const APP_EDITION = "Professional Edition";
export const APP_VERSION = "1.1.0";

import {
  LayoutDashboard,
  Trophy,
  Ticket,
  LineChart,
  Sparkles,
  BarChart3,
  History,
  Database,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Matchcenter", to: "/matchcenter", icon: Trophy },
  { label: "Kupong", to: "/kupong", icon: Ticket },
  { label: "Marknaden", to: "/marknaden", icon: LineChart },
  { label: "AI", to: "/ai", icon: Sparkles },
  { label: "Statistik", to: "/statistik", icon: BarChart3 },
  { label: "Efteranalys", to: "/efteranalys", icon: History },
  { label: "Datacenter", to: "/datacenter", icon: Database },
  { label: "Inställningar", to: "/installningar", icon: Settings },
];
