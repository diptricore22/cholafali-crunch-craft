import counterImg from "@/assets/counter.jpg";
import servingImg from "@/assets/serving.jpg";
import { Motif, OrnamentDivider } from "./Ornaments";

const timeline = [
  { year: "1984", label: "Legacy Begins", detail: "Crispy Cholafali and chutney, Navrangpura." },
  { year: "Today", label: "Still Serving Ahmedabad", detail: "The same crunch, loved by generations." },
];

export function HeritageSection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-background py-24 sm:py-32"
      aria-labelledby="story-title"
    >
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -top-8 right-0 select-none font-display text-[38vw] font-black leading-none italic lg:-top-16 lg:text-[26rem]"
      >
        1984
      </span>
      <div className="pattern-dots pointer-events-none absolute inset-y-0 left-0 w-1/3 text-chilli" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Editorial copy */}
          <div className="lg:col-span-6" data-reveal>
            <p className="eyebrow text-chilli">Our Story</p>
            <h2
              id="story-title"
              className="mt-4 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl"
            >
              A Legacy of Crunch{" "}
              <span className="font-display font-normal italic text-chilli">Since 1984</span>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              What started as a love for authentic Gujarati snacks has become a familiar taste for
              generations of Ahmedabad food lovers. Manohar Cholafali Center® continues to serve
              crispy, fresh Cholafali with the chutney that makes every bite special.
            </p>

            <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-chilli/15 bg-card px-5 py-4 shadow-card">
              <Motif className="size-9 text-saffron" />
              <div>
                <p className="font-heading text-2xl font-bold tracking-tight text-chilli">
                  40+ YEARS
                </p>
                <p className="eyebrow text-muted-foreground">of flavor</p>
              </div>
            </div>

            {/* Timeline */}
            <ol className="relative mt-12 border-l border-dashed border-chilli/30 pl-8">
              {timeline.map((t, i) => (
                <li
                  key={t.year}
                  className="relative pb-8 last:pb-0"
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                >
                  <span className="absolute -left-[2.55rem] top-1 grid size-5 place-items-center rounded-full bg-background ring-2 ring-chilli">
                    <span className="size-2 rounded-full bg-chilli" />
                  </span>
                  <p className="font-display text-3xl italic text-foreground">{t.year}</p>
                  <p className="font-heading font-semibold">{t.label}</p>
                  <p className="text-sm text-muted-foreground">{t.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Image composition */}
          <div className="relative lg:col-span-6" data-reveal>
            <div className="grid grid-cols-5 gap-4">
              <figure className="col-span-3 overflow-hidden rounded-[2rem] rounded-bl-[5rem] shadow-card">
                <img
                  src={servingImg}
                  alt="Paper cones filled with crispy Cholafali topped with green chutney"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
              <figure className="col-span-2 mt-16 overflow-hidden rounded-[2rem] rounded-tr-[4rem] shadow-card">
                <img
                  src={counterImg}
                  alt="Steel trays piled high with fresh Cholafali at the counter"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[3/4] size-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </figure>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-charcoal px-6 py-3 text-on-dark shadow-warm">
              <OrnamentDivider className="text-saffron" />
              <p className="mt-1 whitespace-nowrap font-display text-sm italic">
                The Crispy Side of Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
