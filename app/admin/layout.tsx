import Link from "next/link"
import { LayoutDashboard, Package, FileText, Settings, ArrowLeft } from "lucide-react"
import type { ReactNode } from "react"

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Homepage Content", href: "/admin/content", icon: FileText },
  { label: "Settings & SEO", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-warm">
      {/* Sidebar */}
      <aside className="w-60 bg-charcoal text-warm flex-shrink-0 hidden lg:flex flex-col">
        <div className="p-5 border-b border-white/10">
          <p className="text-white font-bold text-lg">Finotti CMS</p>
          <p className="text-warm/60 text-xs">Content Management</p>
        </div>
        <nav className="p-3 flex-1" aria-label="Admin navigation">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-warm/80 hover:text-white hover:bg-white/10 transition-colors mb-1"
            >
              <Icon size={20} />
              {label}
            </Link>
          ))}
          <div className="mt-auto pt-4 border-t border-white/10 mt-4">
            <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-warm/60 hover:text-white transition-colors">
              <ArrowLeft size={20} /> Back to Website
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">
        {/* Mobile top bar */}
        <div className="lg:hidden bg-charcoal text-white px-4 py-3 flex items-center justify-between">
          <p className="font-bold">Finotti CMS</p>
          <Link href="/" className="text-sm text-warm/80 hover:text-white">← Website</Link>
        </div>
        {/* Mobile nav */}
        <nav className="lg:hidden flex overflow-x-auto bg-charcoal border-b border-white/10 px-3 pb-2 gap-1">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-warm/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon size={16} /> {label}
            </Link>
          ))}
        </nav>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}
