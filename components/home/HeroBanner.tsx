import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"

function LivingRoomIllustration() {
  return (
    <svg
      viewBox="0 0 900 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full"
    >
      {/* Floor */}
      <rect x="0" y="278" width="900" height="82" fill="#E8DDD0" />
      {/* Rug */}
      <ellipse cx="450" cy="312" rx="290" ry="48" fill="#D4BFA0" />
      <ellipse cx="450" cy="312" rx="240" ry="38" fill="none" stroke="#C4AD8E" strokeWidth="3" opacity="0.6" />
      <ellipse cx="450" cy="312" rx="160" ry="26" fill="none" stroke="#C4AD8E" strokeWidth="2" opacity="0.5" />

      {/* Sofa back */}
      <rect x="185" y="192" width="530" height="90" rx="18" fill="#6B8A50" />
      {/* Sofa seat */}
      <rect x="185" y="262" width="530" height="62" rx="10" fill="#7CB342" />
      {/* Left arm */}
      <rect x="160" y="210" width="48" height="114" rx="14" fill="#5E7945" />
      {/* Right arm */}
      <rect x="692" y="210" width="48" height="114" rx="14" fill="#5E7945" />
      {/* Back cushion dividers */}
      <rect x="360" y="195" width="3" height="90" rx="1.5" fill="#5E7945" />
      <rect x="537" y="195" width="3" height="90" rx="1.5" fill="#5E7945" />
      {/* Seat dividers */}
      <rect x="360" y="265" width="3" height="55" rx="1.5" fill="#6A9E38" />
      <rect x="537" y="265" width="3" height="55" rx="1.5" fill="#6A9E38" />
      {/* Sofa legs */}
      <rect x="208" y="322" width="18" height="18" rx="4" fill="#4A3728" />
      <rect x="674" y="322" width="18" height="18" rx="4" fill="#4A3728" />
      <rect x="358" y="322" width="14" height="14" rx="3" fill="#4A3728" />
      <rect x="528" y="322" width="14" height="14" rx="3" fill="#4A3728" />

      {/* Coffee table top */}
      <rect x="318" y="320" width="264" height="14" rx="7" fill="#B08060" />
      {/* Coffee table body */}
      <rect x="328" y="332" width="244" height="40" rx="7" fill="#9A6E4E" />
      {/* Coffee table legs */}
      <rect x="343" y="334" width="12" height="38" rx="3" fill="#7D5A3C" />
      <rect x="545" y="334" width="12" height="38" rx="3" fill="#7D5A3C" />
      {/* Items on coffee table */}
      <ellipse cx="398" cy="323" rx="28" ry="6" fill="#C8A878" opacity="0.85" />
      <rect x="428" y="317" width="65" height="8" rx="3" fill="#A8B8C8" opacity="0.8" />
      <circle cx="512" cy="322" r="9" fill="#D4956A" opacity="0.75" />

      {/* Side table left */}
      <rect x="62" y="292" width="90" height="12" rx="5" fill="#B08060" />
      <rect x="70" y="302" width="74" height="28" rx="5" fill="#9A6E4E" />
      {/* Lamp pole */}
      <rect x="102" y="175" width="8" height="117" rx="3" fill="#C4A060" />
      {/* Lamp shade */}
      <polygon points="78,180 130,180 120,140 88,140" fill="#FFF8DC" />
      <ellipse cx="106" cy="180" rx="26" ry="8" fill="#F5ECC8" opacity="0.7" />
      {/* Lamp glow */}
      <ellipse cx="106" cy="177" rx="44" ry="20" fill="#FFFDE7" opacity="0.22" />

      {/* Side table right */}
      <rect x="748" y="292" width="90" height="12" rx="5" fill="#B08060" />
      <rect x="756" y="302" width="74" height="28" rx="5" fill="#9A6E4E" />
      {/* Vase */}
      <rect x="772" y="250" width="18" height="44" rx="7" fill="#7B9E9A" />
      <ellipse cx="781" cy="250" rx="14" ry="9" fill="#8EB0AC" />
      {/* Vase leaves */}
      <ellipse cx="768" cy="237" rx="18" ry="13" fill="#5A8C50" transform="rotate(-25, 768, 237)" />
      <ellipse cx="794" cy="235" rx="18" ry="13" fill="#4A7C40" transform="rotate(25, 794, 235)" />
      <ellipse cx="781" cy="228" rx="14" ry="18" fill="#6AA056" />

      {/* Large floor plant */}
      <rect x="832" y="258" width="26" height="60" rx="6" fill="#6D4C35" />
      <ellipse cx="845" cy="238" rx="40" ry="48" fill="#5A8C50" />
      <ellipse cx="822" cy="258" rx="24" ry="32" fill="#4A7C40" />
      <ellipse cx="868" cy="255" rx="24" ry="30" fill="#4A7C40" />
      <ellipse cx="845" cy="215" rx="22" ry="28" fill="#6AA056" />
      <path d="M827,258 L863,258 L860,280 L830,280 Z" fill="#6D4C35" />

      {/* Wall art frame */}
      <rect x="372" y="80" width="156" height="118" rx="7" fill="white" stroke="#D4C8B8" strokeWidth="2" />
      <rect x="380" y="88" width="140" height="102" rx="5" fill="#F5EEE4" />
      {/* Abstract art content */}
      <ellipse cx="428" cy="139" rx="30" ry="38" fill="#E8D5C0" opacity="0.85" />
      <ellipse cx="463" cy="123" rx="24" ry="32" fill="#D4B898" opacity="0.8" />
      <ellipse cx="492" cy="149" rx="26" ry="22" fill="#C9A87A" opacity="0.65" />

      {/* Small painting right */}
      <rect x="618" y="108" width="80" height="60" rx="5" fill="white" stroke="#D4C8B8" strokeWidth="1.5" />
      <rect x="624" y="114" width="68" height="48" rx="4" fill="#F0F4F8" />
      <ellipse cx="658" cy="138" rx="22" ry="18" fill="#C5D8E8" opacity="0.7" />
      <ellipse cx="670" cy="130" rx="14" ry="16" fill="#A8C4D8" opacity="0.6" />
    </svg>
  )
}

export function HeroBanner() {
  const waUrl = buildGeneralEnquiryURL()

  return (
    <section className="bg-[#f5f5f7]" aria-label="Homepage hero">
      {/* Top text band — Apple Store style */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-12 lg:pt-16 pb-6">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          {/* Left: brand name */}
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-charcoal tracking-tight leading-none">
              Finotti.
            </h1>
            <p className="text-base text-grey mt-2 hidden lg:block">50 years of furniture excellence</p>
          </div>
          {/* Right: tagline + links */}
          <div className="lg:text-right max-w-sm">
            <p className="text-xl lg:text-2xl font-semibold text-charcoal leading-snug mb-3">
              The best way to furnish<br className="hidden lg:block" /> your home.
            </p>
            <div className="flex flex-col gap-1.5">
              <Link
                href="/products"
                className="inline-flex items-center lg:justify-end gap-0.5 text-lime font-semibold hover:underline focus-visible:outline-none"
              >
                Shop the collection <ChevronRight size={18} strokeWidth={2.5} />
              </Link>
              <Link
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center lg:justify-end gap-0.5 text-lime font-semibold hover:underline focus-visible:outline-none"
              >
                Talk to a specialist <ChevronRight size={18} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Living room illustration */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <LivingRoomIllustration />
      </div>
    </section>
  )
}
