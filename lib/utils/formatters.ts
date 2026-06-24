const myrFormatter = new Intl.NumberFormat("ms-MY", {
  style: "currency",
  currency: "MYR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})

export function formatPrice(amount: number): string {
  return myrFormatter.format(amount)
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-MY", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date))
}

export function formatDateShort(date: string | Date): string {
  return new Intl.DateTimeFormat("en-MY", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date))
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trimEnd() + "..."
}

export function formatPhoneDisplay(phone: string): string {
  // Format: 012-345 6789
  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.startsWith("60")) {
    const local = cleaned.slice(2)
    if (local.startsWith("1")) {
      return `0${local.slice(0, 2)}-${local.slice(2, 5)} ${local.slice(5)}`
    }
    return `0${local.slice(0, 1)}-${local.slice(1, 4)} ${local.slice(4)}`
  }
  return phone
}

export function calcDiscountPct(original: number, sale: number): number {
  return Math.round(((original - sale) / original) * 100)
}
