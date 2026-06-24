import type { Metadata } from "next"
import { HeroBanner } from "@/components/home/HeroBanner"
import { CategoryGrid } from "@/components/home/CategoryGrid"
import { ServiceHighlights } from "@/components/home/ServiceHighlights"
import { HotProducts } from "@/components/home/HotProducts"
import { PromoBanner } from "@/components/home/PromoBanner"
import { NewArrivals } from "@/components/home/NewArrivals"
import { TestimonialList } from "@/components/home/TestimonialList"
import { CaseStudies } from "@/components/home/CaseStudies"
import { DeliveryInfo } from "@/components/home/DeliveryInfo"
import { StoreLocator } from "@/components/home/StoreLocator"

export const metadata: Metadata = {
  title: "Finotti Furniture Mall — Quality Furniture for Malaysian Homes",
  description:
    "Shop quality furniture at Finotti Furniture Mall. Sofas, beds, dining sets, mattresses and more — with professional delivery, installation and after-sales service.",
}

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <CategoryGrid />
      <ServiceHighlights />
      <HotProducts />
      <PromoBanner />
      <NewArrivals />
      <TestimonialList />
      <CaseStudies />
      <DeliveryInfo />
      <StoreLocator />
    </>
  )
}
