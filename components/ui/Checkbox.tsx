import { cn } from "@/lib/utils/cn"
import type { InputHTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode
  error?: string
  description?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, error, description, className, id, ...props },
  ref
) {
  const checkboxId = id || (typeof label === "string" ? label.toLowerCase().replace(/\s+/g, "-") : undefined)

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={checkboxId} className="flex items-start gap-3 cursor-pointer group">
        <input
          ref={ref}
          id={checkboxId}
          type="checkbox"
          aria-invalid={!!error}
          className={cn(
            "mt-0.5 w-5 h-5 rounded border-2 flex-shrink-0",
            "border-grey-light text-lime",
            "focus:ring-2 focus:ring-lime focus:ring-offset-1",
            "checked:bg-lime checked:border-lime",
            "cursor-pointer",
            className
          )}
          {...props}
        />
        <span className="text-base text-charcoal group-hover:text-grey-dark transition-colors">
          {label}
          {description && (
            <span className="block text-sm text-grey mt-0.5">{description}</span>
          )}
        </span>
      </label>
      {error && (
        <p role="alert" className="text-sm text-danger flex items-center gap-1 ml-8">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
})
