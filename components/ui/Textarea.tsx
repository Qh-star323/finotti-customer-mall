import { cn } from "@/lib/utils/cn"
import type { TextareaHTMLAttributes } from "react"
import { forwardRef } from "react"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
  required?: boolean
  showCount?: boolean
  maxLength?: number
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hint, required, showCount, maxLength, className, id, value, ...props },
  ref
) {
  const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined)
  const currentLength = typeof value === "string" ? value.length : 0

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-base font-medium text-charcoal">
          {label}
          {required && <span className="text-danger ml-1" aria-label="required">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        value={value}
        maxLength={maxLength}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={cn(
          "w-full rounded-lg border text-base text-charcoal bg-white",
          "px-4 py-3",
          "placeholder:text-grey",
          "transition-colors duration-150 resize-y",
          "focus:outline-none focus:ring-2 focus:ring-lime focus:border-lime",
          error
            ? "border-danger focus:ring-danger focus:border-danger"
            : "border-grey-light hover:border-grey",
          "min-h-[120px]",
          className
        )}
        {...props}
      />
      <div className="flex justify-between items-start">
        <div>
          {error && (
            <p id={`${textareaId}-error`} role="alert" className="text-sm text-danger flex items-center gap-1">
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}
          {hint && !error && <p className="text-sm text-grey">{hint}</p>}
        </div>
        {showCount && maxLength && (
          <span className={cn("text-sm ml-auto", currentLength >= maxLength ? "text-danger" : "text-grey")}>
            {currentLength}/{maxLength}
          </span>
        )}
      </div>
    </div>
  )
})
