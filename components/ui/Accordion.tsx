"use client"

import { cn } from "@/lib/utils/cn"
import { ChevronDown } from "lucide-react"
import { useState, type ReactNode } from "react"

interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  defaultOpen?: string[]
  allowMultiple?: boolean
  className?: string
}

export function Accordion({ items, defaultOpen = [], allowMultiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpen)

  function toggle(id: string) {
    setOpenIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id)
      if (allowMultiple) return [...prev, id]
      return [id]
    })
  }

  return (
    <div className={cn("divide-y divide-grey-light border border-grey-light rounded-lg overflow-hidden", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id)
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between px-5 py-4 text-left text-base font-medium text-charcoal hover:bg-warm-dark transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-inset min-h-[56px]"
            >
              <span>{item.title}</span>
              <ChevronDown
                size={20}
                className={cn(
                  "flex-shrink-0 ml-4 text-grey transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-base text-grey-dark bg-white">
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
