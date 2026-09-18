import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
  accent = "saffron",
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  accent?: "saffron" | "chilli" | "coriander";
}) {
  return (
    <article
      className="group relative overflow-hidden rounded-[2rem] bg-card p-8 shadow-card ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-warm"
      data-reveal
      style={{ ["--reveal-delay" as string]: `${index * 100}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute -right-6 -top-6 font-display text-8xl italic text-charcoal/[0.04] transition-transform duration-700 group-hover:scale-110"
      >
        0{index + 1}
      </span>
      <span
        className={cn(
          "grid size-14 place-items-center rounded-2xl transition-transform duration-500 group-hover:rotate-6",
          accent === "saffron" && "gradient-saffron text-charcoal",
          accent === "chilli" && "gradient-chilli text-on-dark",
          accent === "coriander" && "bg-coriander-soft text-coriander",
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-heading text-xl font-bold">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
