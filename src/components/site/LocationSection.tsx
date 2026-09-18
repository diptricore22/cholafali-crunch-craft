import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import placeImg from "@/assets/place.jpg";
import { business, links } from "@/data/site";
import { ButtonLink } from "./Button";
import { Motif } from "./Ornaments";

export function LocationSection() {
  return (
    <section id="visit" className="relative bg-cream-deep/60 py-24 sm:py-32" aria-labelledby="visit-title">
      <div className="pattern-lattice pointer-events-none absolute inset-0 text-chilli" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Details */}
          <div data-reveal>
            <p className="eyebrow text-chilli">Visit Us</p>
            <h2 id="visit-title" className="mt-4 text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
              Come Find the{" "}
              <span className="font-display font-normal italic text-chilli">Crunch</span>
            </h2>

            <address className="mt-10 space-y-6 not-italic">
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl gradient-saffron text-charcoal">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading font-bold">{business.name}</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {business.address.line1},<br />
                    {business.address.line2},<br />
                    {business.address.line3},<br />
                    {business.address.locality}, {business.address.city},{" "}
                    {business.address.region} {business.address.postalCode}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-coriander-soft text-coriander">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading font-bold">Hours</p>
                  <p className="mt-1 text-muted-foreground">{business.hours}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl gradient-chilli text-on-dark">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading font-bold">Phone / WhatsApp</p>
                  <a href={links.call} className="mt-1 block text-muted-foreground hover:text-chilli">
                    {business.phoneDisplay}
                  </a>
                </div>
              </div>
            </address>

            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href={links.directions} external variant="primary" size="lg">
                <Navigation className="size-4" aria-hidden="true" /> Get Directions
              </ButtonLink>
              <ButtonLink href={links.call} variant="outline" size="lg">
                <Phone className="size-4" aria-hidden="true" /> Call Now
              </ButtonLink>
              <ButtonLink href={links.whatsapp} external variant="whatsapp" size="lg">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp Us
              </ButtonLink>
            </div>
          </div>

          {/* Map area — real embed when configured, elegant placeholder otherwise */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] shadow-warm" data-reveal>
            {links.mapEmbed ? (
              <iframe
                src={links.mapEmbed}
                title={`Map showing ${business.name}`}
                className="absolute inset-0 size-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <a
                href={links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute inset-0 block"
                aria-label="Open location in Google Maps"
              >
                <img
                  src={placeImg}
                  alt="Street view near the shop under the metro bridge, Vijay Cross Road"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-on-dark">
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-on-dark/20 bg-on-dark/10 px-3 py-1 text-xs backdrop-blur">
                    <span className="size-2 animate-pulse rounded-full bg-saffron" /> Under Metro Bridge · Pillar 171
                  </div>
                  <p className="font-heading text-xl font-bold">Vijay Cross Road, Navrangpura</p>
                  <p className="mt-1 text-sm text-on-dark-muted">Tap to open in Google Maps</p>
                </div>
                <Motif className="absolute right-6 top-6 size-14 text-saffron/60" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
