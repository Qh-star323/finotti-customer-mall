import { StarRating } from "@/components/ui/StarRating"
import { reviews } from "@/lib/mock-data/reviews"

export function TestimonialList() {
  const featured = reviews.slice(0, 3)

  return (
    <section className="py-14 bg-charcoal" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-10">
          <h2 id="testimonials-heading" className="text-3xl font-bold text-white mb-3">What Our Customers Say</h2>
          <p className="text-base text-warm/70 max-w-lg mx-auto">Real stories from real Malaysian families who found their perfect furniture at Finotti.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review) => (
            <div
              key={review.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6"
            >
              <StarRating value={review.rating} size="sm" className="mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">{review.title}</h3>
              <p className="text-base text-warm/70 leading-relaxed mb-4">{review.comment}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">{review.avatarInitials}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{review.customerName}</p>
                  <p className="text-xs text-warm/60">{review.location}</p>
                </div>
                {review.verified && (
                  <span className="ml-auto text-xs text-lime font-medium bg-lime/20 rounded-full px-2 py-0.5">✓ Verified</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
