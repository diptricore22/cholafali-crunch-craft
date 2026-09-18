import { createFileRoute } from "@tanstack/react-router";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Footer } from "@/components/site/Footer";
import { Gallery } from "@/components/site/Gallery";
import { HeritageSection } from "@/components/site/HeritageSection";
import { HeroSection } from "@/components/site/HeroSection";
import { InstagramSection } from "@/components/site/InstagramSection";
import { LocationSection } from "@/components/site/LocationSection";
import { MenuSection } from "@/components/site/MenuSection";
import { MobileBottomBar } from "@/components/site/MobileBottomBar";
import { Navbar } from "@/components/site/Navbar";
import { OrderCTA } from "@/components/site/OrderCTA";
import { ReviewsSection } from "@/components/site/ReviewsSection";
import { SignatureDish } from "@/components/site/SignatureDish";
import { WhySection } from "@/components/site/WhySection";
import { business, fullAddress, links, menuItems } from "@/data/site";
import { useRevealOnScroll } from "@/hooks/use-reveal";

const title = "Manohar Cholafali Center® | Authentic Cholafali in Ahmedabad Since 1984";
const description =
  "Manohar Cholafali Center® in Navrangpura, Ahmedabad — serving crispy Cholafali with signature chutney since 1984. Visit us or order online.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: business.name,
  description,
  url: "/",
  telephone: business.phoneE164,
  servesCuisine: ["Gujarati", "Indian street food", "Snacks"],
  priceRange: "₹₹",
  foundingDate: String(business.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${business.address.line1}, ${business.address.line2}, ${business.address.line3}`,
    addressLocality: `${business.address.locality}, ${business.address.city}`,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "11:00",
    closes: "21:30",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: business.rating.value,
    reviewCount: business.rating.count,
    bestRating: 5,
  },
  sameAs: [business.instagramUrl],
  hasMenu: {
    "@type": "Menu",
    name: "Menu",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Cholafali & Chutney",
      hasMenuItem: menuItems.map((m) => ({
        "@type": "MenuItem",
        name: `${m.name} (${m.weight})`,
        description: m.description,
      })),
    },
  },
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "Cholafali in Ahmedabad, Manohar Cholafali Center, Cholafali Navrangpura, Gujarati snacks Ahmedabad, Best Cholafali Ahmedabad",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "restaurant.restaurant" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Ahmedabad" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
});

function Index() {
  useRevealOnScroll();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-saffron focus:px-4 focus:py-2 focus:font-semibold focus:text-charcoal"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <HeritageSection />
        <SignatureDish />
        <MenuSection />
        <WhySection />
        <ReviewsSection />
        <Gallery />
        <InstagramSection />
        <LocationSection />
        <OrderCTA />
      </main>
      <Footer />
      <FloatingActions />
      <MobileBottomBar />
      {/* Screen-reader friendly contact summary */}
      <span className="sr-only">
        {business.name}, {fullAddress}. Phone {business.phoneDisplay}. Directions: {links.directions}
      </span>
    </>
  );
}
