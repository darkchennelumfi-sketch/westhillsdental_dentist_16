"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      className={cn("border-b border-line/80 last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "group flex flex-1 items-start justify-between gap-6 py-5 text-left font-display text-lg leading-snug text-ink transition-colors hover:text-moss focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/70 focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:text-xl",
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-forest/15 text-forest transition-colors group-hover:border-forest/30 group-data-[state=open]:bg-forest group-data-[state=open]:text-cream">
          <Plus className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-45" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      className={cn("accordion-content text-sm leading-7 text-muted", className)}
      {...props}
    >
      <div className="pr-12 pb-6">{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
