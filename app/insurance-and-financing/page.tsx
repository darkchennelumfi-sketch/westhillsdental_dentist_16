import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ClipboardCheck,
  CreditCard,
  FileText,
  MessageCircle,
  Phone,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance & Financing",
  description:
    "Help understanding dental insurance benefits, claims, estimates, and payment options at West Hills Dental in Minot, ND.",
  alternates: { canonical: "/insurance-and-financing" },
};

const bringToCall = [
  "Your dental insurance card",
  "The subscriber's name and date of birth",
  "Your plan's customer service number",
  "Any recent explanation of benefits",
];

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Share your plan",
    text: "Call us with your carrier, plan name, and member ID. A photo of the front and back of your card is enough to get started.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "We check benefits",
    text: "Our front office reviews coverage, waiting periods, and frequency limits so we can explain what your plan may help with.",
  },
  {
    icon: FileText,
    number: "03",
    title: "You get an estimate",
    text: "Before treatment begins, we walk through the expected cost and your estimated portion. No surprise balance later.",
  },
  {
    icon: ReceiptText,
    number: "04",
    title: "We follow the claim",
    text: "We submit claims and help sort out the paperwork. If something is delayed or denied, we will help you understand why.",
  },
];

const options = [
  {
    icon: Phone,
    title: "Pay by phone",
    text: "Call our front office at (701) 837-1050 during office hours to make a payment with our team.",
    actionLabel: "Call the office",
    href: site.phoneHref,
  },
  {
    icon: CreditCard,
    title: "Request a payment link",
    text: "Send a secure request and our team will follow up with the next step for paying your balance.",
    actionLabel: "Request a link",
    href: "/make-payment",
  },
  {
    icon: CalendarCheck,
    title: "Ask about a plan",
    text: "For larger treatment plans, ask about flexible payment options before treatment begins.",
    actionLabel: "Start a conversation",
    href: "/contact-us",
  },
];

export default function InsurancePage() {
  const billingFaqs = faqs.filter((faq) => faq.category === "Insurance & payment");

  return (
    <>
      <PageHero
        eyebrow="Insurance & financing"
        title={
          <>
            Benefits, explained
            <br />
            in plain <span className="text-lime italic">language</span>.
          </>
        }
        description="Dental insurance can feel like a maze. Our front office will help you understand your benefits, plan an estimate, and follow your claim from start to finish."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">Have this handy</span>
            <ul className="mt-5 space-y-3">
              {bringToCall.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <Check className="size-2.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-cream/10 pt-4 text-xs leading-6 text-cream/70">
              Not sure what you have? Call us. We can often look up the basics with you.
            </div>
            <Button asChild variant="light" className="mt-4 w-full">
              <Link href={site.phoneHref}>
                <Phone className="size-4" />
                {site.phone}
              </Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/contact-us">
              Ask about your plan
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline-light">
            <Link href="/make-payment">
              Make a payment
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute top-16 -right-24 size-[24rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="How it works"
                  title="A clearer path through your benefits."
                  description="You do not have to become an insurance expert. That is our job. Here is how we keep the financial side of care understandable."
                />
                <div className="mt-8 rounded-2xl border border-forest/10 bg-lime/25 p-5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-forest" />
                    <span className="label-mono text-forest/80">A helpful note</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-forest/80">
                    An estimate is based on the benefits your plan shares with us. Final
                    coverage is determined by your insurer, so the amount you owe can differ
                    if your plan processes a claim differently.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.number} delay={index * 0.06}>
                    <div className="group flex gap-5 rounded-[1.5rem] border border-line bg-paper p-5 transition-colors hover:border-forest/20 hover:bg-lime/15 sm:p-6">
                      <div className="flex flex-col items-center gap-2">
                        <span className="flex size-11 items-center justify-center rounded-2xl border border-forest/10 bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                          <Icon className="size-5" strokeWidth={1.5} />
                        </span>
                        <span className="font-mono text-[0.55rem] tracking-[0.18em] text-copper">
                          {step.number}
                        </span>
                      </div>
                      <div>
                        <h2 className="font-display text-2xl text-ink">{step.title}</h2>
                        <p className="mt-1.5 text-sm leading-6 text-muted">{step.text}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Good questions"
              title="Coverage is personal. So is our help."
              description="Every plan is a little different. These are the things we hear most often—and the answers we give at the front desk."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Is my plan accepted?",
                text: "We work with dental insurance benefits and help patients understand their claims. Call us with your carrier and plan details and we will review what we can.",
              },
              {
                title: "What will I owe?",
                text: "Before treatment begins, we walk through an estimate of your portion. It is never a bill, but it helps you plan with confidence.",
              },
              {
                title: "Can I use HSA or FSA funds?",
                text: "Many dental services are eligible for health savings and flexible spending accounts. Check your plan rules, and ask us if you need a receipt or statement.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="h-full rounded-[1.5rem] border border-line bg-cream/60 p-6">
                  <span className="font-mono text-[0.58rem] tracking-[0.2em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Payment options"
                title="A way to pay that works for you."
                description="Pay by phone, request a secure link, or talk with us about a larger treatment plan. Our front office will walk you through the options."
              />
              <div className="mt-8 rounded-2xl border border-line bg-paper p-5">
                <p className="label-mono text-moss">Office hours</p>
                <p className="mt-3 text-sm text-ink">{site.hours[0].days}</p>
                <p className="font-mono text-[0.68rem] tracking-wide text-muted">
                  {site.hours[0].time}
                </p>
                <p className="mt-3 text-xs leading-5 text-muted">
                  Phone payments are handled by our front office during open hours.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {options.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Reveal key={option.title} delay={index * 0.07}>
                    <Link
                      href={option.href}
                      className="group flex items-start gap-5 rounded-[1.5rem] border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:bg-lime/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-forest/10 bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-2xl text-ink">{option.title}</h3>
                        <p className="mt-1.5 text-sm leading-6 text-muted">{option.text}</p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-forest">
                          {option.actionLabel}
                          <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Billing questions"
                title="The money questions, answered."
                description="If your question is not here, call our front office. We will help you sort it out."
              />
              <Button asChild variant="secondary" className="mt-7">
                <Link href="/faqs">
                  All FAQs
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-line bg-cream/50 px-5 py-2 sm:px-7 sm:py-3">
                <FaqAccordion items={billingFaqs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Insurance help"
        title="Let us take the insurance question off your plate."
        description="Call with your plan details or send a request. Our front office will help you understand the next step."
      />
    </>
  );
}
