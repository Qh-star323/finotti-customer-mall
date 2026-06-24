export interface JobOpening {
  id: string
  title: string
  department: string
  location: string
  type: "full-time" | "part-time" | "contract"
  experience: string
  description: string
  responsibilities: string[]
  requirements: string[]
  benefits: string[]
  salaryRange?: string
  postedAt: string
}

export const jobOpenings: JobOpening[] = [
  {
    id: "job-001",
    title: "Senior Furniture Sales Consultant",
    department: "Sales",
    location: "Shah Alam, Selangor",
    type: "full-time",
    experience: "3+ years",
    description:
      "We are looking for a passionate and experienced furniture sales consultant to join our growing team. You will be responsible for guiding customers through their furniture journey, from product selection to after-sales support.",
    responsibilities: [
      "Greet and attend to customers in the showroom",
      "Understand customer needs and recommend suitable products",
      "Provide detailed product knowledge and demonstrations",
      "Process sales orders and coordinate with delivery team",
      "Handle customer enquiries via WhatsApp and phone",
      "Achieve monthly sales targets",
      "Maintain showroom displays and product cleanliness",
    ],
    requirements: [
      "Minimum SPM qualification",
      "At least 3 years of furniture or retail sales experience",
      "Excellent communication skills in English and Bahasa Malaysia",
      "Customer-oriented and patient personality",
      "Able to work on weekends and public holidays",
      "Valid driving licence (D)",
    ],
    benefits: [
      "Attractive salary + commission scheme",
      "SOCSO, EPF and EIS contributions",
      "Annual leave and medical leave",
      "Staff purchase discount",
      "Training and development opportunities",
      "Supportive team environment",
    ],
    salaryRange: "RM 2,500 – RM 4,500 + commission",
    postedAt: "2026-06-01",
  },
  {
    id: "job-002",
    title: "Delivery & Installation Technician",
    department: "Operations",
    location: "Klang Valley (based in Shah Alam)",
    type: "full-time",
    experience: "1+ year",
    description:
      "Join our delivery and installation team to bring our customers' furniture home. You will be responsible for safe delivery, professional assembly and installation of furniture at customers' homes.",
    responsibilities: [
      "Load and transport furniture safely to customer locations",
      "Assemble and install furniture according to specifications",
      "Ensure furniture is placed correctly and to customer satisfaction",
      "Conduct quality check before leaving customer premises",
      "Handle customer queries during delivery and installation",
      "Maintain delivery vehicle and equipment",
    ],
    requirements: [
      "Minimum PMR / PT3 qualification",
      "Physical fitness — ability to lift heavy furniture",
      "Valid E driving licence (lorry/van)",
      "Basic handyman and furniture assembly skills",
      "Customer service mindset",
      "Willingness to work weekends",
    ],
    benefits: [
      "Fixed salary + delivery allowance",
      "SOCSO, EPF and EIS contributions",
      "Annual and medical leave",
      "Uniform and protective equipment provided",
      "Company vehicle provided",
    ],
    salaryRange: "RM 2,000 – RM 3,000 + allowances",
    postedAt: "2026-06-10",
  },
  {
    id: "job-003",
    title: "Customer Service Executive",
    department: "Customer Experience",
    location: "Shah Alam, Selangor (hybrid)",
    type: "full-time",
    experience: "2+ years",
    description:
      "Be the voice of Finotti Furniture Mall. As a Customer Service Executive, you will handle enquiries, complaints and after-sales requests across all channels — WhatsApp, phone and email.",
    responsibilities: [
      "Respond to customer enquiries via WhatsApp, phone and email",
      "Process and track customer orders",
      "Coordinate delivery scheduling with the operations team",
      "Handle complaints and after-sales requests professionally",
      "Update customers on order and delivery status",
      "Maintain customer records in the CRM system",
      "Escalate complex issues to the appropriate team",
    ],
    requirements: [
      "Minimum Diploma in any field",
      "At least 2 years of customer service experience",
      "Excellent verbal and written communication in English and BM",
      "Patience and empathy when handling difficult customers",
      "Basic computer skills (Excel, Word, messaging apps)",
      "Mandarin speaking is an added advantage",
    ],
    benefits: [
      "Competitive salary package",
      "SOCSO, EPF and EIS contributions",
      "Annual, medical and hospitalisation leave",
      "Hybrid working arrangement (3 days office, 2 days WFH)",
      "Staff purchase discount",
      "Performance bonus",
    ],
    salaryRange: "RM 2,500 – RM 3,500",
    postedAt: "2026-06-15",
  },
  {
    id: "job-004",
    title: "Digital Marketing Executive",
    department: "Marketing",
    location: "Shah Alam, Selangor",
    type: "full-time",
    experience: "2+ years",
    description:
      "Help us grow our online presence and bring Finotti's furniture to more Malaysian families. You will manage our social media, website content, online advertising and email campaigns.",
    responsibilities: [
      "Manage Facebook, Instagram and TikTok accounts",
      "Create engaging content (copy, graphics, short videos)",
      "Plan and execute Meta Ads and Google Ads campaigns",
      "Update website content and product listings",
      "Monitor and report on digital marketing performance",
      "Coordinate with sales team for promotions and campaigns",
      "Respond to social media comments and messages",
    ],
    requirements: [
      "Diploma or Degree in Marketing, Communications or related field",
      "At least 2 years of digital marketing experience",
      "Proficiency in Meta Business Suite, Google Ads and Analytics",
      "Basic graphic design skills (Canva / Photoshop)",
      "Video editing skills (CapCut / Premiere Pro) an advantage",
      "Creative mindset with strong copywriting skills",
      "Interest in interior design and furniture",
    ],
    benefits: [
      "Competitive salary",
      "SOCSO, EPF and EIS",
      "Annual, medical and hospitalisation leave",
      "Staff purchase discount",
      "Training and certification support",
      "Creative and dynamic team environment",
    ],
    salaryRange: "RM 2,800 – RM 4,000",
    postedAt: "2026-06-20",
  },
]
