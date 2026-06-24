"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"

const COMPARE_KEY = "finotti_compare"
const MAX_COMPARE = 3

interface CompareContextValue {
  ids: string[]
  count: number
  max: number
  isFull: boolean
  add: (productId: string) => void
  remove: (productId: string) => void
  toggle: (productId: string) => void
  isComparing: (productId: string) => boolean
}

const CompareContext = createContext<CompareContextValue | null>(null)

export function CompareProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(COMPARE_KEY)
      setIds(raw ? JSON.parse(raw) : [])
    } catch { setIds([]) }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (!isLoaded) return
    try { localStorage.setItem(COMPARE_KEY, JSON.stringify(ids)) } catch {}
  }, [ids, isLoaded])

  const add = useCallback((id: string) => {
    setIds((prev) => prev.includes(id) || prev.length >= MAX_COMPARE ? prev : [...prev, id])
  }, [])

  const remove = useCallback((id: string) => {
    setIds((prev) => prev.filter((x) => x !== id))
  }, [])

  const toggle = useCallback((id: string) => {
    setIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= MAX_COMPARE) return prev
      return [...prev, id]
    })
  }, [])

  const isComparing = useCallback((id: string) => ids.includes(id), [ids])

  return (
    <CompareContext.Provider value={{ ids, count: ids.length, max: MAX_COMPARE, isFull: ids.length >= MAX_COMPARE, add, remove, toggle, isComparing }}>
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  const ctx = useContext(CompareContext)
  if (!ctx) throw new Error("useCompare must be inside CompareProvider")
  return ctx
}
