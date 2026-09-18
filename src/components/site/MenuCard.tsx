import { ArrowUpRight } from "lucide-react";
import { orderNowHref } from "@/data/site";
import { cn } from "@/lib/utils";

export type MenuItem = {
  id: string;
  name: string;
  weight: string;
  description: string;
  badge?: string;
  image: string;
  imageAlt: string;
};

export function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  const featured = Boolean(item.badge);
  return (
    <article
      className={cn(
        "group relative flex w-[78vw] max-w-[320px] shrink-0 snap-start flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-card ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-warm md:w-auto md:max-w-none",
        featured && "ring-2 ring-saffron",
      )}
      data-reveal
      style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
    >
      <figure className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          width={1024}
          height={768}
          loading="lazy"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {item.badge && (
          <span className="absolute left-4 top-4 rounded-full gradient-saffron px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-widest text-charcoal shadow-glow">
            {item.badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 rounded-full bg-charcoal/80 px-3 py-1 font-heading text-xs font-semibold text-on-dark backdrop-blur">
          {item.weight}
        </span>
      </figure>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-xl font-bold leading-tight">{item.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-dashed border-charcoal/15 pt-4">
          <span className="font-display text-sm italic text-muted-foreground">
            Check current price
          </span>
          <a
            href={orderNowHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-on-dark transition-colors hover:bg-chilli"
          >
            Order <ArrowUpRight className="size-3.5" aria-hidden="true" />
            <span className="sr-only">{item.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
