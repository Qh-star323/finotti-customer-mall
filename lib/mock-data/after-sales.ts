import type { FeedbackCase } from "@/lib/types"

export const afterSalesCases: FeedbackCase[] = [
  {
    id: "case-001",
    caseNumber: "AS-2026-00041",
    customerId: "mem-002",
    customerName: "David Lim",
    customerPhone: "60129876543",
    orderNumber: "FNT-2025-01847",
    category: "warranty",
    rating: 3,
    description:
      "Minor scratch found on the dining table surface after delivery. Noticed it when setting up. The scratch is about 5cm long on the left corner of the table top.",
    attachments: [
      { url: "/images/cases/case-001-scratch.jpg", type: "image", name: "table-scratch.jpg" },
    ],
    requiresCallback: true,
    status: "in-progress",
    assignedTo: "Azri (After-Sales Team)",
    createdAt: "2026-06-10",
    updatedAt: "2026-06-23",
  },
  {
    id: "case-002",
    caseNumber: "AS-2026-00028",
    customerId: "mem-001",
    customerName: "Siti Rahimah",
    customerPhone: "60123456789",
    orderNumber: "FNT-2026-00127",
    category: "delivery-installation",
    rating: 5,
    description:
      "I just want to say the installation team was excellent. They arrived on time, were very professional and cleaned up after themselves. The sofa looks perfect!",
    attachments: [],
    requiresCallback: false,
    status: "closed",
    resolution:
      "Positive feedback noted. Passed commendation to the installation team. Thank you!",
    createdAt: "2026-01-16",
    updatedAt: "2026-01-17",
  },
  {
    id: "case-003",
    caseNumber: "AS-2026-00055",
    customerId: "mem-003",
    customerName: "Jennifer Wong",
    customerPhone: "60167654321",
    orderNumber: "FNT-2026-00231",
    category: "sales-service",
    rating: 4,
    description:
      "The sales team was very helpful in helping me choose between the two desk options. However, I had to wait about 20 minutes before someone attended to me in the showroom. Might want to improve staffing during weekends.",
    attachments: [],
    requiresCallback: false,
    status: "resolved",
    resolution:
      "Feedback noted and shared with showroom management. Additional staff rostered on weekends starting July 2026. Thank you for your valuable feedback.",
    createdAt: "2026-06-22",
    updatedAt: "2026-06-23",
  },
]
