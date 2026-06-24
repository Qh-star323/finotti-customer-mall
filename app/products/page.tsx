"use client"

import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, X, ChevronDown } from "lucide-react"
import { ProductCard } from "@/components/products/ProductCard"
import { FilterSidebar } from "@/components/products/FilterSidebar"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { EmptyState } from "@/components/ui/EmptyState"
import { Button } from "@/components/ui/Button"
import { products } from "@/lib/mock-data/products"
import { categories } from "@/lib/mock-data/categories"
import { filterProducts, sortProducts } from "@/lib/utils/filters"
import type { FilterOptions, SortOption, CategorySlug } from "@/lib/types"
import { cn } from "@/lib/utils/cn"

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "best-seller", label: "Best Sellers" },
  { value: "newest", label: "Newest First" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
  { value: "name-asc", label: "Name: A to Z" },
]

const TAG_FILTERS = [
  { id: "ready-stock", label: "Ready Stock" },
  { id: "new-arrival", label: "New Arrival" },
  { id: "best-seller", label: "Best Seller" },
  { id: "premium", label: "Premium" },
  { id: "value", label: "Value" },
  { id: "promotion", label: "Promotion" },
]

function ProductsContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category") as CategorySlug | null
  const tagParam = searchParams.get("tag")

  const [filters, setFilters] = useState<FilterOptions>({
    category: categoryParam || undefined,
    tags: tagParam ? [tagParam as any] : undefined,
  })
  const [sort, setSort] = useState<SortOption>("best-seller")
  const [showFilters, setShowFilters] = useState(false)

  const currentCategory = categories.find((c) => c.slug === filters.category)

  const filtered = useMemo(() => {
    return sortProducts(filterProducts(products, filters), sort)
  }, [filters, sort])

  const activeFilterCount = [
    filters.priceMin, filters.priceMax,
    ...(filters.colors || []),
    ...(filters.materials || []),
    ...(filters.brands || []),
    ...(filters.styles || []),
    ...(filters.stock || []),
    filters.deliveryDaysMax,
  ].filter(Boolean).length

  function resetFilters() {
    setFilters({ category: categoryParam || undefined })
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">

        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            ...(currentCategory ? [{ label: currentCategory.name }] : []),
          ]}
          className="mb-6"
        />

        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-charcoal mb-1">
            {currentCategory ? currentCategory.name : "All Furniture"}
          </h1>
          {currentCategory && (
            <p className="text-base text-grey">{currentCategory.description}</p>
          )}
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scroll-x">
          <button
            onClick={() => setFilters((f) => ({ ...f, category: undefined }))}
            className={cn(
              "flex-shrink-0 min-h-[40px] px-4 rounded-full text-sm font-medium border-2 transition-colors",
              !filters.category
                ? "border-lime bg-lime text-white"
                : "border-grey-light text-grey hover:border-lime hover:text-lime"
            )}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setFilters((f) => ({ ...f, category: cat.slug }))}
              className={cn(
                "flex-shrink-0 min-h-[40px] px-4 rounded-full text-sm font-medium border-2 transition-colors whitespace-nowrap",
                filters.category === cat.slug
                  ? "border-lime bg-lime text-white"
                  : "border-grey-light text-grey hover:border-lime hover:text-lime"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Sub-filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scroll-x">
          {TAG_FILTERS.map(({ id, label }) => {
            const active = (filters.tags || []).includes(id as any)
            return (
              <button
                key={id}
                onClick={() => setFilters((f) => ({
                  ...f,
                  tags: active
                    ? (f.tags || []).filter((t) => t !== id)
                    : [...(f.tags || []), id as any],
                }))}
                className={cn(
                  "flex-shrink-0 min-h-[40px] px-4 rounded-full text-sm font-medium border-2 transition-colors whitespace-nowrap",
                  active
                    ? "border-charcoal bg-charcoal text-white"
                    : "border-grey-light text-grey hover:border-charcoal hover:text-charcoal"
                )}
              >
                {label}
              </button>
            )
          })}
        </div>

        <div className="flex gap-6">
          {/* Sidebar — desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <FilterSidebar filters={filters} onChange={setFilters} onReset={resetFilters} />
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-5 gap-4 flex-wrap">
              <p className="text-base text-grey">
                <span className="font-semibold text-charcoal">{filtered.length}</span> products
                {activeFilterCount > 0 && (
                  <button onClick={resetFilters} className="ml-3 text-lime hover:underline text-sm">
                    Clear filters ({activeFilterCount})
                  </button>
                )}
              </p>

              <div className="flex items-center gap-3">
                {/* Mobile filter button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 min-h-[44px] px-4 border-2 border-grey-light rounded-lg text-sm font-medium text-charcoal hover:border-lime transition-colors"
                  aria-expanded={showFilters}
                >
                  <SlidersHorizontal size={16} />
                  Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="min-h-[44px] pl-3 pr-8 rounded-lg border-2 border-grey-light text-base text-charcoal bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime cursor-pointer"
                    aria-label="Sort products"
                  >
                    {SORT_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-grey pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filter panel */}
            {showFilters && (
              <div className="lg:hidden mb-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-lg font-semibold text-charcoal">Filters</h2>
                  <button onClick={() => setShowFilters(false)} className="p-2 text-grey hover:text-charcoal">
                    <X size={20} />
                    <span className="sr-only">Close filters</span>
                  </button>
                </div>
                <FilterSidebar filters={filters} onChange={setFilters} onReset={resetFilters} />
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <EmptyState
                title="No products found"
                description="Try adjusting your filters or search in a different category."
                action={
                  <Button variant="outline" onClick={resetFilters}>
                    Clear All Filters
                  </Button>
                }
              />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  )
}
