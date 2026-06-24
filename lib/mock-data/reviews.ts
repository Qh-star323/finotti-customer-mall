export interface Review {
  id: string
  productId?: string
  customerName: string
  location: string
  rating: number
  title: string
  comment: string
  date: string
  verified: boolean
  helpfulCount: number
  avatarInitials: string
}

export const reviews: Review[] = [
  {
    id: "rev-001",
    productId: "prod-001",
    customerName: "Siti Rahimah",
    location: "Shah Alam, Selangor",
    rating: 5,
    title: "Our family loves this sofa!",
    comment:
      "We bought the Nordic L-Shape Sofa 6 months ago and it still looks brand new. The delivery team was professional and assembled everything in under an hour. Very happy with the quality!",
    date: "2025-12-10",
    verified: true,
    helpfulCount: 34,
    avatarInitials: "SR",
  },
  {
    id: "rev-002",
    productId: "prod-005",
    customerName: "David Lim",
    location: "Petaling Jaya, Selangor",
    rating: 5,
    title: "Best sleep of my life",
    comment:
      "After years of back pain, my doctor recommended a pocketed spring mattress. The Harmony mattress fixed my sleep within 2 weeks. Worth every ringgit. The delivery and installation team were fantastic too.",
    date: "2025-11-22",
    verified: true,
    helpfulCount: 67,
    avatarInitials: "DL",
  },
  {
    id: "rev-003",
    productId: "prod-011",
    customerName: "Priya Nair",
    location: "Subang Jaya, Selangor",
    rating: 4,
    title: "Beautiful dining set, minor delay",
    comment:
      "The solid teak dining set is absolutely stunning — the wood grain is so beautiful. My one feedback is the delivery was delayed by a week. But the customer service team kept me updated throughout, which I appreciated.",
    date: "2025-10-15",
    verified: true,
    helpfulCount: 21,
    avatarInitials: "PN",
  },
  {
    id: "rev-004",
    productId: "prod-017",
    customerName: "Ahmad Hafiz",
    location: "Cyberjaya, Selangor",
    rating: 5,
    title: "My WFH setup is complete",
    comment:
      "I work from home and the ergonomic chair has eliminated my lower back pain. The mesh back is a lifesaver in Malaysian weather — no more sweaty back! Combined with the L-shape desk, my home office finally feels professional.",
    date: "2026-01-08",
    verified: true,
    helpfulCount: 89,
    avatarInitials: "AH",
  },
  {
    id: "rev-005",
    productId: "prod-008",
    customerName: "Jennifer Wong",
    location: "Cheras, Kuala Lumpur",
    rating: 5,
    title: "Exactly what our master bedroom needed",
    comment:
      "The walnut bed frame transformed our bedroom completely. The quality is exceptional — solid wood, no wobbling, beautiful finish. The Finotti team also helped us choose the right mattress to pair with it. Great service!",
    date: "2025-09-30",
    verified: true,
    helpfulCount: 45,
    avatarInitials: "JW",
  },
  {
    id: "rev-006",
    productId: "prod-020",
    customerName: "Mohd Fadzillah",
    location: "Klang, Selangor",
    rating: 4,
    title: "Great value for the price",
    comment:
      "The shoe cabinet is well-made and looks great at our entrance. Assembly was easy — took about 30 minutes with my wife. Holds all 12 pairs as advertised. The flip-up doors are convenient. Recommended!",
    date: "2026-02-14",
    verified: true,
    helpfulCount: 18,
    avatarInitials: "MF",
  },
]

export const testimonials = reviews
