import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleAlert,
  Phone,
  Sparkles,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | West Hills Dental`,
      description: service.summary,
      url: `/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const words = service.name.split(" ");
  const firstWords = words.slice(0, -1).join(" ");
  const lastWord = words.at(-1) ?? service.name;
  const isEmergency = service.slug === "emergency-dentistry";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={`Services · ${service.shortName}`}
        title={
          <>
            {firstWords} <span className="text-lime italic">{lastWord}</span>
          </>
        }
        description={service.heroDescription}
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="flex size-12 items-center justify-center rounded-2xl border border-cream/10 bg-cream/10 text-lime">
              <ServiceIcon icon={service.icon} />
            </span>
            <p className="mt-5 font-mono text-[0.58rem] tracking-[0.18em] text-lime/70 uppercase">
              {service.tagline}
            </p>
            <p className="mt-2 font-display text-2xl leading-snug text-cream">
              Part of a connected plan for your smile.
            </p>
            <div className="mt-5 border-t border-cream/10 pt-4">
              <p className="text-xs text-cream/70">Not sure if this is the right visit?</p>
              <Button asChild variant="light" className="mt-3 w-full">
                <Link href="/contact-us">
                  Ask our team
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          {isEmergency ? (
            <Button asChild variant="light">
              <Link href={site.phoneHref}>
                <Phone className="size-4" />
                Call {site.phone}
              </Link>
            </Button>
          ) : (
            <Button asChild variant="light">
              <Link href="/contact-us">
                Request this visit
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          )}
          <Button asChild variant="outline-light">
            <Link href="/services">
              All services
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute top-20 -right-24 size-[24rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="The big picture"
                title={`A thoughtful approach to ${service.shortName.toLowerCase()}.`}
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-muted">
                {service.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {isEmergency ? (
                <div className="mt-8 flex gap-4 rounded-2xl border border-copper/25 bg-copper/10 p-5">
                  <CircleAlert className="mt-0.5 size-5 shrink-0 text-copper" />
                  <div>
                    <p className="text-sm font-semibold text-copper">
                      For a life-threatening emergency
                    </p>
                    <p className="mt-1 text-sm leading-6 text-ink/80">
                      If you have facial swelling that affects breathing or swallowing,
                      uncontrolled bleeding, or a suspected jaw fracture, call 911 or seek
                      urgent medical care right away.
                    </p>
                  </div>
                </div>
              ) : null}
            </Reveal>

            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-32">
                <div className="rounded-[1.75rem] border border-line bg-paper p-6 shadow-[0_30px_60px_-45px_rgba(16,39,28,0.45)] sm:p-7">
                  <span className="label-mono text-moss">What is included</span>
                  <ul className="mt-5 space-y-3">
                    {service.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 border-b border-line/70 pb-3 text-sm text-ink/75 last:border-b-0 last:pb-0"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime/60 text-forest">
                          <Check className="size-3" strokeWidth={2.6} />
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-6 w-full">
                    <Link href="/contact-us">
                      Request a visit
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <p className="mt-3 text-center text-[0.68rem] text-muted">
                    Or call{" "}
                    <Link href={site.phoneHref} className="font-medium text-forest hover:underline">
                      {site.phone}
                    </Link>
                  </p>
                </div>
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
              "radial-gradient(ellipse 45% 60% at 90% 10%, rgba(217,232,184,0.12), transparent 65%), radial-gradient(ellipse 40% 60% at 0% 100%, rgba(148,74,46,0.12), transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="What to expect"
              title="A clear path, start to finish."
              description="No mystery steps. Here is how this care typically unfolds at West Hills Dental."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {service.process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="h-full rounded-[1.5rem] border border-cream/12 bg-cream/[0.05] p-6 backdrop-blur-md">
                  <span className="font-mono text-[0.6rem] tracking-[0.2em] text-lime/75">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/70">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="rounded-[1.75rem] border border-forest/10 bg-lime/25 p-6 sm:p-8">
                <span className="label-mono text-forest/80">Good fit</span>
                <h2 className="mt-3 font-display text-3xl leading-snug text-forest">
                  This may be right for you if…
                </h2>
                <ul className="mt-5 space-y-3">
                  {service.goodFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-forest/80">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-copper" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <span className="label-mono text-moss">Keep exploring</span>
              <h2 className="mt-3 font-display text-3xl text-ink">Related care</h2>
              <div className="mt-5 grid gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="group flex items-center gap-4 rounded-2xl border border-line bg-paper p-4 transition-colors hover:border-forest/20 hover:bg-lime/15"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-forest/10 bg-cream text-forest transition-colors group-hover:bg-forest group-hover:text-cream">
                      <ServiceIcon icon={item.icon} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-xl text-ink">{item.name}</span>
                      <span className="block truncate text-xs text-muted">{item.tagline}</span>
                    </span>
                    <ArrowUpRight className="size-4 text-moss transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-copper"
              >
                View all services
                <ArrowRight className="size-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Common questions"
                title="A few things people ask."
                description="If your question is not here, our front office is happy to help."
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
                <FaqAccordion items={service.faqs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={service.shortName}
        title="Let us take the next step together."
        description="Request a visit or call our office. We will help you understand what to expect before you come in."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
