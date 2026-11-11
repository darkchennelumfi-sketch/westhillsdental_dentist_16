import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  ClipboardList,
  CreditCard,
  HeartHandshake,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
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
  title: "New Patients",
  description:
    "What to expect at your first visit to West Hills Dental in Minot, ND—what to bring, how the visit works, and how we help with insurance.",
  alternates: { canonical: "/new-patients" },
};

const bring = [
  "A photo ID",
  "Your dental insurance card",
  "A list of medications and allergies",
  "Recent dental records or X-rays, if you have them",
];

const firstVisit = [
  {
    icon: MessageCircle,
    title: "We say hello",
    text: "Our front office welcomes you, checks you in, and makes sure your information is up to date.",
  },
  {
    icon: ClipboardList,
    title: "We listen",
    text: "We review your health history and talk about what brought you in—and anything you are worried about.",
  },
  {
    icon: Sparkles,
    title: "We take a look",
    text: "A careful exam, with imaging only if it is needed, helps us understand what is healthy and what may need attention.",
  },
  {
    icon: HeartHandshake,
    title: "We make a plan",
    text: "You leave knowing what we found, what comes next, and what it means for you. Questions are always welcome.",
  },
];

export default function NewPatientsPage() {
  const patientFaqs = faqs
    .filter((faq) => faq.category === "New patients" || faq.category === "Appointments")
    .slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow="New patients"
        title={
          <>
            Your first visit,
            <br />
            without the <span className="text-lime italic">guesswork</span>.
          </>
        }
        description="A new dental home should feel like a relief, not a hurdle. Here is everything you need to know before your first visit to West Hills Dental."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">What to bring</span>
            <ul className="mt-5 space-y-3">
              {bring.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-cream/70">
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                    <Check className="size-2.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild variant="light" className="mt-5 w-full">
              <Link href="/contact-us">
                Request a visit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/contact-us">
              Start your first visit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline-light">
            <Link href={site.phoneHref}>
              <Phone className="size-4" />
              {site.phone}
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="Before you come in"
                title="A little prep, a smoother visit."
                description="Nothing complicated. Bring the basics and we will take care of the rest. If you forget something, do not worry—we can sort it out."
              />
              <div className="mt-8 rounded-[1.5rem] border border-line bg-paper p-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-lime/50 text-forest">
                    <CalendarCheck className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Not sure what to book?</p>
                    <p className="text-xs text-muted">Call us. We will help you choose.</p>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild size="sm">
                    <Link href="/contact-us">Send a request</Link>
                  </Button>
                  <Button asChild size="sm" variant="ghost">
                    <Link href={site.phoneHref}>
                      <Phone className="size-3.5" />
                      {site.phone}
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[1.75rem] border border-line bg-paper p-6 sm:p-8">
                <span className="label-mono text-moss">What to bring</span>
                <ul className="mt-5 divide-y divide-line/80">
                  {bring.map((item, index) => (
                    <li key={item} className="flex items-center gap-4 py-3.5">
                      <span className="font-mono text-[0.58rem] text-copper">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-ink/75">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl bg-lime/25 p-3 text-xs leading-5 text-forest/80">
                  Please do not include medical details in website forms. We will review your
                  history privately at your visit.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-sand/45 py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-[26rem] rounded-full border border-forest/[0.07]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Your first visit"
              title="What actually happens."
              description="Four simple steps, no surprises. The pace is yours, and you can ask anything along the way."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {firstVisit.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={index * 0.07}>
                  <div className="relative h-full rounded-[1.5rem] border border-forest/10 bg-paper p-5">
                    <span className="font-mono text-[0.58rem] tracking-[0.2em] text-copper">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-4 flex size-10 items-center justify-center rounded-xl bg-cream text-forest">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-4 font-display text-2xl text-ink">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[1.75rem] border border-line bg-paper p-6 sm:p-8">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-lime/50 text-forest">
                  <ShieldCheck className="size-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 font-display text-3xl text-ink">Insurance, without the fog</h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  We help patients understand their dental benefits and claims. Bring your
                  insurance card and we will review the details together. Coverage varies by
                  plan, so a quick call ahead can help.
                </p>
                <Link
                  href="/insurance-and-financing"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-copper"
                >
                  Insurance & financing
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-[1.75rem] border border-line bg-forest p-6 text-cream sm:p-8">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-cream/10 text-lime">
                  <CreditCard className="size-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 font-display text-3xl">Payment, made simple</h2>
                <p className="mt-3 text-sm leading-7 text-cream/75">
                  Pay by phone or request a secure payment link. If you have a billing question,
                  our front office will help you sort it out.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild variant="light" size="sm">
                    <Link href="/make-payment">Make a payment</Link>
                  </Button>
                  <Button asChild variant="outline-light" size="sm">
                    <Link href={site.phoneHref}>
                      <Phone className="size-3.5" />
                      Call us
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="First-visit questions"
                title="A few things new patients ask."
                description="The practical stuff, answered. If you are wondering about something else, just call."
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
                <FaqAccordion items={patientFaqs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Welcome to West Hills"
        title="We are glad you are here."
        description="Request your first visit and let us take care of the rest. New patients are always welcome."
      />
    </>
  );
}
