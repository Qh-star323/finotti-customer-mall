import { cn } from "@/lib/utils/cn"
import type { ReactNode } from "react"

type BadgeVariant = "new" | "sale" | "best-seller" | "ready" | "pre-order" | "low-stock" | "out" | "hot" | "premium" | "value" | "promo" | "neutral"

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
  size?: "sm" | "md"
}

const variantClasses: Record<BadgeVariant, string> = {
  new: "bg-info text-white",
  sale: "bg-danger text-white",
  "best-seller": "bg-amber text-charcoal",
  ready: "bg-success text-white",
  "pre-order": "bg-grey text-white",
  "low-stock": "bg-amber-dark text-white",
  out: "bg-grey-dark text-white",
  hot: "bg-danger text-white",
  premium: "bg-charcoal text-white",
  value: "bg-lime text-white",
  promo: "bg-amber text-charcoal",
  neutral: "bg-grey-light text-grey-dark",
}

export function Badge({ variant = "neutral", children, className, size = "sm" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-semibold rounded-full tracking-wide uppercase",
        size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
