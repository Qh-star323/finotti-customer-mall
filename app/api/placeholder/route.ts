import { NextRequest, NextResponse } from "next/server"

// Generates an SVG placeholder image for mock product photos
// Usage: /api/placeholder?w=800&h=600&label=Sofa
export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const w = Math.min(Number(searchParams.get("w") || 800), 1200)
  const h = Math.min(Number(searchParams.get("h") || 600), 1200)
  const label = (searchParams.get("label") || "Product").slice(0, 40)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#F0EDE6"/>
  <rect x="${w * 0.3}" y="${h * 0.25}" width="${w * 0.4}" height="${h * 0.35}" rx="8" fill="#E0DDD8"/>
  <text x="${w / 2}" y="${h * 0.72}" font-family="system-ui,sans-serif" font-size="${Math.max(14, Math.min(w / 20, 28))}" fill="#9E9E9E" text-anchor="middle" dominant-baseline="middle">${label}</text>
  <text x="${w / 2}" y="${h * 0.83}" font-family="system-ui,sans-serif" font-size="${Math.max(11, Math.min(w / 30, 18))}" fill="#BDBDBD" text-anchor="middle" dominant-baseline="middle">Finotti Furniture Mall</text>
</svg>`

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  })
}
