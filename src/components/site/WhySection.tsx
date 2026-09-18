import { Flame, Heart, History, Star } from "lucide-react";
import { business } from "@/data/site";
import { FeatureCard } from "./FeatureCard";
import { SectionHeading } from "./Ornaments";

const features = [
  {
    icon: Flame,
    title: "Crispy Every Time",
    description: "Freshly served Cholafali with the crunch customers come back for.",
    accent: "saffron" as const,
  },
  {
    icon: Heart,
    title: "Signature Chutney",
    description: "The perfect spicy and flavorful companion to Cholafali.",
    accent: "coriander" as const,
  },
  {
    icon: History,
    title: "Since 1984",
    description: "A long-standing Ahmedabad food tradition.",
    accent: "chilli" as const,
  },
  {
    icon: Star,
    title: "Loved by Ahmedabad",
    description: `${business.rating.value} ★ rating based on ${business.rating.count}+ Google reviews.`,
    accent: "saffron" as const,
  },
];

export function WhySection() {
  return (
    <section className="relative bg-cream-deep/60 py-24 sm:py-32" aria-labelledby="why-title">
      <div className="pattern-dots pointer-events-none absolute inset-0 text-chilli" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why People Love Us"
          title="Small Shop. Big Reputation."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
