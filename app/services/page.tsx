import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Preventative, restorative, cosmetic, children's, implant, and emergency dentistry at West Hills Dental in Minot, ND.",
  alternates: { canonical: "/services" },
};

const startingPoints = [
  {
    icon: CalendarCheck,
    title: "Due for a check-up",
    text: "Start with a cleaning and exam. We will take a look, listen, and make a simple plan.",
    href: "/services/preventative-dentistry",
    label: "Preventative dentistry",
  },
  {
    icon: Stethoscope,
    title: "Something hurts",
    text: "Call us first. We will help you understand what to do and how soon you should be seen.",
    href: "/services/emergency-dentistry",
    label: "Emergency dentistry",
  },
  {
    icon: Sparkles,
    title: "Curious about a change",
    text: "Whitening, veneers, or a subtle refresh—start with a conversation about what you notice.",
    href: "/services/cosmetic-dentistry",
    label: "Cosmetic dentistry",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Every smile has
            <br />
            a next <span className="text-lime italic">step</span>.
          </>
        }
        description="Six areas of care, one connected team. Whether you need a routine visit or a bigger plan, we will help you find the right place to start."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">Care at West Hills</span>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-3 border-b border-cream/10 pb-2 text-sm text-cream/70 transition-colors hover:text-lime"
                  >
                    {service.name}
                    <ArrowUpRight className="size-3.5 text-cream/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime" />
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="light" className="mt-5 w-full">
              <Link href="/contact-us">
                Not sure? Ask us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/contact-us">
              Request a visit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline-light">
            <Link href="/new-patients">
              New patient guide
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute top-20 -right-24 size-[24rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Care, connected"
              title="One team. A full range of care."
              description="Our services are designed to work together. A cleaning can lead to an early catch; a consultation can turn a question into a plan. Nothing happens in isolation."
            />
          </Reveal>
          <Reveal className="mt-12" delay={0.08}>
            <ServiceGrid />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Where to start"
              title="Not sure what to book?"
              description="Pick the sentence that sounds most like you. We will help with the rest."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {startingPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={index * 0.08}>
                  <Link
                    href={point.href}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-forest/20 hover:bg-lime/20 hover:shadow-[0_25px_50px_-30px_rgba(16,39,28,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-forest/10 bg-paper text-forest">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-ink">{point.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{point.text}</p>
                    <span className="mt-5 flex items-center justify-between gap-3 border-t border-forest/10 pt-4 text-xs font-medium text-forest">
                      {point.label}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-10 rounded-[1.75rem] border border-line bg-paper p-6 sm:p-9 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <Reveal>
              <span className="label-mono text-moss">A note from the front office</span>
              <p className="mt-4 font-display text-3xl leading-snug text-ink sm:text-4xl">
                The phone call should be the easy part.
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                Tell us what is going on and what you are hoping for. We will help you choose
                the right visit, check your benefits, and answer the practical questions
                before you come in.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact-us">
                    Start a request
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href="/insurance-and-financing">
                    <MessageCircle className="size-4" />
                    Insurance help
                  </Link>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-lime/30 p-6">
                <p className="font-display text-2xl leading-snug text-forest">
                  “I also really enjoy battling insurance companies to make sure our patients’
                  claims are paid!”
                </p>
                <p className="mt-4 font-mono text-[0.58rem] tracking-[0.16em] text-forest/80 uppercase">
                  Glenda · Front Office
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let us help"
        title="Tell us what you need. We will find the right visit."
        description="Call the office or send a request. Our team will help you choose a service and a time."
      />
    </>
  );
}
