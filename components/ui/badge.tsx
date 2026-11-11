import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.62rem] font-medium tracking-[0.16em] uppercase",
  {
    variants: {
      variant: {
        default: "border-forest/15 bg-forest/5 text-forest",
        light: "border-cream/20 bg-cream/10 text-cream",
        lime: "border-lime/40 bg-lime/60 text-ink",
        copper: "border-copper/25 bg-copper/10 text-copper",
        outline: "border-line bg-transparent text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
