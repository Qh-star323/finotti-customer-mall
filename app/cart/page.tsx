"use client"

import Link from "next/link"
import Image from "next/image"
import { resolveProductImage } from "@/lib/utils/imageUrl"
import { Trash2, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { EmptyState } from "@/components/ui/EmptyState"
import { useCart } from "@/lib/hooks/useCart"
import { formatPrice } from "@/lib/utils/formatters"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"
import { FREE_DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE } from "@/lib/types"

export default function CartPage() {
  const { items, totals, setQty, remove, isLoaded } = useCart()
  const waUrl = buildGeneralEnquiryURL()

  if (!isLoaded) return null

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Cart" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <EmptyState
            icon={<ShoppingBag size={64} />}
            title="Your cart is empty"
            description="Browse our furniture collection and add items you love."
            action={
              <Link href="/products">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight size={18} />}>
                  Browse Furniture
                </Button>
              </Link>
            }
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.productId} className="bg-white rounded-xl border border-grey-light p-5 flex gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 bg-warm-dark rounded-lg overflow-hidden">
                    {item.productImage ? (
                      <Image src={resolveProductImage(item.productImage || "", item.productName, 96, 96)} alt={item.productName} fill className="object-cover" sizes="96px" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-grey-light">
                        <ShoppingBag size={24} />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <Link href={`/products/${item.slug}`} className="text-base font-semibold text-charcoal hover:text-lime transition-colors line-clamp-2">
                      {item.productName}
                    </Link>
                    <p className="text-sm text-grey mt-1">SKU: {item.sku}</p>
                    {item.installationRequested && (
                      <p className="text-sm text-lime mt-1">+ Professional Installation ({formatPrice(item.installationFee)})</p>
                    )}

                    <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
                      {/* Qty controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setQty(item.productId, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-10 h-10 rounded-lg border-2 border-grey-light flex items-center justify-center text-charcoal hover:border-lime transition-colors font-bold"
                        >
                          −
                        </button>
                        <span className="w-10 text-center text-base font-semibold text-charcoal" aria-live="polite">{item.quantity}</span>
                        <button
                          onClick={() => setQty(item.productId, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-10 h-10 rounded-lg border-2 border-grey-light flex items-center justify-center text-charcoal hover:border-lime transition-colors font-bold"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-charcoal">
                          {formatPrice(item.unitPrice * item.quantity)}
                        </span>
                        <button
                          onClick={() => remove(item.productId)}
                          aria-label={`Remove ${item.productName} from cart`}
                          className="text-grey hover:text-danger transition-colors p-2"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-white rounded-xl border border-grey-light p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-charcoal mb-5">Order Summary</h2>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-base text-grey">
                    <span>Subtotal ({totals.itemCount} items)</span>
                    <span className="text-charcoal font-medium">{formatPrice(totals.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-base text-grey">
                    <span>Delivery Fee</span>
                    <span className={totals.deliveryFee === 0 ? "text-success font-medium" : "text-charcoal font-medium"}>
                      {totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee)}
                    </span>
                  </div>
                  {totals.installationFee > 0 && (
                    <div className="flex justify-between text-base text-grey">
                      <span>Installation Fee</span>
                      <span className="text-charcoal font-medium">{formatPrice(totals.installationFee)}</span>
                    </div>
                  )}
                  {totals.couponDiscount > 0 && (
                    <div className="flex justify-between text-base text-success">
                      <span>Discount</span>
                      <span>−{formatPrice(totals.couponDiscount)}</span>
                    </div>
                  )}
                </div>

                {totals.deliveryFee > 0 && (
                  <p className="text-sm text-amber-dark bg-amber/10 rounded-lg px-3 py-2 mb-4">
                    Add {formatPrice(FREE_DELIVERY_THRESHOLD - totals.subtotal)} more for free delivery
                  </p>
                )}

                <div className="border-t border-grey-light pt-4 mb-5">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-charcoal">Total</span>
                    <span className="text-2xl font-bold text-charcoal">{formatPrice(totals.total)}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link href="/checkout">
                    <Button variant="primary" size="lg" fullWidth rightIcon={<ArrowRight size={18} />}>
                      Proceed to Checkout
                    </Button>
                  </Link>
                  <Link href={waUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="whatsapp" size="md" fullWidth leftIcon={<MessageCircle size={18} />}>
                      Order via WhatsApp
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button variant="ghost" size="md" fullWidth>
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
