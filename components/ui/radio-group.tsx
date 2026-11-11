"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
    />
  );
}

function RadioChoice({
  className,
  children,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "group flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3.5 text-left text-sm font-medium text-ink transition-all duration-200 hover:border-forest/35 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/60 data-[state=checked]:border-forest data-[state=checked]:bg-forest data-[state=checked]:text-cream",
        className,
      )}
      {...props}
    >
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-current/40">
        <RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-current" />
      </span>
      <span>{children}</span>
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioChoice };
