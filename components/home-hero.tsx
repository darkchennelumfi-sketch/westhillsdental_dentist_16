"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Asterisk, Clock, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function HomeHero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="grain relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 82% 8%, rgba(169,192,163,0.28), transparent 65%), radial-gradient(ellipse 45% 50% at 5% 90%, rgba(234,223,205,0.6), transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute -top-32 -left-40 size-[36rem] rounded-full border border-forest/[0.07]" />
      <div className="pointer-events-none absolute top-24 right-[42%] hidden h-48 w-32 dot-grid text-forest/15 lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-16 pb-16 sm:px-8 sm:pt-20 lg:pt-24 lg:pb-24">
        <motion.div
          variants={container}
          initial={reduced ? false : "hidden"}
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-10"
        >
          <div>
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-forest/15 bg-paper/70 px-3 py-1.5 font-mono text-[0.6rem] tracking-[0.18em] text-forest uppercase">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-copper opacity-70" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-copper" />
                </span>
                Now welcoming new patients
              </span>
              <span className="label-mono text-muted">Minot, North Dakota</span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 max-w-[13ch] text-balance font-display text-[clamp(3.3rem,7.8vw,7.2rem)] leading-[0.9] tracking-[-0.04em] text-ink"
            >
              Dentistry that feels like{" "}
              <span className="relative inline-block text-copper italic">
                care
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 18"
                  className="absolute -bottom-1 left-0 w-full text-copper/45"
                  fill="none"
                >
                  <path
                    d="M3 13.5C45 4.5 92 2.5 138 7.5c27 3 52 6 79 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-lg text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8"
            >
              Full-service family dentistry with the warmth of a small-town practice and the
              calm of a modern one. Dr. Stephanie Ness and our team care for every stage of
              your smile.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Request a visit
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/meet-our-team">
                  Meet the team
                  <Sparkles className="size-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-forest/10 pt-5 text-xs text-muted"
            >
              <span className="flex items-center gap-2">
                <Clock className="size-3.5 text-moss" />
                {site.hoursShort}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="size-3.5 text-moss" />
                {site.address.street}, Minot
              </span>
              <Link
                href={site.phoneHref}
                className="font-medium text-forest transition-colors hover:text-copper"
              >
                {site.phone}
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="pointer-events-none absolute top-1/2 left-1/2 size-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/10" />
            <div className="pointer-events-none absolute top-1/2 left-1/2 size-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-forest/[0.06]" />

            <div className="relative ml-auto w-[84%]">
              <div className="arch-frame relative aspect-[3/4] bg-sand shadow-[0_50px_90px_-45px_rgba(16,39,28,0.6)]">
                <Image
                  src="/images/team/emily.webp"
                  alt="Emily, registered dental hygienist at West Hills Dental"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 38vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-mono text-[0.55rem] tracking-[0.18em] text-lime/85 uppercase">
                    Registered Dental Hygienist
                  </p>
                  <p className="mt-1 font-display text-3xl text-cream">Emily</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={reduced ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 -left-1 w-44 rounded-[1.4rem] border border-forest/10 bg-paper/90 p-2 shadow-[0_24px_50px_-25px_rgba(16,39,28,0.4)] backdrop-blur-xl sm:top-10 sm:-left-4 sm:w-48"
            >
              <div className="relative aspect-square overflow-hidden rounded-[1.05rem]">
                <Image
                  src="/images/team/brenda.webp"
                  alt="Brenda, front office team member at West Hills Dental"
                  fill
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
              <div className="px-2 pt-2.5 pb-1.5">
                <p className="font-mono text-[0.52rem] tracking-[0.16em] text-moss uppercase">
                  Front Office
                </p>
                <p className="mt-0.5 font-display text-xl text-ink">Brenda</p>
                <p className="text-[0.68rem] leading-4 text-muted">The first hello.</p>
              </div>
            </motion.div>

            <motion.div
              animate={reduced ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute right-0 bottom-8 flex items-center gap-3 rounded-full border border-forest/10 bg-paper/90 py-2 pr-4 pl-2 shadow-[0_18px_40px_-22px_rgba(16,39,28,0.45)] backdrop-blur-xl sm:right-2"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-lime/60 text-forest">
                <Asterisk className="size-4" />
              </span>
              <span>
                <span className="block font-display text-lg leading-tight text-ink">
                  7 caring faces
                </span>
                <span className="block font-mono text-[0.5rem] tracking-[0.16em] text-muted uppercase">
                  One team
                </span>
              </span>
            </motion.div>

            <div className="absolute -right-2 -bottom-2 hidden text-forest/20 sm:block">
              <Asterisk className="size-12 animate-spin-slow" strokeWidth={0.7} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
