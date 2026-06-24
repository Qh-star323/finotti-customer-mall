export interface Promotion {
  id: string
  title: string
  description: string
  discount: string
  productIds: string[]
  validUntil: string
  badge: string
  badgeColor: "amber" | "danger" | "lime"
  image?: string
}

export const promotions: Promotion[] = [
  {
    id: "promo-001",
    title: "Mid-Year Mega Sale",
    description: "Up to 25% off on selected sofas and living room furniture. Limited time only!",
    discount: "Up to 25% OFF",
    productIds: ["prod-001", "prod-003", "prod-014"],
    validUntil: "2026-07-31",
    badge: "SALE",
    badgeColor: "danger",
    image: "/images/promotions/mid-year-sale.jpg",
  },
  {
    id: "promo-002",
    title: "New Home Package",
    description: "Bundle your bedroom set with a mattress and enjoy FREE installation — worth up to RM350.",
    discount: "FREE Installation",
    productIds: ["prod-008", "prod-005", "prod-010"],
    validUntil: "2026-08-31",
    badge: "BUNDLE",
    badgeColor: "lime",
    image: "/images/promotions/new-home-package.jpg",
  },
  {
    id: "promo-003",
    title: "WFH Ready Deal",
    description: "Get the ergonomic chair + L-shape desk set at a special combined price.",
    discount: "Save RM300",
    productIds: ["prod-017", "prod-018"],
    validUntil: "2026-07-15",
    badge: "COMBO",
    badgeColor: "amber",
    image: "/images/promotions/wfh-deal.jpg",
  },
  {
    id: "promo-004",
    title: "Kids Room Clearance",
    description: "Kids mattress and storage furniture at lowest prices. While stocks last!",
    discount: "Up to 30% OFF",
    productIds: ["prod-007", "prod-020"],
    validUntil: "2026-07-01",
    badge: "CLEARANCE",
    badgeColor: "danger",
    image: "/images/promotions/kids-clearance.jpg",
  },
  {
    id: "promo-005",
    title: "Members Exclusive: First Purchase",
    description: "New members enjoy RM100 off on their first purchase above RM1,000.",
    discount: "RM100 OFF",
    productIds: [],
    validUntil: "2026-12-31",
    badge: "MEMBERS",
    badgeColor: "lime",
    image: "/images/promotions/members-deal.jpg",
  },
]
