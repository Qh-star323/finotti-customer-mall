// Mock product images don't exist on disk — resolve to placeholder immediately
// so we never fire a 404 request that causes a flicker.
export function resolveProductImage(url: string, label: string, w = 400, h = 300): string {
  if (!url || url.startsWith("/images/")) {
    return `/api/placeholder?w=${w}&h=${h}&label=${encodeURIComponent(label)}`
  }
  return url
}
