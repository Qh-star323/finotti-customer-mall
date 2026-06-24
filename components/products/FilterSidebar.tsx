"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { Button } from "@/components/ui/Button"
import type { FilterOptions } from "@/lib/types"

interface FilterSidebarProps {
  filters: FilterOptions
  onChange: (filters: FilterOptions) => void
  onReset: () => void
  className?: string
}

const COLORS = ["White", "Beige", "Grey", "Brown", "Black", "Teal", "Cream", "Natural Oak", "Walnut Brown"]
const MATERIALS = ["Fabric", "Leather", "Wood", "Metal", "Glass", "Foam", "Latex", "Velvet", "Rattan"]
const BRANDS = ["Finotti Signature", "Casa Living", "WorkRight", "SleepWell", "EcoRest"]
const STYLES = [
  { value: "modern", label: "Modern" },
  { value: "scandinavian", label: "Scandinavian" },
  { value: "minimalist", label: "Minimalist" },
  { value: "industrial", label: "Industrial" },
  { value: "classic", label: "Classic" },
  { value: "japandi", label: "Japandi" },
  { value: "luxury", label: "Luxury" },
]

export function FilterSidebar({ filters, onChange, onReset, className }: FilterSidebarProps) {
  const [priceMin, setPriceMin] = useState(filters.priceMin?.toString() || "")
  const [priceMax, setPriceMax] = useState(filters.priceMax?.toString() || "")

  function toggleArray<T>(arr: T[] | undefined, value: T): T[] {
    const current = arr || []
    return current.includes(value) ? current.filter((v) => v !== value) : [...current, value]
  }

  function applyPrice() {
    onChange({
      ...filters,
      priceMin: priceMin ? Number(priceMin) : undefined,
      priceMax: priceMax ? Number(priceMax) : undefined,
    })
  }

  const activeCount = [
    filters.priceMin, filters.priceMax,
    ...(filters.colors || []),
    ...(filters.materials || []),
    ...(filters.brands || []),
    ...(filters.styles || []),
    filters.stock?.length,
  ].filter(Boolean).length

  return (
    <aside className={cn("bg-white border border-grey-light rounded-xl p-5 space-y-6", className)} aria-label="Product filters">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-charcoal">
          Filters {activeCount > 0 && <span className="ml-1 text-sm text-lime">({activeCount})</span>}
        </h2>
        {activeCount > 0 && (
          <button onClick={onReset} className="text-sm text-grey hover:text-charcoal flex items-center gap-1 transition-colors">
            <X size={14} /> Reset
          </button>
        )}
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-base font-semibold text-charcoal mb-3">Price Range (MYR)</h3>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
            min={0}
            className="flex-1 min-h-[44px] rounded-lg border border-grey-light px-3 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime"
            aria-label="Minimum price"
          />
          <span className="text-grey">–</span>
          <input
            type="number"
            placeholder="Max"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
            min={0}
            className="flex-1 min-h-[44px] rounded-lg border border-grey-light px-3 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime"
            aria-label="Maximum price"
          />
        </div>
        <Button variant="outline" size="sm" fullWidth onClick={applyPrice} className="mt-2">
          Apply Price
        </Button>
      </div>

      {/* Stock */}
      <div>
        <h3 className="text-base font-semibold text-charcoal mb-3">Availability</h3>
        <div className="space-y-2">
          {[
            { value: "ready", label: "Ready Stock" },
            { value: "pre-order", label: "Pre-Order" },
            { value: "low", label: "Low Stock" },
          ].map(({ value, label }) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
              <input
                type="checkbox"
                checked={(filters.stock || []).includes(value as any)}
                onChange={() => onChange({ ...filters, stock: toggleArray(filters.stock as any[], value as any) })}
                className="w-5 h-5 rounded border-2 border-grey-light text-lime focus:ring-2 focus:ring-lime"
              />
              <span className="text-base text-charcoal group-hover:text-lime transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Style */}
      <div>
        <h3 className="text-base font-semibold text-charcoal mb-3">Style</h3>
        <div className="flex flex-wrap gap-2">
          {STYLES.map(({ value, label }) => {
            const active = (filters.styles || []).includes(value as any)
            return (
              <button
                key={value}
                onClick={() => onChange({ ...filters, styles: toggleArray(filters.styles as any[], value as any) })}
                className={cn(
                  "min-h-[36px] px-3 rounded-full text-sm border-2 transition-colors",
                  active
                    ? "border-lime bg-lime/10 text-lime font-semibold"
                    : "border-grey-light text-grey hover:border-lime hover:text-lime"
                )}
              >
                {label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h3 className="text-base font-semibold text-charcoal mb-3">Brand</h3>
        <div className="space-y-2">
          {BRANDS.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
              <input
                type="checkbox"
                checked={(filters.brands || []).includes(brand)}
                onChange={() => onChange({ ...filters, brands: toggleArray(filters.brands, brand) })}
                className="w-5 h-5 rounded border-2 border-grey-light text-lime focus:ring-2 focus:ring-lime"
              />
              <span className="text-base text-charcoal group-hover:text-lime transition-colors">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-base font-semibold text-charcoal mb-3">Material</h3>
        <div className="flex flex-wrap gap-2">
          {MATERIALS.map((mat) => {
            const active = (filters.materials || []).includes(mat)
            return (
              <button
                key={mat}
                onClick={() => onChange({ ...filters, materials: toggleArray(filters.materials, mat) })}
                className={cn(
                  "min-h-[36px] px-3 rounded-full text-sm border-2 transition-colors",
                  active
                    ? "border-lime bg-lime/10 text-lime font-semibold"
                    : "border-grey-light text-grey hover:border-lime hover:text-lime"
                )}
              >
                {mat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Delivery time */}
      <div>
        <h3 className="text-base font-semibold text-charcoal mb-3">Delivery Time</h3>
        <div className="space-y-2">
          {[
            { value: 7, label: "Within 1 week" },
            { value: 14, label: "Within 2 weeks" },
            { value: 30, label: "Within 1 month" },
          ].map(({ value, label }) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer group min-h-[44px]">
              <input
                type="radio"
                name="delivery-days"
                checked={filters.deliveryDaysMax === value}
                onChange={() => onChange({ ...filters, deliveryDaysMax: value })}
                className="w-5 h-5 border-2 border-grey-light text-lime focus:ring-2 focus:ring-lime"
              />
              <span className="text-base text-charcoal group-hover:text-lime transition-colors">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  )
}
