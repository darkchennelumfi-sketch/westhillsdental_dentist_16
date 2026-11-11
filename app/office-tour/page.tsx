import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Coffee,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { OfficeMap } from "@/components/office-map";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Office Tour",
  description:
    "Get a feel for West Hills Dental before your first visit—what to expect, where to find us, and how we keep the experience calm.",
  alternates: { canonical: "/office-tour" },
};

const steps = [
  {
    number: "01",
    title: "Arrive",
    text: "Pull into our Elk Drive location and step into a calm, light-filled reception. No maze, no confusion.",
  },
  {
    number: "02",
    title: "Meet",
    text: "Our front office greets you by name, checks you in, and answers any questions before your visit begins.",
  },
  {
    number: "03",
    title: "Settle in",
    text: "Your hygienist or assistant walks you through what will happen next, at a pace that feels right.",
  },
];

const details = [
  {
    icon: Coffee,
    title: "A calmer waiting room",
    text: "A quiet place to arrive, take a breath, and get ready for your visit.",
  },
  {
    icon: MessageCircle,
    title: "No mystery appointments",
    text: "We explain what we are doing and why before we begin.",
  },
  {
    icon: HeartHandshake,
    title: "A gentle pace",
    text: "If you need a pause, say the word. We will make room for it.",
  },
];

export default function OfficeTourPage() {
  const tourTeam = ["emily", "glenda", "mariah"]
    .map((slug) => teamMembers.find((member) => member.slug === slug))
    .filter((member): member is (typeof teamMembers)[number] => Boolean(member));

  return (
    <>
      <PageHero
        eyebrow="Office tour"
        title={
          <>
            A calm space
            <br />
            on <span className="text-lime italic">Elk Drive</span>.
          </>
        }
        description="You do not have to wonder what a visit will feel like. Here is a little of what to expect when you walk through our door."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/contact-us">
              Request a visit
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline-light">
            <Link href={site.mapsUrl} target="_blank" rel="noreferrer">
              Get directions
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="From the door"
                title="The first five minutes, made simple."
                description="A good visit starts before you sit in the chair. Our team is here to make the arrival feel easy."
              />
              <div className="mt-10 grid gap-0">
                {steps.map((step, index) => (
                  <Reveal key={step.number} delay={index * 0.07}>
                    <div className="flex gap-5 border-t border-forest/10 py-5">
                      <span className="font-mono text-[0.6rem] tracking-[0.2em] text-copper">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl text-ink">{step.title}</h3>
                        <p className="mt-1.5 max-w-md text-sm leading-6 text-muted">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-forest/10 bg-forest p-5 text-cream shadow-[0_35px_70px_-40px_rgba(16,39,28,0.55)] sm:p-7">
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 60% at 85% 10%, rgba(217,232,184,0.15), transparent 65%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="label-mono text-lime/70">Find us</span>
                    <MapPin className="size-4 text-lime" />
                  </div>
                  <p className="mt-4 font-display text-4xl leading-none">
                    {site.address.street}
                    <br />
                    <span className="text-cream/70">{site.address.suite}</span>
                  </p>
                  <p className="mt-2 text-sm text-cream/70">
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>

                  <OfficeMap className="mt-7 border-cream/10" />

                  <div className="mt-5 flex flex-col gap-2.5 text-sm text-cream/70">
                    <p className="flex items-center gap-2.5">
                      <Clock className="size-4 text-lime" />
                      {site.hours[0].days} · {site.hours[0].time}
                    </p>
                    <Link
                      href={site.phoneHref}
                      className="flex items-center gap-2.5 transition-colors hover:text-lime"
                    >
                      <Phone className="size-4 text-lime" />
                      {site.phone}
                    </Link>
                  </div>
                  <Button asChild variant="light" className="mt-6 w-full">
                    <Link href={site.mapsUrl} target="_blank" rel="noreferrer">
                      Open in maps
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="The little things"
              title="Comfort is in the details."
              description="Small choices add up to a visit that feels easier—from the greeting at the desk to the pause before we begin."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {details.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <Reveal key={detail.title} delay={index * 0.08}>
                  <div className="h-full rounded-[1.5rem] border border-line bg-cream/60 p-6 transition-colors hover:bg-lime/20">
                    <span className="flex size-11 items-center justify-center rounded-2xl border border-forest/10 bg-paper text-forest">
                      <Icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-5 font-display text-2xl text-ink">{detail.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted">{detail.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="The people make the place"
                title="A familiar face is waiting."
                description="The room matters. The people matter more. Meet a few of the teammates who will make your visit feel like a conversation, not a transaction."
              />
            </Reveal>
            <Reveal delay={0.1} className="lg:justify-self-end">
              <Button asChild variant="secondary">
                <Link href="/meet-our-team">
                  Meet the whole team
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {tourTeam.map((member, index) => (
              <Reveal key={member.slug} delay={index * 0.08}>
                <Link
                  href="/meet-our-team"
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                >
                  <div className="arch-frame relative aspect-[4/3] w-full bg-sand">
                    <Image
                      src={member.image}
                      alt={member.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="font-mono text-[0.52rem] tracking-[0.16em] text-lime/80 uppercase">
                        {member.role}
                      </p>
                      <p className="mt-1 font-display text-2xl text-cream">{member.name}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="See it for yourself"
        title="We would love to show you around."
        description="Request a visit and come see the space, meet the team, and ask anything on your mind."
      />
    </>
  );
}
