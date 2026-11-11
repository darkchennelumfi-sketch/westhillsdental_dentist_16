"use client";

import { useState } from "react";
import Link from "next/link";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ArrowUpRight, Clock, MapPin, Menu, Phone, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/lib/site";
import { services } from "@/lib/services";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex size-11 items-center justify-center rounded-full border border-forest/15 bg-paper/70 text-forest transition-colors hover:bg-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="dialog-overlay" />
        <DialogPrimitive.Content className="dialog-content fixed inset-0 z-[95] overflow-y-auto bg-forest text-cream">
          <VisuallyHidden>
            <DialogPrimitive.Title>West Hills Dental navigation</DialogPrimitive.Title>
            <DialogPrimitive.Description>
              Browse pages, services, and contact information.
            </DialogPrimitive.Description>
          </VisuallyHidden>
          <div className="grain relative min-h-dvh overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 95% 0%, rgba(217,232,184,0.14), transparent 60%), radial-gradient(ellipse 50% 50% at 0% 100%, rgba(148,74,46,0.14), transparent 65%)",
              }}
            />
            <div className="relative z-10 flex min-h-dvh flex-col px-5 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <Logo tone="light" compact />
                <DialogPrimitive.Close asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="inline-flex size-11 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream transition-colors hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <X className="size-5" />
                  </button>
                </DialogPrimitive.Close>
              </div>

              <nav aria-label="Mobile navigation" className="mt-12 flex-1">
                <ul className="flex flex-col">
                  {navItems
                    .filter((item) => item.label !== "Services")
                    .map((item, index) => (
                      <li key={item.href} className="border-b border-cream/10">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between py-4"
                        >
                          <span className="flex items-baseline gap-4">
                            <span className="font-mono text-[0.6rem] text-lime/75">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className="font-display text-[2rem] leading-none text-cream transition-colors group-hover:text-lime">
                              {item.label}
                            </span>
                          </span>
                          <ArrowUpRight className="size-4 text-cream/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                        </Link>
                      </li>
                    ))}
                </ul>

                <div className="mt-7">
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-lime/70">Services</span>
                    <Link
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="text-xs text-cream/75 underline-offset-4 hover:text-lime hover:underline"
                    >
                      View all
                    </Link>
                  </div>
                  <div className="mt-3 grid gap-x-4 gap-y-2 sm:grid-cols-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-xl border border-cream/10 bg-cream/[0.04] px-3 py-2.5 text-sm text-cream/80 transition-colors hover:border-cream/25 hover:bg-cream/10 hover:text-cream"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </nav>

              <div className="mt-10 rounded-[1.5rem] border border-cream/15 bg-cream/[0.06] p-5 backdrop-blur-md">
                <div className="grid gap-3 text-sm text-cream/75">
                  <Link
                    href={site.phoneHref}
                    className="flex items-center gap-3 transition-colors hover:text-lime"
                  >
                    <Phone className="size-4 text-lime" />
                    {site.phone}
                  </Link>
                  <p className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
                    {site.address.street}, {site.address.suite}, {site.address.city},{" "}
                    {site.address.state} {site.address.zip}
                  </p>
                  <p className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 shrink-0 text-lime" />
                    {site.hours[0].days}, {site.hours[0].time}
                  </p>
                </div>
                <Button asChild variant="light" className="mt-5 w-full">
                  <Link href="/contact-us" onClick={() => setOpen(false)}>
                    Request an appointment
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
