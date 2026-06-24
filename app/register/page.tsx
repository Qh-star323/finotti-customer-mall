"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, User, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Checkbox } from "@/components/ui/Checkbox"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { registrationQuickSchema, type RegistrationQuickData } from "@/lib/utils/validators"
import { MALAYSIAN_STATES } from "@/lib/types"
import { cn } from "@/lib/utils/cn"

type FormStep = "quick" | "profile" | "done"

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "bm", label: "Bahasa Malaysia" },
  { value: "zh", label: "中文 (Chinese)" },
]

const STYLE_OPTIONS = [
  "Modern", "Scandinavian", "Minimalist", "Industrial", "Classic", "Japandi", "Luxury",
]

const BUDGET_OPTIONS = [
  { value: "under-1000", label: "Under RM1,000" },
  { value: "1000-3000", label: "RM1,000 – RM3,000" },
  { value: "3000-5000", label: "RM3,000 – RM5,000" },
  { value: "5000-10000", label: "RM5,000 – RM10,000" },
  { value: "above-10000", label: "Above RM10,000" },
]

const TIMELINE_OPTIONS = [
  { value: "immediately", label: "Immediately" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "6-months", label: "Within 6 months" },
  { value: "just-browsing", label: "Just browsing" },
]

const PURPOSE_OPTIONS = [
  { value: "new-home", label: "New Home" },
  { value: "renovation", label: "Home Renovation" },
  { value: "replacement", label: "Replacing Old Furniture" },
  { value: "gift", label: "Gift" },
  { value: "other", label: "Other" },
]

const STATE_OPTIONS = MALAYSIAN_STATES.map((s) => ({ value: s, label: s }))

export default function RegisterPage() {
  const [step, setStep] = useState<FormStep>("quick")
  const [quickData, setQuickData] = useState<RegistrationQuickData | null>(null)
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])
  const [marketingConsent, setMarketingConsent] = useState(false) // MUST default false

  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationQuickData>({
    resolver: zodResolver(registrationQuickSchema),
    defaultValues: { preferredLanguage: "en" },
  })

  function onQuickSubmit(data: RegistrationQuickData) {
    // TODO: Call Supabase Auth signUp(data.email, data.password)
    setQuickData(data)
    setStep("profile")
  }

  function onProfileSubmit(e: React.FormEvent) {
    e.preventDefault()
    // TODO: Save extended profile to Supabase customer_profiles table
    setStep("done")
  }

  if (step === "done") {
    return (
      <div className="min-h-screen bg-warm flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-grey-light p-10">
          <div className="w-20 h-20 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-lime" />
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-2">Welcome to Finotti!</h1>
          <p className="text-base text-grey mb-6">
            Your account has been created. Start exploring our furniture collection and enjoy exclusive member benefits.
          </p>
          <div className="space-y-3">
            <Link href="/disc">
              <Button variant="primary" size="lg" fullWidth leftIcon={<Star size={18} />}>
                Take Personality Quiz (Optional)
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="ghost" size="md" fullWidth>
                Browse Furniture Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-lg mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Register" }]}
          className="mb-6"
        />

        {/* Step indicator */}
        <div className="flex items-center gap-3 mb-8">
          {["quick", "profile"].map((s, i) => (
            <div key={s} className="flex items-center gap-3">
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center border-2 text-sm font-bold transition-colors",
                step === s || (s === "quick" && step === "profile")
                  ? "border-lime bg-lime text-white"
                  : "border-grey-light text-grey"
              )}>
                {i + 1}
              </div>
              <span className={cn("text-sm font-medium", step === s ? "text-charcoal" : "text-grey")}>
                {s === "quick" ? "Account Info" : "Your Preferences"}
              </span>
              {i < 1 && <div className="h-px w-6 bg-grey-light" />}
            </div>
          ))}
        </div>

        {/* Step 1: Quick registration */}
        {step === "quick" && (
          <div>
            <h1 className="text-3xl font-bold text-charcoal mb-2">Create Your Account</h1>
            <p className="text-base text-grey mb-6">
              Already a member? <Link href="/orders" className="text-lime font-semibold hover:underline">Sign in here</Link>
            </p>

            <form onSubmit={handleSubmit(onQuickSubmit)} className="bg-white rounded-xl border border-grey-light p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input label="First Name" required error={errors.firstName?.message} {...register("firstName")} />
                <Input label="Last Name" required error={errors.lastName?.message} {...register("lastName")} />
              </div>
              <Input label="Phone Number" type="tel" required error={errors.phone?.message} placeholder="012-345 6789" {...register("phone")} />
              <Input label="Email Address" type="email" required error={errors.email?.message} {...register("email")} />
              <Input label="Password" type="password" required error={errors.password?.message} hint="Min. 8 characters, at least 1 uppercase and 1 number" {...register("password")} />
              <Select
                label="Preferred Language"
                options={LANGUAGE_OPTIONS}
                {...register("preferredLanguage")}
              />

              <Button type="submit" variant="primary" size="lg" fullWidth leftIcon={<User size={18} />}>
                Continue
              </Button>

              <p className="text-sm text-grey text-center">
                By registering, you agree to our{" "}
                <Link href="/support" className="text-lime hover:underline">Privacy Policy</Link>
                {" "}and{" "}
                <Link href="/support" className="text-lime hover:underline">Terms of Use</Link>.
              </p>
            </form>
          </div>
        )}

        {/* Step 2: Profile completion */}
        {step === "profile" && (
          <div>
            <h1 className="text-3xl font-bold text-charcoal mb-2">Complete Your Profile</h1>
            <p className="text-base text-grey mb-6">
              Help us personalise your experience. You can skip this and complete it later.
            </p>

            <form onSubmit={onProfileSubmit} className="bg-white rounded-xl border border-grey-light p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-base font-medium text-charcoal mb-1.5 block">Birthday</label>
                  <input type="date" className="w-full min-h-[48px] rounded-lg border border-grey-light px-4 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime" />
                </div>
                <Select
                  label="Gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "prefer-not-to-say", label: "Prefer not to say" },
                  ]}
                />
              </div>

              <Input label="Address" placeholder="Street address" />
              <div className="grid grid-cols-2 gap-4">
                <Input label="City" />
                <Input label="Postcode" maxLength={5} />
              </div>
              <Select label="State" options={STATE_OPTIONS} placeholder="Select state" />

              <Select
                label="Purpose of Purchase"
                options={PURPOSE_OPTIONS}
                placeholder="What are you shopping for?"
              />

              <div>
                <label className="text-base font-medium text-charcoal mb-2 block">Preferred Furniture Style</label>
                <div className="flex flex-wrap gap-2">
                  {STYLE_OPTIONS.map((style) => (
                    <button
                      key={style}
                      type="button"
                      onClick={() => setSelectedStyles((prev) =>
                        prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
                      )}
                      className={cn(
                        "min-h-[40px] px-4 rounded-full text-sm border-2 transition-colors",
                        selectedStyles.includes(style)
                          ? "border-lime bg-lime/10 text-lime font-semibold"
                          : "border-grey-light text-grey hover:border-lime hover:text-lime"
                      )}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <Select label="Budget Range" options={BUDGET_OPTIONS} placeholder="Select your budget" />
              <Select label="Purchase Timeline" options={TIMELINE_OPTIONS} placeholder="When are you planning to buy?" />

              {/* Marketing consent — MUST NOT be pre-checked (PDPA) */}
              <div className="pt-2 border-t border-grey-light">
                <Checkbox
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  label="I agree to receive marketing communications from Finotti Furniture Mall (promotions, new arrivals, tips)"
                  description="You can unsubscribe at any time. We will never share your data with third parties."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="ghost" size="lg" onClick={() => setStep("quick")}>Back</Button>
                <Button type="submit" variant="primary" size="lg" fullWidth>Complete Registration</Button>
              </div>

              <button type="button" onClick={() => setStep("done")} className="w-full text-sm text-grey hover:text-charcoal transition-colors text-center">
                Skip for now — I'll complete this later
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
