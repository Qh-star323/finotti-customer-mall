import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils/cn"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center flex-wrap gap-1", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && <ChevronRight size={16} className="text-grey flex-shrink-0" />}
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-sm text-grey hover:text-charcoal transition-colors underline-offset-2 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn("text-sm", isLast ? "text-charcoal font-medium" : "text-grey")}>
                {item.label}
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
