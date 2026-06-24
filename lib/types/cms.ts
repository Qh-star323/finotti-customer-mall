export interface CMSCompanyInfo {
  name: string
  tagline: string
  description: string
  phone: string
  email: string
  whatsapp: string
  addressLine1: string
  addressLine2: string
  city: string
  postcode: string
  state: string
  operatingHours: OperatingHours[]
  socialMedia: SocialMedia
  logoUrl: string
  logoWhiteUrl: string
}

export interface OperatingHours {
  days: string
  hours: string
}

export interface SocialMedia {
  facebook?: string
  instagram?: string
  tiktok?: string
  youtube?: string
}

export interface CMSHero {
  headline: string
  subheadline: string
  backgroundImage: string
  primaryCtaText: string
  primaryCtaUrl: string
  secondaryCtaText: string
  secondaryCtaUrl: string
}

export interface CMSService {
  id: string
  icon: string
  title: string
  description: string
  order: number
}

export interface CMSPage {
  id: string
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  ogImage?: string
  content: string
  updatedAt: string
}

export interface CMSSeo {
  defaultTitle: string
  titleSuffix: string
  defaultDescription: string
  defaultOgImage: string
}
