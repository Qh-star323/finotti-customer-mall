"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Package, MapPin, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { useCart } from "@/lib/hooks/useCart"
import { formatPrice } from "@/lib/utils/formatters"
import { deliverySchema, type DeliveryData } from "@/lib/utils/validators"
import { MALAYSIAN_STATES } from "@/lib/types"
import { cn } from "@/lib/utils/cn"

type Step = 1 | 2 | 3 | 4

const STEPS = [
  { num: 1, label: "Confirm Order", icon: Package },
  { num: 2, label: "Delivery Info", icon: MapPin },
  { num: 3, label: "Delivery Options", icon: Truck },
  { num: 4, label: "Payment", icon: CreditCard },
]

const PAYMENT_METHODS = [
  { value: "full-payment", label: "Full Payment (FPX / Credit Card / E-Wallet)" },
  { value: "deposit", label: "Pay Deposit (RM500 now, balance on delivery)" },
  { value: "in-store", label: "Pay at Store" },
  { value: "sales-assisted", label: "Sales Consultant Will Contact Me" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totals, clearCart } = useCart()
  const [step, setStep] = useState<Step>(1)
  const [deliveryData, setDeliveryData] = useState<DeliveryData | null>(null)
  const [installationSelected, setInstallationSelected] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("full-payment")
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderNumber] = useState(() => `FNT-2026-${String(Math.floor(Math.random() * 90000) + 10000)}`)

  const { register, handleSubmit, formState: { errors } } = useForm<DeliveryData>({
    resolver: zodResolver(deliverySchema),
  })

  const stateOptions = MALAYSIAN_STATES.map((s) => ({ value: s, label: s }))

  function onDeliverySubmit(data: DeliveryData) {
    setDeliveryData(data)
    setStep(3)
  }

  function handlePlaceOrder() {
    // TODO: Send order to Supabase, trigger email via Resend, process payment via payment gateway
    setOrderPlaced(true)
    clearCart()
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-warm flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-grey-light p-10">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-success" />
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-2">Order Placed!</h1>
          <p className="text-base text-grey mb-4">
            Thank you for your order. Our team will contact you within 24 hours to confirm.
          </p>
          <div className="bg-warm rounded-xl p-4 mb-6">
            <p className="text-sm text-grey mb-1">Your Order Number</p>
            <p className="text-2xl font-bold text-charcoal">{orderNumber}</p>
          </div>
          <div className="space-y-3">
            <Button variant="primary" size="lg" fullWidth onClick={() => router.push("/orders")}>
              View My Orders
            </Button>
            <Button variant="ghost" size="md" fullWidth onClick={() => router.push("/")}>
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Cart", href: "/cart" }, { label: "Checkout" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-8">Checkout</h1>

        {/* Step indicator */}
        <div className="flex items-center mb-8 overflow-x-auto pb-2">
          {STEPS.map(({ num, label, icon: Icon }, i) => (
            <div key={num} className="flex items-center flex-shrink-0">
              <div className="flex flex-col items-center gap-1.5">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                  step === num
                    ? "border-lime bg-lime text-white"
                    : step > num
                    ? "border-success bg-success text-white"
                    : "border-grey-light bg-white text-grey"
                )}>
                  {step > num ? <CheckCircle size={20} /> : <Icon size={18} />}
                </div>
                <span className={cn("text-xs font-medium hidden sm:block", step === num ? "text-lime" : step > num ? "text-success" : "text-grey")}>
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div className={cn("h-0.5 w-12 sm:w-20 mx-1 transition-colors", step > num ? "bg-success" : "bg-grey-light")} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Confirm Order */}
        {step === 1 && (
          <div className="bg-white rounded-xl border border-grey-light p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-5">Confirm Your Order</h2>
            {items.map((item) => (
              <div key={item.productId} className="flex items-center gap-4 py-4 border-b border-grey-light last:border-0">
                <div className="w-16 h-16 bg-warm-dark rounded-lg flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-base font-medium text-charcoal">{item.productName}</p>
                  <p className="text-sm text-grey">Qty: {item.quantity}</p>
                  {item.installationRequested && <p className="text-sm text-lime">+ Installation</p>}
                </div>
                <span className="text-base font-semibold text-charcoal">{formatPrice(item.unitPrice * item.quantity)}</span>
              </div>
            ))}

            <div className="mt-5 pt-4 border-t border-grey-light space-y-2">
              <div className="flex justify-between text-base text-grey"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
              <div className="flex justify-between text-base text-grey"><span>Delivery</span><span>{totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee)}</span></div>
              {totals.installationFee > 0 && <div className="flex justify-between text-base text-grey"><span>Installation</span><span>{formatPrice(totals.installationFee)}</span></div>}
              <div className="flex justify-between text-lg font-semibold text-charcoal pt-2 border-t border-grey-light"><span>Total</span><span>{formatPrice(totals.total)}</span></div>
            </div>

            <Button variant="primary" size="lg" fullWidth className="mt-6" onClick={() => setStep(2)}>
              Continue to Delivery Info
            </Button>
          </div>
        )}

        {/* Step 2: Delivery Info */}
        {step === 2 && (
          <form onSubmit={handleSubmit(onDeliverySubmit)} className="bg-white rounded-xl border border-grey-light p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-5">Delivery Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input label="Full Name" required error={errors.recipientName?.message} {...register("recipientName")} />
              <Input label="Phone Number" type="tel" required error={errors.phone?.message} placeholder="012-345 6789" {...register("phone")} />
              <Input label="Email Address" type="email" required error={errors.email?.message} className="sm:col-span-2" {...register("email")} />
              <Input label="Address Line 1" required error={errors.addressLine1?.message} placeholder="House / Unit No., Street" className="sm:col-span-2" {...register("addressLine1")} />
              <Input label="Address Line 2 (Optional)" placeholder="Area, Taman, etc." className="sm:col-span-2" {...register("addressLine2")} />
              <Input label="City" required error={errors.city?.message} {...register("city")} />
              <Input label="Postcode" required error={errors.postcode?.message} maxLength={5} {...register("postcode")} />
              <Select
                label="State"
                required
                error={errors.state?.message}
                options={stateOptions}
                placeholder="Select state"
                className="sm:col-span-2"
                {...register("state")}
              />
              <div className="sm:col-span-2">
                <label className="text-base font-medium text-charcoal mb-1.5 block">Delivery Notes (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Any special instructions for our delivery team..."
                  className="w-full rounded-lg border border-grey-light px-4 py-2.5 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime resize-none"
                  {...register("notes")}
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <Button type="button" variant="ghost" size="lg" onClick={() => setStep(1)}>Back</Button>
              <Button type="submit" variant="primary" size="lg" fullWidth>Continue to Delivery Options</Button>
            </div>
          </form>
        )}

        {/* Step 3: Delivery Options */}
        {step === 3 && (
          <div className="bg-white rounded-xl border border-grey-light p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-5">Delivery & Installation Options</h2>

            <div className="mb-6">
              <h3 className="text-base font-medium text-charcoal mb-3">Preferred Delivery Date</h3>
              <input
                type="date"
                min={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                className="min-h-[48px] rounded-lg border border-grey-light px-4 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime w-full sm:w-auto"
                aria-label="Preferred delivery date"
              />
              <p className="text-sm text-grey mt-2">We will confirm your exact delivery date via WhatsApp or call.</p>
            </div>

            <div className="mb-6">
              <h3 className="text-base font-medium text-charcoal mb-3">Preferred Time Slot</h3>
              <div className="flex flex-wrap gap-3">
                {["9am – 12pm", "12pm – 3pm", "3pm – 6pm"].map((slot) => (
                  <button
                    key={slot}
                    className="min-h-[48px] px-5 rounded-lg border-2 border-grey-light text-base text-charcoal hover:border-lime transition-colors focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {items.some((i) => i.installationRequested === false) && (
              <div className="mb-6">
                <label className="flex items-start gap-3 cursor-pointer bg-warm rounded-xl border-2 border-grey-light p-4 hover:border-lime transition-colors">
                  <input
                    type="checkbox"
                    checked={installationSelected}
                    onChange={(e) => setInstallationSelected(e.target.checked)}
                    className="mt-0.5 w-5 h-5 rounded border-2 border-grey-light text-lime focus:ring-2 focus:ring-lime"
                  />
                  <div>
                    <p className="text-base font-medium text-charcoal">Add Professional Installation (RM150 per item)</p>
                    <p className="text-sm text-grey mt-0.5">Our team will assemble and position your furniture.</p>
                  </div>
                </label>
              </div>
            )}

            <div className="flex gap-3">
              <Button variant="ghost" size="lg" onClick={() => setStep(2)}>Back</Button>
              <Button variant="primary" size="lg" fullWidth onClick={() => setStep(4)}>Continue to Payment</Button>
            </div>
          </div>
        )}

        {/* Step 4: Payment */}
        {step === 4 && (
          <div className="bg-white rounded-xl border border-grey-light p-6">
            <h2 className="text-xl font-semibold text-charcoal mb-5">Payment Method</h2>
            <p className="text-sm text-grey mb-5 bg-amber/10 rounded-lg px-4 py-3">
              <strong>Note:</strong> Online payment is coming soon. Currently, our team will contact you to confirm payment after you place your order.
            </p>

            <div className="space-y-3 mb-8">
              {PAYMENT_METHODS.map(({ value, label }) => (
                <label
                  key={value}
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors",
                    paymentMethod === value ? "border-lime bg-lime/5" : "border-grey-light hover:border-lime"
                  )}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={value}
                    checked={paymentMethod === value}
                    onChange={() => setPaymentMethod(value)}
                    className="w-5 h-5 border-2 border-grey-light text-lime focus:ring-2 focus:ring-lime"
                  />
                  <span className="text-base text-charcoal font-medium">{label}</span>
                </label>
              ))}
            </div>

            {/* Final summary */}
            <div className="bg-warm rounded-xl p-5 mb-6 space-y-2">
              <div className="flex justify-between text-base text-grey"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
              <div className="flex justify-between text-base text-grey"><span>Delivery</span><span>{totals.deliveryFee === 0 ? "FREE" : formatPrice(totals.deliveryFee)}</span></div>
              {totals.installationFee > 0 && <div className="flex justify-between text-base text-grey"><span>Installation</span><span>{formatPrice(totals.installationFee)}</span></div>}
              <div className="flex justify-between text-xl font-bold text-charcoal pt-2 border-t border-grey-light"><span>Total</span><span>{formatPrice(totals.total)}</span></div>
              {paymentMethod === "deposit" && (
                <div className="flex justify-between text-base text-lime font-medium"><span>Deposit required</span><span>RM500</span></div>
              )}
            </div>

            <div className="flex gap-3">
              <Button variant="ghost" size="lg" onClick={() => setStep(3)}>Back</Button>
              <Button variant="primary" size="lg" fullWidth onClick={handlePlaceOrder}>
                {paymentMethod === "full-payment" ? "Place Order & Pay" : "Place Order"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
