import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"

const shopLinks = [
  { label: "Sofa & Living", href: "/products?category=sofa" },
  { label: "Mattress", href: "/products?category=mattress" },
  { label: "Bedroom", href: "/products?category=bedroom" },
  { label: "Dining", href: "/products?category=dining" },
  { label: "Office Furniture", href: "/products?category=office" },
  { label: "Promotion", href: "/products?category=promotion" },
]

const helpLinks = [
  { label: "My Orders", href: "/orders" },
  { label: "Contact Us", href: "/support" },
  { label: "Feedback & After-Sales", href: "/feedback" },
  { label: "Delivery Information", href: "/support" },
  { label: "Warranty Policy", href: "/support" },
  { label: "Careers", href: "/careers" },
]

export function SiteFooter() {
  const waUrl = buildGeneralEnquiryURL()

  return (
    <footer className="bg-charcoal text-warm/80 mt-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-charcoal font-bold text-lg">F</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">Finotti</p>
                <p className="text-xs text-warm/60 leading-tight">Furniture Mall</p>
              </div>
            </div>
            <p className="text-sm text-warm/70 leading-relaxed mb-6">
              50 years of furniture expertise. Bringing quality, comfort and professional service to Malaysian homes.
            </p>
            <div className="flex items-center gap-3">
              <Link href={waUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center hover:bg-[#1ebe57] transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} className="text-white" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <span className="text-white font-bold text-sm">f</span>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <span className="text-white font-bold text-sm">ig</span>
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Shop</h3>
            <ul className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-warm/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Help & Support</h3>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-warm/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Visit Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-lime flex-shrink-0 mt-0.5" />
                <span className="text-sm text-warm/70 leading-relaxed">
                  No. 1, Jalan Finotti,<br />
                  Seksyen 13, 40100 Shah Alam,<br />
                  Selangor, Malaysia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-lime flex-shrink-0" />
                <Link href="tel:+60378890012" className="text-sm text-warm/70 hover:text-white transition-colors">
                  03-7889 0012
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-lime flex-shrink-0" />
                <Link href="mailto:hello@finotti.my" className="text-sm text-warm/70 hover:text-white transition-colors">
                  hello@finotti.my
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-lime flex-shrink-0 mt-0.5" />
                <div className="text-sm text-warm/70">
                  <p>Mon – Sat: 10am – 8pm</p>
                  <p>Sun: 10am – 6pm</p>
                  <p>Public Holidays: 11am – 6pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-warm/50">
          <p>© {new Date().getFullYear()} Finotti Furniture Mall Sdn. Bhd. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/support" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/support" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link href="/support" className="hover:text-white transition-colors">PDPA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
