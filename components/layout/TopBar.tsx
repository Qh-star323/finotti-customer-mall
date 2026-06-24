import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"

export function TopBar() {
  const waUrl = buildGeneralEnquiryURL()

  return (
    <div className="bg-charcoal text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2 text-sm">
        <p className="text-warm/80">
          Free delivery on orders above RM500 &nbsp;|&nbsp; Mon–Sat: 10am–8pm &nbsp;|&nbsp; Sun: 10am–6pm
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="tel:+60378890012"
            className="flex items-center gap-1.5 text-warm/90 hover:text-white transition-colors"
            aria-label="Call us at 03-7889 0012"
          >
            <Phone size={14} />
            <span>03-7889 0012</span>
          </Link>
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] hover:text-[#1ebe57] transition-colors font-medium"
            aria-label="WhatsApp us"
          >
            <MessageCircle size={14} />
            <span>WhatsApp Us</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
