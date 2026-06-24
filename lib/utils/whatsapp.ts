// TODO: Replace with WhatsApp Business API when WA_TOKEN + WA_PHONE_NUMBER_ID env vars are set
// See: lib/api/whatsapp.ts for the integration seam

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "60123456789"

export function buildWhatsAppURL(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`
}

export function buildProductEnquiryURL(productName: string, productSku?: string): string {
  const sku = productSku ? ` (SKU: ${productSku})` : ""
  const message = `Hi Finotti! I'm interested in ${productName}${sku}. Could you please share more details?`
  return buildWhatsAppURL(message)
}

export function buildOrderEnquiryURL(orderNumber: string): string {
  const message = `Hi Finotti! I'd like to enquire about my order #${orderNumber}.`
  return buildWhatsAppURL(message)
}

export function buildGeneralEnquiryURL(): string {
  const message = `Hi Finotti! I'd like to learn more about your furniture collection.`
  return buildWhatsAppURL(message)
}
