import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

function VisitCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
      <div className="absolute -top-10 -right-10 size-36 rounded-full border border-cream/10" />
      <div className="absolute -right-2 -bottom-14 size-40 rounded-full bg-lime/10 blur-2xl" />
      <div className="relative">
        <span className="label-mono text-lime/70">Visit us in Minot</span>
        <p className="mt-5 flex items-start gap-3 text-sm leading-6 text-cream/85">
          <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
          <span>
            {site.address.street}, {site.address.suite}
            <br />
            {site.address.city}, {site.address.state} {site.address.zip}
          </span>
        </p>
        <p className="mt-4 flex items-start gap-3 text-sm leading-6 text-cream/85">
          <Clock className="mt-0.5 size-4 shrink-0 text-lime" />
          <span>{site.hours[0].days}</span>
        </p>
        <p className="mt-1 pl-7 font-mono text-xs tracking-wide text-cream/75">
          {site.hours[0].time}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-cream/10 pt-5">
          <Link
            href={site.phoneHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-cream transition-colors hover:text-lime"
          >
            <Phone className="size-3.5" />
            {site.phone}
          </Link>
          <Link
            href="/contact-us"
            className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-lime/90 transition-colors hover:text-lime"
          >
            Book a visit
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "grain relative overflow-hidden bg-forest text-cream",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 85% 8%, rgba(217,232,184,0.18), transparent 65%), radial-gradient(ellipse 40% 55% at 5% 100%, rgba(148,74,46,0.14), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -right-24 size-[34rem] rounded-full border border-cream/10" />
      <div className="pointer-events-none absolute -top-12 -right-6 size-[22rem] rounded-full border border-cream/[0.06]" />
      <div className="pointer-events-none absolute right-16 bottom-0 hidden h-48 w-40 dot-grid text-cream/20 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-32 pb-16 sm:px-8 sm:pt-36 lg:pt-44 lg:pb-24">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div>
            <Badge variant="light">{eyebrow}</Badge>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-[clamp(2.9rem,7vw,6.25rem)] leading-[0.93] tracking-[-0.035em]">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-cream/75 sm:text-lg sm:leading-8">
              {description}
            </p>
            {children ? <div className="mt-9">{children}</div> : null}
          </div>
          <div className="lg:pb-2">{aside ?? <VisitCard />}</div>
        </div>
      </div>
    </section>
  );
}
