import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold tracking-tight transition-all duration-300 select-none whitespace-nowrap disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97] focus-visible:outline-3 focus-visible:outline-saffron",
  {
    variants: {
      variant: {
        primary:
          "gradient-chilli text-primary-foreground shadow-warm hover:-translate-y-0.5 hover:brightness-110",
        saffron:
          "gradient-saffron text-charcoal shadow-glow hover:-translate-y-0.5 hover:brightness-105",
        outline:
          "border border-charcoal/20 bg-transparent text-foreground hover:border-charcoal hover:bg-charcoal hover:text-on-dark",
        "outline-light":
          "border border-on-dark/30 bg-on-dark/5 text-on-dark backdrop-blur-sm hover:bg-on-dark hover:text-charcoal",
        ghost: "text-foreground hover:bg-charcoal/5",
        whatsapp:
          "bg-whatsapp text-charcoal shadow-card hover:-translate-y-0.5 hover:brightness-105",
        dark: "bg-charcoal text-on-dark hover:bg-charcoal-soft",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & { external?: boolean };

export function ButtonLink({ className, variant, size, external, ...props }: ButtonLinkProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}
