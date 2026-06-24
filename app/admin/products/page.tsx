"use client"

import { useState } from "react"
import { Search, Plus, Edit2, Eye, Package } from "lucide-react"
import Link from "next/link"
import { products as mockProducts } from "@/lib/mock-data/products"
import { cn } from "@/lib/utils/cn"

const formatMYR = (n: number) =>
  new Intl.NumberFormat("ms-MY", { style: "currency", currency: "MYR" }).format(n)

export default function AdminProductsPage() {
  const [search, setSearch] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const categories = ["all", ...Array.from(new Set(mockProducts.map((p) => p.category)))]

  const filtered = mockProducts.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase())
    const matchCat = categoryFilter === "all" || p.category === categoryFilter
    return matchSearch && matchCat
  })

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Products</h1>
          <p className="text-base text-grey mt-1">{mockProducts.length} products total</p>
        </div>
        <button className="flex items-center gap-2 bg-lime text-white px-5 py-3 rounded-xl font-semibold min-h-[48px] hover:bg-lime/90 transition-colors">
          <Plus size={20} /> Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-grey-light p-4 mb-5 flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-grey" />
          <input
            type="text"
            placeholder="Search by name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime min-h-[48px]"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime min-h-[48px]"
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c === "all" ? "All Categories" : c.replace(/-/g, " ")}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-grey-light overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-warm border-b border-grey-light">
              <tr>
                <th className="text-left px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider">Product</th>
                <th className="text-left px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider hidden sm:table-cell">SKU</th>
                <th className="text-left px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider hidden md:table-cell">Category</th>
                <th className="text-right px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider">Price</th>
                <th className="text-center px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider hidden lg:table-cell">Stock</th>
                <th className="text-center px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider">Status</th>
                <th className="text-right px-5 py-3 text-sm font-semibold text-grey uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-grey-light">
              {filtered.map((product) => (
                <tr key={product.id} className="hover:bg-warm/50 transition-colors">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-warm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Package size={20} className="text-grey" />
                      </div>
                      <div>
                        <p className="font-semibold text-charcoal line-clamp-1">{product.name}</p>
                        <p className="text-sm text-grey sm:hidden">{product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-grey hidden sm:table-cell font-mono text-sm">{product.sku}</td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-sm bg-warm px-2 py-1 rounded-lg text-grey capitalize">
                      {product.category.replace(/-/g, " ")}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div>
                      <p className="font-semibold text-charcoal">{formatMYR(product.price)}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-grey line-through">{formatMYR(product.originalPrice)}</p>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-center hidden lg:table-cell">
                    <span className={cn(
                      "text-sm font-semibold px-2 py-1 rounded-full",
                      product.stock === "ready" ? "bg-lime/10 text-lime" :
                      product.stock === "low" ? "bg-amber/10 text-amber-dark" :
                      "bg-danger/10 text-danger"
                    )}>
                      {product.stock.replace(/-/g, " ")}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <span className="text-sm font-semibold px-2 py-1 rounded-full bg-lime/10 text-lime">
                      Active
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="p-2 rounded-lg text-grey hover:text-charcoal hover:bg-warm transition-colors"
                        title="View product"
                      >
                        <Eye size={18} />
                      </Link>
                      <button
                        className="p-2 rounded-lg text-grey hover:text-lime hover:bg-lime/10 transition-colors"
                        title="Edit product"
                        onClick={() => alert("TODO: Open product edit modal / connect to Supabase")}
                      >
                        <Edit2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <Package size={40} className="text-grey mx-auto mb-3" />
            <p className="text-base text-grey">No products match your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
