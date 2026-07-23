import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "danger" | "info" | "neutral";

const tones: Record<Tone, string> = {
  success: "bg-[color:var(--success)]/15 text-[color:var(--success)] border-[color:var(--success)]/30",
  warning: "bg-[color:var(--warning)]/15 text-[color:var(--warning)] border-[color:var(--warning)]/30",
  danger:  "bg-destructive/15 text-destructive border-destructive/30",
  info:    "bg-primary/15 text-primary border-primary/30",
  neutral: "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
        tones[tone],
      )}
    >
      {children}
    </span>
  );
}
