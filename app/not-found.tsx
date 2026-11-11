import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Home, Phone, Search } from "lucide-react";
import { LogoMark } from "@/components/logo";
import { SearchDialog } from "@/components/search-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found at West Hills Dental.",
};

const quickLinks = [
  {
    icon: Home,
    title: "Home",
    text: "Back to the beginning.",
    href: "/",
  },
  {
    icon: ArrowUpRight,
    title: "Our services",
    text: "Preventative, restorative, cosmetic, and more.",
    href: "/services",
  },
  {
    icon: Phone,
    title: "Contact us",
    text: "Request a visit or call the office.",
    href: "/contact-us",
  },
];

export default function NotFound() {
  return (
    <>
      <section className="grain relative overflow-hidden bg-forest text-cream">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 88% 8%, rgba(217,232,184,0.16), transparent 65%), radial-gradient(ellipse 40% 55% at 4% 100%, rgba(148,74,46,0.15), transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute -top-32 -right-24 size-[34rem] rounded-full border border-cream/10" />
        <div className="pointer-events-none absolute right-16 bottom-0 hidden h-48 w-40 dot-grid text-cream/20 lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-20 sm:px-8 sm:pt-36 lg:pt-44 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Badge variant="light">404 · Page not found</Badge>
              <p className="mt-7 font-mono text-[0.6rem] tracking-[0.32em] text-lime/75 uppercase">
                Lost, but not far
              </p>
              <h1 className="mt-4 max-w-2xl text-balance font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.93] tracking-[-0.035em]">
                This page took
                <br />a wrong <span className="text-lime italic">turn</span>.
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-cream/75 sm:text-lg sm:leading-8">
                The link may be old, the page may have moved, or the address may have a typo.
                No harm done—let us point you somewhere useful.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="light">
                  <Link href="/">
                    <Home className="size-4" />
                    Back to home
                  </Link>
                </Button>
                <Button asChild variant="outline-light">
                  <Link href="/services">
                    Explore services
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-3 text-xs text-cream/70">
                <Search className="size-3.5 text-lime/70" />
                <span>Or search the site:</span>
                <SearchDialog className="border-cream/25 bg-cream/10 text-cream hover:border-cream/40 hover:bg-cream/15" />
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="arch-frame relative aspect-[4/5] overflow-hidden border border-cream/15 bg-gradient-to-br from-moss via-forest to-ink">
                <div className="absolute inset-0 dot-grid text-cream/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <LogoMark className="size-12 text-lime/70" />
                  <span className="mt-3 font-display text-[9rem] leading-none text-cream/90">
                    404
                  </span>
                  <span className="mt-2 font-mono text-[0.55rem] tracking-[0.24em] text-lime/65 uppercase">
                    Room not found
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 border-t border-cream/15 bg-ink/30 px-5 py-4 backdrop-blur-md">
                  <p className="font-mono text-[0.52rem] tracking-[0.18em] text-lime/70 uppercase">
                    West Hills Dental
                  </p>
                  <p className="mt-1 font-display text-xl text-cream">Still here to help.</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 -z-10 size-24 rounded-full border border-lime/20" />
              <div className="absolute -right-3 -bottom-6 -z-10 size-32 rounded-full bg-copper/10 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label-mono text-moss">Popular places</span>
              <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
                Try one of these instead.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted sm:text-right">
              Still stuck? Call the office at{" "}
              <Link href={site.phoneHref} className="font-medium text-forest hover:underline">
                {site.phone}
              </Link>
              .
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:bg-lime/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl border border-forest/10 bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl text-ink">{link.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-muted">{link.text}</p>
                  <span className="mt-5 flex items-center justify-between border-t border-forest/10 pt-4 text-xs font-medium text-forest">
                    Go there
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
