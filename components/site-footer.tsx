import Link from "next/link";
import { ArrowUpRight, Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { footerLinks, site } from "@/lib/site";
import { services } from "@/lib/services";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-ink text-cream">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 60% at 90% 0%, rgba(217,232,184,0.10), transparent 65%), radial-gradient(ellipse 40% 70% at 0% 100%, rgba(148,74,46,0.10), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -top-40 -right-32 size-[30rem] rounded-full border border-cream/[0.06]" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.55fr_0.55fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/70">
              Full-service dentistry for the entire family in Minot, North Dakota. Thoughtful
              care, modern comfort, and a team that knows your name.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="West Hills Dental on Facebook"
                className="inline-flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-lime/40 hover:bg-cream/5 hover:text-lime"
              >
                <Facebook className="size-4" />
              </Link>
              <span className="font-mono text-[0.6rem] tracking-[0.18em] text-cream/70 uppercase">
                Follow along
              </span>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h2 className="label-mono text-lime/70">{group.title}</h2>
              <ul className="mt-5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline text-sm text-cream/75 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {group.title === "Care" ? (
                <div className="mt-6 border-t border-cream/10 pt-4">
                  <p className="label-mono text-[0.55rem] text-cream/70">Popular services</p>
                  <ul className="mt-3 space-y-1.5">
                    {services.slice(0, 3).map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="text-xs text-cream/70 transition-colors hover:text-lime"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}

          <div>
            <h2 className="label-mono text-lime/70">Visit West Hills</h2>
            <address className="mt-5 space-y-3 text-sm not-italic">
              <Link
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-cream/75 transition-colors hover:text-cream"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-lime" />
                <span>
                  {site.address.street}, {site.address.suite}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </Link>
              <Link
                href={site.phoneHref}
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-cream"
              >
                <Phone className="size-4 shrink-0 text-lime" />
                {site.phone}
              </Link>
              <Link
                href={site.emailHref}
                className="flex items-center gap-3 text-cream/75 transition-colors hover:text-cream"
              >
                <Mail className="size-4 shrink-0 text-lime" />
                {site.email}
              </Link>
              <p className="flex items-start gap-3 text-cream/75">
                <Clock className="mt-0.5 size-4 shrink-0 text-lime" />
                <span>
                  {site.hours[0].days}
                  <br />
                  <span className="font-mono text-[0.65rem] tracking-wide text-cream/70">
                    {site.hours[0].time}
                  </span>
                </span>
              </p>
            </address>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 text-xs font-medium text-cream/80 transition-colors hover:border-lime/40 hover:text-lime"
            >
              Request an appointment
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-5 text-[0.68rem] text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="transition-colors hover:text-cream/70">
              Privacy Policy
            </Link>
            <span>Minot, North Dakota</span>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative -mb-6 overflow-hidden sm:-mb-10"
      >
        <span className="block translate-y-[18%] text-center font-display text-[clamp(5rem,17vw,17rem)] leading-none text-cream/[0.035] select-none">
          West Hills
        </span>
      </div>
    </footer>
  );
}
