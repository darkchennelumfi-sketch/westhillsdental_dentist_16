import type { Metadata } from "next";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Clock,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Printer,
  ShieldCheck,
} from "lucide-react";
import { AppointmentForm } from "@/components/appointment-form";
import { CtaBand } from "@/components/cta-band";
import { OfficeMap } from "@/components/office-map";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Request an appointment, call, or email West Hills Dental in Minot, ND. Find our address, office hours, phone, fax, and directions.",
  alternates: { canonical: "/contact-us" },
};

const contactRows: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}[] = [
  {
    icon: Phone,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: Printer,
    label: "Fax",
    value: site.fax,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: site.emailHref,
  },
  {
    icon: MapPin,
    label: "Address",
    value: `${site.address.street}, ${site.address.suite}, ${site.address.city}, ${site.address.state} ${site.address.zip}`,
    href: site.mapsUrl,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={
          <>
            Let us start
            <br />
            with a <span className="text-lime italic">hello</span>.
          </>
        }
        description="Request a visit, ask a question, or just tell us what is going on. A real person from our Minot office will follow up."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">The front office</span>
            <div className="mt-5 space-y-3 text-sm">
              <Link
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-lime"
              >
                <Phone className="size-4 text-lime" />
                {site.phone}
              </Link>
              <Link
                href={site.emailHref}
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-lime"
              >
                <Mail className="size-4 shrink-0 text-lime" />
                <span className="truncate">{site.email}</span>
              </Link>
              <Link
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-cream/75 transition-colors hover:text-lime"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
                <span>
                  {site.address.street}, {site.address.suite}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </Link>
            </div>
            <div className="mt-5 flex items-start gap-2 border-t border-cream/10 pt-4 text-xs text-cream/70">
              <Clock className="mt-0.5 size-3.5 shrink-0 text-lime" />
              <span>
                {site.hours[0].days}
                <br />
                <span className="font-mono text-[0.65rem] tracking-wide text-cream/70">
                  {site.hours[0].time}
                </span>
              </span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button asChild variant="light" size="sm">
                <Link href={site.phoneHref}>
                  <Phone className="size-3.5" />
                  Call
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="sm">
                <Link href={site.mapsUrl} target="_blank" rel="noreferrer">
                  Directions
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        }
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="#request">
              Request a visit
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

      <section
        id="request"
        className="relative scroll-mt-28 overflow-hidden bg-cream py-20 sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute top-20 -left-32 size-[24rem] rounded-full bg-lime/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <SectionHeading
                  eyebrow="Request an appointment"
                  title="Tell us what you need."
                  description="Share a few details and our front office will call or email to confirm a time. This is a request, not a confirmed booking."
                />

                <div className="mt-8 rounded-[1.75rem] border border-line bg-paper p-6">
                  <ul className="divide-y divide-line/80">
                    {contactRows.map((row) => {
                      const Icon = row.icon;
                      const value = (
                        <span className="flex items-start gap-3">
                          <Icon className="mt-0.5 size-4 shrink-0 text-moss" />
                          <span>
                            <span className="block font-mono text-[0.55rem] tracking-[0.16em] text-muted uppercase">
                              {row.label}
                            </span>
                            <span className="mt-1 block text-sm leading-6 text-ink/80">
                              {row.value}
                            </span>
                          </span>
                        </span>
                      );

                      return (
                        <li key={row.label} className="py-3.5 first:pt-0 last:pb-0">
                          {row.href ? (
                            <Link
                              href={row.href}
                              target={row.external ? "_blank" : undefined}
                              rel={row.external ? "noreferrer" : undefined}
                              className="block transition-colors hover:text-forest"
                            >
                              {value}
                            </Link>
                          ) : (
                            value
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
                    <p className="text-xs text-muted">{site.hours[0].days}</p>
                    <p className="font-mono text-[0.62rem] tracking-wide text-forest">
                      {site.hours[0].time}
                    </p>
                  </div>
                  <Link
                    href={site.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-moss transition-colors hover:text-forest"
                  >
                    <Facebook className="size-3.5" />
                    West Hills Dental on Facebook
                    <ArrowUpRight className="size-3" />
                  </Link>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-copper/20 bg-copper/[0.07] p-4">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-copper" />
                  <p className="text-xs leading-5 text-ink/75">
                    If you are in pain or have a dental emergency, please call us at{" "}
                    <Link href={site.phoneHref} className="font-medium text-copper">
                      {site.phone}
                    </Link>{" "}
                    instead of using the form.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <AppointmentForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-forest/10 bg-paper py-20 sm:py-24">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal>
              <div className="rounded-[1.75rem] border border-line bg-cream/60 p-5 sm:p-6">
                <OfficeMap />
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="label-mono text-moss">Find us</p>
                    <p className="mt-1 font-display text-2xl text-ink">
                      {site.address.street}, {site.address.suite}
                    </p>
                    <p className="text-sm text-muted">
                      {site.address.city}, {site.address.state} {site.address.zip}
                    </p>
                  </div>
                  <Button asChild variant="secondary" size="sm" className="shrink-0">
                    <Link href={site.mapsUrl} target="_blank" rel="noreferrer">
                      Open in maps
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="On Elk Drive"
                title="A convenient corner of Minot."
                description="Our office is at 2615 Elk Drive, Suite 2. If you are running late or need to reschedule, call us as soon as you can and we will help."
              />
              <dl className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-cream/60 p-4">
                  <dt className="label-mono text-moss">Monday – Thursday</dt>
                  <dd className="mt-2 font-display text-xl text-ink">{site.hours[0].time}</dd>
                </div>
                <div className="rounded-2xl border border-line bg-cream/60 p-4">
                  <dt className="label-mono text-moss">Friday – Sunday</dt>
                  <dd className="mt-2 font-display text-xl text-ink">Closed</dd>
                </div>
              </dl>
              <div className="mt-5 flex items-start gap-3 rounded-2xl bg-lime/25 p-4">
                <CalendarCheck className="mt-0.5 size-4 shrink-0 text-forest" />
                <p className="text-xs leading-5 text-forest/80">
                  New patients are always welcome. First visit?{" "}
                  <Link href="/new-patients" className="font-medium underline underline-offset-2">
                    See what to bring
                  </Link>
                  .
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/contact-us#request">
                    Request a visit
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
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="We are here"
        title="Prefer a conversation? Just call."
        description="Our front office is happy to answer questions, check availability, or help you find the right visit."
      />
    </>
  );
}
