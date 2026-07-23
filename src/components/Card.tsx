import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card border border-border/60 shadow-card p-5 transition-colors hover:border-border",
        className,
      )}
      {...props}
    />
  );
}
