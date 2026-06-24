import { z } from "zod"

const malaysianPhone = z
  .string()
  .min(10, "Please enter a valid Malaysian phone number")
  .regex(/^(\+?60|0)[0-9]{8,10}$/, "Please enter a valid Malaysian phone number (e.g. 012-345 6789)")

export const registrationQuickSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: malaysianPhone,
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  preferredLanguage: z.enum(["en", "bm", "zh"]),
})

export const registrationProfileSchema = z.object({
  birthday: z.string().optional(),
  gender: z.enum(["male", "female", "prefer-not-to-say"]).optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  city: z.string().optional(),
  postcode: z
    .string()
    .regex(/^[0-9]{5}$/, "Please enter a valid 5-digit postcode")
    .optional()
    .or(z.literal("")),
  state: z.string().optional(),
  householdSize: z.number().min(1).max(20).optional(),
  purchasePurpose: z
    .enum(["new-home", "renovation", "replacement", "gift", "other"])
    .optional(),
  preferredStyles: z.array(z.string()).optional(),
  budget: z
    .enum(["under-1000", "1000-3000", "3000-5000", "5000-10000", "above-10000"])
    .optional(),
  purchaseTimeline: z
    .enum(["immediately", "1-month", "3-months", "6-months", "just-browsing"])
    .optional(),
  interestedCategories: z.array(z.string()).optional(),
  marketingConsent: z.boolean(),
})

export const deliverySchema = z.object({
  recipientName: z.string().min(3, "Please enter the recipient's full name"),
  phone: malaysianPhone,
  email: z.string().email("Please enter a valid email address"),
  addressLine1: z.string().min(5, "Please enter a full address"),
  addressLine2: z.string().optional(),
  city: z.string().min(2, "Please enter a city"),
  postcode: z.string().regex(/^[0-9]{5}$/, "Please enter a valid 5-digit postcode"),
  state: z.string().min(1, "Please select a state"),
  notes: z.string().optional(),
})

export const feedbackSchema = z.object({
  customerName: z.string().min(2, "Please enter your name"),
  customerPhone: malaysianPhone,
  orderNumber: z.string().optional(),
  category: z.enum([
    "product-suggestion",
    "store-service",
    "sales-service",
    "delivery-installation",
    "website",
    "complaint",
    "warranty",
    "other",
  ]),
  rating: z.number().min(1, "Please provide a rating").max(5),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters of description")
    .max(2000, "Description cannot exceed 2000 characters"),
  requiresCallback: z.boolean(),
})

export const chatEnquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: malaysianPhone,
  interestedProduct: z.string().optional(),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
})

export const jobApplicationSchema = z.object({
  position: z.string().min(1, "Please select a position"),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name"),
  phone: malaysianPhone,
  email: z.string().email("Please enter a valid email address"),
  location: z.string().min(2, "Please enter your location"),
  yearsOfExperience: z.string().min(1, "Please select experience level"),
  hasLicense: z.boolean(),
  availableFrom: z.string().min(1, "Please select your available start date"),
  expectedSalary: z
    .number()
    .min(1000, "Expected salary must be at least RM1,000"),
  coverLetter: z.string().optional(),
  pdpaConsent: z
    .boolean()
    .refine((val) => val === true, "You must agree to the personal data policy to proceed"),
})

export type RegistrationQuickData = z.infer<typeof registrationQuickSchema>
export type RegistrationProfileData = z.infer<typeof registrationProfileSchema>
export type DeliveryData = z.infer<typeof deliverySchema>
export type FeedbackData = z.infer<typeof feedbackSchema>
export type ChatEnquiryData = z.infer<typeof chatEnquirySchema>
export type JobApplicationData = z.infer<typeof jobApplicationSchema>
