export type OrderStatus =
  | "received"
  | "confirming"
  | "awaiting-stock"
  | "delivery-scheduled"
  | "out-for-delivery"
  | "installing"
  | "completed"
  | "after-sales"

export type PaymentMethod =
  | "full-payment"
  | "deposit"
  | "in-store"
  | "sales-assisted"

export type PaymentStatus = "pending" | "partial" | "paid" | "refunded"

export interface OrderItem {
  productId: string
  productName: string
  productImage: string
  sku: string
  quantity: number
  unitPrice: number
  subtotal: number
  installationRequested: boolean
}

export interface DeliveryInfo {
  recipientName: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  postcode: string
  state: MalaysianState
  scheduledDate?: string
  timeSlot?: string
  notes?: string
}

export interface Order {
  id: string
  orderNumber: string
  customerId: string
  items: OrderItem[]
  status: OrderStatus
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  subtotal: number
  deliveryFee: number
  installationFee: number
  discount: number
  total: number
  amountPaid: number
  balanceDue: number
  delivery: DeliveryInfo
  estimatedDeliveryDate: string
  actualDeliveryDate?: string
  createdAt: string
  updatedAt: string
  notes?: string
}

export type MalaysianState =
  | "Johor"
  | "Kedah"
  | "Kelantan"
  | "Melaka"
  | "Negeri Sembilan"
  | "Pahang"
  | "Perak"
  | "Perlis"
  | "Pulau Pinang"
  | "Sabah"
  | "Sarawak"
  | "Selangor"
  | "Terengganu"
  | "Kuala Lumpur"
  | "Labuan"
  | "Putrajaya"

export const MALAYSIAN_STATES: MalaysianState[] = [
  "Johor",
  "Kedah",
  "Kelantan",
  "Melaka",
  "Negeri Sembilan",
  "Pahang",
  "Perak",
  "Perlis",
  "Pulau Pinang",
  "Sabah",
  "Sarawak",
  "Selangor",
  "Terengganu",
  "Kuala Lumpur",
  "Labuan",
  "Putrajaya",
]

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  received: "Order Received",
  confirming: "Confirming Order",
  "awaiting-stock": "Awaiting Stock",
  "delivery-scheduled": "Delivery Scheduled",
  "out-for-delivery": "Out for Delivery",
  installing: "Installing",
  completed: "Completed",
  "after-sales": "After-Sales Processing",
}
