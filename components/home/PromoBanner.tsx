import Link from "next/link"
import { Tag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { promotions } from "@/lib/mock-data/promotions"

export function PromoBanner() {
  const featured = promotions[0]

  return (
    <section className="py-6 px-4 lg:px-6 bg-white" aria-label="Current promotion">
      <div className="max-w-7xl mx-auto">
        <div className="bg-amber rounded-2xl px-6 py-8 lg:py-10 lg:px-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          <div className="flex-shrink-0 w-16 h-16 bg-amber-dark rounded-2xl flex items-center justify-center">
            <Tag size={32} className="text-white" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-sm font-bold text-amber-dark uppercase tracking-wider mb-1">Limited Time Offer</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-2">{featured.title}</h2>
            <p className="text-base text-charcoal/80">{featured.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/products?category=promotion">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRight size={18} />}>
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
