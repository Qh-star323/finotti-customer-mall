export interface CartItem {
  productId: string
  productName: string
  productImage: string
  slug: string
  sku: string
  unitPrice: number
  quantity: number
  installationRequested: boolean
  installationFee: number
}

export interface CartState {
  items: CartItem[]
  couponCode?: string
  couponDiscount: number
}

export interface CartTotals {
  subtotal: number
  deliveryFee: number
  installationFee: number
  couponDiscount: number
  total: number
  itemCount: number
}

export const FREE_DELIVERY_THRESHOLD = 500
export const STANDARD_DELIVERY_FEE = 80
export const INSTALLATION_FEE_PER_ITEM = 150
