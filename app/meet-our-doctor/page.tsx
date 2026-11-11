import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { LogoMark } from "@/components/logo";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meet Dr. Stephanie Ness",
  description:
    "Meet Dr. Stephanie Ness and the approach behind West Hills Dental — full-service family dentistry in Minot, North Dakota.",
  alternates: { canonical: "/meet-our-doctor" },
};

const principles = [
  {
    icon: MessageCircle,
    title: "Listen first",
    text: "Every visit starts with your story, your concerns, and what you want from your smile.",
  },
  {
    icon: Stethoscope,
    title: "Explain clearly",
    text: "You will see what we see and understand the why behind every recommendation.",
  },
  {
    icon: HeartHandshake,
    title: "Plan together",
    text: "Treatment fits your health, your priorities, and your life—not a one-size-fits-all template.",
  },
];

export default function MeetDoctorPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our doctor"
        title={
          <>
            Dr. Stephanie
            <br />
            <span className="text-lime italic">Ness</span>
          </>
        }
        description="A familiar face, a steady approach, and a practice built around family care in Minot, North Dakota."
        aside={
          <div className="overflow-hidden rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] backdrop-blur-xl">
            <div className="arch-frame relative mx-3 mt-3 aspect-[4/3] overflow-hidden bg-gradient-to-br from-moss via-forest to-ink">
              <div className="absolute inset-0 dot-grid text-cream/10" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <LogoMark className="size-10 text-lime/80" />
                <span className="mt-3 font-display text-7xl leading-none text-cream">SN</span>
              </div>
            </div>
            <div className="p-5 pt-4">
              <p className="font-display text-2xl text-cream">Dr. Stephanie Ness</p>
              <p className="mt-1 font-mono text-[0.58rem] tracking-[0.18em] text-lime/70 uppercase">
                Dentist · West Hills Dental
              </p>
              <div className="mt-4 flex items-center gap-2 border-t border-cream/10 pt-4 text-xs text-cream/70">
                <MapPin className="size-3.5 text-lime" />
                Minot, North Dakota
              </div>
            </div>
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
            <Link href="/meet-our-team">
              Meet the team
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32">
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <Badge>The practice</Badge>
                <h2 className="mt-5 text-balance font-display text-[clamp(2.4rem,4.8vw,4.4rem)] leading-[1.0] text-ink">
                  A familiar face in Minot.
                </h2>
                <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
                  Dr. Ness leads a team that believes good dentistry is both clinical and
                  human. The two are not separate.
                </p>
                <div className="mt-8 rounded-2xl border border-line bg-paper p-5">
                  <p className="label-mono text-moss">At a glance</p>
                  <ul className="mt-4 space-y-3 text-sm text-ink/75">
                    {[
                      "Full-service family dentistry",
                      "Care for every stage of life",
                      "Located on Elk Drive in Minot",
                      "Monday–Thursday, 7:30 AM – 3:30 PM",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-lime/60 text-forest">
                          <Check className="size-2.5" strokeWidth={3} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-5 text-pretty text-base leading-8 text-muted">
                <p className="text-lg leading-8 text-ink/85">
                  Dr. Stephanie Ness is the dentist at West Hills Dental in Minot, North Dakota.
                  She and our team offer full-service dentistry for the entire family, from
                  routine check-ups and cleanings to restorative, cosmetic, children’s, and
                  implant care.
                </p>
                <p>
                  The practice is built around a simple belief: the best dental care happens
                  when people feel listened to. That means taking time to understand your goals,
                  explaining what we see, and making a plan that fits your life—not a template.
                </p>
                <p>
                  Whether you are new to Minot or looking for a dental home for your family, you
                  will find a calm space, a familiar team, and care that meets you where you
                  are. We are glad you are considering West Hills.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {principles.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <div
                      key={principle.title}
                      className="rounded-2xl border border-line bg-paper p-5 transition-colors hover:bg-lime/15"
                    >
                      <span className="flex size-10 items-center justify-center rounded-xl bg-cream text-forest">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-4 font-display text-xl text-ink">{principle.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-muted">{principle.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 rounded-[1.5rem] border border-forest/10 bg-lime/30 p-6">
                <div className="flex-1">
                  <p className="font-display text-2xl text-forest">
                    “Your smile is part of your health—and your health is part of your life.”
                  </p>
                  <p className="mt-2 text-xs text-forest/80">
                    The way we think about care at West Hills Dental.
                  </p>
                </div>
                <Sparkles className="size-8 shrink-0 text-copper/60" strokeWidth={1} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come say hello"
        title="A dental home should feel like home."
        description="Request a visit with Dr. Ness and the West Hills team. We will take it from there."
      />
    </>
  );
}
