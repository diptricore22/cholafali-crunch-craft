import { cn } from "@/lib/utils";

/** Gujarati-inspired eight-point motif used as a subtle decorative accent. */
export function Motif({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("size-16", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M50 4 L62 38 L96 50 L62 62 L50 96 L38 62 L4 50 L38 38 Z" />
      <path d="M50 22 L57 43 L78 50 L57 57 L50 78 L43 57 L22 50 L43 43 Z" />
      <circle cx="50" cy="50" r="6" />
    </svg>
  );
}

/** Small divider with a motif in the middle. */
export function OrnamentDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("flex items-center justify-center gap-3 opacity-60", className)}
    >
      <span className="h-px w-12 bg-current" />
      <Motif className="size-5" />
      <span className="h-px w-12 bg-current" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
      data-reveal
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4 inline-block",
            align === "center" && "ornament-line",
            dark ? "text-saffron" : "text-chilli",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
          dark ? "text-on-dark" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            dark ? "text-on-dark-muted" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
