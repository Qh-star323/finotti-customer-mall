"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

const WISHLIST_KEY = "finotti_wishlist"

interface WishlistContextValue {
  ids: string[]
  count: number
  toggle: (productId: string) => void
  isWishlisted: (productId: string) => boolean
}

const WishlistContext = createContext<WishlistContextValue | null>(null)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(WISHLIST_KEY)
      setIds(raw ? JSON.parse(raw) : [])
    } catch { setIds([]) }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    try { localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids)) } catch {}
  }, [ids, isLoaded])

  const toggle = useCallback((productId: string) => {
    setIds((prev) => prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId])
  }, [])

  const isWishlisted = useCallback((id: string) => ids.includes(id), [ids])

  return (
    <WishlistContext.Provider value={{ ids, count: ids.length, toggle, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const ctx = useContext(WishlistContext)
  if (!ctx) throw new Error("useWishlist must be inside WishlistProvider")
  return ctx
}
