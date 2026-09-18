import { Flame, Leaf, Sparkles } from "lucide-react";
import closeupImg from "@/assets/cholafali-closeup.jpg";
import chutneyImg from "@/assets/chutney.jpg";
import { orderNowHref } from "@/data/site";
import { ButtonLink } from "./Button";
import { SectionHeading } from "./Ornaments";

const badges = [
  { icon: Flame, label: "Crispy" },
  { icon: Sparkles, label: "Fresh" },
  { icon: Leaf, label: "Jain-friendly option" },
];

export function SignatureDish() {
  return (
    <section
      className="grain relative overflow-hidden bg-charcoal py-24 text-on-dark sm:py-32"
      aria-labelledby="signature-title"
    >
      <div className="pattern-lattice pointer-events-none absolute inset-0 text-saffron" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature Dish"
          title="The Star of Our Kitchen"
          tone="dark"
          align="center"
        />

        <article
          className="mt-14 grid overflow-hidden rounded-[2.5rem] bg-charcoal-soft/60 shadow-warm ring-1 ring-on-dark/10 backdrop-blur lg:grid-cols-2"
          data-reveal
        >
          <figure className="relative min-h-[320px] overflow-hidden sm:min-h-[420px]">
            <img
              src={closeupImg}
              alt="Macro shot of golden crispy Cholafali dusted with chilli"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute inset-0 size-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal-soft/40 lg:to-charcoal-soft/70" />
            <img
              src={chutneyImg}
              alt="Bowl of signature green chutney"
              width={1024}
              height={1024}
              loading="lazy"
              className="absolute bottom-6 right-6 size-24 rounded-full border-4 border-saffron object-cover shadow-glow animate-float sm:size-32"
            />
          </figure>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-saffron">Served fresh, every single day</p>
            <h3
              id="signature-title"
              className="mt-4 font-display text-6xl italic leading-none sm:text-7xl"
            >
              Cholafali
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-on-dark-muted">
              Light, crispy and full of character — our signature Cholafali is served fresh with
              flavorful chutney for the perfect Gujarati snack experience.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Highlights">
              {badges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-saffron/10 px-4 py-2 text-sm font-medium text-saffron"
                >
                  <Icon className="size-4" aria-hidden="true" /> {label}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <ButtonLink href={orderNowHref} external variant="saffron" size="lg">
                Order Cholafali
              </ButtonLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
