import type { ReactNode } from "react";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";
import { LineChart as LineChartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ChartCardProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children?: ReactNode;
  height?: number;
  className?: string;
};

export function ChartCard({
  title,
  subtitle,
  action,
  children,
  height = 240,
  className,
}: ChartCardProps) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <SectionTitle title={title} subtitle={subtitle} action={action} />
      <div
        className="mt-2 grid place-items-center rounded-xl border border-dashed border-border/60 text-muted-foreground"
        style={{ minHeight: height }}
      >
        {children ?? (
          <div className="flex flex-col items-center gap-2">
            <LineChartIcon className="h-8 w-8 opacity-60" />
            <span className="text-xs">Diagram-platshållare</span>
          </div>
        )}
      </div>
    </Card>
  );
}
