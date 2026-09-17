import { siteConfig } from "../config/site";
import { placeholderReviews, reviews, type Review } from "../data/reviews";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

// Sample reviews appear only during local development, clearly labelled.
const showSamples = import.meta.env.DEV && reviews.length === 0;

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brass" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" size={16} fill={i < rating ? "currentColor" : "none"} />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="relative flex h-full flex-col rounded-[2px] bg-white/70 p-8 ring-1 ring-pine/10">
      {r.isPlaceholder && (
        <span className="absolute right-4 top-4 rounded-full bg-earth px-2.5 py-0.5 text-[0.7rem] font-semibold text-ivory">Sample — dev only</span>
      )}
      <Stars rating={r.rating} />
      <blockquote className="mt-5 flex-1 font-display text-[1.45rem] leading-snug text-pine-deep">“{r.text}”</blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-semibold">{r.name}</span>
        <span className="text-stone">, {r.location}</span>
        {r.date && <span className="block text-stone">Stayed {r.date}</span>}
      </figcaption>
    </figure>
  );
}

export function Reviews() {
  const list = reviews.length ? reviews : showSamples ? placeholderReviews : [];
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="py-24 sm:py-32">
      <div className="container-x">
        <SectionHeading id="reviews-title" eyebrow="Guest reviews" title="Loved By Our Guests" align="center" />

        {list.length > 0 ? (
          <>
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {list.map((r, i) => (
                <ReviewCard key={`${r.name}-${i}`} r={r} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href={siteConfig.map.reviewsUrl} target="_blank" rel="noopener" className="btn-outline group">
                See More Reviews <Icon name="arrowUpRight" size={18} className="arrow" />
              </a>
            </div>
          </>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl rounded-[2px] border border-pine/15 px-6 py-12 text-center sm:px-12">
            <div className="flex justify-center gap-1 text-brass" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" size={20} fill="currentColor" />
              ))}
            </div>
            <p className="mt-6 font-display text-[1.7rem] leading-snug text-pine-deep">
              Stayed with us? We would love to hear about it.
            </p>
            <p className="mt-3 text-charcoal/70">Guest reviews for Kailash Homestay are collected on Google Maps — read what travellers say, or add a few words about your own stay in Ransi.</p>
            <a href={siteConfig.map.reviewsUrl} target="_blank" rel="noopener" className="btn-primary group mt-8">
              Read reviews on Google <Icon name="arrowUpRight" size={18} className="arrow" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
