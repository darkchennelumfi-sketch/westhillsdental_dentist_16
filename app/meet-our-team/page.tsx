import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, HeartHandshake, Sparkles, Users } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamDirectory } from "@/components/team-directory";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet our Team",
  description:
    "Meet the front office, hygienists, and dental assistants who make West Hills Dental feel like home.",
  alternates: { canonical: "/meet-our-team" },
};

export default function MeetTeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our team"
        title={
          <>
            The people
            <br />
            behind the <span className="text-lime italic">care</span>.
          </>
        }
        description="Seven friendly faces, one shared standard: you should feel at home here. Get to know the people who will welcome you, care for you, and remember your name."
        aside={
          <div className="rounded-[1.75rem] border border-cream/15 bg-cream/[0.06] p-6 backdrop-blur-xl">
            <span className="label-mono text-lime/70">Our team at a glance</span>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div>
                <p className="font-display text-5xl leading-none text-cream">07</p>
                <p className="mt-1 text-xs text-cream/70">Team members</p>
              </div>
              <div>
                <p className="font-display text-5xl leading-none text-cream">03</p>
                <p className="mt-1 text-xs text-cream/70">Roles, one team</p>
              </div>
            </div>
            <div className="mt-5 space-y-2 border-t border-cream/10 pt-4 text-xs text-cream/75">
              <p>Front office · Hygienists · Assistants</p>
              <p>Minot, North Dakota</p>
            </div>
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
              Book with our team
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline-light">
            <Link href="/meet-our-doctor">
              Meet Dr. Ness
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute top-16 -right-24 size-[22rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Get to know us"
                title="Different strengths. One standard of care."
                description="Filter by role to meet the people who make up our front office, hygiene, and assisting teams. Every story is a little different—and every one of them is part of yours."
              />
              <div className="flex items-center gap-3 text-xs text-muted lg:pb-2">
                <Users className="size-4 text-moss" />
                <span>7 team members · 3 roles</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10" delay={0.08}>
            <TeamDirectory members={teamMembers} />
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-20 text-cream sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 85% 10%, rgba(217,232,184,0.12), transparent 65%), radial-gradient(ellipse 40% 60% at 5% 100%, rgba(148,74,46,0.12), transparent 65%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                tone="light"
                eyebrow="How we work"
                title={
                  <>
                    A team that works
                    <br />
                    around <span className="text-lime italic">you</span>.
                  </>
                }
                description="The best visits happen when everyone is on the same page. Ours is a simple one: listen, explain, and care for the person in the chair."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: HeartHandshake,
                    title: "Warmth first",
                    text: "A hello, a name, and a team that remembers what matters to you.",
                  },
                  {
                    icon: Sparkles,
                    title: "Detail-oriented",
                    text: "Careful hygiene, clear records, and follow-through on every detail.",
                  },
                  {
                    icon: Users,
                    title: "One shared plan",
                    text: "Front office, hygienists, and assistants work from the same notes.",
                  },
                  {
                    icon: ArrowRight,
                    title: "No runaround",
                    text: "Questions get answered, calls get returned, and next steps are clear.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-cream/12 bg-cream/[0.05] p-5 backdrop-blur-md transition-colors hover:bg-cream/[0.08]"
                    >
                      <span className="flex size-10 items-center justify-center rounded-xl border border-cream/10 bg-cream/5 text-lime">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <h3 className="mt-4 font-display text-xl text-cream">{item.title}</h3>
                      <p className="mt-1.5 text-xs leading-6 text-cream/70">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Meet us in person"
        title="The best way to know us is to visit."
        description="Request a visit and let our team take care of the rest. New patients are always welcome."
      />
    </>
  );
}
