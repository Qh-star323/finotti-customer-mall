export type PreferredLanguage = "en" | "bm" | "zh"

export type FurnitureStyle =
  | "modern"
  | "scandinavian"
  | "minimalist"
  | "industrial"
  | "classic"
  | "japandi"
  | "luxury"

export type PurchasePurpose = "new-home" | "renovation" | "replacement" | "gift" | "other"

export type BudgetRange =
  | "under-1000"
  | "1000-3000"
  | "3000-5000"
  | "5000-10000"
  | "above-10000"

export type PurchaseTimeline =
  | "immediately"
  | "1-month"
  | "3-months"
  | "6-months"
  | "just-browsing"

export type DiscType = "D" | "I" | "S" | "C"

export interface DiscProfile {
  type: DiscType
  scores: { D: number; I: number; S: number; C: number }
  communicationStyle: string
  preferredApproach: string
  completedAt: string
}

export interface MemberQuickInfo {
  firstName: string
  lastName: string
  phone: string
  email: string
  preferredLanguage: PreferredLanguage
}

export interface MemberProfile {
  birthday?: string
  gender?: "male" | "female" | "prefer-not-to-say"
  addressLine1?: string
  addressLine2?: string
  city?: string
  postcode?: string
  state?: string
  householdSize?: number
  purchasePurpose?: PurchasePurpose
  preferredStyles?: FurnitureStyle[]
  budget?: BudgetRange
  purchaseTimeline?: PurchaseTimeline
  interestedCategories?: string[]
}

export interface Member {
  id: string
  quickInfo: MemberQuickInfo
  profile?: MemberProfile
  discProfile?: DiscProfile
  marketingConsent: boolean   // must default to false (PDPA)
  createdAt: string
  updatedAt: string
  totalOrders: number
  totalSpend: number
  wishlistIds: string[]
}
