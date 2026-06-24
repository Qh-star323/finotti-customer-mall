import Link from "next/link"

function SofaIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <rect x="8" y="13" width="24" height="13" rx="3" fill="white" opacity="0.9" />
      <rect x="8" y="21" width="24" height="7" rx="2" fill="white" />
      <rect x="5" y="16" width="6" height="12" rx="2.5" fill="white" opacity="0.8" />
      <rect x="29" y="16" width="6" height="12" rx="2.5" fill="white" opacity="0.8" />
      <rect x="13" y="28" width="4" height="4" rx="1" fill="white" opacity="0.5" />
      <rect x="23" y="28" width="4" height="4" rx="1" fill="white" opacity="0.5" />
    </svg>
  )
}

function MattressIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <rect x="6" y="14" width="28" height="18" rx="4" fill="white" opacity="0.9" />
      <rect x="8" y="9" width="24" height="7" rx="3" fill="white" opacity="0.6" />
      <rect x="9" y="17" width="9" height="6" rx="2" fill="white" opacity="0.45" />
      <rect x="22" y="17" width="9" height="6" rx="2" fill="white" opacity="0.45" />
      <rect x="9" y="25" width="22" height="3" rx="1.5" fill="white" opacity="0.3" />
    </svg>
  )
}

function BedIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <rect x="6" y="16" width="28" height="16" rx="3" fill="white" opacity="0.9" />
      <rect x="6" y="9" width="28" height="9" rx="4" fill="white" opacity="0.65" />
      <rect x="9" y="19" width="10" height="7" rx="2" fill="white" opacity="0.4" />
      <rect x="21" y="19" width="10" height="7" rx="2" fill="white" opacity="0.4" />
      <rect x="8" y="32" width="4" height="4" rx="1" fill="white" opacity="0.5" />
      <rect x="28" y="32" width="4" height="4" rx="1" fill="white" opacity="0.5" />
    </svg>
  )
}

function DiningIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <ellipse cx="20" cy="17" rx="13" ry="5" fill="white" opacity="0.9" />
      <rect x="17.5" y="21" width="3" height="12" rx="1.5" fill="white" opacity="0.7" />
      <rect x="15" y="31" width="10" height="3" rx="1.5" fill="white" opacity="0.55" />
      <rect x="5" y="11" width="7" height="11" rx="3" fill="white" opacity="0.5" />
      <rect x="28" y="11" width="7" height="11" rx="3" fill="white" opacity="0.5" />
      <rect x="15" y="7" width="10" height="6" rx="2.5" fill="white" opacity="0.4" />
    </svg>
  )
}

function ArmchairIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <rect x="11" y="16" width="18" height="12" rx="3" fill="white" opacity="0.9" />
      <rect x="8" y="19" width="5" height="9" rx="2.5" fill="white" opacity="0.8" />
      <rect x="27" y="19" width="5" height="9" rx="2.5" fill="white" opacity="0.8" />
      <rect x="13" y="10" width="14" height="9" rx="3" fill="white" opacity="0.65" />
      <rect x="14" y="28" width="4" height="5" rx="1.5" fill="white" opacity="0.5" />
      <rect x="22" y="28" width="4" height="5" rx="1.5" fill="white" opacity="0.5" />
    </svg>
  )
}

function DeskIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <rect x="12" y="9" width="16" height="13" rx="2" fill="white" opacity="0.75" />
      <rect x="6" y="22" width="28" height="3.5" rx="1.75" fill="white" opacity="0.9" />
      <rect x="10" y="25.5" width="3" height="9" rx="1.5" fill="white" opacity="0.65" />
      <rect x="27" y="25.5" width="3" height="9" rx="1.5" fill="white" opacity="0.65" />
      <ellipse cx="20" cy="35.5" rx="10" ry="3.5" fill="white" opacity="0.45" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-10 h-10">
      <path d="M7 7 L22 7 L32 17 L21 28 L7 28 Z" fill="white" opacity="0.9" />
      <circle cx="14" cy="14" r="2.5" fill="white" opacity="0.45" />
      <line x1="14" y1="20" x2="21" y2="20" stroke="white" strokeWidth="1.5" opacity="0.55" />
      <line x1="14" y1="24" x2="18" y2="24" stroke="white" strokeWidth="1.5" opacity="0.55" />
    </svg>
  )
}

const categories = [
  { label: "Sofa & Living", href: "/products?category=sofa", bg: "#4A82C8", Icon: SofaIcon },
  { label: "Mattress", href: "/products?category=mattress", bg: "#7B68C8", Icon: MattressIcon },
  { label: "Bedroom", href: "/products?category=bedroom", bg: "#B8608A", Icon: BedIcon },
  { label: "Dining", href: "/products?category=dining", bg: "#D07040", Icon: DiningIcon },
  { label: "Living Room", href: "/products?category=living-room", bg: "#3A9E9A", Icon: ArmchairIcon },
  { label: "Office", href: "/products?category=office", bg: "#6B8A50", Icon: DeskIcon },
  { label: "Promotion", href: "/products?tag=promotion", bg: "#CC3535", Icon: TagIcon },
]

export function CategoryGrid() {
  return (
    <section className="bg-white border-b border-grey-light" aria-labelledby="category-heading">
      <h2 id="category-heading" className="sr-only">Shop by Category</h2>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex items-start gap-8 lg:gap-0 lg:justify-between overflow-x-auto scroll-x pb-1 -mx-1 px-1">
          {categories.map(({ label, href, bg, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-3 flex-shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded-2xl"
            >
              <div
                className="w-[88px] h-[88px] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shadow-sm"
                style={{ backgroundColor: bg }}
              >
                <Icon />
              </div>
              <span className="text-sm font-medium text-charcoal text-center w-24 leading-tight group-hover:text-lime transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
