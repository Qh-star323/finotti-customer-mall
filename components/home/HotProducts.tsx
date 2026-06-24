import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/products/ProductCard"
import { getFeaturedProducts } from "@/lib/mock-data/products"

export function HotProducts() {
  const hotProducts = getFeaturedProducts("best-seller", 6)

  return (
    <section className="py-14 bg-white" aria-labelledby="hot-products-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 id="hot-products-heading" className="text-3xl font-bold text-charcoal mb-1">Best Sellers</h2>
            <p className="text-base text-grey">Most loved by Malaysian families</p>
          </div>
          <Link
            href="/products?tag=best-seller"
            className="flex items-center gap-1 text-lime font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
