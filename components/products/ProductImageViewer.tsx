"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import type { ProductImage } from "@/lib/types"
import { resolveProductImage } from "@/lib/utils/imageUrl"

interface ProductImageViewerProps {
  images: ProductImage[]
  productName: string
}

export function ProductImageViewer({ images, productName }: ProductImageViewerProps) {
  const [current, setCurrent] = useState(0)

  function prev() {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
  }
  function next() {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))
  }

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-warm-dark rounded-xl flex items-center justify-center">
        <p className="text-grey">No image available</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-square bg-warm-dark rounded-xl overflow-hidden">
        <Image
          src={resolveProductImage(images[current].url, productName, 600, 600)}
          alt={images[current].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        {/* Counter */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {current + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto scroll-x pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`View image ${i + 1}: ${img.alt}`}
              aria-pressed={i === current}
              className={cn(
                "relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime",
                i === current ? "border-lime" : "border-grey-light hover:border-grey"
              )}
            >
              <Image
                src={resolveProductImage(img.url, img.alt, 80, 80)}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
