"use client"

import { useState } from "react"
import { Save, Image, Tag, Star, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/Button"

type Section = "hero" | "promotions" | "featured"

function SectionPanel({
  title,
  icon: Icon,
  children,
}: {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(true)
  return (
    <div className="bg-white rounded-xl border border-grey-light overflow-hidden mb-5">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-warm/50 transition-colors"
      >
        <h2 className="text-lg font-bold text-charcoal flex items-center gap-3">
          <Icon size={22} className="text-lime" /> {title}
        </h2>
        {open ? <ChevronUp size={20} className="text-grey" /> : <ChevronDown size={20} className="text-grey" />}
      </button>
      {open && <div className="px-6 pb-6 border-t border-grey-light pt-5">{children}</div>}
    </div>
  )
}

function TextField({ label, defaultValue, placeholder }: { label: string; defaultValue?: string; placeholder?: string }) {
  return (
    <div className="mb-4">
      <label className="text-base font-medium text-charcoal mb-1.5 block">{label}</label>
      <input
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full min-h-[48px] px-4 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime"
      />
    </div>
  )
}

export default function AdminContentPage() {
  const [saved, setSaved] = useState(false)

  function handleSave() {
    // TODO: Save content updates to Supabase cms_content table
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Homepage Content</h1>
          <p className="text-base text-grey mt-1">Edit banners, promotions, and featured sections.</p>
        </div>
        <Button variant="primary" size="lg" leftIcon={<Save size={18} />} onClick={handleSave}>
          {saved ? "Saved!" : "Save Changes"}
        </Button>
      </div>

      {saved && (
        <div className="bg-lime/10 border border-lime rounded-xl p-4 flex items-center gap-3 mb-5 text-lime font-semibold">
          Changes saved successfully. (Mock — connect Supabase to persist.)
        </div>
      )}

      {/* Hero Banner */}
      <SectionPanel title="Hero Banner" icon={Image}>
        <TextField label="Headline" defaultValue="Premium Furniture for Every Malaysian Home" />
        <TextField label="Subheadline" defaultValue="Quality craftsmanship, delivered to your door with professional installation." />
        <TextField label="Primary CTA Label" defaultValue="Shop Now" />
        <TextField label="Primary CTA URL" defaultValue="/products" />
        <TextField label="Secondary CTA Label" defaultValue="Visit Our Showroom" />
        <TextField label="Secondary CTA URL" defaultValue="/support" />
        <TextField label="Hero Image URL" placeholder="https://... or /images/hero.jpg" defaultValue="/images/hero-bg.jpg" />
        <div className="mt-2 p-3 bg-amber/10 rounded-lg text-sm text-charcoal">
          TODO: Integrate with Supabase Storage for image upload. Replace static URL with signed URL from supabase.storage.from('cms').getPublicUrl().
        </div>
      </SectionPanel>

      {/* Promotions */}
      <SectionPanel title="Active Promotions" icon={Tag}>
        {[
          { label: "Promotion 1", badge: "RAYA SALE", headline: "Raya Home Refresh — Up to 40% Off" },
          { label: "Promotion 2", badge: "NEW ARRIVAL", headline: "Scandinavian Spring Collection" },
          { label: "Promotion 3", badge: "BUNDLE DEAL", headline: "Complete Bedroom Set — Save RM800" },
        ].map(({ label, badge, headline }) => (
          <div key={label} className="mb-5 pb-5 border-b border-grey-light last:border-0 last:mb-0 last:pb-0">
            <p className="text-sm font-semibold text-grey uppercase mb-2">{label}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <TextField label="Badge Text" defaultValue={badge} />
              <TextField label="Headline" defaultValue={headline} />
            </div>
            <TextField label="Link URL" defaultValue="/products" placeholder="/products?tag=raya-sale" />
          </div>
        ))}
      </SectionPanel>

      {/* Featured Products */}
      <SectionPanel title="Featured Products Section" icon={Star}>
        <div className="mb-3">
          <label className="text-base font-medium text-charcoal mb-1.5 block">Section Title</label>
          <input
            type="text"
            defaultValue="Hot Picks This Week"
            className="w-full min-h-[48px] px-4 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime"
          />
        </div>
        <p className="text-sm text-grey mb-3">Product SKUs to feature (comma-separated). Max 8.</p>
        <input
          type="text"
          defaultValue="FNT-SOF-001, FNT-MAT-001, FNT-BED-001, FNT-DIN-001, FNT-LIV-001, FNT-OFF-001"
          className="w-full min-h-[48px] px-4 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime font-mono text-sm"
        />
        <p className="text-xs text-grey mt-2">
          TODO: Replace with a product picker UI after connecting to Supabase products table.
        </p>
      </SectionPanel>
    </div>
  )
}
