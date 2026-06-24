import type { Product, FilterOptions, SortOption } from "@/lib/types"

export function filterProducts(products: Product[], filters: FilterOptions): Product[] {
  return products.filter((p) => {
    if (filters.category && p.category !== filters.category) return false
    if (filters.priceMin !== undefined && p.price < filters.priceMin) return false
    if (filters.priceMax !== undefined && p.price > filters.priceMax) return false
    if (filters.colors?.length && !filters.colors.includes(p.specs.color)) return false
    if (filters.materials?.length && !filters.materials.some((m) => p.specs.material.toLowerCase().includes(m.toLowerCase()))) return false
    if (filters.brands?.length && !filters.brands.includes(p.brand)) return false
    if (filters.stock?.length && !filters.stock.includes(p.stock)) return false
    if (filters.styles?.length && (!p.specs.style || !filters.styles.includes(p.specs.style))) return false
    if (filters.deliveryDaysMax !== undefined && p.specs.deliveryDays > filters.deliveryDaysMax) return false
    if (filters.tags?.length && !filters.tags.some((t) => p.tags.includes(t))) return false
    return true
  })
}

export function sortProducts(products: Product[], sort: SortOption): Product[] {
  const arr = [...products]
  switch (sort) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price)
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price)
    case "newest":
      return arr.filter((p) => p.tags.includes("new-arrival")).concat(arr.filter((p) => !p.tags.includes("new-arrival")))
    case "best-seller":
      return arr.sort((a, b) => b.reviewCount - a.reviewCount)
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating)
    case "name-asc":
      return arr.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return arr
  }
}
