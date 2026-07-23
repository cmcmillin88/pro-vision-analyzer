import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type LoaderProps = {
  label?: string;
  className?: string;
  size?: number;
};

export function Loader({ label = "Laddar…", className, size = 20 }: LoaderProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2 py-6 text-muted-foreground", className)}>
      <Loader2 className="animate-spin" style={{ width: size, height: size }} />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
}
