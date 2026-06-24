// =============================================================
// INTEGRATION SEAM — Google Maps
// Status: STUB (using static map image)
// To activate:
//   1. Set NEXT_PUBLIC_GMAPS_API_KEY in .env.local
//   2. npm install @googlemaps/js-api-loader
//   3. Replace StoreLocator static image with:
//      import { Loader } from '@googlemaps/js-api-loader'
//      const loader = new Loader({ apiKey: process.env.NEXT_PUBLIC_GMAPS_API_KEY! })
//   4. Or use Google Maps Embed API for simple iframe
// =============================================================

export const STORE_COORDINATES = {
  lat: 3.0738,
  lng: 101.5183,
  address: "No. 1, Jalan Finotti, Seksyen 13, 40100 Shah Alam, Selangor",
}

export const mapsApi = null
