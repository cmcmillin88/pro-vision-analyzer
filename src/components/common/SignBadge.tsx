import { cn } from "@/lib/utils";
import type { Sign } from "@/types";

export function SignBadge({ sign, className }: { sign: Sign; className?: string }) {
  return (
    <span
      className={cn(
        "inline-grid h-7 w-7 place-items-center rounded-lg border border-primary/30 bg-primary/15 text-sm font-semibold text-primary",
        className,
      )}
    >
      {sign}
    </span>
  );
}
