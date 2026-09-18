import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { links } from "@/data/site";
import { cn } from "@/lib/utils";

/** Floating WhatsApp (desktop) + back-to-top button. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-40 flex flex-col items-end gap-3 sm:right-6 lg:bottom-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "pointer-events-auto grid size-11 place-items-center rounded-full bg-card text-foreground shadow-card ring-1 ring-charcoal/10 transition-all duration-300 hover:bg-charcoal hover:text-on-dark",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="size-4" />
      </button>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto hidden size-14 place-items-center rounded-full bg-whatsapp text-charcoal shadow-warm transition-transform duration-300 hover:scale-110 lg:grid"
      >
        <MessageCircle className="size-6" />
      </a>
    </div>
  );
}
