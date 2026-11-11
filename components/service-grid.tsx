import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { services, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

const toneClasses: Record<Service["tone"], string> = {
  lime: "border-lime/70 bg-lime/45 text-ink hover:bg-lime/60",
  sage: "border-sage/40 bg-sage/25 text-ink hover:bg-sage/35",
  copper: "border-copper/20 bg-copper/[0.07] text-ink hover:bg-copper/[0.12]",
  sand: "border-sand bg-sand/55 text-ink hover:bg-sand/75",
  moss: "border-forest bg-forest text-cream hover:bg-ink",
  rose: "border-rose/60 bg-rose/35 text-ink hover:bg-rose/50",
};

const spanClasses = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-12",
];

export function ServiceGrid({ items = services }: { items?: readonly Service[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
      {items.map((service, index) => {
        const dark = service.tone === "moss";
        const isWide = index === 0 || index === 1;
        const isFull = index === 5;

        return (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className={cn(
              "group relative flex overflow-hidden rounded-[1.75rem] border p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(16,39,28,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:p-7",
              toneClasses[service.tone],
              spanClasses[index] ?? "lg:col-span-4",
              isFull
                ? "flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
                : "flex-col justify-between",
              isWide ? "min-h-[19rem]" : "min-h-[17rem]",
            )}
          >
            <div className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full border border-current/10 transition-transform duration-700 group-hover:scale-110" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "inline-flex size-12 items-center justify-center rounded-2xl border",
                    dark
                      ? "border-cream/15 bg-cream/10 text-lime"
                      : "border-forest/10 bg-paper/60 text-forest",
                  )}
                >
                  <ServiceIcon icon={service.icon} />
                </span>
                <span
                  className={cn(
                    "font-mono text-[0.6rem] tracking-[0.18em]",
                    dark ? "text-cream/70" : "text-forest/80",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className={cn(
                  "mt-8 font-display leading-[1.03]",
                  isFull ? "text-3xl sm:text-4xl" : isWide ? "text-4xl sm:text-[2.6rem]" : "text-3xl",
                )}
              >
                {service.name}
              </h3>
              <p
                className={cn(
                  "mt-3 max-w-sm text-sm leading-6",
                  dark ? "text-cream/75" : "text-ink/75",
                )}
              >
                {service.summary}
              </p>
            </div>
            <div
              className={cn(
                "relative mt-8 flex items-center justify-between gap-4",
                isFull ? "sm:mt-0 sm:shrink-0" : "",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[0.58rem] tracking-[0.16em] uppercase",
                  dark ? "text-lime/70" : "text-forest/80",
                )}
              >
                {service.tagline}
              </span>
              <span
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                  dark
                    ? "border-cream/20 bg-cream/5 text-cream group-hover:bg-lime group-hover:text-ink"
                    : "border-forest/15 bg-paper/40 text-forest group-hover:bg-forest group-hover:text-cream",
                )}
              >
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
