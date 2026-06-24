"use client"

import { notFound, useParams } from "next/navigation"
import Link from "next/link"
import { Heart, ShoppingCart, Scale, MessageCircle, Truck, Wrench, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { StarRating } from "@/components/ui/StarRating"
import { Accordion } from "@/components/ui/Accordion"
import { ProductCard } from "@/components/products/ProductCard"
import { StockBadge } from "@/components/products/StockBadge"
import { ProductImageViewer } from "@/components/products/ProductImageViewer"
import { getProductBySlug, products } from "@/lib/mock-data/products"
import { categories } from "@/lib/mock-data/categories"
import { formatPrice, calcDiscountPct } from "@/lib/utils/formatters"
import { buildProductEnquiryURL } from "@/lib/utils/whatsapp"
import { useCart } from "@/lib/hooks/useCart"
import { useWishlist } from "@/lib/hooks/useWishlist"
import { useCompare } from "@/lib/hooks/useCompare"
import { useState } from "react"
import { cn } from "@/lib/utils/cn"
import { resolveProductImage } from "@/lib/utils/imageUrl"

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string

  // All hooks must be called unconditionally before any early return
  const { add } = useCart()
  const { toggle: toggleWishlist, isWishlisted } = useWishlist()
  const { toggle: toggleCompare, isComparing } = useCompare()
  const [qty, setQty] = useState(1)
  const [withInstall, setWithInstall] = useState(false)
  const [addedToCart, setAddedToCart] = useState(false)

  const product = getProductBySlug(slug)
  if (!product) return notFound()

  const category = categories.find((c) => c.slug === product.category)
  const mainImage = product.images.find((i) => i.isMain) || product.images[0]
  const isOnSale = product.originalPrice && product.originalPrice > product.price
  const discountPct = isOnSale ? calcDiscountPct(product.originalPrice!, product.price) : 0
  const waUrl = buildProductEnquiryURL(product.name, product.sku)
  const related = (product.relatedProductIds || [])
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products

  function handleAddToCart() {
    if (!product) return
    add({
      productId: product.id,
      productName: product.name,
      productImage: resolveProductImage(mainImage?.url || "", product?.name || "", 96, 96),
      slug: product.slug,
      sku: product.sku,
      unitPrice: product.price,
      quantity: qty,
      installationRequested: withInstall,
      installationFee: product.installationFee || 0,
    })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  const specItems = [
    { id: "dimensions", title: "Dimensions & Size", content: <p className="text-base text-grey">{product.specs.dimensions}</p> },
    { id: "material", title: "Material & Color", content: <div><p className="text-base text-grey mb-1"><strong>Material:</strong> {product.specs.material}</p><p className="text-base text-grey"><strong>Color:</strong> {product.specs.color}</p></div> },
    { id: "warranty", title: "Warranty", content: <p className="text-base text-grey">{product.specs.warranty} manufacturer warranty. Contact our after-sales team for claims.</p> },
    ...(product.careInstructions ? [{ id: "care", title: "Care Instructions", content: <p className="text-base text-grey">{product.careInstructions}</p> }] : []),
    ...(product.suitableFor ? [{ id: "suitable", title: "Suitable For", content: <p className="text-base text-grey">{product.suitableFor}</p> }] : []),
    ...(product.warnings ? [{ id: "warnings", title: "Important Notes", content: <p className="text-base text-grey">{product.warnings}</p> }] : []),
  ]

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">

        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: category?.name || "Products", href: `/products?category=${product.category}` },
            { label: product.name },
          ]}
          className="mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Images */}
          <div>
            <ProductImageViewer images={product.images} productName={product.name} />
          </div>

          {/* Info */}
          <div className="space-y-5">
            {/* Brand & SKU */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="text-sm text-grey font-medium">{product.brand}</span>
              <span className="text-sm text-grey">SKU: {product.sku}</span>
            </div>

            {/* Name */}
            <h1 className="text-3xl font-bold text-charcoal leading-tight">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <StarRating value={product.rating} size="md" />
              <span className="text-base text-grey">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <StockBadge status={product.stock} />
              {isOnSale && <Badge variant="sale">-{discountPct}% OFF</Badge>}
              {product.tags.includes("best-seller") && <Badge variant="best-seller">Best Seller</Badge>}
              {product.tags.includes("new-arrival") && <Badge variant="new">New Arrival</Badge>}
              {product.showroomSample && <Badge variant="neutral">Showroom Sample Available</Badge>}
            </div>

            {/* Price */}
            <div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-charcoal">{formatPrice(product.price)}</span>
                {isOnSale && (
                  <span className="text-xl text-grey line-through">{formatPrice(product.originalPrice!)}</span>
                )}
              </div>
              {isOnSale && (
                <p className="text-base text-success font-medium mt-1">
                  You save {formatPrice(product.originalPrice! - product.price)}
                </p>
              )}
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Dimensions", value: product.specs.dimensions },
                { label: "Material", value: product.specs.material },
                { label: "Color", value: product.specs.color },
                { label: "Warranty", value: product.specs.warranty },
              ].map(({ label, value }) => (
                <div key={label} className="bg-white rounded-lg p-3 border border-grey-light">
                  <p className="text-xs text-grey mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-charcoal">{value}</p>
                </div>
              ))}
            </div>

            {/* Delivery info */}
            <div className="flex items-center gap-2 text-base text-grey">
              <Truck size={18} className="text-lime flex-shrink-0" />
              <span>Estimated delivery: <strong className="text-charcoal">{product.specs.deliveryDays} days</strong></span>
            </div>

            {/* Quantity */}
            <div>
              <label className="text-base font-medium text-charcoal mb-2 block">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-12 h-12 rounded-lg border-2 border-grey-light flex items-center justify-center text-charcoal hover:border-lime transition-colors text-xl font-bold"
                >
                  −
                </button>
                <span className="w-12 text-center text-xl font-semibold text-charcoal" aria-live="polite">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-12 h-12 rounded-lg border-2 border-grey-light flex items-center justify-center text-charcoal hover:border-lime transition-colors text-xl font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Installation option */}
            {product.installationAvailable && (
              <label className="flex items-start gap-3 cursor-pointer bg-white border-2 border-grey-light rounded-xl p-4 hover:border-lime transition-colors">
                <input
                  type="checkbox"
                  checked={withInstall}
                  onChange={(e) => setWithInstall(e.target.checked)}
                  className="mt-0.5 w-5 h-5 rounded border-2 border-grey-light text-lime focus:ring-2 focus:ring-lime"
                />
                <div>
                  <p className="text-base font-medium text-charcoal flex items-center gap-2">
                    <Wrench size={18} className="text-lime" />
                    Add Professional Installation
                  </p>
                  <p className="text-sm text-grey mt-0.5">
                    Includes assembly, placement and testing — {formatPrice(product.installationFee!)} per item
                  </p>
                </div>
              </label>
            )}

            {/* Action buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={product.stock === "out-of-stock"}
                  onClick={handleAddToCart}
                  leftIcon={addedToCart ? <CheckCircle size={20} /> : <ShoppingCart size={20} />}
                >
                  {addedToCart ? "Added to Cart!" : product.stock === "out-of-stock" ? "Out of Stock" : "Add to Cart"}
                </Button>

                <button
                  onClick={() => toggleWishlist(product.id)}
                  aria-label={isWishlisted(product.id) ? "Remove from wishlist" : "Save to wishlist"}
                  className={cn(
                    "w-14 min-h-[56px] flex items-center justify-center rounded-lg border-2 transition-colors flex-shrink-0",
                    isWishlisted(product.id)
                      ? "border-danger text-danger bg-danger/10"
                      : "border-grey-light text-grey hover:border-danger hover:text-danger"
                  )}
                >
                  <Heart size={22} fill={isWishlisted(product.id) ? "currentColor" : "none"} />
                </button>

                <button
                  onClick={() => toggleCompare(product.id)}
                  aria-label={isComparing(product.id) ? "Remove from comparison" : "Add to comparison"}
                  className={cn(
                    "w-14 min-h-[56px] flex items-center justify-center rounded-lg border-2 transition-colors flex-shrink-0",
                    isComparing(product.id)
                      ? "border-lime text-lime bg-lime/10"
                      : "border-grey-light text-grey hover:border-lime hover:text-lime"
                  )}
                >
                  <Scale size={22} />
                </button>
              </div>

              <Link href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" size="lg" fullWidth leftIcon={<MessageCircle size={20} />}>
                  WhatsApp Enquiry
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { icon: Truck, text: "Free delivery above RM500" },
                { icon: Wrench, text: "Professional installation available" },
                { icon: Shield, text: `${product.specs.warranty} warranty` },
                { icon: MessageCircle, text: "WhatsApp support" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-grey">
                  <Icon size={16} className="text-lime flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description & highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-white rounded-xl p-6 border border-grey-light">
            <h2 className="text-xl font-semibold text-charcoal mb-3">About This Product</h2>
            <p className="text-base text-grey leading-relaxed">{product.description}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-grey-light">
            <h2 className="text-xl font-semibold text-charcoal mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {product.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-base text-grey">
                  <CheckCircle size={20} className="text-lime flex-shrink-0 mt-0.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed specs accordion */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-charcoal mb-5">Product Details</h2>
          <Accordion items={specItems} allowMultiple />
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-charcoal mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
