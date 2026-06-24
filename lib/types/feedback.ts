export type FeedbackCategory =
  | "product-suggestion"
  | "store-service"
  | "sales-service"
  | "delivery-installation"
  | "website"
  | "complaint"
  | "warranty"
  | "other"

export type FeedbackStatus =
  | "submitted"
  | "under-review"
  | "in-progress"
  | "resolved"
  | "closed"

export interface FeedbackAttachment {
  url: string
  type: "image" | "video"
  name: string
}

export interface FeedbackCase {
  id: string
  caseNumber: string
  customerId?: string
  customerName: string
  customerPhone: string
  orderNumber?: string
  category: FeedbackCategory
  rating: number
  description: string
  attachments: FeedbackAttachment[]
  requiresCallback: boolean
  status: FeedbackStatus
  assignedTo?: string
  resolution?: string
  createdAt: string
  updatedAt: string
}

export const FEEDBACK_CATEGORY_LABELS: Record<FeedbackCategory, string> = {
  "product-suggestion": "Product Suggestion",
  "store-service": "Store Service",
  "sales-service": "Sales Service",
  "delivery-installation": "Delivery & Installation",
  website: "Website Issue",
  complaint: "Complaint",
  warranty: "Warranty Claim",
  other: "Other",
}
