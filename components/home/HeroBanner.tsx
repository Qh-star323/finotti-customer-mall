import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"

export function HeroBanner() {
  const waUrl = buildGeneralEnquiryURL()

  return (
    <section className="relative bg-charcoal overflow-hidden" aria-label="Hero banner">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-grey-dark to-charcoal opacity-90" />
      <div className="absolute inset-0 bg-[url('/images/hero/hero-01.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-lime/20 text-lime rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-lime rounded-full" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-wide">50 Years of Furniture Excellence</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
            为每一个家，<br />
            <span className="text-lime">找到真正合适</span><br />
            的家具。
          </h1>

          {/* Sub-headline */}
          <p className="text-lg lg:text-xl text-warm/80 leading-relaxed mb-10 max-w-lg">
            Finotti Furniture Mall结合50年家具经验、精选品质与专业服务，为家庭提供更安心的家具选择。
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" aria-label="Browse our furniture collection">
              <Button size="lg" variant="primary" rightIcon={<ArrowRight size={20} />}>
                Browse Furniture
              </Button>
            </Link>
            <Link
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp us for furniture consultation"
            >
              <Button size="lg" variant="whatsapp" leftIcon={<MessageCircle size={20} />}>
                WhatsApp Consultation
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 text-warm/60 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-lime font-bold text-xl">50+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-4 bg-white/20" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="text-lime font-bold text-xl">10K+</span>
              <span>Happy Families</span>
            </div>
            <div className="w-px h-4 bg-white/20" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <span className="text-lime font-bold text-xl">Free</span>
              <span>Delivery &gt;RM500</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
