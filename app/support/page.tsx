"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Accordion } from "@/components/ui/Accordion"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"

const faqs = [
  {
    id: "faq-01",
    title: "How long does delivery take?",
    content: (
      <p className="text-base text-grey">
        For ready stock items, delivery typically takes 5–10 working days within Klang Valley. Pre-order items may take 2–6 weeks. Our team will confirm your exact delivery date after your order is placed.
      </p>
    ),
  },
  {
    id: "faq-02",
    title: "Do you offer installation services?",
    content: (
      <p className="text-base text-grey">
        Yes! We offer professional installation for most furniture items. Installation fees range from RM100 to RM300 per item depending on complexity. You can add installation when adding items to your cart.
      </p>
    ),
  },
  {
    id: "faq-03",
    title: "What is your warranty policy?",
    content: (
      <p className="text-base text-grey">
        Warranties range from 1 to 15 years depending on the product. Check the product detail page for specific warranty information. For warranty claims, please contact our after-sales team via WhatsApp or the Feedback page.
      </p>
    ),
  },
  {
    id: "faq-04",
    title: "Can I return or exchange furniture?",
    content: (
      <p className="text-base text-grey">
        We accept exchanges or returns within 7 days if the item has a manufacturing defect or is significantly different from the description. Items must be in original condition. Please contact us via WhatsApp before returning any item.
      </p>
    ),
  },
  {
    id: "faq-05",
    title: "Do you deliver outside Klang Valley?",
    content: (
      <p className="text-base text-grey">
        Yes, we deliver to Peninsular Malaysia. Delivery fees and timelines may vary by location. Contact our team for a delivery quote to your area.
      </p>
    ),
  },
  {
    id: "faq-06",
    title: "Can I visit the showroom to see the furniture?",
    content: (
      <p className="text-base text-grey">
        Absolutely! We have a full showroom in Shah Alam, Selangor. Most products are available for viewing. Our opening hours are Monday–Saturday 10am–8pm, Sunday 10am–6pm.
      </p>
    ),
  },
  {
    id: "faq-07",
    title: "How do I track my order?",
    content: (
      <p className="text-base text-grey">
        You can track your order via the "My Orders" page. Our team will also update you via WhatsApp at key milestones — order confirmation, dispatch and delivery.
      </p>
    ),
  },
  {
    id: "faq-08",
    title: "What payment methods do you accept?",
    content: (
      <p className="text-base text-grey">
        We accept full payment or a RM500 deposit to confirm your order. Payment options include bank transfer, credit/debit card, e-wallet or cash at our showroom. Contact our team for more details.
      </p>
    ),
  },
]

export default function SupportPage() {
  const waUrl = buildGeneralEnquiryURL()

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-5xl mx-auto px-4 lg:px-6 py-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-2">How Can We Help?</h1>
        <p className="text-base text-grey mb-8">Our team is ready to assist you. Choose the most convenient way to reach us.</p>

        {/* Contact methods — WhatsApp most prominent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {/* WhatsApp — primary, largest */}
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:col-span-2 bg-[#25D366] text-white rounded-xl p-6 flex items-center gap-4 hover:bg-[#1ebe57] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
            aria-label="Chat with us on WhatsApp"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle size={32} className="text-white" />
            </div>
            <div>
              <p className="text-xl font-bold">WhatsApp Us</p>
              <p className="text-base text-white/90">Fastest response — usually within 30 minutes</p>
              <p className="text-base font-semibold mt-1">+6012-345 6789</p>
            </div>
          </Link>

          <Link
            href="tel:+60378890012"
            className="bg-white rounded-xl p-6 flex items-center gap-4 border border-grey-light hover:border-lime hover:shadow-sm transition-all"
            aria-label="Call us"
          >
            <div className="w-14 h-14 bg-lime/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone size={26} className="text-lime" />
            </div>
            <div>
              <p className="text-lg font-semibold text-charcoal">Call Us</p>
              <p className="text-base text-charcoal font-bold">03-7889 0012</p>
              <p className="text-sm text-grey">Mon–Sat: 10am–8pm</p>
            </div>
          </Link>

          <Link
            href="mailto:hello@finotti.my"
            className="bg-white rounded-xl p-6 flex items-center gap-4 border border-grey-light hover:border-lime hover:shadow-sm transition-all"
            aria-label="Email us"
          >
            <div className="w-14 h-14 bg-lime/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Mail size={26} className="text-lime" />
            </div>
            <div>
              <p className="text-lg font-semibold text-charcoal">Email Us</p>
              <p className="text-base text-charcoal">hello@finotti.my</p>
              <p className="text-sm text-grey">Reply within 1 working day</p>
            </div>
          </Link>
        </div>

        {/* Store address */}
        <div className="bg-white rounded-xl border border-grey-light p-6 mb-10">
          <h2 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
            <MapPin size={22} className="text-lime" /> Visit Our Showroom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-base text-charcoal font-medium mb-1">Finotti Furniture Mall</p>
              <p className="text-base text-grey leading-relaxed">
                No. 1, Jalan Finotti, Seksyen 13,<br />
                40100 Shah Alam, Selangor, Malaysia
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-base text-grey flex items-center gap-2">
                  <Clock size={18} className="text-lime" />
                  Mon–Sat: 10am–8pm &nbsp;|&nbsp; Sun: 10am–6pm
                </p>
                <p className="text-base text-grey flex items-center gap-2">
                  <Clock size={18} className="text-lime" />
                  Public Holidays: 11am–6pm
                </p>
              </div>
              <Link href="https://maps.google.com/?q=Shah+Alam+Selangor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4">
                <Button variant="outline" size="md" rightIcon={<ExternalLink size={16} />}>
                  Get Directions
                </Button>
              </Link>
            </div>
            <div className="bg-warm-dark rounded-xl aspect-video flex items-center justify-center">
              <p className="text-grey text-sm text-center px-4">Interactive map available in full version<br />(Google Maps API integration)</p>
            </div>
          </div>
        </div>

        {/* Chat widget stub */}
        <div className="bg-white rounded-xl border border-grey-light p-6 mb-10">
          <h2 className="text-xl font-semibold text-charcoal mb-4">Send Us a Message</h2>
          <p className="text-base text-grey mb-5">Fill in the form below and our team will respond within 24 hours.</p>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-base font-medium text-charcoal mb-1.5 block">Your Name <span className="text-danger">*</span></label>
              <input type="text" required className="w-full min-h-[48px] rounded-lg border border-grey-light px-4 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime" placeholder="e.g. Siti Rahimah" />
            </div>
            <div>
              <label className="text-base font-medium text-charcoal mb-1.5 block">Phone Number <span className="text-danger">*</span></label>
              <input type="tel" required className="w-full min-h-[48px] rounded-lg border border-grey-light px-4 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime" placeholder="012-345 6789" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-base font-medium text-charcoal mb-1.5 block">Product of Interest (Optional)</label>
              <input type="text" className="w-full min-h-[48px] rounded-lg border border-grey-light px-4 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime" placeholder="e.g. Nordic L-Shape Sofa" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-base font-medium text-charcoal mb-1.5 block">Your Message <span className="text-danger">*</span></label>
              <textarea required rows={4} className="w-full rounded-lg border border-grey-light px-4 py-3 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime resize-none" placeholder="How can we help you?" />
            </div>
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
              <Link href={waUrl} target="_blank" rel="noopener noreferrer">
                <Button type="button" variant="whatsapp" size="lg" leftIcon={<MessageCircle size={18} />}>
                  Continue on WhatsApp
                </Button>
              </Link>
            </div>
          </form>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-charcoal mb-5">Frequently Asked Questions</h2>
          <Accordion items={faqs} allowMultiple />
        </div>
      </div>
    </div>
  )
}
