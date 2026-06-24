export type CategorySlug =
  | "sofa"
  | "mattress"
  | "bedroom"
  | "dining"
  | "living-room"
  | "office"
  | "promotion"

export type StockStatus = "ready" | "pre-order" | "low" | "out-of-stock"

export type ProductTag =
  | "new-arrival"
  | "best-seller"
  | "hot"
  | "promotion"
  | "premium"
  | "value"

export type StyleTag =
  | "modern"
  | "scandinavian"
  | "minimalist"
  | "industrial"
  | "classic"
  | "japandi"
  | "luxury"

export interface ProductSpec {
  dimensions: string      // e.g. "W220 x D95 x H85 cm"
  material: string
  color: string
  weight?: string
  warranty: string
  seatingCapacity?: string
  style?: StyleTag
  deliveryDays: number
}

export interface ProductImage {
  url: string
  alt: string
  isMain?: boolean
}

export interface Product {
  id: string
  slug: string
  name: string
  sku: string
  category: CategorySlug
  brand: string
  price: number
  originalPrice?: number
  images: ProductImage[]
  specs: ProductSpec
  stock: StockStatus
  tags: ProductTag[]
  rating: number
  reviewCount: number
  description: string
  highlights: string[]
  careInstructions?: string
  suitableFor?: string
  warnings?: string
  installationAvailable: boolean
  installationFee?: number
  showroomSample: boolean
  relatedProductIds?: string[]
  bundleProductIds?: string[]
}

export interface Category {
  id: string
  slug: CategorySlug
  name: string
  description: string
  image: string
  icon: string
  productCount: number
  featured: boolean
}

export interface FilterOptions {
  priceMin?: number
  priceMax?: number
  colors?: string[]
  materials?: string[]
  brands?: string[]
  sizes?: string[]
  stock?: StockStatus[]
  styles?: StyleTag[]
  deliveryDaysMax?: number
  tags?: ProductTag[]
  category?: CategorySlug
}

export type SortOption =
  | "price-asc"
  | "price-desc"
  | "newest"
  | "best-seller"
  | "rating"
  | "name-asc"
