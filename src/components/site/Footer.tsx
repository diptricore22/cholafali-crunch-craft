import { Instagram, MapPin, Phone } from "lucide-react";
import { business, fullAddress, links, navItems } from "@/data/site";
import { Motif, OrnamentDivider } from "./Ornaments";

export function Footer() {
  return (
    <footer className="grain relative bg-charcoal pb-28 pt-20 text-on-dark lg:pb-12" role="contentinfo">
      <div className="pattern-lattice pointer-events-none absolute inset-0 text-saffron" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full gradient-saffron text-charcoal">
                <Motif className="size-7" />
              </span>
              <div>
                <p className="font-heading text-xl font-bold">{business.name}</p>
                <p className="font-display text-sm italic text-saffron">{business.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-on-dark-muted">
              Crispy Cholafali with signature chutney — a Navrangpura tradition serving Ahmedabad
              since 1984.
            </p>
            <OrnamentDivider className="mt-8 justify-start text-saffron" />
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow text-saffron">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 lg:grid-cols-1">
              {navItems.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-on-dark-muted transition-colors hover:text-on-dark">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow text-saffron">Contact</p>
            <ul className="mt-5 space-y-4 text-on-dark-muted">
              <li>
                <a href={links.call} className="flex items-start gap-3 transition-colors hover:text-on-dark">
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" /> {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-on-dark"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span>{fullAddress}</span>
                </a>
              </li>
              <li>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 transition-colors hover:text-on-dark"
                >
                  <Instagram className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  {business.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-on-dark/10 pt-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {business.name}. All rights reserved.</p>
          <p className="font-display italic">The Crispy Side of Ahmedabad</p>
        </div>
      </div>
    </footer>
  );
}
