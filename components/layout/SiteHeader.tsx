"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, Heart, Search, ChevronDown, Menu, X, Scale } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils/cn"
import { useCart } from "@/lib/hooks/useCart"
import { useWishlist } from "@/lib/hooks/useWishlist"
import { useCompare } from "@/lib/hooks/useCompare"

const categories = [
  { label: "Sofa & Living", href: "/products?category=sofa" },
  { label: "Mattress", href: "/products?category=mattress" },
  { label: "Bedroom", href: "/products?category=bedroom" },
  { label: "Dining", href: "/products?category=dining" },
  { label: "Living Room", href: "/products?category=living-room" },
  { label: "Office Furniture", href: "/products?category=office" },
  { label: "Promotion", href: "/products?category=promotion" },
]

const navLinks = [
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Promotions", href: "/products?category=promotion" },
  { label: "My Orders", href: "/orders" },
  { label: "Contact Us", href: "/support" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { totals } = useCart()
  const { count: wishlistCount } = useWishlist()
  const { count: compareCount } = useCompare()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-grey-light shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus-visible:outline-lime focus-visible:outline-2 rounded">
            <div className="w-10 h-10 bg-charcoal rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-lime font-bold text-lg">F</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-charcoal text-lg leading-tight">Finotti</p>
              <p className="text-xs text-grey leading-tight">Furniture Mall</p>
            </div>
          </Link>

          {/* Desktop Navigation — always visible */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <div
              className="relative"
              onMouseEnter={() => setCategoryOpen(true)}
              onMouseLeave={() => setCategoryOpen(false)}
            >
              <Link
                href="/products"
                className={cn(
                  "flex items-center gap-1 px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                  pathname.startsWith("/products")
                    ? "text-lime bg-lime/10"
                    : "text-charcoal hover:text-lime hover:bg-lime/5"
                )}
                onClick={() => setCategoryOpen(!categoryOpen)}
                aria-expanded={categoryOpen}
                aria-haspopup="true"
              >
                Products
                <ChevronDown size={16} className={cn("transition-transform duration-200", categoryOpen && "rotate-180")} />
              </Link>

              {/* Mega dropdown */}
              {categoryOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-grey-light py-2 z-50"
                  role="menu"
                >
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block px-4 py-2.5 text-base text-charcoal hover:text-lime hover:bg-lime/5 transition-colors"
                      role="menuitem"
                      onClick={() => setCategoryOpen(false)}
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/products?category=promotion"
              className={cn(
                "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                "text-danger hover:bg-danger/5"
              )}
            >
              Promotion
            </Link>
            <Link
              href="/orders"
              className={cn(
                "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                pathname === "/orders"
                  ? "text-lime bg-lime/10"
                  : "text-charcoal hover:text-lime hover:bg-lime/5"
              )}
            >
              My Orders
            </Link>
            <Link
              href="/support"
              className={cn(
                "px-4 py-2.5 rounded-lg text-base font-medium transition-colors",
                pathname === "/support"
                  ? "text-lime bg-lime/10"
                  : "text-charcoal hover:text-lime hover:bg-lime/5"
              )}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1">
            <Link
              href="/products"
              aria-label="Search products"
              className="p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <Search size={22} />
            </Link>

            {wishlistCount > 0 && (
              <Link
                href="/orders"
                aria-label={`Wishlist (${wishlistCount} items)`}
                className="relative p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime hidden sm:flex"
              >
                <Heart size={22} />
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-danger text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              </Link>
            )}

            {compareCount > 0 && (
              <Link
                href="/compare"
                aria-label={`Compare (${compareCount} products)`}
                className="relative p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime hidden sm:flex"
              >
                <Scale size={22} />
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-lime text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {compareCount}
                </span>
              </Link>
            )}

            <Link
              href="/cart"
              aria-label={`Shopping cart (${totals.itemCount} items)`}
              className="relative p-2.5 rounded-lg text-charcoal hover:text-lime hover:bg-lime/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <ShoppingCart size={22} />
              {totals.itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-lime text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {totals.itemCount}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="lg:hidden p-2.5 rounded-lg text-charcoal hover:bg-warm-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ml-1"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden border-t border-grey-light bg-white"
          aria-label="Mobile navigation"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <p className="text-xs font-semibold text-grey uppercase tracking-wider px-3 py-2">Categories</p>
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="px-3 py-3 rounded-lg text-base text-charcoal hover:text-lime hover:bg-lime/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
            <div className="h-px bg-grey-light my-2" />
            <Link href="/orders" className="px-3 py-3 rounded-lg text-base text-charcoal hover:bg-warm-dark" onClick={() => setMobileOpen(false)}>My Orders</Link>
            <Link href="/support" className="px-3 py-3 rounded-lg text-base text-charcoal hover:bg-warm-dark" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            <Link href="/feedback" className="px-3 py-3 rounded-lg text-base text-charcoal hover:bg-warm-dark" onClick={() => setMobileOpen(false)}>Feedback & After-Sales</Link>
            <Link href="/careers" className="px-3 py-3 rounded-lg text-base text-charcoal hover:bg-warm-dark" onClick={() => setMobileOpen(false)}>Careers</Link>
            <Link href="/register" className="px-3 py-3 rounded-lg text-base text-lime font-semibold hover:bg-lime/10" onClick={() => setMobileOpen(false)}>Register / Login</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
