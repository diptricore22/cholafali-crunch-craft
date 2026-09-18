import { MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { links, orderNowHref } from "@/data/site";

/** Sticky bottom action bar — mobile & tablet only. */
export function MobileBottomBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-on-dark/10 bg-charcoal/85 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 text-on-dark backdrop-blur-xl lg:hidden"
      role="region"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg items-center gap-2">
        <a
          href={links.call}
          className="grid size-12 shrink-0 place-items-center rounded-full border border-on-dark/20 transition-colors hover:bg-on-dark/10"
          aria-label="Call now"
        >
          <Phone className="size-5" />
        </a>
        <a
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="grid size-12 shrink-0 place-items-center rounded-full bg-whatsapp text-charcoal transition-transform active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="size-5" />
        </a>
        <a
          href={orderNowHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full gradient-saffron font-heading text-sm font-bold text-charcoal shadow-glow transition-transform active:scale-[0.98]"
        >
          <ShoppingBag className="size-4" aria-hidden="true" /> Order Now
        </a>
      </div>
    </div>
  );
}
