import { BadgeCheck, Quote, Star } from "lucide-react";

export function ReviewCard({
  quote,
  author,
  stars,
  verified,
  index,
}: {
  quote: string;
  author: string;
  stars: number;
  verified: boolean;
  index: number;
}) {
  return (
    <figure
      className="relative flex w-[82vw] max-w-[360px] shrink-0 snap-start flex-col rounded-[1.75rem] bg-card p-7 shadow-card ring-1 ring-charcoal/5 transition-transform duration-500 hover:-translate-y-1 md:w-auto md:max-w-none"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
    >
      <Quote className="absolute right-6 top-6 size-8 text-saffron/40" aria-hidden="true" />
      <div className="flex gap-0.5" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={i < stars ? "size-4 fill-saffron text-saffron" : "size-4 text-border"}
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mt-5 flex-1 font-display text-lg leading-snug italic text-foreground">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
        {verified && <BadgeCheck className="size-4 text-coriander" aria-hidden="true" />}
        <span>{author}</span>
      </figcaption>
    </figure>
  );
}
