"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import type { CartItem, CartState, CartTotals } from "@/lib/types"
import { calcCartTotals, addToCart, removeFromCart, updateQuantity } from "@/lib/utils/cart"

const CART_KEY = "finotti_cart"
const defaultState: CartState = { items: [], couponDiscount: 0 }

function load(): CartState {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : defaultState
  } catch { return defaultState }
}

interface CartContextValue {
  items: CartState["items"]
  totals: CartTotals
  isLoaded: boolean
  add: (item: CartItem) => void
  remove: (productId: string) => void
  setQty: (productId: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>(defaultState)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setState(load())
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    try { localStorage.setItem(CART_KEY, JSON.stringify(state)) } catch {}
  }, [state, isLoaded])

  const add = useCallback((item: CartItem) => setState((p) => addToCart(p, item)), [])
  const remove = useCallback((id: string) => setState((p) => removeFromCart(p, id)), [])
  const setQty = useCallback((id: string, qty: number) => setState((p) => updateQuantity(p, id, qty)), [])
  const clearCart = useCallback(() => setState(defaultState), [])

  return (
    <CartContext.Provider value={{ items: state.items, totals: calcCartTotals(state), isLoaded, add, remove, setQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be inside CartProvider")
  return ctx
}
