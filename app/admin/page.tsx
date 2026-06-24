import Link from "next/link"
import { Package, ShoppingCart, Users, MessageSquare, TrendingUp, Star, Briefcase, AlertCircle } from "lucide-react"
import { products as mockProducts } from "@/lib/mock-data/products"
import { orders as mockOrders } from "@/lib/mock-data/orders"
import { members as mockMembers } from "@/lib/mock-data/members"
import { afterSalesCases } from "@/lib/mock-data/after-sales"
import { jobOpenings } from "@/lib/mock-data/jobs"

function StatCard({ label, value, icon: Icon, href, color }: {
  label: string
  value: number | string
  icon: React.ComponentType<{ size?: number; className?: string }>
  href: string
  color: string
}) {
  return (
    <Link href={href} className="bg-white rounded-xl border border-grey-light p-6 flex items-center gap-4 hover:shadow-md transition-shadow group">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon size={26} className="text-white" />
      </div>
      <div>
        <p className="text-3xl font-bold text-charcoal">{value}</p>
        <p className="text-base text-grey">{label}</p>
      </div>
    </Link>
  )
}

export default function AdminDashboard() {
  const pendingOrders = mockOrders.filter((o) => o.status === "received" || o.status === "confirming").length
  const openCases = afterSalesCases.filter((c) => c.status === "submitted" || c.status === "in-progress").length

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-charcoal">Dashboard</h1>
        <p className="text-base text-grey mt-1">Welcome back. Here's an overview of Finotti Customer Mall.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard label="Total Products" value={mockProducts.length} icon={Package} href="/admin/products" color="bg-lime" />
        <StatCard label="Total Orders" value={mockOrders.length} icon={ShoppingCart} href="/admin" color="bg-charcoal" />
        <StatCard label="Members" value={mockMembers.length} icon={Users} href="/admin" color="bg-amber" />
        <StatCard label="Open After-Sales" value={openCases} icon={MessageSquare} href="/admin" color="bg-danger" />
      </div>

      {/* Alerts */}
      {pendingOrders > 0 && (
        <div className="bg-amber/10 border border-amber rounded-xl p-4 flex items-center gap-3 mb-8">
          <AlertCircle size={22} className="text-amber flex-shrink-0" />
          <p className="text-base text-charcoal">
            <strong>{pendingOrders} orders</strong> are pending processing. Review them in the Orders section.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl border border-grey-light p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-charcoal flex items-center gap-2">
              <ShoppingCart size={20} className="text-lime" /> Recent Orders
            </h2>
          </div>
          <div className="space-y-3">
            {mockOrders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex items-center justify-between py-2 border-b border-grey-light last:border-0">
                <div>
                  <p className="text-base font-semibold text-charcoal">{order.orderNumber}</p>
                  <p className="text-sm text-grey">{order.customerId}</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold text-charcoal">
                    {new Intl.NumberFormat("ms-MY", { style: "currency", currency: "MYR" }).format(order.total)}
                  </p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                    order.status === "completed" ? "bg-lime/10 text-lime" :
                    order.status === "received" || order.status === "confirming" ? "bg-amber/10 text-amber-dark" :
                    "bg-grey-light text-grey"
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl border border-grey-light p-6">
          <h2 className="text-lg font-bold text-charcoal mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Manage Products", href: "/admin/products", icon: Package, desc: `${mockProducts.length} products` },
              { label: "Edit Homepage", href: "/admin/content", icon: TrendingUp, desc: "Banners & promotions" },
              { label: "Review Feedback", href: "/feedback", icon: Star, desc: `${openCases} open cases` },
              { label: "Job Applications", href: "/admin/settings", icon: Briefcase, desc: `${jobOpenings.length} open roles` },
            ].map(({ label, href, icon: Icon, desc }) => (
              <Link
                key={href}
                href={href}
                className="p-4 rounded-xl border border-grey-light hover:border-lime hover:bg-lime/5 transition-colors group"
              >
                <Icon size={22} className="text-lime mb-2" />
                <p className="text-base font-semibold text-charcoal">{label}</p>
                <p className="text-sm text-grey">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
