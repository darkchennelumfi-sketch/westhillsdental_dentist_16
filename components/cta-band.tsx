import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CtaBand({
  eyebrow = "Your next visit",
  title = "Ready for a visit that feels like care?",
  description = "Tell us what you need and we will help you find the right next step. New patients are always welcome.",
}: CtaBandProps) {
  return (
    <section className="grain relative overflow-hidden bg-forest text-cream">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 70% at 78% 15%, rgba(217,232,184,0.16), transparent 65%), radial-gradient(ellipse 35% 60% at 15% 95%, rgba(148,74,46,0.16), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full border border-cream/10" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-28">
        <div className="max-w-3xl">
          <span className="label-mono flex items-center gap-3 text-lime/80">
            <span className="h-px w-8 bg-lime/40" />
            {eyebrow}
          </span>
          <h2 className="mt-5 text-balance font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[0.98]">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-cream/75">
            {description}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
          <Button asChild size="lg" variant="light">
            <Link href="/contact-us">
              Request a visit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline-light">
            <Link href={site.phoneHref}>
              <Phone className="size-4" />
              {site.phone}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
