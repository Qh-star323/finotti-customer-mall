"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Grid3X3, ShoppingCart, Package, HeadphonesIcon } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { useCart } from "@/lib/hooks/useCart"

const tabs = [
  { label: "Home", href: "/", icon: Home, exact: true },
  { label: "Products", href: "/products", icon: Grid3X3, exact: false },
  { label: "Cart", href: "/cart", icon: ShoppingCart, exact: false },
  { label: "Orders", href: "/orders", icon: Package, exact: false },
  { label: "Support", href: "/support", icon: HeadphonesIcon, exact: false },
]

export function MobileNav() {
  const pathname = usePathname()
  const { totals } = useCart()

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-grey-light safe-area-pb"
      aria-label="Bottom navigation"
    >
      <div className="flex">
        {tabs.map(({ label, href, icon: Icon, exact }) => {
          const isActive = exact ? pathname === href : pathname.startsWith(href)
          const isCart = href === "/cart"

          return (
            <Link
              key={href}
              href={href}
              aria-label={isCart ? `${label} (${totals.itemCount} items)` : label}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-0.5 py-2.5 min-h-[60px]",
                "transition-colors duration-150",
                isActive ? "text-lime" : "text-grey hover:text-charcoal"
              )}
            >
              <span className="relative">
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                {isCart && totals.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-lime text-white text-xs rounded-full flex items-center justify-center font-bold leading-none">
                    {totals.itemCount > 9 ? "9+" : totals.itemCount}
                  </span>
                )}
              </span>
              <span className={cn("text-xs", isActive ? "font-semibold" : "font-normal")}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
