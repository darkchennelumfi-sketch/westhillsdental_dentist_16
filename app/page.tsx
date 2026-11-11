import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Check,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { CountUp } from "@/components/count-up";
import { FaqAccordion } from "@/components/faq-accordion";
import { HomeHero } from "@/components/home-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { ServiceMarquee } from "@/components/marquee";
import { TeamPreview } from "@/components/team-preview";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/faqs";
import { site, stats } from "@/lib/site";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "West Hills Dental | Family Dentist in Minot, ND",
  description: site.description,
  alternates: { canonical: "/" },
};

const values = [
  {
    icon: MessageCircle,
    title: "Care that starts with listening",
    text: "Your concerns shape the visit, not the other way around. We make room for questions.",
  },
  {
    icon: ShieldCheck,
    title: "Plain-language answers",
    text: "We explain what we see, what it means, and what comes next—without the jargon.",
  },
  {
    icon: HeartHandshake,
    title: "A team that remembers you",
    text: "From the front office to the chair, you are known by name and welcomed back.",
  },
];

const firstVisit = [
  {
    number: "01",
    title: "Request a time",
    text: "Call or send a request through our site. Our front office will confirm a time that works for you.",
  },
  {
    number: "02",
    title: "Meet your team",
    text: "We listen, review your health history, and take a careful look at what is going on.",
  },
  {
    number: "03",
    title: "Leave with a plan",
    text: "You will know what is healthy, what needs attention, and what the next step looks like.",
  },
];

export default function HomePage() {
  const featuredFaqs = faqs.filter((faq) => faq.featured).slice(0, 4);

  return (
    <>
      <HomeHero />
      <ServiceMarquee />

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute top-32 -right-24 size-[26rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="The West Hills difference"
                title={
                  <>
                    Modern dentistry,
                    <br />
                    without the cold clinical feel.
                  </>
                }
                description="We take the time to listen, explain, and plan. You are not a chart number here—you are a neighbor. That is the part of our practice we are proudest of."
              />
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild variant="secondary">
                  <Link href="/meet-our-doctor">
                    Meet Dr. Ness
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <span className="font-mono text-[0.58rem] tracking-[0.16em] text-muted uppercase">
                  Family care · Minot, ND
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="overflow-hidden rounded-[1.75rem] border border-line bg-paper">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="group flex gap-5 border-b border-line/80 p-6 transition-colors last:border-b-0 hover:bg-lime/15 sm:p-7"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-forest/10 bg-cream text-forest transition-colors group-hover:border-forest group-hover:bg-forest group-hover:text-cream">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-[0.55rem] text-moss">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="font-display text-2xl text-ink">{value.title}</h3>
                        </div>
                        <p className="mt-1.5 text-sm leading-6 text-muted">{value.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16 lg:mt-20">
            <div className="grid grid-cols-2 gap-y-8 border-t border-forest/10 pt-8 sm:grid-cols-4 sm:divide-x sm:divide-forest/10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`px-0 sm:px-6 ${index === 0 ? "sm:pl-0" : ""}`}
                >
                  <div className="flex items-baseline gap-1">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-display text-[3.2rem] leading-none text-forest sm:text-5xl"
                    />
                  </div>
                  <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper py-20 sm:py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal>
              <SectionHeading
                eyebrow="What we do"
                title={
                  <>
                    Care for every chapter
                    <br />
                    of your smile.
                  </>
                }
                description="From a child's first check-up to a confident smile refresh, our services meet you where you are."
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:pb-2">
              <Button asChild variant="secondary">
                <Link href="/services">
                  Explore all services
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal className="mt-12" delay={0.08}>
            <ServiceGrid />
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 45% 60% at 15% 20%, rgba(217,232,184,0.12), transparent 65%), radial-gradient(ellipse 40% 60% at 95% 90%, rgba(148,74,46,0.12), transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute top-1/2 -right-40 size-[34rem] -translate-y-1/2 rounded-full border border-cream/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="arch-frame relative aspect-[4/5] overflow-hidden border border-cream/15 bg-gradient-to-br from-moss via-forest to-ink">
                  <div className="absolute inset-0 dot-grid text-cream/10" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <LogoMark className="size-16 text-lime/80" />
                    <span className="mt-6 font-display text-[7rem] leading-none text-cream/90">
                      SN
                    </span>
                    <span className="mt-2 font-mono text-[0.58rem] tracking-[0.28em] text-lime/70 uppercase">
                      Dr. Stephanie Ness
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 border-t border-cream/15 bg-ink/30 px-5 py-4 backdrop-blur-md">
                    <p className="font-mono text-[0.55rem] tracking-[0.18em] text-lime/75 uppercase">
                      West Hills Dental
                    </p>
                    <p className="mt-1 font-display text-xl text-cream">Dentist · Minot, ND</p>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 -z-10 size-24 rounded-full border border-lime/20" />
                <div className="absolute -right-3 -bottom-6 -z-10 size-32 rounded-full bg-copper/10 blur-2xl" />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="label-mono flex items-center gap-3 text-lime/80">
                <span className="h-px w-8 bg-lime/40" />
                Meet your dentist
              </span>
              <h2 className="mt-5 max-w-2xl text-balance font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[1.0]">
                A dentist who sees the whole person.
              </h2>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-cream/75">
                Dr. Stephanie Ness leads West Hills Dental with a focus on full-service family
                care. The goal is simple: modern dentistry delivered with the kind of attention
                that makes you feel at ease.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Family dentistry for every age",
                  "A calm, explanatory approach",
                  "Care planned around your life",
                  "A team that knows your name",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-cream/75">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime/15 text-lime">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="light">
                  <Link href="/meet-our-doctor">
                    Meet Dr. Ness
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline-light">
                  <Link href="/office-tour">
                    Tour the office
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute top-10 -left-32 size-[24rem] rounded-full bg-lime/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="The people behind the care"
                title={
                  <>
                    Seven friendly faces.
                    <br />
                    One caring team.
                  </>
                }
                description="Hygienists, assistants, and front office teammates who make the visit feel less like an appointment and more like a check-in with people who know you."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="relative max-w-lg border-l border-forest/15 pl-6 lg:ml-auto lg:pl-8">
                <span className="absolute -top-6 left-6 font-display text-7xl leading-none text-copper/20">
                  “
                </span>
                <blockquote className="relative font-display text-2xl leading-snug text-forest sm:text-[1.65rem]">
                  Every appointment is not just a check-up, but a fun, informative experience.
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-copper/50" />
                  <span className="font-mono text-[0.58rem] tracking-[0.16em] text-muted uppercase">
                    Melinda · Registered Dental Hygienist
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal className="mt-12 sm:mt-14" delay={0.08}>
            <TeamPreview />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-sand/45 py-20 sm:py-24 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-[28rem] rounded-full border border-forest/[0.07]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Your first visit"
                  title="A simple start, from the first hello."
                  description="No mystery, no pressure. Here is what a first visit at West Hills Dental looks like."
                />
              </Reveal>
              <div className="mt-10 grid gap-0 sm:grid-cols-3 sm:gap-6">
                {firstVisit.map((step, index) => (
                  <Reveal key={step.number} delay={index * 0.08}>
                    <div className="relative border-t border-forest/15 pt-5">
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] text-copper">
                        {step.number}
                      </span>
                      <h3 className="mt-3 font-display text-2xl text-ink">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <Link href="/new-patients">
                      New patient guide
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Link
                    href="/faqs"
                    className="link-underline text-sm font-medium text-forest"
                  >
                    Read common questions
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-paper p-6 shadow-[0_30px_60px_-40px_rgba(16,39,28,0.4)] sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="label-mono text-moss">Find us in Minot</span>
                  <MapPin className="size-4 text-copper" />
                </div>
                <p className="mt-5 font-display text-[2.3rem] leading-[1.05] text-ink">
                  {site.address.street}
                  <br />
                  <span className="text-muted">{site.address.suite}</span>
                </p>
                <p className="mt-2 text-sm text-muted">
                  {site.address.city}, {site.address.state} {site.address.zip}
                </p>

                <div className="mt-6 rounded-2xl bg-cream/80 p-4">
                  <p className="flex items-center gap-2 text-xs font-medium text-forest">
                    <CalendarCheck className="size-3.5" />
                    Office hours
                  </p>
                  <p className="mt-2 text-sm text-ink">{site.hours[0].days}</p>
                  <p className="font-mono text-[0.65rem] tracking-wide text-muted">
                    {site.hours[0].time}
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-2 text-sm">
                  <Link
                    href={site.phoneHref}
                    className="flex items-center gap-2 text-forest transition-colors hover:text-copper"
                  >
                    <Phone className="size-4" />
                    {site.phone}
                  </Link>
                  <Link
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-forest transition-colors hover:text-copper"
                  >
                    <MapPin className="size-4" />
                    Get directions
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
                <Link
                  href="/office-tour"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-moss transition-colors hover:text-forest"
                >
                  See what to expect
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <div className="pointer-events-none absolute -top-12 -right-12 size-32 rounded-full border border-forest/[0.06]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Good to know"
                title={
                  <>
                    Good questions,
                    <br />
                    straight answers.
                  </>
                }
                description="A few things patients ask us most often. If yours is not here, our front office is happy to help."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild variant="secondary">
                  <Link href="/faqs">
                    All FAQs
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost">
                  <Link href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </Link>
                </Button>
              </div>

              <div className="mt-10 rounded-2xl border border-line bg-paper p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-copper" />
                  <span className="label-mono text-moss">Insurance, simplified</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  We help you understand your benefits and claims. Call us with your plan
                  details and we will walk through it together.
                </p>
                <Link
                  href="/insurance-and-financing"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-forest hover:text-copper"
                >
                  Insurance & financing
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-line bg-paper px-5 py-2 sm:px-7 sm:py-3">
                <FaqAccordion items={featuredFaqs} defaultOpen="faq-0" />
              </div>
              <p className="mt-4 text-xs text-muted">
                Showing a few of our most-asked questions.{" "}
                <Link href="/faqs" className="font-medium text-forest hover:underline">
                  See all FAQs
                </Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
