import { ExternalLink, Star } from "lucide-react";
import { business, links, reviews } from "@/data/site";
import { ButtonLink } from "./Button";
import { ReviewCard } from "./ReviewCard";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background py-24 sm:py-32" aria-labelledby="reviews-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow text-chilli">Reviews</p>
            <h2 id="reviews-title" className="mt-4 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
              Loved One Crunch{" "}
              <span className="font-display font-normal italic text-chilli">at a Time</span>
            </h2>
          </div>
          <div
            className="flex flex-wrap items-center gap-6 rounded-[2rem] bg-charcoal p-8 text-on-dark shadow-warm sm:gap-10"
            data-reveal
          >
            <p className="flex items-center gap-3 font-heading text-6xl font-bold leading-none sm:text-7xl">
              {business.rating.value}
              <Star className="size-9 fill-saffron text-saffron" aria-hidden="true" />
            </p>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-lg font-semibold">{business.rating.count}+ Google Reviews</p>
              <p className="mt-1 text-sm text-on-dark-muted">
                Customers frequently praise the crispy texture, fresh preparation, flavorful
                chutney and service.
              </p>
              <ButtonLink
                href={links.reviews}
                external
                variant="outline-light"
                size="sm"
                className="mt-4"
              >
                Read More Reviews <ExternalLink className="size-3.5" aria-hidden="true" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 md:mx-auto md:grid md:max-w-7xl md:grid-cols-2 md:overflow-visible md:px-6 lg:grid-cols-4 lg:px-8">
        {reviews.map((r, i) => (
          <ReviewCard key={i} index={i} {...r} />
        ))}
        <div className="w-px shrink-0 md:hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
