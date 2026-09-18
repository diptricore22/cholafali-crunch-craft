import { Star } from "lucide-react";
import { business } from "@/data/site";
import { cn } from "@/lib/utils";

export function RatingBadge({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-md",
        tone === "dark"
          ? "border-on-dark/15 bg-on-dark/10 text-on-dark"
          : "border-charcoal/10 bg-card text-foreground shadow-card",
        className,
      )}
      aria-label={`Rated ${business.rating.value} out of 5 from ${business.rating.count}+ Google reviews`}
    >
      <span className="flex items-center gap-1 font-heading text-base font-bold">
        {business.rating.value}
        <Star className="size-4 fill-saffron text-saffron" aria-hidden="true" />
      </span>
      <span className="h-4 w-px bg-current opacity-25" aria-hidden="true" />
      <span className="text-xs font-medium opacity-90">
        {business.rating.count}+ Google Reviews
      </span>
    </div>
  );
}
