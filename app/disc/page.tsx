"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { discQuestions, discResults, DISC_DISCLAIMER, type DiscDimension } from "@/lib/mock-data/disc-questions"
import { cn } from "@/lib/utils/cn"

export default function DiscPage() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, DiscDimension>>({})
  const [result, setResult] = useState<DiscDimension | null>(null)

  function selectAnswer(questionId: string, dimension: DiscDimension) {
    setAnswers((prev) => ({ ...prev, [questionId]: dimension }))
    if (current < discQuestions.length - 1) {
      setTimeout(() => setCurrent((c) => c + 1), 300)
    }
  }

  function calculateResult() {
    const scores: Record<DiscDimension, number> = { D: 0, I: 0, S: 0, C: 0 }
    Object.values(answers).forEach((dim) => { scores[dim]++ })
    const top = (Object.entries(scores) as [DiscDimension, number][])
      .sort((a, b) => b[1] - a[1])[0][0]
    setResult(top)
    // TODO: Save result to Supabase customer_profiles.disc_profile
  }

  const progress = ((current + 1) / discQuestions.length) * 100
  const allAnswered = Object.keys(answers).length === discQuestions.length
  const currentQ = discQuestions[current]

  if (result) {
    const r = discResults[result]
    return (
      <div className="min-h-screen bg-warm flex items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full">
          <div className="bg-white rounded-2xl border border-grey-light p-8 text-center">
            <div className="text-5xl mb-4">{r.emoji}</div>
            <div className="inline-block bg-lime/10 text-lime rounded-full px-4 py-1 text-sm font-bold mb-4">
              Your Style: {result}
            </div>
            <h1 className="text-2xl font-bold text-charcoal mb-3">{r.label}</h1>
            <p className="text-base text-grey leading-relaxed mb-5">{r.description}</p>

            <div className="bg-warm rounded-xl p-4 mb-5 text-left">
              <p className="text-sm font-semibold text-charcoal mb-1">How our team will work with you:</p>
              <p className="text-base text-grey">{r.communicationTip}</p>
            </div>

            <p className="text-xs text-grey bg-grey-light/50 rounded-lg p-3 mb-6">
              {DISC_DISCLAIMER}
            </p>

            <div className="space-y-3">
              <Link href="/products">
                <Button variant="primary" size="lg" fullWidth>Browse Furniture</Button>
              </Link>
              <Button variant="ghost" size="md" fullWidth onClick={() => { setResult(null); setAnswers({}); setCurrent(0) }}>
                Retake Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Personality Quiz" }]}
          className="mb-6"
        />
        <h1 className="text-3xl font-bold text-charcoal mb-2">Personality Quiz</h1>
        <p className="text-base text-grey mb-2">
          This quick quiz helps our team communicate with you in the most comfortable way.
        </p>
        <p className="text-sm text-amber-dark bg-amber/10 rounded-lg px-4 py-3 mb-6">
          <strong>Note:</strong> {DISC_DISCLAIMER}
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-grey mb-2">
            <span>Question {current + 1} of {discQuestions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="h-2 bg-grey-light rounded-full overflow-hidden">
            <div
              className="h-full bg-lime rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>

        {/* Question card */}
        <div className="bg-white rounded-xl border border-grey-light p-6 mb-5">
          <p className="text-lg font-semibold text-charcoal mb-5 leading-relaxed">
            {currentQ.question}
          </p>

          <div className="space-y-3">
            {currentQ.options.map((option, i) => {
              const isSelected = answers[currentQ.id] === option.dimension
              return (
                <button
                  key={i}
                  onClick={() => selectAnswer(currentQ.id, option.dimension)}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border-2 transition-all duration-150 min-h-[60px] flex items-center gap-3",
                    isSelected
                      ? "border-lime bg-lime/10 text-charcoal"
                      : "border-grey-light text-charcoal hover:border-lime hover:bg-lime/5"
                  )}
                  aria-pressed={isSelected}
                >
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center",
                    isSelected ? "border-lime bg-lime" : "border-grey-light"
                  )}>
                    {isSelected && <CheckCircle size={14} className="text-white" />}
                  </div>
                  <span className="text-base">{option.text}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            disabled={current === 0}
            className="flex items-center gap-2 text-base text-grey hover:text-charcoal transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px] px-3"
          >
            <ChevronLeft size={20} /> Previous
          </button>

          {allAnswered ? (
            <Button variant="primary" size="lg" onClick={calculateResult} rightIcon={<CheckCircle size={18} />}>
              See My Result
            </Button>
          ) : current < discQuestions.length - 1 ? (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              disabled={!answers[currentQ.id]}
              className="flex items-center gap-2 text-base text-lime font-semibold hover:text-lime-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px] px-3"
            >
              Next <ChevronRight size={20} />
            </button>
          ) : (
            <Button
              variant="primary"
              size="lg"
              disabled={!answers[currentQ.id]}
              onClick={calculateResult}
              rightIcon={<CheckCircle size={18} />}
            >
              See My Result
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
