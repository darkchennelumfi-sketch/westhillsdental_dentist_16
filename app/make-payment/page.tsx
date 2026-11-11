import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  CreditCard,
  LockKeyhole,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { PaymentRequestForm } from "@/components/payment-request-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Make a Payment",
  description:
    "Pay your West Hills Dental balance by phone, or request a secure payment link from our Minot front office.",
  alternates: { canonical: "/make-payment" },
};

const waysToPay: {
  icon: LucideIcon;
  title: string;
  text: string;
  action?: string;
  href?: string;
}[] = [
  {
    icon: Phone,
    title: "Pay by phone",
    text: "Call our front office during open hours. We will confirm the balance and take your payment directly.",
    action: site.phone,
    href: site.phoneHref,
  },
  {
    icon: CreditCard,
    title: "Request a secure link",
    text: "Use the form on this page and our team will follow up with the next step for a secure payment link.",
  },
  {
    icon: Wallet,
    title: "Stop by the office",
    text: "Prefer to pay in person? Visit us at 2615 Elk Drive, Suite 2 during regular office hours.",
    action: "Get directions",
    href: site.mapsUrl,
  },
];

const safety = [
  {
    icon: LockKeyhole,
    title: "No card numbers here",
    text: "This website never asks for card or bank details. Payment information should only be shared directly with our office.",
  },
  {
    icon: ShieldCheck,
    title: "We verify first",
    text: "When we follow up, our team will confirm who you are and what the balance is for before sending a payment link.",
  },
  {
    icon: MessageCircle,
    title: "A real person helps",
    text: "If something about a statement does not look right, call us. We will walk through it with you.",
  },
];

export default function MakePaymentPage() {
  const billingFaqs = faqs.filter((faq) => faq.category === "Insurance & payment");

  return (
    <>
      <PageHero
        eyebrow="Make a payment"
        title={
          <>
            Payments,
            <br />
            without the <span className="text-lime italic">runaround</span>.
          </>
        }
        description="Pay a balance by phone or ask our front office for a secure payment link. Simple, direct, and handled by a real person."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">Pay by phone</span>
            <p className="mt-4 font-display text-3xl leading-none text-cream">{site.phone}</p>
            <p className="mt-3 flex items-center gap-2 text-xs text-cream/70">
              <Clock className="size-3.5 text-lime" />
              {site.hours[0].days}
            </p>
            <p className="mt-1 pl-5 font-mono text-[0.68rem] tracking-wide text-cream/70">
              {site.hours[0].time}
            </p>
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-cream/[0.06] p-3 text-xs leading-5 text-cream/70">
              <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-lime" />
              We will never ask for card details by email or text.
            </div>
            <Button asChild variant="light" className="mt-5 w-full">
              <Link href={site.phoneHref}>
                <Phone className="size-4" />
                Call the office
              </Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href={site.phoneHref}>
              <Phone className="size-4" />
              Pay by phone
            </Link>
          </Button>
          <Button asChild variant="outline-light">
            <Link href="/insurance-and-financing">
              Insurance & financing
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute top-16 -right-24 size-[24rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Ways to pay"
                  title="Choose what feels easiest."
                  description="There is no wrong way to take care of a balance. Pick the option that works for you, and we will handle the rest."
                />
              </Reveal>
              <div className="mt-9 grid gap-4">
                {waysToPay.map((way, index) => {
                  const Icon = way.icon;
                  const content = (
                    <>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-forest/10 bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-display text-2xl text-ink">{way.title}</span>
                        <span className="mt-1.5 block text-sm leading-6 text-muted">
                          {way.text}
                        </span>
                        {way.action ? (
                          <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-forest">
                            {way.action}
                            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                        ) : null}
                      </span>
                    </>
                  );

                  return (
                    <Reveal key={way.title} delay={index * 0.07}>
                      {way.href ? (
                        <Link
                          href={way.href}
                          target={way.href.startsWith("http") ? "_blank" : undefined}
                          rel={way.href.startsWith("http") ? "noreferrer" : undefined}
                          className="group flex items-start gap-5 rounded-[1.5rem] border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:bg-lime/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream sm:p-6"
                        >
                          {content}
                        </Link>
                      ) : (
                        <div className="group flex items-start gap-5 rounded-[1.5rem] border border-dashed border-forest/20 bg-lime/15 p-5 sm:p-6">
                          {content}
                        </div>
                      )}
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={0.15}>
                <div className="mt-8 rounded-[1.5rem] border border-forest/10 bg-paper p-5">
                  <div className="flex items-center gap-2">
                    <Check className="size-4 text-forest" />
                    <span className="label-mono text-moss">Before you request a link</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-xs leading-5 text-muted">
                    <li>Have your statement or account note nearby, if you have one.</li>
                    <li>Use the phone number or email you would like us to reach you at.</li>
                    <li>Please do not include card or bank numbers in the form.</li>
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-32">
                <PaymentRequestForm />
                <p className="mt-4 text-center text-xs leading-5 text-muted">
                  Need same-day help?{" "}
                  <Link
                    href={site.phoneHref}
                    className="font-medium text-forest underline-offset-4 hover:underline"
                  >
                    Call {site.phone}
                  </Link>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-20 text-cream sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 60% at 88% 12%, rgba(217,232,184,0.14), transparent 65%), radial-gradient(ellipse 40% 60% at 5% 100%, rgba(148,74,46,0.14), transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Payment safety"
              title="Handled with care—and a little caution."
              description="A few simple habits keep billing simple. When in doubt, call us directly."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {safety.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="h-full rounded-[1.5rem] border border-cream/12 bg-cream/[0.05] p-6 backdrop-blur-md">
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-cream/10 bg-cream/5 text-lime">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-cream/70">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Billing questions"
                title="A statement question, answered."
                description="For anything specific to your account, call our front office. We will pull up the details with you."
              />
              <Button asChild variant="secondary" className="mt-7">
                <Link href="/contact-us">
                  Contact the office
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-line bg-paper px-5 py-2 sm:px-7 sm:py-3">
                <FaqAccordion items={billingFaqs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Billing help"
        title="A balance should never feel like a mystery."
        description="Call our front office or send a request. We will help you understand the next step."
      />
    </>
  );
}
