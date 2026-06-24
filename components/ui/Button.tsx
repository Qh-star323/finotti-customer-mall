import { cn } from "@/lib/utils/cn"
import type { ButtonHTMLAttributes, ReactNode } from "react"

type Variant = "primary" | "secondary" | "ghost" | "danger" | "whatsapp" | "outline"
type Size = "sm" | "md" | "lg" | "xl"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-lime text-white hover:bg-lime-dark active:bg-lime-dark focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2",
  secondary:
    "bg-charcoal text-white hover:bg-grey-dark active:bg-grey-dark focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
  outline:
    "border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white active:bg-charcoal active:text-white focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
  ghost:
    "bg-transparent text-charcoal hover:bg-warm-dark active:bg-warm-dark focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2",
  danger:
    "bg-danger text-white hover:bg-danger-dark active:bg-danger-dark focus-visible:ring-2 focus-visible:ring-danger focus-visible:ring-offset-2",
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] active:bg-[#1ebe57] focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
}

const sizeClasses: Record<Size, string> = {
  sm: "min-h-[40px] px-4 text-sm gap-1.5",
  md: "min-h-[48px] px-6 text-base gap-2",
  lg: "min-h-[56px] px-8 text-lg gap-2",
  xl: "min-h-[64px] px-10 text-xl gap-3",
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-lg transition-colors duration-150 cursor-pointer select-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}
