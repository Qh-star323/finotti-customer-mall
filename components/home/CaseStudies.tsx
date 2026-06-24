const cases = [
  {
    id: "case-01",
    title: "The Lim Family Living Room",
    location: "Petaling Jaya, Selangor",
    description: "A complete living room transformation with our Nordic L-Shape Sofa, TV Console and Coffee Table — creating a cosy yet modern family space.",
    products: ["Nordic L-Shape Sofa", "TV Console 180cm", "Round Glass Coffee Table"],
    budget: "RM8,500",
    image: "/images/case-studies/living-room-lim.jpg",
    bg: "bg-blue-50",
  },
  {
    id: "case-02",
    title: "The Ahmad Family Master Bedroom",
    location: "Shah Alam, Selangor",
    description: "A serene Japandi master bedroom featuring our King Platform Bed, paired with the Harmony Pocketed Spring Mattress for perfect rest.",
    products: ["King Platform Bed Frame", "Harmony Mattress (King)", "Bedside Table Set x2"],
    budget: "RM6,200",
    image: "/images/case-studies/bedroom-ahmad.jpg",
    bg: "bg-purple-50",
  },
  {
    id: "case-03",
    title: "The Wong Family Dining Room",
    location: "Cheras, Kuala Lumpur",
    description: "A warm and elegant dining room where the whole family gathers — centred around our Solid Wood 6-Seater Dining Set.",
    products: ["6-Seater Solid Wood Dining Set"],
    budget: "RM4,999",
    image: "/images/case-studies/dining-wong.jpg",
    bg: "bg-orange-50",
  },
]

export function CaseStudies() {
  return (
    <section className="py-14 bg-white" aria-labelledby="case-studies-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 id="case-studies-heading" className="text-3xl font-bold text-charcoal mb-3">Real Homes, Real Stories</h2>
          <p className="text-base text-grey max-w-lg mx-auto">See how Malaysian families have transformed their homes with Finotti furniture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.id} className="bg-white border border-grey-light rounded-xl overflow-hidden hover:shadow-md transition-shadow">
              {/* Image placeholder */}
              <div className={`aspect-[4/3] ${c.bg} flex items-center justify-center`}>
                <div className="text-center px-6">
                  <p className="text-4xl mb-2">🏠</p>
                  <p className="text-sm font-medium text-grey">{c.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-grey mb-1 font-medium">{c.location}</p>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{c.title}</h3>
                <p className="text-sm text-grey leading-relaxed mb-4">{c.description}</p>
                <div className="mb-4">
                  <p className="text-xs font-semibold text-grey uppercase tracking-wide mb-2">Furniture Used</p>
                  <ul className="space-y-1">
                    {c.products.map((p) => (
                      <li key={p} className="text-sm text-charcoal flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-lime rounded-full flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-grey">Total Budget</span>
                  <span className="text-lg font-bold text-charcoal">{c.budget}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
