"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/lib/context/CartContext"
import { WishlistProvider } from "@/lib/context/WishlistContext"
import { CompareProvider } from "@/lib/context/CompareContext"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <WishlistProvider>
        <CompareProvider>
          {children}
        </CompareProvider>
      </WishlistProvider>
    </CartProvider>
  )
}
