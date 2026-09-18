import { Instagram } from "lucide-react";
import closeupImg from "@/assets/cholafali-closeup.jpg";
import chutneyImg from "@/assets/chutney.jpg";
import customerImg from "@/assets/customer.jpg";
import packImg from "@/assets/pack.jpg";
import servingImg from "@/assets/serving.jpg";
import counterImg from "@/assets/counter.jpg";
import { business, links } from "@/data/site";
import { ButtonLink } from "./Button";

const tiles = [
  { src: servingImg, alt: "Cholafali cones ready to serve" },
  { src: chutneyImg, alt: "Green chutney close-up" },
  { src: customerImg, alt: "A customer enjoying Cholafali" },
  { src: closeupImg, alt: "Crispy Cholafali texture" },
  { src: packImg, alt: "Cholafali pack with chutney" },
  { src: counterImg, alt: "The counter, piled high" },
];

export function InstagramSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32" aria-labelledby="ig-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div data-reveal>
            <p className="eyebrow text-chilli">Instagram</p>
            <h2 id="ig-title" className="mt-4 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
              Follow the{" "}
              <span className="font-display font-normal italic text-chilli">Crunch</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Fresh bites, happy customers and the Manohar Cholafali experience.
            </p>
            <ButtonLink href={links.instagram} external variant="dark" size="lg" className="mt-8">
              <Instagram className="size-4" aria-hidden="true" /> Follow on Instagram
            </ButtonLink>
            <p className="mt-4 font-heading text-sm font-semibold text-muted-foreground">
              {business.instagramHandle}
            </p>
          </div>

          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${business.instagramHandle} on Instagram`}
            className="grid grid-cols-3 gap-3 sm:gap-4"
            data-reveal
          >
            {tiles.map((t, i) => (
              <figure
                key={i}
                className={
                  "group relative aspect-square overflow-hidden rounded-2xl shadow-card " +
                  (i % 3 === 1 ? "translate-y-6" : "")
                }
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 grid place-items-center bg-chilli/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Instagram className="size-7 text-on-dark" aria-hidden="true" />
                </span>
              </figure>
            ))}
          </a>
        </div>
      </div>
    </section>
  );
}
