import Link from "next/link"
import { MapPin, Phone, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/Button"

// TODO: Replace static map image with Google Maps embed when NEXT_PUBLIC_GMAPS_API_KEY is set
// See: lib/api/maps.ts for integration seam

export function StoreLocator() {
  const mapsUrl = "https://maps.google.com/?q=Shah+Alam+Selangor+Malaysia"

  return (
    <section className="py-14 bg-warm" aria-labelledby="store-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 id="store-heading" className="text-3xl font-bold text-charcoal mb-3">Visit Our Showroom</h2>
          <p className="text-base text-grey max-w-lg mx-auto">Experience our furniture in person. Our consultants are ready to help you find the perfect pieces for your home.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Static map placeholder */}
          <div className="aspect-video bg-grey-light rounded-xl overflow-hidden relative flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="text-grey mx-auto mb-3" />
              <p className="text-base text-grey font-medium">Finotti Furniture Mall</p>
              <p className="text-sm text-grey">Shah Alam, Selangor</p>
            </div>
            {/* TODO: Replace with <iframe src="https://maps.google.com/maps?q=...&output=embed" /> */}
          </div>

          {/* Store info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Finotti Furniture Mall</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-lime flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-charcoal font-medium">Address</p>
                    <p className="text-base text-grey">No. 1, Jalan Finotti, Seksyen 13,<br />40100 Shah Alam, Selangor, Malaysia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={20} className="text-lime flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base text-charcoal font-medium">Operating Hours</p>
                    <table className="text-base text-grey mt-1" aria-label="Operating hours">
                      <tbody>
                        <tr>
                          <td className="pr-4">Monday – Saturday</td>
                          <td className="font-medium text-charcoal">10:00 am – 8:00 pm</td>
                        </tr>
                        <tr>
                          <td className="pr-4">Sunday</td>
                          <td className="font-medium text-charcoal">10:00 am – 6:00 pm</td>
                        </tr>
                        <tr>
                          <td className="pr-4">Public Holidays</td>
                          <td className="font-medium text-charcoal">11:00 am – 6:00 pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-lime flex-shrink-0" />
                  <div>
                    <p className="text-base text-charcoal font-medium">Phone</p>
                    <Link href="tel:+60378890012" className="text-base text-grey hover:text-charcoal transition-colors">
                      03-7889 0012
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href={mapsUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" rightIcon={<ExternalLink size={18} />}>
                Get Directions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
