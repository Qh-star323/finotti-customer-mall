import Link from "next/link"
import { Sofa, BedDouble, UtensilsCrossed, Monitor, Briefcase, Tag, BedIcon } from "lucide-react"

const categories = [
  { label: "Sofa & Living", href: "/products?category=sofa", icon: Sofa, color: "bg-blue-50 text-blue-600" },
  { label: "Mattress", href: "/products?category=mattress", icon: BedIcon, color: "bg-purple-50 text-purple-600" },
  { label: "Bedroom", href: "/products?category=bedroom", icon: BedDouble, color: "bg-indigo-50 text-indigo-600" },
  { label: "Dining", href: "/products?category=dining", icon: UtensilsCrossed, color: "bg-orange-50 text-orange-600" },
  { label: "Living Room", href: "/products?category=living-room", icon: Monitor, color: "bg-teal-50 text-teal-600" },
  { label: "Office Furniture", href: "/products?category=office", icon: Briefcase, color: "bg-slate-50 text-slate-600" },
  { label: "Promotion", href: "/products?category=promotion", icon: Tag, color: "bg-red-50 text-red-600" },
]

export function CategoryGrid() {
  return (
    <section className="py-14 bg-white" aria-labelledby="category-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 id="category-heading" className="text-3xl font-bold text-charcoal mb-3">Shop by Category</h2>
          <p className="text-base text-grey max-w-lg mx-auto">From living rooms to bedrooms — find the perfect furniture for every space in your home.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {categories.map(({ label, href, icon: Icon, color }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-grey-light hover:border-lime hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-charcoal text-center leading-tight group-hover:text-lime transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
