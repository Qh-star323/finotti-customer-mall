import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { TopBar } from "@/components/layout/TopBar"
import { SiteHeader } from "@/components/layout/SiteHeader"
import { SiteFooter } from "@/components/layout/SiteFooter"
import { MobileNav } from "@/components/layout/MobileNav"
import { Providers } from "@/components/layout/Providers"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Finotti Furniture Mall — Quality Furniture for Malaysian Homes",
    template: "%s | Finotti Furniture Mall",
  },
  description:
    "Finotti Furniture Mall combines 50 years of furniture expertise with professional delivery, installation and after-sales service. Shop sofas, beds, dining sets, office furniture and more.",
  keywords: ["furniture", "sofa", "bedroom", "dining", "mattress", "Malaysia", "Shah Alam", "delivery"],
  authors: [{ name: "Finotti Furniture Mall" }],
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "Finotti Furniture Mall",
    title: "Finotti Furniture Mall — Quality Furniture for Malaysian Homes",
    description:
      "Professional furniture retailer serving Malaysian families with quality pieces and expert service.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-warm">
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Providers>
          <TopBar />
          <SiteHeader />

          <main id="main-content" className="flex-1 pb-16 lg:pb-0">
            {children}
          </main>

          <SiteFooter />
          <MobileNav />
        </Providers>
      </body>
    </html>
  )
}
