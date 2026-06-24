"use client"

import { cn } from "@/lib/utils/cn"
import { Star } from "lucide-react"
import { useState } from "react"

interface StarRatingProps {
  value: number
  max?: number
  interactive?: boolean
  onChange?: (value: number) => void
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  className?: string
}

const sizeMap = { sm: 14, md: 18, lg: 24 }

export function StarRating({
  value,
  max = 5,
  interactive = false,
  onChange,
  size = "md",
  showValue = false,
  className,
}: StarRatingProps) {
  const [hovered, setHovered] = useState<number | null>(null)
  const px = sizeMap[size]
  const displayValue = hovered ?? value

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1
        const filled = starIndex <= displayValue

        return interactive ? (
          <button
            key={i}
            type="button"
            aria-label={`Rate ${starIndex} out of ${max}`}
            onClick={() => onChange?.(starIndex)}
            onMouseEnter={() => setHovered(starIndex)}
            onMouseLeave={() => setHovered(null)}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded"
          >
            <Star
              size={px}
              className={cn(
                "transition-colors duration-100",
                filled ? "fill-amber stroke-amber" : "fill-none stroke-grey-light"
              )}
            />
          </button>
        ) : (
          <Star
            key={i}
            size={px}
            className={cn(
              filled ? "fill-amber stroke-amber" : "fill-none stroke-grey-light"
            )}
          />
        )
      })}
      {showValue && (
        <span className="ml-1 text-sm text-grey">{value.toFixed(1)}</span>
      )}
    </div>
  )
}
