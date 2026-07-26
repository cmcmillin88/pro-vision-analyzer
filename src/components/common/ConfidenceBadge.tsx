import { cn } from "@/lib/utils";
import type { RiskLevel } from "@/types";

const riskLabels: Record<RiskLevel, string> = { low: "Låg risk", medium: "Medel risk", high: "Hög risk" };

export function ConfidenceBadge({ value, risk, className }: { value: number; risk?: RiskLevel; className?: string }) {
  const tone =
    value >= 75
      ? "bg-[color:var(--success)]/15 text-[color:var(--success)] border-[color:var(--success)]/30"
      : value >= 60
        ? "bg-[color:var(--warning)]/15 text-[color:var(--warning)] border-[color:var(--warning)]/30"
        : "bg-destructive/15 text-destructive border-destructive/30";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium tabular-nums",
        tone,
        className,
      )}
    >
      Konfidens {value}%
      {risk && <span className="opacity-70">· {riskLabels[risk]}</span>}
    </span>
  );
}
