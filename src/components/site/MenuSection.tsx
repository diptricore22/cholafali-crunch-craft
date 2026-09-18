import chutneyImg from "@/assets/chutney.jpg";
import closeupImg from "@/assets/cholafali-closeup.jpg";
import heroImg from "@/assets/hero-cholafali.jpg";
import packImg from "@/assets/pack.jpg";
import { menuItems, orderNowHref } from "@/data/site";
import { ButtonLink } from "./Button";
import { MenuCard, type MenuItem } from "./MenuCard";
import { SectionHeading } from "./Ornaments";

const imagesById: Record<string, { src: string; alt: string }> = {
  "manohar-300": { src: heroImg, alt: "Manohar Crispy Cholafali 300 g with chutney" },
  "crispy-400": { src: closeupImg, alt: "Crispy Cholafali 400 g pack" },
  "crispy-600": { src: packImg, alt: "Crispy Cholafali 600 g family pack" },
  "chutney-200": { src: chutneyImg, alt: "Extra Special Chutney 200 g" },
};

const items: MenuItem[] = menuItems.map((m) => ({
  ...m,
  badge: "badge" in m ? m.badge : undefined,
  image: imagesById[m.id].src,
  imageAlt: imagesById[m.id].alt,
}));

export function MenuSection() {
  return (
    <section id="menu" className="relative bg-background py-24 sm:py-32" aria-labelledby="menu-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Menu"
            title="Simple Menu. Big Flavor."
            description="Four things, done properly. Prices are shown at the counter and on ordering apps."
          />
          <div data-reveal>
            <ButtonLink href={orderNowHref} external variant="outline" size="md">
              Order Online
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:px-6 md:mx-auto md:grid md:max-w-7xl md:grid-cols-2 md:overflow-visible md:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
        <div className="w-px shrink-0 md:hidden" aria-hidden="true" />
      </div>
      <p className="mt-4 px-4 text-center text-xs text-muted-foreground md:hidden">
        Swipe to see more →
      </p>
    </section>
  );
}
