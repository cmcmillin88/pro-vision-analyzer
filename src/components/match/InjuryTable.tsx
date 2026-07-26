import { DataTable, type Column } from "@/components/DataTable";
import { StatusBadge } from "@/components/StatusBadge";
import type { Injury, InjuryStatus } from "@/types";

const statusMeta: Record<InjuryStatus, { tone: "danger" | "warning" | "success"; label: string }> = {
  out: { tone: "danger", label: "Ute" },
  doubtful: { tone: "warning", label: "Osäker" },
  fit: { tone: "success", label: "Spelklar" },
};

const columns: Column<Injury>[] = [
  { key: "player", header: "Spelare", render: (i) => <span className="font-medium">{i.player}</span> },
  { key: "team", header: "Lag", render: (i) => <span className="text-muted-foreground">{i.team}</span> },
  { key: "position", header: "Position", render: (i) => <span className="text-muted-foreground">{i.position}</span> },
  {
    key: "status",
    header: "Status",
    render: (i) => <StatusBadge tone={statusMeta[i.status].tone}>{statusMeta[i.status].label}</StatusBadge>,
  },
  { key: "comment", header: "Kommentar", render: (i) => <span className="text-muted-foreground">{i.comment}</span> },
];

export function InjuryTable({ injuries }: { injuries: Injury[] }) {
  return <DataTable columns={columns} rows={injuries} getRowKey={(i) => i.id} />;
}
