import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { buildGeneralEnquiryURL } from "@/lib/utils/whatsapp"

function PremiumSofaRender() {
  return (
    <svg
      viewBox="0 0 900 420"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full"
    >
      <defs>
        {/* Main fabric — warm cream, lit from upper-left */}
        <linearGradient id="hb-back" x1="0.1" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#F8F0DC" />
          <stop offset="45%" stopColor="#EDE0C2" />
          <stop offset="100%" stopColor="#C8B088" />
        </linearGradient>
        {/* Seat — slightly cooler because lit from top */}
        <linearGradient id="hb-seat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F2E8D0" />
          <stop offset="100%" stopColor="#D4C4A0" />
        </linearGradient>
        {/* Arm outer face — side-lit */}
        <linearGradient id="hb-arm-l" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0E6CC" />
          <stop offset="100%" stopColor="#A89060" />
        </linearGradient>
        <linearGradient id="hb-arm-r" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8C8A0" />
          <stop offset="100%" stopColor="#907850" />
        </linearGradient>
        {/* Arm top surface */}
        <linearGradient id="hb-arm-top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F8F4E8" />
          <stop offset="100%" stopColor="#D4C8A4" />
        </linearGradient>
        {/* Plinth / base */}
        <linearGradient id="hb-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D8C8A0" />
          <stop offset="100%" stopColor="#B0984C" stopOpacity="0.6" />
        </linearGradient>
        {/* Leg — dark walnut */}
        <linearGradient id="hb-leg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3C2810" />
          <stop offset="100%" stopColor="#1A0E06" />
        </linearGradient>
        {/* Ambient ground shadow */}
        <radialGradient id="hb-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
        {/* Subtle floor reflection */}
        <linearGradient id="hb-reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8D8B8" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#E8D8B8" stopOpacity="0" />
        </linearGradient>
        <filter id="hb-blur-shadow">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="450" cy="410" rx="330" ry="18" fill="url(#hb-shadow)" filter="url(#hb-blur-shadow)" />

      {/* ── LEFT ARM ── */}
      {/* Arm face */}
      <path d="M62,165 L62,365 Q62,380 78,380 L118,380 Q134,380 134,365 L134,190 Q134,170 118,165 Z" fill="url(#hb-arm-l)" />
      {/* Arm top */}
      <path d="M60,165 Q60,150 98,148 Q136,146 136,165 L134,172 Q134,158 98,156 Q62,154 62,168 Z" fill="url(#hb-arm-top)" />
      {/* Arm inner shadow (where it meets back) */}
      <rect x="130" y="168" width="8" height="196" rx="2" fill="rgba(0,0,0,0.12)" />

      {/* ── RIGHT ARM ── */}
      <path d="M838,165 L838,365 Q838,380 822,380 L782,380 Q766,380 766,365 L766,190 Q766,170 782,165 Z" fill="url(#hb-arm-r)" />
      <path d="M840,165 Q840,150 802,148 Q764,146 764,165 L766,172 Q766,158 802,156 Q838,154 838,168 Z" fill="url(#hb-arm-top)" />
      <rect x="762" y="168" width="8" height="196" rx="2" fill="rgba(0,0,0,0.08)" />

      {/* ── BACK CUSHIONS ── */}
      <rect x="130" y="128" width="640" height="198" rx="14" fill="url(#hb-back)" />

      {/* Cushion 1 (left) */}
      <rect x="136" y="134" width="204" height="186" rx="10" fill="none" stroke="#C8B080" strokeWidth="1" opacity="0.5" />
      <rect x="140" y="138" width="196" height="178" rx="8" fill="rgba(255,250,235,0.07)" />
      {/* Cushion 1 highlight (lit upper-left) */}
      <rect x="142" y="140" width="80" height="40" rx="6" fill="rgba(255,250,235,0.1)" />

      {/* Cushion 2 (center) */}
      <rect x="348" y="134" width="204" height="186" rx="10" fill="none" stroke="#C8B080" strokeWidth="1" opacity="0.5" />
      <rect x="352" y="138" width="196" height="178" rx="8" fill="rgba(255,250,235,0.04)" />

      {/* Cushion 3 (right) */}
      <rect x="560" y="134" width="204" height="186" rx="10" fill="none" stroke="#C8B080" strokeWidth="1" opacity="0.5" />
      <rect x="564" y="138" width="196" height="178" rx="8" fill="rgba(0,0,0,0.04)" />

      {/* Back-cushion top-edge highlight */}
      <rect x="130" y="128" width="640" height="6" rx="3" fill="rgba(255,250,235,0.3)" />

      {/* ── SEAT ── */}
      <rect x="130" y="308" width="640" height="82" rx="10" fill="url(#hb-seat)" />

      {/* Seat cushion dividers */}
      <rect x="343" y="312" width="2.5" height="74" rx="1.25" fill="rgba(0,0,0,0.18)" />
      <rect x="556" y="312" width="2.5" height="74" rx="1.25" fill="rgba(0,0,0,0.18)" />

      {/* Seat front-edge roll */}
      <rect x="130" y="378" width="640" height="12" rx="6" fill="rgba(0,0,0,0.1)" />

      {/* Seat-back junction shadow */}
      <rect x="130" y="304" width="640" height="14" rx="0" fill="rgba(0,0,0,0.15)" />

      {/* ── BASE / PLINTH ── */}
      <rect x="118" y="376" width="664" height="22" rx="6" fill="url(#hb-base)" />

      {/* ── LEGS (walnut, angled slightly) ── */}
      <rect x="145" y="396" width="20" height="32" rx="4" fill="url(#hb-leg)" />
      <rect x="735" y="396" width="20" height="32" rx="4" fill="url(#hb-leg)" />
      <rect x="340" y="396" width="17" height="28" rx="3.5" fill="url(#hb-leg)" />
      <rect x="543" y="396" width="17" height="28" rx="3.5" fill="url(#hb-leg)" />

      {/* ── FLOOR REFLECTION ── */}
      <rect x="118" y="428" width="664" height="40" rx="0" fill="url(#hb-reflect)" transform="scale(1,-1) translate(0,-856)" />
    </svg>
  )
}

export function HeroBanner() {
  const waUrl = buildGeneralEnquiryURL()

  return (
    <section className="relative bg-[#0c0c0c] overflow-hidden" aria-label="Homepage hero">

      {/* Radial spotlight from above-center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% -5%, rgba(180,165,140,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Top text area */}
      <div className="relative max-w-screen-xl mx-auto px-4 lg:px-10 pt-20 lg:pt-32 pb-6 text-center">
        {/* Brand eyebrow */}
        <p
          className="text-xs font-bold tracking-[0.38em] uppercase mb-8"
          style={{ color: "#7CB342" }}
        >
          Finotti Furniture Mall
        </p>

        {/* Primary headline */}
        <h1 className="font-bold text-white leading-[0.92] tracking-tight mb-6">
          <span className="block text-[clamp(56px,10vw,110px)]">Live</span>
          <span className="block text-[clamp(56px,10vw,110px)] text-white/80">beautifully.</span>
        </h1>

        {/* Sub-copy */}
        <p className="text-white/45 text-base max-w-xs mx-auto mb-10 leading-relaxed">
          Premium furniture for Malaysian homes.<br />
          50 years of trusted craftsmanship.
        </p>

        {/* CTAs — pill style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-[#0c0c0c] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-[#f5f5f5] transition-colors"
          >
            Shop Now <ArrowRight size={16} />
          </Link>
          <Link
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white border border-white/20 hover:border-white/50 transition-colors"
          >
            <MessageCircle size={16} /> Talk to a Specialist
          </Link>
        </div>
      </div>

      {/* Product render — large, centered */}
      <div className="relative max-w-screen-lg mx-auto px-4 lg:px-8 mt-6">
        <PremiumSofaRender />
      </div>

      {/* Bottom fade transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #f5f5f7, transparent)" }}
      />
    </section>
  )
}
