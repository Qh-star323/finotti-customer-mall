import type { CartItem, CartState, CartTotals } from "@/lib/types"
import { FREE_DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE } from "@/lib/types"

export function calcCartTotals(state: CartState): CartTotals {
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = state.items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
  const installationFee = state.items.reduce(
    (sum, item) => sum + (item.installationRequested ? item.installationFee * item.quantity : 0),
    0
  )
  const deliveryFee = subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE
  const total = subtotal + deliveryFee + installationFee - state.couponDiscount

  return {
    subtotal,
    deliveryFee,
    installationFee,
    couponDiscount: state.couponDiscount,
    total: Math.max(0, total),
    itemCount,
  }
}

export function addToCart(state: CartState, newItem: CartItem): CartState {
  const existing = state.items.find((i) => i.productId === newItem.productId)
  if (existing) {
    return {
      ...state,
      items: state.items.map((i) =>
        i.productId === newItem.productId
          ? { ...i, quantity: i.quantity + newItem.quantity }
          : i
      ),
    }
  }
  return { ...state, items: [...state.items, newItem] }
}

export function removeFromCart(state: CartState, productId: string): CartState {
  return { ...state, items: state.items.filter((i) => i.productId !== productId) }
}

export function updateQuantity(state: CartState, productId: string, quantity: number): CartState {
  if (quantity <= 0) return removeFromCart(state, productId)
  return {
    ...state,
    items: state.items.map((i) => (i.productId === productId ? { ...i, quantity } : i)),
  }
}
