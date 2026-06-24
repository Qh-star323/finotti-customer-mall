import { Package, MapPin, Wrench, CheckCircle } from "lucide-react"

const steps = [
  { icon: Package, title: "Place Your Order", description: "Order online, via WhatsApp or visit our showroom in Shah Alam." },
  { icon: MapPin, title: "Schedule Delivery", description: "Choose your preferred delivery date and time slot (Monday to Saturday)." },
  { icon: Wrench, title: "Professional Installation", description: "Our trained team assembles and installs your furniture exactly where you want it." },
  { icon: CheckCircle, title: "Enjoy & We Follow Up", description: "We check in after delivery to ensure you're 100% satisfied with your furniture." },
]

const coverage = [
  "Selangor", "Kuala Lumpur", "Putrajaya", "Negeri Sembilan",
  "Melaka", "Johor Bahru", "Penang", "Perak",
]

export function DeliveryInfo() {
  return (
    <section className="py-14 bg-white" aria-labelledby="delivery-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 id="delivery-heading" className="text-3xl font-bold text-charcoal mb-3">Delivery & Installation</h2>
          <p className="text-base text-grey max-w-lg mx-auto">Professional delivery and installation service — we bring your furniture home and set it up perfectly.</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-lime/10 rounded-full flex items-center justify-center">
                  <Icon size={28} className="text-lime" />
                </div>
                <div className="absolute -top-1 -right-1 w-7 h-7 bg-charcoal text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-base font-semibold text-charcoal mb-2">{title}</h3>
              <p className="text-sm text-grey leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* Delivery coverage */}
        <div className="bg-warm rounded-xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="lg:w-1/3">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Delivery Coverage</h3>
              <p className="text-base text-grey">We deliver across Peninsular Malaysia. Contact us for East Malaysia delivery enquiries.</p>
              <p className="mt-3 text-base font-medium text-lime">Free delivery on orders above RM500</p>
              <p className="text-sm text-grey">Standard delivery fee: RM80 (Klang Valley)</p>
            </div>
            <div className="lg:w-2/3">
              <div className="flex flex-wrap gap-3">
                {coverage.map((area) => (
                  <span key={area} className="inline-flex items-center gap-1.5 bg-white border border-grey-light rounded-full px-4 py-1.5 text-sm text-charcoal">
                    <span className="w-2 h-2 bg-lime rounded-full" aria-hidden="true" />
                    {area}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 bg-white border border-grey-light rounded-full px-4 py-1.5 text-sm text-grey">
                  + More areas
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
