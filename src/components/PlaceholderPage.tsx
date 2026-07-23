import type { LucideIcon } from "lucide-react";
import { AppShell } from "@/layout/AppShell";
import { Card } from "./Card";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function PlaceholderPage({ title, description, icon: Icon }: Props) {
  return (
    <AppShell>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Card>
          <div className="h-80 grid place-items-center text-muted-foreground">
            <div className="flex flex-col items-center gap-3">
              <div className="h-14 w-14 rounded-2xl bg-primary/15 grid place-items-center">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div className="text-sm">Modulen är under utveckling</div>
            </div>
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
