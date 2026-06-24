"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Heart, Search, ChevronDown, X, Scale, ArrowRight } from "lucide-react"
import { useState, useCallback } from "react"
import { cn } from "@/lib/utils/cn"
import { useCart } from "@/lib/hooks/useCart"
import { useWishlist } from "@/lib/hooks/useWishlist"
import { useCompare } from "@/lib/hooks/useCompare"

const shopCategories = [
  { label: "Sofa & Living", href: "/products?category=sofa", desc: "Sectional, 2-seater, 3-seater" },
  { label: "Mattress", href: "/products?category=mattress", desc: "Spring, foam, latex" },
  { label: "Bedroom", href: "/products?category=bedroom", desc: "Beds, wardrobes, dressers" },
  { label: "Dining", href: "/products?category=dining", desc: "Tables, chairs, dining sets" },
  { label: "Living Room", href: "/products?category=living-room", desc: "TV consoles, coffee tables" },
  { label: "Office Furniture", href: "/products?category=office", desc: "Desks, office chairs" },
  { label: "Promotion", href: "/products?tag=promotion", desc: "Discounts up to 40% off", highlight: true },
]

const highlights = [
  { label: "New Arrivals", href: "/products?tag=new-arrival" },
  { label: "Best Sellers", href: "/products?tag=best-seller" },
  { label: "Ready Stock", href: "/products?tag=ready-stock" },
  { label: "Premium Collection", href: "/products?tag=premium" },
]

const quickAccess = [
  { label: "Register / Login", href: "/register" },
  { label: "My Orders", href: "/orders" },
  { label: "Feedback & After-Sales", href: "/feedback" },
  { label: "Contact Us", href: "/support" },
  { label: "Careers", href: "/careers" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { totals } = useCart()
  const { count: wishlistCount } = useWishlist()
  const { count: compareCount } = useCompare()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [leaveTimer, setLeaveTimer] = useState<ReturnType<typeof setTimeout> | null>(null)

  const openMega = useCallback(() => {
    if (leaveTimer) clearTimeout(leaveTimer)
    setMegaOpen(true)
  }, [leaveTimer])

  const closeMega = useCallback(() => {
    const t = setTimeout(() => setMegaOpen(false), 120)
    setLeaveTimer(t)
  }, [])

  const cancelClose = useCallback(() => {
    if (leaveTimer) clearTimeout(leaveTimer)
  }, [leaveTimer])

  return (
    <>
      {/* ── BACKDROP — blurs page when mega menu is open ── */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-[49]"
          style={{ backdropFilter: "blur(6px)", background: "rgba(0,0,0,0.28)" }}
          onClick={() => setMegaOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 bg-white/95 border-b border-grey-light" style={{ backdropFilter: "blur(16px)" }}>
        <div className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 focus-visible:outline-lime focus-visible:outline-2 rounded flex-shrink-0">
              <div className="w-9 h-9 bg-charcoal rounded-lg flex items-center justify-center">
                <span className="text-lime font-bold text-base">F</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-bold text-charcoal text-base leading-tight">Finotti</p>
                <p className="text-xs text-grey leading-tight tracking-wide">Furniture Mall</p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">

              {/* Products — mega menu trigger */}
              <div
                className="relative"
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                    megaOpen || pathname.startsWith("/products")
                      ? "text-lime"
                      : "text-charcoal hover:text-lime"
                  )}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  onClick={() => setMegaOpen((v) => !v)}
                >
                  Products
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform duration-200", megaOpen && "rotate-180")}
                  />
                </button>

                {/* Mega menu panel */}
                {megaOpen && (
                  <div
                    className="absolute left-0 top-full z-50 mt-0 w-[780px]"
                    onMouseEnter={cancelClose}
                    onMouseLeave={closeMega}
                    style={{ transform: "translateX(calc(-30%))" }}
                  >
                    {/* Thin colored accent line at top */}
                    <div className="h-[2px] bg-lime rounded-t-sm mx-4" />

                    <div className="bg-white shadow-2xl rounded-b-2xl rounded-tr-2xl border border-grey-light/60 overflow-hidden">
                      <div className="grid grid-cols-[2fr_1fr_1fr] gap-0">

                        {/* Col 1: Shop categories */}
                        <div className="p-8 border-r border-grey-light/50">
                          <p className="text-xs font-bold text-grey tracking-[0.18em] uppercase mb-5">Shop by Category</p>
                          <div className="space-y-0.5">
                            {shopCategories.map((cat) => (
                              <Link
                                key={cat.href}
                                href={cat.href}
                                onClick={() => setMegaOpen(false)}
                                className={cn(
                                  "group flex items-start gap-3 px-3 py-2.5 rounded-xl transition-colors",
                                  cat.highlight
                                    ? "hover:bg-danger/5"
                                    : "hover:bg-lime/5"
                                )}
                              >
                                <div className="flex-1">
                                  <p className={cn(
                                    "text-base font-semibold transition-colors leading-tight",
                                    cat.highlight
                                      ? "text-danger group-hover:text-danger"
                                      : "text-charcoal group-hover:text-lime"
                                  )}>
                                    {cat.label}
                                  </p>
                                  <p className="text-xs text-grey mt-0.5">{cat.desc}</p>
                                </div>
                                <ArrowRight size={14} className={cn(
                                  "mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity",
                                  cat.highlight ? "text-danger" : "text-lime"
                                )} />
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Col 2: Highlights */}
                        <div className="p-8 border-r border-grey-light/50">
                          <p className="text-xs font-bold text-grey tracking-[0.18em] uppercase mb-5">Highlights</p>
                          <div className="space-y-1">
                            {highlights.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className="block px-3 py-2.5 text-base text-charcoal font-medium rounded-xl hover:bg-lime/5 hover:text-lime transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>

                          <div className="mt-8">
                            <p className="text-xs font-bold text-grey tracking-[0.18em] uppercase mb-5">Design Services</p>
                            <Link
                              href="/support"
                              onClick={() => setMegaOpen(false)}
                              className="block px-3 py-2.5 text-base text-charcoal font-medium rounded-xl hover:bg-lime/5 hover:text-lime transition-colors"
                            >
                              Space Consultation
                            </Link>
                            <Link
                              href="/support"
                              onClick={() => setMegaOpen(false)}
                              className="block px-3 py-2.5 text-base text-charcoal font-medium rounded-xl hover:bg-lime/5 hover:text-lime transition-colors"
                            >
                              WhatsApp Us
                            </Link>
                          </div>
                        </div>

                        {/* Col 3: Quick access */}
                        <div className="p-8 bg-warm/60">
                          <p className="text-xs font-bold text-grey tracking-[0.18em] uppercase mb-5">Quick Access</p>
                          <div className="space-y-1">
                            {quickAccess.map((item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMegaOpen(false)}
                                className="block px-3 py-2.5 text-base text-charcoal font-medium rounded-xl hover:bg-lime/5 hover:text-lime transition-colors"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>

                          {/* Browse all CTA */}
                          <Link
                            href="/products"
                            onClick={() => setMegaOpen(false)}
                            className="mt-8 flex items-center justify-between px-4 py-3 bg-charcoal text-white rounded-xl hover:bg-grey-dark transition-colors"
                          >
                            <span className="text-sm font-semibold">Browse All Furniture</span>
                            <ArrowRight size={16} />
                          </Link>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/products?tag=promotion"
                className="px-4 py-2.5 rounded-lg text-base font-medium text-danger hover:bg-danger/5 transition-colors"
              >
                Promotion
              </Link>
              <Link
                href="/orders"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                  pathname === "/orders" ? "text-lime" : "text-charcoal hover:text-lime hover:bg-lime/5"
                )}
              >
                My Orders
              </Link>
              <Link
                href="/support"
                className={cn(
                  "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                  pathname === "/support" ? "text-lime" : "text-charcoal hover:text-lime hover:bg-lime/5"
                )}
              >
                Contact Us
              </Link>
            </nav>

            {/* Right action icons */}
            <div className="flex items-center gap-0.5">
              <Link
                href="/products"
                aria-label="Search"
                className="p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <Search size={21} />
              </Link>

              {wishlistCount > 0 && (
                <Link
                  href="/orders"
                  aria-label={`Wishlist (${wishlistCount})`}
                  className="relative p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors hidden sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <Heart size={21} />
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-danger text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {wishlistCount}
                  </span>
                </Link>
              )}

              {compareCount > 0 && (
                <Link
                  href="/compare"
                  aria-label={`Compare (${compareCount})`}
                  className="relative p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors hidden sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <Scale size={21} />
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-lime text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {compareCount}
                  </span>
                </Link>
              )}

              <Link
                href="/cart"
                aria-label={`Cart (${totals.itemCount})`}
                className="relative p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              >
                <ShoppingCart size={21} />
                {totals.itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-lime text-white text-xs rounded-full flex items-center justify-center font-bold">
                    {totals.itemCount}
                  </span>
                )}
              </Link>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                className="lg:hidden p-2.5 rounded-lg text-charcoal hover:bg-warm-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ml-1"
              >
                {mobileOpen ? <X size={21} /> : (
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" aria-hidden="true">
                    <rect x="3" y="5" width="15" height="1.75" rx="0.875" fill="currentColor" />
                    <rect x="3" y="9.625" width="15" height="1.75" rx="0.875" fill="currentColor" />
                    <rect x="3" y="14.25" width="15" height="1.75" rx="0.875" fill="currentColor" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-grey-light bg-white" aria-label="Mobile navigation">
            <div className="max-w-screen-2xl mx-auto px-4 py-4">
              <p className="text-xs font-bold text-grey tracking-[0.16em] uppercase px-3 py-2 mb-1">Shop by Category</p>
              <div className="space-y-0.5">
                {shopCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block px-3 py-3 rounded-xl text-base font-medium transition-colors",
                      cat.highlight ? "text-danger hover:bg-danger/5" : "text-charcoal hover:bg-lime/5 hover:text-lime"
                    )}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
              <div className="h-px bg-grey-light my-3" />
              <div className="space-y-0.5">
                {[...highlights, ...quickAccess].map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-3 rounded-xl text-base text-charcoal hover:bg-warm-dark transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
