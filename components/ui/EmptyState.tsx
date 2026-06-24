import type { ReactNode } from "react"
import { cn } from "@/lib/utils/cn"

interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center py-16 px-6", className)}>
      {icon && (
        <div className="text-grey-light mb-4" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-charcoal mb-2">{title}</h3>
      {description && <p className="text-base text-grey mb-6 max-w-sm">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  )
}
