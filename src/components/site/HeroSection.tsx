import { ArrowDown, MapPin, ShoppingBag } from "lucide-react";
import heroImg from "@/assets/hero-cholafali.jpg";
import chutneyImg from "@/assets/chutney.jpg";
import closeupImg from "@/assets/cholafali-closeup.jpg";
import { orderNowHref } from "@/data/site";
import { ButtonLink } from "./Button";
import { Motif } from "./Ornaments";
import { RatingBadge } from "./RatingBadge";

export function HeroSection() {
  return (
    <section
      id="home"
      className="gradient-hero grain relative overflow-hidden text-on-dark"
      aria-labelledby="hero-title"
    >
      {/* decorative lattice + motifs */}
      <div className="pattern-lattice pointer-events-none absolute inset-0 text-saffron" />
      <Motif className="pointer-events-none absolute -left-10 top-32 size-48 text-saffron/10 animate-spin-slow" />
      <Motif className="pointer-events-none absolute -right-16 bottom-10 size-72 text-chilli/20 animate-spin-slow" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-28 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-8 lg:pb-28 lg:pt-36">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <p className="eyebrow animate-fade-up text-saffron" style={{ animationDelay: "80ms" }}>
            Since 1984 · Ahmedabad
          </p>
          <h1
            id="hero-title"
            className="mt-5 animate-fade-up text-[2.9rem] font-bold leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.5rem]"
            style={{ animationDelay: "180ms" }}
          >
            Crispy.
            <br />
            Spicy.
            <br />
            <span className="font-display font-normal italic text-saffron">Unforgettable.</span>
          </h1>
          <p
            className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-on-dark-muted sm:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Authentic Cholafali served fresh with our signature chutney — a taste Ahmedabad has
            loved for generations.
          </p>
          <div
            className="mt-8 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "380ms" }}
          >
            <ButtonLink href={orderNowHref} external variant="saffron" size="lg">
              <ShoppingBag className="size-4" /> Order Now
            </ButtonLink>
            <ButtonLink href="#visit" variant="outline-light" size="lg">
              <MapPin className="size-4" /> Visit Us
            </ButtonLink>
          </div>
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "480ms" }}>
            <RatingBadge />
          </div>
        </div>

        {/* Imagery */}
        <div className="relative order-1 mx-auto w-full max-w-[520px] lg:order-2 lg:max-w-none">
          <div className="relative aspect-[4/5] animate-scale-in overflow-hidden rounded-[2rem] rounded-tr-[6rem] shadow-warm sm:rounded-tr-[8rem]">
            <img
              src={heroImg}
              alt="A heap of golden crispy Cholafali with a bowl of green signature chutney at Manohar Cholafali Center, Ahmedabad"
              width={1280}
              height={1600}
              fetchPriority="high"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-sm italic text-on-dark/90">
              Fresh every day, since 1984
            </p>
          </div>

          {/* floating chutney */}
          <figure className="absolute -left-4 bottom-10 w-28 animate-float-slow sm:-left-10 sm:w-40">
            <img
              src={chutneyImg}
              alt="Signature green chutney in a steel bowl"
              width={1024}
              height={1024}
              className="aspect-square rounded-full border-4 border-cream object-cover shadow-warm"
              loading="eager"
            />
          </figure>

          {/* floating close-up */}
          <figure className="absolute -right-3 top-8 w-24 animate-float sm:-right-8 sm:w-36">
            <img
              src={closeupImg}
              alt="Close-up of crispy Cholafali texture"
              width={1024}
              height={1024}
              className="aspect-square rounded-[1.5rem] border-4 border-cream object-cover shadow-warm"
              loading="eager"
            />
          </figure>

          {/* stamp */}
          <div className="absolute -top-4 left-2 grid size-24 place-items-center rounded-full gradient-saffron text-charcoal shadow-glow sm:-top-6 sm:size-28">
            <span className="text-center font-heading text-[10px] font-bold uppercase leading-tight tracking-widest">
              Est.
              <br />
              <span className="font-display text-2xl normal-case tracking-normal">1984</span>
            </span>
          </div>
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium tracking-widest text-on-dark-muted uppercase transition-colors hover:text-on-dark lg:flex"
      >
        Scroll <ArrowDown className="size-3 animate-bounce" />
      </a>
    </section>
  );
}
