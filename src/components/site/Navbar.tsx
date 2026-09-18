import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business, links, navItems, orderNowHref } from "@/data/site";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";
import { Motif } from "./Ornaments";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-charcoal/80 py-2 shadow-card backdrop-blur-xl"
          : "bg-transparent py-4",
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a href="#home" className="group flex min-w-0 items-center gap-3 text-on-dark">
          <span className="grid size-10 shrink-0 place-items-center rounded-full gradient-saffron text-charcoal shadow-glow transition-transform duration-500 group-hover:rotate-45">
            <Motif className="size-6" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-sm font-bold sm:text-base">
              {business.shortName}
              <span className="ml-1 hidden text-on-dark-muted sm:inline">Center®</span>
            </span>
            <span className="block font-display text-[11px] italic tracking-wide text-saffron">
              {business.tagline}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-on-dark/85 transition-colors hover:text-on-dark after:absolute after:inset-x-4 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-saffron after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={links.call}
            variant="outline-light"
            size="icon"
            className="hidden size-11 sm:inline-flex lg:hidden"
            aria-label="Call now"
          >
            <Phone className="size-4" />
          </ButtonLink>
          <ButtonLink
            href={orderNowHref}
            external
            variant="saffron"
            size="md"
            className="hidden sm:inline-flex"
          >
            Order Now
          </ButtonLink>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-on-dark/20 text-on-dark transition-colors hover:bg-on-dark/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Menu className="size-5 opacity-0 absolute" /> : null}
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col bg-charcoal px-6 pt-24 pb-10 text-on-dark transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div className="pattern-lattice pointer-events-none absolute inset-0 text-saffron" />
        <ul className="relative flex flex-col gap-1">
          {navItems.map((item, i) => (
            <li
              key={item.href}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
              className={cn(
                "transition-all duration-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
            >
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-on-dark/10 py-4 font-heading text-2xl font-semibold"
              >
                {item.label}
                <span className="font-display text-sm italic text-saffron">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="relative mt-auto flex flex-col gap-3">
          <ButtonLink href={orderNowHref} external variant="saffron" size="lg">
            Order Now
          </ButtonLink>
          <ButtonLink href={links.call} variant="outline-light" size="lg">
            <Phone className="size-4" /> {business.phoneDisplay}
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
