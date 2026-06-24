"use client"

import Link from "next/link"
import Image from "next/image"
import { X, Scale, ShoppingCart, CheckCircle, MinusCircle } from "lucide-react"
import { resolveProductImage } from "@/lib/utils/imageUrl"
import { Button } from "@/components/ui/Button"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { StarRating } from "@/components/ui/StarRating"
import { StockBadge } from "@/components/products/StockBadge"
import { EmptyState } from "@/components/ui/EmptyState"
import { useCompare } from "@/lib/hooks/useCompare"
import { useCart } from "@/lib/hooks/useCart"
import { products } from "@/lib/mock-data/products"
import { formatPrice } from "@/lib/utils/formatters"

const COMPARE_ROWS = [
  { key: "price", label: "Price" },
  { key: "brand", label: "Brand" },
  { key: "rating", label: "Rating" },
  { key: "stock", label: "Stock Status" },
  { key: "dimensions", label: "Dimensions" },
  { key: "material", label: "Material" },
  { key: "color", label: "Color" },
  { key: "warranty", label: "Warranty" },
  { key: "deliveryDays", label: "Delivery Time" },
  { key: "installation", label: "Installation" },
  { key: "showroom", label: "Showroom Sample" },
]

export default function ComparePage() {
  const { ids, remove } = useCompare()
  const { add } = useCart()

  const compareProducts = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products

  function getCellValue(product: typeof products[0], key: string) {
    switch (key) {
      case "price":
        return (
          <div>
            <span className="text-xl font-bold text-charcoal">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-grey line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        )
      case "brand": return <span className="text-base text-charcoal">{product.brand}</span>
      case "rating": return <StarRating value={product.rating} size="sm" showValue />
      case "stock": return <StockBadge status={product.stock} />
      case "dimensions": return <span className="text-sm text-grey">{product.specs.dimensions}</span>
      case "material": return <span className="text-sm text-grey">{product.specs.material}</span>
      case "color": return <span className="text-sm text-grey">{product.specs.color}</span>
      case "warranty": return <span className="text-sm text-grey">{product.specs.warranty}</span>
      case "deliveryDays": return <span className="text-sm text-grey">{product.specs.deliveryDays} days</span>
      case "installation":
        return product.installationAvailable
          ? <span className="flex items-center gap-1 text-sm text-success"><CheckCircle size={16} /> Available ({formatPrice(product.installationFee || 0)})</span>
          : <span className="flex items-center gap-1 text-sm text-grey"><MinusCircle size={16} /> Not available</span>
      case "showroom":
        return product.showroomSample
          ? <span className="flex items-center gap-1 text-sm text-success"><CheckCircle size={16} /> Available</span>
          : <span className="flex items-center gap-1 text-sm text-grey"><MinusCircle size={16} /> Not available</span>
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Compare Products" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-2">Compare Products</h1>
        <p className="text-base text-grey mb-8">Compare up to 3 products side by side to find the best fit for your home.</p>

        {compareProducts.length < 2 ? (
          <EmptyState
            icon={<Scale size={64} />}
            title={compareProducts.length === 0 ? "Nothing to compare yet" : "Add one more product to compare"}
            description="Browse our products and click the compare button to add up to 3 products here."
            action={
              <Link href="/products">
                <Button variant="primary" size="lg">Browse Products</Button>
              </Link>
            }
          />
        ) : (
          <div className="overflow-x-auto scroll-x">
            <table className="w-full min-w-[600px]" role="table" aria-label="Product comparison">
              <thead>
                <tr>
                  <th className="w-36 p-3 text-left" />
                  {compareProducts.map((product) => {
                    const mainImg = product.images.find((i) => i.isMain) || product.images[0]
                    const mainImage = mainImg ? { ...mainImg, url: resolveProductImage(mainImg.url, product.name, 200, 200) } : null
                    return (
                      <th key={product.id} className="p-3 text-left align-top">
                        <div className="bg-white rounded-xl border border-grey-light p-4 relative">
                          <button
                            onClick={() => remove(product.id)}
                            aria-label={`Remove ${product.name} from comparison`}
                            className="absolute top-2 right-2 text-grey hover:text-danger transition-colors p-1"
                          >
                            <X size={18} />
                          </button>
                          <div className="aspect-square bg-warm-dark rounded-lg overflow-hidden mb-3 relative">
                            {mainImage && <Image src={mainImage.url} alt={mainImage.alt} fill className="object-cover" sizes="200px" />}
                          </div>
                          <Link href={`/products/${product.slug}`} className="text-base font-semibold text-charcoal hover:text-lime transition-colors line-clamp-2">
                            {product.name}
                          </Link>
                          <button
                            onClick={() => add({
                              productId: product.id,
                              productName: product.name,
                              productImage: mainImg?.url || "",
                              slug: product.slug,
                              sku: product.sku,
                              unitPrice: product.price,
                              quantity: 1,
                              installationRequested: false,
                              installationFee: product.installationFee || 0,
                            })}
                            className="mt-3 w-full min-h-[48px] flex items-center justify-center gap-2 bg-lime text-white rounded-lg font-semibold text-sm hover:bg-lime-dark transition-colors"
                          >
                            <ShoppingCart size={16} /> Add to Cart
                          </button>
                        </div>
                      </th>
                    )
                  })}
                  {/* Empty slot placeholders */}
                  {Array.from({ length: Math.max(0, 3 - compareProducts.length) }).map((_, i) => (
                    <th key={`empty-${i}`} className="p-3">
                      <div className="bg-warm border-2 border-dashed border-grey-light rounded-xl p-4 text-center min-h-[180px] flex flex-col items-center justify-center gap-3">
                        <Scale size={32} className="text-grey-light" />
                        <p className="text-sm text-grey">Add another product to compare</p>
                        <Link href="/products">
                          <Button variant="outline" size="sm">Browse</Button>
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map(({ key, label }) => (
                  <tr key={key} className="border-t border-grey-light">
                    <td className="p-4 text-sm font-semibold text-grey align-middle">{label}</td>
                    {compareProducts.map((product) => (
                      <td key={product.id} className="p-4 bg-white border-l border-grey-light align-middle">
                        {getCellValue(product, key)}
                      </td>
                    ))}
                    {Array.from({ length: Math.max(0, 3 - compareProducts.length) }).map((_, i) => (
                      <td key={`empty-${i}`} className="p-4 border-l border-grey-light" />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
