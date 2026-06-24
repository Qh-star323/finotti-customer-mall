"use client"

import Link from "next/link"
import Image from "next/image"
import { resolveProductImage } from "@/lib/utils/imageUrl"
import { Package, CheckCircle, Clock, Truck, Wrench, MessageCircle, AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { Badge } from "@/components/ui/Badge"
import { EmptyState } from "@/components/ui/EmptyState"
import { orders } from "@/lib/mock-data/orders"
import { formatPrice, formatDateShort } from "@/lib/utils/formatters"
import { ORDER_STATUS_LABELS, type OrderStatus } from "@/lib/types"
import { buildOrderEnquiryURL } from "@/lib/utils/whatsapp"
import { useState } from "react"
import { cn } from "@/lib/utils/cn"

const STATUS_STEPS: OrderStatus[] = [
  "received", "confirming", "awaiting-stock", "delivery-scheduled",
  "out-for-delivery", "installing", "completed",
]

const STATUS_ICONS: Record<OrderStatus, React.ElementType> = {
  received: Package,
  confirming: Clock,
  "awaiting-stock": Package,
  "delivery-scheduled": Truck,
  "out-for-delivery": Truck,
  installing: Wrench,
  completed: CheckCircle,
  "after-sales": AlertCircle,
}

const STATUS_COLORS: Record<OrderStatus, string> = {
  received: "neutral",
  confirming: "promo",
  "awaiting-stock": "pre-order",
  "delivery-scheduled": "value",
  "out-for-delivery": "value",
  installing: "promo",
  completed: "ready",
  "after-sales": "sale",
}

// Using demo orders for the logged-in user (mem-001 in mock)
const myOrders = orders.filter((o) => o.customerId === "mem-001")

export default function OrdersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(myOrders[0]?.id || null)

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-4xl mx-auto px-4 lg:px-6 py-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "My Orders" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-2">My Orders</h1>
        <p className="text-base text-grey mb-8">Track your orders and manage delivery or after-sales requests.</p>

        {myOrders.length === 0 ? (
          <EmptyState
            icon={<Package size={64} />}
            title="No orders yet"
            description="When you place an order, it will appear here."
            action={
              <Link href="/products">
                <Button variant="primary" size="lg">Start Shopping</Button>
              </Link>
            }
          />
        ) : (
          <div className="space-y-5">
            {myOrders.map((order) => {
              const isExpanded = expandedId === order.id
              const StatusIcon = STATUS_ICONS[order.status]
              const statusBadgeVariant = STATUS_COLORS[order.status] as any
              const waUrl = buildOrderEnquiryURL(order.orderNumber)
              const stepIndex = STATUS_STEPS.indexOf(order.status)

              return (
                <div key={order.id} className="bg-white rounded-xl border border-grey-light overflow-hidden">
                  {/* Header */}
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : order.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-warm transition-colors text-left"
                  >
                    <div className="flex items-center gap-4 flex-wrap">
                      <div>
                        <p className="text-sm text-grey">Order Number</p>
                        <p className="text-base font-bold text-charcoal">{order.orderNumber}</p>
                      </div>
                      <div className="hidden sm:block">
                        <p className="text-sm text-grey">Date</p>
                        <p className="text-base text-charcoal">{formatDateShort(order.createdAt)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-grey">Total</p>
                        <p className="text-base font-semibold text-charcoal">{formatPrice(order.total)}</p>
                      </div>
                      <Badge variant={statusBadgeVariant}>{ORDER_STATUS_LABELS[order.status]}</Badge>
                    </div>
                    {isExpanded ? <ChevronUp size={20} className="text-grey flex-shrink-0" /> : <ChevronDown size={20} className="text-grey flex-shrink-0" />}
                  </button>

                  {/* Expanded content */}
                  {isExpanded && (
                    <div className="border-t border-grey-light">
                      {/* Progress timeline */}
                      {order.status !== "after-sales" && (
                        <div className="px-5 py-5 bg-warm overflow-x-auto">
                          <div className="flex items-center min-w-max gap-0">
                            {STATUS_STEPS.map((s, i) => {
                              const done = i <= stepIndex
                              const current = i === stepIndex
                              return (
                                <div key={s} className="flex items-center">
                                  <div className="flex flex-col items-center gap-1.5">
                                    <div className={cn(
                                      "w-8 h-8 rounded-full flex items-center justify-center border-2 flex-shrink-0",
                                      done ? "border-success bg-success text-white" : "border-grey-light bg-white text-grey"
                                    )}>
                                      <CheckCircle size={16} />
                                    </div>
                                    <span className={cn("text-xs text-center w-16", current ? "font-semibold text-charcoal" : "text-grey")}>
                                      {ORDER_STATUS_LABELS[s]}
                                    </span>
                                  </div>
                                  {i < STATUS_STEPS.length - 1 && (
                                    <div className={cn("h-0.5 w-8 sm:w-12 mb-5", i < stepIndex ? "bg-success" : "bg-grey-light")} />
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      )}

                      {/* Items */}
                      <div className="px-5 py-4">
                        <h3 className="text-base font-semibold text-charcoal mb-3">Order Items</h3>
                        {order.items.map((item) => (
                          <div key={item.productId} className="flex items-center gap-3 py-3 border-b border-grey-light last:border-0">
                            <div className="w-14 h-14 bg-warm-dark rounded-lg flex-shrink-0 relative overflow-hidden">
                              <Image src={resolveProductImage(item.productImage || "", item.productName, 56, 56)} alt={item.productName} fill className="object-cover" sizes="56px" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-base font-medium text-charcoal line-clamp-1">{item.productName}</p>
                              <p className="text-sm text-grey">Qty: {item.quantity} × {formatPrice(item.unitPrice)}</p>
                              {item.installationRequested && <p className="text-sm text-lime">+ Installation</p>}
                            </div>
                            <span className="text-base font-semibold text-charcoal">{formatPrice(item.subtotal)}</span>
                          </div>
                        ))}
                      </div>

                      {/* Financial summary */}
                      <div className="px-5 pb-4">
                        <div className="bg-warm rounded-xl p-4 space-y-2">
                          <div className="flex justify-between text-base text-grey"><span>Subtotal</span><span>{formatPrice(order.subtotal)}</span></div>
                          {order.deliveryFee > 0 && <div className="flex justify-between text-base text-grey"><span>Delivery</span><span>{formatPrice(order.deliveryFee)}</span></div>}
                          {order.installationFee > 0 && <div className="flex justify-between text-base text-grey"><span>Installation</span><span>{formatPrice(order.installationFee)}</span></div>}
                          {order.discount > 0 && <div className="flex justify-between text-base text-success"><span>Discount</span><span>−{formatPrice(order.discount)}</span></div>}
                          <div className="flex justify-between text-base font-semibold text-charcoal pt-2 border-t border-grey-light"><span>Total</span><span>{formatPrice(order.total)}</span></div>
                          {order.amountPaid > 0 && <div className="flex justify-between text-base text-success"><span>Amount Paid</span><span>{formatPrice(order.amountPaid)}</span></div>}
                          {order.balanceDue > 0 && <div className="flex justify-between text-base font-bold text-danger"><span>Balance Due</span><span>{formatPrice(order.balanceDue)}</span></div>}
                        </div>
                      </div>

                      {/* Delivery info */}
                      <div className="px-5 pb-4">
                        <p className="text-sm text-grey">
                          Delivering to: <strong className="text-charcoal">{order.delivery.recipientName}</strong> — {order.delivery.addressLine1}, {order.delivery.city}, {order.delivery.state}
                        </p>
                        {order.estimatedDeliveryDate && (
                          <p className="text-sm text-grey mt-1">
                            Estimated delivery: <strong className="text-charcoal">{formatDateShort(order.estimatedDeliveryDate)}</strong>
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="px-5 pb-5 flex flex-wrap gap-3">
                        <Link href={waUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="whatsapp" size="md" leftIcon={<MessageCircle size={18} />}>
                            Contact Support
                          </Button>
                        </Link>
                        {order.status === "completed" && (
                          <Link href={`/feedback?order=${order.orderNumber}`}>
                            <Button variant="outline" size="md" leftIcon={<AlertCircle size={18} />}>
                              Report Issue / After-Sales
                            </Button>
                          </Link>
                        )}
                        {["out-for-delivery", "delivery-scheduled"].includes(order.status) && (
                          <Link href={waUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="md">
                              Reschedule Delivery
                            </Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
