import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-cream shadow-[0_14px_30px_-16px_rgba(16,39,28,0.9)] hover:-translate-y-0.5 hover:bg-ink hover:shadow-[0_20px_36px_-18px_rgba(16,39,28,0.95)]",
        secondary:
          "border border-forest/20 bg-transparent text-forest hover:-translate-y-0.5 hover:border-forest hover:bg-forest hover:text-cream",
        light:
          "bg-cream text-ink shadow-[0_14px_30px_-18px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 hover:bg-lime",
        "outline-light":
          "border border-cream/30 bg-transparent text-cream hover:-translate-y-0.5 hover:border-cream/60 hover:bg-cream/10",
        copper:
          "bg-copper text-white shadow-[0_14px_30px_-16px_rgba(148,74,46,0.9)] hover:-translate-y-0.5 hover:bg-[#7c3a24]",
        ghost: "text-forest hover:bg-forest/5",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
