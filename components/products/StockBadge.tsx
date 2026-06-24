import type { StockStatus } from "@/lib/types"
import { Badge } from "@/components/ui/Badge"

const stockConfig: Record<StockStatus, { label: string; variant: "ready" | "pre-order" | "low-stock" | "out" }> = {
  ready: { label: "Ready Stock", variant: "ready" },
  "pre-order": { label: "Pre-Order", variant: "pre-order" },
  low: { label: "Low Stock", variant: "low-stock" },
  "out-of-stock": { label: "Out of Stock", variant: "out" },
}

export function StockBadge({ status }: { status: StockStatus }) {
  const config = stockConfig[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}
