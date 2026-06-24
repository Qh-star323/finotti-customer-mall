"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MapPin, Clock, ChevronDown, ChevronUp, CheckCircle, Upload } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Textarea } from "@/components/ui/Textarea"
import { Checkbox } from "@/components/ui/Checkbox"
import { Accordion } from "@/components/ui/Accordion"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { jobOpenings, type JobOpening } from "@/lib/mock-data/jobs"
import { jobApplicationSchema, type JobApplicationData } from "@/lib/utils/validators"
import { cn } from "@/lib/utils/cn"

const EXPERIENCE_OPTIONS = [
  { value: "fresh", label: "Fresh Graduate / No Experience" },
  { value: "1-2", label: "1–2 years" },
  { value: "3-5", label: "3–5 years" },
  { value: "5-plus", label: "5+ years" },
]

function JobCard({ job, onApply }: { job: JobOpening; onApply: (jobId: string) => void }) {
  const [expanded, setExpanded] = useState(false)

  const faqItems = [
    {
      id: "resp",
      title: "Responsibilities",
      content: (
        <ul className="space-y-1.5">
          {job.responsibilities.map((r) => <li key={r} className="text-base text-grey flex items-start gap-2"><span className="text-lime mt-1">•</span>{r}</li>)}
        </ul>
      ),
    },
    {
      id: "req",
      title: "Requirements",
      content: (
        <ul className="space-y-1.5">
          {job.requirements.map((r) => <li key={r} className="text-base text-grey flex items-start gap-2"><span className="text-lime mt-1">•</span>{r}</li>)}
        </ul>
      ),
    },
    {
      id: "ben",
      title: "Benefits",
      content: (
        <ul className="space-y-1.5">
          {job.benefits.map((b) => <li key={b} className="text-base text-grey flex items-start gap-2"><CheckCircle size={16} className="text-success flex-shrink-0 mt-0.5" />{b}</li>)}
        </ul>
      ),
    },
  ]

  return (
    <div className="bg-white rounded-xl border border-grey-light overflow-hidden">
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
          <div>
            <span className="text-xs font-semibold text-grey uppercase tracking-wider">{job.department}</span>
            <h3 className="text-xl font-bold text-charcoal mt-1">{job.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className={cn(
              "text-xs font-semibold px-3 py-1 rounded-full",
              job.type === "full-time" ? "bg-lime/10 text-lime" : "bg-amber/10 text-amber-dark"
            )}>
              {job.type === "full-time" ? "Full-Time" : "Part-Time"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-grey mb-4">
          <span className="flex items-center gap-1.5"><MapPin size={16} className="text-lime" />{job.location}</span>
          <span className="flex items-center gap-1.5"><Clock size={16} className="text-lime" />{job.experience} experience</span>
        </div>

        <p className="text-base text-grey leading-relaxed mb-4">{job.description}</p>

        {job.salaryRange && (
          <p className="text-base font-semibold text-charcoal mb-4">
            Salary: <span className="text-lime">{job.salaryRange}</span>
          </p>
        )}

        <div className="flex gap-3">
          <Button variant="primary" size="md" onClick={() => onApply(job.id)}>Apply Now</Button>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-base text-grey hover:text-charcoal transition-colors min-h-[48px] px-3"
            aria-expanded={expanded}
          >
            {expanded ? <><ChevronUp size={18} /> Less</> : <><ChevronDown size={18} /> More Details</>}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-grey-light">
          <Accordion items={faqItems} allowMultiple />
        </div>
      )}
    </div>
  )
}

export default function CareersPage() {
  const [applyingFor, setApplyingFor] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<JobApplicationData>({
    resolver: zodResolver(jobApplicationSchema),
    defaultValues: { hasLicense: false, pdpaConsent: false },
  })

  const applyingJob = jobOpenings.find((j) => j.id === applyingFor)

  const jobOptions = jobOpenings.map((j) => ({ value: j.id, label: j.title }))

  function onSubmit(_data: JobApplicationData) {
    // TODO: Store application in Supabase job_applications table; send confirmation via Resend
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-warm flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center bg-white rounded-2xl border border-grey-light p-10">
          <div className="w-20 h-20 bg-lime/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-lime" />
          </div>
          <h1 className="text-2xl font-bold text-charcoal mb-2">Application Submitted!</h1>
          <p className="text-base text-grey mb-6">
            Thank you for your interest in joining Finotti. Our HR team will review your application and contact you within 5–7 working days.
          </p>
          <Button variant="primary" size="lg" fullWidth onClick={() => { setSubmitted(false); setApplyingFor(null) }}>
            Back to Careers
          </Button>
        </div>
      </div>
    )
  }

  if (applyingFor !== null) {
    return (
      <div className="min-h-screen bg-warm">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Careers", href: "/careers" }, { label: "Apply" }]}
            className="mb-6"
          />
          <h1 className="text-3xl font-bold text-charcoal mb-2">Job Application</h1>
          {applyingJob && <p className="text-base text-grey mb-6">Applying for: <strong className="text-charcoal">{applyingJob.title}</strong></p>}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl border border-grey-light p-6 space-y-4">
            <Select
              label="Position Applied For"
              required
              error={errors.position?.message}
              options={jobOptions}
              placeholder="Select position"
              defaultValue={applyingFor}
              {...register("position")}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input label="First Name" required error={errors.firstName?.message} {...register("firstName")} />
              <Input label="Last Name" required error={errors.lastName?.message} {...register("lastName")} />
            </div>
            <Input label="Phone Number" type="tel" required error={errors.phone?.message} placeholder="012-345 6789" {...register("phone")} />
            <Input label="Email Address" type="email" required error={errors.email?.message} {...register("email")} />
            <Input label="Location / Area" required error={errors.location?.message} placeholder="e.g. Petaling Jaya, Selangor" {...register("location")} />
            <Select
              label="Years of Experience"
              required
              error={errors.yearsOfExperience?.message}
              options={EXPERIENCE_OPTIONS}
              placeholder="Select experience level"
              {...register("yearsOfExperience")}
            />
            <Checkbox label="I hold a valid driving licence (D or E)" {...register("hasLicense")} />
            <div>
              <label className="text-base font-medium text-charcoal mb-1.5 block">
                Available to Start <span className="text-danger">*</span>
              </label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                className="w-full min-h-[48px] rounded-lg border border-grey-light px-4 text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-lime"
                {...register("availableFrom")}
              />
              {errors.availableFrom && <p className="text-sm text-danger mt-1">{errors.availableFrom.message}</p>}
            </div>
            <Input
              label="Expected Monthly Salary (MYR)"
              type="number"
              required
              error={errors.expectedSalary?.message}
              placeholder="e.g. 3000"
              {...register("expectedSalary", { valueAsNumber: true })}
            />

            {/* Resume upload */}
            <div>
              <label className="text-base font-medium text-charcoal mb-1.5 block">Resume / CV <span className="text-danger">*</span></label>
              <label className={cn(
                "flex items-center gap-3 p-4 rounded-xl border-2 border-dashed cursor-pointer transition-colors",
                resumeFile ? "border-lime bg-lime/5" : "border-grey-light hover:border-lime"
              )}>
                <Upload size={22} className="text-grey flex-shrink-0" />
                <div>
                  <p className="text-base text-charcoal font-medium">
                    {resumeFile ? resumeFile.name : "Upload your resume"}
                  </p>
                  <p className="text-sm text-grey">PDF, DOC or DOCX — max 5MB</p>
                </div>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                />
              </label>
            </div>

            <Textarea
              label="Cover Letter (Optional)"
              placeholder="Tell us why you want to join Finotti and what makes you a great fit..."
              rows={4}
              {...register("coverLetter")}
            />

            {/* PDPA consent — must not be pre-checked */}
            <div className="pt-2 border-t border-grey-light">
              <Checkbox
                label="I agree that Finotti Furniture Mall may collect, use and retain my personal information for recruitment purposes in accordance with the Personal Data Protection Act (PDPA) 2010."
                error={errors.pdpaConsent?.message}
                {...register("pdpaConsent")}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="ghost" size="lg" onClick={() => setApplyingFor(null)}>Back</Button>
              <Button type="submit" variant="primary" size="lg" fullWidth loading={isSubmitting}>
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Careers" }]}
          className="mb-6"
        />

        {/* Hero */}
        <div className="bg-charcoal rounded-2xl p-8 lg:p-12 mb-10 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3">Join the Finotti Family</h1>
          <p className="text-lg text-warm/80 max-w-lg mx-auto mb-6">
            Be part of a team that's passionate about helping Malaysian families create beautiful homes. We value people who care.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-warm/70 text-sm">
            <span>50+ Team Members</span>
            <span>|</span>
            <span>Shah Alam, Selangor</span>
            <span>|</span>
            <span>Est. 1974</span>
          </div>
        </div>

        {/* Job listings */}
        <h2 className="text-2xl font-bold text-charcoal mb-5">Current Openings ({jobOpenings.length})</h2>
        <div className="space-y-5">
          {jobOpenings.map((job) => (
            <JobCard key={job.id} job={job} onApply={setApplyingFor} />
          ))}
        </div>

        {/* No suitable role */}
        <div className="mt-8 bg-white rounded-xl border border-grey-light p-6 text-center">
          <p className="text-base text-grey mb-3">Don't see a suitable role? We're always looking for talented people.</p>
          <Button variant="outline" size="lg" onClick={() => setApplyingFor("open")}>
            Send an Open Application
          </Button>
        </div>
      </div>
    </div>
  )
}
