import { MessageCircle, ShoppingBag } from "lucide-react";
import closeupImg from "@/assets/cholafali-closeup.jpg";
import { links, orderNowHref } from "@/data/site";
import { ButtonLink } from "./Button";
import { Motif } from "./Ornaments";

export function OrderCTA() {
  return (
    <section className="bg-background px-4 pb-24 pt-8 sm:px-6 lg:px-8" aria-labelledby="cta-title">
      <div
        className="grain relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] gradient-chilli text-on-dark shadow-warm"
        data-reveal
      >
        <img
          src={closeupImg}
          alt=""
          aria-hidden="true"
          width={1024}
          height={1024}
          loading="lazy"
          className="pointer-events-none absolute -right-20 -top-20 size-[420px] rounded-full object-cover opacity-30 mix-blend-luminosity sm:opacity-40 lg:-right-10 lg:size-[560px]"
        />
        <Motif className="pointer-events-none absolute -bottom-10 -left-10 size-56 text-on-dark/10 animate-spin-slow" />
        <div className="relative z-10 grid gap-8 px-8 py-14 sm:px-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="eyebrow text-saffron">Order Online</p>
            <h2 id="cta-title" className="mt-4 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
              Craving That{" "}
              <span className="font-display font-normal italic text-saffron">Crunch?</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-on-dark/85">
              Your favorite Cholafali is just a few clicks away.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {links.swiggy ? (
              <ButtonLink href={links.swiggy} external variant="saffron" size="lg">
                <ShoppingBag className="size-4" aria-hidden="true" /> Order on Swiggy
              </ButtonLink>
            ) : (
              <span
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-dashed border-on-dark/40 px-8 font-heading text-sm font-semibold text-on-dark/70"
                title="Swiggy link not configured yet"
              >
                <ShoppingBag className="size-4" aria-hidden="true" /> Order on Swiggy · coming soon
              </span>
            )}
            <ButtonLink href={orderNowHref} external variant="saffron" size="lg">
              <MessageCircle className="size-4" aria-hidden="true" /> Order Online
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
