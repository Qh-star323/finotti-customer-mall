"use client"

import { useState } from "react"
import { Save, Store, Globe, Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"

function Field({
  label,
  defaultValue,
  type = "text",
  placeholder,
  hint,
}: {
  label: string
  defaultValue?: string
  type?: string
  placeholder?: string
  hint?: string
}) {
  return (
    <div className="mb-4">
      <label className="text-base font-medium text-charcoal mb-1.5 block">{label}</label>
      {type === "textarea" ? (
        <textarea
          defaultValue={defaultValue}
          placeholder={placeholder}
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime resize-none"
        />
      ) : (
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full min-h-[48px] px-4 rounded-lg border border-grey-light text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime"
        />
      )}
      {hint && <p className="text-sm text-grey mt-1">{hint}</p>}
    </div>
  )
}

function Panel({ title, icon: Icon, children }: {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  children: React.ReactNode
}) {
  return (
    <div className="bg-white rounded-xl border border-grey-light p-6 mb-5">
      <h2 className="text-lg font-bold text-charcoal flex items-center gap-2 mb-5">
        <Icon size={20} className="text-lime" /> {title}
      </h2>
      {children}
    </div>
  )
}

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)

  function handleSave() {
    // TODO: Persist to Supabase company_settings table; flush Next.js ISR cache
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Settings & SEO</h1>
          <p className="text-base text-grey mt-1">Company information, contact details, and SEO metadata.</p>
        </div>
        <Button variant="primary" size="lg" leftIcon={<Save size={18} />} onClick={handleSave}>
          {saved ? "Saved!" : "Save All"}
        </Button>
      </div>

      {saved && (
        <div className="bg-lime/10 border border-lime rounded-xl p-4 mb-5 text-lime font-semibold">
          Settings saved. (Mock — connect Supabase to persist across sessions.)
        </div>
      )}

      {/* Company Info */}
      <Panel title="Company Information" icon={Store}>
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Company Name" defaultValue="Finotti Furniture Mall" />
          <Field label="Registration No." defaultValue="123456-A" placeholder="SSM registration number" />
          <Field label="Established Year" defaultValue="1974" type="number" />
          <Field label="GST/SST Number" placeholder="If applicable" />
        </div>
        <Field
          label="Store Address"
          type="textarea"
          defaultValue="No. 1, Jalan Perindustrian Maju 5, Kawasan Perindustrian Maju, 40150 Shah Alam, Selangor"
        />
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Operating Hours (Weekday)" defaultValue="Mon – Fri: 9:00 AM – 7:00 PM" />
          <Field label="Operating Hours (Weekend)" defaultValue="Sat – Sun: 10:00 AM – 6:00 PM" />
        </div>
      </Panel>

      {/* Contact */}
      <Panel title="Contact Details" icon={Phone}>
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Main Phone" defaultValue="+60 3-5555 1234" type="tel" />
          <Field label="WhatsApp Number" defaultValue="60123456789" hint="Without + or spaces. Used for wa.me links." />
          <Field label="Email" defaultValue="hello@finotti.com.my" type="email" />
          <Field label="After-Sales Email" defaultValue="service@finotti.com.my" type="email" />
        </div>
        <Field label="Google Maps Embed URL" placeholder="https://www.google.com/maps/embed?..." hint="From Google Maps → Share → Embed a map → copy the src URL." />
      </Panel>

      {/* SEO */}
      <Panel title="SEO & Social" icon={Globe}>
        <Field
          label="Meta Title"
          defaultValue="Finotti Furniture Mall — Quality Furniture in Malaysia"
          hint="Recommended: 50–60 characters."
        />
        <Field
          label="Meta Description"
          type="textarea"
          defaultValue="Finotti Furniture Mall offers premium furniture for Malaysian homes — sofas, beds, dining sets, and more. Free delivery for orders above RM500."
          hint="Recommended: 150–160 characters."
        />
        <Field label="OG Image URL" placeholder="/images/og-image.jpg" hint="1200×630px recommended for social sharing." defaultValue="/images/og-image.jpg" />
        <div className="grid sm:grid-cols-2 gap-x-5">
          <Field label="Facebook Page URL" placeholder="https://facebook.com/finottifurniture" />
          <Field label="Instagram URL" placeholder="https://instagram.com/finottifurniture" />
        </div>
        <div className="p-4 bg-amber/10 rounded-xl text-sm text-charcoal mt-2">
          <strong>TODO:</strong> After connecting to Supabase, create a <code>company_settings</code> table and read from it in <code>app/layout.tsx</code> to populate <code>&lt;title&gt;</code>, <code>&lt;meta name="description"&gt;</code>, and <code>&lt;meta property="og:*"&gt;</code> tags. Use <code>generateMetadata()</code> in each route for per-page overrides.
        </div>
      </Panel>
    </div>
  )
}
