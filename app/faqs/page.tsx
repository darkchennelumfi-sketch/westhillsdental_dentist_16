import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqExplorer } from "@/components/faq-explorer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { faqCategories, faqs } from "@/lib/faqs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about appointments, new patients, insurance, comfort, and visiting West Hills Dental in Minot, ND.",
  alternates: { canonical: "/faqs" },
};

const helpOptions = [
  {
    icon: Phone,
    title: "Call the front office",
    text: "The fastest way to get a real answer. We are here Monday through Thursday.",
    action: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Mail,
    title: "Send an email",
    text: "A good choice for general questions, billing notes, or records requests.",
    action: site.email,
    href: site.emailHref,
  },
  {
    icon: MessageCircle,
    title: "Request a visit",
    text: "Tell us what you need and we will follow up to find a time that works.",
    action: "Start a request",
    href: "/contact-us",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqsPage() {
  const categories = faqCategories.filter(
    (category): category is Exclude<(typeof faqCategories)[number], "All"> =>
      category !== "All",
  );

  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title={
          <>
            Good questions
            <br />
            are always <span className="text-lime italic">welcome</span>.
          </>
        }
        description="From first visits to insurance to feeling nervous in the chair, here are the answers we give most often. Search, filter, or just scroll."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">At a glance</span>
            <p className="mt-4 font-display text-6xl leading-none text-cream">
              {String(faqs.length).padStart(2, "0")}
            </p>
            <p className="mt-2 text-sm text-cream/70">answers across {categories.length} topics</p>
            <ul className="mt-5 space-y-2 border-t border-cream/10 pt-4">
              {categories.map((category) => {
                const count = faqs.filter((faq) => faq.category === category).length;
                return (
                  <li
                    key={category}
                    className="flex items-center justify-between gap-3 text-xs text-cream/75"
                  >
                    {category}
                    <span className="font-mono text-[0.58rem] text-lime/75">
                      {String(count).padStart(2, "0")}
                    </span>
                  </li>
                );
              })}
            </ul>
            <div className="mt-5 border-t border-cream/10 pt-4">
              <p className="text-xs leading-5 text-cream/70">
                Do not see your question? Call us. A real person answers.
              </p>
              <Button asChild variant="light" className="mt-3 w-full">
                <Link href={site.phoneHref}>
                  <Phone className="size-4" />
                  {site.phone}
                </Link>
              </Button>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/contact-us">
              Ask us directly
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
        <div className="pointer-events-none absolute top-16 -right-24 size-[22rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="label-mono text-moss">Browse the answers</span>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-ink">
                  Find what you need.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted sm:text-right">
                Filter by topic or search for a word like “insurance,” “children,” or
                “reschedule.”
              </p>
            </div>
          </Reveal>
          <Reveal className="mt-10" delay={0.08}>
            <FaqExplorer items={faqs} />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="label-mono text-moss">Still wondering?</span>
                <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-ink">
                  Ask a real person.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted sm:text-right">
                Some questions are easier to talk through. We are happy to help.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {helpOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <Reveal key={option.title} delay={index * 0.07}>
                  <Link
                    href={option.href}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-line bg-cream/60 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:bg-lime/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-paper"
                  >
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-forest/10 bg-paper text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-ink">{option.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-muted">{option.text}</p>
                    <span className="mt-5 flex items-center justify-between gap-3 border-t border-forest/10 pt-4 text-xs font-medium text-forest">
                      <span className="truncate">{option.action}</span>
                      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-forest/10 bg-lime/25 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-0.5 size-5 shrink-0 text-copper" />
                <p className="text-sm leading-6 text-forest/80">
                  Please do not send medical details or payment information through website
                  forms. We will review your history privately at your visit.
                </p>
              </div>
              <Button asChild variant="secondary" size="sm" className="shrink-0">
                <Link href="/privacy-policy">Privacy policy</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="We are here"
        title="A question is a good place to start."
        description="Call, email, or send a request. Our team will help you find the answer and the right next step."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
