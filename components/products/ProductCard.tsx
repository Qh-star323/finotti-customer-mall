"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingCart, Scale } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { formatPrice, calcDiscountPct } from "@/lib/utils/formatters"
import { Badge } from "@/components/ui/Badge"
import { StarRating } from "@/components/ui/StarRating"
import { StockBadge } from "./StockBadge"
import { useCart } from "@/lib/hooks/useCart"
import { useWishlist } from "@/lib/hooks/useWishlist"
import { useCompare } from "@/lib/hooks/useCompare"
import type { Product } from "@/lib/types"
import { resolveProductImage } from "@/lib/utils/imageUrl"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { add } = useCart()
  const { toggle: toggleWishlist, isWishlisted } = useWishlist()
  const { toggle: toggleCompare, isComparing, isFull } = useCompare()

  const isOnSale = product.originalPrice && product.originalPrice > product.price
  const discountPct = isOnSale ? calcDiscountPct(product.originalPrice!, product.price) : 0
  const mainImage = product.images.find((img) => img.isMain) || product.images[0]

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    add({
      productId: product.id,
      productName: product.name,
      productImage: resolveProductImage(mainImage?.url || "", product.name, 96, 96),
      slug: product.slug,
      sku: product.sku,
      unitPrice: product.price,
      quantity: 1,
      installationRequested: false,
      installationFee: product.installationFee || 0,
    })
  }

  return (
    <div className={cn("group bg-white rounded-xl border border-grey-light overflow-hidden hover:shadow-md transition-shadow duration-200", className)}>
      <Link href={`/products/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-warm-dark overflow-hidden">
          <Image
            src={resolveProductImage(mainImage?.url || "", product.name, 400, 300)}
            alt={mainImage?.alt || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isOnSale && <Badge variant="sale">-{discountPct}%</Badge>}
            {product.tags.includes("new-arrival") && !isOnSale && <Badge variant="new">New</Badge>}
            {product.tags.includes("best-seller") && <Badge variant="best-seller">Best Seller</Badge>}
            {product.tags.includes("hot") && !product.tags.includes("best-seller") && <Badge variant="hot">Hot</Badge>}
          </div>

          {/* Wishlist button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product.id) }}
            aria-label={isWishlisted(product.id) ? "Remove from wishlist" : "Add to wishlist"}
            className={cn(
              "absolute top-2 right-2 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center transition-colors",
              isWishlisted(product.id) ? "text-danger" : "text-grey hover:text-danger"
            )}
          >
            <Heart size={18} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-2">
            <p className="text-xs text-grey mb-1">{product.brand}</p>
            <h3 className="text-base font-semibold text-charcoal line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <StarRating value={product.rating} size="sm" />
            <span className="text-sm text-grey">({product.reviewCount})</span>
          </div>

          {/* Stock */}
          <div className="mb-3">
            <StockBadge status={product.stock} />
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xl font-bold text-charcoal">{formatPrice(product.price)}</span>
            {isOnSale && (
              <span className="text-sm text-grey line-through">{formatPrice(product.originalPrice!)}</span>
            )}
          </div>

          {product.specs.deliveryDays <= 7 && product.stock === "ready" && (
            <p className="text-xs text-success font-medium">Delivery in {product.specs.deliveryDays} days</p>
          )}
        </div>
      </Link>

      {/* Add to cart + compare */}
      <div className="px-4 pb-4 flex gap-2">
        <button
          onClick={handleAddToCart}
          disabled={product.stock === "out-of-stock"}
          className={cn(
            "flex-1 min-h-[48px] flex items-center justify-center gap-2 rounded-lg font-semibold text-sm transition-colors",
            product.stock === "out-of-stock"
              ? "bg-grey-light text-grey cursor-not-allowed"
              : "bg-lime text-white hover:bg-lime-dark active:bg-lime-dark"
          )}
          aria-label={`Add ${product.name} to cart`}
        >
          <ShoppingCart size={16} />
          {product.stock === "out-of-stock" ? "Out of Stock" : "Add to Cart"}
        </button>
        <button
          onClick={() => toggleCompare(product.id)}
          disabled={isFull && !isComparing(product.id)}
          aria-label={isComparing(product.id) ? "Remove from comparison" : "Add to comparison"}
          className={cn(
            "w-12 min-h-[48px] flex items-center justify-center rounded-lg border-2 transition-colors",
            isComparing(product.id)
              ? "border-lime text-lime bg-lime/10"
              : isFull
              ? "border-grey-light text-grey cursor-not-allowed"
              : "border-grey-light text-grey hover:border-lime hover:text-lime"
          )}
        >
          <Scale size={18} />
        </button>
      </div>
    </div>
  )
}
