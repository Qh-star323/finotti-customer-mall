"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { Checkbox } from "@/components/ui/Checkbox"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { StarRating } from "@/components/ui/StarRating"
import { FEEDBACK_CATEGORY_LABELS } from "@/lib/types"
import { feedbackSchema, type FeedbackData } from "@/lib/utils/validators"

const categoryOptions = Object.entries(FEEDBACK_CATEGORY_LABELS).map(([value, label]) => ({ value, label }))

const CASE_NUMBER = `FB-2026-${String(Math.floor(Math.random() * 90000) + 10000)}`

function FeedbackForm() {
  const searchParams = useSearchParams()
  const prefillOrder = searchParams.get("order") || ""

  const [submitted, setSubmitted] = useState(false)
  const [attachments, setAttachments] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      orderNumber: prefillOrder,
      requiresCallback: false,
      rating: 0,
    },
  })

  const description = watch("description") || ""

  function onSubmit(_data: FeedbackData) {
    // TODO: Submit to Supabase feedback table; send notification email via Resend
    setSubmitted(true)
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || [])
    const valid = files.filter((f) =>
      f.type.startsWith("image/") || f.type === "video/mp4"
    ).slice(0, 3 - attachments.length)
    setAttachments((prev) => [...prev, ...valid].slice(0, 3))
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-grey-light p-10">
          <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-success" />
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h1>
          <p className="text-base text-grey mb-4">We have received your feedback. Our team will review it and get back to you if needed.</p>
          <div className="bg-warm rounded-xl p-4 mb-6">
            <p className="text-sm text-grey mb-1">Your Case Number</p>
            <p className="text-xl font-bold text-charcoal">{CASE_NUMBER}</p>
          </div>
          <Button variant="primary" size="lg" fullWidth onClick={() => window.history.back()}>
            Back
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-2xl mx-auto px-4 lg:px-6 py-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Feedback & After-Sales" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-2">Feedback & After-Sales</h1>
        <p className="text-base text-grey mb-8">
          Share your experience, report an issue or submit a warranty claim. We take every piece of feedback seriously.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-grey-light p-6 space-y-5">
          <Input
            label="Your Name"
            required
            error={errors.customerName?.message}
            {...register("customerName")}
          />
          <Input
            label="Phone Number"
            type="tel"
            required
            error={errors.customerPhone?.message}
            placeholder="012-345 6789"
            {...register("customerPhone")}
          />
          <Input
            label="Order Number (Optional)"
            placeholder="e.g. FNT-2026-00127"
            {...register("orderNumber")}
          />

          <Select
            label="Category"
            required
            error={errors.category?.message}
            options={categoryOptions}
            placeholder="Select a category"
            {...register("category")}
          />

          {/* Rating */}
          <div>
            <label className="text-base font-medium text-charcoal mb-2 block">
              Your Rating <span className="text-danger">*</span>
            </label>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <StarRating
                  value={field.value}
                  interactive
                  size="lg"
                  onChange={field.onChange}
                />
              )}
            />
            {errors.rating && <p role="alert" className="text-sm text-danger mt-1">{errors.rating.message}</p>}
          </div>

          <Textarea
            label="Description"
            required
            error={errors.description?.message}
            hint="Minimum 20 characters. Be as specific as possible so we can help you faster."
            maxLength={2000}
            showCount
            value={description}
            {...register("description")}
          />

          {/* File upload */}
          <div>
            <p className="text-base font-medium text-charcoal mb-2">Photos or Videos (Optional)</p>
            <p className="text-sm text-grey mb-3">Upload up to 3 images or videos (JPG, PNG, MP4). Max 10MB each.</p>

            <div className="flex flex-wrap gap-3">
              {attachments.map((file, i) => (
                <div key={i} className="relative w-20 h-20 bg-warm-dark rounded-lg overflow-hidden border border-grey-light">
                  {file.type.startsWith("image/") && (
                    <img src={URL.createObjectURL(file)} alt={file.name} className="w-full h-full object-cover" />
                  )}
                  {file.type === "video/mp4" && (
                    <div className="absolute inset-0 flex items-center justify-center text-grey">
                      <span className="text-xs">Video</span>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setAttachments((prev) => prev.filter((_, j) => j !== i))}
                    aria-label={`Remove ${file.name}`}
                    className="absolute top-0.5 right-0.5 w-5 h-5 bg-danger text-white rounded-full flex items-center justify-center"
                  >
                    <X size={12} />
                  </button>
                </div>
              ))}

              {attachments.length < 3 && (
                <label className="w-20 h-20 bg-warm border-2 border-dashed border-grey-light rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-lime transition-colors">
                  <Upload size={20} className="text-grey mb-1" />
                  <span className="text-xs text-grey">Add</span>
                  <input
                    type="file"
                    accept="image/*,video/mp4"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </label>
              )}
            </div>
          </div>

          <Checkbox
            label="I would like a customer service team member to contact me"
            {...register("requiresCallback")}
          />

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
              Submit Feedback
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function FeedbackPage() {
  return (
    <Suspense>
      <FeedbackForm />
    </Suspense>
  )
}
