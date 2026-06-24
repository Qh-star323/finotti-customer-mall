import Link from "next/link"
import { ChevronRight } from "lucide-react"

function SofaShowcase() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <ellipse cx="160" cy="210" rx="120" ry="9" fill="rgba(0,0,0,0.25)" />
      {/* Back cushions */}
      <rect x="28" y="85" width="264" height="85" rx="18" fill="white" opacity="0.82" />
      {/* Seat */}
      <rect x="28" y="148" width="264" height="50" rx="11" fill="white" opacity="0.96" />
      {/* Left arm */}
      <rect x="5" y="108" width="38" height="90" rx="14" fill="white" opacity="0.72" />
      {/* Right arm */}
      <rect x="277" y="108" width="38" height="90" rx="14" fill="white" opacity="0.72" />
      {/* Cushion dividers on back */}
      <rect x="128" y="88" width="3" height="78" rx="1.5" fill="rgba(0,0,0,0.12)" />
      <rect x="192" y="88" width="3" height="78" rx="1.5" fill="rgba(0,0,0,0.12)" />
      {/* Seat dividers */}
      <rect x="128" y="150" width="3" height="44" rx="1.5" fill="rgba(0,0,0,0.08)" />
      <rect x="192" y="150" width="3" height="44" rx="1.5" fill="rgba(0,0,0,0.08)" />
      {/* Legs */}
      <rect x="50" y="196" width="16" height="14" rx="3" fill="white" opacity="0.55" />
      <rect x="254" y="196" width="16" height="14" rx="3" fill="white" opacity="0.55" />
    </svg>
  )
}

function DiningShowcase() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <ellipse cx="160" cy="212" rx="140" ry="8" fill="rgba(139,100,60,0.2)" />
      {/* Table top */}
      <ellipse cx="160" cy="110" rx="118" ry="38" fill="#8D6E4A" />
      <ellipse cx="160" cy="106" rx="115" ry="36" fill="#A07B55" />
      {/* Table edge highlight */}
      <ellipse cx="160" cy="104" rx="112" ry="34" fill="none" stroke="#B89060" strokeWidth="1.5" opacity="0.6" />
      {/* Pedestal leg */}
      <rect x="149" y="146" width="22" height="58" rx="6" fill="#7D5A3C" />
      {/* Pedestal base */}
      <ellipse cx="160" cy="204" rx="48" ry="10" fill="#6B4C30" />
      {/* Chairs */}
      <rect x="18" y="98" width="36" height="52" rx="6" fill="#6B4C30" />
      <rect x="18" y="82" width="36" height="24" rx="6" fill="#5A3E28" />
      <rect x="266" y="98" width="36" height="52" rx="6" fill="#6B4C30" />
      <rect x="266" y="82" width="36" height="24" rx="6" fill="#5A3E28" />
      <rect x="124" y="48" width="72" height="38" rx="6" fill="#6B4C30" />
      <rect x="124" y="34" width="72" height="20" rx="6" fill="#5A3E28" />
      {/* Place settings */}
      <circle cx="128" cy="112" r="14" fill="#F5EEE4" opacity="0.55" />
      <circle cx="192" cy="112" r="14" fill="#F5EEE4" opacity="0.55" />
      <circle cx="160" cy="90" r="12" fill="#F5EEE4" opacity="0.45" />
      {/* Centerpiece */}
      <rect x="148" y="96" width="24" height="28" rx="10" fill="#7B9E9A" opacity="0.8" />
      <ellipse cx="160" cy="96" rx="16" ry="7" fill="#8EB0AC" opacity="0.75" />
    </svg>
  )
}

function BedroomShowcase() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <ellipse cx="160" cy="212" rx="140" ry="7" fill="rgba(120,100,160,0.15)" />
      {/* Headboard */}
      <rect x="18" y="40" width="284" height="105" rx="18" fill="white" opacity="0.82" />
      {/* Headboard panels */}
      <rect x="34" y="56" width="116" height="76" rx="12" fill="white" opacity="0.38" />
      <rect x="170" y="56" width="116" height="76" rx="12" fill="white" opacity="0.38" />
      {/* Mattress */}
      <rect x="12" y="132" width="296" height="72" rx="12" fill="white" opacity="0.96" />
      {/* Pillows */}
      <rect x="26" y="140" width="116" height="50" rx="12" fill="white" />
      <rect x="178" y="140" width="116" height="50" rx="12" fill="white" />
      {/* Pillow tint */}
      <rect x="26" y="140" width="116" height="50" rx="12" fill="rgba(160,130,200,0.1)" />
      <rect x="178" y="140" width="116" height="50" rx="12" fill="rgba(160,130,200,0.1)" />
      {/* Duvet fold line */}
      <rect x="12" y="158" width="296" height="4" rx="2" fill="white" opacity="0.45" />
      {/* Legs */}
      <rect x="22" y="200" width="16" height="16" rx="4" fill="white" opacity="0.55" />
      <rect x="282" y="200" width="16" height="16" rx="4" fill="white" opacity="0.55" />
    </svg>
  )
}

function OfficeShowcase() {
  return (
    <svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-full h-full">
      <ellipse cx="160" cy="212" rx="140" ry="7" fill="rgba(60,80,100,0.1)" />
      {/* Monitor */}
      <rect x="90" y="28" width="140" height="100" rx="8" fill="#2C3A4A" />
      <rect x="97" y="35" width="126" height="84" rx="5" fill="#E8F0F8" />
      {/* Screen content */}
      <rect x="104" y="42" width="112" height="10" rx="3" fill="#C5D8E8" opacity="0.85" />
      <rect x="104" y="56" width="80" height="6" rx="2" fill="#C5D8E8" opacity="0.6" />
      <rect x="104" y="66" width="96" height="6" rx="2" fill="#C5D8E8" opacity="0.6" />
      <rect x="104" y="76" width="64" height="6" rx="2" fill="#C5D8E8" opacity="0.5" />
      <rect x="104" y="92" width="112" height="18" rx="4" fill="#7CB342" opacity="0.65" />
      {/* Monitor stand */}
      <rect x="148" y="128" width="24" height="16" rx="4" fill="#3A4858" />
      <rect x="124" y="142" width="72" height="7" rx="3.5" fill="#2C3A4A" />
      {/* Desk surface */}
      <rect x="14" y="150" width="292" height="14" rx="7" fill="#B08060" />
      {/* Desk body */}
      <rect x="18" y="162" width="284" height="38" rx="5" fill="#9A6E4E" />
      {/* Desk legs */}
      <rect x="22" y="164" width="16" height="48" rx="5" fill="#7D5A3C" />
      <rect x="282" y="164" width="16" height="48" rx="5" fill="#7D5A3C" />
      {/* Keyboard */}
      <rect x="95" y="153" width="116" height="12" rx="4" fill="#D0C8B8" opacity="0.9" />
      {/* Mouse */}
      <rect x="228" y="153" width="30" height="18" rx="8" fill="#C0B8A8" opacity="0.9" />
      {/* Chair (partial) */}
      <ellipse cx="160" cy="215" rx="64" ry="9" fill="#6B8A50" opacity="0.5" />
      <rect x="150" y="190" width="20" height="26" rx="5" fill="#6B8A50" opacity="0.6" />
    </svg>
  )
}

const SHOWCASE = [
  {
    tag: "BEST SELLER",
    tagClass: "bg-amber text-charcoal",
    name: "Cosmo Series",
    headline: "Modular Living Sofa",
    tagline: "Comfort redefined.",
    price: "From RM 2,899",
    href: "/products?category=sofa",
    cardBg: "#1d1d1f",
    light: true,
    Illustration: SofaShowcase,
  },
  {
    tag: "NEW",
    tagClass: "bg-lime text-white",
    name: "Nordic Series",
    headline: "4-Piece Dining Set",
    tagline: "Gather in style.",
    price: "From RM 1,599",
    href: "/products?category=dining",
    cardBg: "#FBF5EC",
    light: false,
    Illustration: DiningShowcase,
  },
  {
    tag: "NEW",
    tagClass: "bg-lime text-white",
    name: "Serenity Collection",
    headline: "Master Bedroom Set",
    tagline: "Your sanctuary awaits.",
    price: "From RM 3,499",
    href: "/products?category=bedroom",
    cardBg: "#F0EAF6",
    light: false,
    Illustration: BedroomShowcase,
  },
  {
    tag: "FEATURED",
    tagClass: "bg-grey-light text-charcoal",
    name: "Executive Series",
    headline: "Home Office Desk",
    tagline: "Work beautifully.",
    price: "From RM 1,199",
    href: "/products?category=office",
    cardBg: "#EBF0F5",
    light: false,
    Illustration: OfficeShowcase,
  },
]

export function HotProducts() {
  return (
    <section className="py-14 bg-[#f5f5f7]" aria-labelledby="latest-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section header — Apple style */}
        <div className="mb-8">
          <h2 id="latest-heading" className="text-3xl font-bold text-charcoal">
            The latest.{" "}
            <span className="text-grey font-normal">Take a look at what&apos;s new in our collection.</span>
          </h2>
        </div>

        {/* Showcase cards */}
        <div className="flex gap-4 overflow-x-auto scroll-x pb-2 -mx-1 px-1 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {SHOWCASE.map(({ tag, tagClass, name, headline, tagline, price, href, cardBg, light, Illustration }) => (
            <Link
              key={href}
              href={href}
              className="group flex-shrink-0 w-72 lg:w-auto rounded-3xl overflow-hidden block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
              style={{ backgroundColor: cardBg }}
            >
              <div className="p-6 pb-4">
                {/* Tag */}
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${tagClass}`}>
                  {tag}
                </span>
                {/* Product name */}
                <p className={`text-xs font-semibold tracking-wide mb-0.5 ${light ? "text-grey-light" : "text-grey"}`}>
                  {name}
                </p>
                {/* Headline */}
                <h3 className={`text-xl font-bold leading-tight mb-1 ${light ? "text-white" : "text-charcoal"}`}>
                  {headline}
                </h3>
                {/* Tagline */}
                <p className={`text-sm ${light ? "text-grey-light" : "text-grey"}`}>{tagline}</p>
                {/* Price */}
                <p className={`text-sm font-semibold mt-1.5 ${light ? "text-grey-light" : "text-grey"}`}>{price}</p>
                {/* CTA */}
                <div className={`flex items-center gap-0.5 text-sm font-semibold mt-3 ${light ? "text-lime" : "text-lime-dark"} group-hover:underline`}>
                  Shop Now <ChevronRight size={16} strokeWidth={2.5} />
                </div>
              </div>

              {/* Illustration */}
              <div className="px-4 pb-2 h-44">
                <Illustration />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
