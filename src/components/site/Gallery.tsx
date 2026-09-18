import heroImg from "@/assets/hero-cholafali.jpg";
import chutneyImg from "@/assets/chutney.jpg";
import closeupImg from "@/assets/cholafali-closeup.jpg";
import counterImg from "@/assets/counter.jpg";
import customerImg from "@/assets/customer.jpg";
import placeImg from "@/assets/place.jpg";
import servingImg from "@/assets/serving.jpg";
import packImg from "@/assets/pack.jpg";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./Ornaments";

type GalleryItem = {
  src: string;
  alt: string;
  category: "Cholafali" | "Chutney" | "The Counter" | "Our Place" | "Customer Moments";
  span?: string;
  w: number;
  h: number;
};

const items: GalleryItem[] = [
  { src: heroImg, alt: "Golden Cholafali with green chutney", category: "Cholafali", span: "md:row-span-2", w: 1280, h: 1600 },
  { src: counterImg, alt: "Trays of fresh Cholafali at the counter", category: "The Counter", span: "md:col-span-2", w: 1280, h: 960 },
  { src: chutneyImg, alt: "Signature green chutney", category: "Chutney", w: 1024, h: 1024 },
  { src: customerImg, alt: "Customer dipping Cholafali into chutney", category: "Customer Moments", w: 1024, h: 1024 },
  { src: placeImg, alt: "The shop under the metro bridge at dusk", category: "Our Place", span: "md:col-span-2", w: 1280, h: 960 },
  { src: closeupImg, alt: "Macro texture of crispy Cholafali", category: "Cholafali", w: 1024, h: 1024 },
  { src: servingImg, alt: "Cholafali served in paper cones", category: "Customer Moments", span: "md:row-span-2", w: 1024, h: 1280 },
  { src: packImg, alt: "Cholafali pack with chutney jar", category: "Cholafali", w: 1024, h: 1024 },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal py-24 text-on-dark sm:py-32" aria-labelledby="gallery-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Golden, Every Frame."
          tone="dark"
          align="center"
        />
      </div>

      {/* Mobile: swipe rail · Desktop: masonry grid */}
      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 md:mx-auto md:grid md:max-w-7xl md:auto-rows-[220px] md:grid-cols-4 md:overflow-visible md:px-6 lg:auto-rows-[260px] lg:px-8">
        {items.map((item, i) => (
          <li
            key={i}
            className={cn(
              "group relative w-[72vw] max-w-[320px] shrink-0 snap-center overflow-hidden rounded-[1.5rem] md:w-auto md:max-w-none",
              item.span,
            )}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${(i % 4) * 80}ms` }}
          >
            <img
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              loading="lazy"
              className="aspect-[4/5] size-full object-cover transition-transform duration-700 group-hover:scale-110 md:aspect-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent opacity-80 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100" />
            <span className="absolute bottom-4 left-4 translate-y-0 rounded-full border border-on-dark/20 bg-on-dark/10 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-widest backdrop-blur transition-all duration-500 md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              {item.category}
            </span>
          </li>
        ))}
        <li className="w-px shrink-0 md:hidden" aria-hidden="true" />
      </ul>
    </section>
  );
}
