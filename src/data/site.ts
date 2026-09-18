/**
 * Single source of truth for business facts and external links.
 * Only verified information from the business lives here.
 */

export const business = {
  name: "Manohar Cholafali Center®",
  shortName: "Manohar Cholafali",
  tagline: "Since 1984",
  foundedYear: 1984,
  phoneDisplay: "+91 94279 50278",
  phoneE164: "+919427950278",
  address: {
    line1: "Shop No. 4, Shree Vijay Apartment",
    line2: "Under Metro Bridge, Vijay Cross Road",
    line3: "Opp. Metro Pillar No. 171",
    locality: "Navrangpura",
    city: "Ahmedabad",
    region: "Gujarat",
    postalCode: "380009",
    country: "IN",
  },
  hours: "Open approximately 11:00 AM – 9:00/9:30 PM",
  rating: { value: 4.7, count: 568 },
  priceRange: "₹100–₹200",
  instagramHandle: "@manoharcholafalicenter1984",
  instagramUrl: "https://www.instagram.com/manoharcholafalicenter1984/",
} as const;

export const fullAddress = [
  business.address.line1,
  business.address.line2,
  business.address.line3,
  `${business.address.locality}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`,
].join(", ");

const mapsQuery = encodeURIComponent(`${business.name} ${fullAddress}`);

/**
 * Links. Values marked TODO are intentionally left empty so nothing
 * inaccurate is shipped — fill them in once the official URLs are known.
 */
export const links = {
  directions: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  reviews: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  call: `tel:${business.phoneE164}`,
  whatsapp: `https://wa.me/${business.phoneE164.replace("+", "")}?text=${encodeURIComponent(
    "Hi Manohar Cholafali Center! I'd like to place an order.",
  )}`,
  instagram: business.instagramUrl,
  /** TODO: paste the official Swiggy store URL here when available. */
  swiggy: "" as string,
  /** TODO: paste an official online-ordering URL here when available. */
  orderOnline: "" as string,
  /** TODO: paste the Google Maps "Embed a map" src URL here when available. */
  mapEmbed: "" as string,
} as const;

/** Primary "Order Now" destination — WhatsApp until an ordering URL is configured. */
export const orderNowHref = links.orderOnline || links.whatsapp;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit Us", href: "#visit" },
] as const;

export const menuItems = [
  {
    id: "manohar-300",
    name: "Manohar Crispy Cholafali",
    weight: "300 g",
    badge: "Best Seller",
    description: "Crispy Cholafali with an irresistible crunch, served with special chutney.",
  },
  {
    id: "crispy-400",
    name: "Crispy Cholafali",
    weight: "400 g",
    description: "The same signature crunch in a bigger pack — perfect for sharing.",
  },
  {
    id: "crispy-600",
    name: "Crispy Cholafali",
    weight: "600 g",
    description: "Our family-size pack for gatherings, gifting and serious cravings.",
  },
  {
    id: "chutney-200",
    name: "Extra Special Chutney",
    weight: "200 g",
    description: "The spicy, flavorful chutney that makes every bite of Cholafali special.",
  },
] as const;

export const reviews = [
  {
    quote: "Very tasty and yummy 🤤😋 And good service",
    author: "Google reviewer",
    stars: 5,
    verified: true,
  },
  {
    quote: "Good experience with owner and the staff",
    author: "Google reviewer",
    stars: 5,
    verified: true,
  },
  {
    quote:
      "Customers frequently praise the crispy texture, fresh preparation and the flavorful chutney.",
    author: "Customer sentiment summary",
    stars: 5,
    verified: false,
  },
  {
    quote: "Friendly service and consistent quality come up again and again in customer reviews.",
    author: "Customer sentiment summary",
    stars: 5,
    verified: false,
  },
] as const;
